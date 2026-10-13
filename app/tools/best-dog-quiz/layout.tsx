import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Dog Breed Quiz | Find Your Perfect Dog Match",
  description: "Answer 7 quick questions and discover which dog breed suits your lifestyle. Free dog breed quiz by Hushku — used by 50,000+ pet parents.",
  keywords: "best dog quiz, dog breed quiz, find my dog breed, best dog breed for me, Hushku",
  alternates: { canonical: "https://hushku.app/tools/best-dog-quiz" },
  openGraph: {
    title: "Best Dog Breed Quiz | Find Your Perfect Dog Match",
    description: "Answer 7 questions and get matched with the ideal dog breed for your lifestyle, space, and activity level. Free quiz by Hushku.",
    type: "website",
    url: "https://hushku.app/tools/best-dog-quiz",
    images: [{ url: "https://hushku.app/og.png", width: 1200, height: 630, alt: "Hushku — Best Dog Quiz" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Dog Breed Quiz",
    description: "Find your perfect dog breed match in 7 questions. Free quiz by Hushku.",
    images: ["https://hushku.app/og.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
