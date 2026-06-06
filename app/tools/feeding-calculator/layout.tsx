import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pet Feeding Calculator | How Much Should I Feed My Pet?",
  description: "Calculate the right daily food portion for your dog or cat based on weight, age, and activity level. Free pet feeding calculator by Hushku.",
  keywords: "feeding calculator, dog breed quiz, find my dog breed, best dog breed for me, Hushku",
  alternates: { canonical: "https://hushku.app/tools/feeding-calculator" },
  openGraph: {
    title: "Pet Feeding Calculator | How Much Should I Feed My Pet? — Hushku",
    description: "Get accurate daily feeding amounts for your dog or cat based on weight, age, and activity level. Stop guessing — feed right.",
    type: "website",
    url: "https://hushku.app/tools/feeding-calculator",
    images: [{ url: "https://hushku.app/screenshots/app-playdates.png", width: 1200, height: 630, alt: "Hushku — Feeding Calculator" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet Feeding Calculator | Hushku",
    description: "Calculate the right daily food portion for your pet. Free tool by Hushku.",
    images: ["https://hushku.app/screenshots/app-playdates.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
