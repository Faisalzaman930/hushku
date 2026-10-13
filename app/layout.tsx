import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WaitlistBanner from "./components/WaitlistBanner";
import VolunteerBanner from "./components/VolunteerBanner";

const BASE_URL = "https://hushku.app";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og.png`;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Hushku: The Free App for Dog & Cat Owners",
    template: "%s | Hushku",
  },
  description: "The free app for dog and cat owners: playdates, adoption, lost and found alerts and shared daily care. Coming soon to iPhone and Android.",
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
    title: "Hushku: The Free App for Dog & Cat Owners",
    description: "The free app for dog and cat owners: playdates, adoption, lost and found alerts and shared daily care. Coming soon to iPhone and Android.",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Hushku: every pet app, one quiet place" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hushku: The Free App for Dog & Cat Owners",
    description: "The free app for dog and cat owners. Playdates, adoption, lost and found reports and daily care, in one place.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased text-label bg-white">
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
            "description": "Free app for dog and cat owners: playdates, adoption and fostering, lost and found reports, shelters and daily pet care.",
            "url": "https://hushku.app",
            "screenshot": "https://hushku.app/og.png"
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
        <main id="main" className="flex-grow">{children}</main>
        <VolunteerBanner />
        <WaitlistBanner />
        <Footer />
      </body>
    </html>
  );
}
