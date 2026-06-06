import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dog Exercise Calculator | How Much Exercise Does My Dog Need?",
  description: "Calculate your dog's daily exercise needs by breed, age, and size. Based on veterinary activity guidelines. Free dog exercise calculator by Hushku.",
  keywords: "dog exercise calculator, how much exercise does my dog need, daily exercise for dogs, dog activity requirements, dog walk calculator",
  alternates: { canonical: "https://hushku.app/tools/exercise-calculator" },
  openGraph: {
    title: "Dog Exercise Calculator | How Much Exercise Does My Dog Need? — Hushku",
    description: "Calculate your dog's daily exercise requirements by breed, age, and size. Based on veterinary activity guidelines.",
    type: "website",
    url: "https://hushku.app/tools/exercise-calculator",
    images: [{ url: "https://hushku.app/screenshots/app-playdates.png", width: 1200, height: 630, alt: "Hushku Dog Exercise Calculator" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dog Exercise Calculator | Hushku",
    description: "Calculate your dog's daily exercise needs by breed and age. Free tool by Hushku.",
    images: ["https://hushku.app/screenshots/app-playdates.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
