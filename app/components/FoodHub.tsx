import Link from "next/link";
import { ChevronRight } from "lucide-react";
import AppCta from "./AppCta";
import { foodsFor, POISON_STEPS, SPECIES_WORD, VERDICT_LABEL, type Species, type Verdict } from "../data/foods";
import { foodH1, foodPath, VERDICT_STYLE } from "./FoodPageView";

const ORDER: Verdict[] = ["no", "avoid", "limit", "yes"];
const HEAD: Record<Verdict, (many: string) => string> = {
  no: (m) => `Toxic to ${m}: never feed`,
  avoid: () => "Best avoided",
  limit: () => "Safe in moderation",
  yes: (m) => `Safe for ${m}`,
};

export const hubTitle = (s: Species) => (s === "dogs" ? "What Can Dogs Eat? Safe and Toxic Human Foods" : "What Can Cats Eat? Safe and Toxic Human Foods");
export const hubDescription = (s: Species) =>
  `Which human foods are safe for ${s} and which are toxic, from grapes and chocolate to cheese and ${s === "dogs" ? "peanut butter" : "tuna"}. Clear answers checked against vet sources.`;

const firstSentence = (t: string) => t.split(/(?<=\.)\s/)[0];

export default function FoodHub({ species }: { species: Species }) {
  const sp = SPECIES_WORD[species];
  const other: Species = species === "dogs" ? "cats" : "dogs";
  const all = foodsFor(species);
  const url = `https://hushku.app/can-${species}-eat`;
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: hubTitle(species),
      url,
      mainEntity: { "@type": "ItemList", numberOfItems: all.length, itemListElement: all.map((f, i) => ({ "@type": "ListItem", position: i + 1, url: `https://hushku.app${foodPath(f)}`, name: foodH1(f) })) },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Guides", item: "https://hushku.app/resources" },
        { "@type": "ListItem", position: 2, name: `Can ${sp.many} eat it?`, item: url },
      ],
    },
  ];

  return (
    <div className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header className="px-4 pt-10 pb-8 md:px-8 md:pt-16">
        <div className="mx-auto flex max-w-[1080px] flex-col gap-5">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-[13px] text-label-2">
              <li><Link href="/resources" className="hover:text-label hover:underline underline-offset-[3px]">Guides</Link></li>
              <ChevronRight size={14} className="text-label-3" aria-hidden />
              <li aria-current="page">Can {sp.many} eat it?</li>
            </ol>
          </nav>
          <h1 className="max-w-[880px] text-[34px] leading-[1.1] font-semibold tracking-[-0.02em] text-balance text-label md:text-[52px] md:leading-[1.05]">What can {sp.many} eat?</h1>
          <p className="max-w-[880px] text-[19px] leading-[29px] text-label-2 md:text-[21px] md:leading-[31px]">
            Clear answers for {all.length} human foods, from the ones that are toxic to {sp.many} to the ones that make good treats. Each page explains why, how to offer it safely and what to do if your {sp.one} ate something it shouldn&apos;t. Checked against ASPCA, AKC, FDA, Merck and Cornell guidance.
          </p>
          <ul className="flex flex-wrap gap-2">
            {ORDER.filter((v) => all.some((f) => f.verdict === v)).map((v) => (
              <li key={v}><a href={`#${v}`} className="inline-flex min-h-11 items-center rounded-full bg-surface px-4 text-[15px] font-medium text-label hover:bg-separator">{HEAD[v](sp.many)}</a></li>
            ))}
          </ul>
        </div>
      </header>

      <div className="px-4 pb-16 md:px-8">
        <div className="mx-auto flex max-w-[1080px] flex-col gap-14">
          <section aria-labelledby="ate-h" className="rounded-3xl bg-danger-tint p-6 md:p-8">
            <h2 id="ate-h" className="text-[22px] font-semibold text-label">Has your {sp.one} eaten something toxic?</h2>
            <ul className="article-body mt-3">{POISON_STEPS.map((s) => <li key={s}>{s}</li>)}</ul>
            <p className="mt-3 text-[15px] text-label-2">
              Estimate the risk with our <Link href="/tools/chocolate-toxicity-calculator" className="font-medium text-brand-text hover:underline underline-offset-[3px]">chocolate</Link>, <Link href="/tools/xylitol-toxicity-calculator" className="font-medium text-brand-text hover:underline underline-offset-[3px]">xylitol</Link> and <Link href="/tools/onion-garlic-toxicity-calculator" className="font-medium text-brand-text hover:underline underline-offset-[3px]">onion and garlic</Link> calculators, or check any food in the <Link href="/tools/toxic-food" className="font-medium text-brand-text hover:underline underline-offset-[3px]">toxic food checker</Link>.
            </p>
          </section>

          {ORDER.map((v) => {
            const list = all.filter((f) => f.verdict === v);
            if (!list.length) return null;
            const st = VERDICT_STYLE[v];
            return (
              <section key={v} id={v} aria-labelledby={`${v}-h`} className="flex scroll-mt-24 flex-col gap-4">
                <h2 id={`${v}-h`} className="flex items-center gap-3 text-[26px] font-semibold text-label">
                  <span className={`flex h-9 w-9 items-center justify-center rounded-full ${st.box}`}><st.Icon size={20} className={st.text} aria-hidden /></span>
                  {HEAD[v](sp.many)}
                </h2>
                <ul className="grid gap-x-8 border-t border-separator md:grid-cols-2">
                  {list.map((f) => (
                    <li key={f.slug} className="border-b border-separator">
                      <Link href={foodPath(f)} className="group flex min-h-16 items-center gap-3 py-3">
                        <span className="flex-1">
                          <span className="block text-[17px] font-medium text-label group-hover:underline underline-offset-[3px]">{foodH1(f)}</span>
                          <span className="block text-[15px] leading-[22px] text-label-2">{firstSentence(f.answer)}</span>
                        </span>
                        <ChevronRight size={18} className="flex-none text-label-3" aria-hidden />
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}

          <p className="text-[17px] text-label-2">
            Also see: <Link href={`/can-${other}-eat`} className="font-medium text-brand-text hover:underline underline-offset-[3px]">what {other} can eat</Link>, <Link href="/resources/complete-guide-to-pet-nutrition" className="font-medium text-brand-text hover:underline underline-offset-[3px]">our pet nutrition guide</Link> and <Link href="/resources/pet-first-aid-complete-guide" className="font-medium text-brand-text hover:underline underline-offset-[3px]">pet first aid</Link>.
          </p>
          <AppCta eyebrow="Hushku is launching soon" title="Keep everyone on the same page about food" body={`Share feeding routines and a "never feed" list with everyone who looks after your ${sp.one} in Hushku, so treats aren't doubled up and risky foods stay off the menu.`} source={`foods:${species}`} link={{ href: "/care-team", label: "See the Care Team" }} />
          <p className="text-[13px] text-label-2">General information, not veterinary advice. Every pet is different: if your {sp.one} has a health condition, check with your vet before adding new foods.</p>
        </div>
      </div>
    </div>
  );
}
