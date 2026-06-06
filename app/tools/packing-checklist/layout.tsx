import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pet Travel Packing Checklist | Don't Leave Home Without This",
  description: "Generate a complete packing checklist for traveling with your pet. Covers food, meds, documents, gear, and safety essentials. Free tool by Hushku.",
  keywords: "packing checklist, dog breed quiz, find my dog breed, best dog breed for me, Hushku",
  alternates: { canonical: "https://hushku.app/tools/packing-checklist" },
  openGraph: {
    title: "Pet Travel Packing Checklist — Hushku",
    description: "Never forget an essential when traveling with your pet. Generate a full packing checklist covering food, meds, documents, and safety gear.",
    type: "website",
    url: "https://hushku.app/tools/packing-checklist",
    images: [{ url: "https://hushku.app/screenshots/app-playdates.png", width: 1200, height: 630, alt: "Hushku — Packing Checklist" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet Travel Packing Checklist | Hushku",
    description: "Generate a complete pet travel packing list. Free tool by Hushku.",
    images: ["https://hushku.app/screenshots/app-playdates.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
