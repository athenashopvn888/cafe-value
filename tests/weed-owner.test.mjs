import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const owner = readFileSync("app/components/WeedOwnerPage.tsx", "utf8");
const route = readFileSync("app/weed-dispensary-toronto/page.tsx", "utf8");
const home = readFileSync("app/page.tsx", "utf8");

test("protected Weed owner keeps its URL, canonical and indexability", () => {
  assert.match(route, /Weed Dispensary in Toronto \| Cafe Value Cannabis/);
  assert.match(route, /cafevaluecannabisdispensary\.com\/weed-dispensary-toronto\//);
  assert.match(route, /index: true/);
  assert.match(route, /follow: true/);
});

test("owner uses verified FMD identity and visit facts", () => {
  assert.match(owner, /Cafe Value Cannabis — Weed Dispensary in Toronto/);
  assert.match(owner, /654 Spadina Ave\./);
  assert.match(owner, /\+1 289-807-4161/);
  assert.match(owner, /10:00 AM to midnight/);
});

test("Find Your Weed uses only approved verified destinations", () => {
  assert.match(owner, /Find Your Weed at Cafe Value/);
  assert.match(owner, /href="\/budget\/"/);
  assert.match(owner, /href="\/resources"/);
  assert.doesNotMatch(owner, /available now|in stock|best price/i);
});

test("homepage keeps its H1 and gains one restrained bridge", () => {
  assert.match(home, /Premium Cannabis\./);
  assert.equal((home.match(/href="\/weed-dispensary-toronto\/"/g) || []).length, 1);
  assert.match(home, /Explore Cafe Value Weed &amp; Cannabis/);
});
