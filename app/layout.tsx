import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { STORE, serializeJsonLd } from "./lib/storeIdentity";

export const metadata: Metadata = {
  metadataBase: new URL(STORE.baseUrl),
  title: {
    default: "Cafe Value Cannabis | Annex Spadina Dispensary",
    template: "%s | Cafe Value",
  },
  description:
    "Cafe Value Cannabis is the Annex walk-in dispensary at 654 Spadina Ave, Toronto, ON M5S 2H7. This location has closed and moved to Green Sundae in Mississauga. Call +1 (289) 807-4161. Adults 19+.",
  keywords: [
    "Annex dispensary",
    "Spadina cannabis",
    "weed store The Annex",
    "Cafe Value Cannabis",
    "654 Spadina Ave",
    "Harbord cannabis",
    "U of T dispensary",
    "510 Spadina",
    "THC flower Toronto Annex",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: STORE.homepageUrl,
    siteName: STORE.name,
    title: "Cafe Value Cannabis | Annex Spadina Dispensary",
    description:
      "Walk-in cannabis store at 654 Spadina Ave in The Annex. This location has closed and moved to Green Sundae in Mississauga. Adults 19+.",
    images: [
      {
        url: STORE.schemaImage,
        width: 1200,
        height: 630,
        alt: "Cafe Value Cannabis — Annex Spadina dispensary",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cafe Value Cannabis | Annex Spadina Dispensary",
    description: "Annex walk-in at 654 Spadina Ave. This location has closed and moved to Green Sundae in Mississauga. Call +1 (289) 807-4161.",
    images: [STORE.schemaImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: STORE.homepageUrl,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${STORE.baseUrl}/#website`,
      url: STORE.homepageUrl,
      name: STORE.name,
      publisher: { "@id": `${STORE.baseUrl}/#store` },
    },
    {
      "@type": "CannabisStore",
      "@id": `${STORE.baseUrl}/#store`,
      name: STORE.name,
      description:
        "Walk-in cannabis dispensary at 654 Spadina Ave in The Annex, Toronto. Spadina / Harbord / University of Toronto corridor. This location has closed and moved to Green Sundae in Mississauga. Adults 19+.",
      url: STORE.homepageUrl,
      telephone: STORE.phoneIntl,
      image: STORE.schemaImage,
      priceRange: "$3 - $12/g",
      hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(STORE.mapsQuery)}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: STORE.streetAddress,
        addressLocality: STORE.addressLocality,
        addressRegion: STORE.addressRegion,
        postalCode: STORE.postalCode,
        addressCountry: STORE.addressCountry,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: STORE.latitude,
        longitude: STORE.longitude,
      },
      areaServed: STORE.corridor.map((name) => ({
        "@type": "Place",
        name,
      })),
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-PFWL6WGNM6"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-PFWL6WGNM6');
            `
          }}
        />
      </head>
      <body>
        <p className="movedNotice">
          <a href="https://greensundaecannabisdispensary.com">
            We&apos;ve moved: Cafe Value is now Green Sundae Cannabis Dispensary, 723 Lakeshore Rd E, Mississauga ON L5G 1J7,
          </a>{" "}
          <a href="tel:+14377825669">(437) 782-5669</a>
        </p>
        <Link className="deliveryAnnouncement" href="/delivery">
          NEW DELIVERY MENU IS HERE — CLICK TO EXPLORE
        </Link>
        {children}
      </body>
    </html>
  );
}
