import type { ReactNode } from "react";
import Link from "next/link";
import { ChevronRight, ExternalLink } from "lucide-react";
import FaqAccordion from "./FaqAccordion";
import AppCta from "./AppCta";
import { md } from "../utils/markdown";
import { findTool } from "../data/tools";
import { extrasFor, ARTICLE_TOPICS, topicFor } from "../data/article-extras";
import { getRelatedArticles } from "../utils/related-articles";

export type TocItem = { id: string; label: string };

/**
 * The page around every blog article: answer-first header, key facts, contents, the body, sources,
 * FAQs, related tools and articles, and an app offer. Each article type renders only its body.
 */
export default function ArticleShell({
  slug,
  kind,
  h1,
  lead,
  answer,
  updated,
  readTime,
  toc = [],
  faqs = [],
  relatedSlugs = [],
  medical = false,
  banner,
  cta,
  crumbs,
  children,
}: {
  slug: string;
  kind: string;
  h1: string;
  lead?: string;
  answer?: string;
  updated: string;
  readTime?: string;
  toc?: TocItem[];
  faqs?: { q: string; a: string }[];
  relatedSlugs?: string[];
  medical?: boolean;
  banner?: ReactNode;
  cta?: { title: string; body: string; link?: { href: string; label: string } };
  /** Breadcrumb trail; defaults to Guides › topic. */
  crumbs?: { href: string; label: string }[];
  children: ReactNode;
}) {
  const x0 = extrasFor(slug);
  const x = cta ? { ...x0, cta } : x0;
  const topic = topicFor(slug);
  const tools = (x.tools ?? []).map(findTool).filter((t): t is NonNullable<typeof t> => !!t);
  const related = getRelatedArticles(Array.from(new Set(relatedSlugs.filter((r) => r !== slug)))).slice(0, 4);
  const h2 = "text-[26px] leading-[1.2] font-semibold tracking-[-0.01em] text-label";
  const toc2 = [...toc, ...(x.sources?.length ? [{ id: "sources", label: "Sources" }] : []), ...(faqs.length ? [{ id: "faqs", label: "Questions" }] : [])];

  return (
    <article className="bg-white">
      <header className="px-4 pt-8 pb-8 md:px-8 md:pt-14 md:pb-10">
        <div className="mx-auto flex max-w-[760px] flex-col gap-5">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-label-2">
              {(crumbs ?? [{ href: "/resources", label: "Guides" }, { href: `/resources#${topic}`, label: ARTICLE_TOPICS[topic] }]).map((c, i) => (
                <li key={c.href} className="flex items-center gap-1.5">
                  {i > 0 ? <ChevronRight size={14} className="text-label-3" aria-hidden /> : null}
                  <Link href={c.href} className="hover:text-label hover:underline underline-offset-[3px]">{c.label}</Link>
                </li>
              ))}
            </ol>
          </nav>
          <p className="text-[13px] font-semibold text-brand-text">{kind}</p>
          <h1 className="text-[34px] leading-[1.1] font-semibold tracking-[-0.02em] text-balance text-label md:text-[46px] md:leading-[1.06]">{h1}</h1>
          {lead ? <p className="text-[19px] leading-[29px] text-label-2 md:text-[21px] md:leading-[31px]">{lead}</p> : null}
          <p className="text-[13px] text-label-2">
            Updated {x.updated ?? updated}{readTime ? ` · ${readTime.replace(/ ?Min Read/i, " min read")}` : ""} · By the <Link href="/about/editorial" className="font-medium text-brand-text hover:underline underline-offset-[3px]">Hushku editorial team</Link>
            {x.sources?.length ? <> · <a href="#sources" className="font-medium text-brand-text hover:underline underline-offset-[3px]">{x.sources.length} sources</a></> : null}
          </p>
        </div>
      </header>

      <div className="px-4 md:px-8">
        <div className="mx-auto flex max-w-[760px] flex-col gap-6">
          {banner}
          {answer ? (
            <section aria-label="Short answer" className="rounded-3xl bg-brand-tint p-6 md:p-8">
              <p className="text-[13px] font-semibold text-brand-text">Short answer</p>
              <div className="mt-2 text-[19px] leading-[28px] font-medium text-label [&_a]:text-brand-text [&_a]:underline [&_strong]:font-semibold" dangerouslySetInnerHTML={{ __html: md(answer).replace(/^<p>|<\/p>$/g, "") }} />
            </section>
          ) : null}
          {x.keyFacts?.length ? (
            <section aria-labelledby="facts-h" className="rounded-3xl bg-bg-2 p-6">
              <h2 id="facts-h" className="text-[17px] font-semibold text-label">Key facts</h2>
              <ul className="mt-3 flex flex-col gap-2">
                {x.keyFacts.map((f) => (
                  <li key={f} className="flex gap-3 text-[16px] leading-[24px] text-label">
                    <span aria-hidden className="mt-[10px] h-1.5 w-1.5 flex-none rounded-full bg-brand" />
                    <span dangerouslySetInnerHTML={{ __html: md(f).replace(/^<p>|<\/p>$/g, "") }} />
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
          {medical ? (
            <p className="text-[13px] leading-[19px] text-label-2">This guide is general information, not a diagnosis. If your pet seems unwell, or you&apos;re worried, call your vet.</p>
          ) : null}
          {toc2.length > 2 ? (
            <nav aria-label="Contents" className="rounded-3xl border border-separator p-5">
              <p className="text-[15px] font-semibold text-label">Contents</p>
              <ol className="mt-2 grid gap-x-6 gap-y-1 text-[15px] sm:grid-cols-2">
                {toc2.map((t) => (
                  <li key={t.id}><a href={`#${t.id}`} className="inline-flex min-h-9 items-center text-label-2 hover:text-label hover:underline underline-offset-[3px]">{t.label}</a></li>
                ))}
              </ol>
            </nav>
          ) : null}
        </div>
      </div>

      <div className="px-4 pt-6 pb-14 md:px-8 md:pb-20">
        <div className="mx-auto flex max-w-[760px] flex-col gap-12">
          {children}

          {tools.length ? (
            <section aria-labelledby="tools-h" className="flex flex-col gap-3">
              <h2 id="tools-h" className={h2}>Free tools for this</h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {tools.map((t) => (
                  <li key={t.slug}>
                    <Link href={`/tools/${t.slug}`} className="group flex h-full items-start gap-3 rounded-2xl bg-bg-2 p-4 hover:bg-surface">
                      <span className="text-[22px] leading-none" aria-hidden>{t.emoji}</span>
                      <span className="text-[17px] font-semibold text-label group-hover:underline underline-offset-[3px]">{t.h1}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {x.sources?.length ? (
            <section id="sources" aria-labelledby="sources-h" className="flex scroll-mt-24 flex-col gap-3">
              <h2 id="sources-h" className={h2}>Sources</h2>
              <ol className="flex flex-col gap-2">
                {x.sources.map((s) => (
                  <li key={s.url}>
                    <a href={s.url} target="_blank" rel="noopener" className="inline-flex items-start gap-1.5 text-[15px] leading-[22px] text-brand-text hover:underline underline-offset-[3px]">
                      {s.label} <ExternalLink size={14} className="mt-1 flex-none" aria-hidden />
                    </a>
                  </li>
                ))}
              </ol>
              <p className="text-[13px] text-label-2">We check guides against veterinary sources and update them when guidance changes. <Link href="/about/editorial" className="text-brand-text hover:underline underline-offset-[3px]">How we write and review</Link>.</p>
            </section>
          ) : null}

          <AppCta title={x.cta?.title ?? "Keep your pet's care in one place"} body={x.cta?.body ?? "Hushku keeps reminders, health records and routines for each pet, and shares them with everyone who helps care for them."} link={x.cta?.link ?? { href: "/health", label: "See health and care" }} source={`guide:${slug}`} />
        </div>
      </div>

      {faqs.length ? <div id="faqs" className="scroll-mt-24"><FaqAccordion faqs={faqs.map((f) => ({ q: f.q, a: f.a.replace(/\*\*(.+?)\*\*/g, "$1").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") }))} title="Questions." /></div> : null}

      {related.length ? (
        <section className="px-4 py-14 md:px-8" aria-labelledby="related-h">
          <div className="mx-auto flex max-w-[760px] flex-col gap-4">
            <h2 id="related-h" className={h2}>Read next</h2>
            <ul className="flex flex-col border-t border-separator">
              {related.map((r) => (
                <li key={r.slug} className="border-b border-separator">
                  <Link href={`/resources/${r.slug}`} className="group flex min-h-14 items-center gap-3 py-3">
                    <span className="flex-1"><span className="block text-[13px] text-label-2">{r.typeLabel}</span><span className="text-[17px] font-medium text-label group-hover:underline underline-offset-[3px]">{r.shortTitle}</span></span>
                    <ChevronRight size={18} className="flex-none text-label-3" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}
    </article>
  );
}

/** A titled body section with an anchor, for the table of contents. */
export function ArticleSection({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="flex scroll-mt-24 flex-col gap-4">
      <h2 id={`${id}-h`} className="text-[26px] leading-[1.2] font-semibold tracking-[-0.01em] text-label">{title}</h2>
      {children}
    </section>
  );
}

export function Prose({ text, html }: { text?: string; html?: string }) {
  return <div className="article-body" dangerouslySetInnerHTML={{ __html: html ?? md(text ?? "") }} />;
}

export const slugify = (s: string) => s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60);
