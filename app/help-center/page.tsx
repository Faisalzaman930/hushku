import Link from "next/link";
import type { Metadata } from "next";
import { Bell, Building2, ChevronRight, HeartPulse, Home, Mail, MessageCircle, PawPrint, PlayCircle, UserRound, UsersRound } from "lucide-react";
import { Section, SectionHeader } from "../components/ui";
import QuestionSearch from "./questions/QuestionSearch";
import { ALL_QUESTIONS, findQuestion } from "./questions/data";

const TITLE = "Help Center: How to Use the Hushku App";
const DESC =
  "Answers and step-by-step guides for the Hushku app: multiple pets, sharing care with family and sitters, reminders, playdates, adoption, lost pets, privacy and more, with interactive demos.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "https://hushku.app/help-center" },
  openGraph: { title: TITLE, description: DESC, type: "website", url: "https://hushku.app/help-center" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
};

const guides = [
  { icon: UsersRound, title: "Care Team", href: "/help-center/care-team", desc: "Invite family or a sitter, choose roles and remind each other." },
  { icon: HeartPulse, title: "Health and care", href: "/help-center/health-care", desc: "Reminders, Quick Log, weight, records, flea and tick, heat cycles." },
  { icon: PawPrint, title: "Playdates", href: "/help-center/playdate-matching", desc: "Find pets nearby, use filters and send a playdate or walk invite." },
  { icon: Home, title: "Adoption and fostering", href: "/help-center/adoption-fostering", desc: "Adopt, foster, or post your own listing and choose an adopter." },
  { icon: Bell, title: "Lost and found", href: "/help-center/lost-and-found", desc: "Report a lost or found pet, get in touch, mark as found." },
  { icon: Building2, title: "Shelters", href: "/help-center/shelters", desc: "Find shelters near you, or set up a free shelter account." },
  { icon: MessageCircle, title: "Messaging", href: "/help-center/messaging", desc: "How chats start, photos, video, voice notes and message actions." },
  { icon: UserRound, title: "Your profile", href: "/help-center/your-profile", desc: "Sign up, add pets, privacy, your Circle and notifications." },
];

const POPULAR = [
  "can-i-add-multiple-pets",
  "how-do-i-sync-care-across-profiles",
  "caregiver-vs-viewer",
  "how-do-i-set-a-recurring-reminder",
  "my-pet-is-lost",
  "how-do-i-find-playdates",
  "how-do-i-rehome-my-pet",
  "how-do-i-make-my-profile-private",
];

export default function HelpCenterPage() {
  const items = ALL_QUESTIONS.map((q) => ({ slug: q.slug, q: q.q, short: q.short, category: q.category.title, demo: !!q.demo, keywords: q.keywords }));
  const popular = POPULAR.map(findQuestion).filter((q): q is NonNullable<typeof q> => !!q);
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: popular.map((q) => ({ "@type": "Question", name: q.q, acceptedAnswer: { "@type": "Answer", text: q.short } })),
  };

  return (
    <div className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <Section className="!pt-16 lg:!pt-24">
        <div className="mx-auto flex max-w-[760px] flex-col items-center gap-8">
          <SectionHeader as="h1" size="xl" eyebrow="Help center" title="How can we help?" lead="Answers with interactive demos of the app, and step-by-step guides to every feature." />
          <QuestionSearch items={items} />
        </div>
      </Section>

      <Section alt>
        <div className="flex flex-col gap-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeader align="start" eyebrow="Popular" title="Common questions." />
            <Link href="/help-center/questions" className="inline-flex items-center gap-1 text-[17px] font-medium text-brand-text hover:underline underline-offset-[3px]">
              All {ALL_QUESTIONS.length} questions <ChevronRight size={18} aria-hidden />
            </Link>
          </div>
          <ul className="grid gap-4 md:grid-cols-2">
            {popular.map((q) => (
              <li key={q.slug}>
                <Link href={`/help-center/questions/${q.slug}`} className="group flex h-full flex-col gap-3 rounded-3xl bg-white p-6 ring-1 ring-separator transition-shadow hover:shadow-[0_8px_24px_rgba(29,27,25,0.08)]">
                  <span className="flex items-center justify-between gap-3">
                    <span className="text-[13px] font-medium text-label-3">{q.category.title}</span>
                    {q.demo ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-brand-tint px-2.5 py-1 text-[13px] font-medium text-brand-text">
                        <PlayCircle size={14} aria-hidden /> Interactive demo
                      </span>
                    ) : null}
                  </span>
                  <span className="text-[19px] leading-[26px] font-semibold text-label group-hover:underline underline-offset-[3px]">{q.q}</span>
                  <span className="line-clamp-3 text-[15px] leading-[22px] text-label-2">{q.short}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <div className="flex flex-col gap-10">
          <SectionHeader align="start" eyebrow="Guides" title="Every feature, step by step." lead="Each guide walks through the real app screens, starting from the tab bar." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {guides.map((c) => (
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
          </div>
          <div className="flex flex-col items-start gap-3 rounded-3xl p-6 ring-1 ring-separator sm:flex-row sm:items-center">
            <span className="grid h-12 w-12 flex-none place-items-center rounded-[14px] bg-brand-tint text-brand-text">
              <Mail size={24} strokeWidth={1.75} aria-hidden />
            </span>
            <div className="flex-1">
              <h2 className="text-[19px] leading-[26px] font-semibold text-label">Still stuck?</h2>
              <p className="text-[15px] leading-[22px] text-label-2">Write to us and a real person will reply.</p>
            </div>
            <a href="mailto:hello@hushku.app" className="inline-flex min-h-11 items-center rounded-full bg-label px-5 text-[15px] font-medium text-white hover:bg-label-2">hello@hushku.app</a>
          </div>
        </div>
      </Section>
    </div>
  );
}
