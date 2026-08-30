
"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowRight, Sparkles } from "lucide-react";

export default function GetInTouch() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className={`cta-section py-16 sm:py-20 relative fade-in-up ${
        isVisible ? "visible" : ""
      }`}
    >
      <div
        className="cta-glow"
        style={{
          background: "var(--teal)",
          top: "-200px",
          left: "-100px",
        }}
      />

      <div
        className="cta-glow"
        style={{
          background: "var(--teal-light)",
          bottom: "-200px",
          right: "-100px",
        }}
      />

      <div className="max-w-[1100px] mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">

          <div
            className="w-12 h-12 rounded-full flex items-center justify-center mb-5"
            style={{
              background: "var(--teal-bg)",
              boxShadow: "0 0 25px rgba(20, 184, 166, 0.15)",
            }}
          >
            <Sparkles
              size={24}
              className="text-[var(--teal)]"
            />
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold text-[var(--navy)] tracking-tight mb-3">
            Let&apos;s Improve{" "}
            <span className="gradient-text">
              Industrial Performance Together
            </span>
          </h2>

          <p className="text-[var(--text-secondary)] text-sm sm:text-base max-w-[600px] mb-6 leading-[1.75]">
            I&apos;m currently exploring opportunities where I can contribute
            to industrial performance, continuous improvement, quality, supply
            chain, and digital transformation while continuing to grow as an
            Industrial &amp; Logistics Engineer.
          </p>

          <a
  href="#contact-form"
            className="group inline-flex items-center gap-2 px-7 py-3 rounded-[10px] text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 cursor-pointer font-[inherit]"
            style={{
              background: "var(--teal)",
              boxShadow: "0 4px 14px rgba(13, 148, 136, 0.35)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--teal-dark)";
              e.currentTarget.style.boxShadow =
                "0 6px 20px rgba(13, 148, 136, 0.45)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--teal)";
              e.currentTarget.style.boxShadow =
                "0 4px 14px rgba(13, 148, 136, 0.35)";
            }}
          >
            Let&apos;s Connect
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

        </div>
      </div>
    </section>
  );
}

