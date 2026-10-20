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

const exploreLinks = [
  { href: "/#services", label: "services" },
  { href: "/#about", label: "about us" },
  { href: "/#faq", label: "faq" },
  { href: "/#contact", label: "contact" },
  { href: "/privacy", label: "privacy" },
];

const glassPill =
  "inline-flex items-center gap-[10px] rounded-full border border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.08)] px-5 py-2.5 text-[#e8ecf8] backdrop-blur-[8px] transition-colors duration-200 hover:bg-[rgba(255,255,255,0.18)]";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#070914] text-white">
      {/* Ambient brand glow — CSS only, keeps the error page light. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_55%_at_78%_18%,rgba(0,212,255,0.16),transparent_65%),radial-gradient(55%_50%_at_12%_78%,rgba(47,85,181,0.30),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.12] [-webkit-mask-image:radial-gradient(70%_60%_at_50%_40%,#000,transparent)] [mask-image:radial-gradient(70%_60%_at_50%_40%,#000,transparent)] [background-image:linear-gradient(to_right,rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.10)_1px,transparent_1px)] [background-size:64px_64px]"
      />

      <header className="relative z-10 mx-auto flex w-full max-w-[1200px] items-center justify-between px-6 py-6 md:px-8">
        <Link href="/" className="flex items-center">
          <img src="/opek-logo.svg" alt="Opekit" className="h-8 w-auto" />
        </Link>

        <Link href="/#contact" className={`group ${glassPill}`}>
          contact us
          <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">
            ›
          </span>
        </Link>
      </header>

      <main id="main" className="relative z-10 flex flex-1 items-center">
        <div className="mx-auto w-full max-w-[1200px] px-6 py-16 md:px-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/60">
            Error 404
          </p>

          {/* Decorative display numeral — the glass treatment from
              `.text-glass-hollow`, scaled up for display size where its 1px
              stroke would otherwise be invisible. */}
          <p
            aria-hidden="true"
            className="oswald-hero mt-2 text-[clamp(6rem,20vw,15rem)] leading-[0.85] text-white/10 [-webkit-text-stroke:3px_rgba(210,220,245,0.5)] [text-shadow:0_0_60px_rgba(0,212,255,0.28)]"
          >
            404
          </p>

          <h1 className="oswald-hero mt-4 uppercase text-[clamp(1.75rem,4.5vw,3.25rem)] leading-[1.15]">
            Page not found
          </h1>

          <p className="mt-6 max-w-[46ch] text-sm leading-[1.5] text-white/60">
            The page you are looking for doesn&apos;t exist or has moved. Everything
            else is still running fine — head back to the homepage or pick up where
            you left off.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link href="/" className={`group ${glassPill}`}>
              back to home
              <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">
                ›
              </span>
            </Link>

            <Link
              href="/#contact"
              className="group inline-flex items-center gap-[10px] rounded-full border border-[rgba(255,255,255,0.3)] px-5 py-2.5 text-[#e8ecf8] transition-colors duration-200 hover:bg-[rgba(255,255,255,0.10)]"
            >
              talk to us
              <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">
                ›
              </span>
            </Link>
          </div>

          <nav
            aria-label="Helpful links"
            className="mt-14 border-t border-white/10 pt-6 text-sm text-white/60"
          >
            <span className="text-white/40">Explore:</span>{" "}
            {exploreLinks.map((link, i) => (
              <span key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors duration-200 hover:text-[#00d4ff]"
                >
                  {link.label}
                </Link>
                {i < exploreLinks.length - 1 && (
                  <span aria-hidden className="px-2 text-white/30">
                    ·
                  </span>
                )}
              </span>
            ))}
          </nav>
        </div>
      </main>

      <footer className="relative z-10 border-t border-white/10">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-2 px-6 py-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between md:px-8">
          <p>© {new Date().getFullYear()} Opekit. All rights reserved.</p>
          <Link
            href="/"
            className="transition-colors duration-200 hover:text-white"
          >
            Back to opekit.com
          </Link>
        </div>
      </footer>
    </div>
  );
}
