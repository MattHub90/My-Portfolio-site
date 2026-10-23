import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";

// Served at /robots.txt — lets search engines crawl the whole site.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${profile.siteUrl}/sitemap.xml`,
  };
}
