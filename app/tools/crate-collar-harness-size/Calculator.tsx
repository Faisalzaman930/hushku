"use client";

import { useState } from "react";
import { Field, Segmented, NumberInput, Result, Note, ToolGrid, fmt } from "../_ui/kit";

/** Crate: AKC says measure standing, nose to tail tip and top of head to floor, and add 3–4 in. */
const CRATES = [18, 22, 24, 30, 36, 42, 48, 54];

export default function Calculator() {
  const [unit, setUnit] = useState<"in" | "cm">("in");
  const [length, setLength] = useState("28");
  const [height, setHeight] = useState("20");
  const [neck, setNeck] = useState("14");
  const [chest, setChest] = useState("24");

  const toIn = (v: string) => (unit === "in" ? parseFloat(v) || 0 : (parseFloat(v) || 0) / 2.54);
  const show = (inch: number) => (unit === "in" ? `${fmt(inch)} in` : `${fmt(inch * 2.54)} cm`);
  const L = toIn(length), H = toIn(height), N = toIn(neck), C = toIn(chest);
  const needL = L + 4, needH = H + 4;
  const crate = CRATES.find((c) => c >= needL);
  const sizeName = (c?: number) => (!c ? "Extra large (over 54 in)" : c <= 22 ? "Extra small" : c <= 24 ? "Small" : c <= 30 ? "Medium" : c <= 36 ? "Intermediate" : c <= 42 ? "Large" : c <= 48 ? "Extra large" : "XXL");

  return (
    <ToolGrid>
      <div className="flex flex-col gap-6">
        <Field label="Units">
          <Segmented label="Units" value={unit} onChange={(u) => { setUnit(u); if (u === "cm") { setLength("71"); setHeight("51"); setNeck("36"); setChest("61"); } else { setLength("28"); setHeight("20"); setNeck("14"); setChest("24"); } }} options={[{ value: "in", label: "inches" }, { value: "cm", label: "cm" }]} />
        </Field>
        <Field label="Length: nose to tip of tail" htmlFor="sz-l" hint="Dog standing, tape along the back.">
          <NumberInput id="sz-l" value={length} onChange={setLength} min={0} unit={<span className="text-[15px] text-label-2">{unit}</span>} />
        </Field>
        <Field label="Height: floor to top of head" htmlFor="sz-h" hint="Standing, or to the ear tips if they stand up.">
          <NumberInput id="sz-h" value={height} onChange={setHeight} min={0} unit={<span className="text-[15px] text-label-2">{unit}</span>} />
        </Field>
        <Field label="Neck: where the collar sits" htmlFor="sz-n">
          <NumberInput id="sz-n" value={neck} onChange={setNeck} min={0} unit={<span className="text-[15px] text-label-2">{unit}</span>} />
        </Field>
        <Field label="Chest: widest part, just behind the front legs" htmlFor="sz-c">
          <NumberInput id="sz-c" value={chest} onChange={setChest} min={0} unit={<span className="text-[15px] text-label-2">{unit}</span>} />
        </Field>
      </div>
      <div className="flex flex-col gap-4 lg:sticky lg:top-24">
        <Result label="Crate" value={L > 0 ? (crate ? `${crate} in` : "Over 54 in") : "–"}>
          <p className="text-[15px] leading-[22px] text-label-2">{sizeName(crate)}. Needs at least {show(needL)} long and {show(needH)} tall inside. For a puppy, buy the adult size and use a divider.</p>
        </Result>
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-bg-2 p-4"><p className="text-[13px] text-label-2">Collar</p><p className="text-[19px] font-semibold text-label">{N > 0 ? `${show(N + 1)} to ${show(N + 3)}` : "–"}</p><p className="text-[13px] text-label-2">Pick one whose range covers your dog&apos;s neck plus about 2 in (5 cm).</p></div>
          <div className="rounded-2xl bg-bg-2 p-4"><p className="text-[13px] text-label-2">Harness</p><p className="text-[19px] font-semibold text-label">{C > 0 ? `${show(C)} chest` : "–"}</p><p className="text-[13px] text-label-2">Choose the size whose chest range includes this, near the middle.</p></div>
        </div>
        <Note>Sizes vary by brand, so always check the brand&apos;s own chart. Between sizes, go up and adjust. Once it&apos;s on, you should fit two fingers flat under the collar or any harness strap, and a dog should be able to stand, turn around and lie stretched out in the crate.</Note>
      </div>
    </ToolGrid>
  );
}
