import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { PillarPage } from "../data/pillars";
import ArticleShell, { ArticleSection, Prose, slugify } from "./ArticleShell";

const TYPE_LABEL: Record<string, string> = { "how-to": "How-to guides", symptom: "Symptom guides", breed: "Breed guides", definition: "Explainers", guide: "In-depth guides", article: "App guides" };

export default function PillarLayout({ page: p }: { page: PillarPage }) {
  const id = (c: PillarPage["chapters"][number]) => c.anchorId ?? slugify(c.title);
  const toc = [...p.chapters.map((c) => ({ id: id(c), label: c.title })), ...(p.clusterArticles.length ? [{ id: "more-guides", label: "All guides on this topic" }] : [])];
  const groups = p.clusterArticles.reduce<Record<string, PillarPage["clusterArticles"]>>((m, a) => ((m[a.type] ??= []).push(a), m), {});
  return (
    <ArticleShell slug={p.slug} kind="Complete guide" h1={p.title} lead={p.seoDescription} answer={p.quickAnswer} updated={p.lastUpdated} readTime={p.readTime} toc={toc} faqs={p.faqs} relatedSlugs={[]} medical={/health/.test(p.slug)}>
      <section aria-label="Introduction"><Prose text={p.introduction} /></section>
      {p.chapters.map((c, i) => (
        <ArticleSection key={c.title} id={id(c)} title={`${i + 1}. ${c.title}`}>
          {c.summary ? <p className="text-[17px] leading-[27px] font-medium text-label-2">{c.summary}</p> : null}
          <Prose text={c.content} />
          {c.callout ? <div className="rounded-2xl bg-warning-tint px-5 py-4 [&_.article-body]:text-[16px]"><Prose text={c.callout} /></div> : null}
          {c.linkedSlug ? (
            <Link href={`/resources/${c.linkedSlug}`} className="inline-flex items-center self-start text-[15px] font-medium text-brand-text hover:underline underline-offset-[3px]">
              Read the full guide <ChevronRight size={16} aria-hidden />
            </Link>
          ) : null}
        </ArticleSection>
      ))}
      {p.clusterArticles.length ? (
        <ArticleSection id="more-guides" title="All guides on this topic">
          <div className="grid gap-6 md:grid-cols-2">
            {Object.entries(groups).map(([type, list]) => (
              <div key={type}>
                <h3 className="mb-2 text-[15px] font-semibold text-label-2">{TYPE_LABEL[type] ?? "Guides"}</h3>
                <ul className="flex flex-col border-t border-separator">
                  {Array.from(new Map(list.map((a) => [a.slug, a])).values()).map((a) => (
                    <li key={a.slug} className="border-b border-separator">
                      <Link href={`/resources/${a.slug}`} className="group flex min-h-12 items-center gap-2 py-2 text-[16px] text-label">
                        <span className="flex-1 group-hover:underline underline-offset-[3px]">{a.title}</span>
                        <ChevronRight size={16} className="flex-none text-label-3" aria-hidden />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ArticleSection>
      ) : null}
    </ArticleShell>
  );
}
