import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import FaqAccordion from "./FaqAccordion";
import WaitingList from "./WaitingList";
import { ChipList, Device, LinkCard, Section, SectionHeader, Steps, type AppScreen } from "./ui";
import SeeItInTheApp from "./tour/SeeItInTheApp";

export interface FeaturePageProps {
  slug: string;
  eyebrow: string;
  title: string;
  lead: string;
  included: { label: string; icon?: LucideIcon }[];
  screen: AppScreen;
  screenCaption: string;
  howTitle: string;
  how: { icon: LucideIcon; title: string; body: string }[];
  steps?: { title: string; body: string }[];
  stepsTitle?: string;
  faqs: { q: string; a: string }[];
  related?: { title: string; href: string; body?: string; icon?: LucideIcon }[];
  /** Walkthrough key (see tour/tours.ts) and its full help guide. */
  tour?: { key: string; guide: string; steps?: number };
}

/**
 * One app feature, explained. The feature lives in the phone app, so this page shows it
 * (a real app screen), explains it, answers "can I do this on the web?" and asks for the
 * waitlist. It never offers an in-app action on the web.
 */
export default function FeaturePage(p: FeaturePageProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: p.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Section className="!pt-10 md:!pt-16">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[1.1fr_1fr]">
          <div className="flex flex-col gap-6">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-1.5 text-[13px] text-label-2">
                <li>
                  <Link href="/" className="hover:text-label hover:underline underline-offset-[3px]">Home</Link>
                </li>
                <ChevronRight size={14} className="text-label-3" aria-hidden />
                <li aria-current="page" className="font-medium text-label">{p.eyebrow}</li>
              </ol>
            </nav>
            <SectionHeader as="h1" size="l" align="start" eyebrow={p.eyebrow} title={p.title} lead={p.lead} />
            <ChipList label="Included" items={p.included} />
            <div className="mt-2">
              <WaitingList cta="Get early access" />
            </div>
          </div>
          <figure className="flex flex-col items-center gap-3">
            <div className="flex w-full justify-center rounded-[32px] bg-surface px-4 py-10">
              <Device screen={p.screen} priority />
            </div>
            <figcaption className="text-[13px] text-label-2">{p.screenCaption}</figcaption>
          </figure>
        </div>
      </Section>

      <Section alt>
        <div className="flex flex-col gap-12">
          <SectionHeader eyebrow="How it works" title={p.howTitle} />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {p.how.map((h) => (
              <div key={h.title} className="flex flex-col gap-3 rounded-3xl bg-white p-6 ring-1 ring-separator">
                <span className="grid h-12 w-12 place-items-center rounded-[14px] bg-brand-tint text-brand-text">
                  <h.icon size={24} strokeWidth={1.75} />
                </span>
                <h3 className="text-[19px] leading-[26px] font-semibold tracking-[-0.005em] text-label">{h.title}</h3>
                <p className="text-[15px] leading-[22px] text-label-2">{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {p.tour ? <SeeItInTheApp tour={p.tour.key} guide={p.tour.guide} steps={p.tour.steps} /> : null}

      {p.steps ? (
        <Section alt={!!p.tour}>
          <div className="flex flex-col gap-12">
            <SectionHeader eyebrow="In the app" title={p.stepsTitle ?? "Three steps."} />
            <Steps items={p.steps} />
          </div>
        </Section>
      ) : null}

      <FaqAccordion faqs={p.faqs} title="Questions." />

      {p.related?.length ? (
        <Section>
          <div className="flex flex-col gap-8">
            <h2 className="text-[26px] leading-[1.2] font-semibold tracking-[-0.01em] text-label md:text-[32px]">Keep reading</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {p.related.map((r) => (
                <LinkCard key={r.href} title={r.title} body={r.body} href={r.href} icon={r.icon} />
              ))}
            </div>
          </div>
        </Section>
      ) : null}
    </>
  );
}
