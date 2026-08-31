import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");

test("weak-query owners keep exact titles, canonicals, and one visible H1", async () => {
  const [categories, deliveryPage, deliveryContent, infoPage, weedOwner] = await Promise.all([
    read("app/items/[category]/page.tsx"),
    read("app/delivery/page.tsx"),
    read("app/delivery/DeliveryContent.tsx"),
    read("app/info/[seoPage]/page.tsx"),
    read("app/weed-dispensary-toronto/page.tsx"),
  ]);

  assert.match(categories, /title:\s*\{\s*absolute:/);
  assert.match(categories, /<h1 className=\{styles\.heroTitle\}>\{config\.name\}<\/h1>/);
  assert.match(deliveryPage, /absolute: "Weed Delivery Menu \| Cafe Value"/);
  assert.match(deliveryPage, /name: "Cafe Value Weed Delivery Menu"/);
  assert.match(deliveryContent, /<h1>Weed Delivery Menu<\/h1>/);
  assert.match(infoPage, /title: \{ absolute: page\.title \}/);
  assert.match(weedOwner, /title: \{ absolute: gbpLocation\.seoTitle \}/);
});

test("FMD-authoritative store identity remains unchanged", async () => {
  const location = await read("app/lib/gbp-location.ts");
  assert.match(location, /654 Spadina Ave, Toronto, ON M5S 2H7/);
  assert.match(location, /\+1 \(289\) 807-4161/);
});
