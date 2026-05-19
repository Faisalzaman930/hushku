import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pet Photography Tips | How to Take Great Photos of Your Pet",
  description: "Get personalized pet photography tips based on your lighting, breed, and camera. Capture better photos of your dog or cat with this free guide by Hushku.",
  openGraph: {
    title: "Pet Photography Tips | How to Take Great Photos of Your Pet — Hushku",
    description: "Personalized photo tips by lighting, breed, and camera type. Stop getting blurry, dark pet photos — get stunning shots every time.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet Photography Tips | Hushku",
    description: "Get personalized tips for better pet photos. Free guide by Hushku.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
