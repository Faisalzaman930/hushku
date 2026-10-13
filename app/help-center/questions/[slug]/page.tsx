import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BookOpen, ChevronRight, LifeBuoy } from "lucide-react";
import AppTour from "../../../components/tour/AppTour";
import { Section, SectionHeader } from "../../../components/ui";
import { ALL_QUESTIONS, findQuestion } from "../data";

/** Only known pages exist; anything else is a real 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return ALL_QUESTIONS.map((q) => ({ slug: q.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const q = findQuestion(slug);
  if (!q) return {};
  const title = q.q;
  return {
    title: title.length > 51 || /hushku/i.test(title) ? { absolute: title } : title,
    description: q.short,
    alternates: { canonical: `https://hushku.app/help-center/questions/${q.slug}` },
    openGraph: { title, description: q.short, type: "article", url: `https://hushku.app/help-center/questions/${q.slug}`, images: [{ url: "https://hushku.app/og.png", width: 1200, height: 630, alt: "Hushku: every pet app, one quiet place" }] },
    twitter: { card: "summary_large_image", title, description: q.short },
  };
}

export default async function QuestionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const q = findQuestion(slug);
  if (!q) notFound();

  const related = (q.related ?? []).map(findQuestion).filter((r): r is NonNullable<typeof r> => !!r);
  const sameCategory = q.category.questions.filter((o) => o.slug !== q.slug && !q.related?.includes(o.slug)).slice(0, 3);
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [{ "@type": "Question", name: q.q, acceptedAnswer: { "@type": "Answer", text: [q.short, q.more].filter(Boolean).join(" ") } }],
  };

  return (
    <div className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <Section className="!pt-10 !pb-12 md:!pt-16">
        <div className="mx-auto flex max-w-[880px] flex-col gap-6">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-label-2">
              <li><Link href="/help-center" className="hover:text-label hover:underline underline-offset-[3px]">Help center</Link></li>
              <ChevronRight size={14} className="text-label-3" aria-hidden />
              <li><Link href={`/help-center/questions#${q.category.id}`} className="hover:text-label hover:underline underline-offset-[3px]">{q.category.title}</Link></li>
            </ol>
          </nav>
          <h1 className="text-[34px] leading-[1.12] font-semibold tracking-[-0.018em] text-balance text-label md:text-[48px] md:leading-[1.08]">{q.q}</h1>
          <div className="rounded-3xl bg-brand-tint p-6 md:p-8">
            <p className="text-[13px] font-semibold text-brand-text">Short answer</p>
            <p className="mt-2 text-[19px] leading-[28px] font-medium text-label md:text-[21px] md:leading-[30px]">{q.short}</p>
          </div>
          {q.more ? <p className="text-[17px] leading-[28px] text-label-2">{q.more}</p> : null}
          {q.steps ? (
            <div className="flex flex-col gap-4">
              <h2 className="text-[22px] leading-[28px] font-semibold text-label">Step by step</h2>
              <ol className="flex flex-col gap-3">
                {q.steps.map((s, i) => (
                  <li key={s} className="flex gap-4 text-[17px] leading-[26px] text-label">
                    <span className="grid h-7 w-7 flex-none place-items-center rounded-full bg-surface text-[13px] font-semibold tabular-nums">{i + 1}</span>
                    <span className="pt-0.5">{s}</span>
                  </li>
                ))}
              </ol>
            </div>
          ) : null}
          {q.note ? <p className="rounded-2xl bg-surface px-5 py-4 text-[15px] leading-[22px] text-label-2">{q.note}</p> : null}
          {q.demo ? (
            <a href="#demo" className="inline-flex min-h-11 items-center self-start rounded-full bg-label px-5 text-[15px] font-medium text-white transition-colors hover:bg-label-2">
              See it in the app
            </a>
          ) : null}
        </div>
      </Section>

      {q.demo ? (
        <Section alt id="demo">
          <div className="mx-auto flex max-w-[1080px] flex-col gap-10">
            <SectionHeader
              align="start"
              eyebrow="Interactive demo"
              title="See it in the app."
              lead={q.demo.length > 1 ? `${q.demo.length} screens. Tap a number to see what it does. Dark numbers open the next screen.` : "Tap a number to see what it does."}
            />
            <AppTour steps={q.demo} label={`${q.q} demo`} />
          </div>
        </Section>
      ) : null}

      <Section>
        <div className="mx-auto flex max-w-[880px] flex-col gap-10">
          {related.length || sameCategory.length ? (
            <div className="flex flex-col gap-4">
              <h2 className="text-[26px] leading-[1.2] font-semibold tracking-[-0.01em] text-label">Related questions</h2>
              <ul className="flex flex-col border-t border-separator">
                {[...related, ...sameCategory].slice(0, 5).map((r) => (
                  <li key={r.slug} className="border-b border-separator">
                    <Link href={`/help-center/questions/${r.slug}`} className="group flex min-h-14 items-center gap-3 py-3 text-[17px] text-label">
                      <span className="flex-1 group-hover:underline underline-offset-[3px]">{r.q}</span>
                      <ChevronRight size={18} className="flex-none text-label-3" aria-hidden />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          <div className="flex flex-col gap-3 sm:flex-row">
            {q.guide ? (
              <Link href={q.guide.href} className="flex flex-1 items-center gap-3 rounded-3xl bg-surface p-5 transition-colors hover:bg-separator">
                <BookOpen size={22} className="text-brand-text" aria-hidden />
                <span className="flex-1"><span className="block text-[13px] text-label-2">Full guide</span><span className="text-[17px] font-semibold text-label">{q.guide.title}</span></span>
                <ChevronRight size={18} className="text-label-3" aria-hidden />
              </Link>
            ) : null}
            <Link href="/help-center/questions" className="flex flex-1 items-center gap-3 rounded-3xl bg-surface p-5 transition-colors hover:bg-separator">
              <LifeBuoy size={22} className="text-brand-text" aria-hidden />
              <span className="flex-1"><span className="block text-[13px] text-label-2">Help center</span><span className="text-[17px] font-semibold text-label">All questions</span></span>
              <ChevronRight size={18} className="text-label-3" aria-hidden />
            </Link>
          </div>
          <p className="text-[15px] text-label-2">
            Still stuck? Email <a href="mailto:hello@hushku.app" className="font-medium text-brand-text hover:underline underline-offset-[3px]">hello@hushku.app</a> and a real person will reply.
          </p>
        </div>
      </Section>
    </div>
  );
}
