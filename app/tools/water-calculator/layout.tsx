import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pet Water Calculator | How Much Water Should My Dog or Cat Drink?",
  description: "Calculate your dog or cat's daily water intake needs based on weight. Normal water intake is 20–70 ml per kg per day. Free pet hydration calculator by Hushku.",
  keywords: "pet water calculator, how much water should my dog drink, dog water intake calculator, cat water intake, dog hydration calculator",
  alternates: { canonical: "https://hushku.app/tools/water-calculator" },
  openGraph: {
    title: "Pet Water Calculator | How Much Water Should My Dog or Cat Drink? — Hushku",
    description: "Calculate your dog or cat's daily water intake needs based on weight. Spot dehydration or polydipsia early.",
    type: "website",
    url: "https://hushku.app/tools/water-calculator",
    images: [{ url: "https://hushku.app/screenshots/app-playdates.png", width: 1200, height: 630, alt: "Hushku Pet Water Calculator" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet Water Calculator | Hushku",
    description: "Calculate your dog or cat's daily water needs. Free tool by Hushku.",
    images: ["https://hushku.app/screenshots/app-playdates.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
