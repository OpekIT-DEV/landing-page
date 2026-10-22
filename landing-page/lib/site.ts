/**
 * Single source of truth for the canonical site URL.
 *
 * The live site 308-redirects `opekit.com` to `https://www.opekit.com`, so
 * `www` is the canonical host. Every absolute URL we emit (canonicals, Open
 * Graph, JSON-LD, sitemap, robots.txt) has to use that one host — otherwise
 * Google sees a redirect where it expects a canonical URL.
 *
 * The trailing slash is stripped so joining a path never produces a double
 * slash (e.g. `https://www.opekit.com//privacy`).
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.opekit.com"
).replace(/\/+$/, "");
