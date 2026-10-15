import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Section } from "../components/ui";
import { CHECKED, COMPARE_PAGES } from "../data/compare";

const TITLE = "Pet App Comparisons and Alternatives";
const DESC = "Honest comparisons of pet care apps: alternatives to 11pets, DogLog, PetDesk and Petfinder, and how Hushku compares. Facts from App Store listings.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "https://hushku.app/compare" },
  openGraph: { title: TITLE, description: DESC, type: "website", url: "https://hushku.app/compare", images: [{ url: "https://hushku.app/og.png", width: 1200, height: 630, alt: "Hushku: every pet app, one quiet place" }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
};

export default function CompareIndex() {
  const groups = [
    { title: "Alternatives", items: COMPARE_PAGES.filter((c) => c.kind === "alternatives") },
    { title: "Hushku compared", items: COMPARE_PAGES.filter((c) => c.kind === "vs") },
  ];
  return (
    <div className="bg-white">
      <Section className="!pt-10 md:!pt-16">
        <div className="mx-auto flex max-w-[880px] flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-[34px] leading-[1.12] font-semibold tracking-[-0.018em] text-label md:text-[48px]">Compare pet apps</h1>
            <p className="text-[19px] leading-[29px] text-label-2">Straight comparisons of the apps people use to look after their pets. Facts about other apps come from their App Store listings, checked in {CHECKED}. Hushku makes one of these apps, and it hasn&apos;t launched yet; we say so on every page.</p>
          </div>
          {groups.map((g) => (
            <section key={g.title} className="flex flex-col gap-4">
              <h2 className="text-[26px] font-semibold text-label">{g.title}</h2>
              <ul className="flex flex-col border-t border-separator">
                {g.items.map((c) => (
                  <li key={c.slug} className="border-b border-separator">
                    <Link href={`/compare/${c.slug}`} className="group flex min-h-14 items-center gap-3 py-3 text-[17px] text-label">
                      <span className="flex-1"><span className="block font-medium group-hover:underline underline-offset-[3px]">{c.title}</span><span className="block text-[15px] text-label-2">{c.description}</span></span>
                      <ChevronRight size={18} className="flex-none text-label-3" aria-hidden />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
          <p className="text-[15px] text-label-2">Looking for a wider roundup? See <Link href="/resources/best-family-pet-care-apps" className="font-medium text-brand-text hover:underline underline-offset-[3px]">the best family pet care apps</Link> and <Link href="/resources/best-pet-care-apps" className="font-medium text-brand-text hover:underline underline-offset-[3px]">the best pet care apps</Link>.</p>
        </div>
      </Section>
    </div>
  );
}
