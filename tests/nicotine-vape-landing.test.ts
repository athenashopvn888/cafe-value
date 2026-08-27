import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import { SEO_PAGES } from "../app/lib/seoPages.ts";

const page = SEO_PAGES.find((entry) => entry.slug === "nicotine-vapes-toronto");
const expectedSlugs = [
  "geek-promax-5-30k-puffs",
  "geek-universe-25k-puffs",
  "level-x-g2-pod",
  "nexa-pix-30k-puffs-many-flavors",
  "ovns-10000-5-10k-puffs",
  "ovns-disposable-5-8ml-many-flavors",
  "ovns-pioneer-5-22k-puffs",
];

test("Cafe Value nicotine page uses exactly seven verified non-THC category cards", () => {
  assert.ok(page?.heroPreview);
  assert.deepEqual(page.heroPreview.products.map((product) => product.sourceSlug), expectedSlugs);
  assert.ok(page.heroPreview.products.every((product) => product.image.startsWith("https://")));
  assert.ok(page.heroPreview.products.every((product) => !/%|many flavors|goober/i.test(product.name)));
  assert.equal(page.heroPreview.menuHref, "/items/vapes");
  assert.equal(page.heroPreview.secondaryHref, "#featured-vapes");
  assert.equal(page.warning, "Adults 19+. Nicotine is addictive.");
  assert.equal(page.suppressCannabisSections, true);
});

test("Cafe Value nicotine page has canonical and internal discovery", () => {
  const footerSource = readFileSync(new URL("../app/components/Footer.tsx", import.meta.url), "utf8");
  const homeSource = readFileSync(new URL("../app/page.tsx", import.meta.url), "utf8");
  const sitemapSource = readFileSync(new URL("../app/sitemap.ts", import.meta.url), "utf8");
  const infoPageSource = readFileSync(new URL("../app/info/[seoPage]/page.tsx", import.meta.url), "utf8");

  assert.equal(page?.canonical, "https://www.cafevaluecannabisdispensary.com/info/nicotine-vapes-toronto");
  assert.ok(footerSource.includes('href="/info/nicotine-vapes-toronto"'));
  assert.ok(homeSource.includes('href="/info/nicotine-vapes-toronto"'));
  assert.match(sitemapSource, /SEO_PAGES\.map\(/);
  assert.doesNotMatch(infoPageSource, /href=\{`?\/item\//);
});

test("Cafe Value nicotine copy keeps THC routes out of navigation", () => {
  assert.ok(page);
  assert.match(page.sections[2].body, /\/items\/vape-disposables/);
  assert.match(page.sections[2].body, /excluded/);
  assert.equal(page.heroPreview?.menuHref, "/items/vapes");
});
