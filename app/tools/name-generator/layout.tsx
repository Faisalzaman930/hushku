import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pet Name Generator | Find the Perfect Name for Your Pet",
  description: "Generate unique pet names by species, color, and personality traits. Thousands of creative name ideas for dogs, cats, rabbits, and more. Free by Hushku.",
  openGraph: {
    title: "Pet Name Generator | Find the Perfect Name for Your Pet — Hushku",
    description: "Generate creative pet names by species, color, and personality. Find the perfect name for your new dog, cat, or rabbit. Free by Hushku.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet Name Generator | Hushku",
    description: "Generate the perfect name for your new pet. Free tool by Hushku.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
