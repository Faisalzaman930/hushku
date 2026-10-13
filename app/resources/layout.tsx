import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pet Care Guides, How-Tos & Breed Profiles",
  // Item 5: updated meta description
  description: "Evidence-based pet care guides, how-tos, breed profiles, and symptom references — reviewed by vets. Free library from Hushku.",
  // Item 8: canonical prevents thin-page dilution from any query-string variants
  alternates: {
    canonical: "https://hushku.app/resources",
  },
  openGraph: {
    title: "Pet Care Guides, How-Tos & Breed Profiles",
    description: "Evidence-based pet care guides, how-tos, breed profiles, and symptom references — reviewed by vets. Free library from Hushku.",
    type: "website",
    url: "https://hushku.app/resources", images: [{ url: "https://hushku.app/og.png", width: 1200, height: 630, alt: "Hushku: every pet app, one quiet place" }] },
  twitter: {
    card: "summary_large_image",
    title: "Pet Care Guides, How-Tos & Breed Profiles",
    description: "Evidence-based pet care guides, how-tos, breed profiles, and symptom references — reviewed by vets. Free library from Hushku.",
  },
};

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
