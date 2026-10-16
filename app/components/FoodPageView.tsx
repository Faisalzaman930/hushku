import Link from "next/link";
import { Check, ChevronRight, CircleAlert, Minus, X } from "lucide-react";
import ArticleShell, { ArticleSection, Prose } from "./ArticleShell";
import { addExtras } from "../data/article-extras";
import { foodsFor, POISON_STEPS, SPECIES_WORD, VERDICT_LABEL, GUT_GUIDES, type FoodPage, type Species, type Verdict } from "../data/foods";

export const FOODS_UPDATED = "October 2026";
export const FOODS_UPDATED_ISO = "2026-10-16";
const BASE = "https://hushku.app";

export const VERDICT_STYLE: Record<Verdict, { box: string; text: string; Icon: typeof Check }> = {
  no: { box: "bg-danger-tint", text: "text-danger", Icon: X },
  avoid: { box: "bg-warning-tint", text: "text-label", Icon: CircleAlert },
  limit: { box: "bg-info-tint", text: "text-label", Icon: Minus },
  yes: { box: "bg-success-tint", text: "text-label", Icon: Check },
};

export const foodPath = (f: { species: Species; slug: string }) => `/can-${f.species}-eat/${f.slug}`;
export const foodKey = (f: { species: Species; slug: string }) => `can-${f.species}-eat-${f.slug}`;
export const foodH1 = (f: FoodPage) => `Can ${SPECIES_WORD[f.species].Title} Eat ${f.food.replace(/\b\w/g, (c) => c.toUpperCase())}?`;

/** Search title: the question plus the verdict, kept within 60 characters. */
export function foodTitle(f: FoodPage) {
  const q = foodH1(f);
  const tail: Record<Verdict, string> = { no: "Why They're Toxic", avoid: "Risks and Safer Options", limit: "How Much Is Safe", yes: "How to Feed It Safely" };
  const full = `${q} ${tail[f.verdict]}`;
  return full.length <= 60 ? full : q;
}

export function foodDescription(f: FoodPage) {
  const first = f.answer.split(/(?<=\.)\s/)[0];
  return `${first} What to know, ${f.verdict === "no" ? "the signs of poisoning and what to do" : "how to offer it safely"}, from vet sources.`;
}

export default function FoodPageView({ food }: { food: FoodPage }) {
  const sp = SPECIES_WORD[food.species];
  const key = foodKey(food);
  addExtras({ [key]: { topic: "nutrition", sources: food.sources, tools: food.tools, updated: FOODS_UPDATED } });
  const style = VERDICT_STYLE[food.verdict];
  const others = foodsFor(food.species).filter((f) => f.slug !== food.slug);
  const sameVerdict = others.filter((f) => f.verdict === food.verdict).slice(0, 6);
  const toxic = food.verdict === "no";
  const plural = food.food.endsWith("s") || food.food.includes(" and ");
  const toc = [
    { id: "why", label: toxic ? `Why ${food.food} ${plural ? "are" : "is"} dangerous for ${sp.many}` : "What you need to know" },
    ...(food.safely?.length ? [{ id: "safely", label: "How to offer it safely" }] : []),
    ...(toxic || food.ifAte?.length ? [{ id: "ate", label: `If your ${sp.one} ate some` }] : []),
    ...(food.signs?.length ? [{ id: "signs", label: "Signs to watch for" }] : []),
    { id: "more", label: `Other foods for ${sp.many}` },
  ];
  const url = `${BASE}${foodPath(food)}`;
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "MedicalWebPage",
      headline: foodH1(food),
      description: foodDescription(food),
      url,
      datePublished: FOODS_UPDATED_ISO,
      dateModified: FOODS_UPDATED_ISO,
      lastReviewed: FOODS_UPDATED_ISO,
      author: { "@type": "Organization", name: "Hushku editorial team", url: `${BASE}/about/editorial` },
      publisher: { "@type": "Organization", name: "Hushku", url: BASE },
      citation: food.sources.map((s) => s.url),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Guides", item: `${BASE}/resources` },
        { "@type": "ListItem", position: 2, name: `Can ${sp.many} eat it?`, item: `${BASE}/can-${food.species}-eat` },
        { "@type": "ListItem", position: 3, name: foodH1(food), item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [{ q: foodH1(food), a: food.answer }, ...food.faqs].map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ArticleShell
        slug={key}
        kind={`Can ${sp.many} eat it?`}
        h1={foodH1(food)}
        updated={FOODS_UPDATED}
        toc={toc}
        faqs={food.faqs}
        relatedSlugs={[...(food.related ?? []), ...GUT_GUIDES[food.species]]}
        medical
        crumbs={[{ href: "/resources", label: "Guides" }, { href: `/can-${food.species}-eat`, label: `Can ${sp.many} eat it?` }]}
        banner={
          <section aria-label="Verdict" className={`flex flex-col gap-3 rounded-3xl p-6 md:p-8 ${style.box}`}>
            <p className={`flex items-center gap-2 text-[22px] font-semibold ${style.text}`}>
              <style.Icon size={24} aria-hidden /> {VERDICT_LABEL[food.verdict]}
            </p>
            <p className="text-[19px] leading-[28px] font-medium text-label">{food.answer}</p>
          </section>
        }
      >
        <ArticleSection id="why" title={toc[0].label}>
          <Prose text={food.why} />
        </ArticleSection>

        {food.safely?.length ? (
          <ArticleSection id="safely" title="How to offer it safely">
            <ul className="article-body">{food.safely.map((s) => <li key={s}>{s}</li>)}</ul>
            <p className="text-[15px] leading-[22px] text-label-2">
              Treats, including human food, should make up no more than about 10% of your {sp.one}&apos;s daily calories. Our <Link href="/tools/calorie-calculator" className="font-medium text-brand-text hover:underline underline-offset-[3px]">calorie calculator</Link> shows your {sp.one}&apos;s daily needs. Introduce any new food slowly and stop if it causes vomiting or loose stools.
            </p>
          </ArticleSection>
        ) : null}

        {toxic || food.ifAte?.length ? (
          <ArticleSection id="ate" title={`If your ${sp.one} ate some`}>
            <ul className="article-body">
              {[...(toxic ? POISON_STEPS : []), ...(food.ifAte ?? [])].map((s) => <li key={s}>{s}</li>)}
            </ul>
          </ArticleSection>
        ) : null}

        {food.signs?.length ? (
          <ArticleSection id="signs" title="Signs to watch for">
            <ul className="article-body">{food.signs.map((s) => <li key={s}>{s}</li>)}</ul>
            <p className="text-[15px] leading-[22px] text-label-2">Collapse, seizures, difficulty breathing or pale gums are emergencies: go to the nearest vet straight away.</p>
          </ArticleSection>
        ) : null}

        <ArticleSection id="more" title={`Other foods for ${sp.many}`}>
          {sameVerdict.length ? (
            <div className="flex flex-col gap-2">
              <p className="text-[15px] font-semibold text-label-2">Also {VERDICT_LABEL[food.verdict].toLowerCase()}</p>
              <ul className="flex flex-wrap gap-2">
                {sameVerdict.map((f) => (
                  <li key={f.slug}><Link href={foodPath(f)} className="inline-flex min-h-11 items-center rounded-full bg-surface px-4 text-[15px] font-medium text-label hover:bg-separator">{f.food.replace(/^\w/, (c) => c.toUpperCase())}</Link></li>
                ))}
              </ul>
            </div>
          ) : null}
          <Link href={`/can-${food.species}-eat`} className="group inline-flex items-center gap-1 text-[17px] font-medium text-brand-text hover:underline underline-offset-[3px]">
            See all {foodsFor(food.species).length} foods: what {sp.many} can and can&apos;t eat <ChevronRight size={18} aria-hidden />
          </Link>
        </ArticleSection>
      </ArticleShell>
    </>
  );
}
