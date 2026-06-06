import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pet Age Calculator | Dog & Cat Years to Human Years",
  description: "Convert your pet's age to human years instantly. Breed-specific calculations for dogs, cats, rabbits, and birds. Free pet age calculator by Hushku.",
  keywords: "age calculator, dog breed quiz, find my dog breed, best dog breed for me, Hushku",
  alternates: { canonical: "https://hushku.app/tools/age-calculator" },
  openGraph: {
    title: "Pet Age Calculator | Dog & Cat Years to Human Years — Hushku",
    description: "Breed-specific age conversion for dogs, cats, rabbits, and birds. Find out how old your pet really is in human years.",
    type: "website",
    url: "https://hushku.app/tools/age-calculator",
    images: [{ url: "https://hushku.app/screenshots/app-playdates.png", width: 1200, height: 630, alt: "Hushku — Age Calculator" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet Age Calculator | Hushku",
    description: "Breed-specific age conversion for dogs, cats, rabbits, and birds. Free tool by Hushku.",
    images: ["https://hushku.app/screenshots/app-playdates.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
