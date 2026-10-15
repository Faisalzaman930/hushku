import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dog Heat Cycle Calculator: Next Heat and Fertile Days",
  description: "Free dog heat cycle calculator. Enter the first day of her last heat to see each phase, her likely fertile days and when her next three heats are due.",
  keywords: "dog heat cycle calculator, when will my dog go into heat, dog season calculator, dog fertile days, how long is a dog in heat",
  alternates: { canonical: "https://hushku.app/tools/heat-cycle-calculator" },
  openGraph: {
    title: "Dog Heat Cycle Calculator | Hushku",
    description: "See your dog\'s heat phases, likely fertile days and next heat dates. Free tool by Hushku.",
    type: "website",
    url: "https://hushku.app/tools/heat-cycle-calculator",
    images: [{ url: "https://hushku.app/og.png", width: 1200, height: 630, alt: "Hushku dog heat cycle calculator" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dog Heat Cycle Calculator",
    description: "Predict your dog\'s next heat and fertile days. Free tool by Hushku.",
    images: ["https://hushku.app/og.png"],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
