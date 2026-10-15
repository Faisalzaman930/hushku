import type { HowToArticle } from "../data/howto";
import ArticleShell, { ArticleSection, Prose } from "./ArticleShell";

export default function HowToLayout({ article: a }: { article: HowToArticle }) {
  const toc = [
    { id: "overview", label: "Overview" },
    ...(a.supplies?.length ? [{ id: "what-you-need", label: "What you need" }] : []),
    { id: "steps", label: `Step by step (${a.steps.length} steps)` },
    ...(a.commonMistakes.length ? [{ id: "mistakes", label: "Common mistakes" }] : []),
  ];
  return (
    <ArticleShell slug={a.slug} kind="How-to guide" h1={a.title} lead={a.seoDescription} answer={a.quickAnswer} updated={a.lastUpdated} readTime={a.readTime} toc={toc} faqs={a.faqs} relatedSlugs={a.relatedSlugs}>
      <ArticleSection id="overview" title="Overview"><Prose text={a.introduction} /></ArticleSection>
      {a.supplies?.length ? (
        <ArticleSection id="what-you-need" title="What you need">
          <ul className="grid gap-2 sm:grid-cols-2">
            {a.supplies.map((s) => (
              <li key={s.item} className="rounded-2xl bg-bg-2 p-4">
                <p className="text-[17px] font-semibold text-label">{s.item}</p>
                <p className="mt-1 text-[15px] leading-[22px] text-label-2">{s.note}</p>
              </li>
            ))}
          </ul>
        </ArticleSection>
      ) : null}
      <ArticleSection id="steps" title="Step by step">
        <ol className="flex flex-col gap-8">
          {a.steps.map((s, i) => (
            <li key={s.title} id={`step-${i + 1}`} className="flex scroll-mt-24 gap-4">
              <span className="grid h-9 w-9 flex-none place-items-center rounded-full bg-label text-[15px] font-semibold text-white">{i + 1}</span>
              <div className="flex min-w-0 flex-1 flex-col gap-3">
                <h3 className="pt-1 text-[21px] leading-[1.3] font-semibold text-label">{s.title}</h3>
                <Prose text={s.content} />
                {s.tip ? <p className="rounded-2xl bg-success-tint px-4 py-3 text-[15px] leading-[22px] text-label"><strong className="font-semibold">Tip:</strong> {s.tip}</p> : null}
                {s.warning ? <p className="rounded-2xl bg-warning-tint px-4 py-3 text-[15px] leading-[22px] text-label"><strong className="font-semibold">Careful:</strong> {s.warning}</p> : null}
              </div>
            </li>
          ))}
        </ol>
      </ArticleSection>
      {a.commonMistakes.length ? (
        <ArticleSection id="mistakes" title="Common mistakes">
          <ul className="flex flex-col gap-3">
            {a.commonMistakes.map((m) => (
              <li key={m.mistake} className="rounded-2xl bg-bg-2 p-5">
                <h3 className="text-[17px] font-semibold text-label">{m.mistake}</h3>
                <p className="mt-1 text-[15px] leading-[22px] text-label-2"><strong className="font-semibold text-label">Why it backfires:</strong> {m.why}</p>
                <p className="mt-1 text-[15px] leading-[22px] text-label-2"><strong className="font-semibold text-label">Do this instead:</strong> {m.fix}</p>
              </li>
            ))}
          </ul>
        </ArticleSection>
      ) : null}
    </ArticleShell>
  );
}
