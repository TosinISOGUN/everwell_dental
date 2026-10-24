import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { services } from "@/data/services";
import { routeTree } from "@/routeTree.gen";

describe("App routing", () => {
  const router = createRouter({ routeTree });
  const paths = [
    "/",
    "/services",
    ...services.map((s) => `/services/${s.slug}`),
    "/about",
    "/new-patients",
    "/contact",
    "/privacy",
  ];

  it.each(paths)("matches a page for %s instead of falling back to not found", (path) => {
    expect(router.matchRoutes(path).at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("covers all 10 routes from the brief", () => {
    expect(paths).toHaveLength(10);
  });

  it("falls back to not found for an unknown path", () => {
    expect(router.matchRoutes("/lyrics").at(-1)?.routeId).toBe(rootRouteId);
  });
});
