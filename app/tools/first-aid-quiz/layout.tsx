import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pet First Aid Quiz | Test Your Emergency Preparedness",
  description: "How ready are you for a pet emergency? Take the free pet first aid quiz and find out. Learn life-saving knowledge every pet parent should have — by Hushku.",
  keywords: "first aid quiz, dog breed quiz, find my dog breed, best dog breed for me, Hushku",
  alternates: { canonical: "https://hushku.app/tools/first-aid-quiz" },
  openGraph: {
    title: "Pet First Aid Quiz | Test Your Emergency Preparedness — Hushku",
    description: "Quiz yourself on pet emergencies, CPR, and first aid. Find out if you're ready when it matters most. Free quiz by Hushku.",
    type: "website",
    url: "https://hushku.app/tools/first-aid-quiz",
    images: [{ url: "https://hushku.app/screenshots/app-playdates.png", width: 1200, height: 630, alt: "Hushku — First Aid Quiz" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet First Aid Quiz | Hushku",
    description: "Test your pet emergency preparedness. Free quiz by Hushku.",
    images: ["https://hushku.app/screenshots/app-playdates.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
