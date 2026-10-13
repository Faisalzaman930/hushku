"use client";

import { useRef, type ReactNode } from "react";

/**
 * Subtle life for app phones: rises into place (on load in the hero, on scroll elsewhere),
 * floats gently, and tilts toward the cursor with a soft sheen. All CSS-driven, so the
 * server-rendered markup is identical and nothing flashes on hydration. Reduced motion: still.
 */
export default function DeviceMotion({
  children,
  className = "",
  delay = 0,
  onLoad = false,
  radius = "rounded-[46px]",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  onLoad?: boolean;
  radius?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function move(e: React.PointerEvent) {
    if (e.pointerType !== "mouse") return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width;
    const ny = (e.clientY - r.top) / r.height;
    el.style.setProperty("--rx", `${((0.5 - ny) * 10).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${((nx - 0.5) * 12).toFixed(2)}deg`);
    el.style.setProperty("--gx", `${(nx * 100).toFixed(1)}%`);
    el.style.setProperty("--gy", `${(ny * 100).toFixed(1)}%`);
    el.dataset.active = "";
  }
  function leave() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
    delete el.dataset.active;
  }

  return (
    <div className={`${onLoad ? "device-rise-load" : "device-rise-view"} ${className}`} style={{ ["--d" as string]: `${delay}ms` }}>
      <div className="device-float" style={{ animationDelay: `${-((delay / 150) % 7) * 1.3}s` }}>
        <div ref={ref} onPointerMove={move} onPointerLeave={leave} className={`device-tilt relative ${radius}`}>
          {children}
        </div>
      </div>
    </div>
  );
}
