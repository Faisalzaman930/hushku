import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import FaqAccordion from "../../../components/FaqAccordion";
import { Section, SectionHeader } from "../../../components/ui";
import { COMPARISONS, comparisonsFor, getComparison, type Comparison } from "../../../data/breeds/comparisons";
import type { BreedScores, CatScores } from "../../../data/breeds/types";
import { metaDesc, shortTitle } from "../../../lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return COMPARISONS.map((c) => ({ pair: c.slug }));
}

/* ── Traits: label, how to phrase "more of it", and whether more is better ──────────── */
type Trait<K extends string> = { key: K; label: string; more: string; less: string; good: "up" | "down" | "neutral" };

const DOG_TRAITS: Trait<keyof BreedScores>[] = [
  { key: "energy", label: "Energy", more: "has more energy", less: "is calmer", good: "neutral" },
  { key: "exerciseNeeds", label: "Exercise needs", more: "needs more exercise", less: "needs less exercise", good: "neutral" },
  { key: "easyToTrain", label: "Easy to train", more: "is easier to train", less: "is harder to train", good: "up" },
  { key: "intelligence", label: "Intelligence", more: "is quicker to learn", less: "is slower to learn", good: "up" },
  { key: "kidFriendly", label: "Good with children", more: "is better with children", less: "is less suited to young children", good: "up" },
  { key: "dogFriendly", label: "Good with other dogs", more: "gets on better with other dogs", less: "is choosier about other dogs", good: "up" },
  { key: "strangerFriendly", label: "Friendly with strangers", more: "is friendlier with strangers", less: "is more reserved with strangers", good: "neutral" },
  { key: "shedding", label: "Shedding", more: "sheds more", less: "sheds less", good: "down" },
  { key: "easyToGroom", label: "Easy to groom", more: "is easier to groom", less: "needs more grooming", good: "up" },
  { key: "barkiness", label: "Barking", more: "barks more", less: "barks less", good: "down" },
  { key: "apartmentFriendly", label: "Apartment living", more: "copes better in an apartment", less: "needs more space", good: "up" },
  { key: "goodForNovice", label: "First-time owners", more: "suits first-time owners better", less: "suits experienced owners better", good: "up" },
  { key: "toleratesAlone", label: "Copes alone", more: "copes better when left alone", less: "struggles more when left alone", good: "up" },
  { key: "drooling", label: "Drooling", more: "drools more", less: "drools less", good: "down" },
  { key: "health", label: "General health", more: "tends to have fewer health problems", less: "tends to have more health problems", good: "up" },
];

const CAT_TRAITS: Trait<keyof CatScores>[] = [
  { key: "affectionLevel", label: "Affection", more: "is more affectionate", less: "is more independent", good: "neutral" },
  { key: "energyLevel", label: "Energy", more: "has more energy", less: "is calmer", good: "neutral" },
  { key: "childFriendly", label: "Good with children", more: "is better with children", less: "is less suited to young children", good: "up" },
  { key: "dogFriendly", label: "Good with dogs", more: "gets on better with dogs", less: "is warier of dogs", good: "up" },
  { key: "grooming", label: "Grooming needs", more: "needs more grooming", less: "needs less grooming", good: "down" },
  { key: "sheddingLevel", label: "Shedding", more: "sheds more", less: "sheds less", good: "down" },
  { key: "vocalisation", label: "Vocal", more: "is more vocal", less: "is quieter", good: "neutral" },
  { key: "socialNeeds", label: "Needs company", more: "needs more company", less: "is happier alone", good: "neutral" },
  { key: "intelligence", label: "Intelligence", more: "is quicker to learn", less: "is slower to learn", good: "up" },
  { key: "healthIssues", label: "Health issues", more: "tends to have more health issues", less: "tends to have fewer health issues", good: "down" },
];

function traits(c: Comparison) {
  const list = (c.animal === "dogs" ? DOG_TRAITS : CAT_TRAITS) as Trait<string>[];
  const sa = c.a.scores as unknown as Record<string, number | null>;
  const sb = c.b.scores as unknown as Record<string, number | null>;
  return list.map((t) => ({ ...t, a: sa[t.key] ?? null, b: sb[t.key] ?? null }));
}

/** The biggest differences first. */
function differences(c: Comparison) {
  return traits(c)
    .filter((t) => t.a !== null && t.b !== null && t.a !== t.b)
    .sort((x, y) => Math.abs((y.a ?? 0) - (y.b ?? 0)) - Math.abs((x.a ?? 0) - (x.b ?? 0)));
}

const num = (s: string | null | undefined) => {
  const m = s?.match(/(\d+(?:\.\d+)?)(?:\D+(\d+(?:\.\d+)?))?/);
  if (!m) return null;
  return m[2] ? (parseFloat(m[1]) + parseFloat(m[2])) / 2 : parseFloat(m[1]);
};

function factsSentence(c: Comparison) {
  const [a, b] = [c.a, c.b];
  const out: string[] = [];
  const wa = c.animal === "dogs" ? (a as { weightKg: number | null }).weightKg : null;
  const wb = c.animal === "dogs" ? (b as { weightKg: number | null }).weightKg : null;
  if (wa && wb && Math.abs(wa - wb) >= 3) out.push(`The ${wa > wb ? a.name : b.name} is the bigger breed, about ${Math.round(Math.abs(wa - wb))} kg heavier on average.`);
  const la = num(a.lifeSpan);
  const lb = num(b.lifeSpan);
  if (la && lb && Math.abs(la - lb) >= 1) out.push(`The ${la > lb ? a.name : b.name} tends to live about ${Math.round(Math.abs(la - lb))} year${Math.round(Math.abs(la - lb)) === 1 ? "" : "s"} longer.`);
  return out;
}

function choose(c: Comparison, which: "a" | "b") {
  return differences(c)
    .map((t) => {
      const mine = which === "a" ? t.a! : t.b!;
      const theirs = which === "a" ? t.b! : t.a!;
      return { t, higher: mine > theirs };
    })
    .filter(({ t, higher }) => t.good === "neutral" || (t.good === "up" ? higher : !higher))
    .slice(0, 4)
    .map(({ t, higher }) => {
      const phrase = higher ? t.more : t.less;
      const wants: Record<string, string> = {
        "has more energy": "you want an active, playful companion",
        "is calmer": "you’d like a calmer pet",
        "needs more exercise": "you’re out walking, running or hiking most days",
        "needs less exercise": "you have less time for long walks",
        "is more affectionate": "you want a cuddly cat",
        "is more independent": "you’d like a more independent cat",
        "is more vocal": "you enjoy a chatty cat",
        "is quieter": "you prefer a quiet cat",
        "needs more company": "someone is home most of the day",
        "is happier alone": "you’re out for part of the day",
        "is friendlier with strangers": "you have lots of visitors",
        "is more reserved with strangers": "you want a more watchful dog",
      };
      return wants[phrase] ? `${wants[phrase]} (it ${phrase})` : `you want a ${c.animal === "dogs" ? "dog" : "cat"} that ${phrase}`;
    })
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1));
}

function Dots({ v }: { v: number | null }) {
  if (v === null) return <span className="text-label-3">–</span>;
  return (
    <span className="inline-flex items-center gap-1" aria-label={`${v} out of 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} aria-hidden className={`h-2 w-2 rounded-full ${i <= v ? "bg-brand" : "bg-separator"}`} />
      ))}
    </span>
  );
}

function rowsFor(c: Comparison): { label: string; a: React.ReactNode; b: React.ReactNode }[] {
  if (c.animal === "dogs") {
    const [a, b] = [c.a, c.b];
    return [
      { label: "Group", a: a.group ?? "–", b: b.group ?? "–" },
      { label: "Size", a: a.size ?? "–", b: b.size ?? "–" },
      { label: "Height", a: a.height ?? "–", b: b.height ?? "–" },
      { label: "Weight", a: a.weight ?? "–", b: b.weight ?? "–" },
      { label: "Life span", a: a.lifeSpan ?? "–", b: b.lifeSpan ?? "–" },
    ];
  }
  const [a, b] = [c.a, c.b];
  const yn = (v: boolean | null) => (v === null ? "–" : v ? "Yes" : "No");
  return [
    { label: "Origin", a: a.origin ?? "–", b: b.origin ?? "–" },
    { label: "Weight", a: a.weight ?? "–", b: b.weight ?? "–" },
    { label: "Life span", a: a.lifeSpan ? `${a.lifeSpan} years` : "–", b: b.lifeSpan ? `${b.lifeSpan} years` : "–" },
    { label: "Lap cat", a: yn(a.lap), b: yn(b.lap) },
    { label: "Hypoallergenic", a: yn(a.hypoallergenic), b: yn(b.hypoallergenic) },
  ];
}

function faqsFor(c: Comparison) {
  const t = traits(c);
  const pick = (key: string, phrase: (w: string, l: string) => string, same: string) => {
    const x = t.find((y) => y.key === key);
    if (!x || x.a === null || x.b === null) return null;
    if (x.a === x.b) return same;
    const better = x.good === "down" ? (x.a < x.b ? c.a.name : c.b.name) : x.a > x.b ? c.a.name : c.b.name;
    const other = better === c.a.name ? c.b.name : c.a.name;
    return phrase(better, other);
  };
  const out: { q: string; a: string }[] = [];
  const facts = factsSentence(c);
  if (facts.length) out.push({ q: `Is the ${c.a.name} or the ${c.b.name} bigger, and which lives longer?`, a: facts.join(" ") + " Individual pets vary, so meet the parents or the pet where you can." });
  const train = pick(c.animal === "dogs" ? "easyToTrain" : "intelligence", (w, l) => `The ${w} is generally easier to train than the ${l}. Short, positive, reward-based sessions work best for both.`, `They’re similarly easy to train. Short, positive, reward-based sessions work best for both.`);
  if (train) out.push({ q: `Which is easier to train, the ${c.a.name} or the ${c.b.name}?`, a: train });
  const kids = pick(c.animal === "dogs" ? "kidFriendly" : "childFriendly", (w, l) => `The ${w} is usually the better fit for families with children, though a well-socialised ${l} can be great too. Always supervise young children with any pet.`, `Both are usually good with children when well socialised. Always supervise young children with any pet.`);
  if (kids) out.push({ q: `Which is better for families, the ${c.a.name} or the ${c.b.name}?`, a: kids });
  const shed = pick(c.animal === "dogs" ? "shedding" : "sheddingLevel", (w, l) => `The ${w} sheds less than the ${l}.`, `They shed about the same amount.`);
  if (shed) out.push({ q: `Which sheds less?`, a: shed + " No breed is completely hair-free; regular brushing helps with both." });
  return out;
}

const titleFor = (c: Comparison) => shortTitle(`${c.a.name} vs ${c.b.name}: Differences and Which to Choose`, 51);

export async function generateMetadata({ params }: { params: Promise<{ pair: string }> }): Promise<Metadata> {
  const { pair } = await params;
  const c = getComparison(pair);
  if (!c) return {};
  const title = titleFor(c);
  const d = differences(c).slice(0, 2).map((t) => `the ${t.a! > t.b! ? c.a.name : c.b.name} ${t.more}`);
  const description = metaDesc(`${c.a.name} vs ${c.b.name}: size, temperament, training, grooming and health side by side${d.length ? `. In short, ${d.join(" and ")}` : ""}.`);
  const url = `https://hushku.app/breeds/compare/${c.slug}`;
  const img = c.a.image ? `https://hushku.app${c.a.image}` : "https://hushku.app/og.png";
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title: `${title} | Hushku`, description, type: "article", url, images: [{ url: img, alt: `${c.a.name} vs ${c.b.name}` }] },
    twitter: { card: "summary_large_image", title: `${title} | Hushku`, description },
  };
}

export default async function ComparePage({ params }: { params: Promise<{ pair: string }> }) {
  const { pair } = await params;
  const c = getComparison(pair);
  if (!c) notFound();

  const kind = c.animal === "dogs" ? "dog" : "cat";
  const diffs = differences(c);
  const facts = factsSentence(c);
  const faqs = faqsFor(c);
  const chooseA = choose(c, "a");
  const chooseB = choose(c, "b");
  const more = [...comparisonsFor(c.animal, c.a.slug), ...comparisonsFor(c.animal, c.b.slug)].filter((x, i, arr) => x.slug !== c.slug && arr.findIndex((y) => y.slug === x.slug) === i).slice(0, 6);
  const url = `https://hushku.app/breeds/compare/${c.slug}`;
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Breeds", item: "https://hushku.app/breeds" },
        { "@type": "ListItem", position: 2, name: "Compare", item: "https://hushku.app/breeds/compare" },
        { "@type": "ListItem", position: 3, name: `${c.a.name} vs ${c.b.name}`, item: url },
      ],
    },
    ...(faqs.length ? [{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }] : []),
  ];

  return (
    <div className="bg-white">
      {schema.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}

      <Section className="!pt-10 md:!pt-16">
        <div className="flex flex-col gap-8">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-label-2">
              <li><Link href="/breeds" className="hover:text-label hover:underline underline-offset-[3px]">Breeds</Link></li>
              <ChevronRight size={14} className="text-label-3" aria-hidden />
              <li><Link href="/breeds/compare" className="hover:text-label hover:underline underline-offset-[3px]">Compare</Link></li>
              <ChevronRight size={14} className="text-label-3" aria-hidden />
              <li aria-current="page" className="font-medium text-label">{c.a.name} vs {c.b.name}</li>
            </ol>
          </nav>
          <SectionHeader
            as="h1"
            size="l"
            align="start"
            eyebrow={`${kind === "dog" ? "Dog" : "Cat"} breed comparison`}
            title={`${c.a.name} vs ${c.b.name}`}
            lead={`How the two compare on size, temperament, training, grooming and health, and which suits your home.${facts.length ? " " + facts.join(" ") : ""}`}
          />
          <div className="grid grid-cols-2 gap-3 md:gap-6">
            {[c.a, c.b].map((br) => (
              <Link key={br.slug} href={`/breeds/${c.animal}/${br.slug}`} className="group flex flex-col gap-3">
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-surface">
                  {br.image ? <Image src={br.image} alt={`${br.name} ${kind}`} fill sizes="(min-width: 768px) 560px, 45vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" /> : null}
                </div>
                <span className="text-[17px] font-semibold text-label group-hover:underline underline-offset-[3px] md:text-[21px]">{br.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <Section alt>
        <div className="flex flex-col gap-10">
          <SectionHeader align="start" eyebrow="At a glance" title="Side by side." />
          <div className="relative w-full overflow-x-auto">
            <table className="w-full min-w-[560px] border-separate border-spacing-0 text-[15px] leading-[22px]">
              <caption className="sr-only">{c.a.name} compared with {c.b.name}</caption>
              <thead>
                <tr>
                  <th scope="col" className="w-[34%] border-b border-separator p-4 text-left"><span className="sr-only">Trait</span></th>
                  <th scope="col" className="border-b border-separator p-4 text-left font-semibold text-label">{c.a.name}</th>
                  <th scope="col" className="border-b border-separator p-4 text-left font-semibold text-label">{c.b.name}</th>
                </tr>
              </thead>
              <tbody>
                {rowsFor(c).map((r) => (
                  <tr key={r.label}>
                    <th scope="row" className="border-b border-separator p-4 text-left font-medium text-label">{r.label}</th>
                    <td className="border-b border-separator p-4 text-label-2">{r.a}</td>
                    <td className="border-b border-separator p-4 text-label-2">{r.b}</td>
                  </tr>
                ))}
                {traits(c).map((t) => (
                  <tr key={t.key}>
                    <th scope="row" className="border-b border-separator p-4 text-left font-medium text-label">{t.label}</th>
                    <td className="border-b border-separator p-4"><Dots v={t.a} /></td>
                    <td className="border-b border-separator p-4"><Dots v={t.b} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[13px] text-label-2">Ratings are 1 to 5, from our breed database. Every pet is an individual.</p>
        </div>
      </Section>

      {diffs.length ? (
        <Section>
          <div className="flex flex-col gap-8">
            <SectionHeader align="start" eyebrow="Key differences" title="Where they differ most." />
            <ul className="grid gap-3 md:grid-cols-2">
              {diffs.slice(0, 6).map((t) => {
                const higher = t.a! > t.b! ? c.a.name : c.b.name;
                const lower = higher === c.a.name ? c.b.name : c.a.name;
                return (
                  <li key={t.key} className="rounded-3xl bg-surface p-5">
                    <p className="text-[13px] font-semibold text-brand-text">{t.label}</p>
                    <p className="mt-1 text-[17px] leading-[24px] text-label">The {higher} {t.more} than the {lower}.</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </Section>
      ) : null}

      <Section alt>
        <div className="flex flex-col gap-8">
          <SectionHeader align="start" eyebrow="Which to choose" title={`${c.a.name} or ${c.b.name}?`} />
          <div className="grid gap-4 md:grid-cols-2">
            {[{ br: c.a, list: chooseA }, { br: c.b, list: chooseB }].map(({ br, list }) => (
              <div key={br.slug} className="flex flex-col gap-3 rounded-3xl bg-white p-6 ring-1 ring-separator">
                <h2 className="text-[21px] leading-[28px] font-semibold text-label">Choose the {br.name} if…</h2>
                {list.length ? (
                  <ul className="flex flex-col gap-2">
                    {list.map((s) => (
                      <li key={s} className="flex gap-3 text-[15px] leading-[22px] text-label-2">
                        <span aria-hidden className="mt-[8px] h-1.5 w-1.5 flex-none rounded-full bg-brand" />
                        {s}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-[15px] text-label-2">They’re very alike; choose on looks, size and the individual pet.</p>
                )}
                <Link href={`/breeds/${c.animal}/${br.slug}`} className="mt-auto inline-flex items-center gap-1 pt-2 text-[15px] font-medium text-brand-text hover:underline underline-offset-[3px]">
                  Full {br.name} guide <ChevronRight size={16} aria-hidden />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {faqs.length ? <FaqAccordion faqs={faqs} title="Questions." /> : null}

      <Section>
        <div className="flex flex-col gap-6">
          <h2 className="text-[26px] leading-[1.2] font-semibold tracking-[-0.01em] text-label">More comparisons</h2>
          <ul className="flex flex-wrap gap-2">
            {more.map((m) => (
              <li key={m.slug}>
                <Link href={`/breeds/compare/${m.slug}`} className="inline-flex min-h-11 items-center rounded-full bg-surface px-4 text-[15px] font-medium text-label transition-colors hover:bg-separator">
                  {m.a.name} vs {m.b.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/tools/breed-compare" className="inline-flex min-h-11 items-center rounded-full px-4 text-[15px] font-medium text-brand-text ring-1 ring-separator hover:bg-surface">
                Compare any two breeds
              </Link>
            </li>
          </ul>
        </div>
      </Section>
    </div>
  );
}
