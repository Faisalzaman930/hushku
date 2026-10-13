import type { Metadata } from "next";

const TITLE = "Join the Hushku Waitlist: Free Pet App for iPhone and Android";
const DESC =
  "Hushku is built and coming soon to the App Store and Google Play. Join the waitlist for one email on launch day, or volunteer to help build it.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: "https://hushku.app/join" },
  openGraph: { title: TITLE, description: DESC, url: "https://hushku.app/join", type: "website" },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
};

export default function JoinLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
