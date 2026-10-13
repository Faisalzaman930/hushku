import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pet Photography Tips: Great Photos of Your Pet",
  description: "Get personalized pet photography tips based on your lighting, breed, and camera. Capture better photos of your dog or cat with this free guide by Hushku.",
  keywords: "photo tips, dog breed quiz, find my dog breed, best dog breed for me, Hushku",
  alternates: { canonical: "https://hushku.app/tools/photo-tips" },
  openGraph: {
    title: "Pet Photography Tips: Great Photos of Your Pet",
    description: "Personalized photo tips by lighting, breed, and camera type. Stop getting blurry, dark pet photos — get stunning shots every time.",
    type: "website",
    url: "https://hushku.app/tools/photo-tips",
    images: [{ url: "https://hushku.app/og.png", width: 1200, height: 630, alt: "Hushku — Photo Tips" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet Photography Tips: Great Photos of Your Pet",
    description: "Get personalized tips for better pet photos. Free guide by Hushku.",
    images: ["https://hushku.app/og.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
