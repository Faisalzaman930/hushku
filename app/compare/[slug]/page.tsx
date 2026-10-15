import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ChevronRight } from "lucide-react";
import { Section } from "../../components/ui";
import AppCta from "../../components/AppCta";
import FaqAccordion from "../../components/FaqAccordion";
import { CHECKED, CHECKED_ISO, COMPARE_PAGES, findCompare } from "../../data/compare";

export const dynamicParams = false;

export function generateStaticParams() {
  return COMPARE_PAGES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = findCompare(slug);
  if (!c) return {};
  const url = `https://hushku.app/compare/${c.slug}`;
  return {
    title: { absolute: c.seoTitle },
    description: c.description,
    alternates: { canonical: url },
    openGraph: { title: c.seoTitle, description: c.description, type: "article", url, images: [{ url: "https://hushku.app/og.png", width: 1200, height: 630, alt: "Hushku: every pet app, one quiet place" }] },
    twitter: { card: "summary_large_image", title: c.seoTitle, description: c.description },
  };
}

const h2 = "text-[26px] leading-[1.2] font-semibold tracking-[-0.01em] text-label";

export default async function ComparePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = findCompare(slug);
  if (!c) notFound();
  const related = c.related.map(findCompare).filter((r): r is NonNullable<typeof r> => !!r);
  const url = `https://hushku.app/compare/${c.slug}`;
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: c.title,
      description: c.description,
      dateModified: CHECKED_ISO,
      mainEntityOfPage: url,
      author: { "@type": "Organization", name: "Hushku", url: "https://hushku.app" },
      publisher: { "@type": "Organization", name: "Hushku", url: "https://hushku.app" },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hushku.app" },
        { "@type": "ListItem", position: 2, name: "Compare", item: "https://hushku.app/compare" },
        { "@type": "ListItem", position: 3, name: c.title, item: url },
      ],
    },
  ];

  return (
    <div className="bg-white">
      {schemas.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}

      <Section className="!pt-10 !pb-12 md:!pt-16">
        <div className="mx-auto flex max-w-[880px] flex-col gap-6">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-label-2">
              <li><Link href="/compare" className="hover:text-label hover:underline underline-offset-[3px]">Compare</Link></li>
              <ChevronRight size={14} className="text-label-3" aria-hidden />
              <li aria-current="page">{c.title}</li>
            </ol>
          </nav>
          <h1 className="text-[34px] leading-[1.12] font-semibold tracking-[-0.018em] text-balance text-label md:text-[48px] md:leading-[1.08]">{c.title}</h1>
          <p className="text-[19px] leading-[29px] text-label-2 md:text-[21px] md:leading-[31px]">{c.lead}</p>
          <p className="rounded-2xl bg-surface px-5 py-4 text-[15px] leading-[22px] text-label-2">
            Hushku makes a pet app, launching soon, so we have an interest here. Facts about other apps come from their US App Store listings, checked in {CHECKED}. Prices and features change, so check the listing before you pay.
          </p>
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="mx-auto flex max-w-[880px] flex-col gap-14">
          {c.why ? (
            <section className="flex flex-col gap-4" aria-labelledby="why-h">
              <h2 id="why-h" className={h2}>Why people look for an alternative to {c.rival}</h2>
              <ul className="flex flex-col gap-2">
                {c.why.map((w) => (
                  <li key={w} className="flex gap-3 text-[17px] leading-[26px] text-label"><span aria-hidden className="mt-[11px] h-1.5 w-1.5 flex-none rounded-full bg-label-3" />{w}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {c.alternatives ? (
            <section className="flex flex-col gap-5" aria-labelledby="alts-h">
              <h2 id="alts-h" className={h2}>The alternatives</h2>
              <ol className="flex flex-col gap-4">
                {c.alternatives.map((a, i) => (
                  <li key={a.name} className="flex flex-col gap-2 rounded-3xl bg-bg-2 p-6">
                    <h3 className="text-[21px] font-semibold text-label">{i + 1}. {a.name}</h3>
                    <p className="text-[15px] font-medium text-brand-text">Best for: {a.bestFor}</p>
                    <p className="text-[17px] leading-[26px] text-label">{a.body}</p>
                    <p className="text-[15px] text-label-2">Price ({CHECKED}): {a.price}</p>
                  </li>
                ))}
              </ol>
            </section>
          ) : null}

          {c.table ? (
            <section className="flex flex-col gap-5" aria-labelledby="table-h">
              <h2 id="table-h" className={h2}>Side by side</h2>
              <div className="overflow-x-auto rounded-3xl border border-separator">
                <table className="w-full min-w-[520px] text-left text-[15px] leading-[22px]">
                  <thead className="bg-bg-2 text-label">
                    <tr>
                      <th scope="col" className="p-4 font-semibold">Feature</th>
                      <th scope="col" className="p-4 font-semibold">Hushku</th>
                      <th scope="col" className="p-4 font-semibold">{c.rival}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {c.table.map(([f, a, b]) => (
                      <tr key={f} className="border-t border-separator">
                        <th scope="row" className="p-4 font-medium text-label">{f}</th>
                        <td className="p-4 text-label-2">{a}</td>
                        <td className="p-4 text-label-2">{b}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ) : null}

          {c.verdict ? (
            <section className="flex flex-col gap-4" aria-labelledby="verdict-h">
              <h2 id="verdict-h" className={h2}>Which should you choose?</h2>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex flex-col gap-2 rounded-3xl bg-bg-2 p-6">
                  <p className="text-[17px] font-semibold text-label">Choose {c.rival} if</p>
                  <p className="flex gap-2 text-[17px] leading-[26px] text-label"><Check size={20} className="mt-0.5 flex-none text-success" aria-hidden />{c.verdict.pickRival}</p>
                </div>
                <div className="flex flex-col gap-2 rounded-3xl bg-bg-2 p-6">
                  <p className="text-[17px] font-semibold text-label">Choose Hushku if</p>
                  <p className="flex gap-2 text-[17px] leading-[26px] text-label"><Check size={20} className="mt-0.5 flex-none text-success" aria-hidden />{c.verdict.pickHushku}</p>
                </div>
              </div>
            </section>
          ) : null}

          <AppCta eyebrow="Our app · launching soon" title={c.hushku.title} body={c.hushku.body} link={c.hushku.link} source={`compare:${c.slug}`} />
        </div>
      </Section>

      {c.faqs.length ? <FaqAccordion faqs={c.faqs} title="Questions." /> : null}

      {related.length ? (
        <Section>
          <div className="mx-auto flex max-w-[880px] flex-col gap-4">
            <h2 className={h2}>More comparisons</h2>
            <ul className="flex flex-col border-t border-separator">
              {related.map((r) => (
                <li key={r.slug} className="border-b border-separator">
                  <Link href={`/compare/${r.slug}`} className="group flex min-h-14 items-center gap-3 py-3 text-[17px] text-label">
                    <span className="flex-1 group-hover:underline underline-offset-[3px]">{r.title}</span>
                    <ChevronRight size={18} className="flex-none text-label-3" aria-hidden />
                  </Link>
                </li>
              ))}
              <li className="border-b border-separator">
                <Link href="/resources/best-family-pet-care-apps" className="group flex min-h-14 items-center gap-3 py-3 text-[17px] text-label">
                  <span className="flex-1 group-hover:underline underline-offset-[3px]">Best family pet care apps</span>
                  <ChevronRight size={18} className="flex-none text-label-3" aria-hidden />
                </Link>
              </li>
            </ul>
          </div>
        </Section>
      ) : null}
    </div>
  );
}
