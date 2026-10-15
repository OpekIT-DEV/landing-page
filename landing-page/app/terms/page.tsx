import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.opekit.com";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms and conditions for using the Opekit website and engaging Opekit for IT services and digital solutions.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms of Service | Opekit",
    description:
      "Terms and conditions for using the Opekit website and services.",
    url: `${siteUrl}/terms`,
  },
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24 text-foreground">
      <Link href="/" className="text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
        ← Back to Opekit
      </Link>
      <h1 className="mt-8 text-4xl font-bold tracking-tight">Terms of Service</h1>
      <p className="mt-3 text-sm text-foreground/60">Last updated: October 15, 2026</p>
      <div className="mt-8 space-y-6 leading-7 text-foreground/80">
        <p>
          By accessing opekit.com or engaging Opekit for services, you agree to these
          Terms of Service. If you do not agree, please do not use the website or
          services.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Use of the website</h2>
        <p>
          You may use the website for lawful purposes. You may not attempt to disrupt,
          damage, gain unauthorized access to, or misuse the website, its content, or
          related systems.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Services and proposals</h2>
        <p>
          Information on the website is for general informational purposes and does not
          constitute a binding offer. Specific services, scope, pricing, timelines,
          and deliverables are defined in separate proposals, agreements, or
          statements of work.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Intellectual property</h2>
        <p>
          Opekit retains ownership of pre-existing tools, frameworks, and methods.
          Client ownership of project deliverables is governed by the applicable
          agreement. Website content, branding, and design are owned by Opekit unless
          stated otherwise.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Third-party resources</h2>
        <p>
          The website may link to third-party services or content. Opekit is not
          responsible for third-party terms, privacy practices, or availability.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Disclaimer</h2>
        <p>
          The website is provided on an &quot;as is&quot; and &quot;as available&quot; basis.
          Opekit does not warrant that the website will be uninterrupted,
          error-free, or free from harmful components, to the fullest extent
          permitted by law.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, Opekit is not liable for indirect,
          incidental, special, consequential, or punitive damages arising from your
          use of the website or services.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Changes to these terms</h2>
        <p>
          We may update these terms from time to time. The updated version becomes
          effective when posted on this page.
        </p>

        <h2 className="text-2xl font-semibold text-foreground">Contact us</h2>
        <p>
          Questions about these terms can be sent to{" "}
          <a className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300" href="mailto:opekit@opekit.com">
            opekit@opekit.com
          </a>
          .
        </p>
      </div>
    </main>
  );
}