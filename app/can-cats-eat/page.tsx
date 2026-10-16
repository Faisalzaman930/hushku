import type { Metadata } from "next";
import FoodHub, { hubDescription, hubTitle } from "../components/FoodHub";

export const metadata: Metadata = {
  title: hubTitle("cats"),
  description: hubDescription("cats"),
  alternates: { canonical: "https://hushku.app/can-cats-eat" },
  openGraph: { title: hubTitle("cats"), description: hubDescription("cats"), type: "website", url: "https://hushku.app/can-cats-eat", images: [{ url: "https://hushku.app/og.png", width: 1200, height: 630 }] },
};

export default function Page() {
  return <FoodHub species="cats" />;
}
