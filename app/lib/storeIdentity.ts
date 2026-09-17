/** Cafe Value Cannabis (CVC01) — standalone Annex / Spadina walk-in. Homepage is the NAP hub. */
export const STORE = {
  name: "Cafe Value Cannabis",
  shortName: "Cafe Value",
  domain: "www.cafevaluecannabisdispensary.com",
  baseUrl: "https://www.cafevaluecannabisdispensary.com",
  homepageUrl: "https://www.cafevaluecannabisdispensary.com/",
  storePagePath: "/weed-dispensary-toronto/",
  visitPath: "/visit",
  annexInfoPath: "/info/weed-store-near-the-annex-spadina",
  streetAddress: "654 Spadina Ave",
  addressLocality: "Toronto",
  addressRegion: "ON",
  postalCode: "M5S 2H7",
  addressCountry: "CA",
  addressLine: "654 Spadina Ave, Toronto, ON M5S 2H7",
  phoneDisplay: "+1 (289) 807-4161",
  phoneIntl: "+12898074161",
  phoneTel: "tel:+12898074161",
  hoursLabel: "10:00 AM – 12:00 AM",
  hoursNote: "Open daily 10:00 AM – 12:00 AM (midnight). Not 24 hours.",
  opens: "10:00",
  closes: "00:00",
  latitude: 43.6633088,
  longitude: -79.4025299,
  intersection: "Spadina Avenue at Harbord Street, in The Annex",
  corridor: ["The Annex", "Spadina Avenue", "Harbord Village", "University of Toronto"] as const,
  schemaImage: "https://www.cafevaluecannabisdispensary.com/banners/cafe-value-dispensary.png",
  mapsQuery: "654 Spadina Ave, Toronto, ON M5S 2H7",
  gbpWebsite: "https://www.cafevaluecannabisdispensary.com/",
} as const;

export const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(STORE.mapsQuery)}`;
export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(STORE.mapsQuery)}`;
export const mapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(STORE.mapsQuery)}&z=16&output=embed`;

export type StoreFaq = { q: string; a: string };

/** Visible homepage FAQs — keep in sync with FAQPage JSON-LD. */
export const HOME_FAQS: StoreFaq[] = [
  {
    q: "Where is Cafe Value Cannabis?",
    a: "Cafe Value Cannabis is the walk-in counter at 654 Spadina Ave, Toronto, ON M5S 2H7, on the Spadina spine in The Annex near Harbord Street and the University of Toronto St. George campus. Call +1 (289) 807-4161. This homepage is the visit hub for address, hours, map, and directions.",
  },
  {
    q: "What hours is Cafe Value Cannabis open?",
    a: "The Spadina counter is open daily from 10:00 AM to 12:00 AM (midnight). Cafe Value Cannabis is not a 24-hour store. Confirm the listed hours on this homepage before a late visit.",
  },
  {
    q: "How do I get to 654 Spadina Ave on TTC?",
    a: "Ride the 510 Spadina streetcar along Spadina Avenue, or take Line 1 / Line 2 to Spadina station at Bloor and walk south toward Harbord. The supporting /visit page covers streetcar, subway, and parking notes.",
  },
  {
    q: "Is there parking near Cafe Value Cannabis?",
    a: "Metered street parking runs along Spadina Avenue. Read the signs on the pole in front of you. There is no private garage attached to the store.",
  },
  {
    q: "Do I need ID to shop at Cafe Value Cannabis?",
    a: "Yes. Cafe Value Cannabis is for adults 19+ with valid government photo ID. Bring ID for every visit, including evening walk-ins before midnight.",
  },
  {
    q: "What can I browse on the Cafe Value menu?",
    a: "Flower tiers (Exotic, Premium, AAA+, AA, and Budget), plus pre-rolls, edibles, THC vapes, concentrates, and accessories when they are on the current menu. Use the live menu for names and prices that move.",
  },
];

/** Visible /visit FAQs — keep in sync with that page's FAQPage JSON-LD. */
export const VISIT_FAQS: StoreFaq[] = [
  {
    q: "What is the exact address and phone for Cafe Value Cannabis?",
    a: "654 Spadina Ave, Toronto, ON M5S 2H7. Call +1 (289) 807-4161. The homepage is the NAP hub; this page is the how-to-reach companion.",
  },
  {
    q: "What is the nearest intersection?",
    a: "Spadina Avenue at Harbord Street in The Annex, beside the University of Toronto St. George campus. If a pin shows a different Spadina number downtown near King, you are not at Cafe Value Cannabis.",
  },
  {
    q: "Which streetcar or subway serves Cafe Value Cannabis?",
    a: "The 510 Spadina streetcar runs the avenue. Spadina station at Bloor is the Line 1 and Line 2 transfer. Walk south from Bloor along Spadina toward Harbord to 654.",
  },
  {
    q: "Where do I park?",
    a: "Use metered street parking on Spadina Avenue and nearby Annex side streets after checking the posted signs. This is not a mall lot.",
  },
  {
    q: "Is Cafe Value Cannabis open 24 hours?",
    a: "No. Listed hours are 10:00 AM to 12:00 AM daily. Do not plan a 3 a.m. walk-in. Call +1 (289) 807-4161 if a late evening visit depends on one item.",
  },
  {
    q: "Can I walk in from campus or The Annex without an appointment?",
    a: "Yes. Walk-ins are welcome during listed hours. Adults 19+ with government photo ID. No appointment is required.",
  },
];

export function faqPageGraphNode(faqs: StoreFaq[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function faqPageJsonLd(faqs: StoreFaq[]) {
  return {
    "@context": "https://schema.org",
    ...faqPageGraphNode(faqs),
  };
}

export function serializeJsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
