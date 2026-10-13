"use client";

import { useId, useState } from "react";
import { AlertCircle, Check } from "lucide-react";

interface WaitingListProps {
  /** Kept for compatibility; the form is always the light pill. */
  light?: boolean;
  center?: boolean;
  large?: boolean;
  cta?: string;
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function WaitingList({ center = false, cta = "Join the waitlist" }: WaitingListProps) {
  const id = useId();
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "invalid" | "failed" | "done">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!EMAIL.test(email.trim())) {
      setState("invalid");
      return;
    }
    setState("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      if (!res.ok) throw new Error();
      setState("done");
    } catch {
      setState("failed");
    }
  }

  if (state === "done") {
    return (
      <div role="status" className={`flex w-full max-w-[480px] items-center gap-3 rounded-full bg-success-tint py-3 pr-5 pl-3 text-left ${center ? "mx-auto" : ""}`}>
        <span className="grid h-9 w-9 flex-none place-items-center rounded-full bg-success text-white">
          <Check size={18} strokeWidth={2.25} />
        </span>
        <span>
          <span className="block text-[15px] leading-5 font-semibold text-label">You&apos;re on the list.</span>
          <span className="block text-[13px] leading-[18px] text-label-2">We&apos;ll email {email.trim()} once, when Hushku is on the App Store and Google Play.</span>
        </span>
      </div>
    );
  }

  const msg =
    state === "invalid" ? "Enter an email like name@example.com." : state === "failed" ? "That didn’t go through. Try once more." : null;

  return (
    <form onSubmit={handleSubmit} noValidate className={`flex w-full max-w-[480px] flex-col gap-3 ${center ? "mx-auto" : ""}`}>
      <label htmlFor={id} className="sr-only">
        Email address
      </label>
      <div
        className={`flex flex-col gap-2 sm:flex-row sm:gap-0 sm:rounded-full sm:border sm:bg-white sm:p-1 sm:transition-shadow sm:focus-within:border-brand sm:focus-within:shadow-[0_0_0_3px_var(--color-brand-tint)] ${msg ? "sm:border-danger" : "sm:border-control"}`}
      >
        <input
          id={id}
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (state !== "loading") setState("idle");
          }}
          aria-invalid={msg ? true : undefined}
          aria-describedby={`${id}-msg`}
          className={`min-h-12 min-w-0 flex-1 rounded-full border bg-white px-5 text-[17px] text-label placeholder:text-label-3 outline-none focus:border-brand sm:min-h-11 sm:border-0 ${msg ? "border-danger" : "border-control"}`}
        />
        <button
          type="submit"
          disabled={state === "loading"}
          aria-busy={state === "loading" || undefined}
          className="relative inline-flex min-h-11 items-center justify-center rounded-full bg-brand px-5 text-[17px] font-medium tracking-[-0.011em] whitespace-nowrap text-white transition-[background-color,transform] duration-150 hover:bg-brand-hover active:scale-[0.97] active:bg-brand-pressed disabled:cursor-default"
        >
          <span className={state === "loading" ? "invisible" : ""}>{cta}</span>
          {state === "loading" ? (
            <span aria-hidden className="absolute h-[18px] w-[18px] animate-spin rounded-full border-2 border-white border-r-transparent" />
          ) : null}
        </button>
      </div>
      <p
        id={`${id}-msg`}
        aria-live="polite"
        className={`flex items-center gap-1.5 text-[13px] leading-[18px] ${center ? "justify-center" : ""} ${msg ? "font-medium text-danger" : "text-label-2"}`}
      >
        {msg ? <AlertCircle size={16} strokeWidth={2} /> : null}
        {msg ?? "Free for every dog and cat. One email on launch day."}
      </p>
    </form>
  );
}
