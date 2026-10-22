"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#main", label: "home", active: false },
  { href: "#about", label: "about us", active: false },
  { href: "#services", label: "services", active: false },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const pillClass = scrolled
    ? "border-slate-200/70 bg-white/90 text-slate-900 shadow-sm backdrop-blur-[12px]"
    : "border-[rgba(255,255,255,0.35)] bg-[rgba(255,255,255,0.08)] text-white backdrop-blur-[12px]";

  const linkClass = scrolled
    ? "text-slate-900/90 transition-colors duration-200 hover:text-[#00d4ff]"
    : "text-white/90 transition-colors duration-200 hover:text-[#00d4ff]";

  const activeClass = "text-[#00d4ff]";

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center">
      <nav
        className={`flex h-14 w-[94%] max-w-[1200px] items-center justify-between rounded-full border px-6 transition-all duration-300 ${pillClass}`}
      >
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            window.location.reload();
          }}
          className="flex items-center"
        >
          <img src="/opek-logo.svg" alt="Opek logo" className="h-8 w-auto" />
        </a>

        <div className="hidden items-center gap-10 md:flex lg:gap-12">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              aria-current={l.active ? "page" : undefined}
              onClick={(e) => {
                if (l.href === "/") {
                  e.preventDefault();
                  window.location.reload();
                }
              }}
              className={`group relative rounded-full px-3 py-2 text-sm font-semibold lowercase transition-colors duration-200 ${l.active ? activeClass : linkClass}`}
            >
              {l.label}
              <span
                aria-hidden
                className={`absolute inset-x-3 -bottom-0.5 h-px origin-left bg-[#00d4ff] transition-transform duration-300 group-hover:scale-x-100 ${
                  l.active ? "scale-x-100" : "scale-x-0"
                }`}
              />
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className={`group relative hidden rounded-full px-3 py-2 text-sm font-semibold lowercase md:block ${linkClass}`}
        >
          contact us
          <span
            aria-hidden
            className="absolute inset-x-3 -bottom-0.5 h-px origin-left scale-x-0 bg-[#00d4ff] transition-transform duration-300 group-hover:scale-x-100"
          />
        </a>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`inline-flex h-10 w-10 items-center justify-center rounded-md md:hidden ${
            scrolled ? "text-slate-900" : "text-white"
          }`}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div
          className={`absolute left-1/2 top-[72px] w-[94%] max-w-[1200px] -translate-x-1/2 rounded-2xl border px-6 py-4 md:hidden ${
            scrolled
              ? "border-slate-200/70 bg-white/95 text-slate-900 backdrop-blur-[12px]"
              : "border-[rgba(255,255,255,0.35)] bg-[rgba(255,255,255,0.08)] text-white backdrop-blur-[12px]"
          }`}
        >
          <div className="flex flex-col gap-2">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={(e) => {
                  if (l.href === "/") {
                    e.preventDefault();
                    window.location.reload();
                    return;
                  }
                  setOpen(false);
                }}
                aria-current={l.active ? "page" : undefined}
                className={`rounded-md px-3 py-2 text-sm font-semibold lowercase transition-colors duration-200 hover:text-[#00d4ff] ${
                  l.active ? "text-[#00d4ff]" : ""
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 text-sm font-semibold lowercase transition-colors duration-200 hover:text-[#00d4ff]"
            >
              contact us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
