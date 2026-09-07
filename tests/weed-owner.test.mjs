import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const owner = readFileSync("app/components/WeedOwnerPage.tsx", "utf8");
const route = readFileSync("app/weed-dispensary-toronto/page.tsx", "utf8");
const home = readFileSync("app/page.tsx", "utf8");

test("protected Weed owner keeps its URL, canonical and indexability with approved Spadina positioning", () => {
  assert.match(route, /Weed Dispensary on Spadina Avenue \| Cafe Value Cannabis/);
  assert.match(route, /cafevaluecannabisdispensary\.com\/weed-dispensary-toronto\//);
  assert.match(route, /index: true/);
  assert.match(route, /follow: true/);
});

test("owner uses verified FMD identity and visit facts", () => {
  assert.match(owner, /Weed Dispensary on Spadina Avenue in Toronto/);
  assert.match(owner, /654 Spadina Ave\./);
  assert.match(owner, /\+1 289-807-4161/);
  assert.match(owner, /10:00 AM–12:00 AM daily/);
});

test("local owner uses only approved verified destinations", () => {
  assert.match(owner, /Explore the established Weed tiers/);
  for (const href of ["exotic-weed", "premium-weed", "aaa-weed", "aa-weed", "budget-weed"]) {
    assert.match(owner, new RegExp(`href="\\/${href}"`));
  }
  assert.match(owner, /href="\/info\/weed-store-near-the-annex-spadina"/);
  assert.doesNotMatch(owner, /available now|in stock|best price/i);
});

test("homepage keeps its H1 and gains one restrained bridge", () => {
  assert.match(home, /Premium Cannabis\./);
  assert.equal((home.match(/href="\/weed-dispensary-toronto\/"/g) || []).length, 1);
  assert.match(home, /Toronto store information/);
});
