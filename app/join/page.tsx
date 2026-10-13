import { Bell, Building2, Check, HeartPulse, MessageCircle, Search, ShieldCheck } from "lucide-react";
import WaitingList from "../components/WaitingList";
import { ButtonLink, DeviceTrio, Section, SectionHeader, StoreStatus } from "../components/ui";

const INCLUDED = [
  { icon: HeartPulse, title: "Daily care, shared", body: "Reminders, a quick log, weight, health records, flea and tick and heat cycles, with your care team." },
  { icon: Search, title: "Discover", body: "Pets, adoption, fostering and shelters near you." },
  { icon: MessageCircle, title: "Requests and chat", body: "Ask about a walk, playdate, mating or adoption. Chat opens when it’s accepted." },
  { icon: Bell, title: "Lost, found and rescue alerts", body: "Reports from people nearby, with an approximate area." },
  { icon: Building2, title: "Free for shelters", body: "Shelters and rescues list animals for adoption and fostering." },
  { icon: ShieldCheck, title: "Private by default", body: "Your address is never shown. Block and report are always a tap away." },
];

export default function JoinPage() {
  return (
    <div className="bg-white">
      <section aria-labelledby="join-title" className="px-4 pt-16 md:px-8 lg:pt-24">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-12">
          <div className="flex max-w-[760px] flex-col items-center gap-4 text-center">
            <p className="text-[15px] font-semibold text-brand-text">Join the waitlist</p>
            <h1 id="join-title" className="text-[44px] leading-[1.06] font-semibold tracking-[-0.022em] text-balance text-label md:text-[64px] md:leading-[1.05]">
              Be first to get Hushku.
            </h1>
            <p className="max-w-[560px] text-[19px] leading-[1.45] text-pretty text-label-2">
              The app is built and on its way to the App Store and Google Play. Leave your email and we’ll send you one message, on launch day.
            </p>
            <div className="mt-4 w-full">
              <WaitingList center large />
            </div>
            <StoreStatus className="mt-2" />
          </div>
          <div className="w-full">
            <DeviceTrio />
          </div>
        </div>
      </section>

      <Section alt>
        <div className="flex flex-col gap-12">
          <SectionHeader eyebrow="What you’ll get" title="Free. No subscription." lead="Everything below is in the app today, for dogs and cats." />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INCLUDED.map((f) => (
              <li key={f.title} className="flex flex-col gap-3 rounded-3xl bg-white p-6 ring-1 ring-separator">
                <span className="grid h-12 w-12 place-items-center rounded-[14px] bg-brand-tint text-brand-text">
                  <f.icon size={24} strokeWidth={1.75} aria-hidden />
                </span>
                <h2 className="text-[19px] leading-[26px] font-semibold text-label">{f.title}</h2>
                <p className="text-[15px] leading-[22px] text-label-2">{f.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-8 rounded-[32px] bg-surface p-6 md:grid-cols-[1.4fr_1fr] md:p-12">
          <div className="flex flex-col gap-3">
            <p className="text-[15px] font-semibold text-brand-text">Volunteer</p>
            <h2 className="text-[28px] leading-[1.16] font-semibold tracking-[-0.012em] text-label md:text-[34px]">Want to help us build it?</h2>
            <p className="max-w-[52ch] text-[17px] leading-[26px] text-label-2">
              Developers, designers, vets, shelter workers and anyone who loves animals. Faizan and Faisal read every message.
            </p>
            <ul className="mt-2 flex flex-col gap-2 text-[15px] text-label">
              {["No experience needed", "Help as much or as little as you like", "Work directly with the founders"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Check size={18} strokeWidth={2.25} className="flex-none text-brand-text" aria-hidden /> {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <ButtonLink href="/about#volunteer" size="lg">Volunteer with us</ButtonLink>
            <ButtonLink href="mailto:hello@hushku.app" variant="secondary" size="lg" className="!bg-white hover:!bg-separator">Email us</ButtonLink>
          </div>
        </div>
      </Section>
    </div>
  );
}
