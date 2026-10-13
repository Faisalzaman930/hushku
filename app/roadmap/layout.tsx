import type { Metadata } from "next";

const TITLE = "Roadmap: What’s Built and What’s Next";
const DESC =
  "What’s already built into the Hushku app, what we’re working on next and what we’re exploring later. Tell us what you’d like to see.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "https://hushku.app/roadmap" },
  openGraph: { title: TITLE, description: DESC, url: "https://hushku.app/roadmap", type: "website", images: [{ url: "https://hushku.app/og.png", width: 1200, height: 630, alt: "Hushku: every pet app, one quiet place" }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
};

export default function RoadmapLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
