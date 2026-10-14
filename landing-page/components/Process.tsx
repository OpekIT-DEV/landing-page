const steps = [
  {
    n: "01",
    title: "Discover",
    body: "We learn your business, goals, and current systems to define the right solution.",
  },
  {
    n: "02",
    title: "Design",
    body: "Architecture, roadmap and UX wireframes reviewed and approved before any code.",
  },
  {
    n: "03",
    title: "Build",
    body: "Agile delivery with weekly demos, transparent progress, and quality gates.",
  },
  {
    n: "04",
    title: "Operate",
    body: "Launch, monitor, and continuously improve with SLA-backed support.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-slate-50 py-24 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            How it works
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            A clear, repeatable delivery process
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            No surprises — just predictable milestones and honest communication.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n} className="rounded-2xl bg-white p-7 shadow-sm">
              <span className="text-3xl font-bold text-indigo-600">{s.n}</span>
              <h3 className="mt-3 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-slate-600">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}