import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, PlayCircle } from "lucide-react";
import { Section, SectionHeader } from "../../components/ui";
import QuestionSearch from "./QuestionSearch";
import { ALL_QUESTIONS, CATEGORIES } from "./data";

const TITLE = "Common Questions About the Hushku App | Help Center";
const DESC =
  "Answers to common questions about Hushku: multiple pets, sharing care with family and sitters, reminders, health records, playdates, adoption, lost pets, privacy and more. Most answers include an interactive demo.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "https://hushku.app/help-center/questions" },
  openGraph: { title: TITLE, description: DESC, type: "website", url: "https://hushku.app/help-center/questions" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
};

export default function QuestionsPage() {
  const items = ALL_QUESTIONS.map((q) => ({ slug: q.slug, q: q.q, short: q.short, category: q.category.title, demo: !!q.demo, keywords: q.keywords }));
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ALL_QUESTIONS.map((q) => ({ "@type": "Question", name: q.q, acceptedAnswer: { "@type": "Answer", text: q.short } })),
  };

  return (
    <div className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Section className="!pt-10 md:!pt-16">
        <div className="mx-auto flex max-w-[760px] flex-col items-center gap-6">
          <nav aria-label="Breadcrumb" className="self-start md:self-center">
            <ol className="flex items-center gap-1.5 text-[13px] text-label-2">
              <li><Link href="/help-center" className="hover:text-label hover:underline underline-offset-[3px]">Help center</Link></li>
              <ChevronRight size={14} className="text-label-3" aria-hidden />
              <li aria-current="page" className="font-medium text-label">Questions</li>
            </ol>
          </nav>
          <SectionHeader as="h1" size="l" eyebrow="Help center" title="Common questions." lead={`${ALL_QUESTIONS.length} answers, most with an interactive demo of the app.`} />
          <QuestionSearch items={items} />
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="mx-auto grid max-w-[1080px] gap-12 lg:grid-cols-[220px_1fr] lg:gap-16">
          <nav aria-label="Topics" className="hidden lg:sticky lg:top-24 lg:block lg:self-start">
            <ol className="flex flex-col gap-1 border-l border-separator">
              {CATEGORIES.map((c) => (
                <li key={c.id}>
                  <a href={`#${c.id}`} className="-ml-px block border-l border-transparent py-1.5 pl-4 text-[15px] text-label-2 hover:border-label hover:text-label">{c.title}</a>
                </li>
              ))}
            </ol>
          </nav>
          <div className="flex flex-col gap-14">
            {CATEGORIES.map((c) => (
              <section key={c.id} id={c.id} aria-labelledby={`${c.id}-h`} className="flex scroll-mt-24 flex-col gap-4">
                <h2 id={`${c.id}-h`} className="text-[26px] leading-[1.2] font-semibold tracking-[-0.01em] text-label">{c.title}</h2>
                <ul className="flex flex-col border-t border-separator">
                  {c.questions.map((q) => (
                    <li key={q.slug} className="border-b border-separator">
                      <Link href={`/help-center/questions/${q.slug}`} className="group flex items-start gap-4 py-4">
                        <span className="flex min-w-0 flex-1 flex-col gap-1">
                          <span className="text-[17px] leading-[24px] font-semibold text-label group-hover:underline underline-offset-[3px]">{q.q}</span>
                          <span className="text-[15px] leading-[22px] text-label-2">{q.short}</span>
                        </span>
                        {q.demo ? (
                          <span className="mt-0.5 hidden flex-none items-center gap-1 rounded-full bg-brand-tint px-2.5 py-1 text-[13px] font-medium text-brand-text sm:inline-flex">
                            <PlayCircle size={14} aria-hidden /> Demo
                          </span>
                        ) : null}
                        <ChevronRight size={18} className="mt-1 flex-none text-label-3" aria-hidden />
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
