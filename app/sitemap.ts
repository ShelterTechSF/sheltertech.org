import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/programs", "/volunteer", "/donate", "/privacy-policy", "/terms-and-conditions", "/accessibility-statement"];
  return routes.map((route) => ({ url: `https://www.sheltertech.org${route}`, lastModified: new Date(), changeFrequency: route === "" ? "weekly" : "monthly", priority: route === "" ? 1 : 0.7 }));
}
