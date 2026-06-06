import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pet Sitter Cost Calculator | How Much Does Pet Sitting Cost?",
  description: "Estimate pet sitting costs by location, pet type, duration, and service level. Compare local rates and budget for your next trip. Free calculator by Hushku.",
  keywords: "pet sitter cost, dog breed quiz, find my dog breed, best dog breed for me, Hushku",
  alternates: { canonical: "https://hushku.app/tools/pet-sitter-cost" },
  openGraph: {
    title: "Pet Sitter Cost Calculator — Hushku",
    description: "Get a realistic pet sitting cost estimate based on your location, pet type, and service level. Know what to expect before you book.",
    type: "website",
    url: "https://hushku.app/tools/pet-sitter-cost",
    images: [{ url: "https://hushku.app/screenshots/app-playdates.png", width: 1200, height: 630, alt: "Hushku — Pet Sitter Cost" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet Sitter Cost Calculator | Hushku",
    description: "Estimate pet sitting costs by location and service. Free calculator by Hushku.",
    images: ["https://hushku.app/screenshots/app-playdates.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
