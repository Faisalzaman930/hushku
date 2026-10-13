import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pet BMI & Body Condition Score Calculator",
  description: "Check your pet's body condition score with Hushku's free BMI tool. Works for dogs, cats, rabbits, and birds. Get actionable weight and diet advice.",
  keywords: "pet bmi, dog breed quiz, find my dog breed, best dog breed for me, Hushku",
  alternates: { canonical: "https://hushku.app/tools/pet-bmi" },
  openGraph: {
    title: "Pet BMI & Body Condition Score Calculator",
    description: "Find out if your pet is a healthy weight. Free body condition score checker for dogs, cats, rabbits, and birds — with diet recommendations.",
    type: "website",
    url: "https://hushku.app/tools/pet-bmi",
    images: [{ url: "https://hushku.app/og.png", width: 1200, height: 630, alt: "Hushku — Pet Bmi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet BMI Calculator",
    description: "Check your pet's body condition score. Free tool by Hushku.",
    images: ["https://hushku.app/og.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
