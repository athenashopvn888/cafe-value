import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const tierPage = await readFile(new URL("../app/[tier]/page.tsx", import.meta.url), "utf8");

test("tier metadata emits a self-canonical and matching Open Graph URL", () => {
  assert.match(tierPage, /canonical: `\$\{SITE_ORIGIN\}\/\$\{tierSlug\}`/);
  assert.match(tierPage, /url: `\$\{SITE_ORIGIN\}\/\$\{tierSlug\}`/);
});

test("protected canonical host matches the live preferred www host", () => {
  assert.match(tierPage, /const SITE_ORIGIN = "https:\/\/www\.cafevaluecannabisdispensary\.com"/);
});
