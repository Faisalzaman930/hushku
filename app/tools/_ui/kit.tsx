"use client";

import type { ReactNode } from "react";

/** Small form and result pieces shared by the rebuilt tools, in the site's current design. */

export function Field({ label, hint, htmlFor, children }: { label: string; hint?: ReactNode; htmlFor?: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      {htmlFor ? (
        <label htmlFor={htmlFor} className="text-[15px] font-semibold text-label">{label}</label>
      ) : (
        <p className="text-[15px] font-semibold text-label">{label}</p>
      )}
      {children}
      {hint ? <p className="text-[13px] leading-[19px] text-label-2">{hint}</p> : null}
    </div>
  );
}

export function Segmented<T extends string>({ value, onChange, options, label }: { value: T; onChange: (v: T) => void; options: { value: T; label: string; sub?: string }[]; label: string }) {
  return (
    <div role="radiogroup" aria-label={label} className="grid gap-2" style={{ gridTemplateColumns: `repeat(${Math.min(options.length, 4)}, minmax(0, 1fr))` }}>
      {options.map((o) => {
        const on = o.value === value;
        return (
          <button
            key={o.value}
            type="button"
            role="radio"
            aria-checked={on}
            onClick={() => onChange(o.value)}
            className={`flex min-h-12 flex-col items-center justify-center rounded-2xl px-3 py-2 text-center transition-colors ${on ? "bg-label text-white" : "bg-bg-2 text-label hover:bg-surface"}`}
          >
            <span className="text-[15px] font-semibold leading-[20px]">{o.label}</span>
            {o.sub ? <span className={`text-[12px] leading-[16px] ${on ? "text-white/75" : "text-label-2"}`}>{o.sub}</span> : null}
          </button>
        );
      })}
    </div>
  );
}

export function Choice<T extends string>({ value, onChange, options, label }: { value: T; onChange: (v: T) => void; options: { value: T; label: string; sub?: string }[]; label: string }) {
  return (
    <div role="radiogroup" aria-label={label} className="flex flex-col gap-2">
      {options.map((o) => {
        const on = o.value === value;
        return (
          <button
            key={o.value}
            type="button"
            role="radio"
            aria-checked={on}
            onClick={() => onChange(o.value)}
            className={`flex min-h-12 flex-col items-start rounded-2xl px-4 py-3 text-left transition-colors ${on ? "bg-label text-white" : "bg-bg-2 text-label hover:bg-surface"}`}
          >
            <span className="text-[15px] font-semibold leading-[20px]">{o.label}</span>
            {o.sub ? <span className={`text-[13px] leading-[18px] ${on ? "text-white/75" : "text-label-2"}`}>{o.sub}</span> : null}
          </button>
        );
      })}
    </div>
  );
}

export function NumberInput({ id, value, onChange, unit, min = 0, max, step = "any" }: { id: string; value: string; onChange: (v: string) => void; unit?: ReactNode; min?: number; max?: number; step?: number | "any" }) {
  return (
    <div className="flex items-center gap-2">
      <input
        id={id}
        type="number"
        inputMode="decimal"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="min-h-12 w-full max-w-[180px] rounded-2xl border border-separator bg-white px-4 text-[17px] font-semibold text-label outline-none focus:border-label"
      />
      {unit}
    </div>
  );
}

export function Result({ label, value, unit, children, tone = "default" }: { label: string; value: ReactNode; unit?: string; children?: ReactNode; tone?: "default" | "good" | "warn" | "bad" }) {
  const tones = { default: "bg-bg-2", good: "bg-success-tint", warn: "bg-warning-tint", bad: "bg-brand-tint" };
  return (
    <div className={`flex flex-col gap-2 rounded-3xl p-6 ${tones[tone]}`} aria-live="polite">
      <p className="text-[13px] font-semibold text-label-2">{label}</p>
      <p className="text-[40px] leading-[1.05] font-semibold tracking-[-0.02em] text-label tabular-nums md:text-[48px]">
        {value}
        {unit ? <span className="ml-2 text-[19px] font-medium tracking-normal text-label-2">{unit}</span> : null}
      </p>
      {children}
    </div>
  );
}

export function Note({ children }: { children: ReactNode }) {
  return <p className="rounded-2xl bg-surface px-4 py-3 text-[13px] leading-[19px] text-label-2">{children}</p>;
}

export function ToolGrid({ children }: { children: ReactNode }) {
  return <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">{children}</div>;
}

export const toKg = (v: number, unit: "kg" | "lb") => (unit === "lb" ? v * 0.453592 : v);
export const fmt = (n: number, d = 0) => n.toLocaleString("en-US", { maximumFractionDigits: d, minimumFractionDigits: d });

/** A dose-based risk band display for the poisoning calculators. */
export function RiskBands({ value, bands, unit }: { value: number; unit: string; bands: { at: number; label: string }[] }) {
  return (
    <ol className="flex flex-col gap-1.5" aria-label="Risk levels">
      {bands.map((b, i) => {
        const next = bands[i + 1]?.at ?? Infinity;
        const on = value >= b.at && value < next;
        return (
          <li key={b.label} className={`flex items-center justify-between gap-3 rounded-xl px-3 py-2 text-[14px] ${on ? "bg-label text-white" : "bg-bg-2 text-label-2"}`}>
            <span className={on ? "font-semibold" : ""}>{b.label}</span>
            <span className="tabular-nums">{b.at > 0 ? `${b.at}+ ${unit}` : `under ${bands[1]?.at} ${unit}`}</span>
          </li>
        );
      })}
    </ol>
  );
}

export function Emergency({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl bg-brand-tint px-4 py-3 text-[15px] leading-[22px] text-label" role="note">
      {children}
    </div>
  );
}
