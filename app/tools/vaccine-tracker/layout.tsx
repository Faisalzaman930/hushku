import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pet Vaccine Schedule for Puppies & Kittens",
  description: "View the complete vaccination schedule for puppies, kittens, and adult pets. Track what's due and when. Free pet vaccine tracker by Hushku.",
  keywords: "vaccine tracker, dog breed quiz, find my dog breed, best dog breed for me, Hushku",
  alternates: { canonical: "https://hushku.app/tools/vaccine-tracker" },
  openGraph: {
    title: "Pet Vaccine Schedule for Puppies & Kittens",
    description: "Complete vaccination timelines for puppies, kittens, and adult pets. Know what's due, when it's due, and never miss a shot.",
    type: "website",
    url: "https://hushku.app/tools/vaccine-tracker",
    images: [{ url: "https://hushku.app/og.png", width: 1200, height: 630, alt: "Hushku — Vaccine Tracker" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet Vaccine Schedule for Puppies & Kittens",
    description: "Track your pet's vaccination schedule. Free tool by Hushku.",
    images: ["https://hushku.app/og.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
