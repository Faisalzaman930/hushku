"use client";

import { useState } from "react";
import { Field, Segmented, Choice, Emergency, Note } from "../_ui/kit";

export default function Calculator() {
  const [what, setWhat] = useState<string>("grapes");
  const [when, setWhen] = useState<"now" | "hours" | "day">("now");
  const [signs, setSigns] = useState<"no" | "yes">("no");

  const steps =
    signs === "yes"
      ? ["Go to an emergency vet now and call ahead so they can prepare.", "Bring the packaging or a sample of what was eaten.", "Kidney damage is likely being treated at this stage, so don't wait for a callback."]
      : when === "now"
        ? ["Call your vet or an emergency vet now. Within about 2 hours, they can often make your dog vomit and give charcoal to stop absorption.", "Don't make your dog sick at home unless a vet tells you to.", "Note how many and what kind, and bring the packaging."]
        : when === "hours"
          ? ["Call your vet now. It's too late to bring them back up safely at home, but your vet may still give fluids and check kidney values.", "Expect blood tests over the next 2 to 3 days."]
          : ["Call your vet today for kidney blood tests, even if your dog seems well.", "Watch for vomiting, not eating, drinking more or less than usual, and producing little or no urine."];

  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-6 md:grid-cols-3">
        <Field label="What did they eat?">
          <Choice label="What did they eat" value={what} onChange={setWhat} options={[{ value: "grapes", label: "Grapes" }, { value: "raisins", label: "Raisins, sultanas or currants" }, { value: "baked", label: "Baked goods with raisins" }]} />
        </Field>
        <Field label="When?">
          <Choice label="When" value={when} onChange={setWhen} options={[{ value: "now", label: "In the last 2 hours" }, { value: "hours", label: "2 to 12 hours ago" }, { value: "day", label: "More than 12 hours ago" }]} />
        </Field>
        <Field label="Any vomiting, weakness or not eating?">
          <Segmented label="Signs" value={signs} onChange={setSigns} options={[{ value: "no", label: "No" }, { value: "yes", label: "Yes" }]} />
        </Field>
      </div>
      <Emergency>
        <p className="text-[19px] font-semibold">{signs === "yes" ? "This is an emergency." : "Treat this as an emergency, whatever the amount."}</p>
        <p className="mt-1">There is no known safe amount of {what === "grapes" ? "grapes" : "raisins"} for dogs: some dogs develop kidney failure after a few, while others eat many without harm, and there&apos;s no way to tell in advance.{what === "baked" ? " Baked goods may also contain chocolate, xylitol or nutmeg." : ""}</p>
      </Emergency>
      <section aria-labelledby="grape-steps" className="flex flex-col gap-3">
        <h2 id="grape-steps" className="text-[21px] font-semibold text-label">What to do now</h2>
        <ol className="flex flex-col gap-2">
          {steps.map((s, i) => (
            <li key={s} className="flex gap-3 rounded-2xl bg-bg-2 px-4 py-3 text-[17px] leading-[25px] text-label">
              <span className="grid h-7 w-7 flex-none place-items-center rounded-full bg-label text-[13px] font-semibold text-white">{i + 1}</span>
              <span className="pt-0.5">{s}</span>
            </li>
          ))}
        </ol>
      </section>
      <Note>In the US, the ASPCA Animal Poison Control Center is on (888) 426-4435 (a fee may apply). Cats rarely eat grapes, and their risk is less studied; call your vet if yours does.</Note>
    </div>
  );
}
