"use client";

import { useState } from "react";
import { Field, Segmented, Choice, NumberInput, Result, Note, ToolGrid, toKg, fmt } from "../_ui/kit";

/** Life stage factors (× RER) from the AAHA 2021 nutrition guidelines; midpoints where a range is given. */
const DOG = [
  { value: "puppy-young", label: "Puppy under 4 months", factor: 3.0 },
  { value: "puppy", label: "Puppy 4 months to adult", factor: 2.0 },
  { value: "neutered", label: "Neutered adult", factor: 1.6 },
  { value: "intact", label: "Intact adult", factor: 1.8 },
  { value: "inactive", label: "Inactive or gains weight easily", factor: 1.2 },
  { value: "active", label: "Active or working (light work)", factor: 2.0 },
] as const;
const CAT = [
  { value: "kitten", label: "Kitten", factor: 2.5 },
  { value: "neutered", label: "Neutered adult", factor: 1.2 },
  { value: "intact", label: "Intact adult", factor: 1.4 },
  { value: "inactive", label: "Inactive or gains weight easily", factor: 1.0 },
] as const;

export default function PetFeedingCalculator() {
  const [species, setSpecies] = useState<"dog" | "cat">("dog");
  const [unit, setUnit] = useState<"kg" | "lb">("kg");
  const [weight, setWeight] = useState("10");
  const [stage, setStage] = useState<string>("neutered");
  const [foodUnit, setFoodUnit] = useState<"cup" | "kg">("cup");
  const [kcal, setKcal] = useState("350");
  const [meals, setMeals] = useState<"1" | "2" | "3" | "4">("2");

  const stages = species === "dog" ? DOG : CAT;
  const factor = (stages as readonly { value: string; factor: number }[]).find((s) => s.value === stage)?.factor ?? stages[1].factor;
  const kg = toKg(parseFloat(weight) || 0, unit);
  const rer = kg > 0 ? 70 * Math.pow(kg, 0.75) : 0;
  const daily = rer * factor;
  const density = parseFloat(kcal) || 0;
  const amount = density > 0 ? (foodUnit === "cup" ? daily / density : (daily / density) * 1000) : 0;
  const perMeal = amount / Number(meals);
  const ok = kg > 0 && density > 0;

  const switchSpecies = (s: "dog" | "cat") => {
    setSpecies(s);
    setStage("neutered");
    setWeight(s === "dog" ? "10" : "4");
    setKcal(s === "dog" ? "350" : "400");
  };

  return (
    <ToolGrid>
      <div className="flex flex-col gap-6">
        <Field label="Pet">
          <Segmented label="Pet" value={species} onChange={switchSpecies} options={[{ value: "dog", label: "Dog" }, { value: "cat", label: "Cat" }]} />
        </Field>
        <Field label="Current weight" htmlFor="feed-weight" hint="If your pet is overweight, use their ideal weight and agree a plan with your vet.">
          <NumberInput id="feed-weight" value={weight} onChange={setWeight} min={0.2} max={120} unit={<Segmented label="Weight unit" value={unit} onChange={setUnit} options={[{ value: "kg", label: "kg" }, { value: "lb", label: "lb" }]} />} />
        </Field>
        <Field label="Life stage">
          <Choice label="Life stage" value={stage} onChange={setStage} options={stages.map((s) => ({ value: s.value, label: s.label, sub: `${s.factor} × RER` }))} />
        </Field>
        <Field label="Calories in your food" htmlFor="feed-kcal" hint="Printed on the bag or tin as kcal per cup or kcal/kg. Typical dry food is 300 to 450 kcal per cup.">
          <NumberInput id="feed-kcal" value={kcal} onChange={setKcal} min={1} unit={<Segmented label="Calorie unit" value={foodUnit} onChange={(u) => { setFoodUnit(u); setKcal(u === "cup" ? (species === "dog" ? "350" : "400") : (species === "dog" ? "3700" : "4000")); }} options={[{ value: "cup", label: "per cup" }, { value: "kg", label: "per kg" }]} />} />
        </Field>
        <Field label="Meals a day">
          <Segmented label="Meals a day" value={meals} onChange={setMeals} options={[{ value: "1", label: "1" }, { value: "2", label: "2" }, { value: "3", label: "3" }, { value: "4", label: "4" }]} />
        </Field>
      </div>

      <div className="flex flex-col gap-4 lg:sticky lg:top-24">
        <Result label="Feed per day" value={ok ? (foodUnit === "cup" ? fmt(amount, 1) : fmt(amount)) : "–"} unit={foodUnit === "cup" ? "cups" : "g"}>
          <p className="text-[15px] leading-[22px] text-label-2">
            {ok ? <>That&apos;s {foodUnit === "cup" ? `${fmt(perMeal, 2)} cups` : `${fmt(perMeal)} g`} per meal, {meals} {meals === "1" ? "meal" : "meals"} a day, for about {fmt(daily)} kcal a day.</> : "Enter a weight and your food's calories."}
          </p>
        </Result>
        {ok ? (
          <dl className="grid grid-cols-2 gap-3 text-[15px]">
            <div className="rounded-2xl bg-bg-2 p-4"><dt className="text-label-2">Resting energy (RER)</dt><dd className="text-[21px] font-semibold text-label tabular-nums">{fmt(rer)} kcal</dd></div>
            <div className="rounded-2xl bg-bg-2 p-4"><dt className="text-label-2">Treat allowance (10%)</dt><dd className="text-[21px] font-semibold text-label tabular-nums">{fmt(daily * 0.1)} kcal</dd></div>
          </dl>
        ) : null}
        <Note>A starting point: weigh your pet every 2 to 4 weeks and change the amount by about 10% if they gain or lose weight. If you give treats, feed slightly less food. Cups are standard 8 fl oz measuring cups, levelled, not mugs or scoops.</Note>
      </div>
    </ToolGrid>
  );
}
