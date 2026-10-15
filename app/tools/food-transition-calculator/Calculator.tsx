"use client";

import { useEffect, useState } from "react";
import { Field, Segmented, NumberInput, Note } from "../_ui/kit";

/** Share of new food per day. 7 days follows the common 25/50/75% steps; slower plans stretch them. */
const PLANS: Record<string, number[]> = {
  "7": [25, 25, 50, 50, 75, 75, 100],
  "10": [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
  "14": [10, 10, 20, 20, 30, 40, 50, 50, 60, 70, 80, 90, 90, 100],
};

export default function Calculator() {
  const [plan, setPlan] = useState<"7" | "10" | "14">("7");
  const [unit, setUnit] = useState<"cups" | "g">("cups");
  const [daily, setDaily] = useState("2");
  const [start, setStart] = useState("");
  useEffect(() => setStart(new Date().toISOString().slice(0, 10)), []);

  const total = parseFloat(daily) || 0;
  const d0 = start ? new Date(start + "T00:00") : null;
  const fmtAmt = (v: number) => (unit === "cups" ? `${(Math.round(v * 8) / 8).toFixed(2).replace(/\.?0+$/, "")} cups` : `${Math.round(v)} g`);

  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-6 md:grid-cols-3">
        <Field label="How fast?" hint="Choose 10 or 14 days for sensitive stomachs, puppies and seniors.">
          <Segmented label="Plan length" value={plan} onChange={setPlan} options={[{ value: "7", label: "7 days" }, { value: "10", label: "10 days" }, { value: "14", label: "14 days" }]} />
        </Field>
        <Field label="Total food per day" htmlFor="ft-d" hint="Keep the total the same; only the mix changes.">
          <NumberInput id="ft-d" value={daily} onChange={setDaily} min={0} unit={<Segmented label="Unit" value={unit} onChange={(u) => { setUnit(u); setDaily(u === "cups" ? "2" : "250"); }} options={[{ value: "cups", label: "cups" }, { value: "g", label: "g" }]} />} />
        </Field>
        <Field label="Start date" htmlFor="ft-s">
          <input id="ft-s" type="date" value={start} onChange={(e) => setStart(e.target.value)} className="min-h-12 max-w-[220px] rounded-2xl border border-separator bg-white px-4 text-[17px] text-label outline-none focus:border-label" />
        </Field>
      </div>
      <div className="overflow-x-auto rounded-3xl border border-separator">
        <table className="w-full min-w-[480px] text-left text-[15px] tabular-nums">
          <thead className="bg-bg-2 text-label-2">
            <tr><th className="p-3 font-medium">Day</th><th className="p-3 font-medium">Mix</th><th className="p-3 font-medium">Old food</th><th className="p-3 font-medium">New food</th></tr>
          </thead>
          <tbody>
            {PLANS[plan].map((p, i) => (
              <tr key={i} className="border-t border-separator">
                <th scope="row" className="p-3 font-medium text-label">Day {i + 1}{d0 ? <span className="block text-[13px] font-normal text-label-2">{new Date(d0.getTime() + i * 86400000).toLocaleDateString("en-GB", { weekday: "short", day: "numeric", month: "short" })}</span> : null}</th>
                <td className="p-3">
                  <div className="flex h-3 w-28 overflow-hidden rounded-full bg-surface" aria-hidden><div className="bg-label" style={{ width: `${p}%` }} /></div>
                  <span className="text-[13px] text-label-2">{100 - p}% old · {p}% new</span>
                </td>
                <td className="p-3">{fmtAmt((total * (100 - p)) / 100)}</td>
                <td className="p-3 font-semibold">{fmtAmt((total * p) / 100)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Note>If your pet gets loose stools or vomits, go back to the previous day&apos;s mix for 2 to 3 days before moving on. Call your vet if it lasts more than a day or two, or if there&apos;s blood or lethargy. If the new food has a different calorie content, check the daily amount with our feeding calculator.</Note>
    </div>
  );
}
