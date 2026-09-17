import type { Metadata } from "next";
import DeliveryContent from "./DeliveryContent";
import menu from "./delivery-menu.json";

export const metadata: Metadata = {
  title: { absolute: "Weed Delivery from Spadina Annex | Cafe Value Cannabis" },
  description: "Cafe Value Cannabis delivery menu from the 654 Spadina Ave walk-in in The Annex. The dispatcher confirms availability and delivery details before an order is accepted. Adults 19+.",
  alternates: { canonical: "https://www.cafevaluecannabisdispensary.com/delivery" },
};

export default function DeliveryPage() {
  const structuredData = { "@context": "https://schema.org", "@type": "CollectionPage", name: "Cafe Value Weed Delivery Menu", url: "https://www.cafevaluecannabisdispensary.com/delivery", mainEntity: { "@type": "ItemList", numberOfItems: menu.products.length, itemListElement: menu.products.map((product, index) => ({ "@type": "ListItem", position: index + 1, name: product.name })) } };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} /><DeliveryContent /></>;
}
