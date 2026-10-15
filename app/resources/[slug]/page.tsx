import { metaDesc, searchTitle, shortTitle } from "../../lib/seo";
import { articles } from "../../data/articles";
import { guides } from "../../data/guides";
import { howToArticles } from "../../data/howto";
import { symptomArticles } from "../../data/symptom-articles";
import { breedArticles } from "../../data/breed-articles";
import { definitionArticles } from "../../data/definition-articles";
import { pillarPages } from "../../data/pillars";
import BlogLayout from "../../components/BlogLayout";
import GuideLayout from "../../components/GuideLayout";
import HowToLayout from "../../components/HowToLayout";
import SymptomLayout from "../../components/SymptomLayout";
import BreedLayout from "../../components/BreedLayout";
import DefinitionLayout from "../../components/DefinitionLayout";
import PillarLayout from "../../components/PillarLayout";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { extrasFor } from "../../data/article-extras";

/** Only the articles listed below exist; anything else is a real 404. */
export const dynamicParams = false;

export async function generateStaticParams() {
  return [
    ...articles.map((a) => ({ slug: a.slug })),
    ...guides.map((g) => ({ slug: g.slug })),
    ...howToArticles.map((a) => ({ slug: a.slug })),
    ...symptomArticles.map((a) => ({ slug: a.slug })),
    ...breedArticles.map((a) => ({ slug: a.slug })),
    ...definitionArticles.map((a) => ({ slug: a.slug })),
    ...pillarPages.map((p) => ({ slug: p.slug })),
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const canonicalUrl = `https://hushku.app/resources/${slug}`;
  const ogImage = [{ url: "https://hushku.app/og.png", width: 1200, height: 630 }];

  const article = articles.find((a) => a.slug === slug);
  if (article) {
    return {
      title: searchTitle(article.seoTitle || article.title),
      description: metaDesc(article.seoDescription),
      alternates: { canonical: canonicalUrl },
      openGraph: {
        title: shortTitle(article.seoTitle || article.title, 60),
        description: metaDesc(article.seoDescription),
        type: "article",
        url: canonicalUrl,
        images: ogImage,
        publishedTime: isoDate(article.publishDate),
        modifiedTime: isoDate(extrasFor(article.slug).updated ?? article.lastUpdated),
      },
      twitter: { card: "summary_large_image", title: shortTitle(article.seoTitle || article.title, 60), description: metaDesc(article.seoDescription), images: [ogImage[0].url] },
    };
  }

  const guide = guides.find((g) => g.slug === slug);
  if (guide) {
    return {
      title: searchTitle(guide.seoTitle || guide.title),
      description: metaDesc(guide.seoDescription),
      alternates: { canonical: canonicalUrl },
      openGraph: {
        title: shortTitle(guide.seoTitle || guide.title, 60),
        description: metaDesc(guide.seoDescription),
        type: "article",
        url: canonicalUrl,
        images: ogImage,
        publishedTime: isoDate(guide.publishDate),
        modifiedTime: isoDate(extrasFor(guide.slug).updated ?? guide.lastUpdated),
      },
      twitter: { card: "summary_large_image", title: shortTitle(guide.seoTitle || guide.title, 60), description: metaDesc(guide.seoDescription), images: [ogImage[0].url] },
    };
  }

  const howTo = howToArticles.find((a) => a.slug === slug);
  if (howTo) {
    return {
      title: searchTitle(howTo.seoTitle || howTo.title),
      description: metaDesc(howTo.seoDescription),
      alternates: { canonical: canonicalUrl },
      openGraph: {
        title: shortTitle(howTo.seoTitle || howTo.title, 60),
        description: metaDesc(howTo.seoDescription),
        type: "article",
        url: canonicalUrl,
        images: ogImage,
        publishedTime: isoDate(howTo.publishDate),
        modifiedTime: isoDate(extrasFor(howTo.slug).updated ?? howTo.lastUpdated),
      },
      twitter: { card: "summary_large_image", title: shortTitle(howTo.seoTitle || howTo.title, 60), description: metaDesc(howTo.seoDescription), images: [ogImage[0].url] },
    };
  }

  const symptom = symptomArticles.find((a) => a.slug === slug);
  if (symptom) {
    return {
      title: searchTitle(symptom.seoTitle || symptom.title),
      description: metaDesc(symptom.seoDescription),
      alternates: { canonical: canonicalUrl },
      openGraph: {
        title: shortTitle(symptom.seoTitle || symptom.title, 60),
        description: metaDesc(symptom.seoDescription),
        type: "article",
        url: canonicalUrl,
        images: ogImage,
        publishedTime: isoDate(symptom.publishDate),
        modifiedTime: isoDate(extrasFor(symptom.slug).updated ?? symptom.lastUpdated),
      },
      twitter: { card: "summary_large_image", title: shortTitle(symptom.seoTitle || symptom.title, 60), description: metaDesc(symptom.seoDescription), images: [ogImage[0].url] },
    };
  }

  const breed = breedArticles.find((a) => a.slug === slug);
  if (breed) {
    return {
      title: searchTitle(breed.seoTitle || breed.title),
      description: metaDesc(breed.seoDescription),
      alternates: { canonical: canonicalUrl },
      openGraph: {
        title: shortTitle(breed.seoTitle || breed.title, 60),
        description: metaDesc(breed.seoDescription),
        type: "article",
        url: canonicalUrl,
        images: ogImage,
        publishedTime: isoDate(breed.publishDate),
        modifiedTime: isoDate(extrasFor(breed.slug).updated ?? breed.lastUpdated),
      },
      twitter: { card: "summary_large_image", title: shortTitle(breed.seoTitle || breed.title, 60), description: metaDesc(breed.seoDescription), images: [ogImage[0].url] },
    };
  }

  const definition = definitionArticles.find((a) => a.slug === slug);
  if (definition) {
    return {
      title: searchTitle(definition.seoTitle || definition.title),
      description: metaDesc(definition.seoDescription),
      alternates: { canonical: canonicalUrl },
      openGraph: {
        title: shortTitle(definition.seoTitle || definition.title, 60),
        description: metaDesc(definition.seoDescription),
        type: "article",
        url: canonicalUrl,
        images: ogImage,
        publishedTime: isoDate(definition.publishDate),
        modifiedTime: isoDate(extrasFor(definition.slug).updated ?? definition.lastUpdated),
      },
      twitter: { card: "summary_large_image", title: shortTitle(definition.seoTitle || definition.title, 60), description: metaDesc(definition.seoDescription), images: [ogImage[0].url] },
    };
  }

  const pillar = pillarPages.find((p) => p.slug === slug);
  if (pillar) {
    return {
      title: searchTitle(pillar.seoTitle || pillar.title),
      description: metaDesc(pillar.seoDescription),
      alternates: { canonical: canonicalUrl },
      openGraph: {
        title: shortTitle(pillar.seoTitle || pillar.title, 60),
        description: metaDesc(pillar.seoDescription),
        type: "article",
        url: canonicalUrl,
        images: ogImage,
        publishedTime: isoDate(pillar.publishDate),
        modifiedTime: isoDate(extrasFor(pillar.slug).updated ?? pillar.lastUpdated),
      },
      twitter: { card: "summary_large_image", title: shortTitle(pillar.seoTitle || pillar.title, 60), description: metaDesc(pillar.seoDescription), images: [ogImage[0].url] },
    };
  }

  return { title: "Page not found", robots: { index: false } };
}

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const MONTHS = ["january","february","march","april","may","june","july","august","september","october","november","december"];
/** "April 2026" or "2026-04-12" → ISO date; falls back to the input. */
function isoDate(d: string) {
  if (/^\d{4}-\d{2}-\d{2}/.test(d)) return d.slice(0, 10);
  const m = d.toLowerCase().match(/([a-z]+)\s+(\d{4})/);
  if (m && MONTHS.includes(m[1])) return `${m[2]}-${String(MONTHS.indexOf(m[1]) + 1).padStart(2, "0")}-01`;
  return d;
}

function buildArticleSchema(item: { title: string; seoDescription: string; publishDate: string; lastUpdated: string; slug: string; shortTitle: string }, type: "Article" | "MedicalWebPage" = "Article") {
  const x = extrasFor(item.slug);
  return {
    "@context": "https://schema.org",
    "@type": type,
    "headline": item.title,
    "description": item.seoDescription,
    "datePublished": isoDate(item.publishDate),
    "dateModified": isoDate(x.updated ?? item.lastUpdated),
    "image": "https://hushku.app/og.png",
    "inLanguage": "en",
    ...(type === "MedicalWebPage" ? { "lastReviewed": isoDate(x.updated ?? item.lastUpdated) } : {}),
    ...(x.sources?.length ? { "citation": x.sources.map((s) => ({ "@type": "CreativeWork", "name": s.label, "url": s.url })) } : {}),
    "author": { "@type": "Organization", "name": "Hushku Editorial Team", "url": "https://hushku.app/about/editorial" },
    "publisher": {
      "@type": "Organization",
      "name": "Hushku",
      "url": "https://hushku.app",
      "logo": { "@type": "ImageObject", "url": "https://hushku.app/icon.svg" },
    },
    "mainEntityOfPage": { "@type": "WebPage", "@id": `https://hushku.app/resources/${item.slug}` },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://hushku.app" },
        { "@type": "ListItem", "position": 2, "name": "Guides", "item": "https://hushku.app/resources" },
        { "@type": "ListItem", "position": 3, "name": item.shortTitle, "item": `https://hushku.app/resources/${item.slug}` },
      ],
    },
  };
}

function buildFaqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a },
    })),
  };
}

function buildPillarHowToSchema(pillar: (typeof pillarPages)[0]) {
  // Only emit HowTo for pillar pages that have a foundational "how to" chapter
  const howToChapter = pillar.chapters.find(
    (ch) => ch.anchorId === "foundational-commands" || ch.title.toLowerCase().includes("foundational")
  );
  if (!howToChapter) return null;

  // Extract the named steps from the chapter title list
  const stepNames: { name: string; text: string }[] = [
    { name: "Sit", text: "Lure from nose upward — the dog's hindquarters naturally drop. Mark the instant they touch the floor, then reward. Add the verbal cue only after the behavior is reliable." },
    { name: "Stay", text: "Build stay by extending three dimensions incrementally: duration (seconds to minutes), distance (one foot to across the room), and distraction (quiet room to outdoors). Always release with a consistent word." },
    { name: "Come (Recall)", text: "Never call your dog for anything unpleasant. The word 'come' must always predict something wonderful. Practice in low-distraction settings first, then gradually add challenges. Use the highest-value treats for recall." },
    { name: "Leave It", text: "Start with treats in a closed fist. When the dog stops nosing and moves away, mark and reward from the other hand. Progress to treats on the floor, then dropped items in the real world." },
    { name: "Loose-Leash Walking", text: "The rule is absolute: the leash never tightens from pulling and still results in forward movement. Every time the leash goes tight, stop or change direction until the dog returns to your side." },
  ];

  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Train a Dog: The 5 Foundational Behaviors",
    "description": "The five behaviors every dog must know — sit, stay, come, leave it, and loose-leash walking — taught using positive reinforcement.",
    "step": stepNames.map((s, i) => ({
      "@type": "HowToStep",
      "position": i + 1,
      "name": s.name,
      "text": s.text,
    })),
  };
}

function buildHowToSchema(article: (typeof howToArticles)[0]) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": article.title,
    "description": article.seoDescription,
    "step": article.steps.map((step) => ({
      "@type": "HowToStep",
      "position": step.number,
      "name": step.title,
      "text": step.content,
    })),
    ...(article.supplies
      ? {
          "supply": article.supplies.map((s) => ({
            "@type": "HowToSupply",
            "name": s.item,
          })),
        }
      : {}),
  };
}

export default async function ResourcePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const article = articles.find((a) => a.slug === slug);
  if (article) {
    const faqSchema = article.faqs?.length ? buildFaqSchema(article.faqs) : null;
    return (
      <>
        <JsonLd data={buildArticleSchema(article)} />
        {faqSchema && <JsonLd data={faqSchema} />}
        <BlogLayout article={article} allArticles={articles} />
      </>
    );
  }

  const guide = guides.find((g) => g.slug === slug);
  if (guide) {
    return (
      <>
        <JsonLd data={buildArticleSchema(guide)} />
        {guide.faqs?.length ? <JsonLd data={buildFaqSchema(guide.faqs)} /> : null}
        <GuideLayout guide={guide} />
      </>
    );
  }

  const howTo = howToArticles.find((a) => a.slug === slug);
  if (howTo) {
    return (
      <>
        <JsonLd data={buildArticleSchema(howTo)} />
        <JsonLd data={buildHowToSchema(howTo)} />
        {howTo.faqs?.length ? <JsonLd data={buildFaqSchema(howTo.faqs)} /> : null}
        <HowToLayout article={howTo} />
      </>
    );
  }

  const symptom = symptomArticles.find((a) => a.slug === slug);
  if (symptom) {
    return (
      <>
        <JsonLd data={buildArticleSchema(symptom, "MedicalWebPage")} />
        {symptom.faqs?.length ? <JsonLd data={buildFaqSchema(symptom.faqs)} /> : null}
        <SymptomLayout article={symptom} />
      </>
    );
  }

  const breed = breedArticles.find((a) => a.slug === slug);
  if (breed) {
    return (
      <>
        <JsonLd data={buildArticleSchema(breed)} />
        {breed.faqs?.length ? <JsonLd data={buildFaqSchema(breed.faqs)} /> : null}
        <BreedLayout article={breed} />
      </>
    );
  }

  const definition = definitionArticles.find((a) => a.slug === slug);
  if (definition) {
    return (
      <>
        <JsonLd data={buildArticleSchema(definition, "MedicalWebPage")} />
        {definition.faqs?.length ? <JsonLd data={buildFaqSchema(definition.faqs)} /> : null}
        <DefinitionLayout article={definition} />
      </>
    );
  }

  const pillar = pillarPages.find((p) => p.slug === slug);
  if (pillar) {
    const pillarHowTo = buildPillarHowToSchema(pillar);
    return (
      <>
        <JsonLd data={buildArticleSchema(pillar)} />
        {pillar.faqs?.length ? <JsonLd data={buildFaqSchema(pillar.faqs)} /> : null}
        {pillarHowTo && <JsonLd data={pillarHowTo} />}
        <PillarLayout page={pillar} />
      </>
    );
  }

  notFound();
}
