import {
  Bell, Building2, Camera, Check, Globe, HeartPulse, Home, Mail, MapPin, MessageCircle,
  Microscope, Newspaper, Search, ShieldCheck, ShoppingBag, Stethoscope, Users, Video,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Badge, ButtonLink, Section, SectionHeader } from "../components/ui";

type Item = { icon: LucideIcon; title: string; body: string };
type Phase = { id: string; badge: { label: string; tone: "success" | "brand" | "neutral" }; title: string; lead: string; items: Item[] };

const PHASES: Phase[] = [
  {
    id: "built",
    badge: { label: "Built", tone: "success" },
    title: "In the app today.",
    lead: "Everything here is built and working in the Hushku app, ready for launch on the App Store and Google Play.",
    items: [
      { icon: HeartPulse, title: "Health and care", body: "Care reminders, a quick log for meals, water, walks and potty breaks, weight, health records, flea and tick, and heat cycles." },
      { icon: Users, title: "Care team", body: "Invite family or a sitter as a caregiver or viewer, so everyone sees what’s been done." },
      { icon: Search, title: "Discover", body: "Pets, adoption, fostering and shelters near you, with filters for distance, species and purpose." },
      { icon: MessageCircle, title: "Requests and chat", body: "Ask about a walk, playdate, mating or adoption. When it’s accepted, a chat opens with photos, video and voice notes." },
      { icon: Bell, title: "Lost, found and rescue alerts", body: "Report a pet with photos and an approximate area. People nearby see it in Alerts." },
      { icon: Building2, title: "Shelter accounts", body: "Free accounts for shelters and rescues to list animals for adoption and fostering." },
      { icon: Camera, title: "Pet profiles", body: "Photos, breed, age, personality and what each pet is looking for." },
      { icon: ShieldCheck, title: "Safety and privacy", body: "Block and report, and locations rounded to about a kilometre. Your address is never shown." },
    ],
  },
  {
    id: "next",
    badge: { label: "Next", tone: "brand" },
    title: "What we’re working on.",
    lead: "Planned for after launch. Not in the app yet.",
    items: [
      { icon: Newspaper, title: "Social feed", body: "Photos and short updates from the pets and shelters near you, with block, report and privacy controls from day one." },
      { icon: Stethoscope, title: "Vets", body: "Find vets near you and keep their details with your pet’s health records." },
      { icon: MapPin, title: "Pet-friendly places", body: "Parks, cafés and stays that welcome pets, near you." },
      { icon: Microscope, title: "Microchip details", body: "Keep your pet’s microchip number on their profile, ready for a lost pet report." },
    ],
  },
  {
    id: "later",
    badge: { label: "Exploring", tone: "neutral" },
    title: "Ideas for later.",
    lead: "Things we’d like to build. We’ll only commit once we’re sure they’re useful.",
    items: [
      { icon: Video, title: "Video introductions", body: "A short video call before adopting or fostering." },
      { icon: Globe, title: "Pet passport", body: "Your pet’s records in one shareable place, for travel or a new vet." },
      { icon: ShoppingBag, title: "Pet supplies", body: "Food, accessories and care products from trusted sellers." },
      { icon: Home, title: "More for shelters", body: "Better tools for managing listings, requests and volunteers." },
    ],
  },
];

export default function RoadmapPage() {
  return (
    <div className="bg-white">
      <Section className="!pt-16 lg:!pt-28">
        <SectionHeader
          as="h1"
          size="xl"
          eyebrow="Roadmap"
          title="What’s built. What’s next."
          lead="Hushku is built and on its way to the App Store and Google Play. Here’s what’s in it, and what we plan to add once it’s in your hands."
        >
          <nav aria-label="Roadmap sections" className="flex flex-wrap justify-center gap-2 pt-2">
            {PHASES.map((p) => (
              <a key={p.id} href={`#${p.id}`} className="inline-flex min-h-11 items-center rounded-full bg-surface px-4 text-[15px] font-medium text-label transition-colors hover:bg-separator">
                {p.badge.label}
              </a>
            ))}
          </nav>
        </SectionHeader>
      </Section>

      {PHASES.map((p, i) => {
        const alt = i % 2 === 0;
        return (
          <Section key={p.id} id={p.id} alt={alt}>
            <div className="flex flex-col gap-12">
              <div className="flex flex-col items-start gap-3">
                <Badge tone={p.badge.tone}>
                  {p.id === "built" ? <Check size={14} strokeWidth={2.5} aria-hidden /> : null}
                  {p.badge.label}
                </Badge>
                <SectionHeader align="start" title={p.title} lead={p.lead} />
              </div>
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {p.items.map((it) => (
                  <li key={it.title} className={`flex flex-col gap-3 rounded-3xl p-6 ${alt ? "bg-white ring-1 ring-separator" : "bg-surface"}`}>
                    <span className={`grid h-12 w-12 place-items-center rounded-[14px] ${p.id === "built" ? "bg-brand-tint text-brand-text" : "bg-white text-label-2 ring-1 ring-separator"}`}>
                      <it.icon size={24} strokeWidth={1.75} aria-hidden />
                    </span>
                    <h3 className="text-[19px] leading-[26px] font-semibold text-label">{it.title}</h3>
                    <p className="text-[15px] leading-[22px] text-label-2">{it.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Section>
        );
      })}

      <Section>
        <div className="flex flex-col items-center gap-6 rounded-[32px] bg-surface px-6 py-12 text-center md:px-12">
          <SectionHeader title="Tell us what to build." lead="Faizan and Faisal read every idea. Tell us what would make Hushku better for you and your pet." />
          <div className="flex flex-wrap justify-center gap-3">
            <ButtonLink href="mailto:hello@hushku.app?subject=Idea%20for%20Hushku" size="lg">
              <Mail size={18} strokeWidth={2} aria-hidden /> Send an idea
            </ButtonLink>
            <ButtonLink href="/about#volunteer" variant="secondary" size="lg" className="!bg-white hover:!bg-separator">
              Help us build it
            </ButtonLink>
          </div>
        </div>
      </Section>
    </div>
  );
}
