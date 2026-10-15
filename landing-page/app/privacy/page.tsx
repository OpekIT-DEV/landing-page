import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.opekit.com";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Opekit collects, uses, stores, and protects information submitted through opekit.com and related services.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Opekit",
    description:
      "How Opekit handles information submitted through opekit.com and related services.",
    url: `${siteUrl}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24 text-foreground">
      <Link href="/" className="text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
        ← Back to Opekit
      </Link>
      <h1 className="mt-8 text-4xl font-bold tracking-tight">Privacy Policy</h1>
      <p className="mt-3 text-sm text-foreground/60">Last updated: October 15, 2026</p>
      <div className="mt-8 space-y-6 leading-7 text-foreground/80">
        <p>
          Opekit (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) respects your privacy. This
          policy explains how we collect, use, store, and protect information when you
          visit opekit.com or contact us about IT services.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Information we collect</h2>
        <p>
          We may collect information you provide directly, such as your name, email
          address, company, and message, as well as information collected automatically
          such as browser type, device information, IP address, pages visited, and
          basic analytics about site usage.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">How we use information</h2>
        <p>
          We use information to respond to inquiries, provide quotes and services,
          communicate about projects, improve our website and services, maintain
          security, and comply with legal obligations.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Sharing of information</h2>
        <p>
          We do not sell your personal information. We may share information with
          trusted service providers that help operate our business, and when required
          by law or to protect rights, safety, and security.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Data retention</h2>
        <p>
          We retain information only as long as necessary for the purposes described
          here, unless a longer retention period is required by law.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Security</h2>
        <p>
          We use reasonable technical and organizational measures to protect
          information. No method of transmission or storage is completely secure, so
          we cannot guarantee absolute security.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Cookies and analytics</h2>
        <p>
          Opekit may use cookies or similar technologies and analytics to understand
          how visitors use the website and to improve performance and usability. You
          can manage cookie preferences in your browser settings.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Your choices</h2>
        <p>
          You may contact us to ask questions about your information, request updates
          or deletion where applicable, or opt out of non-essential communications.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Contact us</h2>
        <p>
          Questions about this policy can be sent to{" "}
          <a className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300" href="mailto:opekit@opekit.com">
            opekit@opekit.com
          </a>
          .
        </p>
      </div>
    </main>
  );
}