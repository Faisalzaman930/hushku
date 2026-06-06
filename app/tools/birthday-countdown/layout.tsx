import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pet Birthday Countdown Timer | Celebrate Your Pet's Big Day",
  description: "Count down to your pet's birthday with a live timer. Set the date, share the excitement, and never miss your pet's special day again. Free tool by Hushku.",
  keywords: "birthday countdown, dog breed quiz, find my dog breed, best dog breed for me, Hushku",
  alternates: { canonical: "https://hushku.app/tools/birthday-countdown" },
  openGraph: {
    title: "Pet Birthday Countdown Timer — Hushku",
    description: "Live countdown to your pet's birthday. Set the date, share the excitement, and celebrate every milestone.",
    type: "website",
    url: "https://hushku.app/tools/birthday-countdown",
    images: [{ url: "https://hushku.app/screenshots/app-playdates.png", width: 1200, height: 630, alt: "Hushku — Birthday Countdown" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet Birthday Countdown | Hushku",
    description: "Live countdown to your pet's birthday. Never miss their special day again.",
    images: ["https://hushku.app/screenshots/app-playdates.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
