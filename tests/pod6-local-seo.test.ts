import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "path";
import test from "node:test";

const read = (file: string) => readFileSync(file, "utf8");

function walkSourceFiles(dir: string, acc: string[] = []) {
  for (const entry of readdirSync(dir)) {
    if (entry === "node_modules" || entry === ".next" || entry === ".git") continue;
    const full = path.join(dir, entry);
    if (statSync(full).isDirectory()) walkSourceFiles(full, acc);
    else if (/\.(ts|tsx|js|jsx|css|md)$/.test(entry)) acc.push(full);
  }
  return acc;
}

test("CVC01 homepage schema is CannabisStore + FAQPage with FMD phone and non-24h hours", () => {
  const layout = read("app/layout.tsx");
  const home = read("app/page.tsx");
  const identity = read("app/lib/storeIdentity.ts");
  assert.match(layout, /"@type": "CannabisStore"/);
  assert.match(layout, /telephone: STORE\.phoneIntl/);
  assert.match(identity, /phoneIntl: "\+12898074161"/);
  assert.match(identity, /opens: "10:00"/);
  assert.match(identity, /closes: "00:00"/);
  assert.doesNotMatch(identity, /Open 24 Hours/);
  assert.match(home, /faqPageJsonLd\(HOME_FAQS\)/);
  assert.match(identity, /"@type": "FAQPage"/);
  assert.match(identity, /cafe-value-dispensary\.png/);
  assert.match(layout, /canonical: STORE\.homepageUrl/);
  assert.match(layout, /Annex Spadina Dispensary/);
});

test("CVC01 /visit is a real Annex/Spadina how-to-reach page with NAP, transit, and parking", () => {
  const visit = [read("app/visit/page.tsx"), read("app/lib/storeIdentity.ts")].join("\n");
  const sitemap = read("app/sitemap.ts");
  assert.match(visit, /How to Reach Cafe Value Cannabis on Spadina in The Annex/);
  assert.match(visit, /654 Spadina Ave, Toronto, ON M5S 2H7/);
  assert.match(visit, /\+1 \(289\) 807-4161/);
  assert.match(visit, /510 Spadina/);
  assert.match(visit, /parking/i);
  assert.match(visit, /Harbord/);
  assert.match(visit, /stays the visit hub/i);
  assert.match(visit, /faqPageGraphNode\(VISIT_FAQS\)/);
  assert.match(visit, /Not 24 hours|not a 24-hour|not 24 hours/i);
  assert.match(sitemap, /\$\{BASE\}\/visit/);
});

test("CVC01 demotes thin Toronto city pages", () => {
  const city = read("app/weed-dispensary-toronto/page.tsx");
  const info = read("app/info/[seoPage]/page.tsx");
  const seo = read("app/lib/seoPages.ts");
  const sitemap = read("app/sitemap.ts");
  const footer = read("app/components/Footer.tsx");
  assert.match(city, /index: false/);
  assert.match(city, /canonical: "https:\/\/www\.cafevaluecannabisdispensary\.com\/"/);
  assert.match(info, /page\.noindex/);
  assert.match(seo, /slug": "toronto-weed-dispensary"[\s\S]*noindex": true/);
  assert.match(seo, /slug": "dispensary-near-me-toronto"[\s\S]*noindex": true/);
  assert.doesNotMatch(sitemap, /weed-dispensary-toronto/);
  assert.doesNotMatch(footer, /weed-dispensary-toronto/);
  assert.doesNotMatch(footer, /info\/toronto-weed-dispensary/);
});

test("CVC01 has no Center St copy and does not claim 24h hours", () => {
  const files = walkSourceFiles("app");
  for (const file of files) {
    const source = read(file);
    assert.equal(/Center St/.test(source), false, `Center St leaked in ${file}`);
    if (file.includes("CafeValueWebChat.tsx")) continue;
    assert.equal(/Open 24 Hours/.test(source), false, `24h hours claim in ${file}`);
    assert.equal(/>24h</.test(source), false, `24h hero stat in ${file}`);
  }
  const home = read("app/page.tsx");
  assert.match(home, /Spadina &amp; Harbord, The Annex/);
  assert.match(home, /10–12/);
});

test("CVC01 titles and homepage stay Annex / Spadina, not city-wide Toronto Dispensary", () => {
  const layout = read("app/layout.tsx");
  const home = read("app/page.tsx");
  assert.match(layout, /Annex Spadina Dispensary/);
  assert.match(home, /Cafe Value Cannabis\./);
  assert.match(home, /Annex walk-in on Spadina/);
  assert.match(home, /654 Spadina Ave/);
  assert.match(home, /href="\/visit"/);
  assert.doesNotMatch(home, /href="\/weed-dispensary-toronto\//);
  assert.doesNotMatch(layout, /Toronto Dispensary/);
});

test("CVC01 frontend stays standalone Cafe Value Cannabis", () => {
  const surfaces = [
    read("app/page.tsx"),
    read("app/visit/page.tsx"),
    read("app/layout.tsx"),
    read("app/components/Footer.tsx"),
    read("app/lib/storeIdentity.ts"),
  ]
    .join("\n")
    .toLowerCase();
  for (const blocked of [
    "athena",
    "sister store",
    "our other locations",
    "fleet of stores",
    "chain of dispensaries",
    "iamcafe",
    "after dark",
    "green air",
    "gas city",
    "cafe harbord",
  ]) {
    assert.equal(surfaces.includes(blocked), false, `Standalone leak: ${blocked}`);
  }
});

test("CVC01 delivery NAP uses the FMD phone and Annex scope", () => {
  const delivery = read("app/delivery/DeliveryContent.tsx");
  assert.match(delivery, /\+1 \(289\) 807-4161/);
  assert.doesNotMatch(delivery, /437\) 577-2589/);
  assert.match(delivery, /The Annex/);
  assert.match(delivery, /not 24 hours/);
});
