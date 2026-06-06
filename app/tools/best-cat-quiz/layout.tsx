import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Cat Breed Quiz | Find Your Perfect Cat Match",
  description: "Answer 7 quick questions and discover which cat breed suits your home and lifestyle. Free cat breed quiz by Hushku — find your purrfect match.",
  keywords: "best cat quiz, dog breed quiz, find my dog breed, best dog breed for me, Hushku",
  alternates: { canonical: "https://hushku.app/tools/best-cat-quiz" },
  openGraph: {
    title: "Best Cat Breed Quiz | Find Your Perfect Cat Match — Hushku",
    description: "Answer 7 questions and get matched with the ideal cat breed for your lifestyle, home size, and personality. Free quiz by Hushku.",
    type: "website",
    url: "https://hushku.app/tools/best-cat-quiz",
    images: [{ url: "https://hushku.app/screenshots/app-playdates.png", width: 1200, height: 630, alt: "Hushku — Best Cat Quiz" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Cat Breed Quiz | Hushku",
    description: "Find your perfect cat breed match in 7 questions. Free quiz by Hushku.",
    images: ["https://hushku.app/screenshots/app-playdates.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
