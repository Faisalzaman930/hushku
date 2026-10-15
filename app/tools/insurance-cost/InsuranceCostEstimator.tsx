"use client";

import { useState } from "react";
import { Field, Segmented, Choice, Result, Note, ToolGrid, fmt } from "../_ui/kit";

/**
 * Starting point: NAPHIA 2025 State of the Industry average accident & illness premiums
 * (US $749.29 dog / $386.47 cat a year; Canada C$1,070.20 / C$550.35).
 * The adjustments below are illustrative ranges showing the direction each factor usually moves
 * a quote; they are not published industry figures, and the page says so.
 */
const AVG = {
  us: { dog: 749.29, cat: 386.47, cur: "$", note: "US" },
  ca: { dog: 1070.2, cat: 550.35, cur: "C$", note: "Canada" },
} as const;

const AGE = [
  { value: "young", label: "Under 2 years", sub: "Usually below average", lo: 0.7, hi: 0.95 },
  { value: "adult", label: "2 to 7 years", sub: "Around average", lo: 0.85, hi: 1.2 },
  { value: "senior", label: "8 years or older", sub: "Usually well above average", lo: 1.3, hi: 2.2 },
] as const;
const BREED = [
  { value: "mixed", label: "Mixed breed or low-risk breed", lo: 0.85, hi: 1.0 },
  { value: "pure", label: "Breed with known health problems", sub: "e.g. French Bulldog, Bulldog, Great Dane", lo: 1.15, hi: 1.6 },
] as const;
const COVER = [
  { value: "accident", label: "Accident only", sub: "Injuries, not illness", lo: 0.2, hi: 0.4 },
  { value: "ai", label: "Accident and illness", sub: "The most common policy", lo: 1, hi: 1 },
  { value: "ai-wellness", label: "Accident, illness and wellness", sub: "Adds routine care", lo: 1.2, hi: 1.5 },
] as const;
const AREA = [
  { value: "low", label: "Small town or rural", lo: 0.85, hi: 0.95 },
  { value: "mid", label: "Suburban", lo: 0.95, hi: 1.05 },
  { value: "high", label: "Big city", lo: 1.05, hi: 1.3 },
] as const;

export default function InsuranceCostEstimator() {
  const [country, setCountry] = useState<"us" | "ca">("us");
  const [pet, setPet] = useState<"dog" | "cat">("dog");
  const [age, setAge] = useState<string>("adult");
  const [breed, setBreed] = useState<string>("mixed");
  const [cover, setCover] = useState<string>("ai");
  const [area, setArea] = useState<string>("mid");

  const base: number = AVG[country][pet];
  const pick = <T extends { value: string; lo: number; hi: number }>(list: readonly T[], v: string) => list.find((x) => x.value === v) ?? list[0];
  const f: { lo: number; hi: number }[] = [pick(AGE, age), pick(BREED, breed), pick(COVER, cover), pick(AREA, area)];
  const lo = f.reduce((m: number, x) => m * x.lo, base) / 12;
  const hi = f.reduce((m: number, x) => m * x.hi, base) / 12;
  const cur = AVG[country].cur;

  return (
    <ToolGrid>
      <div className="flex flex-col gap-6">
        <Field label="Where you live">
          <Segmented label="Country" value={country} onChange={setCountry} options={[{ value: "us", label: "United States" }, { value: "ca", label: "Canada" }]} />
        </Field>
        <Field label="Pet">
          <Segmented label="Pet" value={pet} onChange={setPet} options={[{ value: "dog", label: "Dog" }, { value: "cat", label: "Cat" }]} />
        </Field>
        <Field label="Age when you buy the policy">
          <Choice label="Age" value={age} onChange={setAge} options={AGE.map((o) => ({ value: o.value, label: o.label, sub: o.sub }))} />
        </Field>
        <Field label="Breed">
          <Choice label="Breed" value={breed} onChange={setBreed} options={BREED.map((o) => ({ value: o.value, label: o.label, sub: "sub" in o ? o.sub : undefined }))} />
        </Field>
        <Field label="Type of cover">
          <Choice label="Cover" value={cover} onChange={setCover} options={COVER.map((o) => ({ value: o.value, label: o.label, sub: o.sub }))} />
        </Field>
        <Field label="Area">
          <Segmented label="Area" value={area} onChange={setArea} options={AREA.map((o) => ({ value: o.value, label: o.label }))} />
        </Field>
      </div>

      <div className="flex flex-col gap-4 lg:sticky lg:top-24">
        <Result label="Likely monthly premium" value={`${cur}${fmt(lo)} to ${cur}${fmt(hi)}`}>
          <p className="text-[15px] leading-[22px] text-label-2">
            About {cur}{fmt(lo * 12)} to {cur}{fmt(hi * 12)} a year.
          </p>
        </Result>
        <div className="rounded-3xl bg-bg-2 p-5">
          <p className="text-[13px] font-semibold text-label-2">{AVG[country].note} average, accident and illness ({pet})</p>
          <p className="mt-1 text-[24px] font-semibold text-label tabular-nums">{cur}{fmt(base / 12, 2)} a month</p>
          <p className="text-[13px] text-label-2">{cur}{fmt(base, 2)} a year · NAPHIA, 2025 report</p>
        </div>
        <Note>Only the average comes from published data. The range around it is our rough illustration of how age, breed, cover and location usually move a quote, so get real quotes before you decide. A higher deductible or lower reimbursement rate lowers the premium; pre-existing conditions are usually excluded.</Note>
      </div>
    </ToolGrid>
  );
}
