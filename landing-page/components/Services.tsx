import type { ReactNode } from "react";

type Service = {
  title: string;
  description: string;
  icon: ReactNode;
};

const services: Service[] = [
  {
    title: "Custom Software Development",
    description:
      "Tailored web, mobile, and internal tools built with modern stacks to fit your exact workflow.",
    icon: (
      <path d="M8 6l-6 6 6 6M16 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Cloud & DevOps",
    description:
      "AWS, Azure and GCP architecture, CI/CD pipelines and cost-optimized, auto-scaling infrastructure.",
    icon: (
      <path d="M7 18h10a4 4 0 0 0 0-8 5 5 0 0 0-9.5-1.5A3.5 3.5 0 0 0 7 18Z" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Cybersecurity",
    description:
      "Audits, threat monitoring, hardening and incident response to keep data and systems protected.",
    icon: (
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Managed IT Support",
    description:
      "24/7 helpdesk, device management and proactive monitoring with guaranteed response times.",
    icon: (
      <path d="M4 7h16M4 12h16M4 17h10" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Data & Analytics",
    description:
      "Data pipelines, dashboards and reporting that turn raw data into actionable business insights.",
    icon: (
      <path d="M4 20V10M10 20V4M16 20v-7M22 20V13" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Web & Mobile Apps",
    description:
      "High-performance, accessible web and native mobile applications with polished UX.",
    icon: (
      <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-5 4V6Z" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-24 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            What we do
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            End-to-end IT services for modern businesses
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Pick a single service or let us own your entire technology stack — we
            design, build, secure, and operate it.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <li
              key={s.title}
              className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  {s.icon}
                </svg>
              </span>
              <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-slate-600">{s.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}