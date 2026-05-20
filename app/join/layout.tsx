import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Hushku — Get Early Access & Help Build the App",
  description: "Join the Hushku waitlist for early access on iOS and Android, or volunteer your skills to help build the future of pet care. Free to join.",
  alternates: { canonical: "https://hushku.app/join" },
  openGraph: {
    title: "Join Hushku — Get Early Access & Help Build the App",
    description: "Join the Hushku waitlist for early access on iOS and Android, or volunteer your skills to help build the future of pet care.",
    url: "https://hushku.app/join",
    images: [{ url: "https://hushku.app/screenshots/app-playdates.png", width: 1200, height: 630, alt: "Join Hushku" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Join Hushku — Get Early Access & Help Build the App",
    description: "Join the Hushku waitlist for early access on iOS and Android, or volunteer your skills to help build the future of pet care.",
    images: ["https://hushku.app/screenshots/app-playdates.png"],
  },
};

export default function JoinLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
