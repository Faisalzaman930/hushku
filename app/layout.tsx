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
    default: "Hushku — One App for Every Pet Parent Need",
    template: "%s | Hushku",
  },
  description: "Download Hushku, the all-in-one mobile app for modern pet parents. Connect with local owners, find vet care, adopt pets, and more—all from your phone.",
  keywords: ["pet super-app", "best pet app", "dog social media app", "pet adoption app", "mobile vet directory", "find lost pet app", "Hushku app download"],
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
    title: "Hushku — One App for Every Pet Parent Need",
    description: "Download Hushku, the all-in-one mobile app for modern pet parents. Connect with local owners, find vet care, adopt pets, and more—all from your phone.",
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Hushku — One App for Every Pet Parent Need" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hushku — One App for Every Pet Parent Need",
    description: "Social networking, playdates, adoption, vet discovery, and lost & found — all in one free app for pet parents.",
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
            "@type": "Organization",
            "name": "Hushku",
            "url": "https://hushku.app",
            "logo": { "@type": "ImageObject", "url": "https://hushku.app/icon.svg" },
            "sameAs": [
              "https://www.instagram.com/hushkuapp",
              "https://www.tiktok.com/@hushkuapp"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer support",
              "email": "hello@hushku.co"
            }
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
