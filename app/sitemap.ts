import type { MetadataRoute } from "next";
import { SITE_PATHS, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return SITE_PATHS.map((path) => ({ url: new URL(path, SITE_URL).href }));
}
