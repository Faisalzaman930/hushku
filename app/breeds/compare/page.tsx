import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Section, SectionHeader } from "../../components/ui";
import { COMPARISONS } from "../../data/breeds/comparisons";

const TITLE = "Breed Comparisons: Dog & Cat Breeds Side by Side";
const DESC = "Popular dog and cat breed match-ups compared side by side: size, temperament, training, grooming and health, and which suits your home.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "https://hushku.app/breeds/compare" },
  openGraph: { title: `${TITLE} | Hushku`, description: DESC, type: "website", url: "https://hushku.app/breeds/compare", images: [{ url: "https://hushku.app/og.png", width: 1200, height: 630, alt: "Hushku: every pet app, one quiet place" }] },
  twitter: { card: "summary_large_image", title: `${TITLE} | Hushku`, description: DESC },
};

export default function CompareIndex() {
  const groups = [
    { title: "Dog breeds", list: COMPARISONS.filter((c) => c.animal === "dogs") },
    { title: "Cat breeds", list: COMPARISONS.filter((c) => c.animal === "cats") },
  ];
  return (
    <div className="bg-white">
      <Section className="!pt-10 md:!pt-16">
        <div className="flex flex-col gap-6">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 text-[13px] text-label-2">
              <li><Link href="/breeds" className="hover:text-label hover:underline underline-offset-[3px]">Breeds</Link></li>
              <ChevronRight size={14} className="text-label-3" aria-hidden />
              <li aria-current="page" className="font-medium text-label">Compare</li>
            </ol>
          </nav>
          <SectionHeader as="h1" size="l" align="start" eyebrow="Breed comparisons" title="Which breed is right for you?" lead={`${COMPARISONS.length} popular match-ups, side by side. Or compare any two breeds with the comparison tool.`}>
            <Link href="/tools/breed-compare" className="inline-flex items-center gap-1 text-[17px] font-medium text-brand-text hover:underline underline-offset-[3px]">
              Compare any two breeds <ChevronRight size={18} aria-hidden />
            </Link>
          </SectionHeader>
        </div>
      </Section>
      {groups.map((g, i) => (
        <Section key={g.title} alt={i === 0} className={i === 1 ? "" : undefined}>
          <div className="flex flex-col gap-6">
            <h2 className="text-[26px] leading-[1.2] font-semibold tracking-[-0.01em] text-label">{g.title}</h2>
            <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {g.list.map((c) => (
                <li key={c.slug}>
                  <Link href={`/breeds/compare/${c.slug}`} className="group flex min-h-14 items-center justify-between gap-3 rounded-2xl bg-white px-4 py-3 ring-1 ring-separator hover:bg-surface">
                    <span className="text-[15px] font-medium text-label">{c.a.name} <span className="text-label-3">vs</span> {c.b.name}</span>
                    <ChevronRight size={16} className="flex-none text-label-3" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      ))}
    </div>
  );
}
