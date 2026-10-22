import type { ReactNode } from "react";

type Feature = {
  title: string;
  description: string;
  icon: ReactNode;
};

const features: Feature[] = [
  {
    title: "Senior engineers only",
    description: "No junior hand-offs — the people who scope the work build it.",
    icon: (
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm13 10v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Transparent delivery",
    description: "Weekly demos and clear reporting, so progress is never a mystery.",
    icon: (
      <path d="M4 20V10M10 20V4M16 20v-7M22 20V13" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    title: "Secure by default",
    description: "Security and accessibility are engineered in, not bolted on.",
    icon: (
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3ZM9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0a0c1f] py-24 text-white sm:py-32"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[30rem] w-[30rem] rounded-full bg-[#00d4ff]/10 blur-[130px]" />
        <div className="absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-[#2f55b5]/20 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#00d4ff]">
              <span aria-hidden className="h-px w-8 bg-[#00d4ff]/70" />
              Why Opekit
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Technology that works as hard as{" "}
              <span className="text-white/50">you do</span>
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
              We are a senior team of engineers, designers, and IT specialists who
              treat your business outcomes as our own. Whether you need a new
              product, a cloud migration, or someone to keep systems running, we
              bring the same disciplined engineering to every engagement.
            </p>

            <ul className="mt-10 space-y-3">
              {features.map((feature) => (
                <li
                  key={feature.title}
                  className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:border-[#00d4ff]/40 hover:bg-white/[0.07]"
                >
                  <span className="inline-flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#00d4ff]/10 text-[#00d4ff] transition-colors duration-300 group-hover:border-[#00d4ff]/40">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    >
                      {feature.icon}
                    </svg>
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">{feature.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-300">
                      {feature.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-3 rounded-[2rem] border border-[#00d4ff]/20"
            />

            <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)]">
              <div className="absolute inset-0 bg-[url('/example.jpeg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c1f] via-[#0a0c1f]/30 to-transparent" />

              <div className="relative flex h-full items-end p-8">
                <div className="rounded-xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur">
                  <p className="text-lg font-semibold text-white">
                    Building reliable software &amp; infrastructure
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-4 hidden rounded-2xl border border-white/10 bg-[#0a0c1f] px-5 py-4 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#00d4ff]/15 text-[#00d4ff]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12l5 5 9-9" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">Senior team</p>
                  <p className="text-xs text-slate-400">End-to-end ownership</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
