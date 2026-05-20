import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hushku Product Roadmap — Vote on What We Build Next",
  description: "See what's live, what's coming, and what's planned for Hushku. Vote on features and submit your own ideas to shape the future of the app.",
  alternates: { canonical: "https://hushku.app/roadmap" },
  openGraph: {
    title: "Hushku Product Roadmap — Vote on What We Build Next",
    description: "See what's live, what's coming, and what's planned for Hushku. Vote on features and shape the future of the app.",
    url: "https://hushku.app/roadmap",
    images: [{ url: "https://hushku.app/screenshots/app-playdates.png", width: 1200, height: 630, alt: "Hushku Roadmap" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hushku Product Roadmap — Vote on What We Build Next",
    description: "See what's live, what's coming, and what's planned for Hushku. Vote on features and shape the future of the app.",
    images: ["https://hushku.app/screenshots/app-playdates.png"],
  },
};

export default function RoadmapLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
