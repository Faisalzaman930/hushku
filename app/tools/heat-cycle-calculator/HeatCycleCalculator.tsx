"use client";

import { useEffect, useMemo, useState } from "react";
import ToolLayout from "../../components/ToolLayout";

/** Typical gap between the start of one heat and the next, by adult size. Individual dogs vary. */
const SIZES = [
  { id: "small", label: "Small", hint: "under 10 kg / 22 lb", months: 5, range: "4 to 6 months" },
  { id: "medium", label: "Medium", hint: "10 to 25 kg", months: 6, range: "about 6 months" },
  { id: "large", label: "Large", hint: "25 to 45 kg", months: 7, range: "6 to 8 months" },
  { id: "giant", label: "Giant", hint: "over 45 kg / 100 lb", months: 12, range: "8 to 18 months" },
] as const;

/** Phases of one heat, counted from the first day of bleeding or swelling (day 1). */
const PHASES = [
  { from: 1, to: 9, label: "Proestrus", detail: "Swollen vulva and bloody discharge. Males are attracted, but she usually won't accept mating yet." },
  { from: 9, to: 14, label: "Most likely fertile", detail: "Discharge often lightens to straw-coloured and she may flag her tail. Ovulation usually falls in this window, but it can be earlier or later; only progesterone tests from your vet pin it down." },
  { from: 14, to: 21, label: "Estrus ends", detail: "She can still become pregnant until estrus is over. Keep her away from intact males until all signs have stopped." },
];

function parse(s: string) {
  const [y, m, d] = s.split("-").map(Number);
  return y && m && d ? new Date(y, m - 1, d) : null;
}
const addDays = (d: Date, n: number) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
const addMonths = (d: Date, n: number) => new Date(d.getFullYear(), d.getMonth() + n, d.getDate());
const fmt = (d: Date) => d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
const iso = (d: Date) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

export default function HeatCycleCalculator() {
  const [start, setStart] = useState("");
  const [size, setSize] = useState<(typeof SIZES)[number]["id"]>("medium");
  const [custom, setCustom] = useState("");
  const [today, setToday] = useState<Date | null>(null);

  useEffect(() => {
    const t = new Date();
    setToday(new Date(t.getFullYear(), t.getMonth(), t.getDate()));
    setStart(iso(addDays(t, -20)));
  }, []);

  const s = SIZES.find((x) => x.id === size)!;
  const interval = Number(custom) >= 3 && Number(custom) <= 18 ? Number(custom) : s.months;

  const result = useMemo(() => {
    const d = parse(start);
    if (!d) return null;
    const phases = PHASES.map((p) => ({ ...p, start: addDays(d, p.from - 1), end: addDays(d, p.to - 1) }));
    const next = [1, 2, 3].map((i) => {
      const at = addMonths(d, interval * i);
      return { at, from: addDays(at, -21), to: addDays(at, 21) };
    });
    return { phases, next };
  }, [start, interval]);

  const day = result && today ? Math.round((today.getTime() - parse(start)!.getTime()) / 86400000) + 1 : null;

  return (
    <ToolLayout
      subtitle="Dog Heat Cycle Calculator"
      relatedToolSlugs={["whelping-calculator", "puppy-weight", "vaccine-tracker", "age-calculator"]}
      title="Dog Heat Cycle Calculator"
      description="Enter the first day of your dog's last heat to see this cycle's phases, her likely fertile days, and when her next three heats are due."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
        <div className="space-y-8">
          <div>
            <label htmlFor="heat-start" className="block text-xs font-black text-ebony uppercase tracking-widest mb-4">First day of her last heat</label>
            <input
              id="heat-start"
              type="date"
              value={start}
              onChange={(e) => setStart(e.target.value)}
              className="w-full border-2 border-gray-200 rounded-2xl px-5 py-4 text-ebony font-bold text-base focus:outline-none focus:border-brand-start transition-colors"
            />
            <p className="text-xs text-slate-gray mt-2">The day you first noticed swelling or spotting.</p>
          </div>

          <fieldset>
            <legend className="block text-xs font-black text-ebony uppercase tracking-widest mb-4">Her adult size</legend>
            <div className="grid grid-cols-2 gap-3">
              {SIZES.map((x) => (
                <button
                  key={x.id}
                  type="button"
                  aria-pressed={size === x.id}
                  onClick={() => setSize(x.id)}
                  className={`rounded-2xl border-2 px-4 py-4 text-left transition-all ${size === x.id ? "bg-ebony text-white border-ebony" : "bg-gray-50 text-ebony border-transparent hover:border-gray-200"}`}
                >
                  <span className="block font-black text-sm">{x.label}</span>
                  <span className={`block text-xs mt-0.5 ${size === x.id ? "text-white/70" : "text-slate-gray"}`}>{x.hint}</span>
                </button>
              ))}
            </div>
            <p className="text-xs text-slate-gray mt-3">Typical gap for {s.label.toLowerCase()} dogs: {s.range}.</p>
          </fieldset>

          <div>
            <label htmlFor="heat-gap" className="block text-xs font-black text-ebony uppercase tracking-widest mb-4">Know her usual gap? (optional)</label>
            <div className="flex items-center gap-3">
              <input
                id="heat-gap"
                type="number"
                inputMode="numeric"
                min={3}
                max={18}
                placeholder={String(s.months)}
                value={custom}
                onChange={(e) => setCustom(e.target.value)}
                className="w-28 border-2 border-gray-200 rounded-2xl px-4 py-3 text-ebony font-bold focus:outline-none focus:border-brand-start"
              />
              <span className="text-sm text-slate-gray">months between heats</span>
            </div>
            <p className="text-xs text-slate-gray mt-2">After two or three cycles, her own pattern is a better guide than any average.</p>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
            <p className="font-black text-amber-900 text-sm mb-2">Estimates, not a contraceptive</p>
            <p className="text-xs text-amber-900 leading-relaxed">
              Cycles vary from dog to dog and from one heat to the next, and a dog can become pregnant on any day of estrus. Don&apos;t rely on these dates to prevent or plan a pregnancy; your vet can time ovulation with progesterone tests. Ask your vet if her heats are less than 4 months apart, last longer than 3 weeks, or come with lethargy, heavy drinking or pus-like discharge.
            </p>
          </div>
        </div>

        {result && (
          <div className="space-y-10">
            <div>
              <p className="text-[10px] font-black text-ebony uppercase tracking-widest mb-1">This heat</p>
              {day !== null && day >= 1 && day <= 21 ? (
                <p className="text-sm text-brand-text font-bold mb-4">Today is about day {day} of her heat.</p>
              ) : <div className="mb-4" />}
              <ol className="space-y-3">
                {result.phases.map((p) => (
                  <li key={p.label} className="rounded-2xl border border-gray-100 bg-white p-4">
                    <p className="font-black text-sm text-ebony">{p.label} · days {p.from} to {p.to}</p>
                    <p className="text-[12px] font-bold text-slate-gray mt-0.5">{fmt(p.start)} to {fmt(p.end)}</p>
                    <p className="text-xs text-slate-gray mt-1 leading-relaxed">{p.detail}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <p className="text-[10px] font-black text-ebony uppercase tracking-widest mb-4">Next heats (every {interval} months)</p>
              <ol className="space-y-3">
                {result.next.map((n, i) => (
                  <li key={i} className={`rounded-2xl p-4 border ${i === 0 ? "bg-ebony border-ebony text-white" : "bg-gray-50 border-gray-100 text-ebony"}`}>
                    <p className="font-black text-sm">{i === 0 ? "Next heat" : `Heat ${i + 1}`}: around {fmt(n.at)}</p>
                    <p className={`text-xs mt-1 ${i === 0 ? "text-white/70" : "text-slate-gray"}`}>Watch for signs from {fmt(n.from)} to {fmt(n.to)}.</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        )}
      </div>
    </ToolLayout>
  );
}
