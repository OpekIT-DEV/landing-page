import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * `lastmod` tells Google when a URL last changed *significantly*. The homepage
 * changes on every deploy, so it tracks the build. The legal pages only change
 * when their copy changes, so they carry the real "Last updated" date shown on
 * the page — repeating the build timestamp for them makes Google recrawl
 * pages that never actually changed.
 */
const LEGAL_LAST_MODIFIED = new Date("2026-10-15T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      // Matches the homepage canonical exactly — no trailing slash.
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: LEGAL_LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: LEGAL_LAST_MODIFIED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
