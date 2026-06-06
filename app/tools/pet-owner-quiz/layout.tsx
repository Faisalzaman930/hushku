import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pet Owner Quiz | What Kind of Pet Parent Are You?",
  description: "Take the 8-question pet owner quiz and find out how you score as a pet parent. Get honest feedback and tips to become the owner your pet deserves. Free by Hushku.",
  keywords: "pet owner quiz, dog breed quiz, find my dog breed, best dog breed for me, Hushku",
  alternates: { canonical: "https://hushku.app/tools/pet-owner-quiz" },
  openGraph: {
    title: "Pet Owner Quiz | What Kind of Pet Parent Are You? — Hushku",
    description: "8 questions. Honest feedback. Find out how you really score as a pet parent — and how to improve. Free quiz by Hushku.",
    type: "website",
    url: "https://hushku.app/tools/pet-owner-quiz",
    images: [{ url: "https://hushku.app/screenshots/app-playdates.png", width: 1200, height: 630, alt: "Hushku — Pet Owner Quiz" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet Owner Quiz | Hushku",
    description: "Find out what kind of pet parent you are. Free 8-question quiz by Hushku.",
    images: ["https://hushku.app/screenshots/app-playdates.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
