import type { Metadata } from "next";
import Link from "next/link";

const description =
  "The page you are looking for doesn't exist or has moved. Head back to Opekit for custom software, cloud, cybersecurity, and managed IT services.";

/**
 * The root `not-found` file handles every unmatched URL in the app and renders
 * inside the root layout, so it inherits the site fonts, global styles and the
 * Organization/WebSite JSON-LD.
 *
 * SEO notes:
 * - Next.js returns a real 404 status for this route (never a soft 404).
 * - `robots` replaces the layout's `index: true` so there is exactly one
 *   unambiguous `noindex, follow` signal for crawlers.
 * - `alternates.canonical: null` drops the layout's `canonical="/"` — a 404 URL
 *   should never declare the homepage as its canonical version.
 */
export const metadata: Metadata = {
  title: { absolute: "Page Not Found (404) | Opekit" },
  description,
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
  alternates: {
    canonical: null,
  },
  openGraph: {
    type: "website",
    siteName: "Opekit",
    locale: "en_US",
    title: "Page Not Found | Opekit",
    description,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Opekit — IT Services & Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Page Not Found | Opekit",
    description,
    images: ["/opengraph-image"],
  },
};

const glassPill =
  "inline-flex items-center gap-[10px] rounded-full border border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.08)] px-5 py-2.5 text-[#e8ecf8] backdrop-blur-[8px] transition-colors duration-200 hover:bg-[rgba(255,255,255,0.18)]";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#070914] text-white">
      <header className="relative z-10 mx-auto flex w-full max-w-[1200px] items-center justify-center px-6 py-6 md:px-8">
        <Link href="/" className="flex items-center">
          <img src="/opek-logo.svg" alt="Opekit" className="h-8 w-auto" />
        </Link>
      </header>

      <main id="main" className="relative z-10 flex flex-1 items-center">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center px-6 py-16 text-center md:px-8">
          {/* Decorative display numeral — a solid muted fill, not a glass
              treatment, so it reads flat against the plain background. */}
          <p
            aria-hidden="true"
            className="oswald-hero text-[clamp(6rem,20vw,15rem)] leading-[0.85] text-white/15"
          >
            404
          </p>

          <h1 className="oswald-hero mt-4 uppercase text-[clamp(1.75rem,4.5vw,3.25rem)] leading-[1.15]">
            Page not found
          </h1>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link href="/" className={`group ${glassPill}`}>
              back to home
              <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">
                ›
              </span>
            </Link>
          </div>
        </div>
      </main>

      <footer className="relative z-10 border-t border-white/10">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-2 px-6 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-center md:px-8">
          <p>© {new Date().getFullYear()} Opekit. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
