import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cafevaluecannabisdispensary.com"),
  title: {
    default: "Cafe Value — Premium Cannabis Dispensary, Toronto",
    template: "%s | Cafe Value",
  },
  description:
    "Shop 200+ premium cannabis strains at Cafe Value. Exotic, Premium, AAA+, AA & Budget flower from $3/g. Toronto's uplifting dispensary at 654 Spadina Ave. Open 10:00 AM - 10:00 PM.",
  keywords: [
    "cannabis dispensary Toronto",
    "weed store Center",
    "exotic flower Toronto",
    "premium cannabis",
    "Cafe Value",
    "cheap weed Toronto",
    "dispensary near me",
    "THC flower",
    "indica sativa hybrid",
    "edibles Toronto",
    "vapes",
    "pre-rolls",
    "native cigarettes Toronto",
    "weed store Mississauga",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://cafevaluecannabisdispensary.com",
    siteName: "Cafe Value",
    title: "Cafe Value — Premium Toronto Cannabis Dispensary",
    description:
      "200+ strains from $3/g. Exotic to Budget. Toronto's uplifting dispensary at 654 Spadina Ave. Open 10:00 AM - 10:00 PM.",
    images: [
      {
        url: "/banners/cafe-value-dispensary.png",
        width: 1200,
        height: 630,
        alt: "Cafe Value — Premium Cannabis Dispensary Toronto",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cafe Value — Toronto's Uplifting Dispensary",
    description: "200+ strains from $3/g. Open 10:00 AM - 10:00 PM at 654 Spadina Ave, Toronto.",
    images: ["/banners/cafe-value-dispensary.png"],
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
    canonical: "https://cafevaluecannabisdispensary.com",
  },
  verification: {
    // google: "your-google-verification-code",
  },
};

/* ── JSON-LD Structured Data ── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  additionalType: "https://schema.org/Store",
  "@id": "https://cafevaluecannabisdispensary.com",
  name: "Cafe Value",
  description: "Cannabis dispensary at 654 Spadina Ave in Toronto, ON. Shop exotic, premium, AAA+, AA, and budget flower tiers plus edibles, prerolls, and vapes. Open 10:00 AM - 10:00 PM.",
  url: "https://cafevaluecannabisdispensary.com",
  telephone: "+14375772589",
  image: "https://cafevaluecannabisdispensary.com/banners/cafe-value-dispensary.png",
  priceRange: "$3 - $12/g",
  address: {
    "@type": "PostalAddress",
    streetAddress: "654 Spadina Ave",
    addressLocality: "Toronto",
    addressRegion: "ON",
    postalCode: "M5S 2H7",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.6631,
    longitude: -79.4010,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  ],
  sameAs: [
    "https://maps.app.goo.gl/6VfAL3aJzuRDL3gbA",
    "https://www.google.com/maps/place/?q=place_id:ChIJW-nFN_QFzkwRVCwdzMV1lrQ",
  ],
  hasMap: "https://maps.app.goo.gl/6VfAL3aJzuRDL3gbA",
  areaServed: {
    "@type": "City",
    name: "Toronto",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "18",
    bestRating: "5",
  },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
