import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dog & Cat Pregnancy Calculator: Due Date",
  description: "Work out your dog’s or cat’s due date from the mating date, with a week-by-week pregnancy timeline. Free whelping calculator.",
  keywords: "whelping calculator, dog pregnancy calculator, dog due date calculator, cat pregnancy calculator, canine gestation calculator, how long is a dog pregnant",
  alternates: { canonical: "https://hushku.app/tools/whelping-calculator" },
  openGraph: {
    title: "Dog & Cat Pregnancy Calculator | Whelping Due Date",
    description: "Calculate your dog or cat's pregnancy due date and key milestone dates. Free whelping calculator by Hushku.",
    type: "website",
    url: "https://hushku.app/tools/whelping-calculator",
    images: [{ url: "https://hushku.app/og.png", width: 1200, height: 630, alt: "Hushku Whelping Calculator" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dog & Cat Pregnancy Calculator: Due Date",
    description: "Calculate your dog or cat's whelping due date. Free tool by Hushku.",
    images: ["https://hushku.app/og.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
