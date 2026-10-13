import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pet Symptom Checker: Is It an Emergency?",
  description: "Check your dog’s or cat’s symptoms and see how urgent they might be. A free triage guide, not a diagnosis. Call your vet if in doubt.",
  keywords: "symptom checker, dog breed quiz, find my dog breed, best dog breed for me, Hushku",
  alternates: { canonical: "https://hushku.app/tools/symptom-checker" },
  openGraph: {
    title: "Pet Symptom Checker: Is It an Emergency?",
    description: "Get instant symptom triage for your pet — emergency, vet-soon, or monitor at home. Know when to act and when to wait. Free tool by Hushku.",
    type: "website",
    url: "https://hushku.app/tools/symptom-checker",
    images: [{ url: "https://hushku.app/og.png", width: 1200, height: 630, alt: "Hushku — Symptom Checker" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet Symptom Checker: Is It an Emergency?",
    description: "Get instant symptom triage for your pet. Emergency, vet-soon, or monitor at home.",
    images: ["https://hushku.app/og.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
