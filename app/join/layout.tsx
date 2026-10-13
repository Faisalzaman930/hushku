import type { Metadata } from "next";

const TITLE = "Join the Waitlist: Free Pet App, iPhone & Android";
const DESC =
  "Hushku is built and coming soon to the App Store and Google Play. Join the waitlist for one email on launch day, or volunteer to help build it.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "https://hushku.app/join" },
  openGraph: { title: TITLE, description: DESC, url: "https://hushku.app/join", type: "website", images: [{ url: "https://hushku.app/og.png", width: 1200, height: 630, alt: "Hushku: every pet app, one quiet place" }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
};

export default function JoinLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
