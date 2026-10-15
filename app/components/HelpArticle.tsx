import Link from "next/link";
import { ChevronRight, LifeBuoy } from "lucide-react";
import FaqAccordion from "./FaqAccordion";
import AppCta from "./AppCta";
import { Section, SectionHeader } from "./ui";
import WalkthroughPlayer from "./tour/WalkthroughPlayer";
import { TOURS } from "./tour/tours";
import { ALL_QUESTIONS } from "../help-center/questions/data";

export type HelpSection = {
  id: string;
  title: string;
  body?: string;
  steps?: string[];
  bullets?: string[];
  note?: string;
};

export const HELP_TOPICS = [
  { title: "Care Team", href: "/help-center/care-team" },
  { title: "Playdates", href: "/help-center/playdate-matching" },
  { title: "Adoption and fostering", href: "/help-center/adoption-fostering" },
  { title: "Shelters", href: "/help-center/shelters" },
  { title: "Lost and found", href: "/help-center/lost-and-found" },
  { title: "Health and care", href: "/help-center/health-care" },
  { title: "Messaging", href: "/help-center/messaging" },
  { title: "Your profile", href: "/help-center/your-profile" },
];

/** One help guide: breadcrumb, title, on-this-page, numbered sections, FAQs, other topics. */
export default function HelpArticle({
  slug,
  title,
  lead,
  sections,
  faqs = [],
  tour,
}: {
  slug: string;
  title: string;
  lead: string;
  sections: HelpSection[];
  faqs?: { q: string; a: string }[];
  /** Walkthrough key (see tour/tours.ts). */
  tour?: string;
}) {
  const steps = tour ? TOURS[tour] : undefined;
  const href = `/help-center/${slug}`;
  const schema = faqs.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      }
    : null;

  return (
    <div className="bg-white">
      {schema ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /> : null}

      <Section className="!pt-10 !pb-12 md:!pt-16">
        <div className="mx-auto flex max-w-[880px] flex-col gap-5">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-label-2">
              <li><Link href="/" className="hover:text-label hover:underline underline-offset-[3px]">Home</Link></li>
              <ChevronRight size={14} className="text-label-3" aria-hidden />
              <li><Link href="/help-center" className="hover:text-label hover:underline underline-offset-[3px]">Help center</Link></li>
              <ChevronRight size={14} className="text-label-3" aria-hidden />
              <li aria-current="page" className="font-medium text-label">{title}</li>
            </ol>
          </nav>
          <SectionHeader as="h1" size="l" align="start" eyebrow="Help center" title={title} lead={lead} />
          <p className="text-[13px] text-label-2">Hushku is an app for iPhone and Android, coming soon to the App Store and Google Play. These steps are for the app.</p>
          {steps ? (
            <a href="#walkthrough" className="inline-flex min-h-11 items-center self-start rounded-full bg-label px-5 text-[15px] font-medium text-white transition-colors hover:bg-label-2">
              Start the interactive walkthrough
            </a>
          ) : null}
        </div>
      </Section>

      {steps ? (
        <Section alt id="walkthrough">
          <div className="mx-auto flex max-w-[1080px] flex-col gap-10">
            <SectionHeader
              align="start"
              eyebrow="Watch it"
              title="See how it works."
              lead="A short walkthrough of the real app, starting from the tab bar. It plays by itself; tap a step to jump to it."
            />
            <WalkthroughPlayer steps={steps} label={`${title} walkthrough`} />
          </div>
        </Section>
      ) : null}

      <Section className={steps ? "" : "!pt-0"}>
        <div className="mx-auto grid max-w-[880px] gap-12 lg:max-w-[1200px] lg:grid-cols-[220px_1fr] lg:gap-16">
          <nav aria-label="On this page" className="lg:sticky lg:top-24 lg:self-start">
            <p className="mb-3 text-[13px] font-semibold text-label-2">On this page</p>
            <ol className="flex flex-col gap-1 border-l border-separator">
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="-ml-px block border-l border-transparent py-1.5 pl-4 text-[15px] text-label-2 hover:border-label hover:text-label">
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="flex max-w-[680px] flex-col gap-12">
            {sections.map((s) => (
              <section key={s.id} id={s.id} aria-labelledby={`${s.id}-h`} className="flex flex-col gap-4">
                <h2 id={`${s.id}-h`} className="text-[26px] leading-[1.2] font-semibold tracking-[-0.01em] text-label">{s.title}</h2>
                {s.body ? <p className="text-[17px] leading-[28px] text-label-2">{s.body}</p> : null}
                {s.steps ? (
                  <ol className="flex flex-col gap-3">
                    {s.steps.map((step, i) => (
                      <li key={step} className="flex gap-4 text-[17px] leading-[26px] text-label">
                        <span className="grid h-7 w-7 flex-none place-items-center rounded-full bg-brand-tint text-[13px] font-semibold text-brand-text tabular-nums">{i + 1}</span>
                        <span className="pt-0.5">{step}</span>
                      </li>
                    ))}
                  </ol>
                ) : null}
                {s.bullets ? (
                  <ul className="flex flex-col gap-2 pl-1">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-[17px] leading-[26px] text-label">
                        <span aria-hidden className="mt-[11px] h-1.5 w-1.5 flex-none rounded-full bg-label-3" />
                        {b}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {s.note ? <p className="rounded-2xl bg-surface px-5 py-4 text-[15px] leading-[22px] text-label-2">{s.note}</p> : null}
              </section>
            ))}
            <AppCta eyebrow="Hushku is launching soon" title="Get notified at launch" body="Leave your email and we'll send one message the day you can download it." source={`help:${slug}`} />
          </div>
        </div>
      </Section>

      {faqs.length ? <FaqAccordion faqs={faqs} title="Questions." /> : null}

      {ALL_QUESTIONS.some((q) => q.guide?.href === href) ? (
        <Section alt>
          <div className="mx-auto flex max-w-[880px] flex-col gap-6">
            <h2 className="text-[26px] leading-[1.2] font-semibold tracking-[-0.01em] text-label">Answers with demos</h2>
            <ul className="flex flex-col border-t border-separator">
              {ALL_QUESTIONS.filter((q) => q.guide?.href === href).map((q) => (
                <li key={q.slug} className="border-b border-separator">
                  <Link href={`/help-center/questions/${q.slug}`} className="group flex min-h-14 items-center gap-3 py-3 text-[17px] text-label">
                    <span className="flex-1 group-hover:underline underline-offset-[3px]">{q.q}</span>
                    <ChevronRight size={18} className="flex-none text-label-3" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      ) : null}

      <Section>
        <div className="mx-auto flex max-w-[880px] flex-col gap-6">
          <h2 className="text-[26px] leading-[1.2] font-semibold tracking-[-0.01em] text-label">Other help topics</h2>
          <ul className="flex flex-wrap gap-2">
            {HELP_TOPICS.filter((t) => t.href !== href).map((t) => (
              <li key={t.href}>
                <Link href={t.href} className="inline-flex min-h-11 items-center rounded-full bg-surface px-4 text-[15px] font-medium text-label transition-colors hover:bg-separator">
                  {t.title}
                </Link>
              </li>
            ))}
          </ul>
          <p className="flex items-center gap-2 text-[15px] text-label-2">
            <LifeBuoy size={18} strokeWidth={1.75} className="text-label-3" aria-hidden />
            Still stuck? Email <a href="mailto:hello@hushku.app" className="font-medium text-brand-text hover:underline underline-offset-[3px]">hello@hushku.app</a> and a real person will reply.
          </p>
        </div>
      </Section>
    </div>
  );
}
