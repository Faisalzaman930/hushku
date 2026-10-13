import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeftRight,
  BellRing,
  Briefcase,
  Check,
  ChevronRight,
  Eye,
  HeartHandshake,
  Home,
  LifeBuoy,
  Lock,
  Minus,
  PawPrint,
  Plane,
  Repeat,
  ShieldCheck,
  Syringe,
  UserCheck,
  UserMinus,
  Users,
} from "lucide-react";
import FaqAccordion from "../components/FaqAccordion";
import WaitingList from "../components/WaitingList";
import SeeItInTheApp from "../components/tour/SeeItInTheApp";
import { ChipList, Device, LinkCard, Section, SectionHeader, Steps } from "../components/ui";

const TITLE = "Care Team: Share Your Pet’s Care With Family, Partners and Sitters | Hushku";
const DESC =
  "Hushku Care Team puts your pet’s day on everyone’s phone. Invite your partner, family or pet sitter, tick off feeds, walks and meds together, see who did what, and send a gentle reminder. Free.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  keywords:
    "shared pet care app, pet care app for couples, family dog feeding tracker, did anyone feed the dog, share pet care with sitter, dog walker app, pet care schedule app, co-parenting pet app",
  alternates: { canonical: "https://hushku.app/care-team" },
  openGraph: { title: TITLE, description: DESC, type: "website", url: "https://hushku.app/care-team" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
};

const HOUSEHOLDS = [
  { icon: HeartHandshake, title: "Couples", body: "One of you does mornings, the other does evenings. Both of you know Bella’s had her tablet." },
  { icon: Home, title: "Families", body: "The kids tick off the walk. Everyone sees dinner’s done. Nobody feeds the dog twice." },
  { icon: Users, title: "Flatmates", body: "A shared cat, a shared checklist. No more notes on the fridge." },
  { icon: Briefcase, title: "Sitters and dog walkers", body: "Invite them as a caregiver for the week. They see the routine; you see every walk logged." },
  { icon: Repeat, title: "Shared custody", body: "Pets split between two homes keep one history: meds, weight and vet records in one place." },
  { icon: Plane, title: "When you’re away", body: "Hand over to a friend with everything they need, and follow along from wherever you are." },
];

const ROLES: { label: string; values: [boolean, boolean, boolean] }[] = [
  { label: "See today’s care, reminders and records", values: [true, true, true] },
  { label: "Tick off tasks and log meals, water, walks and potty breaks", values: [true, true, false] },
  { label: "Add reminders and health records", values: [true, true, false] },
  { label: "Get reminders from the team", values: [true, true, true] },
  { label: "Invite, cancel or remove people", values: [true, false, false] },
];

const FAQS = [
  { q: "Is Care Team free?", a: "Yes. Care Team is part of Hushku, which is free with no subscription. There’s no extra charge for adding people." },
  { q: "Does everyone need the app?", a: "Yes. Each person needs a free Hushku account so their phone stays in sync. You invite them by username or email." },
  { q: "What’s the difference between a caregiver and a viewer?", a: "Caregivers can help manage the pet’s care: tick things off, log care and add records. Viewers can see everything but can’t change it." },
  { q: "Can I remove someone?", a: "Yes. The owner can remove any member or cancel a pending invite at any time from the Care Team screen." },
  { q: "How does a reminder from the team work?", a: "Tap the bell next to any task on Home and choose who to remind. They get a push notification like “Sarah reminded you to give Bella medication.”" },
  { q: "Does it work with more than one pet?", a: "Yes. Each pet has its own care team, so your sitter can help with the dog without seeing the cat. Switch pets at the top of Home." },
  { q: "Can I turn off care team notifications?", a: "Yes. Care reminders and care team notifications each have their own switch in Settings." },
];

function Cell({ v }: { v: boolean }) {
  return v ? (
    <>
      <Check size={18} strokeWidth={2.25} className="mx-auto text-brand-text" aria-hidden />
      <span className="sr-only">Yes</span>
    </>
  ) : (
    <>
      <Minus size={18} strokeWidth={2} className="mx-auto text-label-3" aria-hidden />
      <span className="sr-only">No</span>
    </>
  );
}

export default function CareTeamPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section aria-labelledby="ct-title" className="px-4 pt-10 md:px-8 md:pt-16">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-12">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-[13px] text-label-2">
              <li><Link href="/" className="hover:text-label hover:underline underline-offset-[3px]">Home</Link></li>
              <ChevronRight size={14} className="text-label-3" aria-hidden />
              <li aria-current="page" className="font-medium text-label">Care Team</li>
            </ol>
          </nav>
          <div className="mx-auto flex max-w-[860px] flex-col items-center gap-4 text-center">
            <p className="text-[15px] font-semibold text-brand-text">Care Team</p>
            <h1 id="ct-title" className="text-[40px] leading-[1.08] font-semibold tracking-[-0.022em] text-balance text-label md:text-[56px] lg:text-[72px] lg:leading-[1.04]">
              “Did anyone feed the dog?” Never ask again.
            </h1>
            <p className="max-w-[640px] text-[19px] leading-[1.45] text-pretty text-label-2 lg:text-[21px]">
              Care Team puts your pet’s day on everyone’s phone. Invite your partner, family or sitter, tick things off together, and see who did what.
            </p>
            <div className="mt-4 w-full">
              <WaitingList center cta="Get early access" />
            </div>
          </div>

          <figure className="flex flex-col items-center gap-4">
            <div className="relative flex w-full items-start justify-center gap-4 overflow-hidden rounded-[32px] bg-surface px-4 py-10 md:gap-16 md:py-14">
              <div className="flex flex-col items-center gap-3">
                <span className="rounded-full bg-white px-3 py-1 text-[13px] font-semibold text-label ring-1 ring-separator">Faisal’s phone</span>
                <Device screen="home" size="sm" priority className="md:hidden" />
                <Device screen="home" className="hidden md:block" priority />
              </div>
              <div aria-hidden className="absolute top-1/2 left-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full bg-white px-4 py-2 text-[15px] font-semibold text-label shadow-[0_8px_24px_rgba(29,27,25,0.12)] md:flex">
                <ArrowLeftRight size={18} className="text-brand-text" /> In sync
              </div>
              <div className="flex flex-col items-center gap-3">
                <span className="rounded-full bg-white px-3 py-1 text-[13px] font-semibold text-label ring-1 ring-separator">Sarah’s phone</span>
                <Device screen="home-synced" size="sm" priority delay={200} className="md:hidden" />
                <Device screen="home-synced" priority delay={200} className="hidden md:block" />
              </div>
            </div>
            <figcaption className="text-[13px] text-label-2">Faisal ticks off Bella’s heartworm tablet. On Sarah’s phone, it’s done, by Faisal.</figcaption>
          </figure>
        </div>
      </section>

      {/* Four promises */}
      <Section>
        <ul className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: ArrowLeftRight, title: "Live on every phone", body: "Tick something off and it updates for the whole team in seconds." },
            { icon: UserCheck, title: "Done by, on every task", body: "See who walked, fed or medicated, without asking." },
            { icon: BellRing, title: "Reminders, not nagging", body: "Tap the bell on a task to send one person a gentle reminder." },
            { icon: ShieldCheck, title: "Roles you control", body: "Caregivers help. Viewers watch. Only the owner invites or removes." },
          ].map((f) => (
            <li key={f.title} className="flex flex-col gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-[14px] bg-brand-tint text-brand-text"><f.icon size={24} strokeWidth={1.75} aria-hidden /></span>
              <h2 className="text-[19px] leading-[26px] font-semibold text-label">{f.title}</h2>
              <p className="text-[15px] leading-[22px] text-label-2">{f.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Households */}
      <Section alt>
        <div className="flex flex-col gap-12">
          <SectionHeader eyebrow="Who it’s for" title="Built for every kind of household." lead="Most pets have more than one person looking after them. Now they share one routine." />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {HOUSEHOLDS.map((h) => (
              <article key={h.title} className="flex flex-col gap-3 rounded-3xl bg-white p-6 ring-1 ring-separator">
                <span className="grid h-12 w-12 place-items-center rounded-[14px] bg-brand-tint text-brand-text"><h.icon size={24} strokeWidth={1.75} aria-hidden /></span>
                <h3 className="text-[19px] leading-[26px] font-semibold text-label">{h.title}</h3>
                <p className="text-[15px] leading-[22px] text-label-2">{h.body}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* How it works */}
      <Section>
        <div className="flex flex-col gap-12">
          <SectionHeader eyebrow="How it works" title="Set up in under a minute." />
          <Steps
            items={[
              { title: "Invite", body: "On Home, tap Manage next to Care Team, then Invite. Search for them by username or email." },
              { title: "Choose a role", body: "Caregiver to help with care, or Viewer to follow along. They accept from their notifications." },
              { title: "Care together", body: "Everyone sees the same checklist, records and reminders, with who did what." },
            ]}
          />
        </div>
      </Section>

      {/* Roles */}
      <Section alt>
        <div className="flex flex-col gap-12">
          <SectionHeader eyebrow="Roles" title="Everyone gets the right access." lead="The owner decides who’s on the team and what they can do." />
          <div className="relative w-full overflow-x-auto">
            <table className="w-full min-w-[600px] border-separate border-spacing-0 text-[15px] leading-5">
              <caption className="sr-only">What owners, caregivers and viewers can do</caption>
              <thead>
                <tr>
                  <th scope="col" className="border-b border-separator p-4 text-left"><span className="sr-only">Permission</span></th>
                  {[
                    { name: "Owner", icon: PawPrint },
                    { name: "Caregiver", icon: HeartHandshake },
                    { name: "Viewer", icon: Eye },
                  ].map((r) => (
                    <th key={r.name} scope="col" className="w-[140px] border-b border-separator p-4 font-semibold text-label">
                      <span className="inline-flex items-center gap-1.5"><r.icon size={16} className="text-brand-text" aria-hidden />{r.name}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ROLES.map((r) => (
                  <tr key={r.label}>
                    <th scope="row" className="border-b border-separator p-4 text-left font-medium text-label">{r.label}</th>
                    {r.values.map((v, i) => (
                      <td key={i} className="border-b border-separator p-4 text-center"><Cell v={v} /></td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* Nudges */}
      <Section dark>
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <SectionHeader
            dark
            align="start"
            size="l"
            eyebrow="Reminders from the team"
            title="A gentle tap, not a group chat."
            lead="Running late? Tap the bell next to any task and choose who to remind. They get one push notification, like “Sarah reminded you to give Bella medication.” No chasing, no long threads."
          />
          <div className="flex justify-center gap-6">
            <Device screen="remind-sheet" />
            <Device screen="notifications" size="sm" tilt="right" delay={150} className="hidden lg:block" />
          </div>
        </div>
      </Section>

      {/* What's shared */}
      <Section>
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="order-2 flex justify-center md:order-1">
            <Device screen="health-records" />
          </div>
          <div className="order-1 flex flex-col gap-6 md:order-2">
            <SectionHeader align="start" size="l" eyebrow="What’s shared" title="One record, for everyone who cares." lead="Everything on Home is shared with the team, so the vet visit your partner booked is on your phone too." />
            <ChipList
              label="Shared with your care team"
              items={[
                { label: "Today’s care checklist", icon: Check },
                { label: "Reminders", icon: BellRing },
                { label: "Quick log", icon: PawPrint },
                { label: "Weight", icon: Repeat },
                { label: "Health records", icon: Syringe },
                { label: "Flea and tick", icon: ShieldCheck },
                { label: "Heat cycles", icon: HeartHandshake },
              ]}
            />
          </div>
        </div>
      </Section>

      <SeeItInTheApp
        tour="care-team"
        guide="/help-center/care-team"
        steps={6}
        alt
        title="Try it: one evening, two phones."
        lead="Tap the numbers and follow the arrows through the real app screens."
      />

      {/* Privacy */}
      <Section>
        <div className="flex flex-col gap-12">
          <SectionHeader eyebrow="Privacy" title="Only the people you invite." />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              { icon: Lock, title: "Invite only", body: "Nobody joins a care team without an invite from the owner, and an accept from them." },
              { icon: UserMinus, title: "Remove anyone, any time", body: "The owner can remove a member or cancel a pending invite in two taps." },
              { icon: PawPrint, title: "One pet at a time", body: "Each pet has its own team. Your sitter sees the dog, not the rest of your life." },
            ].map((f) => (
              <div key={f.title} className="flex flex-col gap-3 rounded-3xl bg-surface p-6">
                <f.icon size={24} strokeWidth={1.75} className="text-brand-text" aria-hidden />
                <h3 className="text-[19px] leading-[26px] font-semibold text-label">{f.title}</h3>
                <p className="text-[15px] leading-[22px] text-label-2">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <FaqAccordion faqs={FAQS} title="Questions." />

      <Section>
        <div className="flex flex-col gap-8">
          <h2 className="text-[26px] leading-[1.2] font-semibold tracking-[-0.01em] text-label md:text-[32px]">Keep reading</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <LinkCard icon={LifeBuoy} title="Care Team: step by step" body="The full guide, with every screen." href="/help-center/care-team" />
            <LinkCard icon={Syringe} title="Health and care" body="Reminders, weight, records, flea and tick and heat cycles." href="/health" />
            <LinkCard icon={Briefcase} title="Pet sitter cost calculator" body="What a sitter or walker costs near you." href="/tools/sitting-comparison" />
          </div>
        </div>
      </Section>
    </>
  );
}
