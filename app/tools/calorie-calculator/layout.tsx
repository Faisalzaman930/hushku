import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pet Calorie Calculator: Daily Needs, Dogs & Cats",
  description: "Work out how many calories your dog or cat needs each day, based on weight, age and activity. Free and instant.",
  keywords: "pet calorie calculator, dog calorie calculator, cat calorie calculator, how many calories should my dog eat, daily calorie needs for dogs",
  alternates: { canonical: "https://hushku.app/tools/calorie-calculator" },
  openGraph: {
    title: "Pet Calorie Calculator: Daily Needs, Dogs & Cats",
    description: "Calculate your dog or cat's daily calorie needs based on weight, age, and activity level. Based on WSAVA/AAHA nutritional guidelines.",
    type: "website",
    url: "https://hushku.app/tools/calorie-calculator",
    images: [{ url: "https://hushku.app/og.png", width: 1200, height: 630, alt: "Hushku Pet Calorie Calculator" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet Calorie Calculator: Daily Needs, Dogs & Cats",
    description: "Calculate your pet's daily calorie needs. Based on WSAVA/AAHA guidelines. Free tool.",
    images: ["https://hushku.app/og.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
