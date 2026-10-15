"use client";

import { useState } from "react";
import { Field, Segmented, NumberInput, Result, Note, ToolGrid, fmt } from "../_ui/kit";

/** Dog age chart attributed to AAHA: human years at dog ages 1–16, by adult size. */
const DOG_CHART: Record<"small" | "medium" | "large" | "giant", number[]> = {
  small: [15, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68, 72, 76, 80],
  medium: [15, 24, 28, 33, 37, 42, 47, 51, 56, 60, 65, 69, 74, 78, 83, 87],
  large: [15, 24, 30, 35, 40, 45, 50, 55, 61, 66, 72, 77, 82, 88, 93, 99],
  giant: [15, 24, 32, 37, 42, 49, 56, 64, 71, 78, 86, 93, 101, 108, 115, 123],
};
const SIZES = [
  { value: "small", label: "Small", sub: "20 lb / 9 kg or less" },
  { value: "medium", label: "Medium", sub: "21–50 lb" },
  { value: "large", label: "Large", sub: "51–90 lb" },
  { value: "giant", label: "Giant", sub: "Over 90 lb" },
] as const;

/** Human-equivalent age; linear inside the chart, extended at the last year's rate after 16. */
function dogYears(age: number, size: keyof typeof DOG_CHART) {
  const c = DOG_CHART[size];
  if (age <= 1) return 15 * age;
  if (age >= 16) return c[15] + (age - 16) * (c[15] - c[14]);
  const i = Math.floor(age);
  return c[i - 1] + (age - i) * (c[i] - c[i - 1]);
}
function catYears(age: number) {
  if (age <= 1) return 15 * age;
  if (age <= 2) return 15 + (age - 1) * 9;
  return 24 + (age - 2) * 4;
}

function stage(species: "dog" | "cat", age: number, size: keyof typeof DOG_CHART) {
  if (species === "cat") {
    if (age < 1) return { name: "Kitten", tip: "Vaccinations, neutering and lots of play and gentle handling." };
    if (age < 7) return { name: "Young adult", tip: "Yearly check-ups, measured meals and daily play to keep a healthy weight." };
    if (age < 11) return { name: "Mature adult", tip: "Watch weight and dental health; consider twice-yearly vet checks from now." };
    return { name: "Senior", tip: "Twice-yearly vet checks with blood and blood pressure tests; easy access to litter, food and warm beds." };
  }
  const senior = { small: 10, medium: 9, large: 8, giant: 7 }[size];
  if (age < 1) return { name: "Puppy", tip: "Vaccinations, socialisation and short, frequent training sessions." };
  if (age < 3) return { name: "Young adult", tip: "Peak energy: plenty of exercise and training, yearly check-ups." };
  if (age < senior) return { name: "Adult", tip: "Keep weight in check and keep up yearly check-ups and dental care." };
  return { name: "Senior", tip: "Twice-yearly vet checks, joint-friendly exercise and a watch for lumps, thirst and weight changes." };
}

export default function PetAgeCalculator() {
  const [species, setSpecies] = useState<"dog" | "cat">("dog");
  const [size, setSize] = useState<keyof typeof DOG_CHART>("medium");
  const [years, setYears] = useState("5");
  const [months, setMonths] = useState("0");

  const age = Math.max(0, (parseFloat(years) || 0) + (parseFloat(months) || 0) / 12);
  const human = species === "dog" ? dogYears(age, size) : catYears(age);
  const st = stage(species, age, size);

  return (
    <ToolGrid>
      <div className="flex flex-col gap-6">
        <Field label="Pet">
          <Segmented label="Pet" value={species} onChange={setSpecies} options={[{ value: "dog", label: "Dog" }, { value: "cat", label: "Cat" }]} />
        </Field>
        {species === "dog" ? (
          <Field label="Adult size" hint="Use your dog's expected adult weight, even for puppies.">
            <Segmented label="Adult size" value={size} onChange={setSize} options={SIZES.map((s) => ({ ...s }))} />
          </Field>
        ) : null}
        <div className="grid grid-cols-2 gap-4">
          <Field label="Years" htmlFor="age-years">
            <NumberInput id="age-years" value={years} onChange={setYears} min={0} max={30} step={1} />
          </Field>
          <Field label="Months" htmlFor="age-months">
            <NumberInput id="age-months" value={months} onChange={setMonths} min={0} max={11} step={1} />
          </Field>
        </div>
      </div>

      <div className="flex flex-col gap-4 lg:sticky lg:top-24">
        <Result label="Age in human years" value={age > 0 ? fmt(human) : "–"} unit={age > 0 ? "years" : undefined}>
          <p className="text-[19px] font-semibold text-label">{st.name}</p>
          <p className="text-[15px] leading-[22px] text-label-2">{st.tip}</p>
        </Result>
        {species === "dog" ? (
          <div className="overflow-hidden rounded-3xl border border-separator">
            <table className="w-full text-center text-[14px] tabular-nums">
              <caption className="bg-bg-2 px-4 py-3 text-left text-[13px] font-semibold text-label-2">Dog age chart (human years)</caption>
              <thead><tr className="text-label-2"><th className="py-2 font-medium">Age</th>{SIZES.map((s) => <th key={s.value} className={`py-2 font-medium ${s.value === size ? "text-label" : ""}`}>{s.label}</th>)}</tr></thead>
              <tbody>
                {[1, 2, 3, 5, 7, 10, 12, 14, 16].map((a) => (
                  <tr key={a} className={`border-t border-separator ${Math.floor(age) === a ? "bg-brand-tint" : ""}`}>
                    <th scope="row" className="py-1.5 font-medium">{a}</th>
                    {SIZES.map((s) => <td key={s.value} className={`py-1.5 ${s.value === size ? "font-semibold" : "text-label-2"}`}>{DOG_CHART[s.value][a - 1]}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : null}
        <Note>Under a year, the first-year figure is scaled by age; between chart years the result is interpolated. These are guides: size, breed and health all affect how a pet ages.</Note>
      </div>
    </ToolGrid>
  );
}
