"use client";

import { useState } from "react";
import { Field, Segmented, Choice, NumberInput, Result, Note, ToolGrid, toKg, fmt } from "../_ui/kit";

/**
 * Body condition score (1–9) from three hands-on checks, following the WSAVA BCS charts.
 * Each answer maps to a score; the result is their rounded average.
 */
const RIBS = [
  { value: "9", label: "I can't feel them at all, even pressing firmly", sub: "Under a thick layer of fat" },
  { value: "7", label: "Hard to feel; I have to press", sub: "Covered by a noticeable fat layer" },
  { value: "6", label: "I can feel them, with a slight fat cover" },
  { value: "5", label: "Easy to feel with light pressure, not visible" },
  { value: "3", label: "Very easy to feel; may be slightly visible", sub: "Little or no fat over them" },
  { value: "1", label: "Clearly visible from a distance" },
] as const;
const WAIST = [
  { value: "8", label: "No waist; the back is broad or bulges" },
  { value: "6", label: "A slight waist, barely visible" },
  { value: "5", label: "A clear waist behind the ribs" },
  { value: "3", label: "A very narrow, pronounced waist", sub: "Hip bones may show" },
] as const;
const TUCK_DOG = [
  { value: "8", label: "The belly hangs down or is rounded" },
  { value: "6", label: "Flat from ribs to hind legs" },
  { value: "5", label: "Tucks up behind the ribs" },
  { value: "3", label: "Tucks up sharply; very lean" },
] as const;
const TUCK_CAT = [
  { value: "8", label: "Rounded belly with a prominent fat pad" },
  { value: "6", label: "Slight belly fat pad, little tuck" },
  { value: "5", label: "Minimal belly fat pad" },
  { value: "3", label: "No fat pad; belly tucked up" },
] as const;

const BANDS = [
  { max: 3, label: "Underweight", tone: "warn" as const, text: "Ribs and bones are easy to see or feel with little fat. Ask your vet to check for an underlying cause before increasing food." },
  { max: 5, label: "Ideal", tone: "good" as const, text: "Ribs easy to feel without excess fat, with a visible waist and tuck. Keep feeding measured meals and weigh regularly." },
  { max: 7, label: "Overweight", tone: "warn" as const, text: "Carrying extra fat. Measure meals, cut back on treats and add activity; your vet can set a target weight and calorie plan." },
  { max: 9, label: "Obese", tone: "bad" as const, text: "Significant extra fat, which raises the risk of arthritis, diabetes and a shorter life. Ask your vet for a weight loss plan; don't cut food drastically, especially for cats." },
];

export default function PetBMIChecker() {
  const [species, setSpecies] = useState<"dog" | "cat">("dog");
  const [ribs, setRibs] = useState<string>("5");
  const [waist, setWaist] = useState<string>("5");
  const [tuck, setTuck] = useState<string>("5");
  const [unit, setUnit] = useState<"kg" | "lb">("kg");
  const [weight, setWeight] = useState("");

  const score = Math.round((Number(ribs) * 2 + Number(waist) + Number(tuck)) / 4);
  const ideal = species === "dog" ? 5 : 5;
  const band = BANDS.find((b) => score <= b.max)!;
  const kg = toKg(parseFloat(weight) || 0, unit);
  const over = Math.max(0, score - ideal);
  const target = kg > 0 && over > 0 ? kg / (1 + over * 0.1) : 0;
  const show = (v: number) => (unit === "kg" ? `${fmt(v, 1)} kg` : `${fmt(v / 0.453592, 1)} lb`);

  return (
    <ToolGrid>
      <div className="flex flex-col gap-6">
        <Field label="Pet">
          <Segmented label="Pet" value={species} onChange={setSpecies} options={[{ value: "dog", label: "Dog" }, { value: "cat", label: "Cat" }]} />
        </Field>
        <Field label="1. Run your hands along the ribs. Can you feel them?">
          <Choice label="Ribs" value={ribs} onChange={setRibs} options={RIBS.map((o) => ({ ...o }))} />
        </Field>
        <Field label="2. Look down from above. Is there a waist behind the ribs?">
          <Choice label="Waist" value={waist} onChange={setWaist} options={WAIST.map((o) => ({ ...o }))} />
        </Field>
        <Field label="3. Look from the side. What does the belly do?">
          <Choice label="Belly" value={tuck} onChange={setTuck} options={(species === "dog" ? TUCK_DOG : TUCK_CAT).map((o) => ({ ...o }))} />
        </Field>
        <Field label="Current weight (optional)" htmlFor="bcs-weight" hint="Add it to get a rough target weight.">
          <NumberInput id="bcs-weight" value={weight} onChange={setWeight} min={0.2} unit={<Segmented label="Weight unit" value={unit} onChange={setUnit} options={[{ value: "kg", label: "kg" }, { value: "lb", label: "lb" }]} />} />
        </Field>
      </div>

      <div className="flex flex-col gap-4 lg:sticky lg:top-24">
        <Result label="Body condition score" value={`${score}/9`} tone={band.tone}>
          <p className="text-[19px] font-semibold text-label">{band.label}</p>
          <p className="text-[15px] leading-[22px] text-label-2">{band.text}</p>
        </Result>
        <ol className="grid grid-cols-9 gap-1" aria-label="Score scale from 1 to 9">
          {Array.from({ length: 9 }, (_, i) => i + 1).map((n) => (
            <li key={n} className={`flex h-10 items-center justify-center rounded-lg text-[13px] font-semibold tabular-nums ${n === score ? "bg-label text-white" : n >= 4 && n <= 5 ? "bg-success-tint text-label" : "bg-bg-2 text-label-2"}`}>{n}</li>
          ))}
        </ol>
        <p className="text-[13px] text-label-2">1 to 3 underweight · 4 to 5 ideal · 6 to 7 overweight · 8 to 9 obese</p>
        {target > 0 ? (
          <Result label="Rough target weight" value={show(target)}>
            <p className="text-[15px] leading-[22px] text-label-2">About {show(kg - target)} to lose. Aim for 1 to 2% of body weight a week, with your vet&apos;s guidance.</p>
          </Result>
        ) : null}
        <Note>Long or thick coats hide body shape, so use your hands, not just your eyes. Each point above 5 is roughly 10% over ideal weight. Your vet can confirm the score.</Note>
      </div>
    </ToolGrid>
  );
}
