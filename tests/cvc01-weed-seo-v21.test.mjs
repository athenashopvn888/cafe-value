import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const read = (file) => fs.readFileSync(new URL(`../${file}`, import.meta.url), "utf8");
const tiers = [
  ["exotic", "Exotic Weed"],
  ["premium", "Premium Weed"],
  ["aaa", "AAA+ Weed"],
  ["aa", "AA Weed"],
  ["budget", "Budget Weed"],
];

test("all five tiers use tier-first Weed canonicals and labels", () => {
  const products = read("app/lib/products.ts");
  const seo = read("app/lib/tierSeoContent.ts");
  const navbar = read("app/components/Navbar.tsx");
  const footer = read("app/components/Footer.tsx");
  const home = read("app/page.tsx");
  for (const [slug, label] of tiers) {
    assert.match(products, new RegExp(`name: "${label.replace("+", "\\+")}"[\\s\\S]{0,40}slug: "${slug}-weed"`));
    assert.ok(seo.includes(`${label} & Cannabis Flower Toronto | Cafe Value`));
    assert.ok(navbar.includes(`href: "/${slug}-weed", label: "${label}"`));
    assert.ok(footer.includes(`href="/${slug}-weed">${label}<`));
    assert.ok(home.includes(`slug: "${slug}-weed"`));
  }
});

test("legacy tier routes redirect directly and internal links contain no bare tier href", () => {
  const redirects = read("next.config.ts");
  const internal = [
    read("app/components/Navbar.tsx"),
    read("app/components/Footer.tsx"),
    read("app/resources/resourceData.ts"),
  ].join("\n");
  for (const [slug] of tiers) {
    assert.ok(redirects.includes(`source: "/${slug}", destination: "/${slug}-weed", permanent: true`));
    assert.doesNotMatch(internal, new RegExp(`href[:=] ["']/${slug}["']`));
  }
});

test("protected owner and delivery stay unchanged while nicotine remains separated", () => {
  const sitemap = read("app/sitemap.ts");
  const navbar = read("app/components/Navbar.tsx");
  const products = read("app/lib/products.ts");
  const delivery = read("app/delivery/page.tsx") + read("app/delivery/DeliveryContent.tsx");
  assert.ok(sitemap.includes("/weed-dispensary-toronto/"));
  assert.ok(navbar.includes('{ href: "/delivery", label: "🚗 Delivery" }'));
  assert.ok(delivery.includes("Weed Delivery Menu"));
  assert.ok(products.includes('name: "Nicotine Vape", slug: "vapes"'));
  assert.ok(products.includes('name: "THC Vapes", slug: "vape-disposables"'));
});
