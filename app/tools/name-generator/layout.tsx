import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pet Name Generator | Find the Perfect Name for Your Pet",
  description: "Generate unique pet names by species, color, and personality traits. Thousands of creative name ideas for dogs, cats, rabbits, and more. Free by Hushku.",
  keywords: "name generator, dog breed quiz, find my dog breed, best dog breed for me, Hushku",
  alternates: { canonical: "https://hushku.app/tools/name-generator" },
  openGraph: {
    title: "Pet Name Generator | Find the Perfect Name for Your Pet — Hushku",
    description: "Generate creative pet names by species, color, and personality. Find the perfect name for your new dog, cat, or rabbit. Free by Hushku.",
    type: "website",
    url: "https://hushku.app/tools/name-generator",
    images: [{ url: "https://hushku.app/screenshots/app-playdates.png", width: 1200, height: 630, alt: "Hushku — Name Generator" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet Name Generator | Hushku",
    description: "Generate the perfect name for your new pet. Free tool by Hushku.",
    images: ["https://hushku.app/screenshots/app-playdates.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
