import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const read = (file) => fs.readFileSync(new URL(`../${file}`, import.meta.url), "utf8");

test("homepage contains the exact factual repairs and approved local routing", () => {
  const home = read("app/page.tsx");
  assert.doesNotMatch(home, /24h|Center St, Toronto|FORTRESS OF CANNABIS/);
  assert.match(home, /Adults 19\+/);
  assert.match(home, /654 Spadina Ave, Toronto/);
  for (const href of ["/weed-dispensary-toronto/", "/info/weed-store-near-the-annex-spadina", "/exotic-weed", "/premium-weed", "/aaa-weed", "/aa-weed", "/budget-weed"]) {
    assert.match(home, new RegExp(`href="${href.replaceAll("/", "\\/")}"`));
  }
});

test("Store schemas use the governed name while preserving NAP pin and hours", () => {
  const layout = read("app/layout.tsx");
  const owner = read("app/components/WeedOwnerPage.tsx");
  const config = read("app/lib/gbp-location.ts");
  assert.match(layout, /name: "Cafe Value Cannabis"/);
  assert.doesNotMatch(layout, /areaServed|priceRange/);
  for (const source of [layout, owner]) {
    assert.match(source, /654 Spadina Ave/);
    assert.match(source, /43\.6633088/);
    assert.match(source, /-79\.4025299/);
    assert.match(source, /\+12898074161/);
    assert.match(source, /10:00/);
    assert.match(source, /00:00/);
  }
  assert.match(config, /storeName: "Cafe Value Cannabis"/);
});

test("approved local owners use only Spadina Avenue and The Annex additions", () => {
  const ownerRoute = read("app/weed-dispensary-toronto/page.tsx");
  const owner = read("app/components/WeedOwnerPage.tsx");
  const pages = read("app/lib/seoPages.ts");
  assert.match(ownerRoute, /Weed Dispensary on Spadina Avenue/);
  assert.match(owner, /Weed Dispensary on Spadina Avenue in Toronto/);
  assert.match(pages, /Weed Store Information for Spadina Avenue and The Annex/);
  const localEntry = pages.slice(pages.indexOf('"slug": "weed-store-near-the-annex-spadina"'), pages.indexOf('"slug": "dispensary-near-me-toronto"'));
  assert.doesNotMatch(localEntry, /Harbord|University of Toronto|Spadina Station|Bloor St W/);
});
