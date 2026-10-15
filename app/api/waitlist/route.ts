import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email, page, source } = await req.json();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const apiKey = process.env.BREVO_API_KEY;
  const listId = Number(process.env.BREVO_LIST_ID);

  if (!apiKey || !listId) {
    return NextResponse.json({ error: "Server misconfigured" }, { status: 500 });
  }

  const clip = (v: unknown) => (typeof v === "string" ? v.slice(0, 120) : undefined);
  // Where the signup came from, so launch emails can match what each person was interested in.
  // SIGNUP_SOURCE / SIGNUP_PAGE / SIGNUP_TOPIC must exist as text attributes in Brevo; if they
  // don't, the contact is still saved without them (see the retry below).
  const attributes = {
    SIGNUP_SOURCE: clip(source),
    SIGNUP_PAGE: clip(page),
    SIGNUP_TOPIC: clip(typeof source === "string" ? source.split(":")[0] : undefined),
  };

  const send = (withAttributes: boolean) =>
    fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        email,
        listIds: [listId],
        updateEnabled: true, // add to list even if contact already exists
        ...(withAttributes ? { attributes } : {}),
      }),
    });

  let res = await send(true);
  if (!res.ok && res.status === 400) {
    const err = await res.clone().json().catch(() => ({}));
    if (err.code !== "duplicate_parameter") res = await send(false);
  }

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    // code 300 = contact already exists — still a success for us
    if (err.code !== "duplicate_parameter") {
      return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
    }
  }

  return NextResponse.json({ success: true });
}
