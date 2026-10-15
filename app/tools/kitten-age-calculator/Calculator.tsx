"use client";

import { useState } from "react";
import { Field, Segmented, Choice, NumberInput, Result, Note, ToolGrid, fmt } from "../_ui/kit";

/**
 * Milestones and weights from Alley Cat Allies' kitten age guide. Each answer narrows a week range;
 * the estimate is where the ranges overlap.
 */
type Opt = { value: string; label: string; min: number; max: number };
const EYES: Opt[] = [
  { value: "closed", label: "Eyes closed", min: 0, max: 1.5 },
  { value: "opening", label: "Eyes opening, blue", min: 1, max: 2.5 },
  { value: "blue", label: "Eyes open and blue", min: 2, max: 6 },
  { value: "adult", label: "Eyes changing or changed to adult colour", min: 4, max: 52 },
];
const MOVE: Opt[] = [
  { value: "none", label: "Can't walk; wriggles and crawls", min: 0, max: 2.5 },
  { value: "wobbly", label: "Standing, first wobbly steps", min: 2.5, max: 4 },
  { value: "steady", label: "Walking steadily, starting to play", min: 3.5, max: 6 },
  { value: "runs", label: "Running, pouncing, climbing", min: 4.5, max: 52 },
];
const EATS: Opt[] = [
  { value: "bottle", label: "Only drinks milk or formula", min: 0, max: 4 },
  { value: "weaning", label: "Laps formula, tries soft food", min: 3.5, max: 6 },
  { value: "food", label: "Eats kitten food on its own", min: 5, max: 52 },
];
/** Weight bands in ounces → weeks (Alley Cat Allies). Beyond 8 weeks, about 1 lb per month. */
function weightWeeks(oz: number): [number, number] {
  if (oz <= 0) return [0, 52];
  if (oz < 8) return [0, 1.5];
  if (oz < 11) return [1, 3];
  if (oz < 14.5) return [2, 4];
  if (oz < 17) return [3, 6];
  if (oz < 28) return [5, 8];
  if (oz < 40) return [7, 11];
  const months = oz / 16;
  return [Math.max(8, months * 4.3 - 2), months * 4.3 + 3];
}

export default function Calculator() {
  const [unit, setUnit] = useState<"g" | "oz">("g");
  const [weight, setWeight] = useState("");
  const [eyes, setEyes] = useState("blue");
  const [move, setMove] = useState("steady");
  const [eats, setEats] = useState("weaning");

  const oz = unit === "oz" ? parseFloat(weight) || 0 : (parseFloat(weight) || 0) / 28.35;
  const ranges: [number, number][] = [
    [EYES.find((o) => o.value === eyes)!.min, EYES.find((o) => o.value === eyes)!.max],
    [MOVE.find((o) => o.value === move)!.min, MOVE.find((o) => o.value === move)!.max],
    [EATS.find((o) => o.value === eats)!.min, EATS.find((o) => o.value === eats)!.max],
  ];
  if (oz > 0) ranges.push(weightWeeks(oz));
  let lo = Math.max(...ranges.map((r) => r[0]));
  let hi = Math.min(...ranges.map((r) => r[1]));
  const clash = lo > hi;
  if (clash) { lo = Math.min(...ranges.map((r) => r[0])); hi = Math.max(...ranges.map((r) => r[1])); }
  const r = (n: number) => Math.max(0, Math.round(n));
  const label = hi >= 52 ? `${r(lo)}+ weeks` : r(lo) === r(hi) ? `About ${r(lo)} weeks` : `${r(lo)} to ${r(hi)} weeks`;
  const young = hi <= 4;

  return (
    <ToolGrid>
      <div className="flex flex-col gap-6">
        <Field label="Weight (optional)" htmlFor="kit-w" hint="Use kitchen scales in grams if you can.">
          <NumberInput id="kit-w" value={weight} onChange={setWeight} min={0} unit={<Segmented label="Unit" value={unit} onChange={setUnit} options={[{ value: "g", label: "g" }, { value: "oz", label: "oz" }]} />} />
        </Field>
        <Field label="Eyes"><Choice label="Eyes" value={eyes} onChange={setEyes} options={EYES} /></Field>
        <Field label="Moving"><Choice label="Moving" value={move} onChange={setMove} options={MOVE} /></Field>
        <Field label="Eating"><Choice label="Eating" value={eats} onChange={setEats} options={EATS} /></Field>
      </div>
      <div className="flex flex-col gap-4 lg:sticky lg:top-24">
        <Result label="Estimated age" value={label} tone={young ? "warn" : "default"}>
          <p className="text-[15px] leading-[22px] text-label-2">
            {clash ? "Your answers point to different ages, so this is a wide range. Weight is often the most reliable guide." : oz > 0 ? `${fmt(oz * 28.35)} g (${fmt(oz, 1)} oz).` : "Add a weight to narrow it down."}
          </p>
        </Result>
        {young ? (
          <Note><strong>Under 4 weeks, kittens can&apos;t keep themselves warm or eat alone.</strong> Keep them warm, never give cow&apos;s milk, and contact a vet or local rescue today for kitten formula and feeding advice. If you found them outside, watch from a distance for a few hours first: the mother may be nearby.</Note>
        ) : (
          <Note>Kittens can usually be fully weaned from about 8 weeks, when they weigh around 2 lb (900 g), and are ready for first vaccinations from 6 to 8 weeks. Ask a vet to confirm the age at the first check.</Note>
        )}
        <dl className="grid grid-cols-2 gap-2 text-[13px] text-label-2">
          <div className="rounded-xl bg-bg-2 p-3"><dt className="font-semibold text-label">Under 1 week</dt><dd>85–225 g, eyes shut</dd></div>
          <div className="rounded-xl bg-bg-2 p-3"><dt className="font-semibold text-label">1–2 weeks</dt><dd>225–310 g, eyes opening</dd></div>
          <div className="rounded-xl bg-bg-2 p-3"><dt className="font-semibold text-label">3 weeks</dt><dd>210–410 g, first steps</dd></div>
          <div className="rounded-xl bg-bg-2 p-3"><dt className="font-semibold text-label">4–5 weeks</dt><dd>225–475 g, adult eye colour</dd></div>
          <div className="col-span-2 rounded-xl bg-bg-2 p-3"><dt className="font-semibold text-label">8 weeks</dt><dd>About 900 g (2 lb), looks like a small cat</dd></div>
        </dl>
      </div>
    </ToolGrid>
  );
}
