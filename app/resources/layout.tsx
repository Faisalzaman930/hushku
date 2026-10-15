import type { Metadata } from "next";

const TITLE = "Pet Care Guides: Health, Training, Food and Cat Care";
const DESC = "Free, practical guides for dog and cat owners: symptoms and when to see a vet, training, feeding, puppies and kittens, breeds and adoption. Checked against veterinary sources.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESC,
  alternates: { canonical: "https://hushku.app/resources" },
  openGraph: { title: TITLE, description: DESC, type: "website", url: "https://hushku.app/resources", images: [{ url: "https://hushku.app/og.png", width: 1200, height: 630, alt: "Hushku pet care guides" }] },
  twitter: { card: "summary_large_image", title: TITLE, description: DESC },
};

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
