import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { TOOLS, TOOL_CATEGORIES, TOOLS_REVIEWED } from "../data/tools";
import AppCta from "../components/AppCta";

const TITLE = "Free Pet Calculators & Tools for Dogs and Cats";
const DESC = "25 free pet tools: dog and cat calorie, feeding and water calculators, age in human years, puppy weight, vaccine schedule, toxic food checker and more. No sign-up.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "https://hushku.app/tools" },
  openGraph: { title: TITLE, description: DESC, type: "website", url: "https://hushku.app/tools", images: [{ url: "https://hushku.app/og.png", width: 1200, height: 630, alt: "Hushku free pet tools" }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC, images: ["https://hushku.app/og.png"] },
};

const CATEGORY_INTRO: Record<string, string> = {
  Health: "Check symptoms, weight, vaccines and what's safe to eat.",
  "Food and water": "How much to feed, how many calories and how much water.",
  "Puppies and breeding": "Growth, heat cycles and pregnancy dates.",
  Costs: "What insurance and pet sitters really cost.",
  Breeds: "Find and compare breeds that suit your life.",
  Everyday: "Exercise, age, travel and the fun stuff.",
};

export default function ToolsHubPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: TITLE,
    description: DESC,
    url: "https://hushku.app/tools",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: TOOLS.map((t, i) => ({ "@type": "ListItem", position: i + 1, url: `https://hushku.app/tools/${t.slug}`, name: t.h1 })),
    },
  };

  return (
    <div className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header className="px-4 pt-10 pb-8 md:px-8 md:pt-16">
        <div className="mx-auto flex max-w-[880px] flex-col gap-5">
          <h1 className="text-[34px] leading-[1.1] font-semibold tracking-[-0.02em] text-balance text-label md:text-[56px] md:leading-[1.05]">Free pet calculators and tools</h1>
          <p className="text-[19px] leading-[29px] text-label-2 md:text-[21px] md:leading-[31px]">
            {TOOLS.length} free tools for dog and cat owners. Each one explains how it works and where its numbers come from, such as the AAHA, WSAVA and ASPCA. No sign-up, and nothing you enter leaves your browser.
          </p>
          <nav aria-label="Tool categories">
            <ul className="flex flex-wrap gap-2">
              {TOOL_CATEGORIES.map((c) => (
                <li key={c}><a href={`#${c.toLowerCase().replace(/\s+/g, "-")}`} className="inline-flex min-h-11 items-center rounded-full bg-surface px-4 text-[15px] font-medium text-label hover:bg-separator">{c}</a></li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <div className="px-4 pb-16 md:px-8">
        <div className="mx-auto flex max-w-[1080px] flex-col gap-14">
          {TOOL_CATEGORIES.map((c) => (
            <section key={c} id={c.toLowerCase().replace(/\s+/g, "-")} aria-labelledby={`cat-${c}`} className="flex scroll-mt-24 flex-col gap-4">
              <div className="flex flex-col gap-1">
                <h2 id={`cat-${c}`} className="text-[26px] leading-[1.2] font-semibold text-label">{c}</h2>
                <p className="text-[17px] text-label-2">{CATEGORY_INTRO[c]}</p>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {TOOLS.filter((t) => t.category === c).map((t) => (
                  <li key={t.slug}>
                    <Link href={`/tools/${t.slug}`} className="group flex h-full flex-col gap-2 rounded-3xl bg-bg-2 p-5 transition-colors hover:bg-surface">
                      <span className="text-[26px] leading-none" aria-hidden>{t.emoji}</span>
                      <span className="text-[19px] leading-[24px] font-semibold text-label group-hover:underline underline-offset-[3px]">{t.h1}</span>
                      <span className="text-[15px] leading-[22px] text-label-2">{t.description.split(". ")[0].replace(/\.$/, "")}.</span>
                      <span className="mt-auto inline-flex items-center pt-2 text-[15px] font-medium text-brand-text">Open <ChevronRight size={16} aria-hidden /></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <AppCta eyebrow="Hushku is launching soon" title="Keep the results, not just the numbers" body="In the Hushku app you can log weight, vaccines, heat cycles and feeding routines for each pet, set reminders, and share it all with your household and sitter." source="tool:hub" link={{ href: "/health", label: "See health and care" }} />
          <p className="text-[13px] text-label-2">Tools reviewed {TOOLS_REVIEWED}. They give general information, not veterinary advice; if you&apos;re worried about your pet, call your vet.</p>
        </div>
      </div>
    </div>
  );
}
