"use client";

import { useState, type FormEvent } from "react";

export default function ContactCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !message) {
      setError("Please fill in all required fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError(null);
    setSubmitted(true);
    form.reset();
  }

  return (
    <section id="contact" className="bg-white py-24 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
              Let's talk
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to build something reliable?
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Tell us about your project and we'll get back within one business
              day with next steps and a rough estimate.
            </p>

            <div className="mt-8 space-y-4 text-slate-700">
              <p>
                <span className="font-semibold">Email:</span>{" "}
                <a className="text-indigo-600 hover:underline" href="mailto:hello@opekit.com">
                  hello@opekit.com
                </a>
              </p>
              <p>
                <span className="font-semibold">Phone:</span>{" "}
                <a className="text-indigo-600 hover:underline" href="tel:+15551234567">
                  +1 (555) 123-4567
                </a>
              </p>
              <p>
                <span className="font-semibold">Hours:</span> Mon–Fri, 9am–6pm (your timezone)
              </p>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            noValidate
            className="rounded-2xl border border-slate-200 bg-slate-50 p-7 shadow-sm"
            aria-label="Contact form"
          >
            <div className="grid gap-5">
              <label className="block">
                <span className="text-sm font-medium text-slate-700">Name *</span>
                <input
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-700">Email *</span>
                <input
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-700">Company</span>
                <input
                  name="company"
                  type="text"
                  autoComplete="organization"
                  className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-slate-700">Message *</span>
                <textarea
                  name="message"
                  rows={4}
                  required
                  className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                />
              </label>

              {error && (
                <p role="alert" className="text-sm text-red-600">
                  {error}
                </p>
              )}

              {submitted ? (
                <p role="status" className="rounded-lg bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
                  Thanks! We received your message and will reply within one business day.
                </p>
              ) : (
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-full bg-indigo-500 px-6 py-3 text-base font-semibold text-white transition hover:bg-indigo-400"
                >
                  Send message
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}