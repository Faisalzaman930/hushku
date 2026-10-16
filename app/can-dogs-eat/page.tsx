import type { Metadata } from "next";
import FoodHub, { hubDescription, hubTitle } from "../components/FoodHub";

export const metadata: Metadata = {
  title: hubTitle("dogs"),
  description: hubDescription("dogs"),
  alternates: { canonical: "https://hushku.app/can-dogs-eat" },
  openGraph: { title: hubTitle("dogs"), description: hubDescription("dogs"), type: "website", url: "https://hushku.app/can-dogs-eat", images: [{ url: "https://hushku.app/og.png", width: 1200, height: 630 }] },
};

export default function Page() {
  return <FoodHub species="dogs" />;
}
