import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    // Non-standard directive read by Yandex/Bing (Google ignores it) that
    // states which host is canonical for the site.
    host: SITE_URL,
  };
}
