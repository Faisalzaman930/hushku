import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Toxic Foods for Pets | What Can't Dogs & Cats Eat?",
  description: "Search our database of foods safe and toxic for dogs and cats. Instantly check if a food is dangerous for your pet. Free toxic food checker by Hushku.",
  keywords: "toxic food, dog breed quiz, find my dog breed, best dog breed for me, Hushku",
  alternates: { canonical: "https://hushku.app/tools/toxic-food" },
  openGraph: {
    title: "Toxic Foods for Pets | What Can't Dogs & Cats Eat? — Hushku",
    description: "Instantly check if a food is safe or toxic for your dog or cat. Searchable database of hundreds of foods — keep your pet safe.",
    type: "website",
    url: "https://hushku.app/tools/toxic-food",
    images: [{ url: "https://hushku.app/screenshots/app-playdates.png", width: 1200, height: 630, alt: "Hushku — Toxic Food" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Toxic Food Checker for Pets | Hushku",
    description: "Check if any food is safe or toxic for your dog or cat. Free database by Hushku.",
    images: ["https://hushku.app/screenshots/app-playdates.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
