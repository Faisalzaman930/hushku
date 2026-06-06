import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Puppy Weight Calculator | How Big Will My Puppy Get?",
  description: "Predict your puppy's adult weight based on current weight, age, and breed size. Free puppy growth calculator by Hushku — works for all dog breeds.",
  keywords: "puppy weight calculator, how big will my puppy get, puppy growth calculator, predict adult dog weight, puppy size estimator",
  alternates: { canonical: "https://hushku.app/tools/puppy-weight" },
  openGraph: {
    title: "Puppy Weight Calculator | How Big Will My Puppy Get? — Hushku",
    description: "Predict your puppy's adult weight based on current weight, age, and breed size. Free tool by Hushku.",
    type: "website",
    url: "https://hushku.app/tools/puppy-weight",
    images: [{ url: "https://hushku.app/screenshots/app-playdates.png", width: 1200, height: 630, alt: "Hushku Puppy Weight Calculator" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Puppy Weight Calculator | Hushku",
    description: "Predict your puppy's adult weight. Free calculator by Hushku.",
    images: ["https://hushku.app/screenshots/app-playdates.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
