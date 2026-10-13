import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import CompareButton from "../../../components/CompareButton";
import Image from "next/image";
import { breedsByAnimal, getBreed, ANIMAL_LABELS } from "../../../data/breeds";
import { generateBreedContent, generateCatContent } from "../../../data/breeds/content";
import type { BreedDoc, CatBreedDoc, BreedScores, CatScores } from "../../../data/breeds";
import BreedTabs from "./BreedTabs";
import { comparisonsFor } from "../../../data/breeds/comparisons";

function clamp(text: string, max: number) {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[,:;]$/, "") + "…";
}

/** Parent breeds of a mix, linked only when we have that breed's page. */
const PARENT_ALIASES: Record<string, string> = { "english-bulldog": "bulldog", "rough-collie": "collie", "german-shepherd": "german-shepherd-dog" };
function parentLinks(parentBreeds?: string | null) {
  if (!parentBreeds) return [];
  const known = new Set((breedsByAnimal.dogs as { slug: string }[]).map((b) => b.slug));
  return parentBreeds.split(" and ").map((raw) => {
    const name = raw.trim();
    const base = name.toLowerCase().replace(/\s+/g, "-");
    const slug = known.has(base) ? base : known.has(PARENT_ALIASES[base] ?? "") ? PARENT_ALIASES[base] : null;
    return { name, slug };
  });
}

/** Only known pages exist; anything else is a real 404. */
export const dynamicParams = false;

export async function generateStaticParams() {
  const params: { animal: string; slug: string }[] = [];
  for (const [animal, breeds] of Object.entries(breedsByAnimal)) {
    for (const b of breeds) {
      params.push({ animal, slug: b.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ animal: string; slug: string }>;
}): Promise<Metadata> {
  const { animal, slug } = await params;
  const breed = getBreed(animal, slug);
  if (!breed) return {};
  const animalLabel = ANIMAL_LABELS[animal] ?? animal;
  const isCat = breed.animal === "cats";
  const cat = isCat ? (breed as CatBreedDoc) : null;
  const dog = !isCat ? (breed as BreedDoc) : null;


  const canonicalUrl = `https://hushku.app/breeds/${animal}/${slug}`;
  const ogImage = breed.image
    ? `https://hushku.app${breed.image}`
    : `https://hushku.app/og.png`;

  // Titles stay within ~60 characters and descriptions within 155, so Google shows them whole.
  const long = `${breed.name} Breed Guide: Temperament & Care | Hushku`;
  const title = long.length <= 60 ? long : `${breed.name} Breed Guide | Hushku`;
  const facts = [
    dog?.parentBreeds ? `a ${dog.parentBreeds} mix` : "",
    dog?.size ? `${dog.size.toLowerCase()} size` : cat?.origin ? `from ${cat.origin}` : "",
    breed.lifeSpan ? `lives ${breed.lifeSpan}` : "",
  ].filter(Boolean);
  const description = clamp(
    `The ${breed.name}${facts.length ? `: ${facts.join(", ")}` : ""}. Temperament, grooming, training and health, with ratings and FAQs.`,
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
      images: [{ url: ogImage, width: 1200, height: 630, alt: `${breed.name} ${isCat ? "cat" : "dog"} breed guide` }],
      siteName: "Hushku",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

const DOG_SCORE_GROUPS: { label: string; emoji: string; color: string; keys: (keyof BreedScores)[] }[] = [
  { label: "Adaptability", emoji: "🏠", color: "from-violet-500 to-purple-600",
    keys: ["adaptability","apartmentFriendly","goodForNovice","sensitivity","toleratesAlone","toleratesCold","toleratesHot"] },
  { label: "Friendliness", emoji: "❤️", color: "from-rose-500 to-pink-600",
    keys: ["friendliness","affectionate","kidFriendly","dogFriendly","strangerFriendly"] },
  { label: "Health & Grooming", emoji: "✂️", color: "from-emerald-500 to-teal-600",
    keys: ["shedding","drooling","easyToGroom","health","weightGain"] },
  { label: "Trainability", emoji: "🎓", color: "from-blue-500 to-indigo-600",
    keys: ["trainability","easyToTrain","intelligence","mouthiness","preyDrive","barkiness","wanderlust"] },
  { label: "Physical Needs", emoji: "🏃", color: "from-orange-500 to-amber-600",
    keys: ["energy","intensity","exerciseNeeds","playfulness"] },
];

const DOG_SCORE_LABELS: Record<keyof BreedScores, string> = {
  adaptability:"Overall Adaptability", apartmentFriendly:"Apartment Living", goodForNovice:"Good for Novice Owners",
  sensitivity:"Sensitivity", toleratesAlone:"Tolerates Being Alone", toleratesCold:"Cold Weather", toleratesHot:"Hot Weather",
  friendliness:"Overall Friendliness", affectionate:"Affectionate with Family", kidFriendly:"Kid-Friendly",
  dogFriendly:"Dog-Friendly", strangerFriendly:"Friendly to Strangers", shedding:"Shedding", drooling:"Drooling",
  easyToGroom:"Easy to Groom", health:"General Health", weightGain:"Weight Gain Tendency",
  trainability:"Overall Trainability", easyToTrain:"Easy to Train", intelligence:"Intelligence",
  mouthiness:"Mouthiness", preyDrive:"Prey Drive", barkiness:"Tendency to Bark", wanderlust:"Wanderlust",
  energy:"Energy Level", intensity:"Intensity", exerciseNeeds:"Exercise Needs", playfulness:"Playfulness",
};

const CAT_SCORE_LABELS: Record<keyof CatScores, string> = {
  adaptability:"Adaptability", affectionLevel:"Affection Level", childFriendly:"Child Friendly",
  dogFriendly:"Dog Friendly", energyLevel:"Energy Level", grooming:"Grooming Needs",
  healthIssues:"Health Issues", intelligence:"Intelligence", sheddingLevel:"Shedding Level",
  socialNeeds:"Social Needs", strangerFriendly:"Stranger Friendly", vocalisation:"Vocalisation",
};

function StatCard({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-4 text-center shadow-sm">
      <p className="text-[9px] font-black uppercase tracking-widest text-slate-gray mb-1">{label}</p>
      <p className="text-sm font-black text-ebony leading-tight">{value}</p>
      {sub && <p className="text-[10px] text-slate-gray/60 mt-0.5">{sub}</p>}
    </div>
  );
}

export default async function BreedPage({
  params,
}: {
  params: Promise<{ animal: string; slug: string }>;
}) {
  const { animal, slug } = await params;
  const breed = getBreed(animal, slug);
  if (!breed) notFound();

  const animalLabel = ANIMAL_LABELS[animal] ?? animal;
  const isCat = breed.animal === "cats";
  const cat = isCat ? (breed as CatBreedDoc) : null;
  const dog = !isCat ? (breed as BreedDoc) : null;
  const today = new Date().toISOString().split("T")[0];

  const content = isCat && cat ? generateCatContent(cat) : dog ? generateBreedContent(dog) : null;

  // Related breeds
  const related = (breedsByAnimal[animal] as (BreedDoc | CatBreedDoc)[])
    .filter((b) => b.slug !== breed.slug && b.image)
    .filter((b) => {
      if (!isCat && dog && (b as BreedDoc).group) return (b as BreedDoc).group === dog.group;
      return true;
    })
    .slice(0, 4);

  // FAQ for cats (used for JSON-LD schema only — runtime uses content.faqs)
  const catFaqs = cat ? [
    { q: `Is the ${cat.name} good with children?`, a: cat.scores.childFriendly !== null ? (cat.scores.childFriendly >= 4 ? `Yes — the ${cat.name} is known for being gentle and patient with children.` : cat.scores.childFriendly >= 3 ? `The ${cat.name} generally gets along well with children with proper introductions.` : `The ${cat.name} can be reserved around young children and suits calmer households.`) : `Always supervise interactions between cats and young children.` },
    { q: `Is the ${cat.name} hypoallergenic?`, a: cat.hypoallergenic ? `Yes, the ${cat.name} is considered hypoallergenic, making it a popular choice for allergy sufferers. No cat is 100% allergen-free, but this breed produces less Fel d 1 protein.` : `No, the ${cat.name} is not considered hypoallergenic. Regular grooming helps manage dander levels.` },
    { q: `How vocal is the ${cat.name}?`, a: cat.scores.vocalisation !== null ? (cat.scores.vocalisation >= 4 ? `The ${cat.name} is a very vocal breed — expect plenty of conversation!` : cat.scores.vocalisation >= 3 ? `The ${cat.name} is moderately vocal and will let you know when it needs attention.` : `The ${cat.name} is a quiet breed, communicating more through body language than sound.`) : `Vocalisation varies by individual cat.` },
    { q: `Is the ${cat.name} good with dogs?`, a: cat.scores.dogFriendly !== null ? (cat.scores.dogFriendly >= 4 ? `The ${cat.name} is typically dog-friendly and adapts well to multi-pet households.` : cat.scores.dogFriendly >= 3 ? `The ${cat.name} can coexist with dogs with slow, careful introductions.` : `The ${cat.name} generally prefers a cat-only household or careful managed introductions with dogs.`) : `Always introduce pets slowly and in a controlled environment.` },
    { q: `How much grooming does the ${cat.name} need?`, a: cat.scores.grooming !== null ? (cat.scores.grooming >= 4 ? `The ${cat.name} requires significant grooming — daily brushing and regular professional grooming is recommended.` : cat.scores.grooming >= 3 ? `The ${cat.name} needs moderate grooming — a brush a few times per week keeps the coat in good condition.` : `The ${cat.name} is low-maintenance in the grooming department. A weekly brush is usually sufficient.`) : `Regular grooming keeps your cat healthy and reduces hairballs.` },
    { q: `What is the ${cat.name}'s life expectancy?`, a: `The ${cat.name} typically lives ${cat.lifeSpan ?? "12–16 years"}. Regular vet visits, a balanced diet, and keeping them indoors significantly extends lifespan.` },
  ] : [];

  // JSON-LD
  const faqs = content?.faqs ?? catFaqs;
  const canonicalUrl = `https://hushku.app/breeds/${animal}/${slug}`;
  const ogImage = breed.image ? `https://hushku.app${breed.image}` : `https://hushku.app/og.png`;

  const faqSchema = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  } : null;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${breed.name}${/\b(dog|cat|hound)$/i.test(breed.name) ? "" : isCat ? " Cat" : " Dog"} Breed Guide: Temperament, Size, Care & Health`,
    description: `Complete guide to the ${breed.name} — temperament, size, grooming, training, health, and suitability.`,
    image: ogImage,
    url: canonicalUrl,
    datePublished: "2024-01-01",
    dateModified: today,
    author: {
      "@type": "Organization",
      name: "Hushku Editorial Team",
      url: "https://hushku.app/about/editorial",
    },
    publisher: {
      "@type": "Organization",
      name: "Hushku",
      url: "https://hushku.app",
      logo: { "@type": "ImageObject", url: "https://hushku.app/icon.svg" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": canonicalUrl },
    about: { "@type": "Thing", name: `${breed!.name} ${isCat ? "cat" : "dog"} breed` },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://hushku.app" },
      { "@type": "ListItem", position: 2, name: "Breeds", item: "https://hushku.app/breeds" },
      { "@type": "ListItem", position: 3, name: animalLabel, item: `https://hushku.app/breeds/${animal}` },
      { "@type": "ListItem", position: 4, name: breed.name, item: canonicalUrl },
    ],
  };

  const quickStats = isCat && cat ? [
    { label: "Origin", value: cat.origin ?? "Unknown" },
    { label: "Life Span", value: cat.lifeSpan ?? "—" },
    { label: "Weight", value: cat.weight ?? "—" },
    { label: "Indoor", value: cat.indoor ? "Indoor" : "Indoor/Outdoor" },
    { label: "Lap Cat", value: cat.lap ? "Yes" : "Not typically" },
    { label: "Hypoallergenic", value: cat.hypoallergenic ? "Yes" : "No" },
  ] : dog ? [
    { label: "Size", value: dog.size ?? "—" },
    { label: "Life Span", value: dog.lifeSpan ?? "—" },
    { label: "Weight", value: dog.weight ?? "—" },
    { label: "Height", value: dog.height ?? "—" },
    { label: "Breed Group", value: dog.group ?? "—" },
  ] : [];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="bg-white">
        {/* ── Hero ─────────────────────────────────────────────────── */}
        <div className="bg-ebony pt-32 pb-0 relative overflow-hidden">
          <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-white/30 text-[10px] font-black uppercase tracking-widest mb-8">
              <Link href="/breeds" className="hover:text-white/60 transition-colors">Breeds</Link>
              <span>/</span>
              <Link href={`/breeds/${animal}`} className="hover:text-white/60 transition-colors">{animalLabel}</Link>
              <span>/</span>
              <span className="text-white/60">{breed.name}</span>
            </nav>

            <div className="flex flex-col md:flex-row gap-10 items-end pb-0">
              {/* Image — bleeds into content area */}
              <div className="flex-none w-52 h-52 md:w-72 md:h-72 rounded-t-3xl overflow-hidden bg-white/10 relative shadow-2xl self-end">
                {breed.image ? (
                  <Image
                    src={breed.image}
                    alt={dog?.parentBreeds ? `${breed.name} dog — ${dog.parentBreeds} mix` : `${breed.name} ${isCat ? "cat" : "dog"} breed`}
                    fill className="object-cover object-top" sizes="288px" priority
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-7xl">
                    {animal === "dogs" ? "🐕" : "🐈"}
                  </div>
                )}
              </div>

              <div className="flex-1 pb-10">
                <p className="text-[10px] font-black text-brand-start uppercase tracking-[0.25em] mb-3">
                  {isCat ? (cat?.origin ?? "Cat Breed") : (dog?.group ?? animalLabel)}
                </p>
                <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-3">
                  {breed.name}
                </h1>
                {isCat && cat?.temperament && (
                  <p className="text-white/40 text-xs mb-4 max-w-md">{cat.temperament}</p>
                )}
                <p className="text-white/30 text-xs mb-6">
                  Reviewed to our{" "}
                  <Link href="/about/editorial" className="underline hover:text-white/60 transition-colors">
                    editorial standards
                  </Link>
                  {" "}· Updated {today}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {quickStats.slice(0, 4).map(({ label, value }) => value && value !== "—" ? (
                    <span key={label} className="text-[9px] font-black uppercase tracking-widest px-3 py-1.5 bg-white/10 text-white/70 rounded-full">
                      {label}: {value}
                    </span>
                  ) : null)}
                </div>
                <div className="flex flex-wrap gap-3">
                  <CompareButton slug={breed.slug}
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-[10px] font-black uppercase tracking-widest px-5 py-3 rounded-2xl transition-colors">
                    🆚 Compare
                  </CompareButton>
                  <Link href={`/breeds/${animal}`}
                    className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 text-[10px] font-black uppercase tracking-widest px-5 py-3 rounded-2xl transition-colors border border-white/10">
                    ← All {animalLabel}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Quick stat cards ─────────────────────────────────────── */}
        <div className="bg-gray-50 border-b border-gray-100">
          <div className="mx-auto max-w-6xl px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {quickStats.map(({ label, value }) => value && value !== "—" ? (
                <StatCard key={label} label={label} value={value} />
              ) : null)}
            </div>
          </div>
        </div>

        {/* ── Tabbed content (client) ──────────────────────────────── */}
        <BreedTabs
          breed={breed}
          content={content}
          catFaqs={catFaqs}
          dogScoreGroups={DOG_SCORE_GROUPS}
          dogScoreLabels={DOG_SCORE_LABELS}
          catScoreLabels={CAT_SCORE_LABELS}
          animal={animal}
          related={related}
          animalLabel={animalLabel}
          parentLinks={parentLinks(dog?.parentBreeds)}
        />

        {/* ── Popular comparisons ─────────────────────────────────── */}
        {comparisonsFor(animal, slug).length ? (
          <section className="px-4 pt-16 md:px-8" aria-labelledby="compared-with">
            <div className="mx-auto flex max-w-[1200px] flex-col gap-4">
              <h2 id="compared-with" className="text-[24px] leading-[1.25] font-semibold tracking-[-0.008em] text-label">{breed.name} compared</h2>
              <ul className="flex flex-wrap gap-2">
                {comparisonsFor(animal, slug).map((c) => (
                  <li key={c.slug}>
                    <Link href={`/breeds/compare/${c.slug}`} className="inline-flex min-h-11 items-center rounded-full bg-surface px-4 text-[15px] font-medium text-label transition-colors hover:bg-separator">
                      {c.a.name} vs {c.b.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}

        {/* ── CTA ──────────────────────────────────────────────────── */}
        <section className="px-4 pt-16 md:px-8">
          <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-6 rounded-3xl bg-bg-2 p-6 md:flex-row md:items-center md:p-8">
            <div>
              <h2 className="text-[24px] leading-[1.25] font-semibold tracking-[-0.008em] text-label">Own a {breed.name}?</h2>
              <p className="mt-1 max-w-[56ch] text-[17px] leading-[26px] text-label-2">
                Keep their reminders, weight and health records in Hushku, and find playmates nearby.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/tools" className="inline-flex min-h-11 items-center rounded-full bg-surface px-5 text-[17px] font-medium text-label hover:bg-separator">Free pet tools</Link>
              <Link href={`/breeds/${animal}`} className="inline-flex min-h-11 items-center rounded-full bg-surface px-5 text-[17px] font-medium text-label hover:bg-separator">All {animalLabel.toLowerCase()}</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
