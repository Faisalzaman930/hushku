"use client";

import { useState } from "react";
import { Field, Segmented } from "../_ui/kit";

/** From each company's own description of its service. No ratings: we haven't tested them. */
const PLATFORMS = [
  { name: "Rover", for: ["dog", "cat"], trip: ["short", "long"], services: "Dog walking, drop-in visits, house sitting, boarding and daycare", pay: "Per booking; sitters set their rates and the platform adds a service fee", best: "Choosing a local sitter or walker from many profiles and reviews" },
  { name: "Wag!", for: ["dog"], trip: ["short"], services: "On-demand and scheduled dog walks, plus sitting and boarding", pay: "Per booking, with an optional paid membership", best: "Quick or same-day dog walks" },
  { name: "TrustedHousesitters", for: ["dog", "cat"], trip: ["long"], services: "Sitters stay in your home and care for your pets", pay: "Annual membership for owners; sits themselves are free", best: "Longer trips if you're happy to host a vetted stranger" },
  { name: "Meowtel", for: ["cat"], trip: ["short", "long"], services: "In-home cat sitting visits", pay: "Per visit", best: "Cat owners who want a cat specialist" },
];

export default function SittingComparisonTool() {
  const [pet, setPet] = useState<"any" | "dog" | "cat">("any");
  const [trip, setTrip] = useState<"any" | "short" | "long">("any");
  const list = PLATFORMS.filter((p) => (pet === "any" || p.for.includes(pet)) && (trip === "any" || p.trip.includes(trip)));

  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Field label="Your pet">
          <Segmented label="Your pet" value={pet} onChange={setPet} options={[{ value: "any", label: "Any" }, { value: "dog", label: "Dog" }, { value: "cat", label: "Cat" }]} />
        </Field>
        <Field label="What you need">
          <Segmented label="What you need" value={trip} onChange={setTrip} options={[{ value: "any", label: "Any" }, { value: "short", label: "Walks or visits" }, { value: "long", label: "Care while away" }]} />
        </Field>
      </div>
      <div className="overflow-x-auto rounded-3xl border border-separator">
        <table className="w-full min-w-[680px] text-left text-[15px] leading-[21px]">
          <thead className="bg-bg-2 text-label-2">
            <tr><th className="p-4 font-medium">Platform</th><th className="p-4 font-medium">What it offers</th><th className="p-4 font-medium">How you pay</th><th className="p-4 font-medium">Best for</th></tr>
          </thead>
          <tbody>
            {list.map((p) => (
              <tr key={p.name} className="border-t border-separator align-top">
                <th scope="row" className="p-4 text-[17px] font-semibold text-label">{p.name}</th>
                <td className="p-4 text-label">{p.services}</td>
                <td className="p-4 text-label-2">{p.pay}</td>
                <td className="p-4 text-label-2">{p.best}</td>
              </tr>
            ))}
            {list.length === 0 ? <tr><td colSpan={4} className="p-4 text-label-2">No platform here matches both. Try &quot;Any&quot;.</td></tr> : null}
          </tbody>
        </table>
      </div>
      <p className="text-[13px] text-label-2">Availability depends on where you live. Services and fees change, so check each platform before booking.</p>
    </div>
  );
}
