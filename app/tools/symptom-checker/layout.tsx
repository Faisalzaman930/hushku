import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pet Symptom Checker | Is My Pet's Symptom an Emergency?",
  description: "Enter your pet's symptoms and get an instant triage: emergency, see a vet soon, or monitor at home. Free pet symptom checker by Hushku. Not a substitute for vet care.",
  keywords: "symptom checker, dog breed quiz, find my dog breed, best dog breed for me, Hushku",
  alternates: { canonical: "https://hushku.app/tools/symptom-checker" },
  openGraph: {
    title: "Pet Symptom Checker | Is My Pet's Symptom an Emergency? — Hushku",
    description: "Get instant symptom triage for your pet — emergency, vet-soon, or monitor at home. Know when to act and when to wait. Free tool by Hushku.",
    type: "website",
    url: "https://hushku.app/tools/symptom-checker",
    images: [{ url: "https://hushku.app/screenshots/app-playdates.png", width: 1200, height: 630, alt: "Hushku — Symptom Checker" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet Symptom Checker | Hushku",
    description: "Get instant symptom triage for your pet. Emergency, vet-soon, or monitor at home.",
    images: ["https://hushku.app/screenshots/app-playdates.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
