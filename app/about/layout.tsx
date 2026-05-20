import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Hushku — Meet Faizan & Faisal",
  description: "Hushku was founded by two pet owners passionate about building better tools for the modern pet parent. Meet the team behind the app.",
  alternates: { canonical: "https://hushku.app/about" },
  openGraph: {
    title: "About Hushku — Meet Faizan & Faisal",
    description: "Hushku was founded by two pet owners passionate about building better tools for the modern pet parent. Meet the team behind the app.",
    url: "https://hushku.app/about",
    images: [{ url: "https://hushku.app/screenshots/app-playdates.png", width: 1200, height: 630, alt: "About Hushku" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Hushku — Meet Faizan & Faisal",
    description: "Hushku was founded by two pet owners passionate about building better tools for the modern pet parent.",
    images: ["https://hushku.app/screenshots/app-playdates.png"],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
