import Link from "next/link";
import { Check, ChevronRight } from "lucide-react";
import WaitingList from "./WaitingList";
import { Badge, Section, SectionHeader } from "./ui";

interface ComingSoonPageProps {
  /** Legacy emoji icon; no longer rendered. */
  icon?: string;
  feature: string;
  tagline: string;
  description: string;
  phase?: string;
  bullets?: string[];
}

/** A feature that is planned but not in the app yet. Honest about status, one ask. */
export default function ComingSoonPage({ feature, tagline, description, bullets = [] }: ComingSoonPageProps) {
  return (
    <>
      <Section className="!pt-10 md:!pt-16">
        <div className="flex flex-col items-center gap-8">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-[13px] text-label-2">
              <li><Link href="/" className="hover:text-label hover:underline underline-offset-[3px]">Home</Link></li>
              <ChevronRight size={14} className="text-label-3" aria-hidden />
              <li aria-current="page" className="font-medium text-label">{feature}</li>
            </ol>
          </nav>
          <Badge tone="info">Coming soon · not in the app yet</Badge>
          <SectionHeader as="h1" size="l" eyebrow={feature} title={tagline} lead={description} />
          <WaitingList center cta="Tell me when it’s ready" />
        </div>
      </Section>
      {bullets.length ? (
        <Section alt>
          <div className="mx-auto flex max-w-[680px] flex-col gap-8">
            <h2 className="text-[26px] leading-[1.2] font-semibold tracking-[-0.01em] text-label md:text-[32px]">What we&apos;re planning</h2>
            <ul className="flex flex-col border-t border-separator">
              {bullets.map((b) => (
                <li key={b} className="flex gap-3 border-b border-separator py-4 text-[17px] leading-[26px] text-label">
                  <Check size={20} strokeWidth={2} className="mt-[3px] flex-none text-brand-text" />
                  {b}
                </li>
              ))}
            </ul>
            <p className="text-[15px] text-label-2">
              Plans change as we learn.{" "}
              <Link href="/roadmap" className="font-medium text-brand-text hover:underline underline-offset-[3px]">See the roadmap</Link>, or tell us what matters to you at hello@hushku.app.
            </p>
          </div>
        </Section>
      ) : null}
    </>
  );
}
