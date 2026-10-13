"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SCREEN_ALT, type AppScreen } from "../ui";
import { SCREEN_HOTSPOTS } from "./hotspots";

export type TourSpot = {
  /** Key of a tagged region on the screen (see hotspots.ts), or an explicit box. */
  at: string | [number, number, number, number];
  label: string;
  body?: string;
  /** This is where you tap to reach the next screen. Tapping the pin goes there. */
  next?: boolean;
  /** Where this flow starts (usually a bottom tab). */
  start?: boolean;
};

export type TourStep = {
  screen: AppScreen;
  /** How to reach this screen, e.g. ["Home tab", "Care Team", "Manage"]. */
  path?: string[];
  title: string;
  body?: string;
  spots: TourSpot[];
};

type Box = [number, number, number, number];

function boxFor(screen: AppScreen, at: TourSpot["at"]): Box | null {
  if (Array.isArray(at)) return at;
  const all = SCREEN_HOTSPOTS as unknown as Record<string, Record<string, Box>>;
  return all[screen]?.[at] ?? null;
}

/**
 * Pins sit in a margin to the right of the phone, each joined to its region by a leader line.
 * y is in % of the screen height: the region's centre (or near the top of tall regions),
 * pushed apart so pins never overlap.
 */
function placePins<T extends { box: Box }>(spots: T[]) {
  const GAP = 4.8;
  const items = spots.map((s, n) => {
    const [l, t, w, h] = s.box;
    const y = h > 10 ? t + 3.5 : t + h / 2;
    return { s, n, x: l + w, target: y, y };
  });
  const sorted = [...items].sort((a, b) => a.target - b.target);
  sorted.forEach((it, k) => {
    it.y = Math.max(it.target, k ? sorted[k - 1].y + GAP : 3);
  });
  const overflow = sorted.length ? sorted[sorted.length - 1].y - 97 : 0;
  if (overflow > 0) sorted.forEach((it) => (it.y -= overflow));
  return items;
}

const cx = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(" ");

/**
 * An interactive walkthrough of real app screens.
 * Each step is one screen; numbered pins on the screen match a list of callouts.
 * Hover, focus or tap a pin or a callout to spotlight that part of the screen.
 */
export default function AppTour({
  steps,
  compact = false,
  label = "App walkthrough",
}: {
  steps: TourStep[];
  compact?: boolean;
  label?: string;
}) {
  const [stepIndex, setStepIndex] = useState(0);
  const [active, setActive] = useState<number | null>(null);
  const [pinned, setPinned] = useState<number | null>(null);
  const uid = useId();
  const touch = useRef<{ x: number; y: number } | null>(null);

  const step = steps[stepIndex];
  const shown = pinned ?? active;
  const multi = steps.length > 1;

  const go = useCallback(
    (i: number) => {
      const n = Math.max(0, Math.min(steps.length - 1, i));
      setStepIndex(n);
      setActive(null);
      setPinned(null);
    },
    [steps.length]
  );

  // Preload the other screens so stepping feels instant.
  useEffect(() => {
    steps.forEach((s) => {
      const img = new window.Image();
      img.src = `/app-screens/${s.screen}.webp`;
    });
  }, [steps]);

  const spots = step.spots
    .map((s, i) => ({ ...s, i, box: boxFor(step.screen, s.at) }))
    .filter((s): s is typeof s & { box: Box } => s.box !== null);
  const pins = placePins(spots);
  const activeBox = shown !== null ? spots.find((s) => s.i === shown)?.box ?? null : null;

  const onKeyDownSteps = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") { e.preventDefault(); go(stepIndex + 1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); go(stepIndex - 1); }
  };

  return (
    <div
      role="group"
      aria-roledescription="walkthrough"
      aria-label={label}
      className={cx("grid items-start gap-8 md:gap-12", compact ? "md:grid-cols-[minmax(0,360px)_1fr]" : "md:grid-cols-[minmax(0,370px)_1fr] lg:gap-16")}
    >
      {/* Phone */}
      <div className="flex flex-col items-center gap-4 md:sticky md:top-24">
        <div
          className="relative mr-12 ml-2 w-[256px] shrink-0 rounded-[46px] bg-[#1D1B19] p-2.5 shadow-[inset_0_0_0_2px_#3A3633,0_0_0_1px_rgba(255,255,255,0.08),0_24px_60px_rgba(29,27,25,0.18)] md:w-[300px]"
          onTouchStart={(e) => { touch.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }; }}
          onTouchEnd={(e) => {
            const t = touch.current; touch.current = null;
            if (!t || !multi) return;
            const dx = e.changedTouches[0].clientX - t.x;
            const dy = e.changedTouches[0].clientY - t.y;
            if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) go(stepIndex + (dx < 0 ? 1 : -1));
          }}
        >
          <div className="relative aspect-[393/852] overflow-hidden rounded-[36px] bg-bg-2">
            <Image
              key={step.screen}
              src={`/app-screens/${step.screen}.webp`}
              alt={SCREEN_ALT[step.screen]}
              fill
              unoptimized
              loading="eager"
              className="object-cover motion-safe:animate-[tour-in_240ms_ease-out]"
            />
            <span aria-hidden className="absolute top-2.5 left-1/2 z-20 h-[22px] w-[30%] -translate-x-1/2 rounded-full bg-[#1D1B19]" />

            {/* Spotlight: everything outside the active region dims. */}
            <div
              aria-hidden
              className={cx(
                "pointer-events-none absolute z-10 rounded-[10px] ring-2 ring-brand transition-all duration-200 ease-out motion-reduce:transition-none",
                activeBox ? "opacity-100" : "opacity-0"
              )}
              style={
                activeBox
                  ? {
                      left: `calc(${activeBox[0]}% - 4px)`,
                      top: `calc(${activeBox[1]}% - 4px)`,
                      width: `calc(${activeBox[2]}% + 8px)`,
                      height: `calc(${activeBox[3]}% + 8px)`,
                      boxShadow: "0 0 0 999px rgba(29,27,25,0.42)",
                    }
                  : { left: "50%", top: "50%", width: 0, height: 0 }
              }
            />
          </div>

          {/* Leader lines and pins, in the margin to the right of the phone. Same coordinates as the screen. */}
          <div className="pointer-events-none absolute inset-2.5 z-30">
            <svg aria-hidden className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 100 100" preserveAspectRatio="none">
              {pins.map(({ s, x, target, y }) => {
                const on = shown === s.i;
                const dim = shown !== null && !on;
                return (
                  <polyline
                    key={`${step.screen}-l-${s.i}`}
                    points={`${x - 1},${target} ${103},${target} ${108},${y} ${113},${y}`}
                    fill="none"
                    vectorEffect="non-scaling-stroke"
                    strokeWidth={on ? 2 : 1.25}
                    strokeLinejoin="round"
                    className={cx("transition-opacity duration-150 motion-reduce:transition-none", on ? "stroke-brand" : "stroke-brand/60", dim && "opacity-25")}
                  />
                );
              })}
            </svg>
            {pins.map(({ s, x, target }) => (
              <span
                key={`${step.screen}-d-${s.i}`}
                aria-hidden
                className={cx("absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full ring-2 ring-white transition-opacity duration-150", shown === s.i ? "bg-brand" : "bg-brand/70", shown !== null && shown !== s.i && "opacity-25")}
                style={{ left: `${x - 1}%`, top: `${target}%` }}
              />
            ))}
            {pins.map(({ s, n, y }) => {
              const on = shown === s.i;
              return (
                <button
                  key={`${step.screen}-${s.i}`}
                  type="button"
                  aria-label={`${n + 1}. ${s.label}${s.next && stepIndex < steps.length - 1 ? `. Opens ${steps[stepIndex + 1].title}` : ""}`}
                  aria-pressed={pinned === s.i}
                  aria-describedby={`${uid}-spot-${s.i}`}
                  onMouseEnter={() => setActive(s.i)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(s.i)}
                  onBlur={() => setActive(null)}
                  onClick={() => (s.next && stepIndex < steps.length - 1 ? go(stepIndex + 1) : setPinned(pinned === s.i ? null : s.i))}
                  className={cx(
                    "pointer-events-auto absolute grid h-7 w-7 -translate-y-1/2 place-items-center rounded-full text-[13px] font-semibold tabular-nums outline-offset-2 transition-[transform,background-color,opacity] duration-150 motion-reduce:transition-none",
                    on ? "scale-110 bg-brand text-white shadow-[0_2px_8px_rgba(225,26,69,0.35)]" : s.next || s.start ? "bg-label text-white ring-2 ring-label" : "bg-white text-brand-text ring-2 ring-brand",
                    shown !== null && !on && "opacity-50"
                  )}
                  style={{ left: "calc(113% - 2px)", top: `${y}%` }}
                >
                  {n + 1}
                  {!on && shown === null ? (
                    <span aria-hidden className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-brand motion-safe:animate-[tour-pulse_2.4s_ease-out_infinite]" />
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>

        {multi ? (
          <div className="flex items-center gap-3" onKeyDown={onKeyDownSteps}>
            <button
              type="button"
              onClick={() => go(stepIndex - 1)}
              disabled={stepIndex === 0}
              aria-label="Previous screen"
              className="grid h-11 w-11 place-items-center rounded-full bg-surface text-label transition-colors hover:bg-separator disabled:opacity-35"
            >
              <ChevronLeft size={20} aria-hidden />
            </button>
            <div className="flex items-center gap-1.5" role="tablist" aria-label="Screens">
              {steps.map((s, i) => (
                <button
                  key={s.title}
                  type="button"
                  role="tab"
                  aria-selected={i === stepIndex}
                  aria-label={`Screen ${i + 1}: ${s.title}`}
                  tabIndex={i === stepIndex ? 0 : -1}
                  onClick={() => go(i)}
                  className="grid h-11 place-items-center px-0.5"
                >
                  <span className={cx("block h-2 rounded-full transition-all duration-200 motion-reduce:transition-none", i === stepIndex ? "w-6 bg-label" : "w-2 bg-separator")} />
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(stepIndex + 1)}
              disabled={stepIndex === steps.length - 1}
              aria-label="Next screen"
              className="grid h-11 w-11 place-items-center rounded-full bg-surface text-label transition-colors hover:bg-separator disabled:opacity-35"
            >
              <ChevronRight size={20} aria-hidden />
            </button>
          </div>
        ) : null}
      </div>

      {/* Callouts */}
      <div className="flex min-w-0 flex-col gap-5">
        <div aria-live="polite" className="flex flex-col gap-2">
          {multi ? (
            <p className="text-[13px] font-semibold text-brand-text tabular-nums">
              Screen {stepIndex + 1} of {steps.length}
            </p>
          ) : null}
          {step.path?.length ? (
            <nav aria-label="How to get to this screen" className="flex flex-wrap items-center gap-1.5 text-[13px] text-label-2">
              <span className="mr-0.5 font-medium text-label-3">How to get here</span>
              {step.path.map((p, i) => (
                <span key={p + i} className="inline-flex items-center gap-1.5">
                  {i > 0 ? <ChevronRight size={13} className="text-label-3" aria-hidden /> : null}
                  <span className="rounded-full bg-surface px-2.5 py-0.5 font-medium text-label">{p}</span>
                </span>
              ))}
            </nav>
          ) : null}
          <h3 className={cx("font-semibold tracking-[-0.012em] text-label", compact ? "text-[22px] leading-[28px]" : "text-[26px] leading-[32px] md:text-[28px]")}>{step.title}</h3>
          {step.body ? <p className="max-w-[56ch] text-[17px] leading-[26px] text-label-2">{step.body}</p> : null}
        </div>

        <ol className="flex flex-col gap-2">
          {spots.map((s, n) => {
            const on = shown === s.i;
            return (
              <li key={`${step.screen}-${s.i}`}>
                <button
                  type="button"
                  id={`${uid}-spot-${s.i}`}
                  aria-pressed={pinned === s.i}
                  onMouseEnter={() => setActive(s.i)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(s.i)}
                  onBlur={() => setActive(null)}
                  onClick={() => setPinned(pinned === s.i ? null : s.i)}
                  className={cx(
                    "flex w-full gap-4 rounded-2xl p-4 text-left transition-colors duration-150 motion-reduce:transition-none",
                    on ? "bg-brand-tint" : "hover:bg-surface"
                  )}
                >
                  <span className={cx("grid h-7 w-7 flex-none place-items-center rounded-full text-[13px] font-semibold tabular-nums", on ? "bg-brand text-white" : s.next || s.start ? "bg-label text-white" : "bg-white text-brand-text ring-2 ring-brand")}>
                    {n + 1}
                  </span>
                  <span className="flex flex-col gap-1 pt-0.5">
                    {s.start ? <span className="text-[12px] font-semibold tracking-[0.02em] text-brand-text">Start here</span> : null}
                    <span className="text-[17px] leading-[22px] font-semibold text-label">{s.label}</span>
                    {s.body ? <span className="text-[15px] leading-[22px] text-label-2">{s.body}</span> : null}
                    {s.next && stepIndex < steps.length - 1 ? (
                      <span className="inline-flex items-center gap-1 text-[13px] font-semibold text-label">
                        Opens: {steps[stepIndex + 1].title} <ChevronRight size={14} aria-hidden />
                      </span>
                    ) : null}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>

        {multi && stepIndex < steps.length - 1 ? (
          <button
            type="button"
            onClick={() => go(stepIndex + 1)}
            className="inline-flex min-h-11 items-center gap-1 self-start rounded-full bg-label px-5 text-[15px] font-medium text-white transition-colors hover:bg-label-2"
          >
            Next: {steps[stepIndex + 1].title} <ChevronRight size={16} aria-hidden />
          </button>
        ) : multi ? (
          <button
            type="button"
            onClick={() => go(0)}
            className="inline-flex min-h-11 items-center self-start rounded-full bg-surface px-5 text-[15px] font-medium text-label transition-colors hover:bg-separator"
          >
            Start again
          </button>
        ) : null}
      </div>
    </div>
  );
}
