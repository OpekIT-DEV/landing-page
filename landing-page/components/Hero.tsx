"use client";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [prefersReduced, setPrefersReduced] = useState(false);
  const [saveData, setSaveData] = useState(false);

  useEffect(() => {
    const mqReduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mqReduced.matches);

    const nav = navigator as Navigator & {
      connection?: { saveData?: boolean };
    };
    setSaveData(Boolean(nav.connection?.saveData));

    const onReduced = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mqReduced.addEventListener("change", onReduced);

    return () => {
      mqReduced.removeEventListener("change", onReduced);
    };
  }, []);

  const renderVideo = !saveData;

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video) return;

    if (prefersReduced) {
      video.pause();
      return;
    }

    if (!renderVideo) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 }
    );

    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, [prefersReduced, renderVideo]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-screen overflow-hidden bg-[#070914] text-white"
    >
      {renderVideo && (
        <video
          ref={videoRef}
          autoPlay={!prefersReduced}
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full object-cover ${
            prefersReduced ? "hidden" : "object-center md:object-right"
          }`}
        >
          <source src="/timeline2.mp4" type="video/mp4" media="(max-width: 767px)" />
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      )}

      <div className="relative z-20 mx-auto flex w-full max-w-[1200px] flex-col py-4 px-8 pt-[22vh]">
        <div className="w-full py-32 md:w-2/5">
          <p className="text-[11px]  font-semibold uppercase tracking-[0.15em] text-white/60">
            DIGITAL COMPANY
          </p>

          <h1
            className="oswald-hero mt-2 text-[clamp(2.5rem,5.5vw,6rem)] uppercase leading-[1.15]"
          >
            MAKE YOUR PRESENCE KNOWN
          </h1>

          <p className="mt-9 max-w-[28ch] text-sm leading-[1.4] text-white">
            We help ambitious brands design, build, and scale digital products.
          </p>

          <a
            href="#services"
            className="group mt-5 inline-flex items-center gap-[10px] rounded-full border border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.08)] px-5 py-2.5 text-[#e8ecf8] backdrop-blur-[8px] transition-colors duration-200 hover:bg-[rgba(255,255,255,0.18)]"
          >
            explore services
            <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-1">
              ›
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
