export interface ResourceCard {
  title: string;
  href: string;
  text: string;
}

export interface ResourceSection {
  heading: string;
  body: string;
  paragraphs?: string[];
  bullets?: string[];
  faqs?: ResourceFaq[];
}

export interface ResourceFaq {
  question: string;
  answer: string;
}

export interface ResourcePage {
  slug: string;
  title: string;
  seoTitle: string;
  absoluteTitle?: boolean;
  description: string;
  eyebrow: string;
  intro: string;
  cards: ResourceCard[];
  sections: ResourceSection[];
}

export const RESOURCE_PAGES: ResourcePage[] = [
  {
    "slug": "",
    "title": "Cafe Value Resources",
    "seoTitle": "Cafe Value Resources | Menu and Shopping Guides",
    "description": "Resource guides for shopping the Cafe Value menu in Toronto, including flower, value, pre-rolls, and Native smokes where listed.",
    "eyebrow": "Resource Centre",
    "intro": "Welcome to the Cafe Value resource centre. These guides help shoppers compare categories before they visit. Choose the product category, compare what matters, then use the current menu or staff for details that can change.",
    "cards": [
      {
        "title": "Menu Guide",
        "href": "/resources/menu-guide",
        "text": "Pick the category first, then compare the details that matter."
      },
      {
        "title": "Cannabis Dispensary vs. Weed Dispensary",
        "href": "/resources/cannabis-dispensary-vs-weed-dispensary",
        "text": "Learn how common dispensary and near-me search terms relate."
      },
      {
        "title": "Flower Guide",
        "href": "/resources/flower-guide",
        "text": "Compare Exotic, Premium, AAA+, AA, and Budget with clearer category notes."
      },
      {
        "title": "Value Guide",
        "href": "/resources/value-guide",
        "text": "A cleaner way to think about cheap weed, budget weed, and affordable weed."
      },
      {
        "title": "Pre-Roll Guide",
        "href": "/resources/pre-roll-guide",
        "text": "Keep pre-roll shopping separate from flower, edibles, vapes, and concentrates."
      },
      {
        "title": "Native Smokes",
        "href": "/resources/native-smokes",
        "text": "Brand names and price notes for the cigarette menu where listed."
      }
    ],
    "sections": [
      {
        "heading": "How To Use These Guides",
        "body": "Start with the store page, then choose the category that matches the visit. Flower, pre-rolls, edibles, THC vapes, concentrates, accessories, and cigarette options should not all be compared the same way.",
        "bullets": [
          "Use the store page for directions, contact options, and listed hours.",
          "Use category pages to compare the current menu category.",
          "Ask staff when a product detail needs a current answer."
        ]
      },
      {
        "heading": "Local Notes For The Annex / Spadina",
        "body": "Cafe Value serves shoppers around Spadina Ave and Toronto. If you searched for a weed dispensary in The Annex / Spadina, this resource section keeps the visit simple: right store, right category, right next step."
      }
    ]
  },
  {
    "slug": "cannabis-dispensary-vs-weed-dispensary",
    "title": "Cannabis Dispensary vs. Weed Dispensary in Local Search",
    "seoTitle": "Cannabis vs Weed Dispensary Guide | Cafe Value Cannabis",
    "absoluteTitle": true,
    "description": "Weed dispensary, cannabis dispensary or dispensary near me? Learn how these local-search terms connect at Cafe Value Cannabis in Toronto.",
    "eyebrow": "Dispensary Terminology Guide",
    "intro": "When someone searches locally, terminology can be more flexible than it looks. Cannabis is the formal term, weed is common conversational language, and dispensary identifies the business type people are trying to locate. That is why several different phrases can lead toward the same local-search goal.",
    "cards": [
      {
        "title": "Cafe Value Weed Dispensary in Toronto",
        "href": "/weed-dispensary-toronto/",
        "text": "Use the local store page for verified visit information."
      }
    ],
    "sections": [
      {
        "heading": "Formal Language vs. Everyday Language",
        "body": "“Cannabis” is the language most often used in formal business and regulatory contexts. “Weed” is common everyday language. “Dispensary” tells the searcher what kind of place they are trying to find.",
        "paragraphs": [
          "That is why a customer can move between cannabis, weed, store and dispensary wording without necessarily changing the underlying objective."
        ]
      },
      {
        "heading": "Why the Local Page Still Leads",
        "body": "The purpose of this article is educational. It explains the relationship among dispensary, cannabis dispensary, weed dispensary and cannabis store.",
        "paragraphs": [
          "For real visit intent in Toronto, Cafe Value Cannabis should continue directing users to the existing canonical local/store page, where the business’s verified location information belongs."
        ]
      },
      {
        "heading": "Frequently Asked Questions",
        "body": "",
        "faqs": [
          {
            "question": "Is cannabis the same word as weed?",
            "answer": "They overlap in everyday use, but cannabis is the formal term while weed is more conversational."
          },
          {
            "question": "What does dispensary mean in this context?",
            "answer": "It identifies the local business type a searcher is trying to find."
          },
          {
            "question": "Can one page support several related searches?",
            "answer": "Yes. A useful page can naturally explain the connected terminology without repeating every phrase unnaturally."
          },
          {
            "question": "What is the role of the local store page?",
            "answer": "It remains the main page for location and visit intent, while this guide provides supporting topical context."
          }
        ]
      }
    ]
  },
  {
    "slug": "menu-guide",
    "title": "How To Shop The Cafe Value Menu",
    "seoTitle": "Cafe Value Menu Guide | Toronto Weed Dispensary Tips",
    "description": "How to shop the Cafe Value menu by category, with natural tips for flower, pre-rolls, edibles, THC vapes, concentrates, and value shopping.",
    "eyebrow": "Menu Guide",
    "intro": "The fastest way through the menu is simple: choose the product type before you compare products. That keeps the page useful whether you want premium flower, cheap weed, pre-rolls, edibles, THC vapes, or concentrates.",
    "cards": [
      {
        "title": "Flower Guide",
        "href": "/resources/flower-guide",
        "text": "Compare Exotic, Premium, AAA+, AA, and Budget with clearer category notes."
      },
      {
        "title": "Value Guide",
        "href": "/resources/value-guide",
        "text": "A cleaner way to think about cheap weed, budget weed, and affordable weed."
      },
      {
        "title": "Pre-Roll Guide",
        "href": "/resources/pre-roll-guide",
        "text": "Keep pre-roll shopping separate from flower, edibles, vapes, and concentrates."
      },
      {
        "title": "Native Smokes",
        "href": "/resources/native-smokes",
        "text": "Brand names and price notes for the cigarette menu where listed."
      }
    ],
    "sections": [
      {
        "heading": "Choose The Category First",
        "body": "If you want flower, start with flower. If you want pre-rolls, stay in pre-rolls. If the visit is about edibles, vapes, concentrates, or accessories, open that section and compare there first.",
        "bullets": [
          "Flower shoppers should compare tiers.",
          "Pre-roll shoppers should compare format and package details.",
          "Edible, vape, and concentrate shoppers should review item details carefully."
        ]
      },
      {
        "heading": "Check What Is Current",
        "body": "Use this guide for the shopping method, then use the current menu and staff for the product names, prices, and package details currently listed."
      }
    ]
  },
  {
    "slug": "flower-guide",
    "title": "Cafe Value Flower Guide",
    "seoTitle": "Flower Guide | Exotic Weed, Premium Weed, Budget Weed",
    "description": "Compare exotic flower, premium flower, budget weed, cheap weed, and affordable weed at Cafe Value with clearer category notes.",
    "eyebrow": "Flower Guide",
    "intro": "Flower gets easier when you compare one tier at a time. Exotic flower and premium flower sit in different lanes from AAA+, AA, and Budget, so start with the lane that matches the visit.",
    "cards": [
      {
        "title": "Exotic Weed",
        "href": "/exotic-weed",
        "text": "Start here when you want the higher shelf flower lane."
      },
      {
        "title": "Premium Weed",
        "href": "/premium-weed",
        "text": "A strong lane for shoppers comparing quality and value."
      },
      {
        "title": "AAA+ Weed",
        "href": "/aaa-weed",
        "text": "A clear middle lane for flower comparison."
      },
      {
        "title": "AA Weed",
        "href": "/aa-weed",
        "text": "A straight value-minded flower lane."
      },
      {
        "title": "Budget Weed",
        "href": "/budget-weed",
        "text": "Start here when cheap weed or affordable weed is the goal."
      }
    ],
    "sections": [
      {
        "heading": "Compare Tier, Then Details",
        "body": "Open the tier, then compare the current product name, format, weight, posted price, and item notes. That gives you a clean decision path without turning the whole menu into noise."
      },
      {
        "heading": "Value Does Not Need To Be Complicated",
        "body": "Budget weed and affordable weed are easiest to compare when you stay inside the right lane. If the details are thin or the choice feels close, ask staff before choosing."
      }
    ]
  },
  {
    "slug": "value-guide",
    "title": "Cafe Value Value Guide",
    "seoTitle": "Value Guide | Budget Weed and Cannabis Flower",
    "description": "A practical value guide for shoppers comparing cheap weed, budget weed, affordable weed, and menu categories at Cafe Value.",
    "eyebrow": "Value Guide",
    "intro": "Good value shopping is not just chasing the lowest number. It is choosing the right category, checking the current details, and knowing when Budget, AA, or another lane makes more sense.",
    "cards": [
      {
        "title": "Budget Weed",
        "href": "/budget-weed",
        "text": "The first stop for cheap weed and affordable weed comparisons."
      },
      {
        "title": "AA Weed",
        "href": "/aa-weed",
        "text": "A simple value lane for flower shoppers."
      },
      {
        "title": "Menu Guide",
        "href": "/resources/menu-guide",
        "text": "Use this when you are comparing more than flower."
      }
    ],
    "sections": [
      {
        "heading": "Start With The Budget Lane",
        "body": "If low spend is the point, start in Budget and AA before jumping across the rest of the menu. That keeps the comparison honest and quick."
      },
      {
        "heading": "Read The Menu Notes",
        "body": "Compare the product name, format, size, and posted price. If one detail is unclear, use staff for the answer instead of guessing from an old blog line."
      }
    ]
  },
  {
    "slug": "pre-roll-guide",
    "title": "Cafe Value Pre-Roll Guide",
    "seoTitle": "Cafe Value Pre-Roll Guide | Toronto Cannabis Menu Tips",
    "description": "How to compare pre-rolls at Cafe Value without mixing them up with flower, edibles, THC vapes, and concentrates.",
    "eyebrow": "Pre-Roll Guide",
    "intro": "Pre-rolls are their own lane. Compare them like pre-rolls, not like loose flower, edibles, THC vapes, or concentrates.",
    "cards": [
      {
        "title": "Pre-Rolls",
        "href": "/items/prerolls",
        "text": "Open the current pre-roll category."
      },
      {
        "title": "Menu Guide",
        "href": "/resources/menu-guide",
        "text": "Use this if you are still choosing between categories."
      }
    ],
    "sections": [
      {
        "heading": "Compare Format First",
        "body": "Check whether the listing is a single, pack, infused option, or another pre-roll format shown on the menu. Then compare the posted notes and price before choosing."
      },
      {
        "heading": "Keep It Separate",
        "body": "If the visit turns into flower, edibles, vapes, or concentrates, switch categories. Do not force one pre-roll decision to carry the whole menu."
      }
    ]
  },
  {
    "slug": "resource-centre-launch",
    "title": "Cafe Value Resource Centre Launch",
    "seoTitle": "Cafe Value Resource Centre Launch",
    "description": "The Cafe Value resource centre gives shoppers cleaner menu guides for flower, value, pre-rolls, and store visits.",
    "eyebrow": "Resource Update",
    "intro": "The resource centre is here to make the menu easier to shop. No stiff SEO talk, no stale menu claims, just cleaner notes for real shoppers.",
    "cards": [
      {
        "title": "Menu Guide",
        "href": "/resources/menu-guide",
        "text": "Pick the category first, then compare the details that matter."
      },
      {
        "title": "Flower Guide",
        "href": "/resources/flower-guide",
        "text": "Compare Exotic, Premium, AAA+, AA, and Budget with clearer category notes."
      },
      {
        "title": "Value Guide",
        "href": "/resources/value-guide",
        "text": "A cleaner way to think about cheap weed, budget weed, and affordable weed."
      },
      {
        "title": "Pre-Roll Guide",
        "href": "/resources/pre-roll-guide",
        "text": "Keep pre-roll shopping separate from flower, edibles, vapes, and concentrates."
      },
      {
        "title": "Native Smokes",
        "href": "/resources/native-smokes",
        "text": "Brand names and price notes for the cigarette menu where listed."
      }
    ],
    "sections": [
      {
        "heading": "What Changed",
        "body": "The resources section now gives shoppers a central place for menu tips, flower comparison, value shopping, pre-roll notes, and store visit guidance."
      },
      {
        "heading": "How To Use It",
        "body": "Start with the guide that matches the visit, then open the current menu or store page when you are ready to compare details."
      }
    ]
  },
  {
    "slug": "native-smokes",
    "title": "Cafe Value Native Smokes Resource",
    "seoTitle": "Cafe Value Native Smokes | $25 Cigarette Notes",
    "description": "Cafe Value Native smokes resource with cigarette brand names shown in the store source and $25 notes where listed.",
    "eyebrow": "Native Smokes",
    "intro": "Cafe Value shoppers looking for Native smokes can use this page as a cleaner starting point. The store source currently shows these $25 cigarette listings: Canadian Lights, Canadian Full, Putters, Canadian Goose Full, Canadian Goose Lights, Canadian Menthol, Canadian Classics Original, Canadian Classics Silver, Rolled Gold Lights, Nexus Full, Nexus Lights, and Time Full. Check the current menu or staff before making the trip.",
    "cards": [
      {
        "title": "Cigarette Menu",
        "href": "/items/cigarettes",
        "text": "Open the current cigarette category before making the trip."
      },
      {
        "title": "Native Cigarettes Guide",
        "href": "/resources/native-smokes/native-cigarettes-guide",
        "text": "Brand notes and a cleaner shopping checklist."
      },
      {
        "title": "Store Page",
        "href": "/weed-dispensary-toronto",
        "text": "Use the store page for directions, contact options, and listed hours."
      }
    ],
    "sections": [
      {
        "heading": "Brand Names Shown In The Store Source",
        "body": "The cigarette menu source currently lists these $25 lines: Canadian Lights, Canadian Full, Putters, Canadian Goose Full, Canadian Goose Lights, Canadian Menthol, Canadian Classics Original, Canadian Classics Silver, Rolled Gold Lights, Nexus Full, Nexus Lights, and Time Full. Treat this as a menu guide and confirm current options before choosing.",
        "bullets": [
          "Canadian Lights",
          "Canadian Full",
          "Putters",
          "Canadian Goose Full",
          "Canadian Goose Lights",
          "Canadian Menthol",
          "Canadian Classics Original",
          "Canadian Classics Silver",
          "Rolled Gold Lights",
          "Nexus Full",
          "Nexus Lights",
          "Time Full"
        ]
      },
      {
        "heading": "$25 Cigarette Notes",
        "body": "Where the menu lists $25 Native cigarettes, this resource points shoppers to the cigarette category first. Check the current menu or ask staff for what is available today."
      },
      {
        "heading": "Keep The Visit Simple",
        "body": "If you are also shopping cannabis, keep the cigarette decision separate from flower, pre-rolls, edibles, THC vapes, and concentrates. One lane at a time keeps the visit smooth."
      }
    ]
  },
  {
    "slug": "native-smokes/native-cigarettes-guide",
    "title": "Cafe Value Native Cigarettes Guide",
    "seoTitle": "Cafe Value Native Cigarettes Guide | Brands and $25 Notes",
    "description": "A shopper-friendly Native cigarettes guide for Cafe Value, including $25 brand names shown in the store source.",
    "eyebrow": "Native Cigarettes Guide",
    "intro": "If Native cigarettes are part of the stop, start with the cigarette category and compare the current listings. Cafe Value source data currently includes these $25 lines: Canadian Lights, Canadian Full, Putters, Canadian Goose Full, Canadian Goose Lights, Canadian Menthol, Canadian Classics Original, Canadian Classics Silver, Rolled Gold Lights, Nexus Full, Nexus Lights, and Time Full.",
    "cards": [
      {
        "title": "Cigarette Menu",
        "href": "/items/cigarettes",
        "text": "Open the current cigarette category before making the trip."
      },
      {
        "title": "Native Cigarettes Guide",
        "href": "/resources/native-smokes/native-cigarettes-guide",
        "text": "Brand notes and a cleaner shopping checklist."
      },
      {
        "title": "Store Page",
        "href": "/weed-dispensary-toronto",
        "text": "Use the store page for directions, contact options, and listed hours."
      }
    ],
    "sections": [
      {
        "heading": "Compare The $25 Brand Names",
        "body": "Look for the brand name first, then compare the posted price and any item notes. The store source currently includes Canadian Lights, Canadian Full, Putters, Canadian Goose Full, Canadian Goose Lights, Canadian Menthol, Canadian Classics Original, Canadian Classics Silver, Rolled Gold Lights, Nexus Full, Nexus Lights, and Time Full.",
        "bullets": [
          "Canadian Lights",
          "Canadian Full",
          "Putters",
          "Canadian Goose Full",
          "Canadian Goose Lights",
          "Canadian Menthol",
          "Canadian Classics Original",
          "Canadian Classics Silver",
          "Rolled Gold Lights",
          "Nexus Full",
          "Nexus Lights",
          "Time Full"
        ]
      },
      {
        "heading": "Ask If The Shelf Matters",
        "body": "When a specific full, light, menthol, or package option matters, ask staff before choosing. That is better than guessing from any resource page."
      },
      {
        "heading": "Use The Cigarette Category",
        "body": "Open the cigarette category before the trip. It is the cleanest public path for current Native smokes information at this store."
      }
    ]
  }
];

export const RESOURCE_HOME = RESOURCE_PAGES[0];

export function getResourcePage(slug: string) {
  const cleanSlug = slug.replace(/^\/+|\/+$/g, "");
  return RESOURCE_PAGES.find((page) => page.slug === cleanSlug);
}
