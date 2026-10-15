"use client";

import { useState } from "react";
import { Field, Segmented, Choice, NumberInput, Result, ToolGrid, Emergency, Note, toKg, fmt } from "../_ui/kit";

/**
 * Merck Veterinary Manual: signs in dogs after 15–30 g/kg raw onion, in cats after 5 g/kg;
 * garlic is 3–5 times more toxic than onion. Dried forms are concentrated: fresh onion is ~89% water,
 * so powder counts as roughly 8× fresh (our approximation, stated on the page).
 */
const FOODS = [
  { value: "onion", label: "Onion (raw or cooked)", sub: "Also leeks, shallots, spring onions", factor: 1 },
  { value: "garlic", label: "Garlic (fresh)", sub: "Counted as 5× onion, the cautious end of 3–5×", factor: 5 },
  { value: "onion-powder", label: "Onion powder or dried onion", sub: "About 8× fresh onion", factor: 8 },
  { value: "garlic-powder", label: "Garlic powder", sub: "About 8× fresh garlic", factor: 40 },
  { value: "chives", label: "Chives", sub: "Counted like onion", factor: 1 },
] as const;

export default function Calculator() {
  const [species, setSpecies] = useState<"dog" | "cat">("dog");
  const [wUnit, setWUnit] = useState<"kg" | "lb">("kg");
  const [weight, setWeight] = useState("10");
  const [food, setFood] = useState<string>("onion");
  const [amount, setAmount] = useState("50");

  const kg = toKg(parseFloat(weight) || 0, wUnit);
  const f = FOODS.find((x) => x.value === food)!;
  const onionEq = (parseFloat(amount) || 0) * f.factor;
  const perKg = kg > 0 ? onionEq / kg : 0;
  const threshold = species === "dog" ? 15 : 5;
  const pct = (perKg / threshold) * 100;
  const tone = pct >= 100 ? "bad" : pct >= 25 ? "warn" : "good";

  return (
    <ToolGrid>
      <div className="flex flex-col gap-6">
        <Field label="Pet">
          <Segmented label="Pet" value={species} onChange={setSpecies} options={[{ value: "dog", label: "Dog" }, { value: "cat", label: "Cat" }]} />
        </Field>
        <Field label="Weight" htmlFor="on-w">
          <NumberInput id="on-w" value={weight} onChange={setWeight} min={0.5} unit={<Segmented label="Weight unit" value={wUnit} onChange={setWUnit} options={[{ value: "kg", label: "kg" }, { value: "lb", label: "lb" }]} />} />
        </Field>
        <Field label="What was eaten">
          <Choice label="What was eaten" value={food} onChange={setFood} options={FOODS.map((x) => ({ value: x.value, label: x.label, sub: x.sub }))} />
        </Field>
        <Field label="Amount eaten" htmlFor="on-a" hint="A medium onion weighs about 150 g; a garlic clove about 3–5 g; a teaspoon of powder about 3 g.">
          <NumberInput id="on-a" value={amount} onChange={setAmount} min={0} unit={<span className="text-[15px] text-label-2">g</span>} />
        </Field>
      </div>
      <div className="flex flex-col gap-4 lg:sticky lg:top-24">
        <Result label="Share of the level linked to poisoning" value={kg > 0 ? `${fmt(pct)}%` : "–"} tone={tone}>
          <p className="text-[15px] leading-[22px] text-label-2">
            About {fmt(perKg, 1)} g of onion-equivalent per kg. Signs have been seen in {species === "dog" ? "dogs after 15–30 g/kg" : "cats after 5 g/kg, and even less than a teaspoon of cooked onion"}.
          </p>
        </Result>
        {pct >= 25 || species === "cat" ? (
          <Emergency><strong>Call your vet today.</strong> Onion and garlic damage red blood cells. Signs such as weakness, pale gums, red-brown urine and fast breathing often take 1 to 5 days to appear, so early treatment matters even if your pet seems fine.</Emergency>
        ) : (
          <Note>Small, one-off amounts in dogs are unlikely to cause anaemia, but the effect builds up with repeated eating. Watch for weakness, pale gums or dark urine over the next 5 days and call your vet if you see any.</Note>
        )}
        <Note>The powder and garlic multipliers are approximations; individual sensitivity varies, and Japanese breeds such as Akitas and Shibas are thought to be more sensitive.</Note>
      </div>
    </ToolGrid>
  );
}
