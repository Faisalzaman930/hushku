import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pet Sitting Platform Comparison | Rover vs Wag vs Alternatives",
  description: "Compare the top pet sitting platforms — Rover, Wag, and more — on price, safety, availability, and features. Find the best option for your pet. Free by Hushku.",
  keywords: "sitting comparison, dog breed quiz, find my dog breed, best dog breed for me, Hushku",
  alternates: { canonical: "https://hushku.app/tools/sitting-comparison" },
  openGraph: {
    title: "Pet Sitting Platform Comparison | Rover vs Wag vs Alternatives — Hushku",
    description: "Side-by-side comparison of Rover, Wag, and other pet sitting services. Price, safety, insurance, and features — all in one place.",
    type: "website",
    url: "https://hushku.app/tools/sitting-comparison",
    images: [{ url: "https://hushku.app/screenshots/app-playdates.png", width: 1200, height: 630, alt: "Hushku — Sitting Comparison" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet Sitting Platform Comparison | Hushku",
    description: "Compare Rover, Wag, and alternatives. Find the best pet sitting platform for your needs.",
    images: ["https://hushku.app/screenshots/app-playdates.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
