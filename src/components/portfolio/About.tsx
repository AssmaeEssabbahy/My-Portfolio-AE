"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Target, TrendingUp, Lightbulb, ArrowUpRight } from "lucide-react";

const highlights = [
  {
    icon: Target,
    title: "Operational Excellence",
    desc: "Improving industrial performance through continuous improvement, Lean thinking, and data-driven decision-making.",
  },
  {
    icon: TrendingUp,
    title: "Data-Driven Industry",
    desc: "Turning industrial data into actionable insights through analysis, visualization, and performance monitoring.",
  },
  {
    icon: Lightbulb,
    title: "Smart Transformation",
    desc: "Combining industrial engineering, digital technologies, and intelligent tools to build more efficient and measurable processes.",
  },
];

export default function About() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal();

  return (
    <section
      id="about"
      className="py-20 sm:py-28 bg-[var(--gray-50)]/50"
    >
      <div className="max-w-[1150px] mx-auto px-6">

        {/* Header */}
        <div ref={titleRef} className="mb-12 md:mb-16">
          <h2
            className={`text-2xl sm:text-[2.2rem] font-extrabold text-[var(--navy)] tracking-tight section-title-line fade-in-up ${
              titleVisible ? "visible" : ""
            }`}
          >
            About Me
          </h2>

          <p
            className={`text-[var(--text-secondary)] text-base sm:text-[1.1rem] mt-5 max-w-[700px] fade-in-up stagger-1 ${
              titleVisible ? "visible" : ""
            }`}
          >
            A passionate Industrial &amp; Logistics Engineer focused on
            operational excellence, continuous improvement, and data-driven
            transformation.
          </p>

          <div
            className={`flex items-center gap-2 mt-6 fade-in-up stagger-2 ${
              titleVisible ? "visible" : ""
            }`}
          >
            <span className="w-12 h-[2px] rounded-full bg-[var(--teal)] shadow-[0_0_8px_var(--teal)]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--teal-light)] shadow-[0_0_10px_var(--teal-light)]" />
            <span className="w-20 h-[1px] rounded-full bg-[var(--teal)]/30" />
          </div>
        </div>

        {/* Main Content */}
        <div
          ref={contentRef}
          className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center fade-in-up stagger-2 ${
            contentVisible ? "visible" : ""
          }`}
        >

          {/* Text */}
          <div className="lg:col-span-7">

            <div className="space-y-5">

              <p className="text-[var(--text-secondary)] text-[0.98rem] sm:text-[1.05rem] leading-[1.85]">
                I am a recent graduate in Industrial &amp; Logistics
                Engineering, with a strong interest in process optimization,
                industrial performance, quality, and continuous improvement.
                My engineering background combines technical and managerial
                perspectives, allowing me to approach industrial challenges
                from both operational and analytical angles.
              </p>

              <p className="text-[var(--text-secondary)] text-[0.98rem] sm:text-[1.05rem] leading-[1.85]">
                Through academic projects and industrial experience, I have
                worked on production and quality topics, Lean Six Sigma,
                process analysis, data analytics, and industrial digitalization.
                I particularly enjoy connecting engineering methods with
                digital tools to transform operational data into useful
                insights and support better decision-making.
              </p>

            </div>

            {/* Current Career Direction */}
            <div className="mt-7 flex items-center gap-3 group">
              <div className="flex items-center justify-center w-9 h-9 rounded-full bg-[var(--teal-bg)] text-[var(--teal)] border border-[var(--teal)]/20 shrink-0">
                <ArrowUpRight size={17} />
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.12em] font-semibold text-[var(--teal)] mb-0.5">
                  Currently exploring
                </p>

                <p className="text-sm sm:text-[0.95rem] text-[var(--text-secondary)] leading-relaxed">
                  Open to opportunities where I can contribute to industrial
                  performance, continuous improvement, quality, supply chain,
                  and digital transformation.
                </p>
              </div>
            </div>

          </div>

          {/* Profile Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[360px] group">

              {/* Glow */}
              <div className="absolute -inset-4 rounded-3xl bg-[var(--teal)]/10 blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Frame */}
              <div className="relative bg-white p-2 rounded-2xl border border-[var(--gray-200)] shadow-2xl shadow-[var(--navy)]/10 group-hover:border-[var(--teal)]/40 transition-all duration-500">

                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-[var(--gray-100)]">

                  <Image
                    src="/profile.jpg"
                    alt="Assmae Essabbahy - Industrial & Logistics Engineer"
                    fill
                    sizes="(max-width: 1024px) 80vw, 360px"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    priority
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/15 via-transparent to-transparent pointer-events-none" />

                </div>
              </div>

              {/* Decorative Points */}
              <span className="absolute -top-2 -right-2 w-3 h-3 rounded-full bg-[var(--teal)] shadow-[0_0_14px_var(--teal)]" />

              <span className="absolute -bottom-2 -left-2 w-2.5 h-2.5 rounded-full bg-[var(--teal-light)] shadow-[0_0_14px_var(--teal-light)]" />

            </div>
          </div>
        </div>

        {/* Highlights */}
        <div
          ref={cardsRef}
          className={`mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 fade-in-up stagger-3 ${
            cardsVisible ? "visible" : ""
          }`}
        >
          {highlights.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="group card-glow bg-white p-6 sm:p-7 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:border-[var(--teal)]/50 hover:-translate-y-1.5"
                style={{ borderColor: "var(--gray-200)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: "var(--teal-bg)",
                    color: "var(--teal)",
                  }}
                >
                  <Icon size={23} />
                </div>

                <h3 className="text-base sm:text-[1.05rem] font-bold text-[var(--navy)] mb-2">
                  {item.title}
                </h3>

                <p className="text-[var(--text-secondary)] text-[0.9rem] leading-[1.7]">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}