export default function About() {
  return (
    <section id="about" className="bg-[#0a0c1f] py-24 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#00d4ff]">
            Why Opekit
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Technology that works as hard as you do
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            We are a senior team of engineers, designers, and IT specialists who
            treat your business outcomes as our own. Whether you need a new
            product, a cloud migration, or someone to keep systems running, we
            bring the same disciplined engineering to every engagement.
          </p>

          <ul className="mt-8 space-y-4">
            {[
              "Senior engineers only — no junior hand-offs",
              "Transparent weekly reporting and demos",
              "Security and accessibility baked in by default",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#00d4ff] text-[#0a0c1f]">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 12l5 5 9-9" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-slate-200">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-500 via-indigo-700 to-slate-900 shadow-xl">
            <div className="flex h-full items-end p-8">
              <div className="rounded-xl bg-white/10 px-5 py-4 backdrop-blur">
                <p className="text-lg font-semibold text-white">
                  Building reliable software &amp; infrastructure
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}