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
    <section
      id="services"
      className="relative overflow-hidden bg-[#070914] py-24 text-white sm:py-32"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
          }}
        />
        <div className="absolute -top-40 left-1/4 h-[28rem] w-[28rem] rounded-full bg-[#00d4ff]/10 blur-[120px]" />
        <div className="absolute -bottom-40 right-0 h-[26rem] w-[26rem] rounded-full bg-indigo-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#00d4ff]">
              <span aria-hidden className="h-px w-8 bg-[#00d4ff]/70" />
              What we do
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              End-to-end IT services for{" "}
              <span className="text-white/50">modern businesses</span>
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-slate-300 md:text-right">
            Pick a single service or let us own your entire technology stack — we
            design, build, secure, and operate it.
          </p>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <li
              key={s.title}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#00d4ff]/40 hover:bg-white/[0.06] hover:shadow-[0_24px_70px_-24px_rgba(0,212,255,0.45)] motion-reduce:hover:translate-y-0"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-[#00d4ff]/0 blur-3xl transition-colors duration-500 group-hover:bg-[#00d4ff]/20"
              />

              <div className="relative flex items-center justify-between">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-[#00d4ff]/20 to-indigo-500/10 text-[#00d4ff] transition-colors duration-300 group-hover:border-[#00d4ff]/40">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    {s.icon}
                  </svg>
                </span>
                <span className="font-mono text-xs tracking-[0.25em] text-white/25 transition-colors duration-300 group-hover:text-white/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="relative mt-6 text-xl font-semibold text-white">
                {s.title}
              </h3>
              <p className="relative mt-2 flex-1 text-sm leading-relaxed text-slate-300">
                {s.description}
              </p>

              <span
                aria-hidden
                className="relative mt-6 block h-px w-10 bg-[#00d4ff]/30 transition-all duration-300 group-hover:w-full group-hover:bg-[#00d4ff]/70"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
