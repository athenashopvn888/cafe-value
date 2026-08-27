const NATIVE_HERO_DISCLOSURE = "Brand preview only. Selection varies by store; check the current cigarette menu before visiting.";

const NATIVE_HERO_PRODUCTS = [
  { name: "BB Lights", image: "/products/1001-BB-LIGHTS-CARTONS.webp" },
  { name: "BB Full", image: "/products/1003-BB-FULL-CARTON.webp" },
  { name: "Canadian Lights", image: "/products/1005-CANADIAN-LIGHTS.webp" },
  { name: "Canadian Full", image: "/products/1006-CANADIAN-FULL.webp" },
  { name: "Canadian Classics Silver", image: "/products/1015-CANADIAN-CLASSICS-SILVER.webp" },
  { name: "Canadian Menthol", image: "/products/1013-CANADIAN-MENTHOL.webp" },
] as const;

const NICOTINE_VAPE_PRODUCTS = [
  { name: "Geek Promax — 30K Puffs", sourceSlug: "geek-promax-5-30k-puffs", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/GEEK-PROMAX.jpg" },
  { name: "Geek Universe — 25K Puffs", sourceSlug: "geek-universe-25k-puffs", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/geek_universe_pulse_x_25k.webp" },
  { name: "Level X G2 Pod", sourceSlug: "level-x-g2-pod", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/1086-Level-X-G2-pod.webp" },
  { name: "NEXA PIX — 30K Puffs", sourceSlug: "nexa-pix-30k-puffs-many-flavors", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/nexa_showcase_600x600.webp" },
  { name: "OVNS 10000 — 10K Puffs", sourceSlug: "ovns-10000-5-10k-puffs", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/1081OVNS10000.jpg" },
  { name: "OVNS Disposable — 8 mL", sourceSlug: "ovns-disposable-5-8ml-many-flavors", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/OVNS500x500HQ.webp" },
  { name: "OVNS Pioneer — 22K Puffs", sourceSlug: "ovns-pioneer-5-22k-puffs", image: "https://pub-eb3e1fe18a43477eabc885cfb791d97c.r2.dev/products/OVNS_PIONEER_5_22K_PUFFS.webp" },
] as const;

export interface SeoPageData {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  icon: string;
  heroTagline: string;
  banner?: string;
  canonical?: string;
  warning?: string;
  suppressCannabisSections?: boolean;
  heroPreview?: {
    eyebrow: string;
    intro: string;
    products: ReadonlyArray<{ name: string; image: string; sourceSlug?: string }>;
    disclosure: string;
    menuHref?: string;
    primaryLabel?: string;
    secondaryHref?: string;
    secondaryLabel?: string;
    identityStrip?: string;
    featuredHeading?: string;
    featuredIntro?: string;
    theme?: "native" | "nicotine";
  };
  sections: { heading: string; body: string }[];
  faqs: { q: string; a: string }[];
}

export const SEO_PAGES: SeoPageData[] = [
  {
    "slug": "toronto-weed-dispensary",
    "title": "Cafe Value Weed Dispensary in Toronto",
    "metaDescription": "Cafe Value is a weed dispensary in Toronto with flower, pre-rolls, edibles, THC vapes, concentrates, accessories, and shopper resources.",
    "h1": "Cafe Value Weed Dispensary in Toronto",
    "icon": "*",
    "heroTagline": "Menu shopping around The Annex / Spadina",
    "sections": [
      {
        "heading": "Shop Cafe Value With A Plan",
        "body": "Cafe Value helps adults compare the menu without overcomplicating the visit. Start with the store page, then choose the category that matches the visit: flower, pre-rolls, edibles, THC vapes, concentrates, accessories, or cigarettes where listed."
      },
      {
        "heading": "Local Menu Notes For The Annex / Spadina",
        "body": "If you searched for a weed dispensary in The Annex / Spadina or a cannabis dispensary in Toronto, use this page to get oriented. Spadina Ave and Toronto are useful local cues, but the current menu and staff are the right place for details that change."
      },
      {
        "heading": "What To Check Before Visiting",
        "body": "Confirm the store page, directions, contact options, listed hours, and menu category first. For current product names, prices, and package details, use the menu or ask staff before leaving."
      }
    ],
    "faqs": [
      {
        "q": "Is Cafe Value a cannabis dispensary in Toronto?",
        "a": "Yes. Cafe Value serves shoppers looking for a cannabis dispensary in Toronto. Use the store page for directions, contact options, and listed hours."
      },
      {
        "q": "What should I check before visiting Cafe Value?",
        "a": "Start with the store page, then use the current menu to compare product names, formats, prices, and item notes."
      },
      {
        "q": "Does Cafe Value carry flower and pre-rolls?",
        "a": "The site has menu categories for flower tiers and pre-rolls. Check the current menu or ask staff for current details."
      }
    ]
  },
  {
    "slug": "nicotine-vapes-toronto",
    "title": "Nicotine Vapes in Toronto | Cafe Value",
    "metaDescription": "Adults 19+: review seven live-checked nicotine vape category cards from Cafe Value in Toronto, then use /items/vapes for category details. Nicotine is addictive.",
    "canonical": "https://www.cafevaluecannabisdispensary.com/info/nicotine-vapes-toronto",
    "h1": "Nicotine Vapes at Cafe Value in Toronto",
    "icon": "V",
    "heroTagline": "A Toronto nicotine-vape guide for Spadina and The Annex",
    "warning": "Adults 19+. Nicotine is addictive.",
    "suppressCannabisSections": true,
    "heroPreview": {
      "eyebrow": "CAFE VALUE • TORONTO • SPADINA / THE ANNEX • ADULTS 19+",
      "intro": "This Cafe Value guide presents seven image-backed records live-checked in the VAPE PENS category. Use the cards to open /items/vapes, where the storefront presents its nicotine category information. Product details can change. Nicotine is addictive.",
      "products": NICOTINE_VAPE_PRODUCTS,
      "disclosure": "Seven live-checked category cards. This is not a claim about complete selection, stock, price or availability.",
      "menuHref": "/items/vapes",
      "primaryLabel": "Browse Nicotine Vapes",
      "secondaryHref": "#featured-vapes",
      "secondaryLabel": "Compare Seven Category Cards",
      "identityStrip": "Cafe Value | Toronto | Spadina and The Annex | Adults 19+ | Nicotine is addictive.",
      "featuredHeading": "Seven Live-Checked Cafe Value Vape Cards",
      "featuredIntro": "These image-backed cards were verified in Cafe Value's VAPE PENS category. They are category navigation aids, not a guarantee of complete selection, stock, price or availability. Open /items/vapes for the category information presented by the storefront.",
      "theme": "nicotine"
    },
    "sections": [
      {
        "heading": "Read Product Names as Listing Identifiers",
        "body": "Some verified names include puff counts, while Level X G2 Pod and OVNS Disposable identify specific formats. Use those details only to distinguish the category cards. This page does not present puff counts as guarantees of lifespan, performance or superiority."
      },
      {
        "heading": "Keep Every Format Attached to Its Own Card",
        "body": "The Level X card identifies a pod and the OVNS card identifies a disposable. Do not apply those labels to another product by assumption. Open /items/vapes and keep each supported detail attached to the category record that provides it."
      },
      {
        "heading": "Keep Nicotine and THC Vape Routes Separate",
        "body": "This Cafe Value guide uses image-backed records from the VAPE PENS category under /items/vapes. THC and cannabis products associated with /items/vape-disposables are excluded from this nicotine page."
      }
    ],
    "faqs": [
      {
        "q": "Where should I review Cafe Value's nicotine vape category?",
        "a": "Use /items/vapes. The seven featured cards are live-checked category records, while the category page is the storefront destination for nicotine-vape information."
      },
      {
        "q": "Do all seven Cafe Value cards use the same format?",
        "a": "No format should be assumed. The supported card names identify Level X G2 Pod and OVNS Disposable; read the other category records without relabelling them."
      },
      {
        "q": "Does this page include THC or cannabis vapes?",
        "a": "No. This guide is limited to the VAPE PENS category for adults 19+. THC and cannabis vape products associated with /items/vape-disposables are excluded."
      }
    ]
  },
  {
    "slug": "cheap-weed-toronto",
    "title": "Cafe Value Cheap Weed and Budget Weed Guide",
    "metaDescription": "A value-minded Cafe Value guide for cheap weed, budget weed, affordable weed, and flower tier shopping in Toronto.",
    "h1": "Cafe Value Cheap Weed and Budget Weed Guide",
    "icon": "$",
    "heroTagline": "Value shopping without the guesswork",
    "sections": [
      {
        "heading": "Start With Budget And AA",
        "body": "If cheap weed or affordable weed is the mission, start with the Budget and AA flower lanes before jumping around the rest of the menu. That keeps the comparison clean."
      },
      {
        "heading": "Compare The Current Menu",
        "body": "Look at product name, format, weight, posted price, and item notes. Menus change, so use this page for the shopping method and the live menu or staff for current details."
      },
      {
        "heading": "Know When To Move Up",
        "body": "If Budget or AA does not fit the visit, compare AAA+, Premium, or Exotic flower next. A better tier choice starts with the category, then the current product details."
      }
    ],
    "faqs": [
      {
        "q": "Where should value shoppers start at Cafe Value?",
        "a": "Start with Budget and AA flower, then compare current menu details before choosing."
      },
      {
        "q": "Does affordable weed mean guessing?",
        "a": "No. Compare the category, product name, format, size, posted price, and item notes. Ask staff if anything is unclear."
      },
      {
        "q": "Where can shoppers confirm current prices?",
        "a": "Use the current menu or ask staff for the prices and item details currently listed."
      }
    ]
  },
  {
    "slug": "native-cigarettes-toronto",
    "title": "Cafe Value Native Cigarettes Resource",
    "metaDescription": "Cafe Value Native cigarettes resource with brand names shown in the store source and $25 notes where listed.",
    "h1": "Cafe Value Native Cigarettes Resource",
    "icon": "#",
    "heroTagline": "$25 cigarette listings and brand names where listed",
    "heroPreview": {
      "eyebrow": "Cafe Value · 654 Spadina Ave, Toronto",
      "intro": "Cigarette category and visit information for Spadina Avenue",
      "products": NATIVE_HERO_PRODUCTS,
      "disclosure": NATIVE_HERO_DISCLOSURE
    },
    "sections": [
      {
        "heading": "Start With The Cigarette Category",
        "body": "The cigarette menu source currently shows these $25 listings: Canadian Lights, Canadian Full, Putters, Canadian Goose Full, Canadian Goose Lights, Canadian Menthol, Canadian Classics Original, Canadian Classics Silver, Rolled Gold Lights, Nexus Full, Nexus Lights, and Time Full. Check the current menu or ask staff before making the trip."
      },
      {
        "heading": "Keep Cannabis And Smokes Separate",
        "body": "If you are also shopping flower, pre-rolls, edibles, THC vapes, or concentrates, compare those categories separately. It keeps the visit cleaner."
      },
      {
        "heading": "Confirm What Matters Today",
        "body": "Specific brands, package options, and prices can change. Use this resource for the shopping path, then confirm current details with the menu or staff."
      }
    ],
    "faqs": [
      {
        "q": "Does Cafe Value list Native cigarette options?",
        "a": "The menu source currently shows Native smoke brands such as Canadian Lights, Canadian Full, Putters, Canadian Goose Full, Canadian Goose Lights, Canadian Menthol, Canadian Classics Original, Canadian Classics Silver, Rolled Gold Lights, Nexus Full, Nexus Lights, and Time Full. Confirm current options before visiting."
      },
      {
        "q": "Are $25 prices guaranteed?",
        "a": "This page points shoppers toward menu listings where $25 cigarette options are shown. Check the current listed price and package details before choosing."
      },
      {
        "q": "Where should shoppers start?",
        "a": "Open the cigarette category, then use the store page for directions, contact options, and listed hours."
      }
    ]
  },
  {
    "slug": "weed-store-near-the-annex-spadina",
    "title": "Weed Store Near The Annex / Spadina | Cafe Value",
    "metaDescription": "Looking for a weed store near The Annex / Spadina? Use Cafe Value for store-page checks, menu categories, and local visit planning in Toronto.",
    "h1": "Weed Store Near The Annex / Spadina",
    "icon": ">",
    "heroTagline": "Local visit notes for Spadina Ave and Toronto",
    "sections": [
      {
        "heading": "Plan Your Visit",
        "body": "Before visiting Cafe Value, review the address, contact options, listed hours, and current menu on the official website."
      },
      {
        "heading": "Choose The Product Category",
        "body": "Flower, pre-rolls, edibles, THC vapes, concentrates, and accessories all shop differently. Pick the category first, then compare current product details."
      },
      {
        "heading": "Use Staff For The Close Call",
        "body": "If one detail decides the visit, ask staff. That is the cleanest way to handle current product questions."
      }
    ],
    "faqs": [
      {
        "q": "What is the best first step for a The Annex / Spadina visit?",
        "a": "Open the Cafe Value store page, then use the current menu category that matches the visit."
      },
      {
        "q": "Should shoppers rely on old blog prices?",
        "a": "No. Use the current menu or staff for details that change."
      },
      {
        "q": "What categories can shoppers compare?",
        "a": "Use the menu categories for flower, pre-rolls, edibles, THC vapes, concentrates, accessories, and cigarettes where listed."
      }
    ]
  },
  {
    "slug": "dispensary-near-me-toronto",
    "title": "Cannabis Dispensary Near Me in Toronto | Cafe Value",
    "metaDescription": "Use Cafe Value when searching for a cannabis dispensary near me in Toronto; compare menu categories and confirm current details before visiting.",
    "h1": "Cannabis Dispensary Near Me in Toronto",
    "icon": "o",
    "heroTagline": "Store page first, menu category second",
    "sections": [
      {
        "heading": "Make The Search Useful",
        "body": "Cafe Value gives nearby shoppers a clear path to the store page, menu categories, and resources."
      },
      {
        "heading": "Compare Categories Naturally",
        "body": "Use normal shopping language: cannabis dispensary in Toronto, weed dispensary in The Annex / Spadina, cheap weed, budget weed, premium flower, pre-rolls, edibles, THC vapes, and concentrates. The point is to help the shopper, not stuff a sentence."
      },
      {
        "heading": "Check Current Details",
        "body": "For current product names, prices, and package details, use the menu or ask staff. This page is for orientation and visit planning."
      }
    ],
    "faqs": [
      {
        "q": "Is Cafe Value useful for a near-me cannabis search?",
        "a": "Yes. Use the store page to confirm Cafe Value, then open the menu category that matches your visit."
      },
      {
        "q": "Can shoppers browse before visiting?",
        "a": "Yes. Use the current menu and resources section before heading over."
      },
      {
        "q": "What should shoppers avoid?",
        "a": "Avoid guessing from old examples. Confirm current details with the menu or staff."
      }
    ]
  }
];

export function getSeoPageBySlug(slug: string): SeoPageData | undefined {
  return SEO_PAGES.find((p) => p.slug === slug);
}
