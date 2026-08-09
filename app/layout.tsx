import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cafevaluecannabisdispensary.com"),
  title: {
    default: "Cafe Value Cannabis | Toronto Dispensary",
    template: "%s | Cafe Value",
  },
  description:
    "Cafe Value is a Toronto cannabis dispensary on Spadina Ave with adult 19+ store info and category browsing for flower, pre-rolls, vapes, edibles, concentrates, and accessories. Open daily 10:00 AM - 12:00 AM.",
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
    "weed store Toronto",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://www.cafevaluecannabisdispensary.com",
    siteName: "Cafe Value",
    title: "Cafe Value — Premium Toronto Cannabis Dispensary",
    description:
      "Browse flower tiers and cannabis categories at Cafe Value on Spadina Ave in Toronto. Open daily 10:00 AM - 12:00 AM.",
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
    description: "Browse Cafe Value's cannabis categories. Open daily 10:00 AM - 12:00 AM at 654 Spadina Ave, Toronto.",
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
    canonical: "https://www.cafevaluecannabisdispensary.com",
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
  "@id": "https://www.cafevaluecannabisdispensary.com",
  name: "Cafe Value",
  description: "Cannabis dispensary at 654 Spadina Ave in Toronto, ON. Shop exotic, premium, AAA+, AA, and budget flower tiers plus edibles, prerolls, and vapes. Open daily 10:00 AM - 12:00 AM.",
  url: "https://www.cafevaluecannabisdispensary.com",
  telephone: "+12898074161",
  image: "https://www.cafevaluecannabisdispensary.com/banners/cafe-value-dispensary.png",
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
      opens: "10:00",
      closes: "00:00",
    },
  ],
  areaServed: {
    "@type": "City",
    name: "Toronto",
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
        <Link className="deliveryAnnouncement" href="/delivery">
          NEW DELIVERY MENU IS HERE — CLICK TO EXPLORE
        </Link>
        {children}
      </body>
    </html>
  );
}
