import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const owner = readFileSync("app/components/WeedOwnerPage.tsx", "utf8");
const route = readFileSync("app/weed-dispensary-toronto/page.tsx", "utf8");
const home = readFileSync("app/page.tsx", "utf8");

test("protected Weed owner keeps its URL and points canonical at the homepage hub", () => {
  assert.match(route, /weed-dispensary-toronto/);
  assert.match(route, /canonical: "https:\/\/www\.cafevaluecannabisdispensary\.com\/"/);
  assert.match(route, /index: false/);
  assert.match(route, /follow: true/);
});

test("owner uses verified FMD identity and visit facts", () => {
  assert.match(owner, /Cafe Value Cannabis — Annex walk-in on Spadina/);
  assert.match(owner, /654 Spadina Ave/);
  assert.match(owner, /\+1 289-807-4161/);
  assert.match(owner, /This location has closed and moved to Green Sundae in Mississauga/);
  assert.doesNotMatch(owner, /openingHours/);
});

test("Find Your Weed uses only approved verified destinations", () => {
  assert.match(owner, /Find Your Weed at Cafe Value/);
  assert.match(owner, /href="\/budget-weed"/);
  assert.match(owner, /href="\/resources"/);
  assert.doesNotMatch(owner, /available now|in stock|best price/i);
});

test("homepage keeps a corridor H1 and a /visit bridge", () => {
  assert.match(home, /Cafe Value Cannabis\./);
  assert.match(home, /href="\/visit"/);
  assert.match(home, /How to reach The Annex/);
});
