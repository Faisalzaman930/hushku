"use client";

import { useState } from "react";
import { Field, Segmented, Result, Note, ToolGrid, fmt } from "../_ui/kit";

/** Rover "True Cost of Pet Parenthood" survey, May 2026 (US, annual ranges in USD). */
type Item = { label: string; lo: number; hi: number; optional?: boolean };
const DOG: Record<"puppy" | "adult" | "senior", Item[]> = {
  puppy: [
    { label: "Food", lo: 575, hi: 4775 }, { label: "Treats and chews", lo: 110, hi: 530 }, { label: "Gear and supplies", lo: 110, hi: 640 },
    { label: "Vet wellness visits", lo: 145, hi: 305 }, { label: "Flea, tick and worm prevention", lo: 295, hi: 355 }, { label: "Training", lo: 235, hi: 385 },
    { label: "Dental care", lo: 55, hi: 370 }, { label: "Toys", lo: 30, hi: 95 }, { label: "Pet insurance", lo: 175, hi: 880, optional: true },
  ],
  adult: [
    { label: "Food", lo: 785, hi: 2635 }, { label: "Treats and chews", lo: 55, hi: 360 }, { label: "Gear and supplies", lo: 75, hi: 175 },
    { label: "Vet wellness visits", lo: 80, hi: 135 }, { label: "Flea, tick and worm prevention", lo: 295, hi: 360 }, { label: "Training", lo: 40, hi: 290 },
    { label: "Dental care", lo: 55, hi: 490 }, { label: "Toys", lo: 5, hi: 90 }, { label: "Pet insurance", lo: 520, hi: 1230, optional: true },
  ],
  senior: [
    { label: "Food", lo: 1060, hi: 2545 }, { label: "Treats and chews", lo: 55, hi: 360 }, { label: "Gear and supplies", lo: 205, hi: 380 },
    { label: "Vet wellness visits", lo: 125, hi: 355 }, { label: "Flea, tick and worm prevention", lo: 295, hi: 360 }, { label: "Training", lo: 40, hi: 290 },
    { label: "Dental care", lo: 435, hi: 490 }, { label: "Toys", lo: 5, hi: 90 }, { label: "Pet insurance", lo: 630, hi: 4595, optional: true },
  ],
};
const DOG_EXTRAS: Item[] = [
  { label: "Professional grooming", lo: 300, hi: 975, optional: true },
  { label: "Walking or daycare", lo: 210, hi: 375, optional: true },
];
const CAT: Record<"kitten" | "senior", Item[]> = {
  kitten: [
    { label: "Food and treats", lo: 320, hi: 1870 }, { label: "Litter", lo: 125, hi: 580 }, { label: "Toys", lo: 20, hi: 245 },
    { label: "Gear", lo: 20, hi: 330 }, { label: "Vet exam", lo: 80, hi: 200 }, { label: "Vaccines", lo: 65, hi: 155 },
    { label: "Flea prevention", lo: 200, hi: 310 }, { label: "Medical and dental", lo: 145, hi: 900 }, { label: "Pet insurance", lo: 120, hi: 835, optional: true },
  ],
  senior: [
    { label: "Food and treats", lo: 275, hi: 1860 }, { label: "Litter", lo: 125, hi: 580 }, { label: "Toys", lo: 0, hi: 50 },
    { label: "Gear", lo: 30, hi: 245 }, { label: "Vet exam", lo: 155, hi: 395 }, { label: "Vaccines", lo: 30, hi: 100 },
    { label: "Flea prevention", lo: 200, hi: 310 }, { label: "Medical and dental", lo: 580, hi: 1335 }, { label: "Pet insurance", lo: 540, hi: 1140, optional: true },
  ],
};
const UPFRONT = { dog: [1195, 4650], cat: [705, 2960] } as const;

export default function Calculator() {
  const [pet, setPet] = useState<"dog" | "cat">("dog");
  const [dogStage, setDogStage] = useState<"puppy" | "adult" | "senior">("adult");
  const [catStage, setCatStage] = useState<"kitten" | "senior">("kitten");
  const [off, setOff] = useState<Record<string, boolean>>({ "Professional grooming": true, "Walking or daycare": true });
  const [first, setFirst] = useState<"yes" | "no">("no");

  const items = pet === "dog" ? [...DOG[dogStage], ...DOG_EXTRAS] : CAT[catStage];
  const used = items.filter((i) => !off[i.label]);
  const lo = used.reduce((s, i) => s + i.lo, 0) + (first === "yes" ? UPFRONT[pet][0] : 0);
  const hi = used.reduce((s, i) => s + i.hi, 0) + (first === "yes" ? UPFRONT[pet][1] : 0);

  return (
    <ToolGrid>
      <div className="flex flex-col gap-6">
        <Field label="Pet">
          <Segmented label="Pet" value={pet} onChange={setPet} options={[{ value: "dog", label: "Dog" }, { value: "cat", label: "Cat" }]} />
        </Field>
        {pet === "dog" ? (
          <Field label="Life stage">
            <Segmented label="Life stage" value={dogStage} onChange={setDogStage} options={[{ value: "puppy", label: "Puppy" }, { value: "adult", label: "Adult" }, { value: "senior", label: "Senior" }]} />
          </Field>
        ) : (
          <Field label="Life stage">
            <Segmented label="Life stage" value={catStage} onChange={setCatStage} options={[{ value: "kitten", label: "Kitten or adult" }, { value: "senior", label: "Senior" }]} />
          </Field>
        )}
        <Field label="Include one-off costs of getting a pet?" hint={`Adoption or breeder fee, spay or neuter, microchip, first vaccines and supplies: $${fmt(UPFRONT[pet][0])} to $${fmt(UPFRONT[pet][1])}.`}>
          <Segmented label="One-off costs" value={first} onChange={setFirst} options={[{ value: "no", label: "No" }, { value: "yes", label: "Yes, first year" }]} />
        </Field>
        <Field label="What to include">
          <ul className="flex flex-col gap-1.5">
            {items.map((i) => (
              <li key={i.label}>
                <label className="flex min-h-11 cursor-pointer items-center gap-3 rounded-xl bg-bg-2 px-3 py-2 text-[15px]">
                  <input type="checkbox" checked={!off[i.label]} onChange={() => setOff((o) => ({ ...o, [i.label]: !o[i.label] }))} className="h-5 w-5 accent-[var(--color-label)]" />
                  <span className="flex-1 text-label">{i.label}</span>
                  <span className="tabular-nums text-label-2">${fmt(i.lo)}–${fmt(i.hi)}</span>
                </label>
              </li>
            ))}
          </ul>
        </Field>
      </div>
      <div className="flex flex-col gap-4 lg:sticky lg:top-24">
        <Result label={first === "yes" ? "First year" : "Per year"} value={`$${fmt(lo)}–$${fmt(hi)}`}>
          <p className="text-[15px] leading-[22px] text-label-2">About ${fmt(lo / 12)} to ${fmt(hi / 12)} a month{first === "yes" ? ", including one-off costs" : ""}.</p>
        </Result>
        <Note>US figures from Rover&apos;s May 2026 survey of pet parents; the wide ranges reflect pet size, food choice and where you live. Not included: emergencies (often $300 to $2,500 for a dog), boarding or sitters when you travel, and end-of-life care. Set aside an emergency fund or compare insurance.</Note>
      </div>
    </ToolGrid>
  );
}
