import type { Metadata } from "next";

const TITLE = "About Hushku: Meet Faizan and Faisal";
const DESC =
  "Hushku is built by two friends and lifelong pet owners who wanted one calm app for everything their dogs needed. Meet the founders, and help us build it.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: { canonical: "https://hushku.app/about" },
  openGraph: { title: TITLE, description: DESC, url: "https://hushku.app/about", type: "website", images: [{ url: "https://hushku.app/og.png", width: 1200, height: 630, alt: "Hushku: every pet app, one quiet place" }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
