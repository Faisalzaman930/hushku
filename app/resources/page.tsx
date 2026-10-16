import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { articles } from "../data/articles";
import { guides } from "../data/guides";
import { howToArticles } from "../data/howto";
import { symptomArticles } from "../data/symptom-articles";
import { breedArticles } from "../data/breed-articles";
import { definitionArticles } from "../data/definition-articles";
import { pillarPages } from "../data/pillars";
import { ARTICLE_TOPICS, topicFor, type TopicId } from "../data/article-extras";
import AppCta from "../components/AppCta";
import { TOOLS } from "../data/tools";
import { VACCINE_PAGES } from "../data/vaccine-schedules";
import { FOODS } from "../data/foods";
import GuideSearch, { type SearchItem } from "./GuideSearch";

type Card = { slug: string; title: string; desc: string; kind: string };

const all: Card[] = [
  ...pillarPages.map((a) => ({ slug: a.slug, title: a.shortTitle, desc: a.seoDescription, kind: "Complete guide" })),
  ...guides.map((a) => ({ slug: a.slug, title: a.shortTitle, desc: a.seoDescription, kind: "In-depth guide" })),
  ...symptomArticles.map((a) => ({ slug: a.slug, title: a.shortTitle, desc: a.seoDescription, kind: "Symptom guide" })),
  ...definitionArticles.map((a) => ({ slug: a.slug, title: a.shortTitle, desc: a.seoDescription, kind: "Explainer" })),
  ...howToArticles.map((a) => ({ slug: a.slug, title: a.shortTitle, desc: a.seoDescription, kind: "How-to" })),
  ...breedArticles.map((a) => ({ slug: a.slug, title: a.shortTitle, desc: a.seoDescription, kind: "Breed guide" })),
  ...articles.map((a) => ({ slug: a.slug, title: a.shortTitle, desc: a.seoDescription, kind: "App guide" })),
  ...VACCINE_PAGES.map((v) => ({ slug: v.slug, title: v.shortTitle, desc: v.seoDescription, kind: "Vaccine schedule" })),
];
/** Section pages outside /resources that belong on the hub (they link with an absolute path). */
const FOOD_HUBS = [
  { href: "/can-dogs-eat", title: "What Can Dogs Eat?", desc: `Safe and toxic human foods for dogs: ${FOODS.filter((f) => f.species === "dogs").length} foods explained.`, kind: "Food guide" },
  { href: "/can-cats-eat", title: "What Can Cats Eat?", desc: `Safe and toxic human foods for cats: ${FOODS.filter((f) => f.species === "cats").length} foods explained.`, kind: "Food guide" },
];
const unique = Array.from(new Map(all.map((c) => [c.slug, c])).values());

/** Searchable text for each guide: SEO title, H1, tags and description (searched, not shown). */
type Src = { slug: string; title: string; seoTitle?: string; tags?: string[]; seoDescription: string };
const extra = new Map<string, string>();
for (const a of [...pillarPages, ...guides, ...symptomArticles, ...definitionArticles, ...howToArticles, ...breedArticles, ...articles, ...VACCINE_PAGES.map((v) => ({ ...v, tags: ["vaccines", "shots", "vaccination", "booster"] }))] as Src[]) {
  extra.set(a.slug, [a.seoTitle, a.title, ...(a.tags ?? []), a.seoDescription].filter(Boolean).join(" "));
}
const searchItems: SearchItem[] = [
  ...unique.map((c) => ({ href: `/resources/${c.slug}`, title: c.title, kind: c.kind, topic: ARTICLE_TOPICS[topicFor(c.slug)], text: extra.get(c.slug) ?? c.desc })),
  ...TOOLS.map((t) => ({ href: `/tools/${t.slug}`, title: t.name, kind: "Free tool", topic: t.category, text: `${t.title} ${t.h1} ${t.description}` })),
  ...FOOD_HUBS.map((h) => ({ href: h.href, title: h.title, kind: h.kind, topic: ARTICLE_TOPICS.nutrition, text: `${h.desc} human food safe toxic` })),
  ...FOODS.map((f) => ({ href: `/can-${f.species}-eat/${f.slug}`, title: `Can ${f.species} eat ${f.food}?`, kind: "Food guide", topic: ARTICLE_TOPICS.nutrition, text: `${f.food} ${f.species === "dogs" ? "dog" : "cat"} ${f.answer}` })),
];

const ORDER: TopicId[] = ["health", "cats", "training", "puppies", "nutrition", "everyday", "adoption", "breeds", "apps"];
const INTRO: Record<TopicId, string> = {
  health: "Symptoms, when to see a vet, common conditions and prevention.",
  cats: "Cat health, behaviour, litter, feeding and kittens.",
  training: "Reward-based training and solving behaviour problems.",
  puppies: "The first year with a puppy, from socialisation to biting.",
  nutrition: "What and how much to feed, and how to read a label.",
  everyday: "Grooming, teeth, fleas, medicine and sharing care at home.",
  adoption: "Adopting, fostering and rehoming responsibly.",
  breeds: "In-depth guides to popular breeds.",
  apps: "Honest comparisons of pet apps.",
};
const START = ["complete-guide-to-pet-health", "complete-guide-to-puppy-care", "complete-guide-to-kitten-care", "complete-guide-to-dog-training", "complete-guide-to-pet-nutrition", "pet-first-aid-complete-guide"];

export default function ResourcesPage() {
  const byTopic = new Map<TopicId, Card[]>();
  for (const c of unique) {
    const t = topicFor(c.slug);
    byTopic.set(t, [...(byTopic.get(t) ?? []), c]);
  }
  const start = START.map((s) => unique.find((c) => c.slug === s)).filter((c): c is Card => !!c);
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Pet care guides",
    url: "https://hushku.app/resources",
    mainEntity: { "@type": "ItemList", numberOfItems: unique.length, itemListElement: unique.map((c, i) => ({ "@type": "ListItem", position: i + 1, url: `https://hushku.app/resources/${c.slug}`, name: c.title })) },
  };

  return (
    <div className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header className="px-4 pt-10 pb-6 md:px-8 md:pt-16">
        <div className="mx-auto flex max-w-[1080px] flex-col gap-5">
          <h1 className="text-[34px] leading-[1.1] font-semibold tracking-[-0.02em] text-balance text-label md:text-[56px] md:leading-[1.05]">Pet care guides</h1>
          <p className="max-w-[880px] text-[19px] leading-[29px] text-label-2 md:text-[21px] md:leading-[31px]">
            {unique.length} practical guides for dog and cat owners. Each starts with a short answer, lists its sources and tells you clearly when to call a vet. <Link href="/about/editorial" className="font-medium text-brand-text hover:underline underline-offset-[3px]">How we write and check them</Link>.
          </p>
        </div>
      </header>

      <div className="px-4 pb-16 md:px-8">
        <div className="mx-auto flex max-w-[1080px] flex-col gap-10">
          <GuideSearch items={searchItems}>
              <nav aria-label="Topics" className="-mt-6">
                <ul className="flex flex-wrap gap-2">
                  {ORDER.filter((t) => byTopic.get(t)?.length).map((t) => (
                    <li key={t}><a href={`#${t}`} className="inline-flex min-h-11 items-center rounded-full bg-surface px-4 text-[15px] font-medium text-label hover:bg-separator">{ARTICLE_TOPICS[t]}</a></li>
                  ))}
                </ul>
              </nav>
          <section aria-labelledby="start-h" className="flex flex-col gap-4">
            <h2 id="start-h" className="text-[26px] font-semibold text-label">Start here</h2>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {start.map((c) => (
                <li key={c.slug}>
                  <Link href={`/resources/${c.slug}`} className="group flex h-full flex-col gap-2 rounded-3xl bg-brand-tint p-5 hover:bg-[#FBDCE3]">
                    <span className="text-[13px] font-semibold text-brand-text">{c.kind}</span>
                    <span className="text-[19px] leading-[24px] font-semibold text-label group-hover:underline underline-offset-[3px]">{c.title}</span>
                    <span className="text-[15px] leading-[22px] text-label-2">{c.desc.split(". ")[0].replace(/\.$/, "")}.</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {ORDER.filter((t) => byTopic.get(t)?.length).map((t) => (
            <section key={t} id={t} aria-labelledby={`t-${t}`} className="flex scroll-mt-24 flex-col gap-4">
              <div className="flex flex-col gap-1">
                <h2 id={`t-${t}`} className="text-[26px] font-semibold text-label">{ARTICLE_TOPICS[t]}</h2>
                <p className="text-[17px] text-label-2">{INTRO[t]}</p>
              </div>
              <ul className="grid gap-x-8 border-t border-separator md:grid-cols-2">
                {t === "nutrition" ? FOOD_HUBS.map((h) => (
                  <li key={h.href} className="border-b border-separator">
                    <Link href={h.href} className="group flex min-h-16 items-center gap-3 py-3">
                      <span className="flex-1">
                        <span className="block text-[13px] text-label-2">{h.kind}</span>
                        <span className="text-[17px] font-medium text-label group-hover:underline underline-offset-[3px]">{h.title}</span>
                      </span>
                      <ChevronRight size={18} className="flex-none text-label-3" aria-hidden />
                    </Link>
                  </li>
                )) : null}
                {byTopic.get(t)!.map((c) => (
                  <li key={c.slug} className="border-b border-separator">
                    <Link href={`/resources/${c.slug}`} className="group flex min-h-16 items-center gap-3 py-3">
                      <span className="flex-1">
                        <span className="block text-[13px] text-label-2">{c.kind}</span>
                        <span className="text-[17px] font-medium text-label group-hover:underline underline-offset-[3px]">{c.title}</span>
                      </span>
                      <ChevronRight size={18} className="flex-none text-label-3" aria-hidden />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
          </GuideSearch>

          <AppCta eyebrow="Hushku is launching soon" title="Put the advice into practice" body="Keep reminders, health records and routines for each pet in Hushku, and share them with everyone who helps care for them." source="guide:hub" link={{ href: "/health", label: "See health and care" }} />
          <p className="text-[13px] text-label-2">Guides are general information, not veterinary advice. If your pet seems unwell, call your vet.</p>
        </div>
      </div>
    </div>
  );
}
