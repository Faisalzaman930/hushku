import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Check, ChevronRight, CircleAlert } from "lucide-react";
import CompareButton from "../../../components/CompareButton";
import { breedsByAnimal, getBreed, ANIMAL_LABELS, BREED_CONTENT_UPDATED, BREED_CONTENT_PUBLISHED } from "../../../data/breeds";
import { generateBreedContent, generateCatContent } from "../../../data/breeds/content";
import { relatedDogs, relatedCats, mixesOf } from "../../../data/breeds/related";
import type { BreedDoc, CatBreedDoc, BreedScores, CatScores, AnyBreed } from "../../../data/breeds";
import { comparisonsFor } from "../../../data/breeds/comparisons";

function clamp(text: string, max: number) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[,:;]$/, "") + "…";
}

const UPDATED_LABEL = new Date(BREED_CONTENT_UPDATED + "T12:00:00Z").toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });

/** Only known pages exist; anything else is a real 404. */
export const dynamicParams = false;

export async function generateStaticParams() {
  return Object.entries(breedsByAnimal).flatMap(([animal, breeds]) => (breeds as AnyBreed[]).map((b) => ({ animal, slug: b.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ animal: string; slug: string }> }): Promise<Metadata> {
  const { animal, slug } = await params;
  const breed = getBreed(animal, slug);
  if (!breed) return {};
  const isCat = breed.animal === "cats";
  const content = isCat ? generateCatContent(breed as CatBreedDoc) : generateBreedContent(breed as BreedDoc);
  const canonicalUrl = `https://hushku.app/breeds/${animal}/${slug}`;
  const ogImage = breed.image ? `https://hushku.app${breed.image}` : `https://hushku.app/og.png`;

  // Titles stay within ~60 characters and descriptions within 155, so Google shows them whole.
  const variants = [
    `${breed.name}: Temperament, Care & Health | Hushku`,
    `${breed.name} Breed Guide: Temperament & Care | Hushku`,
    `${breed.name} Breed Guide | Hushku`,
    `${breed.name} | Hushku`,
  ];
  const title = variants.find((t) => t.length <= 60) ?? variants[variants.length - 1];
  const health = content.health.slice(0, 2);
  const description = clamp(
    `${content.lead}${health.length ? ` Known health risks include ${health.join(" and ")}.` : ""} Temperament, exercise, grooming and FAQs.`,
    155
  );

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      type: "article",
      url: canonicalUrl,
      images: [{ url: ogImage, width: 1200, height: 630, alt: `${breed.name} ${isCat ? "cat" : "dog"}` }],
      siteName: "Hushku",
    },
    twitter: { card: "summary_large_image", title, description, images: [ogImage] },
  };
}

const DOG_SCORE_GROUPS: { label: string; keys: (keyof BreedScores)[] }[] = [
  { label: "Living with it", keys: ["adaptability", "apartmentFriendly", "goodForNovice", "sensitivity", "toleratesAlone", "toleratesCold", "toleratesHot"] },
  { label: "Friendliness", keys: ["affectionate", "kidFriendly", "dogFriendly", "strangerFriendly"] },
  { label: "Coat and health", keys: ["shedding", "drooling", "easyToGroom", "health", "weightGain"] },
  { label: "Training and behaviour", keys: ["easyToTrain", "intelligence", "mouthiness", "preyDrive", "barkiness", "wanderlust"] },
  { label: "Exercise", keys: ["energy", "intensity", "exerciseNeeds", "playfulness"] },
];

const DOG_SCORE_LABELS: Record<keyof BreedScores, string> = {
  adaptability: "Adaptability", apartmentFriendly: "Apartment living", goodForNovice: "Good for first-time owners",
  sensitivity: "Sensitivity", toleratesAlone: "Copes with being alone", toleratesCold: "Copes with cold", toleratesHot: "Copes with heat",
  friendliness: "Friendliness", affectionate: "Affection with family", kidFriendly: "Good with kids",
  dogFriendly: "Good with other dogs", strangerFriendly: "Friendly with strangers", shedding: "Shedding", drooling: "Drooling",
  easyToGroom: "Easy to groom", health: "General health", weightGain: "Tendency to gain weight",
  trainability: "Trainability", easyToTrain: "Easy to train", intelligence: "Intelligence",
  mouthiness: "Mouthiness", preyDrive: "Prey drive", barkiness: "Barking", wanderlust: "Tendency to roam",
  energy: "Energy", intensity: "Intensity", exerciseNeeds: "Exercise needs", playfulness: "Playfulness",
};

const CAT_SCORE_LABELS: Record<keyof CatScores, string> = {
  adaptability: "Adaptability", affectionLevel: "Affection", childFriendly: "Good with children",
  dogFriendly: "Good with dogs", energyLevel: "Energy", grooming: "Grooming needs",
  healthIssues: "Health issues", intelligence: "Intelligence", sheddingLevel: "Shedding",
  socialNeeds: "Need for company", strangerFriendly: "Friendly with strangers", vocalisation: "Vocal",
};

function Rating({ label, score }: { label: string; score: number | null }) {
  if (score === null) return null;
  return (
    <div className="flex items-center gap-4 py-2.5">
      <dt className="flex-1 text-[15px] text-label">{label}</dt>
      <dd className="flex items-center gap-3">
        <span className="flex gap-1" aria-hidden>
          {[1, 2, 3, 4, 5].map((i) => (
            <span key={i} className={`h-2 w-5 rounded-full ${i <= score ? "bg-brand" : "bg-surface"}`} />
          ))}
        </span>
        <span className="w-8 text-right text-[13px] tabular-nums text-label-2">{score}/5</span>
      </dd>
    </div>
  );
}

function BreedCard({ b, animal }: { b: AnyBreed; animal: string }) {
  const meta = b.animal === "cats" ? (b as CatBreedDoc).origin : (b as BreedDoc).size;
  return (
    <li>
      <Link href={`/breeds/${animal}/${b.slug}`} className="group flex flex-col gap-3">
        <span className="relative block aspect-[4/3] overflow-hidden rounded-2xl bg-surface">
          {b.image ? <Image src={b.image} alt={`${b.name} ${animal === "cats" ? "cat" : "dog"}`} fill sizes="(min-width: 768px) 200px, 45vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" /> : null}
        </span>
        <span>
          <span className="block text-[17px] font-semibold text-label group-hover:underline underline-offset-[3px]">{b.name}</span>
          {meta ? <span className="text-[13px] text-label-2">{meta}</span> : null}
        </span>
      </Link>
    </li>
  );
}

export default async function BreedPage({ params }: { params: Promise<{ animal: string; slug: string }> }) {
  const { animal, slug } = await params;
  const breed = getBreed(animal, slug);
  if (!breed) notFound();

  const animalLabel = ANIMAL_LABELS[animal] ?? animal;
  const isCat = breed.animal === "cats";
  const cat = isCat ? (breed as CatBreedDoc) : null;
  const dog = !isCat ? (breed as BreedDoc) : null;
  const content = cat ? generateCatContent(cat) : generateBreedContent(dog!);
  const related: AnyBreed[] = cat ? relatedCats(cat) : relatedDogs(dog!);
  const mixes = dog && !dog.parentBreeds ? mixesOf(dog.slug) : [];
  const comparisons = comparisonsFor(animal, slug);
  const canonicalUrl = `https://hushku.app/breeds/${animal}/${slug}`;
  const ogImage = breed.image ? `https://hushku.app${breed.image}` : `https://hushku.app/og.png`;
  const noun = isCat ? "cat" : "dog";

  const facts = cat
    ? [
        ["Origin", cat.origin],
        ["Weight", cat.weight],
        ["Life span", cat.lifeSpan],
        ["Coat", cat.hypoallergenic ? "Often called hypoallergenic" : null],
        ["Lap cat", cat.lap === null ? null : cat.lap ? "Yes" : "Not usually"],
      ]
    : [
        ["Size", dog!.size],
        ["Height", dog!.height],
        ["Weight", dog!.weight],
        ["Life span", dog!.lifeSpan],
        ["Group", dog!.group?.replace(/ Dogs$/, "")],
        ["Parent breeds", dog!.parentBreeds],
      ];

  const toc = [
    ...content.sections.map((s) => ({ id: s.id, title: s.title })),
    { id: "ratings", title: "Ratings" },
    ...(content.goodFit.length || content.thinkTwice.length ? [{ id: "fit", title: "Is it right for you?" }] : []),
    { id: "faq", title: "Questions" },
  ];

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: `${breed.name}: temperament, care and health`,
      description: content.lead,
      image: ogImage,
      url: canonicalUrl,
      datePublished: BREED_CONTENT_PUBLISHED,
      dateModified: BREED_CONTENT_UPDATED,
      author: { "@type": "Organization", name: "Hushku Editorial Team", url: "https://hushku.app/about/editorial" },
      publisher: { "@type": "Organization", name: "Hushku", url: "https://hushku.app", logo: { "@type": "ImageObject", url: "https://hushku.app/icon.svg" } },
      mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
      about: { "@type": "Thing", name: `${breed.name} (${noun} breed)` },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: content.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hushku.app" },
        { "@type": "ListItem", position: 2, name: "Breeds", item: "https://hushku.app/breeds" },
        { "@type": "ListItem", position: 3, name: animalLabel, item: `https://hushku.app/breeds/${animal}` },
        { "@type": "ListItem", position: 4, name: breed.name, item: canonicalUrl },
      ],
    },
  ];

  const h2 = "text-[26px] leading-[1.2] font-semibold tracking-[-0.01em] text-label";
  const body = "text-[17px] leading-[28px] text-label-2";

  return (
    <div className="bg-white">
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      {/* ── Hero ── */}
      <section className="px-4 pt-10 pb-12 md:px-8 md:pt-16 md:pb-16">
        <div className="mx-auto max-w-[1200px]">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-label-2">
              <li><Link href="/breeds" className="hover:text-label hover:underline underline-offset-[3px]">Breeds</Link></li>
              <ChevronRight size={14} className="text-label-3" aria-hidden />
              <li><Link href={`/breeds/${animal}`} className="hover:text-label hover:underline underline-offset-[3px]">{animalLabel}</Link></li>
              <ChevronRight size={14} className="text-label-3" aria-hidden />
              <li aria-current="page" className="font-medium text-label">{breed.name}</li>
            </ol>
          </nav>
          <div className="grid items-center gap-10 md:grid-cols-[1fr_minmax(0,460px)] md:gap-16">
            <div className="flex flex-col gap-5">
              <p className="text-[15px] font-semibold text-brand-text">
                {cat ? `${cat.origin ? `${cat.origin} · ` : ""}Cat breed` : dog!.parentBreeds ? "Mixed breed" : `${dog!.group?.replace(/ Dogs$/, "") ?? ""} dog breed`.trim()}
              </p>
              <h1 className="text-[40px] leading-[1.08] font-semibold tracking-[-0.02em] text-balance text-label md:text-[56px] md:leading-[1.05]">{breed.name}</h1>
              <p className="max-w-[60ch] text-[19px] leading-[1.45] text-label-2 md:text-[21px]">{content.lead}</p>
              <p className="text-[13px] text-label-2">
                Reviewed to our <Link href="/about/editorial" className="underline underline-offset-[3px] hover:text-label">editorial standards</Link> · Updated <time dateTime={BREED_CONTENT_UPDATED}>{UPDATED_LABEL}</time>
              </p>
              <div className="flex flex-wrap gap-3">
                <CompareButton slug={breed.slug} className="inline-flex min-h-11 items-center rounded-full bg-label px-5 text-[15px] font-medium text-white transition-colors hover:bg-label-2">
                  Compare with another breed
                </CompareButton>
                <Link href={`/breeds/${animal}`} className="inline-flex min-h-11 items-center rounded-full bg-surface px-5 text-[15px] font-medium text-label transition-colors hover:bg-separator">
                  All {animalLabel.toLowerCase()}
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-surface">
              {breed.image ? (
                <Image src={breed.image} alt={dog?.parentBreeds ? `${breed.name}, a ${dog.parentBreeds} mix` : `${breed.name} ${noun}`} fill priority sizes="(min-width: 768px) 460px, 100vw" className="object-cover" />
              ) : null}
            </div>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {facts.filter(([, v]) => v).map(([k, v]) => (
              <div key={k} className={`rounded-2xl bg-bg-2 p-5 ${k === "Parent breeds" ? "col-span-2 sm:col-span-3 lg:col-span-2" : ""}`}>
                <dt className="text-[13px] text-label-2">{k}</dt>
                <dd className="mt-1 text-[17px] font-semibold text-label">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Body ── */}
      <section className="px-4 pb-16 md:px-8 md:pb-24">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[220px_1fr] lg:gap-16">
          <nav aria-label="On this page" className="lg:sticky lg:top-24 lg:self-start">
            <p className="mb-3 text-[13px] font-semibold text-label-2">On this page</p>
            <ol className="flex flex-col gap-1 border-l border-separator">
              {toc.map((t) => (
                <li key={t.id}>
                  <a href={`#${t.id}`} className="-ml-px block border-l border-transparent py-1.5 pl-4 text-[15px] text-label-2 hover:border-label hover:text-label">{t.title}</a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="flex max-w-[720px] flex-col gap-14">
            {content.sections.map((s) => (
              <section key={s.id} id={s.id} aria-labelledby={`${s.id}-h`} className="flex scroll-mt-24 flex-col gap-4">
                <h2 id={`${s.id}-h`} className={h2}>{s.title}</h2>
                {s.paragraphs.map((p) => <p key={p} className={body}>{p}</p>)}
                {s.id === "about" && content.parents.length ? (
                  <div className="flex flex-col gap-3 pt-1">
                    <h3 className="text-[17px] font-semibold text-label">The parent breeds</h3>
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {content.parents.map((p) => (
                        <li key={p.name} className="flex flex-col gap-2 rounded-2xl bg-bg-2 p-5">
                          {p.slug ? (
                            <Link href={`/breeds/dogs/${p.slug}`} className="inline-flex items-center gap-1 text-[17px] font-semibold text-label hover:underline underline-offset-[3px]">{p.name} <ChevronRight size={16} aria-hidden /></Link>
                          ) : (
                            <span className="text-[17px] font-semibold text-label">{p.name}</span>
                          )}
                          {p.summary ? <p className="text-[15px] leading-[22px] text-label-2">{p.summary}</p> : null}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                {s.id === "health" && content.health.length ? (
                  <ul className="flex flex-col gap-2 rounded-2xl bg-bg-2 p-5">
                    {content.health.map((h) => (
                      <li key={h} className="flex gap-3 text-[15px] leading-[22px] text-label"><span aria-hidden className="mt-[8px] h-1.5 w-1.5 flex-none rounded-full bg-label-3" />{h.charAt(0).toUpperCase() + h.slice(1)}</li>
                    ))}
                  </ul>
                ) : null}
                {s.id === "care" ? (
                  <p className="text-[15px] text-label-2">
                    Work out their needs with the free{" "}
                    <Link href="/tools/calorie-calculator" className="font-medium text-brand-text hover:underline underline-offset-[3px]">calorie calculator</Link>
                    {!isCat ? <>, <Link href="/tools/exercise-calculator" className="font-medium text-brand-text hover:underline underline-offset-[3px]">exercise calculator</Link></> : null} and{" "}
                    <Link href="/tools/water-calculator" className="font-medium text-brand-text hover:underline underline-offset-[3px]">water intake calculator</Link>.
                  </p>
                ) : null}
              </section>
            ))}

            <section id="ratings" aria-labelledby="ratings-h" className="flex scroll-mt-24 flex-col gap-4">
              <h2 id="ratings-h" className={h2}>Ratings</h2>
              <p className="text-[15px] text-label-2">Scored 1 to 5, where 5 is the most. Individual {noun}s vary.</p>
              {cat ? (
                <dl className="divide-y divide-separator border-y border-separator">
                  {(Object.keys(CAT_SCORE_LABELS) as (keyof CatScores)[]).map((k) => <Rating key={k} label={CAT_SCORE_LABELS[k]} score={cat.scores[k]} />)}
                </dl>
              ) : (
                <div className="grid gap-8 md:grid-cols-2">
                  {DOG_SCORE_GROUPS.map((g) => (
                    <div key={g.label}>
                      <h3 className="mb-1 text-[15px] font-semibold text-label">{g.label}</h3>
                      <dl className="divide-y divide-separator border-y border-separator">
                        {g.keys.map((k) => <Rating key={k} label={DOG_SCORE_LABELS[k]} score={k === "goodForNovice" ? content.noviceScore : dog!.scores[k]} />)}
                      </dl>
                    </div>
                  ))}
                </div>
              )}
            </section>

            {content.goodFit.length || content.thinkTwice.length ? (
              <section id="fit" aria-labelledby="fit-h" className="flex scroll-mt-24 flex-col gap-4">
                <h2 id="fit-h" className={h2}>Is the {breed.name} right for you?</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {content.goodFit.length ? (
                    <div className="rounded-2xl bg-success-tint p-5">
                      <h3 className="mb-3 text-[15px] font-semibold text-success">Often a good fit for</h3>
                      <ul className="flex flex-col gap-2">{content.goodFit.map((t) => <li key={t} className="flex gap-2 text-[15px] leading-[22px] text-label"><Check size={18} className="mt-0.5 flex-none text-success" aria-hidden />{t}</li>)}</ul>
                    </div>
                  ) : null}
                  {content.thinkTwice.length ? (
                    <div className="rounded-2xl bg-warning-tint p-5">
                      <h3 className="mb-3 text-[15px] font-semibold text-warning">Less suited to</h3>
                      <ul className="flex flex-col gap-2">{content.thinkTwice.map((t) => <li key={t} className="flex gap-2 text-[15px] leading-[22px] text-label"><CircleAlert size={18} className="mt-0.5 flex-none text-warning" aria-hidden />{t}</li>)}</ul>
                    </div>
                  ) : null}
                </div>
                <p className="text-[15px] text-label-2">
                  Thinking of adopting? Read our <Link href="/resources/adopting-rescue-dog-complete-guide" className="font-medium text-brand-text hover:underline underline-offset-[3px]">guide to adopting a rescue</Link> or browse <Link href="/adoption" className="font-medium text-brand-text hover:underline underline-offset-[3px]">adoption on Hushku</Link>.
                </p>
              </section>
            ) : null}

            <section id="faq" aria-labelledby="faq-h" className="flex scroll-mt-24 flex-col gap-4">
              <h2 id="faq-h" className={h2}>{breed.name} questions</h2>
              <div className="flex flex-col divide-y divide-separator border-y border-separator">
                {content.faqs.map((f) => (
                  <div key={f.q} className="py-5">
                    <h3 className="text-[17px] font-semibold text-label">{f.q}</h3>
                    <p className="mt-2 text-[17px] leading-[26px] text-label-2">{f.a}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* ── Mixes, related, comparisons ── */}
      <section className="bg-bg-2 px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-14">
          {mixes.length ? (
            <div className="flex flex-col gap-6">
              <h2 className={h2}>{breed.name} mixes</h2>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
                {mixes.map((m) => <BreedCard key={m.slug} b={m} animal="dogs" />)}
              </ul>
            </div>
          ) : null}
          <div className="flex flex-col gap-6">
            <h2 className={h2}>Similar {animalLabel.toLowerCase()}</h2>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
              {related.map((r) => <BreedCard key={r.slug} b={r} animal={animal} />)}
            </ul>
          </div>
          {comparisons.length ? (
            <div className="flex flex-col gap-4">
              <h2 className={h2}>{breed.name} compared</h2>
              <ul className="flex flex-wrap gap-2">
                {comparisons.map((c) => (
                  <li key={c.slug}>
                    <Link href={`/breeds/compare/${c.slug}`} className="inline-flex min-h-11 items-center rounded-full bg-white px-4 text-[15px] font-medium text-label transition-colors hover:bg-separator">{c.a.name} vs {c.b.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-4 py-16 md:px-8">
        <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-6 rounded-3xl bg-bg-2 p-6 md:flex-row md:items-center md:p-8">
          <div>
            <h2 className="text-[24px] leading-[1.25] font-semibold tracking-[-0.008em] text-label">Own {/^[aeiou]/i.test(breed.name) ? "an" : "a"} {breed.name}?</h2>
            <p className="mt-1 max-w-[56ch] text-[17px] leading-[26px] text-label-2">
              {isCat ? "Keep their vet visits, weight and reminders in Hushku, and share care with your household." : "Keep their reminders, weight and health records in Hushku, and find playmates nearby."}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/health" className="inline-flex min-h-11 items-center rounded-full bg-white px-5 text-[17px] font-medium text-label hover:bg-separator">Health and care</Link>
            <Link href="/join" className="inline-flex min-h-11 items-center rounded-full bg-label px-5 text-[17px] font-medium text-white hover:bg-label-2">Join the waitlist</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
