import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { breedsByAnimal, getBreed } from "../data/breeds";

const DOG_COUNT = breedsByAnimal.dogs.length;
const CAT_COUNT = breedsByAnimal.cats.length;

export const metadata: Metadata = {
  title: `Dog & Cat Breed Directory: ${DOG_COUNT + CAT_COUNT} Breed Guides`,
  description: `Guides to ${DOG_COUNT} dog breeds and mixes and ${CAT_COUNT} cat breeds: history, temperament, exercise, grooming and the health problems each breed is known for.`,
  alternates: { canonical: "https://hushku.app/breeds" },
  openGraph: {
    title: "Dog & Cat Breed Directory",
    description: `Guides to ${DOG_COUNT + CAT_COUNT} dog and cat breeds, with history, temperament, care and breed health.`,
    type: "website",
    url: "https://hushku.app/breeds",
    images: [{ url: "https://hushku.app/og.png", width: 1200, height: 630, alt: "Dog and cat breed directory on Hushku" }],
  },
  twitter: { card: "summary_large_image", title: "Dog & Cat Breed Directory", description: `Guides to ${DOG_COUNT + CAT_COUNT} dog and cat breeds.`, images: ["https://hushku.app/og.png"] },
};

const POPULAR_DOGS = ["labrador-retriever", "french-bulldog", "golden-retriever", "german-shepherd-dog", "poodle", "dachshund", "beagle", "rottweiler", "bulldog", "cavalier-king-charles-spaniel", "border-collie", "cockapoo"];
const POPULAR_CATS = ["maine-coon", "ragdoll", "british-shorthair", "persian", "siamese", "bengal", "sphynx", "abyssinian"];

function Grid({ animal, slugs }: { animal: "dogs" | "cats"; slugs: string[] }) {
  return (
    <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
      {slugs.map((s) => getBreed(animal, s)).filter((b) => !!b).map((b) => (
        <li key={b!.slug}>
          <Link href={`/breeds/${animal}/${b!.slug}`} className="group flex flex-col gap-3">
            <span className="relative block aspect-[4/3] overflow-hidden rounded-2xl bg-surface">
              {b!.image ? <Image src={b!.image} alt={`${b!.name} ${animal === "cats" ? "cat" : "dog"}`} fill sizes="(min-width: 1024px) 180px, 45vw" className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" /> : null}
            </span>
            <span className="text-[17px] font-semibold text-label group-hover:underline underline-offset-[3px]">{b!.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function BreedsHubPage() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://hushku.app" },
        { "@type": "ListItem", position: 2, name: "Breeds", item: "https://hushku.app/breeds" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Dog and cat breed directory",
      description: `Guides to ${DOG_COUNT} dog breeds and mixes and ${CAT_COUNT} cat breeds.`,
      url: "https://hushku.app/breeds",
      publisher: { "@type": "Organization", name: "Hushku", url: "https://hushku.app" },
    },
  ];
  const h2 = "text-[26px] leading-[1.2] font-semibold tracking-[-0.01em] text-label";

  return (
    <div className="bg-white">
      {schema.map((s, i) => <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />)}

      <section className="px-4 pt-10 pb-12 md:px-8 md:pt-16">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-6">
          <p className="text-[15px] font-semibold text-brand-text">Breed directory</p>
          <h1 className="max-w-[16ch] text-[40px] leading-[1.08] font-semibold tracking-[-0.02em] text-label md:text-[64px] md:leading-[1.05]">Find the breed that fits your life.</h1>
          <p className="max-w-[640px] text-[19px] leading-[1.45] text-label-2 md:text-[21px]">
            {DOG_COUNT} dog breeds and mixes and {CAT_COUNT} cat breeds, each with its history, temperament, exercise and grooming needs, and the health problems it is known for.
          </p>
          <div className="grid gap-3 sm:grid-cols-2 md:max-w-[720px]">
            {[
              { href: "/breeds/dogs", title: "Dog breeds", meta: `${DOG_COUNT} guides, including mixes` },
              { href: "/breeds/cats", title: "Cat breeds", meta: `${CAT_COUNT} guides` },
            ].map((c) => (
              <Link key={c.href} href={c.href} className="flex items-center gap-3 rounded-3xl bg-surface p-5 transition-colors hover:bg-separator">
                <span className="flex-1"><span className="block text-[21px] font-semibold text-label">{c.title}</span><span className="text-[15px] text-label-2">{c.meta}</span></span>
                <ChevronRight size={20} className="text-label-3" aria-hidden />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 md:px-8">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-14">
          <div className="flex flex-col gap-6">
            <div className="flex items-end justify-between gap-4"><h2 className={h2}>Popular dog breeds</h2><Link href="/breeds/dogs" className="text-[17px] font-medium text-brand-text hover:underline underline-offset-[3px]">All dogs</Link></div>
            <Grid animal="dogs" slugs={POPULAR_DOGS} />
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex items-end justify-between gap-4"><h2 className={h2}>Popular cat breeds</h2><Link href="/breeds/cats" className="text-[17px] font-medium text-brand-text hover:underline underline-offset-[3px]">All cats</Link></div>
            <Grid animal="cats" slugs={POPULAR_CATS} />
          </div>
        </div>
      </section>

      <section className="bg-bg-2 px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-3">
          {[
            { t: "How our guides are written", b: "Each guide covers what the breed was bred for, how that shows up at home, and the inherited conditions vets and breed clubs flag. Ratings run from 1 to 5 and describe typical dogs and cats, not every individual.", l: { href: "/about/editorial", text: "Editorial standards" } },
            { t: "Compare before you choose", b: "Put two breeds side by side to see differences in size, energy, grooming and health at a glance.", l: { href: "/breeds/compare", text: "Popular comparisons" } },
            { t: "Thinking of adopting?", b: "Plenty of purebreds and mixes end up in rescues. A breed guide tells you what to expect; a rescue can tell you about the individual.", l: { href: "/adoption", text: "Adoption on Hushku" } },
          ].map((c) => (
            <div key={c.t} className="flex flex-col gap-3">
              <h2 className="text-[21px] font-semibold text-label">{c.t}</h2>
              <p className="text-[17px] leading-[26px] text-label-2">{c.b}</p>
              <Link href={c.l.href} className="inline-flex items-center gap-1 text-[17px] font-medium text-brand-text hover:underline underline-offset-[3px]">{c.l.text} <ChevronRight size={18} aria-hidden /></Link>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-12 md:px-8">
        <div className="mx-auto max-w-[1200px] text-[13px] leading-[20px] text-label-2">
          <p className="font-semibold text-label">Image credits</p>
          <p className="mt-1 max-w-[80ch]">
            Dog photos from the <a href="http://vision.stanford.edu/aditya86/ImageNetDogs/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-[3px]">Stanford Dogs Dataset</a> (Khosla, Jayadevaprakash, Yao and Fei-Fei, FGVC, CVPR 2011; Deng et al., ImageNet, CVPR 2009). Other images from Wikipedia under their Creative Commons licences.
          </p>
        </div>
      </section>
    </div>
  );
}
