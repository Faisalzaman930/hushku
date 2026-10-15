"use client";

import { useState } from "react";
import { Field, Segmented, NumberInput, Result, Note, ToolGrid, toKg, fmt } from "../_ui/kit";

/**
 * Daily calories = RER at target weight × 1.0 (dogs) or 0.8 (cats), the AAHA 2021 weight-loss factors.
 * Safe loss: dogs 1–2% of body weight a week, cats 0.5–1% (cats risk fatty liver if they lose too fast).
 */
export default function Calculator() {
  const [species, setSpecies] = useState<"dog" | "cat">("dog");
  const [unit, setUnit] = useState<"kg" | "lb">("kg");
  const [current, setCurrent] = useState("30");
  const [target, setTarget] = useState("25");
  const [kcal, setKcal] = useState("350");

  const cur = toKg(parseFloat(current) || 0, unit);
  const tgt = toKg(parseFloat(target) || 0, unit);
  const ok = cur > 0 && tgt > 0 && tgt < cur;
  const factor = species === "dog" ? 1.0 : 0.8;
  const daily = tgt > 0 ? 70 * Math.pow(tgt, 0.75) * factor : 0;
  const [slow, fast] = species === "dog" ? [0.01, 0.02] : [0.005, 0.01];
  const weeks = (rate: number) => (ok ? Math.ceil(Math.log(tgt / cur) / Math.log(1 - rate)) : 0);
  const show = (k: number) => (unit === "kg" ? `${fmt(k, 1)} kg` : `${fmt(k / 0.453592, 1)} lb`);
  const cups = (parseFloat(kcal) || 0) > 0 ? daily / parseFloat(kcal) : 0;
  const addWeeks = (w: number) => new Date(Date.now() + w * 7 * 86400000).toLocaleDateString("en-GB", { month: "long", year: "numeric" });

  return (
    <ToolGrid>
      <div className="flex flex-col gap-6">
        <Field label="Pet">
          <Segmented label="Pet" value={species} onChange={(s) => { setSpecies(s); setCurrent(s === "dog" ? "30" : "6.5"); setTarget(s === "dog" ? "25" : "5"); setKcal(s === "dog" ? "350" : "400"); }} options={[{ value: "dog", label: "Dog" }, { value: "cat", label: "Cat" }]} />
        </Field>
        <Field label="Current weight" htmlFor="wl-c">
          <NumberInput id="wl-c" value={current} onChange={setCurrent} min={0.5} unit={<Segmented label="Weight unit" value={unit} onChange={setUnit} options={[{ value: "kg", label: "kg" }, { value: "lb", label: "lb" }]} />} />
        </Field>
        <Field label="Target weight" htmlFor="wl-t" hint="Ideally set by your vet. Not sure? Our body condition score check gives a rough target.">
          <NumberInput id="wl-t" value={target} onChange={setTarget} min={0.5} unit={<span className="text-[15px] text-label-2">{unit}</span>} />
        </Field>
        <Field label="Calories in the food (optional)" htmlFor="wl-k" hint="kcal per cup, from the bag. Weight-loss foods let pets eat more volume for fewer calories.">
          <NumberInput id="wl-k" value={kcal} onChange={setKcal} min={0} unit={<span className="text-[15px] text-label-2">kcal per cup</span>} />
        </Field>
      </div>
      <div className="flex flex-col gap-4 lg:sticky lg:top-24">
        <Result label="Daily calories for weight loss" value={ok ? fmt(daily) : "–"} unit="kcal" tone="default">
          <p className="text-[15px] leading-[22px] text-label-2">
            {ok ? <>Including treats. {cups > 0 ? <>About {fmt(cups, 1)} cups a day of your food. </> : null}To lose {show(cur - tgt)}.</> : "Enter a target lower than the current weight."}
          </p>
        </Result>
        {ok ? (
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-bg-2 p-4"><p className="text-[13px] text-label-2">Steady pace ({fmt(slow * 100, 1)}% a week)</p><p className="text-[21px] font-semibold text-label">{weeks(slow)} weeks</p><p className="text-[13px] text-label-2">by {addWeeks(weeks(slow))}</p></div>
            <div className="rounded-2xl bg-bg-2 p-4"><p className="text-[13px] text-label-2">Fastest safe pace ({fmt(fast * 100)}% a week)</p><p className="text-[21px] font-semibold text-label">{weeks(fast)} weeks</p><p className="text-[13px] text-label-2">by {addWeeks(weeks(fast))}</p></div>
          </div>
        ) : null}
        {ok ? <p className="text-[15px] text-label-2">First weekly goal: lose about {show(cur * slow)} to {show(cur * fast)}.</p> : null}
        <Note>{species === "cat" ? "Never put a cat on a crash diet: cats that stop eating or lose weight fast can develop a serious liver disease (hepatic lipidosis). " : ""}Weigh every 2 weeks. If weight isn&apos;t moving after 4 weeks, cut calories by about 10% with your vet&apos;s advice. Check with your vet before starting, especially if your pet has a health condition.</Note>
      </div>
    </ToolGrid>
  );
}
