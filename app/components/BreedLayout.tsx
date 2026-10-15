import Link from "next/link";
import type { BreedArticle } from "../data/breed-articles";
import ArticleShell, { ArticleSection, Prose, slugify } from "./ArticleShell";

const FREQ = { "very common": "bg-danger-tint", common: "bg-warning-tint", occasional: "bg-bg-2", rare: "bg-bg-2" } as const;
const BREED_LINK: Record<string, string> = {
  "french-bulldog-complete-guide": "french-bulldog",
  "golden-retriever-complete-guide": "golden-retriever",
  "labrador-retriever-complete-guide": "labrador-retriever",
  "german-shepherd-complete-guide": "german-shepherd-dog",
  "beagle-complete-guide": "beagle",
};

export default function BreedLayout({ article: a }: { article: BreedArticle }) {
  const o = a.overview;
  const facts: [string, string][] = [["Origin", o.originCountry], ["Size", o.size], ["Weight", o.weight], ["Height", o.height], ["Lifespan", o.lifespan], ["Temperament", o.temperament.join(", ")]];
  const scores: [string, number][] = [["Exercise needs", o.exerciseNeeds], ["Grooming", o.groomingNeeds], ["Training difficulty", o.trainingDifficulty], ["Good with children", o.goodWithKids], ["Good with dogs", o.goodWithDogs], ["Shedding", o.sheddingLevel], ["Suits apartments", o.apartmentFriendly]];
  const toc = [{ id: "at-a-glance", label: "At a glance" }, { id: "overview", label: "Overview" }, ...a.sections.map((s) => ({ id: slugify(s.title), label: s.title })), { id: "health", label: "Health problems" }];
  const breedSlug = BREED_LINK[a.slug];
  return (
    <ArticleShell slug={a.slug} kind="Breed guide" h1={a.title} lead={a.seoDescription} answer={a.quickAnswer} updated={a.lastUpdated} readTime={a.readTime} toc={toc} faqs={a.faqs} relatedSlugs={a.relatedSlugs}>
      <ArticleSection id="at-a-glance" title={`${a.breedName} at a glance`}>
        <div className="grid gap-4 md:grid-cols-2">
          <dl className="flex flex-col divide-y divide-separator rounded-3xl bg-bg-2 px-5">
            {facts.map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 py-3 text-[15px]"><dt className="text-label-2">{k}</dt><dd className="text-right font-medium text-label">{v}</dd></div>
            ))}
          </dl>
          <dl className="flex flex-col gap-2 rounded-3xl bg-bg-2 p-5">
            {scores.map(([k, v]) => (
              <div key={k} className="flex items-center justify-between gap-3 text-[15px]">
                <dt className="text-label-2">{k}</dt>
                <dd className="flex gap-1" aria-label={`${v} out of 5`}>{[1, 2, 3, 4, 5].map((n) => <span key={n} className={`h-2.5 w-5 rounded-full ${n <= v ? "bg-label" : "bg-separator"}`} />)}</dd>
              </div>
            ))}
          </dl>
        </div>
        {breedSlug ? <p className="text-[15px] text-label-2">See photos, ratings and more in our <Link href={`/breeds/dogs/${breedSlug}`} className="font-medium text-brand-text hover:underline underline-offset-[3px]">{a.breedName} breed profile</Link>.</p> : null}
      </ArticleSection>
      <ArticleSection id="overview" title="Overview"><Prose text={a.introduction} /></ArticleSection>
      {a.sections.map((s) => <ArticleSection key={s.title} id={slugify(s.title)} title={s.title}><Prose text={s.content} /></ArticleSection>)}
      <ArticleSection id="health" title={`Common ${a.breedName} health problems`}>
        <ul className="flex flex-col gap-3">
          {a.healthIssues.map((h) => (
            <li key={h.condition} className="rounded-2xl bg-bg-2 p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-[17px] font-semibold text-label">{h.condition}</h3>
                <span className={`rounded-full px-2.5 py-0.5 text-[12px] font-semibold text-label ${FREQ[h.frequency]}`}>{h.frequency[0].toUpperCase() + h.frequency.slice(1)} · {h.affectedAge}</span>
              </div>
              <p className="mt-1 text-[15px] leading-[22px] text-label-2">{h.description}</p>
            </li>
          ))}
        </ul>
      </ArticleSection>
    </ArticleShell>
  );
}
