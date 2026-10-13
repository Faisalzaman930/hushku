"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  ChevronRight,
  Heart,
  Home,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Stethoscope,
  Syringe,
  Users,
  type LucideIcon,
} from "lucide-react";
import { HushkuLogo } from "./Logo";

type Feature = { name: string; href: string; icon: LucideIcon; desc: string; soon?: boolean };

const FEATURES: Feature[] = [
  { name: "Playdates", href: "/playdates", icon: Heart, desc: "Meet compatible pets nearby" },
  { name: "Adoption", href: "/adoption", icon: Home, desc: "Pets looking for a home" },
  { name: "Fostering", href: "/fostering", icon: Users, desc: "Open your home for a while" },
  { name: "Shelters", href: "/shelters", icon: ShieldCheck, desc: "Rescues and shelters near you" },
  { name: "Lost & found", href: "/lost-and-found", icon: MapPin, desc: "Lost, found and rescue alerts" },
  { name: "Health & care", href: "/health", icon: Syringe, desc: "Reminders, weight and records" },
  { name: "Social feed", href: "/social", icon: MessageCircle, desc: "Coming soon", soon: true },
  { name: "Vets", href: "/vets", icon: Stethoscope, desc: "Coming soon", soon: true },
];

const LINKS = [
  { name: "Tools", href: "/tools" },
  { name: "Breeds", href: "/breeds" },
  { name: "Resources", href: "/resources" },
  { name: "Roadmap", href: "/roadmap" },
  { name: "About", href: "/about" },
];

export function AnnouncementBar() {
  return (
    <div role="region" aria-label="Announcement" className="flex justify-center border-b border-separator bg-bg-2 px-4 py-2.5">
      <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-[13px] leading-[18px] text-label">
        <span aria-hidden className="h-1.5 w-1.5 flex-none rounded-full bg-brand" />
        The app is built. Coming soon to the App Store and Google Play.
        <Link href="/join" className="inline-flex items-center font-semibold text-brand-text hover:underline underline-offset-[3px]">
          Join the waitlist
          <ChevronRight size={14} strokeWidth={2.25} />
        </Link>
      </p>
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setDropOpen(false);
      }
    };
    const onDown = (e: PointerEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) setDropOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDown);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setDropOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const featureActive = FEATURES.some((f) => pathname?.startsWith(f.href));
  const linkCls = (active: boolean) =>
    `rounded-full px-3 py-1.5 text-[14px] font-medium tracking-[-0.005em] transition-colors ${active ? "text-label" : "text-label-2 hover:text-label"}`;

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[300] focus:rounded-full focus:bg-label focus:px-4 focus:py-2 focus:text-white">
        Skip to content
      </a>
      <AnnouncementBar />
      <header
        className={`sticky top-0 z-[200] w-full bg-white/[0.72] backdrop-blur-[20px] backdrop-saturate-[1.8] transition-shadow duration-200 ${scrolled ? "shadow-[0_1px_0_var(--color-separator)]" : ""}`}
      >
        <div className="mx-auto flex h-14 max-w-[1200px] items-center gap-6 px-4 md:h-[52px] md:px-8">
          <Link href="/" aria-label="Hushku home" className="flex items-center text-brand">
            <HushkuLogo variant="horizontal" className="h-[22px] w-auto" title="" />
          </Link>

          <nav aria-label="Main" className="mx-auto hidden items-center gap-1 md:flex">
            <div className="relative" ref={dropRef}>
              <button
                type="button"
                aria-expanded={dropOpen}
                aria-haspopup="true"
                onClick={() => setDropOpen((v) => !v)}
                className={`${linkCls(featureActive || dropOpen)} inline-flex items-center gap-1`}
              >
                Features
                <ChevronDown size={14} strokeWidth={2} className={`transition-transform duration-200 ${dropOpen ? "rotate-180" : ""}`} />
              </button>
              {dropOpen ? (
                <div className="absolute left-1/2 top-[calc(100%+10px)] w-[560px] -translate-x-1/2 rounded-3xl bg-white p-3 shadow-[0_16px_40px_rgba(29,27,25,0.12),0_2px_6px_rgba(29,27,25,0.06)]">
                  <ul className="grid grid-cols-2 gap-0.5">
                    {FEATURES.map((f) => (
                      <li key={f.name}>
                        <Link
                          href={f.href}
                          className="flex items-start gap-3 rounded-[14px] p-3 transition-colors hover:bg-surface"
                        >
                          <span className={`grid h-9 w-9 flex-none place-items-center rounded-[10px] ${f.soon ? "bg-surface text-label-2" : "bg-brand-tint text-brand-text"}`}>
                            <f.icon size={20} strokeWidth={1.75} />
                          </span>
                          <span className="flex min-w-0 flex-col gap-0.5">
                            <span className="text-[15px] leading-5 font-semibold text-label">{f.name}</span>
                            <span className="text-[13px] leading-[18px] text-label-2">{f.desc}</span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-2 border-t border-separator px-3 pt-3 pb-1 text-[13px] text-label-2">
                    Every feature lives in the Hushku app for iPhone and Android.
                  </p>
                </div>
              ) : null}
            </div>
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} className={linkCls(!!pathname?.startsWith(l.href))} aria-current={pathname?.startsWith(l.href) ? "page" : undefined}>
                {l.name}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2 md:ml-0">
            <Link
              href="/join"
              className="inline-flex min-h-9 items-center rounded-full bg-brand px-4 text-[15px] font-medium text-white transition-colors hover:bg-brand-hover"
            >
              Join waitlist
            </Link>
            <button
              type="button"
              className="-mr-2.5 grid h-11 w-11 place-items-center rounded-full text-label md:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span aria-hidden className="relative block h-3 w-[18px]">
                <span className={`absolute left-0 h-[1.75px] w-[18px] rounded bg-current transition-all duration-200 ${menuOpen ? "top-[5px] rotate-45" : "top-px"}`} />
                <span className={`absolute left-0 h-[1.75px] w-[18px] rounded bg-current transition-all duration-200 ${menuOpen ? "top-[5px] -rotate-45" : "top-[9px]"}`} />
              </span>
            </button>
          </div>
        </div>

        {menuOpen ? (
          <div id="mobile-menu" className="h-[calc(100dvh-56px)] overflow-y-auto bg-white px-4 pb-10 md:hidden">
            <details className="group border-b border-separator" open={featureActive}>
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between text-[24px] font-semibold tracking-[-0.01em] text-label">
                Features
                <ChevronDown size={20} className="text-label-2 transition-transform group-open:rotate-180" />
              </summary>
              <ul className="pb-3 pl-4">
                {FEATURES.map((f) => (
                  <li key={f.name}>
                    <Link href={f.href} className="flex min-h-11 items-center gap-2 text-[17px] text-label-2">
                      {f.name}
                      {f.soon ? <span className="rounded-full bg-surface px-2 text-[12px] font-semibold text-label-2">Soon</span> : null}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="flex min-h-14 items-center border-b border-separator text-[24px] font-semibold tracking-[-0.01em] text-label">
                {l.name}
              </Link>
            ))}
          </div>
        ) : null}
      </header>
    </>
  );
}
