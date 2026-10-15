import type { SymptomArticle, UrgencyLevel } from "../data/symptom-articles";
import ArticleShell, { ArticleSection, Prose } from "./ArticleShell";
import { md } from "../utils/markdown";

const URGENCY: Record<UrgencyLevel, { label: string; cls: string }> = {
  emergency: { label: "Emergency: go to a vet now", cls: "bg-danger-tint" },
  urgent: { label: "See a vet within 24 hours", cls: "bg-warning-tint" },
  monitor: { label: "Monitor at home; call your vet if it worsens", cls: "bg-info-tint" },
  routine: { label: "Book a routine vet visit", cls: "bg-success-tint" },
};
const SEV = { mild: "Usually mild", moderate: "Needs a vet", serious: "Serious" } as const;
const li = (items: string[]) => (
  <ul className="article-body flex flex-col">
    {items.map((x) => <li key={x} dangerouslySetInnerHTML={{ __html: md(x).replace(/^<p>|<\/p>$/g, "") }} />)}
  </ul>
);

export default function SymptomLayout({ article: a }: { article: SymptomArticle }) {
  const u = URGENCY[a.urgencyLevel];
  const toc = [
    { id: "overview", label: "Overview" },
    { id: "emergency-signs", label: "Emergency signs" },
    { id: "causes", label: "Common causes" },
    { id: "home-care", label: "What you can do at home" },
    { id: "when-to-see-a-vet", label: "When to see a vet" },
    ...(a.prevention.length ? [{ id: "prevention", label: "Prevention" }] : []),
  ];
  return (
    <ArticleShell
      slug={a.slug}
      kind="Symptom guide"
      h1={a.title}
      lead={a.seoDescription}
      answer={a.quickAnswer}
      updated={a.lastUpdated}
      readTime={a.readTime}
      toc={toc}
      faqs={a.faqs}
      relatedSlugs={a.relatedSlugs}
      medical
      banner={<p className={`rounded-2xl px-4 py-3 text-[15px] font-semibold text-label ${u.cls}`}>{u.label}. <span className="font-normal text-label-2">{a.urgencyLabel}</span></p>}
    >
      <ArticleSection id="overview" title="Overview"><Prose text={a.introduction} /></ArticleSection>
      <ArticleSection id="emergency-signs" title="Go to a vet now if you see">
        <div className="rounded-3xl bg-danger-tint p-5">{li(a.emergencyWarnings)}</div>
      </ArticleSection>
      <ArticleSection id="causes" title="Common causes">
        <ol className="flex flex-col gap-3">
          {a.causes.map((c, i) => (
            <li key={c.title} className="rounded-2xl bg-bg-2 p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-[19px] font-semibold text-label">{i + 1}. {c.title}</h3>
                <span className={`rounded-full px-2.5 py-0.5 text-[12px] font-semibold ${c.severity === "serious" ? "bg-danger-tint" : c.severity === "moderate" ? "bg-warning-tint" : "bg-success-tint"} text-label`}>{SEV[c.severity]}</span>
              </div>
              <div className="mt-2"><Prose text={c.description} /></div>
            </li>
          ))}
        </ol>
      </ArticleSection>
      <ArticleSection id="home-care" title="What you can do at home">{li(a.homeCareTips)}</ArticleSection>
      <ArticleSection id="when-to-see-a-vet" title="When to see a vet">{li(a.whenToSeeVet)}</ArticleSection>
      {a.prevention.length ? <ArticleSection id="prevention" title="Prevention">{li(a.prevention)}</ArticleSection> : null}
    </ArticleShell>
  );
}
