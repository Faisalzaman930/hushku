import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { breedsByAnimal, ANIMAL_LABELS } from "../../data/breeds";
import type { BreedDoc, CatBreedDoc } from "../../data/breeds";
import BreedFilter, { type BreedListItem } from "./BreedFilter";

export const dynamicParams = false;
export function generateStaticParams() {
  return Object.keys(breedsByAnimal).map((animal) => ({ animal }));
}

const INTRO: Record<string, { lead: string; body: string[] }> = {
  dogs: {
    lead: "Guides to 391 dog breeds and popular mixes, each with its history, temperament, exercise and grooming needs, and the health problems the breed is known for.",
    body: [
      "Breed tells you what a dog was originally bred to do, and that still shapes daily life. Herding breeds want a job, scenthounds follow their nose, sighthounds chase, and livestock guardians think for themselves. Start with the group, then check the ratings for exercise, shedding and how well the breed copes alone.",
      "For mixes, each guide links to both parent breeds, because a puppy can take after either side. Every guide lists the health screening worth asking a breeder for.",
    ],
  },
  cats: {
    lead: "Guides to 65 cat breeds, each with its origin, personality, grooming needs and the health problems the breed is known for.",
    body: [
      "Cat breeds differ most in energy, coat and how much company they want. Active, social breeds such as the Abyssinian and Siamese need daily play and dislike being alone; calmer breeds such as the British Shorthair and Ragdoll suit quieter homes.",
      "Each guide lists inherited conditions to ask a breeder about, such as heart screening for hypertrophic cardiomyopathy or DNA tests for polycystic kidney disease.",
    ],
  },
};

const GROUPS: { name: string; body: string }[] = [
  { name: "Herding Dogs", body: "Bred to move sheep and cattle. Clever, energetic and happiest with work to do." },
  { name: "Hound Dogs", body: "Scenthounds track by nose and sighthounds chase by sight. Both have strong instincts to follow." },
  { name: "Sporting Dogs", body: "Pointers, retrievers, setters and spaniels, bred to find and retrieve game. Friendly and active." },
  { name: "Terrier Dogs", body: "Bred to hunt vermin. Bold, quick and often keen diggers." },
  { name: "Working Dogs", body: "Guardians, sled and draft dogs. Strong and capable, and often need experienced handling." },
  { name: "Companion Dogs", body: "Bred mainly for company, from toy breeds to old non-sporting types." },
  { name: "Mixed Breed Dogs", body: "Crosses of two or more breeds. Each guide links to the parent breeds." },
];

export default async function AnimalBreedsPage({ params }: { params: Promise<{ animal: string }> }) {
  const { animal } = await params;
  const breeds = breedsByAnimal[animal];
  if (!breeds) notFound();
  const label = ANIMAL_LABELS[animal] ?? animal;
  const isCat = animal === "cats";
  const intro = INTRO[animal];

  const items: BreedListItem[] = (breeds as (BreedDoc | CatBreedDoc)[]).map((b) => ({
    slug: b.slug,
    name: b.name,
    image: b.image,
    group: isCat ? (b as CatBreedDoc).origin ?? "Other" : ((b as BreedDoc).group ?? "Other").replace(/^Hybrid Dogs$/, "Mixed Breed Dogs"),
    size: isCat ? null : (b as BreedDoc).size,
  }));

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${label} breeds`,
    description: intro?.lead,
    url: `https://hushku.app/breeds/${animal}`,
    mainEntity: { "@type": "ItemList", numberOfItems: items.length, itemListElement: items.slice(0, 50).map((b, i) => ({ "@type": "ListItem", position: i + 1, url: `https://hushku.app/breeds/${animal}/${b.slug}`, name: b.name })) },
  };

  return (
    <div className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="px-4 pt-10 pb-12 md:px-8 md:pt-16">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-6">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-label-2">
              <li><Link href="/breeds" className="hover:text-label hover:underline underline-offset-[3px]">Breeds</Link></li>
              <ChevronRight size={14} className="text-label-3" aria-hidden />
              <li aria-current="page" className="font-medium text-label">{label}</li>
            </ol>
          </nav>
          <p className="text-[15px] font-semibold text-brand-text">Breed directory</p>
          <h1 className="text-[40px] leading-[1.08] font-semibold tracking-[-0.02em] text-label md:text-[56px] md:leading-[1.05]">{isCat ? "Cat breeds" : "Dog breeds"}</h1>
          {intro ? <p className="max-w-[640px] text-[19px] leading-[1.45] text-label-2 md:text-[21px]">{intro.lead}</p> : null}
          <div className="flex flex-wrap gap-3">
            <Link href="/breeds/compare" className="inline-flex min-h-11 items-center rounded-full bg-label px-5 text-[15px] font-medium text-white hover:bg-label-2">Popular comparisons</Link>
            <Link href="/tools/breed-compare" className="inline-flex min-h-11 items-center rounded-full bg-surface px-5 text-[15px] font-medium text-label hover:bg-separator">Compare any two breeds</Link>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 md:px-8">
        <div className="mx-auto max-w-[1200px]">
          <BreedFilter animal={animal} breeds={items} groupLabel={isCat ? "Origin" : "Group"} />
        </div>
      </section>

      {intro ? (
        <section className="bg-bg-2 px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-2">
            <div className="flex flex-col gap-4">
              <h2 className="text-[26px] leading-[1.2] font-semibold tracking-[-0.01em] text-label">Choosing {isCat ? "a cat" : "a dog"} breed</h2>
              {intro.body.map((p) => <p key={p} className="text-[17px] leading-[28px] text-label-2">{p}</p>)}
            </div>
            {!isCat ? (
              <div className="flex flex-col gap-4">
                <h2 className="text-[26px] leading-[1.2] font-semibold tracking-[-0.01em] text-label">Breed groups</h2>
                <dl className="flex flex-col divide-y divide-separator border-y border-separator">
                  {GROUPS.map((g) => (
                    <div key={g.name} className="flex flex-col gap-1 py-4 sm:flex-row sm:gap-6">
                      <dt className="text-[17px] font-semibold text-label sm:w-48 sm:flex-none">{g.name.replace(/ Dogs$/, "")}</dt>
                      <dd className="text-[15px] leading-[22px] text-label-2">{g.body} <span className="text-label-3">{items.filter((i) => i.group === g.name).length} breeds.</span></dd>
                    </div>
                  ))}
                </dl>
              </div>
            ) : null}
          </div>
        </section>
      ) : null}
    </div>
  );
}
