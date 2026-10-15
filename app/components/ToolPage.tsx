import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { ChevronRight, ExternalLink } from "lucide-react";
import { findTool, TOOLS_REVIEWED, TOOLS_REVIEWED_ISO } from "../data/tools";
import FaqAccordion from "./FaqAccordion";
import ToolAppCta from "./ToolAppCta";

const BASE = "https://hushku.app";

/** Metadata for a tool page, from app/data/tools.ts. */
export function toolMetadata(slug: string): Metadata {
  const t = findTool(slug);
  if (!t) return {};
  const url = `${BASE}/tools/${t.slug}`;
  return {
    title: t.title.length > 51 ? { absolute: t.title } : t.title,
    description: t.description,
    alternates: { canonical: url },
    openGraph: { title: t.title, description: t.description, type: "website", url, images: [{ url: `${BASE}/og.png`, width: 1200, height: 630, alt: `Hushku ${t.name.toLowerCase()}` }] },
    twitter: { card: "summary_large_image", title: t.title, description: t.description, images: [`${BASE}/og.png`] },
  };
}

/**
 * The page around every free tool: answer-first header, the tool, how it works with sources, FAQs
 * and related tools. `children` is the interactive tool; `after` is optional page-specific content.
 */
export default function ToolPage({ slug, children, after }: { slug: string; children: ReactNode; after?: ReactNode }) {
  const t = findTool(slug);
  if (!t) throw new Error(`Unknown tool ${slug}`);
  const url = `${BASE}/tools/${t.slug}`;
  const related = t.related.map(findTool).filter((r): r is NonNullable<typeof r> => !!r);

  const schemas: object[] = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: t.h1,
      url,
      description: t.description,
      applicationCategory: t.category === "Health" ? "HealthApplication" : "LifestyleApplication",
      operatingSystem: "Any",
      browserRequirements: "Requires JavaScript",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      dateModified: TOOLS_REVIEWED_ISO,
      publisher: { "@type": "Organization", name: "Hushku", url: BASE },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE },
        { "@type": "ListItem", position: 2, name: "Free tools", item: `${BASE}/tools` },
        { "@type": "ListItem", position: 3, name: t.name, item: url },
      ],
    },
  ];
  if (t.faqs.length) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: t.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    });
  }

  const h2 = "text-[26px] leading-[1.2] font-semibold tracking-[-0.01em] text-label";

  return (
    <div className="bg-white">
      {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}

      <header className="px-4 pt-8 pb-8 md:px-8 md:pt-14 md:pb-10">
        <div className="mx-auto flex max-w-[880px] flex-col gap-5">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-label-2">
              <li><Link href="/tools" className="hover:text-label hover:underline underline-offset-[3px]">Free tools</Link></li>
              <ChevronRight size={14} className="text-label-3" aria-hidden />
              <li>{t.category}</li>
            </ol>
          </nav>
          <h1 className="text-[34px] leading-[1.1] font-semibold tracking-[-0.02em] text-balance text-label md:text-[48px] md:leading-[1.06]">{t.h1}</h1>
          <p className="text-[19px] leading-[29px] text-label md:text-[21px] md:leading-[31px]">{t.answer}</p>
          <p className="text-[13px] text-label-2">
            Free, no sign-up · Reviewed {TOOLS_REVIEWED} · <a href="#how-it-works" className="font-medium text-brand-text hover:underline underline-offset-[3px]">How it works</a>
          </p>
        </div>
      </header>

      <div className="px-4 md:px-8">
        <section aria-label={t.name} className="tool-ui mx-auto max-w-[1080px] rounded-3xl border border-separator bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04),0_8px_32px_rgba(0,0,0,0.06)] md:p-10">
          {children}
        </section>
        {t.medical ? (
          <p className="mx-auto mt-4 max-w-[1080px] text-[13px] leading-[19px] text-label-2">
            For information only, not a diagnosis or a substitute for your vet. If your pet seems unwell or you&apos;re worried, call your vet.
          </p>
        ) : null}
      </div>

      <div className="px-4 py-14 md:px-8 md:py-20">
        <div className="mx-auto flex max-w-[880px] flex-col gap-14">
          <section id="how-it-works" aria-labelledby="hiw-h" className="flex scroll-mt-24 flex-col gap-4">
            <h2 id="hiw-h" className={h2}>How this {/quiz/.test(t.slug) ? "quiz" : "tool"} works</h2>
            {t.howItWorks.map((p) => <p key={p} className="text-[17px] leading-[28px] text-label-2">{p}</p>)}
            {t.sources.length ? (
              <div className="flex flex-col gap-2 rounded-2xl bg-surface px-5 py-4">
                <p className="text-[13px] font-semibold text-label">Sources</p>
                <ul className="flex flex-col gap-1.5">
                  {t.sources.map((s) => (
                    <li key={s.url}>
                      <a href={s.url} target="_blank" rel="noopener" className="inline-flex items-start gap-1.5 text-[15px] leading-[22px] text-brand-text hover:underline underline-offset-[3px]">
                        {s.label} <ExternalLink size={14} className="mt-1 flex-none" aria-hidden />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </section>

          {after}

          <ToolAppCta />
        </div>
      </div>

      {t.faqs.length ? <FaqAccordion faqs={t.faqs} title="Questions." /> : null}

      <section className="px-4 py-14 md:px-8 md:py-20" aria-labelledby="more-tools-h">
        <div className="mx-auto flex max-w-[880px] flex-col gap-6">
          <h2 id="more-tools-h" className={h2}>Related tools</h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {related.map((r) => (
              <li key={r.slug}>
                <Link href={`/tools/${r.slug}`} className="group flex h-full items-start gap-3 rounded-2xl bg-bg-2 p-4 transition-colors hover:bg-surface">
                  <span className="text-[22px] leading-none" aria-hidden>{r.emoji}</span>
                  <span className="flex flex-col gap-1">
                    <span className="text-[17px] font-semibold text-label group-hover:underline underline-offset-[3px]">{r.h1}</span>
                    <span className="text-[15px] leading-[21px] text-label-2">{r.description.split(". ")[0].replace(/\.$/, "")}.</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          {t.guides?.length ? (
            <div className="flex flex-col gap-2">
              <p className="text-[15px] font-semibold text-label">Read next</p>
              <ul className="flex flex-col border-t border-separator">
                {t.guides.map((g) => (
                  <li key={g.href} className="border-b border-separator">
                    <Link href={g.href} className="group flex min-h-12 items-center gap-3 py-2 text-[17px] text-label">
                      <span className="flex-1 group-hover:underline underline-offset-[3px]">{g.label}</span>
                      <ChevronRight size={18} className="flex-none text-label-3" aria-hidden />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          <Link href="/tools" className="inline-flex items-center self-start text-[15px] font-medium text-brand-text hover:underline underline-offset-[3px]">
            All free tools <ChevronRight size={16} aria-hidden />
          </Link>
        </div>
      </section>
    </div>
  );
}
