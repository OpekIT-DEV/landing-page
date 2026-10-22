import type { Metadata } from "next";

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: "What IT services does Opekit provide?",
    answer:
      "Opekit delivers custom software development, cloud and DevOps, cybersecurity, managed IT support, data and analytics, and high-performance web and mobile applications. You can engage us for one service or let us own your entire technology stack.",
  },
  {
    question: "Who do you typically work with?",
    answer:
      "We partner with growing businesses and ambitious brands that need senior engineering support across product development, infrastructure, security, and ongoing IT operations.",
  },
  {
    question: "How quickly can we start a project?",
    answer:
      "We respond within one business day and can usually begin discovery shortly after. Every engagement starts with a focused discovery phase so scope, timeline, and costs are clear before implementation.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes. Opekit offers SLA-backed managed IT support, proactive monitoring, incident response, and continuous improvement to keep your systems secure, reliable, and up to date.",
  },
  {
    question: "Can you modernize an existing system?",
    answer:
      "Yes. We help teams migrate to the cloud, harden security, refactor legacy systems, improve performance, and add analytics without disrupting day-to-day operations.",
  },
  {
    question: "Is security included by default?",
    answer:
      "Security and accessibility are built into every engagement, from architecture and code review to audits, monitoring, hardening, and incident response.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-white py-24 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            Frequently asked questions
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Answers before you get in touch
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Clear expectations around services, delivery, support, and security.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm open:bg-white"
            >
              <summary className="cursor-pointer list-none text-lg font-semibold text-slate-900">
                {item.question}
              </summary>
              <p className="mt-3 text-slate-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export const faqMetadata = {
  title: "Frequently Asked Questions",
} satisfies Pick<Metadata, "title">;