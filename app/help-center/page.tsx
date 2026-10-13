import Link from "next/link";
import type { Metadata } from "next";
import { UsersRound, Bell, Building2, ChevronRight, FileText, HeartPulse, Home, Mail, MessageCircle, PawPrint, UserRound } from "lucide-react";
import { Section, SectionHeader } from "../components/ui";

const TITLE = "Help Center: How to Use the Hushku App";
const DESC =
  "Step-by-step guides to every part of the Hushku app: playdates, adoption and fostering, shelters, lost and found, health and care, messaging and your profile.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "https://hushku.app/help-center" },
  openGraph: { title: TITLE, description: DESC, type: "website", url: "https://hushku.app/help-center" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
};

const categories = [
  { icon: PawPrint, title: "Playdates", href: "/help-center/playdate-matching", desc: "Find pets nearby, use filters and send a playdate or walk request." },
  { icon: Home, title: "Adoption and fostering", href: "/help-center/adoption-fostering", desc: "Browse listings, send a request and follow up in chat." },
  { icon: Building2, title: "Shelters", href: "/help-center/shelters", desc: "Find shelters and rescues near you, or set up a shelter account." },
  { icon: Bell, title: "Lost and found", href: "/help-center/lost-and-found", desc: "Report a lost or found pet, and mark your pet as home safe." },
  { icon: UsersRound, title: "Care Team", href: "/help-center/care-team", desc: "Invite family or a sitter, choose roles and remind each other." },
  { icon: HeartPulse, title: "Health and care", href: "/help-center/health-care", desc: "Reminders, the quick log, weight, records and your care team." },
  { icon: MessageCircle, title: "Messaging", href: "/help-center/messaging", desc: "Chats open when a request is accepted. Photos, video and voice notes." },
  { icon: UserRound, title: "Your profile", href: "/help-center/your-profile", desc: "Set up your owner profile and add your pets." },
];

const popularArticles = [
  { q: "How do I report a lost pet?", href: "/help-center/lost-and-found" },
  { q: "How do I send an adoption request?", href: "/help-center/adoption-fostering" },
  { q: "How do I set a care reminder?", href: "/help-center/health-care" },
  { q: "How do I invite someone to my care team?", href: "/help-center/care-team" },
  { q: "How do I filter pets near me?", href: "/help-center/playdate-matching" },
  { q: "How do I upload a vaccination record?", href: "/help-center/health-care" },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How do I get started on Hushku?", acceptedAnswer: { "@type": "Answer", text: "Download the app for iPhone or Android when it launches, choose an owner or shelter account, set your area and add your first pet." } },
    { "@type": "Question", name: "Is Hushku free to use?", acceptedAnswer: { "@type": "Answer", text: "Yes. Hushku is free for owners, shelters and rescues, with no subscription." } },
    { "@type": "Question", name: "How do I contact Hushku support?", acceptedAnswer: { "@type": "Answer", text: "Email hello@hushku.app and a real person will reply." } },
    { "@type": "Question", name: "Can I use Hushku for cats?", acceptedAnswer: { "@type": "Answer", text: "Yes. Everything in Hushku works for dogs and cats." } },
  ],
};

export default function HelpCenterPage() {
  return (
    <div className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Section className="!pt-16 lg:!pt-24">
        <SectionHeader
          as="h1"
          size="xl"
          eyebrow="Help center"
          title="How can we help?"
          lead="Step-by-step guides to every part of the Hushku app."
        />
      </Section>

      <Section className="!pt-0">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <Link key={c.href} href={c.href} className="group flex flex-col gap-3 rounded-3xl bg-surface p-6 transition-colors hover:bg-separator">
              <span className="grid h-12 w-12 place-items-center rounded-[14px] bg-white text-brand-text">
                <c.icon size={24} strokeWidth={1.75} aria-hidden />
              </span>
              <h2 className="text-[19px] leading-[26px] font-semibold text-label">{c.title}</h2>
              <p className="flex-1 text-[15px] leading-[22px] text-label-2">{c.desc}</p>
              <span className="inline-flex items-center gap-1 text-[15px] font-medium text-brand-text">
                Read the guide <ChevronRight size={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
              </span>
            </Link>
          ))}
          <div className="flex flex-col gap-3 rounded-3xl p-6 ring-1 ring-separator">
            <span className="grid h-12 w-12 place-items-center rounded-[14px] bg-brand-tint text-brand-text">
              <Mail size={24} strokeWidth={1.75} aria-hidden />
            </span>
            <h2 className="text-[19px] leading-[26px] font-semibold text-label">Still stuck?</h2>
            <p className="flex-1 text-[15px] leading-[22px] text-label-2">Write to us and a real person will reply.</p>
            <a href="mailto:hello@hushku.app" className="text-[15px] font-medium text-brand-text hover:underline underline-offset-[3px]">hello@hushku.app</a>
          </div>
        </div>
      </Section>

      <Section alt>
        <div className="mx-auto flex max-w-[880px] flex-col gap-8">
          <SectionHeader eyebrow="Quick answers" title="Popular questions." />
          <ul className="flex flex-col border-t border-separator">
            {popularArticles.map((a) => (
              <li key={a.q} className="border-b border-separator">
                <Link href={a.href} className="group flex min-h-14 items-center gap-3 py-3 text-[17px] text-label">
                  <FileText size={20} strokeWidth={1.75} className="flex-none text-label-3" aria-hidden />
                  <span className="flex-1 group-hover:underline underline-offset-[3px]">{a.q}</span>
                  <ChevronRight size={18} className="flex-none text-label-3" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </div>
  );
}
