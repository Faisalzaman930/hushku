import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WaitlistBanner from "./components/WaitlistBanner";
import VolunteerBanner from "./components/VolunteerBanner";

const BASE_URL = "https://hushku.app";
const DEFAULT_OG_IMAGE = `${BASE_URL}/screenshots/app-playdates.png`;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Hushku: Free All-in-One Pet App for Dog & Cat Owners",
    template: "%s | Hushku",
  },
  description: "Hushku is a free pet app for dog and cat owners. Find playmates, adopt & foster pets, track health records, report lost animals, and connect with local shelters — all in one app.",
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
  },
  verification: {
    google: "ayQ4sYm-hWGfrvOeiixegZs5__TY29fuZKuFepIfr5E",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    siteName: "Hushku",
    type: "website",
    url: BASE_URL,
    title: "Hushku: Free All-in-One Pet App for Dog & Cat Owners",
    description: "Hushku is a free pet app for dog and cat owners. Find playmates, adopt & foster pets, track health records, report lost animals, and connect with local shelters — all in one app.",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Hushku — One App for Every Pet Parent Need" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hushku: Free All-in-One Pet App for Dog & Cat Owners",
    description: "The free pet app for dog and cat owners. Playdate matching, pet adoption, lost & found alerts, health records, and a pet social feed — all in one place.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased text-ebony bg-white">
      <head>
        <meta name="google-site-verification" content="ayQ4sYm-hWGfrvOeiixegZs5__TY29fuZKuFepIfr5E" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Hushku",
            "applicationCategory": "LifestyleApplication",
            "applicationSubCategory": "PetCareApplication",
            "operatingSystem": "iOS, Android",
            "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
            "description": "Free all-in-one pet app for dog and cat owners. Features playdate matching, pet adoption, lost & found alerts, health records, and a pet social network.",
            "url": "https://hushku.app",
            "screenshot": "https://hushku.app/screenshots/app-playdates.png"
          })}}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Hushku",
            "url": "https://hushku.app",
            "logo": "https://hushku.app/icon.svg",
            "foundingDate": "2024",
            "founders": [
              { "@type": "Person", "name": "Faizan" },
              { "@type": "Person", "name": "Faisal" }
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "hello@hushku.app",
              "contactType": "customer support"
            },
            "sameAs": [
              "https://www.instagram.com/hushkuapp",
              "https://www.tiktok.com/@hushkuapp"
            ]
          })}}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-3XP0WNN4KP" />
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-3XP0WNN4KP');
        `}} />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <VolunteerBanner />
        <WaitlistBanner />
        <Footer />
      </body>
    </html>
  );
}
