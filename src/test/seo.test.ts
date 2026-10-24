import { existsSync } from "node:fs";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

import { SITE_URL } from "@/data/site";
import { seo } from "@/lib/seo";

const pages = [
  "home",
  "services",
  "general-dentistry",
  "cosmetic-dentistry",
  "restorative-dentistry",
  "emergency-dentistry",
  "about",
  "new-patients",
  "contact",
  "privacy",
];

describe("share previews", () => {
  it("builds absolute Open Graph and Twitter image URLs on the deployment origin", () => {
    const meta = seo({ title: "T", description: "D", image: "about" }).meta;
    const value = (key: string) =>
      meta.find((m) => ("property" in m && m.property === key) || ("name" in m && m.name === key));
    expect(SITE_URL).toMatch(/^https?:\/\/[^/]+$/);
    expect(value("og:image")).toMatchObject({ content: `${SITE_URL}/og/about.jpg` });
    expect(value("twitter:image")).toMatchObject({ content: `${SITE_URL}/og/about.jpg` });
    expect(value("twitter:card")).toMatchObject({ content: "summary_large_image" });
  });

  it("ships a 1200x630 image file for every page", () => {
    for (const page of pages) {
      expect(existsSync(join(process.cwd(), "public/og", `${page}.jpg`)), page).toBe(true);
    }
  });
});
