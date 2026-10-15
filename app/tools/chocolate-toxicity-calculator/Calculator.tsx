"use client";

import { useState } from "react";
import { Field, Segmented, Choice, NumberInput, Result, Note, ToolGrid, RiskBands, Emergency, toKg, fmt } from "../_ui/kit";

/** Methylxanthines (theobromine + caffeine), mg per oz, from the Merck Veterinary Manual. */
const TYPES = [
  { value: "white", label: "White chocolate", sub: "1.1 mg per oz", mgOz: 1.1 },
  { value: "milk", label: "Milk chocolate", sub: "64 mg per oz", mgOz: 64 },
  { value: "dark", label: "Dark or semisweet chocolate", sub: "150–160 mg per oz", mgOz: 160 },
  { value: "baking", label: "Baking (unsweetened) chocolate", sub: "440 mg per oz", mgOz: 440 },
  { value: "cocoa", label: "Dry cocoa powder", sub: "807 mg per oz", mgOz: 807 },
  { value: "mulch", label: "Cocoa bean mulch", sub: "Up to 255 mg per oz", mgOz: 255 },
] as const;

const BANDS = [
  { at: 0, label: "Unlikely to cause signs" },
  { at: 20, label: "Mild signs: vomiting, diarrhea, thirst" },
  { at: 40, label: "Heart effects: racing heart, restlessness" },
  { at: 60, label: "Severe: tremors and seizures possible" },
];

export default function Calculator() {
  const [wUnit, setWUnit] = useState<"kg" | "lb">("kg");
  const [weight, setWeight] = useState("10");
  const [type, setType] = useState<string>("milk");
  const [aUnit, setAUnit] = useState<"g" | "oz">("g");
  const [amount, setAmount] = useState("50");

  const kg = toKg(parseFloat(weight) || 0, wUnit);
  const oz = aUnit === "oz" ? parseFloat(amount) || 0 : (parseFloat(amount) || 0) / 28.35;
  const t = TYPES.find((x) => x.value === type)!;
  const mg = oz * t.mgOz;
  const dose = kg > 0 ? mg / kg : 0;
  const tone = dose >= 40 ? "bad" : dose >= 20 ? "warn" : "good";
  const band = [...BANDS].reverse().find((b) => dose >= b.at)!;

  return (
    <ToolGrid>
      <div className="flex flex-col gap-6">
        <Field label="Your dog's weight" htmlFor="choc-w">
          <NumberInput id="choc-w" value={weight} onChange={setWeight} min={0.5} unit={<Segmented label="Weight unit" value={wUnit} onChange={setWUnit} options={[{ value: "kg", label: "kg" }, { value: "lb", label: "lb" }]} />} />
        </Field>
        <Field label="Type of chocolate">
          <Choice label="Type of chocolate" value={type} onChange={setType} options={TYPES.map((x) => ({ value: x.value, label: x.label, sub: x.sub }))} />
        </Field>
        <Field label="How much was eaten (most it could have been)" htmlFor="choc-a" hint="Check the wrapper for the weight. For reference, a standard milk chocolate bar is often 1.55 oz (43 g) and a large bar 100 g (3.5 oz).">
          <NumberInput id="choc-a" value={amount} onChange={setAmount} min={0} unit={<Segmented label="Amount unit" value={aUnit} onChange={setAUnit} options={[{ value: "g", label: "g" }, { value: "oz", label: "oz" }]} />} />
        </Field>
      </div>
      <div className="flex flex-col gap-4 lg:sticky lg:top-24">
        <Result label="Estimated dose" value={kg > 0 ? fmt(dose, 1) : "–"} unit="mg/kg" tone={tone}>
          <p className="text-[19px] font-semibold text-label">{band.label}</p>
          <p className="text-[15px] leading-[22px] text-label-2">About {fmt(mg)} mg of theobromine and caffeine for a {fmt(kg, 1)} kg dog.</p>
        </Result>
        <RiskBands value={dose} unit="mg/kg" bands={BANDS} />
        {dose >= 20 ? (
          <Emergency><strong>Call your vet or an emergency vet now.</strong> Treatment works best within the first few hours, often before signs appear. Don&apos;t make your dog sick unless a vet tells you to. In the US you can also call the ASPCA Animal Poison Control Center on (888) 426-4435 (a fee may apply).</Emergency>
        ) : (
          <Note>Below the level where signs usually start, but dogs vary and the fat and sugar can still upset the stomach. Call your vet if your dog is a puppy, has a heart condition, or shows any vomiting, restlessness or a racing heart. Signs can take 6 to 12 hours to appear.</Note>
        )}
      </div>
    </ToolGrid>
  );
}
