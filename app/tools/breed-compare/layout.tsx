import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dog & Cat Breed Comparison Tool | Compare Breeds Side by Side",
  description: "Compare any two dog or cat breeds side by side — size, temperament, energy, grooming needs, and more. Free breed comparison tool by Hushku.",
  keywords: "breed compare, dog breed quiz, find my dog breed, best dog breed for me, Hushku",
  alternates: { canonical: "https://hushku.app/tools/breed-compare" },
  openGraph: {
    title: "Dog & Cat Breed Comparison Tool — Hushku",
    description: "Compare any two breeds side by side across size, temperament, energy, and grooming needs. Make a confident choice for your next pet.",
    type: "website",
    url: "https://hushku.app/tools/breed-compare",
    images: [{ url: "https://hushku.app/screenshots/app-playdates.png", width: 1200, height: 630, alt: "Hushku — Breed Compare" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Breed Comparison Tool | Hushku",
    description: "Compare dog and cat breeds side by side. Free tool by Hushku.",
    images: ["https://hushku.app/screenshots/app-playdates.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
