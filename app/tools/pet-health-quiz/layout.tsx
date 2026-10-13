import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pet Health Quiz | Rate Your Pet's Overall Wellbeing",
  description: "Assess your pet's health across diet, exercise, mental stimulation, and vet care. Get a personalized wellness score and actionable tips. Free by Hushku.",
  keywords: "pet health quiz, dog breed quiz, find my dog breed, best dog breed for me, Hushku",
  alternates: { canonical: "https://hushku.app/tools/pet-health-quiz" },
  openGraph: {
    title: "Pet Health Quiz | Rate Your Pet's Overall Wellbeing",
    description: "A comprehensive lifestyle audit for your pet. Get a wellness score across diet, exercise, mental stimulation, and vet care — with tips to improve.",
    type: "website",
    url: "https://hushku.app/tools/pet-health-quiz",
    images: [{ url: "https://hushku.app/og.png", width: 1200, height: 630, alt: "Hushku — Pet Health Quiz" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet Health Quiz",
    description: "Get your pet's wellness score and personalized tips. Free quiz by Hushku.",
    images: ["https://hushku.app/og.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
