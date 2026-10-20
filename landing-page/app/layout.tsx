import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope, Oswald, Playfair_Display } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["700"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Opekit | IT Services & Digital Solutions for Growing Businesses",
    template: "%s | Opekit",
  },
  description:
    "Opekit delivers reliable IT services, custom software, cloud, cybersecurity, and managed support that help businesses scale securely and efficiently.",
  keywords: [
    "IT services",
    "IT agency",
    "custom software development",
    "cloud services",
    "cybersecurity",
    "managed IT support",
    "web development",
    "digital solutions",
  ],
  authors: [{ name: "Opekit" }],
  creator: "Opekit",
  publisher: "Opekit",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/opek-logo.svg",
  },
  openGraph: {
    title: "Opekit | IT Services & Digital Solutions",
    description:
      "Reliable IT services, custom software, cloud, cybersecurity, and managed support for growing businesses.",
    url: "/",
    siteName: "Opekit",
    locale: "en_US",
    type: "website",
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
    title: "Opekit | IT Services & Digital Solutions",
    description:
      "Reliable IT services, custom software, cloud, cybersecurity, and managed support for growing businesses.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Opekit",
  url: SITE_URL,
  logo: `${SITE_URL}/opek-logo.svg`,
  description:
    "IT agency providing software development, cloud, cybersecurity, and managed IT support.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "opekit@opekit.com",
    availableLanguage: ["English"],
  },
  sameAs: ["https://www.linkedin.com/company/opekit"],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Opekit",
  url: SITE_URL,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} ${playfair.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
        >
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}