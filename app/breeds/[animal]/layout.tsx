import type { Metadata } from "next";
import { ANIMAL_LABELS } from "../../data/breeds";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ animal: string }>;
}): Promise<Metadata> {
  const { animal } = await params;
  const label = ANIMAL_LABELS[animal] ?? animal.charAt(0).toUpperCase() + animal.slice(1);
  const canonicalUrl = `https://hushku.app/breeds/${animal}`;

  return {
    title: `${label} Breeds | Complete ${label} Breed Directory — Hushku`,
    description: `Browse every ${label.toLowerCase()} breed with temperament scores, size guides, care information, and health data. Find your perfect ${label.toLowerCase().replace(/s$/, "")} breed on Hushku.`,
    keywords: `${animal} breeds, ${animal} breed directory, ${animal} breed list, all ${animal} breeds, ${animal} breed guide`,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: `${label} Breeds | Complete ${label} Breed Directory — Hushku`,
      description: `Browse every ${label.toLowerCase()} breed with temperament scores, size, and care guides.`,
      type: "website",
      url: canonicalUrl,
      images: [{ url: "https://hushku.app/screenshots/app-playdates.png", width: 1200, height: 630, alt: `Hushku ${label} Breed Directory` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${label} Breeds Directory | Hushku`,
      description: `Browse every ${label.toLowerCase()} breed with scores, care guides, and health info.`,
      images: ["https://hushku.app/screenshots/app-playdates.png"],
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
