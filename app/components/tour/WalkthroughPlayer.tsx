"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play, RotateCcw } from "lucide-react";
import { SCREEN_ALT, type AppScreen } from "../ui";
import { resolveRoute } from "./routes";
import { boxFor, type Box, type TourStep } from "./types";

/**
 * A video-style walkthrough of real app screens, built for phones first.
 *
 * It plays like a short silent video (autoplays muted-style when scrolled into view, once),
 * but it's made of steps: a finger taps what to press, the view zooms toward what's being
 * explained, and the caption sits under the phone where it's readable. Chapters can be
 * jumped to, and every step is also written out as text below.
 */

type Beat = {
  chapter: number;
  screen: AppScreen;
  box: Box | null;
  kind: "tap" | "explain";
  label: string;
  body?: string;
  ms: number;
};

const words = (s?: string) => (s ? s.split(/\s+/).length : 0);

function tapLabel(label: string, body?: string) {
  if (body && /^(tap|hold|press|choose|scroll)\b/i.test(body)) return body.replace(/\.$/, "");
  return /^(tap|hold|press|choose|scroll|open)\b/i.test(label) ? label : `Tap ${label}`;
}

/** Turns walkthrough steps (and how to reach each screen) into a timeline of short beats. */
export function buildBeats(steps: TourStep[]): Beat[] {
  const beats: Beat[] = [];
  steps.forEach((step, ci) => {
    const prevEndsWithTap = ci > 0 && steps[ci - 1].spots.some((s) => s.next);
    const route = prevEndsWithTap ? [] : resolveRoute(step.path, step.screen);
    for (const f of route) {
      beats.push({ chapter: ci, screen: f.screen, box: boxFor(f.screen, f.at), kind: "tap", label: f.label, ms: 2000 });
    }
    const nexts = step.spots.filter((s) => s.next);
    for (const s of step.spots) {
      if (s.next) continue;
      if (s.start && route.length) continue; // the route already showed tapping this tab
      const box = boxFor(step.screen, s.at);
      if (s.start) {
        beats.push({ chapter: ci, screen: step.screen, box, kind: "tap", label: tapLabel(s.label, s.body), ms: 2000 });
        continue;
      }
      const ms = Math.min(4600, 2300 + words(s.label) * 120 + words(s.body) * 150);
      beats.push({ chapter: ci, screen: step.screen, box, kind: "explain", label: s.label, body: s.body, ms });
    }
    // If nothing on this screen got its own beat, still show it.
    if (!beats.some((b) => b.chapter === ci && b.screen === step.screen)) {
      beats.push({ chapter: ci, screen: step.screen, box: null, kind: "explain", label: step.title, body: step.body, ms: 3000 });
    }
    if (ci < steps.length - 1) {
      for (const s of nexts) {
        beats.push({ chapter: ci, screen: step.screen, box: boxFor(step.screen, s.at), kind: "tap", label: tapLabel(s.label, s.body), body: s.body && !/^(tap|hold|press)/i.test(s.body) ? s.body : undefined, ms: 2300 });
      }
    }
  });
  return beats;
}

/** Gentle zoom toward a region, clamped so the screen always fills the phone. */
function camera(box: Box | null, kind: Beat["kind"]) {
  if (!box || kind === "tap") return { z: 1, cx: 0.5, cy: 0.5 };
  const w = box[2] / 100;
  const h = Math.max(box[3], 2) / 100;
  const max = 1.3;
  const z = Math.max(1.04, Math.min(max, 0.95 / (w + 0.05), 0.45 / h));
  const clamp = (v: number) => Math.min(1 - 0.5 / z, Math.max(0.5 / z, v));
  return { z, cx: clamp((box[0] + box[2] / 2) / 100), cy: clamp((box[1] + box[3] / 2) / 100) };
}

const fmt = (ms: number) => {
  const s = Math.round(ms / 1000);
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
};

const cx = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(" ");

export default function WalkthroughPlayer({ steps, label = "App walkthrough" }: { steps: TourStep[]; label?: string }) {
  const beats = useMemo(() => buildBeats(steps), [steps]);
  const starts = useMemo(() => {
    let t = 0;
    return beats.map((b) => {
      const s = t;
      t += b.ms;
      return s;
    });
  }, [beats]);
  const total = beats.reduce((a, b) => a + b.ms, 0);

  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [ended, setEnded] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [elapsed, setElapsed] = useState(0); // ms into the current beat, for the progress bar and clock

  const root = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  const autoPaused = useRef(false);
  const clock = useRef({ beatStart: 0, offset: 0 });

  const beat = beats[index];
  const chapter = beat.chapter;
  const cam = camera(beat.box, beat.kind);
  const step = steps[chapter];

  // Preload every screen used.
  useEffect(() => {
    new Set(beats.map((b) => b.screen)).forEach((s) => {
      const img = new window.Image();
      img.src = `/app-screens/${s}.webp`;
    });
  }, [beats]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const on = () => setReduced(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);

  const goTo = useCallback(
    (i: number, keepPlaying = true) => {
      const n = Math.max(0, Math.min(beats.length - 1, i));
      setIndex(n);
      setEnded(false);
      setElapsed(0);
      clock.current = { beatStart: performance.now(), offset: 0 };
      if (!keepPlaying) setPlaying(false);
    },
    [beats.length]
  );

  const play = useCallback(() => {
    started.current = true;
    if (ended) {
      setIndex(0);
      setEnded(false);
      setElapsed(0);
      clock.current = { beatStart: performance.now(), offset: 0 };
    } else {
      clock.current = { beatStart: performance.now(), offset: elapsed };
    }
    setPlaying(true);
  }, [ended, elapsed]);

  const pause = useCallback(() => setPlaying(false), []);

  // The clock: advance beats while playing.
  useEffect(() => {
    if (!playing) return;
    let raf = 0;
    const tick = (now: number) => {
      const e = clock.current.offset + (now - clock.current.beatStart);
      if (e >= beat.ms) {
        if (index >= beats.length - 1) {
          setElapsed(beat.ms);
          setPlaying(false);
          setEnded(true);
          return;
        }
        clock.current = { beatStart: now, offset: 0 };
        setElapsed(0);
        setIndex((i) => i + 1);
        return;
      }
      setElapsed(e);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [playing, index, beat.ms, beats.length]);

  // Autoplay once when it scrolls into view (not for reduced motion); pause when it leaves.
  useEffect(() => {
    const el = stage.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.55) {
          if (!started.current && !reduced) {
            started.current = true;
            clock.current = { beatStart: performance.now(), offset: 0 };
            setPlaying(true);
          } else if (autoPaused.current) {
            autoPaused.current = false;
            clock.current = { beatStart: performance.now(), offset: elapsedRef.current };
            setPlaying(true);
          }
        } else if (entry.intersectionRatio < 0.15 && playingRef.current) {
          autoPaused.current = true;
          setPlaying(false);
        }
      },
      { threshold: [0, 0.15, 0.55, 1] }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduced]);

  const playingRef = useRef(playing);
  const elapsedRef = useRef(elapsed);
  playingRef.current = playing;
  elapsedRef.current = elapsed;

  const chapterStart = (c: number) => beats.findIndex((b) => b.chapter === c);
  const nowMs = starts[index] + elapsed;

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") { e.preventDefault(); goTo(index + 1); }
    if (e.key === "ArrowLeft") { e.preventDefault(); goTo(index - 1); }
  };

  const chapterProgress = (c: number) => {
    const first = chapterStart(c);
    const last = beats.length - 1 - [...beats].reverse().findIndex((b) => b.chapter === c);
    const a = starts[first];
    const b = starts[last] + beats[last].ms;
    return Math.max(0, Math.min(1, (nowMs - a) / (b - a)));
  };

  const btn = "grid h-11 w-11 place-items-center rounded-full text-label transition-colors hover:bg-separator disabled:opacity-35";

  return (
    <div
      ref={root}
      role="region"
      aria-roledescription="video walkthrough"
      aria-label={label}
      onKeyDown={onKey}
      className="grid items-start gap-8 md:grid-cols-[minmax(0,380px)_1fr] lg:gap-14"
    >
      {/* Player */}
      <div ref={stage} className="mx-auto flex w-full max-w-[380px] scroll-mt-20 flex-col items-center">
        <button
          type="button"
          onClick={() => (playing ? pause() : play())}
          aria-label={playing ? "Pause walkthrough" : ended ? "Replay walkthrough" : "Play walkthrough"}
          className="relative w-[min(76vw,320px,calc((100svh-262px)*0.47))] min-w-[200px] md:w-[min(300px,calc((100svh-200px)*0.45))] shrink-0 cursor-pointer rounded-[46px] bg-[#1D1B19] p-2.5 shadow-[inset_0_0_0_2px_#3A3633,0_24px_60px_rgba(29,27,25,0.18)] outline-offset-4"
        >
          <div className="relative aspect-[393/852] overflow-hidden rounded-[36px] bg-white">
            {/* Screen layer: a new screen pushes in; the camera eases toward what's explained. */}
            <div key={`${beat.screen}-${chapter}`} className="absolute inset-0 motion-safe:animate-[wt-push_420ms_cubic-bezier(.2,.8,.2,1)_both]">
              <div
                className="absolute inset-0 origin-top-left transition-transform duration-700 ease-[cubic-bezier(.4,0,.2,1)] motion-reduce:transition-none"
                style={{
                  transform: reduced
                    ? "none"
                    : `translate(${(0.5 - cam.cx * cam.z) * 100}%, ${(0.5 - cam.cy * cam.z) * 100}%) scale(${cam.z})`,
                }}
              >
                <Image src={`/app-screens/${beat.screen}.webp`} alt={SCREEN_ALT[beat.screen]} fill unoptimized loading="eager" className="object-cover" />
                {beat.box ? (
                  <span
                    aria-hidden
                    className="absolute rounded-[10px] ring-2 ring-brand transition-all duration-500 motion-reduce:transition-none"
                    style={{
                      left: `calc(${beat.box[0]}% - 3px)`,
                      top: `calc(${beat.box[1]}% - 3px)`,
                      width: `calc(${beat.box[2]}% + 6px)`,
                      height: `calc(${beat.box[3]}% + 6px)`,
                      boxShadow: beat.kind === "explain" ? "0 0 0 999px rgba(29,27,25,0.38)" : "0 0 0 999px rgba(29,27,25,0.18)",
                    }}
                  />
                ) : null}
                {beat.kind === "tap" && beat.box ? (
                  <span
                    key={`tap-${index}`}
                    aria-hidden
                    className="pointer-events-none absolute"
                    style={{ left: `${beat.box[0] + beat.box[2] / 2}%`, top: `${beat.box[1] + beat.box[3] / 2}%` }}
                  >
                    <span
                      className="absolute -top-5 -left-5 block h-10 w-10 rounded-full border-2 border-brand motion-safe:animate-[wt-ripple_var(--d)_ease-out_both]"
                      style={{ ["--d" as string]: `${beat.ms}ms`, animationPlayState: playing ? "running" : "paused" }}
                    />
                    <span
                      className="absolute -top-[18px] -left-[18px] block h-9 w-9 rounded-full border-[3px] border-white bg-[#1D1B19]/30 shadow-[0_4px_12px_rgba(0,0,0,0.3)] motion-safe:animate-[wt-finger_var(--d)_cubic-bezier(.3,.7,.2,1)_both]"
                      style={{ ["--d" as string]: `${beat.ms}ms`, animationPlayState: playing ? "running" : "paused" }}
                    />
                  </span>
                ) : null}
              </div>
            </div>
            <span aria-hidden className="absolute top-2.5 left-1/2 z-10 h-[20px] w-[30%] -translate-x-1/2 rounded-full bg-[#1D1B19]" />
            {!playing ? (
              <span aria-hidden className="absolute inset-0 z-10 grid place-items-center bg-[#1D1B19]/10">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-white/95 text-label shadow-[0_8px_24px_rgba(29,27,25,0.25)]">
                  {ended ? <RotateCcw size={26} /> : <Play size={26} className="ml-1" fill="currentColor" />}
                </span>
              </span>
            ) : null}
          </div>
        </button>

        {/* Caption: under the phone, always readable */}
        <div className="mt-5 flex min-h-[104px] w-full flex-col gap-1 text-center md:min-h-[96px]" aria-live={playing ? "off" : "polite"}>
          <p className="text-[13px] font-semibold text-brand-text tabular-nums">
            Step {chapter + 1} of {steps.length} · {step.title}
          </p>
          <p className="text-[19px] leading-[25px] font-semibold text-balance text-label">{beat.label}</p>
          {beat.body ? <p className="text-[15px] leading-[22px] text-pretty text-label-2">{beat.body}</p> : null}
        </div>

        {/* Progress: one segment per step */}
        <div className="mt-3 flex w-full gap-1" aria-hidden>
          {steps.map((s, c) => (
            <span key={c} className="h-1 flex-1 overflow-hidden rounded-full bg-separator">
              <span className="block h-full rounded-full bg-brand" style={{ width: `${chapterProgress(c) * 100}%` }} />
            </span>
          ))}
        </div>

        {/* Controls */}
        <div className="mt-2 flex w-full items-center justify-between">
          <span className="w-20 text-[13px] text-label-2 tabular-nums">{fmt(nowMs)} / {fmt(total)}</span>
          <div className="flex items-center gap-1">
            <button type="button" className={btn} onClick={() => goTo(index - 1)} disabled={index === 0} aria-label="Previous">
              <ChevronLeft size={22} aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => (playing ? pause() : play())}
              className="grid h-12 w-12 place-items-center rounded-full bg-label text-white transition-colors hover:bg-label-2"
              aria-label={playing ? "Pause" : ended ? "Replay" : "Play"}
            >
              {playing ? <Pause size={20} fill="currentColor" aria-hidden /> : ended ? <RotateCcw size={20} aria-hidden /> : <Play size={20} className="ml-0.5" fill="currentColor" aria-hidden />}
            </button>
            <button type="button" className={btn} onClick={() => goTo(index + 1)} disabled={index === beats.length - 1} aria-label="Next">
              <ChevronRight size={22} aria-hidden />
            </button>
          </div>
          <span className="w-20 text-right text-[13px] text-label-2 tabular-nums">{beats.length > 1 ? `${index + 1}/${beats.length}` : ""}</span>
        </div>
      </div>

      {/* Chapters and the full text: jump anywhere, read instead of watching */}
      <div className="flex min-w-0 flex-col gap-3">
        <h3 className="text-[15px] font-semibold text-label-2">
          {steps.length} {steps.length === 1 ? "step" : "steps"} · {fmt(total)}
        </h3>
        <ol className="flex flex-col gap-2">
          {steps.map((s, c) => {
            const on = c === chapter;
            const done = chapterProgress(c) >= 1 && !on;
            const first = chapterStart(c);
            return (
              <li key={c} className={cx("rounded-2xl transition-colors", on ? "bg-white ring-1 ring-separator" : "")}>
                <button
                  type="button"
                  onClick={() => { goTo(first); if (!playing) play(); }}
                  aria-current={on ? "step" : undefined}
                  className="flex min-h-12 w-full items-start gap-3 rounded-2xl px-4 py-3 text-left hover:bg-white/70"
                >
                  <span className={cx("mt-0.5 grid h-7 w-7 flex-none place-items-center rounded-full text-[13px] font-semibold tabular-nums", on ? "bg-brand text-white" : done ? "bg-label text-white" : "bg-surface text-label")}>
                    {c + 1}
                  </span>
                  <span className="flex flex-col gap-0.5">
                    <span className="text-[17px] leading-[24px] font-semibold text-label">{s.title}</span>
                    {s.path?.length ? <span className="text-[13px] text-label-2">{s.path.join(" › ")}</span> : null}
                  </span>
                </button>
                {on ? (
                  <ul className="flex flex-col gap-1 px-4 pb-3 pl-14">
                    {beats.map((b, i) =>
                      b.chapter === c ? (
                        <li key={i}>
                          <button
                            type="button"
                            onClick={() => goTo(i)}
                            className={cx("w-full rounded-lg px-2 py-1.5 text-left text-[15px] leading-[21px] transition-colors", i === index ? "bg-brand-tint text-label" : "text-label-2 hover:bg-surface")}
                          >
                            <span className="font-medium text-label">{b.label}</span>
                            {b.body ? <span>. {b.body}</span> : null}
                          </button>
                        </li>
                      ) : null
                    )}
                  </ul>
                ) : null}
              </li>
            );
          })}
        </ol>
        <details className="group mt-2 rounded-2xl px-4 py-2 text-[15px] text-label-2 open:bg-white open:ring-1 open:ring-separator">
          <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 font-medium text-label">
            <ChevronRight size={16} className="transition-transform group-open:rotate-90" aria-hidden /> Read every step as text
          </summary>
          <ol className="flex list-decimal flex-col gap-3 pb-3 pl-6">
            {steps.map((s, c) => (
              <li key={c}>
                <p className="font-semibold text-label">{s.title}{s.path?.length ? <span className="font-normal text-label-2"> ({s.path.join(" › ")})</span> : null}</p>
                <ul className="mt-1 flex list-disc flex-col gap-0.5 pl-4">
                  {beats.filter((b) => b.chapter === c).map((b, i) => (
                    <li key={i}><span className="text-label">{b.label}</span>{b.body ? `. ${b.body}` : ""}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </details>
      </div>
    </div>
  );
}
