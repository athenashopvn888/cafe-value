import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import { resolve } from "node:path";

const source = await readFile(new URL("../app/lib/products.ts", import.meta.url), "utf8");
const expected = [
  "cafe-value-edibles-prerolls-more-banner.webp",
  "cafe-value-thc-vape.png",
  "cafe-value-nic-vape.png",
  "cafe-value-concentrates.png",
  "cafe-value-prerolls.png",
  "cafe-value-accessories.png",
  "cafe-value-cigarettes.png",
];

for (const file of expected) {
  assert.ok(source.includes(`/banners/${file}`), `Missing category banner mapping: ${file}`);
  await access(resolve("public", "banners", file));
}

assert.doesNotMatch(source, /(?:edibles_prerolls_more_banner|0[1-6]_(?:Vape|Concentrates|Pre_Rolls|Accessories|Cigarettes))/);
console.log("Cafe Value category banner assets verified.");
