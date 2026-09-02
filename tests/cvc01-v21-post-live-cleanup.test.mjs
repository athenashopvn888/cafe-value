import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const read = (file) => fs.readFileSync(new URL(`../${file}`, import.meta.url), "utf8");

test("stale Budget anchors point directly to Budget Weed", () => {
  const sources = read("app/page.tsx") + read("app/components/WeedOwnerPage.tsx");
  assert.equal((sources.match(/href="\/budget-weed"/g) || []).length, 3);
  assert.doesNotMatch(sources, /href="\/budget\/?"/);
  assert.equal((sources.match(/Explore Budget Weed/g) || []).length, 2);
});

test("flower detail metadata is self-canonical without volatile THC or embedded brand", () => {
  const source = read("app/flower/[slug]/page.tsx");
  assert.ok(source.includes("canonical: `https://www.cafevaluecannabisdispensary.com/flower/${flower.slug}`"));
  const titleLine = source.split("\n").find((line) => line.trim().startsWith("title: `${flower.name}"));
  assert.ok(titleLine);
  assert.doesNotMatch(titleLine, /THC|Cafe Value/);
});

test("campaign resource titles rely on the root brand template exactly once", () => {
  const source = read("app/resources/resourceData.ts");
  assert.ok(source.includes('"seoTitle": "Flower Guide | Exotic Weed, Premium Weed, Budget Weed"'));
  assert.ok(source.includes('"seoTitle": "Value Guide | Budget Weed and Cannabis Flower"'));
});
