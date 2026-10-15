"use client";

import { useState } from "react";
import { Field, Segmented, Choice, NumberInput, Result, Note, ToolGrid, fmt } from "../_ui/kit";

/**
 * Rover US national averages, September 2025 (rover.com/blog/dog-sitting-rates-national), with the
 * lowest and highest of the 25 cities in the same report for the low- and high-cost options.
 */
const SERVICES = {
  dropin: { label: "Drop-in visits", sub: "30 minutes, at your home", unit: "visit", avg: 21.8, low: 19.58, high: 29.76 },
  house: { label: "House sitting", sub: "Sitter stays at your home", unit: "day", avg: 55.45, low: 43.32, high: 80.72 },
  boarding: { label: "Dog boarding", sub: "Your dog stays at the sitter's home", unit: "day", avg: 49.01, low: 35, high: 73.6 },
} as const;
type Service = keyof typeof SERVICES;

export default function PetSitterCostCalculator() {
  const [service, setService] = useState<Service>("house");
  const [area, setArea] = useState<"low" | "avg" | "high" | "own">("avg");
  const [own, setOwn] = useState("");
  const [days, setDays] = useState("7");
  const [visits, setVisits] = useState("2");
  const [pets, setPets] = useState("1");
  const [extra, setExtra] = useState("50");

  const s = SERVICES[service];
  const rate = area === "own" ? parseFloat(own) || 0 : s[area];
  const nDays = Math.max(0, parseFloat(days) || 0);
  const units = service === "dropin" ? nDays * Math.max(1, parseFloat(visits) || 1) : nDays;
  const extraPets = Math.max(0, (parseInt(pets) || 1) - 1);
  const perUnit = rate * (1 + extraPets * ((parseFloat(extra) || 0) / 100));
  const total = perUnit * units;

  return (
    <ToolGrid>
      <div className="flex flex-col gap-6">
        <Field label="Type of care">
          <Choice label="Type of care" value={service} onChange={setService} options={(Object.keys(SERVICES) as Service[]).map((k) => ({ value: k, label: SERVICES[k].label, sub: SERVICES[k].sub }))} />
        </Field>
        <Field label="Rates in your area" hint={area === "own" ? "Enter the rate you've been quoted, in any currency." : "US rates from Rover, September 2025."}>
          <Segmented
            label="Area"
            value={area}
            onChange={setArea}
            options={[
              { value: "low", label: "Lower cost", sub: `$${fmt(s.low, 2)}` },
              { value: "avg", label: "US average", sub: `$${fmt(s.avg, 2)}` },
              { value: "high", label: "Big city", sub: `$${fmt(s.high, 2)}` },
              { value: "own", label: "My rate", sub: "Any currency" },
            ]}
          />
          {area === "own" ? <NumberInput id="own-rate" value={own} onChange={setOwn} min={0} unit={<span className="text-[15px] text-label-2">per {s.unit}</span>} /> : null}
        </Field>
        <Field label={service === "dropin" ? "Number of days" : "Number of days or nights"} htmlFor="sit-days">
          <NumberInput id="sit-days" value={days} onChange={setDays} min={1} max={365} step={1} unit={<span className="text-[15px] text-label-2">days</span>} />
        </Field>
        {service === "dropin" ? (
          <Field label="Visits per day">
            <Segmented label="Visits per day" value={visits} onChange={setVisits} options={[{ value: "1", label: "1" }, { value: "2", label: "2" }, { value: "3", label: "3" }]} />
          </Field>
        ) : null}
        <Field label="Number of pets">
          <Segmented label="Number of pets" value={pets} onChange={setPets} options={[{ value: "1", label: "1" }, { value: "2", label: "2" }, { value: "3", label: "3" }, { value: "4", label: "4" }]} />
        </Field>
        {extraPets > 0 ? (
          <Field label="Charge for each extra pet" htmlFor="sit-extra" hint="Sitters set their own; 50% of the base rate is a common figure.">
            <NumberInput id="sit-extra" value={extra} onChange={setExtra} min={0} max={100} step={5} unit={<span className="text-[15px] text-label-2">% of base rate</span>} />
          </Field>
        ) : null}
      </div>

      <div className="flex flex-col gap-4 lg:sticky lg:top-24">
        <Result label="Estimated total" value={rate > 0 ? `${area === "own" ? "" : "$"}${fmt(total)}` : "–"}>
          <p className="text-[15px] leading-[22px] text-label-2">
            {rate > 0 ? <>{fmt(units)} {s.unit}{units === 1 ? "" : "s"} at {area === "own" ? "" : "$"}{fmt(perUnit, 2)} per {s.unit}{extraPets ? ` for ${pets} pets` : ""}.</> : "Enter your rate."}
          </p>
        </Result>
        <div className="overflow-hidden rounded-3xl border border-separator">
          <table className="w-full text-left text-[15px]">
            <caption className="bg-bg-2 px-4 py-3 text-left text-[13px] font-semibold text-label-2">US rates on Rover, September 2025</caption>
            <thead><tr className="text-label-2"><th className="px-4 py-2 font-medium">Service</th><th className="px-4 py-2 font-medium">Average</th><th className="px-4 py-2 font-medium">City range</th></tr></thead>
            <tbody>
              {(Object.keys(SERVICES) as Service[]).map((k) => (
                <tr key={k} className="border-t border-separator">
                  <th scope="row" className="px-4 py-2 font-medium text-label">{SERVICES[k].label}</th>
                  <td className="px-4 py-2 tabular-nums">${fmt(SERVICES[k].avg, 2)}/{SERVICES[k].unit}</td>
                  <td className="px-4 py-2 tabular-nums text-label-2">${fmt(SERVICES[k].low)} to ${fmt(SERVICES[k].high)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Note>Holidays, puppies, medication and last-minute bookings often cost more. Platform service fees may be added on top of the sitter&apos;s rate.</Note>
      </div>
    </ToolGrid>
  );
}
