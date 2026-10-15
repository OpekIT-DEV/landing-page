import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import About from "@/components/About";
import FAQ, { faqItems } from "@/components/FAQ";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "IT Services and Digital Solutions",
  provider: {
    "@type": "Organization",
    name: "Opekit",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.opekit.com",
  },
  areaServed: "Worldwide",
  serviceType: [
    "Custom software development",
    "Cloud and DevOps",
    "Cybersecurity",
    "Managed IT support",
    "Data and analytics",
    "Web and mobile applications",
  ],
  description:
    "End-to-end IT services, custom software, cloud, cybersecurity, data, and managed support for growing businesses.",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Navbar />
      <main id="main">
        <Hero />
        <Services />
        <Process />
        <About />
        <FAQ />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}