"use client";

import { articles } from "../data/articles";
import { guides } from "../data/guides";
import { howToArticles } from "../data/howto";
import { symptomArticles } from "../data/symptom-articles";
import { breedArticles } from "../data/breed-articles";
import { definitionArticles } from "../data/definition-articles";
import { pillarPages } from "../data/pillars";
import Link from "next/link";
import { useMemo, useState, useEffect, Suspense } from "react";
import type { LucideIcon } from "lucide-react";
import {
  AlertTriangle, ArrowRight, BookOpen, Calendar, ChevronRight, Dog, GraduationCap, Lightbulb,
  Map as MapIcon, PawPrint, Scale, Smartphone, Sparkles, Stethoscope, Trophy, UtensilsCrossed, Zap,
} from "lucide-react";

type ResourceCard = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  category: string;
  tags: string[];
  publishDate: string;
  readTime: string;
  type: "article" | "guide" | "how-to" | "symptom" | "breed" | "definition" | "pillar";
};

const TYPE_META: Record<ResourceCard["type"], { label: string; icon: LucideIcon }> = {
  "how-to":     { label: "How-to",         icon: Zap },
  "guide":      { label: "Expert guide",   icon: BookOpen },
  "pillar":     { label: "Complete guide", icon: MapIcon },
  "symptom":    { label: "Symptom guide",  icon: Stethoscope },
  "breed":      { label: "Breed guide",    icon: PawPrint },
  "definition": { label: "Glossary",       icon: Lightbulb },
  "article":    { label: "App review",     icon: Trophy },
};

function readTime(t: string) {
  return t.replace(/\bMin Read\b/i, "min read");
}

function SpokeCard({ r }: { r: ResourceCard }) {
  const m = TYPE_META[r.type];
  return (
    <article className="group relative flex flex-col gap-3 rounded-3xl bg-white p-6 ring-1 ring-separator transition-shadow duration-200 hover:shadow-[0_8px_24px_rgba(29,27,25,0.08)]">
      <div className="flex items-center justify-between gap-3">
        <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-brand-text">
          <m.icon size={16} strokeWidth={2} aria-hidden /> {m.label}
        </span>
        <span className="text-[13px] text-label-3">{readTime(r.readTime)}</span>
      </div>
      <h3 className="text-[17px] leading-[24px] font-semibold text-label">
        <Link href={`/resources/${r.slug}`} className="after:absolute after:inset-0 after:rounded-3xl after:content-[''] group-hover:underline underline-offset-[3px] decoration-separator">
          {r.title}
        </Link>
      </h3>
      {r.description ? <p className="line-clamp-2 text-[15px] leading-[22px] text-label-2">{r.description}</p> : null}
    </article>
  );
}

function HubCard({ r, articleCount }: { r: ResourceCard; articleCount: number }) {
  return (
    <Link
      href={`/resources/${r.slug}`}
      className="group flex h-full flex-col gap-3 rounded-3xl bg-white/[0.06] p-6 ring-1 ring-white/10 transition-colors hover:bg-white/[0.1]"
    >
      <span className="text-[13px] font-semibold text-[#FF7A90]">Complete guide</span>
      <h3 className="text-[19px] leading-[26px] font-semibold text-white">{r.shortTitle}</h3>
      <p className="line-clamp-2 flex-1 text-[15px] leading-[22px] text-white/65">{r.description}</p>
      <span className="flex items-center justify-between pt-2 text-[13px] text-white/55">
        {articleCount} articles · {readTime(r.readTime)}
        <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
      </span>
    </Link>
  );
}

function CrossRefPill({ r, inSection }: { r: ResourceCard; inSection: string }) {
  return (
    <Link
      href={`/resources/${r.slug}`}
      className="inline-flex min-h-9 items-center gap-2 rounded-full bg-surface px-3.5 text-[13px] transition-colors hover:bg-separator"
    >
      <span className="text-label-2">Also in {inSection}</span>
      <span className="font-semibold text-label">{r.shortTitle}</span>
    </Link>
  );
}

function ToolCallout({ icon: Icon, text, href }: { icon: LucideIcon; text: string; href: string }) {
  return (
    <Link href={href} className="group mt-6 flex items-center gap-3 rounded-2xl bg-brand-tint px-5 py-4 transition-colors hover:bg-[#FBDDE3]">
      <Icon size={20} strokeWidth={1.75} className="flex-none text-brand-text" aria-hidden />
      <span className="flex-1 text-[15px] font-semibold text-label">{text}</span>
      <ChevronRight size={18} className="flex-none text-brand-text transition-transform group-hover:translate-x-0.5" aria-hidden />
    </Link>
  );
}

const QUICK_TOOLS: { name: string; desc: string; href: string; icon: LucideIcon }[] = [
  { name: "Symptom checker",    desc: "Is it serious? A quick triage answer.",     href: "/tools/symptom-checker", icon: Stethoscope },
  { name: "Toxic food checker", desc: "Can my dog eat this? Check in seconds.",    href: "/tools/toxic-food",       icon: AlertTriangle },
  { name: "Breed compare",      desc: "Any two breeds, side by side.",             href: "/tools/breed-compare",    icon: Scale },
  { name: "Dog age calculator", desc: "Your dog’s age in human years.",            href: "/tools/age-calculator",   icon: Calendar },
];

function QuickToolsStrip() {
  return (
    <section className="px-4 py-12 md:px-8" aria-labelledby="quick-tools-heading">
      <div className="mx-auto max-w-[1200px]">
        <h2 id="quick-tools-heading" className="mb-5 text-[15px] font-semibold text-brand-text">Free tools for quick answers</h2>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {QUICK_TOOLS.map((t) => (
            <Link key={t.href} href={t.href} className="group flex flex-col gap-2 rounded-3xl bg-surface p-5 transition-colors hover:bg-separator">
              <t.icon size={24} strokeWidth={1.75} className="text-brand-text" aria-hidden />
              <p className="text-[17px] leading-[22px] font-semibold text-label">{t.name}</p>
              <p className="line-clamp-2 text-[13px] leading-[18px] text-label-2">{t.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CollectionPage JSON-LD (item 6) ────────────────────────────────────────────

function CollectionPageSchema({ items }: { items: ResourceCard[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Pet Care Resource Library",
    "description": "Evidence-based how-to guides, breed profiles, symptom references, and expert nutrition advice for dog and cat owners.",
    "url": "https://hushku.app/resources",
    "publisher": {
      "@type": "Organization",
      "name": "Hushku",
      "url": "https://hushku.app",
      "logo": { "@type": "ImageObject", "url": "https://hushku.app/icon.svg" },
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://hushku.app" },
        { "@type": "ListItem", "position": 2, "name": "Resources", "item": "https://hushku.app/resources" },
      ],
    },
    "mainEntity": {
      "@type": "ItemList",
      "name": "Pet Care Guides and Articles",
      "numberOfItems": items.length,
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.title,
        "url": `https://hushku.app/resources/${item.slug}`,
      })),
    },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}

type ClusterDef = {
  id: string;
  label: string;
  icon: LucideIcon;
  description: string;
  filter: (r: ResourceCard) => boolean;
};

const CLUSTERS: ClusterDef[] = [
  {
    id: "new-pet",
    label: "New pet and adoption",
    icon: Sparkles,
    description: "Welcoming a new dog or cat: the first weeks, rescue and fostering.",
    filter: (r) =>
      r.tags.some(t => ["Puppies", "Adoption", "New Pet"].includes(t)) ||
      ["3-3-3-rule-for-rescue-dogs", "first-time-dog-owner-complete-guide",
       "complete-guide-to-puppy-care", "how-to-introduce-new-pet-to-resident-pets",
       "introducing-pets-to-each-other", "logistics-and-heartbreak-foster-parent-manual"].includes(r.slug),
  },
  {
    id: "training",
    label: "Training and behaviour",
    icon: GraduationCap,
    description: "Science-backed methods, from crate training to leash reactivity.",
    filter: (r) =>
      r.tags.some(t => ["Training", "Behavior", "Housetraining"].includes(t)) ||
      ["complete-guide-to-dog-training", "puppy-socialization-masterclass"].includes(r.slug),
  },
  {
    id: "nutrition",
    label: "Nutrition and feeding",
    icon: UtensilsCrossed,
    description: "Reading labels, AAFCO standards, switching foods and choosing the right diet.",
    filter: (r) =>
      r.tags.some(t => ["Nutrition", "Feeding", "Pet Food"].includes(t)) ||
      r.slug === "complete-guide-to-pet-nutrition",
  },
  {
    id: "health",
    label: "Health and symptoms",
    icon: Stethoscope,
    description: "Recognise symptoms, understand conditions and know when to call a vet.",
    filter: (r) =>
      r.type === "symptom" ||
      r.slug === "complete-guide-to-pet-health" ||
      r.slug === "senior-pet-care-guide" ||
      (r.type === "definition" && r.tags.some(t =>
        ["Respiratory", "Infectious Disease", "Dog Health", "Cat Health"].includes(t)
      )),
  },
  {
    id: "breeds",
    label: "Breed profiles",
    icon: Dog,
    description: "In-depth guides to traits, health risks and care needs.",
    filter: (r) => r.type === "breed",
  },
  {
    id: "reviews",
    label: "App reviews",
    icon: Smartphone,
    description: "Pet apps for walking, vets, GPS and more, compared.",
    filter: (r) => r.type === "article",
  },
];

function ResourcesHubContent() {
  const [activeCluster, setActiveCluster] = useState<string>("all");
  const [activeSection, setActiveSection] = useState<string>("");

  const allResources: ResourceCard[] = useMemo(() => [
    ...pillarPages.map(p => ({ slug: p.slug, title: p.title, shortTitle: p.shortTitle, description: p.seoDescription, category: p.category, tags: p.tags, publishDate: p.publishDate, readTime: p.readTime, type: "pillar" as const })),
    ...guides.map(g => ({ slug: g.slug, title: g.title, shortTitle: g.shortTitle, description: g.seoDescription, category: g.category, tags: g.tags, publishDate: g.publishDate, readTime: g.readTime, type: "guide" as const })),
    ...howToArticles.map(a => ({ slug: a.slug, title: a.title, shortTitle: a.shortTitle, description: a.seoDescription, category: a.category, tags: a.tags, publishDate: a.publishDate, readTime: a.readTime, type: "how-to" as const })),
    ...symptomArticles.map(a => ({ slug: a.slug, title: a.title, shortTitle: a.shortTitle, description: a.seoDescription, category: a.category, tags: a.tags, publishDate: a.publishDate, readTime: a.readTime, type: "symptom" as const })),
    ...breedArticles.map(a => ({ slug: a.slug, title: a.title, shortTitle: a.shortTitle, description: a.seoDescription, category: a.category, tags: a.tags, publishDate: a.publishDate, readTime: a.readTime, type: "breed" as const })),
    ...definitionArticles.map(a => ({ slug: a.slug, title: a.title, shortTitle: a.shortTitle, description: a.seoDescription, category: a.category, tags: a.tags, publishDate: a.publishDate, readTime: a.readTime, type: "definition" as const })),
    ...articles.map(a => ({ slug: a.slug, title: a.title, shortTitle: a.shortTitle, description: a.seoDescription, category: a.category, tags: ["App Reviews"], publishDate: a.publishDate, readTime: "18 min read", type: "article" as const })),
  ], []);

  // Pillar article counts from source data
  const pillarCounts = useMemo(
    () => Object.fromEntries(pillarPages.map(p => [p.slug, p.clusterArticles.length])),
    []
  );

  // Item 7: first-section map for duplicate detection
  // Pillar slugs are pre-seeded as "Complete Topic Guides" (shown in hub section above clusters)
  const slugFirstSection = useMemo(() => {
    const map = new Map<string, string>();
    allResources.filter(r => r.type === "pillar").forEach(r => map.set(r.slug, "Complete Topic Guides"));
    CLUSTERS.forEach(c => {
      allResources.filter(c.filter).forEach(r => {
        if (!map.has(r.slug)) map.set(r.slug, c.label);
      });
    });
    return map;
  }, [allResources]);

  // Item 11: scrollspy — update active section highlight in "all" view
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id.replace("section-", "");
            setActiveSection(id);
          }
        });
      },
      { rootMargin: "-20% 0px -65% 0px" }
    );
    CLUSTERS.forEach(c => {
      const el = document.getElementById(`section-${c.id}`);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const pill = (active: boolean) =>
    `inline-flex min-h-9 flex-none items-center gap-1.5 whitespace-nowrap rounded-full px-4 text-[15px] font-medium transition-colors ${active ? "bg-label text-white" : "text-label-2 hover:bg-surface"}`;

  return (
    <div className="bg-white">
      <CollectionPageSchema items={allResources} />

      <header className="px-4 pt-10 pb-12 md:px-8 md:pt-16">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-5">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-[13px] text-label-2">
              <li><Link href="/" className="hover:text-label hover:underline underline-offset-[3px]">Home</Link></li>
              <ChevronRight size={14} className="text-label-3" aria-hidden />
              <li aria-current="page" className="font-medium text-label">Resources</li>
            </ol>
          </nav>
          <p className="text-[15px] font-semibold text-brand-text">Pet care library</p>
          <h1 className="max-w-[18ch] text-[40px] leading-[1.08] font-semibold tracking-[-0.02em] text-balance text-label md:text-[56px] md:leading-[1.05] md:tracking-[-0.022em]">
            Pet care guides, how-tos and breed profiles.
          </h1>
          <p className="max-w-[640px] text-[19px] leading-[1.45] text-label-2">
            Practical how-to guides, breed profiles, symptom references and nutrition advice for dog and cat owners. Free, no sign-up.
          </p>
          <p className="text-[13px] text-label-2">
            Written and reviewed by the{" "}
            <a href="#editorial-standards" className="font-medium text-brand-text hover:underline underline-offset-[3px]">Hushku editorial team</a>. Reviewed for accuracy and updated regularly.
          </p>
          <dl className="mt-3 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3 lg:grid-cols-5">
            {[
              { n: howToArticles.length + guides.length, label: "How-to guides", href: "#section-training" },
              { n: breedArticles.length, label: "Breed profiles", href: "#section-breeds" },
              { n: articles.length, label: "App reviews", href: "#section-reviews" },
              { n: symptomArticles.length + definitionArticles.length, label: "Health references", href: "#section-health" },
              { n: pillarPages.length, label: "Complete guides", href: "#complete-guides" },
            ].map((s) => (
              <a key={s.label} href={s.href} className="group flex flex-col-reverse gap-0.5">
                <dt className="text-[15px] text-label-2 group-hover:text-label">{s.label}</dt>
                <dd className="text-[32px] leading-[38px] font-semibold tracking-[-0.015em] text-label tabular-nums">{s.n}</dd>
              </a>
            ))}
          </dl>
        </div>
      </header>

      <nav className="sticky top-14 md:top-[52px] z-40 border-y border-separator bg-white/[0.85] backdrop-blur-[20px] backdrop-saturate-[1.8]" aria-label="Topic filter">
        <div className="mx-auto max-w-[1200px] px-4 md:px-8">
          <div className="scrollbar-hide flex gap-1 overflow-x-auto py-2.5">
            <button type="button" onClick={() => { setActiveCluster("all"); setActiveSection(""); }} aria-pressed={activeCluster === "all"} className={pill(activeCluster === "all")}>
              All <span className="tabular-nums opacity-60">{allResources.length}</span>
            </button>
            {CLUSTERS.map((c) => {
              const count = allResources.filter(c.filter).length;
              const isActive = activeCluster === c.id || (activeCluster === "all" && activeSection === c.id);
              return (
                <button key={c.id} type="button" onClick={() => { setActiveCluster(c.id); setActiveSection(""); }} aria-pressed={activeCluster === c.id} className={pill(isActive)}>
                  {c.label} <span className="tabular-nums opacity-60">{count}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      <div>
        <QuickToolsStrip />

        <section id="complete-guides" className="bg-[#0F0E0D] px-4 py-16 md:px-8 md:py-24" aria-labelledby="complete-guides-heading">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-8">
            <div className="flex flex-col gap-2">
              <p className="text-[15px] font-semibold text-[#FF7A90]">Start here</p>
              <h2 id="complete-guides-heading" className="text-[32px] leading-[1.15] font-semibold tracking-[-0.015em] text-white md:text-[40px]">Complete topic guides.</h2>
              <p className="text-[17px] text-white/65">Everything about a topic, in one place.</p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {allResources.filter((r) => r.type === "pillar").map((r) => (
                <HubCard key={r.slug} r={r} articleCount={pillarCounts[r.slug] ?? 0} />
              ))}
            </div>
          </div>
        </section>

        {CLUSTERS.map((cluster, ci) => {
          const clusterItems = allResources.filter(cluster.filter);
          if (clusterItems.length === 0) return null;
          const isHidden = activeCluster !== "all" && activeCluster !== cluster.id;
          const firstItems = clusterItems.filter((r) => slugFirstSection.get(r.slug) === cluster.label);
          const dupItems = clusterItems.filter((r) => slugFirstSection.get(r.slug) !== cluster.label);
          const visible = firstItems.slice(0, 6);
          const overflow = firstItems.slice(6);

          return (
            <section
              key={cluster.id}
              id={`section-${cluster.id}`}
              aria-labelledby={`cluster-${cluster.id}-heading`}
              className={ci % 2 === 0 ? "bg-white" : "bg-bg-2"}
              style={isHidden ? { maxHeight: 0, overflow: "hidden" } : { paddingTop: "4rem", paddingBottom: "4rem" }}
            >
              <div className="mx-auto max-w-[1200px] px-4 md:px-8">
                <div className="mb-8 flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <span className="grid h-12 w-12 flex-none place-items-center rounded-[14px] bg-brand-tint text-brand-text" aria-hidden>
                      <cluster.icon size={24} strokeWidth={1.75} />
                    </span>
                    <div>
                      <h2 id={`cluster-${cluster.id}-heading`} className="text-[26px] leading-[1.2] font-semibold tracking-[-0.01em] text-label md:text-[28px]">
                        {cluster.label}
                      </h2>
                      <p className="mt-1 text-[15px] text-label-2">{cluster.description}</p>
                    </div>
                  </div>
                  <button type="button" onClick={() => setActiveCluster(cluster.id)} className="mt-1 inline-flex flex-none items-center gap-1 whitespace-nowrap text-[15px] font-medium text-brand-text hover:underline underline-offset-[3px]">
                    All {clusterItems.length} <ChevronRight size={16} aria-hidden />
                  </button>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {visible.map((r) => <SpokeCard key={r.slug} r={r} />)}
                </div>

                {dupItems.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {dupItems.map((r) => (
                      <CrossRefPill key={r.slug} r={r} inSection={slugFirstSection.get(r.slug) ?? ""} />
                    ))}
                  </div>
                )}

                {cluster.id === "health" && <ToolCallout icon={Stethoscope} text="Not sure if it’s serious? Try the symptom checker" href="/tools/symptom-checker" />}
                {cluster.id === "nutrition" && <ToolCallout icon={AlertTriangle} text="Can my dog eat this? Try the toxic food checker" href="/tools/toxic-food" />}
                {cluster.id === "breeds" && <ToolCallout icon={Scale} text="Compare two breeds side by side" href="/tools/breed-compare" />}

                {overflow.length > 0 && (
                  <div className="sr-only" aria-hidden="true">
                    {overflow.map((r) => (
                      <Link key={r.slug} href={`/resources/${r.slug}`} tabIndex={-1}>{r.title}</Link>
                    ))}
                  </div>
                )}
                {dupItems.length > 0 && (
                  <div className="sr-only" aria-hidden="true">
                    {dupItems.map((r) => (
                      <Link key={`dup-${r.slug}`} href={`/resources/${r.slug}`} tabIndex={-1}>{r.title}</Link>
                    ))}
                  </div>
                )}
              </div>
            </section>
          );
        })}

        <section id="editorial-standards" className="border-t border-separator bg-white px-4 py-16 md:px-8">
          <div className="mx-auto flex max-w-[720px] flex-col gap-4">
            <h2 className="text-[26px] leading-[1.2] font-semibold tracking-[-0.01em] text-label">Editorial standards</h2>
            <p className="text-[15px] leading-[24px] text-label-2">
              Articles on Hushku are researched and written by our editorial team, which includes pet owners, trainers and contributors with direct experience in animal care. Health and symptom content is checked against published veterinary sources (AVMA, ASPCA and peer-reviewed literature) before publication.
            </p>
            <p className="text-[15px] leading-[24px] text-label-2">
              <strong className="font-semibold text-label">App reviews disclosure:</strong> Hushku makes a pet care app and appears alongside other apps in our app reviews. We say so on every review page, and apply the same criteria to every app, including our own.
            </p>
            <p className="text-[15px] leading-[24px] text-label-2">
              We update content when products change, veterinary guidance is revised or readers spot a mistake. Found an error?{" "}
              <a href="mailto:hello@hushku.app?subject=Correction" className="font-medium text-brand-text hover:underline underline-offset-[3px]">Email hello@hushku.app</a>.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default function ResourcesHubPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <ResourcesHubContent />
    </Suspense>
  );
}
