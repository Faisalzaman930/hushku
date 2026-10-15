"use client";

import { useEffect, useState } from "react";
import { Field, Segmented, Note, ToolGrid } from "../_ui/kit";

/**
 * Schedules from the 2022 AAHA canine and 2020 AAHA/AAFP feline vaccination guidelines.
 * Weeks are the usual first-series ages; the clinic's own protocol takes precedence.
 */
type Vaccine = { name: string; short: string; core: boolean; weeks: number[]; boost: string; adult: string; note?: string };

const DOG: Vaccine[] = [
  { name: "Distemper, adenovirus, parvovirus (DAPP or DHPP)", short: "DAPP", core: true, weeks: [8, 12, 16], boost: "Within a year of the last puppy dose", adult: "Every 3 years", note: "Doses every 2 to 4 weeks from 6 to 8 weeks; the last dose at 16 weeks or later." },
  { name: "Rabies", short: "Rabies", core: true, weeks: [14], boost: "1 year later", adult: "Every 1 or 3 years, by label and local law", note: "First dose at 12 to 16 weeks, as local law requires." },
  { name: "Leptospirosis", short: "Lepto", core: true, weeks: [12, 16], boost: "1 year later", adult: "Every year", note: "Core since the 2022 AAHA guidelines: two doses 2 to 4 weeks apart, from 8 weeks or later." },
  { name: "Bordetella (kennel cough)", short: "Bordetella", core: false, weeks: [8], boost: "Depends on the product", adult: "Every year for dogs that board, groom or meet many dogs" },
  { name: "Canine influenza", short: "Flu", core: false, weeks: [12, 15], boost: "1 year later", adult: "Every year where flu is a risk" },
  { name: "Lyme disease", short: "Lyme", core: false, weeks: [12, 15], boost: "1 year later", adult: "Every year in tick areas" },
];
const CAT: Vaccine[] = [
  { name: "Feline herpesvirus, calicivirus, panleukopenia (FVRCP)", short: "FVRCP", core: true, weeks: [8, 12, 16], boost: "At 6 months or 1 year", adult: "Every 3 years (injectable)", note: "From 6 weeks, every 3 to 4 weeks until 16 to 20 weeks." },
  { name: "Rabies", short: "Rabies", core: true, weeks: [12], boost: "1 year later", adult: "Every 1 or 3 years, by label and local law" },
  { name: "Feline leukaemia (FeLV)", short: "FeLV", core: true, weeks: [8, 12], boost: "1 year later", adult: "Every 1 to 3 years for cats that go outside or live with FeLV-positive cats", note: "Core for kittens and cats under 1 year; test before vaccinating." },
];

function addWeeks(d: Date, w: number) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate() + w * 7);
}
const fmtDate = (d: Date) => d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });

export default function VaccineTrackerTool() {
  const [species, setSpecies] = useState<"dog" | "cat">("dog");
  const [birth, setBirth] = useState("");
  const [today, setToday] = useState<Date | null>(null);
  useEffect(() => setToday(new Date()), []);

  const list = species === "dog" ? DOG : CAT;
  const b = birth ? (() => { const [y, m, d] = birth.split("-").map(Number); return new Date(y, m - 1, d); })() : null;
  const visits = Array.from(new Set(list.flatMap((v) => v.weeks))).sort((x, y) => x - y).map((w) => ({
    w,
    date: b ? addWeeks(b, w) : null,
    items: list.filter((v) => v.weeks.includes(w)),
  }));

  return (
    <div className="flex flex-col gap-8">
      <ToolGrid>
        <Field label="Pet">
          <Segmented label="Pet" value={species} onChange={setSpecies} options={[{ value: "dog", label: "Puppy" }, { value: "cat", label: "Kitten" }]} />
        </Field>
        <Field label="Date of birth (optional)" htmlFor="vax-birth" hint="Add it to turn the schedule into dates.">
          <input id="vax-birth" type="date" value={birth} onChange={(e) => setBirth(e.target.value)} className="min-h-12 max-w-[220px] rounded-2xl border border-separator bg-white px-4 text-[17px] text-label outline-none focus:border-label" />
        </Field>
      </ToolGrid>

      <section aria-labelledby="vax-visits-h" className="flex flex-col gap-3">
        <h2 id="vax-visits-h" className="text-[21px] font-semibold text-label">First-year visits</h2>
        <ol className="grid gap-3 md:grid-cols-3">
          {visits.map((v) => {
            const past = v.date && today ? v.date < today : false;
            return (
              <li key={v.w} className={`flex flex-col gap-2 rounded-2xl p-4 ${past ? "bg-bg-2 opacity-70" : "bg-bg-2"}`}>
                <p className="text-[17px] font-semibold text-label">{v.w} weeks{v.date ? <span className="font-normal text-label-2"> · {fmtDate(v.date)}</span> : null}</p>
                <ul className="flex flex-wrap gap-1.5">
                  {v.items.map((i) => (
                    <li key={i.short} className={`rounded-full px-2.5 py-1 text-[13px] font-medium ${i.core ? "bg-label text-white" : "bg-white text-label ring-1 ring-separator"}`}>{i.short}</li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ol>
        <p className="text-[13px] text-label-2">Dark tags are core vaccines; outlined tags are lifestyle vaccines your vet may suggest.</p>
      </section>

      <section aria-labelledby="vax-table-h" className="flex flex-col gap-3">
        <h2 id="vax-table-h" className="text-[21px] font-semibold text-label">{species === "dog" ? "Dog" : "Cat"} vaccines at a glance</h2>
        <div className="overflow-x-auto rounded-3xl border border-separator">
          <table className="w-full min-w-[640px] text-left text-[15px] leading-[21px]">
            <thead className="bg-bg-2 text-label-2">
              <tr><th className="p-3 font-medium">Vaccine</th><th className="p-3 font-medium">Type</th><th className="p-3 font-medium">First booster</th><th className="p-3 font-medium">Adults</th></tr>
            </thead>
            <tbody>
              {list.map((v) => (
                <tr key={v.name} className="border-t border-separator align-top">
                  <th scope="row" className="p-3 font-medium text-label">{v.name}{v.note ? <span className="mt-1 block text-[13px] font-normal text-label-2">{v.note}</span> : null}</th>
                  <td className="p-3">{v.core ? "Core" : "Lifestyle"}</td>
                  <td className="p-3 text-label-2">{v.boost}</td>
                  <td className="p-3 text-label-2">{v.adult}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <Note>Your vet may change timing for your pet&apos;s health, history and local disease risks, and rabies rules vary by country and state. Keep your pet away from unvaccinated dogs and public dog areas until a week or two after the last puppy dose, unless your vet advises otherwise.</Note>
    </div>
  );
}
