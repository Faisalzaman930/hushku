import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pet Insurance Cost Estimator: What You’ll Pay",
  description: "Estimate your monthly pet insurance premium by breed, age, and coverage level. Compare plans and find the best value for your pet. Free tool by Hushku.",
  keywords: "insurance cost, dog breed quiz, find my dog breed, best dog breed for me, Hushku",
  alternates: { canonical: "https://hushku.app/tools/insurance-cost" },
  openGraph: {
    title: "Pet Insurance Cost Estimator: What You’ll Pay",
    description: "Get a free estimate of your pet insurance premium based on breed, age, and coverage level. Make a smarter decision for your pet's health.",
    type: "website",
    url: "https://hushku.app/tools/insurance-cost",
    images: [{ url: "https://hushku.app/og.png", width: 1200, height: 630, alt: "Hushku — Insurance Cost" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet Insurance Cost Estimator: What You’ll Pay",
    description: "Estimate your pet insurance premium by breed, age, and coverage. Free tool by Hushku.",
    images: ["https://hushku.app/og.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
