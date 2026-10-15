"use client";

import { useState } from "react";
import { Field, Segmented, Choice, NumberInput, Result, Note, ToolGrid, fmt } from "../_ui/kit";

/**
 * Asphalt in full sun is roughly 48–72 °F hotter than the air (77 °F air → 125 °F, 87 → 143,
 * 97 → 161, 107 → 179). We interpolate that line; shade or cloud is a much smaller rise (our estimate).
 * Paw burns become a serious concern from about 125 °F (52 °C).
 */
const SURFACES = [
  { value: "asphalt", label: "Asphalt or tarmac", k: 1 },
  { value: "concrete", label: "Concrete or paving", k: 0.75 },
  { value: "sand", label: "Sand or artificial grass", k: 0.85 },
  { value: "grass", label: "Natural grass", k: 0.15 },
] as const;
const SKY = [
  { value: "sun", label: "Full sun", k: 1 },
  { value: "part", label: "Some cloud", k: 0.6 },
  { value: "shade", label: "Shade, overcast or after sunset", k: 0.25 },
] as const;

function surfaceF(airF: number, surface: number, sky: number) {
  const sunRise = Math.max(0, 48 + (airF - 77) * 0.8);
  return airF + sunRise * surface * sky;
}

export default function Calculator() {
  const [unit, setUnit] = useState<"C" | "F">("C");
  const [air, setAir] = useState("28");
  const [surface, setSurface] = useState<string>("asphalt");
  const [sky, setSky] = useState<string>("sun");
  const [risk, setRisk] = useState<"normal" | "high">("normal");

  const a = parseFloat(air);
  const airF = unit === "C" ? a * 9 / 5 + 32 : a;
  const s = SURFACES.find((x) => x.value === surface)!;
  const k = SKY.find((x) => x.value === sky)!;
  const f = isFinite(airF) ? surfaceF(airF, s.k, k.k) : NaN;
  const show = (F: number) => (unit === "C" ? `${fmt((F - 32) * 5 / 9)} °C` : `${fmt(F)} °F`);
  const paws = f >= 125 ? "bad" : f >= 110 ? "warn" : "good";
  const heatAir = airF >= (risk === "high" ? 77 : 86) ? "high" : airF >= (risk === "high" ? 68 : 77) ? "some" : "low";

  return (
    <ToolGrid>
      <div className="flex flex-col gap-6">
        <Field label="Air temperature" htmlFor="hp-air">
          <NumberInput id="hp-air" value={air} onChange={setAir} min={-20} max={130} unit={<Segmented label="Unit" value={unit} onChange={(u) => { setUnit(u); setAir(u === "C" ? "28" : "82"); }} options={[{ value: "C", label: "°C" }, { value: "F", label: "°F" }]} />} />
        </Field>
        <Field label="Sun">
          <Choice label="Sun" value={sky} onChange={setSky} options={SKY.map((x) => ({ value: x.value, label: x.label }))} />
        </Field>
        <Field label="Surface">
          <Choice label="Surface" value={surface} onChange={setSurface} options={SURFACES.map((x) => ({ value: x.value, label: x.label }))} />
        </Field>
        <Field label="Your dog">
          <Segmented label="Your dog" value={risk} onChange={setRisk} options={[{ value: "normal", label: "Healthy adult" }, { value: "high", label: "Higher risk", sub: "Flat-faced, overweight, old, thick coat" }]} />
        </Field>
      </div>
      <div className="flex flex-col gap-4 lg:sticky lg:top-24">
        <Result label="Estimated surface temperature" value={isFinite(f) ? show(f) : "–"} tone={paws}>
          <p className="text-[19px] font-semibold text-label">{paws === "bad" ? "Too hot for paws" : paws === "warn" ? "Getting hot: keep it short and test first" : "Paws should be OK"}</p>
          <p className="text-[15px] leading-[22px] text-label-2">{paws === "bad" ? "Pads can burn in about a minute. Walk on grass or in shade, or go early morning or late evening." : "Do the 7-second test before you set off."}</p>
        </Result>
        <div className="rounded-2xl bg-bg-2 p-4">
          <p className="text-[15px] font-semibold text-label">Heatstroke risk on a walk: {heatAir === "high" ? "high" : heatAir === "some" ? "take care" : "low"}</p>
          <p className="mt-1 text-[15px] leading-[22px] text-label-2">{heatAir === "high" ? "Skip the walk or keep it to a short, shaded toilet break. Bring water." : heatAir === "some" ? "Keep walks short, slow and shaded, and carry water." : "Normal walks are fine; carry water on long ones."} Heavy panting, bright red gums, drooling, wobbling or vomiting mean stop, cool your dog with cool (not ice-cold) water and call a vet.</p>
        </div>
        <Note><strong>The 7-second test:</strong> put the back of your hand flat on the ground for 7 seconds. If you can&apos;t keep it there, it&apos;s too hot for paws. Surface temperatures here are estimates from typical readings in direct sun; dark surfaces, still air and late afternoon run hotter.</Note>
      </div>
    </ToolGrid>
  );
}
