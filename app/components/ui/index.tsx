/**
 * Hushku design-system primitives for the website.
 * Built from the Hushku Design System tokens (see app/globals.css).
 * The website only explains the app: no component here performs an in-app action.
 */
import Link from "next/link";
import Image from "next/image";
import DeviceMotion from "./DeviceMotion";
import type { ReactNode } from "react";
import { ChevronRight, type LucideIcon } from "lucide-react";

const cx = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(" ");

/* ── Layout ──────────────────────────────────────────────────────────────── */

export function Section({
  children,
  alt = false,
  dark = false,
  className = "",
  id,
}: {
  children: ReactNode;
  alt?: boolean;
  dark?: boolean;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cx(
        "px-4 py-16 md:px-8 md:py-24 lg:py-32",
        alt && "bg-bg-2",
        dark && "bg-[#0F0E0D] text-[#F5F2EE]",
        className,
      )}
    >
      <div className="mx-auto max-w-[1200px]">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  lead,
  as: Tag = "h2",
  size = "m",
  align = "center",
  dark = false,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  as?: "h1" | "h2" | "h3";
  size?: "xl" | "l" | "m" | "s";
  align?: "center" | "start";
  dark?: boolean;
  children?: ReactNode;
}) {
  const sizes = {
    xl: "text-[44px] leading-[1.06] tracking-[-0.022em] md:text-[56px] lg:text-[80px] lg:leading-[1.05] lg:tracking-[-0.025em]",
    l: "text-[40px] leading-[1.08] tracking-[-0.02em] md:text-[48px] lg:text-[64px] lg:leading-[1.06] lg:tracking-[-0.022em]",
    m: "text-[32px] leading-[1.12] tracking-[-0.015em] md:text-[40px] lg:text-[48px] lg:leading-[1.08] lg:tracking-[-0.02em]",
    s: "text-[26px] leading-[1.2] tracking-[-0.01em] md:text-[32px]",
  };
  return (
    <div className={cx("flex max-w-[880px] flex-col gap-3", align === "center" ? "mx-auto items-center text-center" : "items-start")}>
      {eyebrow ? (
        <p className={cx("text-[15px] font-semibold leading-5", dark ? "text-[#FF7A90]" : "text-brand-text")}>{eyebrow}</p>
      ) : null}
      <Tag className={cx("font-semibold text-balance", sizes[size], dark ? "text-[#F5F2EE]" : "text-label")}>{title}</Tag>
      {lead ? (
        <p className={cx("mt-2 max-w-[640px] text-[19px] leading-[1.45] tracking-[-0.006em] text-pretty lg:text-[21px]", dark ? "text-[#ABA49C]" : "text-label-2")}>
          {lead}
        </p>
      ) : null}
      {children ? (
        <div className={cx("mt-6 flex flex-wrap items-center gap-x-6 gap-y-4", align === "center" && "justify-center")}>{children}</div>
      ) : null}
    </div>
  );
}

/* ── Actions ─────────────────────────────────────────────────────────────── */

type BtnVariant = "primary" | "secondary" | "inverse" | "plain";
export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: BtnVariant;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const v = {
    primary: "bg-brand text-white hover:bg-brand-hover active:bg-brand-pressed",
    secondary: "bg-surface text-label hover:bg-separator",
    inverse: "bg-label text-white hover:bg-label-2",
    plain: "bg-transparent text-brand-text hover:bg-brand-tint",
  }[variant];
  const s = { sm: "min-h-9 px-4 text-[15px]", md: "min-h-11 px-5 text-[17px]", lg: "min-h-14 px-7 text-[17px] font-semibold" }[size];
  return (
    <Link
      href={href}
      className={cx(
        "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-[-0.011em] whitespace-nowrap transition-[background-color,transform] duration-150 active:scale-[0.97]",
        v,
        s,
        className,
      )}
    >
      {children}
    </Link>
  );
}

export function TextLink({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link href={href} className={cx("group inline-flex items-center gap-0.5 text-[17px] font-medium text-brand-text hover:underline underline-offset-[3px]", className)}>
      {children}
      <ChevronRight size={16} strokeWidth={2.25} className="transition-transform duration-150 group-hover:translate-x-0.5" />
    </Link>
  );
}

export function Badge({ children, tone = "neutral" }: { children: ReactNode; tone?: "neutral" | "brand" | "success" | "warning" | "info" }) {
  const t = {
    neutral: "bg-surface text-label-2",
    brand: "bg-brand-tint text-brand-text",
    success: "bg-success-tint text-success",
    warning: "bg-warning-tint text-warning",
    info: "bg-info-tint text-info",
  }[tone];
  return <span className={cx("inline-flex min-h-6 items-center gap-1 rounded-full px-2.5 text-[13px] font-semibold leading-[18px] whitespace-nowrap", t)}>{children}</span>;
}

/* ── App presentation ────────────────────────────────────────────────────── */

export type AppScreen =
  | "welcome" | "home" | "home-synced" | "discover" | "pet-profile" | "alerts" | "messages" | "chat"
  | "care-team" | "invite-member" | "notifications" | "remind-sheet" | "add-reminder" | "health-records" | "weight"
  | "filters" | "request-confirm" | "listing" | "post-listing" | "shelters" | "shelter-signup"
  | "lost-report" | "lost-detail" | "lost-contact" | "chat-actions" | "role" | "add-pet" | "privacy" | "notification-settings";

export const SCREEN_ALT: Record<AppScreen, string> = {
  welcome: "Hushku app welcome screen with Create Account, Google and Apple sign-in",
  home: "Hushku Home screen: Bella’s care team, today’s care checklist and upcoming reminders",
  "home-synced": "Hushku Home on a care team member’s phone: Heartworm tablet ticked, done by Faisal",
  discover: "Hushku Discover feed showing Bruno, a French Bulldog looking for a playdate",
  "pet-profile": "Bruno’s pet profile in Hushku with a Send playdate invite button",
  alerts: "Hushku Alerts: Luna, a lost Ragdoll, last seen two hours ago",
  messages: "Hushku Messages inbox",
  chat: "A Hushku chat planning a playdate after a request was accepted",
  "care-team": "Hushku Care Team screen: an owner, a caregiver, a viewer and a pending invite",
  "invite-member": "Inviting Sarah to a pet’s care team as a Caregiver",
  notifications: "Hushku notifications: a care team invite, a care reminder and a playdate invite",
  "remind-sheet": "Send a reminder sheet: choosing which care team member to remind about Heartworm tablet",
  "add-reminder": "New reminder form with type, title, date, time and repeat",
  "health-records": "Health records list: vaccination, vet visit, medication and lab report",
  weight: "Weight tracker with current weight, a trend chart and history",
  filters: "Discover filters: looking for, location, distance, pet type, gender and breed",
  "request-confirm": "Confirmation sheet: Send playdate invite?",
  listing: "Adoption listing for Miso, a Scottish Fold, posted by a verified shelter",
  "post-listing": "New foster listing form with photos, basics, how long and special care",
  shelters: "Shelters tab in Discover listing shelters and rescues nearby",
  "shelter-signup": "Shelter profile setup with logo, name, location and services offered",
  "lost-report": "Report a lost pet form: whose pet, photos, markings, last seen area and reward",
  "lost-detail": "A lost pet report with last seen time, approximate area and Mark as found",
  "lost-contact": "Help with Luna sheet: I found Luna, I saw Luna, I have information",
  "chat-actions": "Message actions: Reply, Copy, Unsend and Report",
  role: "Choosing how to use Hushku: Pet owner, Shelter or Explorer",
  "add-pet": "Add your pet: photos, name, type, breed, spayed or neutered and what you’re looking for",
  privacy: "Account privacy: public or private, who can add you to their Circle, blocked accounts",
  "notification-settings": "Notification settings with switches for each kind of notification",
};

/** A phone showing a real Hushku app screen. The web never shows a working feature. */
export function Device({
  screen,
  size = "md",
  tilt,
  priority = false,
  delay = 0,
  className = "",
}: {
  screen: AppScreen;
  size?: "sm" | "md";
  tilt?: "left" | "right";
  priority?: boolean;
  /** Entrance delay in ms, to stagger phones that appear together. */
  delay?: number;
  className?: string;
}) {
  const w = size === "sm" ? "w-[200px] md:w-[220px] rounded-[38px] p-2" : "w-[260px] md:w-[280px] rounded-[46px] p-2.5";
  const r = size === "sm" ? "rounded-[30px]" : "rounded-[36px]";
  const t = tilt === "left" ? "motion-safe:-rotate-[4deg]" : tilt === "right" ? "motion-safe:rotate-[4deg]" : "";
  return (
    <DeviceMotion className={cx("h-fit shrink-0 self-center", t, className)} delay={delay} onLoad={priority} radius={size === "sm" ? "rounded-[38px]" : "rounded-[46px]"}>
      <div className={cx("relative bg-[#1D1B19] shadow-[inset_0_0_0_2px_#3A3633,0_0_0_1px_rgba(255,255,255,0.08),0_24px_60px_rgba(29,27,25,0.18)]", w)}>
        <div className={cx("relative aspect-[393/852] overflow-hidden bg-bg-2", r)}>
          <Image
            src={`/app-screens/${screen}.webp`}
            alt={SCREEN_ALT[screen]}
            fill
            sizes={size === "sm" ? "220px" : "280px"}
            priority={priority}
            className="object-cover"
          />
          <span aria-hidden className="absolute top-2.5 left-1/2 h-[22px] w-[30%] -translate-x-1/2 rounded-full bg-[#1D1B19]" />
        </div>
      </div>
    </DeviceMotion>
  );
}

/** Hero trio: Discover, Home (centre), Alerts. */
export function DeviceTrio({ center = "home", left = "discover", right = "alerts" }: { center?: AppScreen; left?: AppScreen; right?: AppScreen }) {
  return (
    <div className="flex items-center justify-center gap-6 rounded-[32px] bg-surface px-4 py-12 md:gap-10 md:py-16">
      <Device screen={left} size="sm" tilt="left" priority delay={150} className="hidden md:block" />
      <Device screen={center} priority />
      <Device screen={right} size="sm" tilt="right" priority delay={300} className="hidden md:block" />
    </div>
  );
}

/** Pre-launch store availability. Status, not links; swap for official badges at launch. */
export function StoreStatus({ className = "", dark = false }: { className?: string; dark?: boolean }) {
  return (
    <ul aria-label="Availability" className={cx("flex flex-wrap justify-center gap-3", className)}>
      {["App Store", "Google Play"].map((s) => (
        <li key={s} className={cx("flex min-h-12 min-w-[136px] flex-col justify-center rounded-[14px] px-5 py-1.5 text-left", dark ? "bg-[#F5F2EE] text-[#1D1B19]" : "bg-label text-white")}>
          <span className="text-[11px] font-medium leading-[14px] opacity-80">Coming soon on</span>
          <span className="text-[17px] font-semibold leading-[22px] tracking-[-0.01em]">{s}</span>
        </li>
      ))}
    </ul>
  );
}

/* ── Content blocks ──────────────────────────────────────────────────────── */

export function FeatureTile({
  eyebrow,
  title,
  body,
  icon: Icon,
  href,
  linkLabel,
  tone = "default",
  className = "",
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  body?: ReactNode;
  icon?: LucideIcon;
  href?: string;
  linkLabel?: string;
  tone?: "default" | "brand" | "raised";
  className?: string;
  children?: ReactNode;
}) {
  const brand = tone === "brand";
  return (
    <article
      className={cx(
        "group relative flex min-h-[240px] min-w-0 flex-col justify-between gap-6 overflow-hidden rounded-3xl p-6 md:p-8",
        brand ? "bg-brand text-white" : tone === "raised" ? "bg-white ring-1 ring-separator" : "bg-surface",
        href && "transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[0_2px_4px_rgba(29,27,25,0.04),0_8px_24px_rgba(29,27,25,0.06)]",
        className,
      )}
    >
      <div className="flex flex-col items-start gap-2">
        {Icon ? (
          <span className={cx("mb-2 grid h-12 w-12 place-items-center rounded-[14px]", brand ? "bg-white text-brand-pressed" : "bg-brand-tint text-brand-text")}>
            <Icon size={24} strokeWidth={1.75} />
          </span>
        ) : null}
        {eyebrow ? <p className={cx("text-[15px] font-semibold", brand ? "text-white" : "text-brand-text")}>{eyebrow}</p> : null}
        <h3 className={cx("text-[21px] leading-[1.25] font-semibold tracking-[-0.008em] text-balance md:text-[24px]", brand ? "text-white" : "text-label")}>
          {href ? (
            <Link href={href} className="after:absolute after:inset-0 after:content-['']">
              {title}
            </Link>
          ) : (
            title
          )}
        </h3>
        {body ? <p className={cx("max-w-[46ch] text-[17px] leading-[26px] tracking-[-0.011em]", brand ? "text-white" : "text-label-2")}>{body}</p> : null}
        {href && linkLabel ? (
          <span aria-hidden className={cx("mt-1 inline-flex items-center gap-0.5 text-[17px] font-medium", brand ? "text-white" : "text-brand-text")}>
            {linkLabel}
            <ChevronRight size={16} strokeWidth={2.25} className="transition-transform group-hover:translate-x-0.5" />
          </span>
        ) : null}
      </div>
      {children}
    </article>
  );
}

export function LinkCard({ icon: Icon, title, body, href, badge }: { icon?: LucideIcon; title: string; body?: string; href?: string; badge?: string }) {
  return (
    <article className={cx("group relative flex min-w-0 items-center gap-4 rounded-3xl bg-surface p-5", href && "transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(29,27,25,0.06)]")}>
      {Icon ? (
        <span className="grid h-12 w-12 flex-none place-items-center rounded-[14px] bg-brand-tint text-brand-text">
          <Icon size={24} strokeWidth={1.75} />
        </span>
      ) : null}
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <h3 className="flex flex-wrap items-center gap-2 text-[17px] leading-6 font-semibold text-label">
          {href ? (
            <Link href={href} className="after:absolute after:inset-0 after:content-['']">
              {title}
            </Link>
          ) : (
            title
          )}
          {badge ? <Badge tone="brand">{badge}</Badge> : null}
        </h3>
        {body ? <p className="text-[15px] leading-[22px] text-label-2">{body}</p> : null}
      </div>
      {href ? <ChevronRight size={18} className="flex-none text-label-3 transition-transform group-hover:translate-x-0.5" /> : null}
    </article>
  );
}

export function Steps({ items }: { items: { title: string; body?: string; meta?: string }[] }) {
  return (
    <ol className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {items.map((s, i) => (
        <li key={s.title} className="flex flex-col gap-4 rounded-3xl bg-surface p-6">
          <span aria-hidden className="grid h-9 w-9 place-items-center rounded-full bg-label text-[15px] font-semibold text-white tabular-nums">
            {i + 1}
          </span>
          <div>
            <h3 className="mb-2 text-[19px] leading-[26px] font-semibold tracking-[-0.005em] text-label">{s.title}</h3>
            {s.body ? <p className="text-[15px] leading-[22px] text-label-2">{s.body}</p> : null}
            {s.meta ? <p className="mt-3 text-[13px] text-label-2">{s.meta}</p> : null}
          </div>
        </li>
      ))}
    </ol>
  );
}

export function ChipList({ items, label }: { items: { label: string; icon?: LucideIcon }[]; label: string }) {
  return (
    <ul aria-label={label} className="flex flex-wrap gap-2">
      {items.map(({ label: l, icon: Icon }) => (
        <li key={l} className="inline-flex min-h-9 items-center gap-1.5 rounded-full bg-surface px-4 text-[15px] font-medium text-label">
          {Icon ? <Icon size={16} strokeWidth={1.75} className="text-label-2" /> : null}
          {l}
        </li>
      ))}
    </ul>
  );
}

export { cx };
