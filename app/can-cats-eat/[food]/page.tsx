import type { Metadata } from "next";
import { notFound } from "next/navigation";
import FoodPageView, { foodDescription, foodPath, foodTitle } from "../../components/FoodPageView";
import { findFood, foodsFor } from "../../data/foods";
import { metaDesc, searchTitle } from "../../lib/seo";

export const dynamicParams = false;
export const generateStaticParams = () => foodsFor("cats").map((f) => ({ food: f.slug }));

export async function generateMetadata({ params }: { params: Promise<{ food: string }> }): Promise<Metadata> {
  const f = findFood("cats", (await params).food);
  if (!f) return { title: "Page not found", robots: { index: false } };
  const url = `https://hushku.app${foodPath(f)}`;
  return {
    title: searchTitle(foodTitle(f)),
    description: metaDesc(foodDescription(f)),
    alternates: { canonical: url },
    openGraph: { title: foodTitle(f), description: metaDesc(foodDescription(f)), type: "article", url, images: [{ url: "https://hushku.app/og.png", width: 1200, height: 630 }] },
    twitter: { card: "summary_large_image", title: foodTitle(f), description: metaDesc(foodDescription(f)) },
  };
}

export default async function Page({ params }: { params: Promise<{ food: string }> }) {
  const f = findFood("cats", (await params).food);
  if (!f) notFound();
  return <FoodPageView food={f} />;
}
