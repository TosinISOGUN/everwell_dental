import { describe, expect, it } from "vitest";

import * as content from "@/data/content";
import { images } from "@/data/images.generated";
import { serviceBySlug, services } from "@/data/services";
import * as site from "@/data/site";

const strings = (value: unknown): string[] =>
  typeof value === "string"
    ? [value]
    : Array.isArray(value)
      ? value.flatMap(strings)
      : value && typeof value === "object"
        ? Object.values(value).flatMap(strings)
        : [];

describe("content data", () => {
  it("references only images the pipeline produced", () => {
    const ids = [...services.map((s) => s.image), ...content.team.map((m) => m.image)];
    for (const id of ids) expect(images, id).toHaveProperty(id);
  });

  it("gives every service the sections its page renders", () => {
    expect(services.map((s) => s.slug)).toEqual([
      "general-dentistry",
      "cosmetic-dentistry",
      "restorative-dentistry",
      "emergency-dentistry",
    ]);
    for (const s of services) {
      expect(s.includes, s.slug).toHaveLength(4);
      expect(s.visit.items.length, s.slug).toBeGreaterThanOrEqual(4);
      expect(s.faqs.length, s.slug).toBeGreaterThanOrEqual(3);
      expect(serviceBySlug(s.slug)).toBe(s);
    }
    expect(serviceBySlug("nope")).toBeUndefined();
  });

  it("keeps the concept honest", () => {
    const all = strings([services, content, site.site]).join(" ").toLowerCase();
    expect(all).not.toMatch(/licensed stock/);
    expect(all).not.toMatch(/hipaa/);
    expect(all).not.toMatch(/queens commons/);
    expect(site.INDEXABLE).toBe(false);
  });

  it("uses no em or en dashes in visible copy", () => {
    const all = strings([services, content, site.site, site.nav]);
    expect(all.filter((s) => /[–—]/.test(s))).toEqual([]);
  });

  it("has one appointment label", () => {
    expect(site.APPOINTMENT_CTA).toBe("Request an Appointment");
  });
});
