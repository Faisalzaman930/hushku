import type { Metadata } from "next";
import Link from "next/link";
import ArticleShell, { ArticleSection, Prose } from "./ArticleShell";
import { findVaccinePage, VACCINE_PAGES, type VaccinePage } from "../data/vaccine-schedules";
import { metaDesc, searchTitle } from "../lib/seo";

const UPDATED = "October 2026";
const ISO = "2026-10-16";
const BASE = "https://hushku.app";


export function vaccineMetadata(slug: string): Metadata {
  const v = findVaccinePage(slug)!;
  const url = `${BASE}/resources/${v.slug}`;
  return {
    title: searchTitle(v.seoTitle),
    description: metaDesc(v.seoDescription),
    alternates: { canonical: url },
    openGraph: { title: v.seoTitle, description: metaDesc(v.seoDescription), type: "article", url, images: [{ url: `${BASE}/og.png`, width: 1200, height: 630 }] },
    twitter: { card: "summary_large_image", title: v.seoTitle, description: metaDesc(v.seoDescription) },
  };
}

export default function VaccinePageView({ slug }: { slug: string }) {
  const v = findVaccinePage(slug) as VaccinePage;
  const url = `${BASE}/resources/${v.slug}`;
  const schema = [
    { "@context": "https://schema.org", "@type": "MedicalWebPage", headline: v.title, description: v.seoDescription, url, datePublished: ISO, dateModified: ISO, lastReviewed: ISO, author: { "@type": "Organization", name: "Hushku editorial team", url: `${BASE}/about/editorial` }, publisher: { "@type": "Organization", name: "Hushku", url: BASE }, citation: (v.extras.sources ?? []).map((s) => s.url) },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Guides", item: `${BASE}/resources` }, { "@type": "ListItem", position: 2, name: v.shortTitle, item: url }] },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: v.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
  ];
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ArticleShell slug={v.slug} kind="Vaccine schedule" h1={v.title} answer={v.answer} updated={UPDATED} toc={v.sections.map((s) => ({ id: s.id, label: s.title }))} faqs={v.faqs} relatedSlugs={v.related} medical>
        {v.sections.map((s) => (
          <ArticleSection key={s.id} id={s.id} title={s.title}>
            <Prose text={s.body} />
          </ArticleSection>
        ))}
        <ArticleSection id="other-schedules" title="Other vaccine schedules">
          <ul className="flex flex-wrap gap-2">
            {VACCINE_PAGES.filter((o) => o.slug !== v.slug).map((o) => (
              <li key={o.slug}><Link href={`/resources/${o.slug}`} className="inline-flex min-h-11 items-center rounded-full bg-surface px-4 text-[15px] font-medium text-label hover:bg-separator">{o.shortTitle}</Link></li>
            ))}
          </ul>
        </ArticleSection>
      </ArticleShell>
    </>
  );
}
