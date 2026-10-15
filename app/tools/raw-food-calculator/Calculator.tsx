"use client";

import { useState } from "react";
import { Field, Segmented, NumberInput, Result, Note, ToolGrid, toKg, fmt } from "../_ui/kit";

/**
 * Daily amount as % of body weight: adults 2–3% (2.5% typical); puppies about 8% at 0–4 months,
 * tapering to 2.5% at 12 months (EPOCH portion guides via Omni Calculator). Split 80/10/5/5.
 */
const ADULT = { lose: 2, keep: 2.5, active: 3 };

function puppyPct(months: number) {
  if (months <= 4) return 8;
  if (months >= 12) return 2.5;
  return 8 - ((months - 4) / 8) * 5.5;
}

export default function Calculator() {
  const [unit, setUnit] = useState<"kg" | "lb">("kg");
  const [weight, setWeight] = useState("20");
  const [stage, setStage] = useState<"adult" | "puppy">("adult");
  const [goal, setGoal] = useState<keyof typeof ADULT>("keep");
  const [months, setMonths] = useState("4");

  const kg = toKg(parseFloat(weight) || 0, unit);
  const pct = stage === "adult" ? ADULT[goal] : puppyPct(parseFloat(months) || 0);
  const grams = kg * 1000 * (pct / 100);
  const show = (g: number) => (unit === "kg" ? `${fmt(g)} g` : `${fmt(g / 28.35, 1)} oz`);
  const parts = [
    { label: "Muscle meat", share: 0.8, eg: "Beef, chicken, lamb, heart" },
    { label: "Raw edible bone", share: 0.1, eg: "Chicken wings or necks; never cooked bones" },
    { label: "Liver", share: 0.05, eg: "Beef or chicken liver" },
    { label: "Other secreting organ", share: 0.05, eg: "Kidney, spleen" },
  ];

  return (
    <ToolGrid>
      <div className="flex flex-col gap-6">
        <Field label="Dog's weight" htmlFor="raw-w" hint="Use ideal weight if your dog is over- or underweight.">
          <NumberInput id="raw-w" value={weight} onChange={setWeight} min={0.5} unit={<Segmented label="Weight unit" value={unit} onChange={setUnit} options={[{ value: "kg", label: "kg" }, { value: "lb", label: "lb" }]} />} />
        </Field>
        <Field label="Age">
          <Segmented label="Age" value={stage} onChange={setStage} options={[{ value: "adult", label: "Adult" }, { value: "puppy", label: "Puppy" }]} />
        </Field>
        {stage === "adult" ? (
          <Field label="Goal">
            <Segmented label="Goal" value={goal} onChange={setGoal} options={[{ value: "lose", label: "Lose weight", sub: "2%" }, { value: "keep", label: "Maintain", sub: "2.5%" }, { value: "active", label: "Very active", sub: "3%" }]} />
          </Field>
        ) : (
          <Field label="Age in months" htmlFor="raw-m" hint="For puppies, use current weight and recalculate every week or two as they grow.">
            <NumberInput id="raw-m" value={months} onChange={setMonths} min={2} max={12} step={1} unit={<span className="text-[15px] text-label-2">months</span>} />
          </Field>
        )}
      </div>
      <div className="flex flex-col gap-4 lg:sticky lg:top-24">
        <Result label="Raw food per day" value={kg > 0 ? show(grams) : "–"}>
          <p className="text-[15px] leading-[22px] text-label-2">{fmt(pct, 1)}% of body weight a day{stage === "puppy" ? ", split into 3 or 4 meals" : ", usually in 2 meals"}.</p>
        </Result>
        <ul className="flex flex-col gap-2">
          {parts.map((p) => (
            <li key={p.label} className="flex items-start justify-between gap-3 rounded-2xl bg-bg-2 px-4 py-3">
              <span><span className="block text-[15px] font-semibold text-label">{p.label} ({p.share * 100}%)</span><span className="text-[13px] text-label-2">{p.eg}</span></span>
              <span className="text-[17px] font-semibold tabular-nums text-label">{show(grams * p.share)}</span>
            </li>
          ))}
        </ul>
        <Note>Vets disagree about raw feeding. The AVMA discourages raw diets because they can carry Salmonella, E. coli and Listeria that affect pets and people, and home-made diets are often missing nutrients. If you feed raw, use a complete commercial raw food or a recipe from a board-certified veterinary nutritionist, and keep strict kitchen hygiene.</Note>
      </div>
    </ToolGrid>
  );
}
