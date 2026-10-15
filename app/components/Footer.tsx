import Link from "next/link";
import { HushkuLogo } from "./Logo";

const COLUMNS: { title: string; links: { name: string; href: string }[] }[] = [
  {
    title: "Features",
    links: [
      { name: "Playdates", href: "/playdates" },
      { name: "Adoption", href: "/adoption" },
      { name: "Fostering", href: "/fostering" },
      { name: "Shelters", href: "/shelters" },
      { name: "Lost & found", href: "/lost-and-found" },
      { name: "Care Team", href: "/care-team" },
      { name: "Health & care", href: "/health" },
      { name: "Social feed", href: "/social" },
    ],
  },
  {
    title: "Free tools",
    links: [
      { name: "Pet age calculator", href: "/tools/age-calculator" },
      { name: "Toxic food checker", href: "/tools/toxic-food" },
      { name: "Symptom checker", href: "/tools/symptom-checker" },
      { name: "Breed compare", href: "/tools/breed-compare" },
      { name: "Pet sitter cost", href: "/tools/pet-sitter-cost" },
      { name: "All tools", href: "/tools" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "Help Center", href: "/help-center" },
      { name: "Playdate guide", href: "/help-center/playdate-matching" },
      { name: "Adoption guide", href: "/help-center/adoption-fostering" },
      { name: "Lost & found guide", href: "/help-center/lost-and-found" },
      { name: "Care Team guide", href: "/help-center/care-team" },
      { name: "Health & care guide", href: "/help-center/health-care" },
      { name: "Messaging guide", href: "/help-center/messaging" },
    ],
  },
  {
    title: "Hushku",
    links: [
      { name: "About", href: "/about" },
      { name: "Roadmap", href: "/roadmap" },
      { name: "Join the waitlist", href: "/join" },
      { name: "Volunteer", href: "/about#volunteer" },
      { name: "Breeds", href: "/breeds" },
      { name: "Resources", href: "/resources" },
      { name: "Templates", href: "/templates" },
      { name: "Compare apps", href: "/compare" },
      { name: "Editorial standards", href: "/about/editorial" },
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-bg-2 px-4 pt-16 pb-8 md:px-8">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col gap-10 border-b border-separator pb-10 lg:flex-row lg:justify-between">
          <div className="flex max-w-[300px] flex-col items-start gap-3 text-brand">
            <Link href="/" aria-label="Hushku home">
              <HushkuLogo variant="horizontal" className="h-6 w-auto" title="" />
            </Link>
            <p className="text-[15px] leading-[22px] text-label-2">
              The free app for dogs, cats and the people who love them. Built by two pet owners, Faizan and Faisal.
            </p>
            <p className="text-[15px] leading-[22px] text-label-2">
              Questions? <a href="mailto:hello@hushku.app" className="font-medium text-label hover:underline underline-offset-[3px]">hello@hushku.app</a>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4 lg:min-w-[640px]">
            {COLUMNS.map((c) => (
              <nav key={c.title} aria-label={c.title}>
                <p className="mb-3 text-[13px] leading-[18px] font-semibold text-label">{c.title}</p>
                <ul className="flex flex-col gap-2">
                  {c.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-[13px] leading-[18px] text-label-2 hover:text-label hover:underline underline-offset-[3px]">
                        {l.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 text-[12px] leading-4 text-label-2">
          <p>Copyright © {new Date().getFullYear()} Hushku. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="https://instagram.com/hushkuapp" rel="me noopener" target="_blank" className="hover:text-label">Instagram</a>
            <a href="https://tiktok.com/@hushkuapp" rel="me noopener" target="_blank" className="hover:text-label">TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
