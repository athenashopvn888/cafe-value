import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const read = (file) => fs.readFileSync(new URL(`../${file}`, import.meta.url), "utf8");

test("CVC01 authority resource uses the approved route and metadata", () => {
  const data = read("app/resources/resourceData.ts");
  assert.ok(data.includes('"slug": "cannabis-dispensary-vs-weed-dispensary"'));
  assert.ok(data.includes('"seoTitle": "Cannabis vs Weed Dispensary Guide | Cafe Value Cannabis"'));
  assert.ok(data.includes('"absoluteTitle": true'));
  assert.ok(data.includes('"title": "Cannabis Dispensary vs. Weed Dispensary in Local Search"'));
  assert.ok(data.includes('"description": "Weed dispensary, cannabis dispensary or dispensary near me? Learn how these local-search terms connect at Cafe Value Cannabis in Toronto."'));
});

test("authority resource links to the verified local owner and receives one hub backlink", () => {
  const data = read("app/resources/resourceData.ts");
  assert.ok(data.includes('"href": "/weed-dispensary-toronto/"'));
  assert.equal((data.match(/"href": "\/resources\/cannabis-dispensary-vs-weed-dispensary"/g) || []).length, 1);
  assert.equal((data.match(/"title": "Cannabis Dispensary vs\. Weed Dispensary"/g) || []).length, 1);
});

test("resource renderer preserves exact FAQ hierarchy and self-canonical behavior", () => {
  const view = read("app/resources/ResourceView.tsx");
  const route = read("app/resources/[...slug]/page.tsx");
  const sitemap = read("app/sitemap.ts");
  assert.ok(view.includes("<h1>{page.title}</h1>"));
  assert.ok(view.includes("<h3>{faq.question}</h3>"));
  assert.ok(route.includes('canonical: "https://www.cafevaluecannabisdispensary.com/resources/" + page.slug'));
  assert.ok(route.includes("page.absoluteTitle ? { absolute: page.seoTitle } : page.seoTitle"));
  assert.ok(sitemap.includes("RESOURCE_PAGES.map"));
});

test("approved FAQ copy is complete", () => {
  const data = read("app/resources/resourceData.ts");
  for (const question of [
    "Is cannabis the same word as weed?",
    "What does dispensary mean in this context?",
    "Can one page support several related searches?",
    "What is the role of the local store page?",
  ]) assert.ok(data.includes(question));
});
