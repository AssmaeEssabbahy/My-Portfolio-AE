"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { GraduationCap, MapPin, Cpu, Zap } from "lucide-react";

const education = [
  {
    date: "2023 – 2026",
    title: "Engineering Degree in Industrial & Logistics Engineering",
    school: "National School of Electricity and Mechanics (ENSEM)",
    location: "Casablanca, Morocco",
    description:
      "Multidisciplinary engineering training combining technical, industrial, analytical, and managerial expertise. Developed a broad understanding of industrial operations, covering process and production management, Lean Manufacturing, quality, maintenance, logistics, and advanced optimization, with a focus on designing and improving industrial systems to enhance efficiency, reliability, productivity and operational performance.",
  },
  {
    date: "2021 – 2023",
    title: "Preparatory Classes (MPSI / MP)",
    school: "Moulay Idriss Preparatory Classes",
    location: "Fez, Morocco",
    description:
      "Intensive two-year program in advanced mathematics, physics, and engineering sciences, developing strong analytical, problem-solving, and mathematical reasoning skills while preparing for competitive national entrance exams to top engineering schools (Grandes Écoles).",
  },
  {
    date: "2021",
    title: "Baccalaureate – Mathematics Sciences (Option A)",
    school: "Ibn Khaldoun High School",
    location: "Karia Ba Mohamed, Morocco",
    description:
      "Graduated with honors and ranked first in my class in the Mathematics Sciences track (Option A), with a strong foundation in mathematics, physics, and life and earth sciences.",
  },
];

export default function Education() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();

  return (
    <section id="education" className="py-20 sm:py-24">
      <div className="max-w-[1100px] mx-auto px-6">
        <div ref={titleRef}>
          <h2
            className={`text-2xl sm:text-[2rem] font-extrabold text-[var(--navy)] tracking-tight section-title-line fade-in-up ${
              titleVisible ? "visible" : ""
            }`}
          >
            Education
          </h2>

          <p
            className={`text-[var(--text-secondary)] text-base sm:text-[1.05rem] mt-5 mb-0 max-w-[650px] fade-in-up stagger-1 ${
              titleVisible ? "visible" : ""
            }`}
          >
            My academic journey that shaped my engineering mindset.
          </p>
        </div>

        <div className="mt-10 relative pl-8 sm:pl-12">
          {/* Main glowing timeline */}
          <div
            className="absolute left-[11px] sm:left-[17px] top-0 bottom-0 w-[2px] overflow-hidden"
            style={{
              background:
                "linear-gradient(to bottom, transparent, var(--teal), var(--teal-light) 35%, var(--teal) 55%, var(--gray-200) 80%, transparent)",
              boxShadow:
                "0 0 6px var(--teal), 0 0 14px rgba(13,148,136,0.35)",
            }}
          >
            {/* Moving light */}
            <div
              className="absolute left-0 w-full h-24 animate-pulse"
              style={{
                background:
                  "linear-gradient(to bottom, transparent, var(--teal-light), transparent)",
                boxShadow: "0 0 12px var(--teal-light)",
              }}
            />
          </div>

          {education.map((item, index) => (
            <TimelineItem
              key={index}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  item,
  index,
}: {
  item: (typeof education)[number];
  index: number;
}) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`relative mb-12 last:mb-0 fade-in-up ${
        isVisible ? "visible" : ""
      }`}
      style={{
        transitionDelay: `${(index % 3) * 0.15}s`,
      }}
    >
      {/* Small outer glow */}
      <div
        className="absolute left-[-29px] sm:left-[-35px] top-[27px] w-5 h-5 rounded-full opacity-30 animate-pulse"
        style={{
          background: "var(--teal)",
          filter: "blur(6px)",
        }}
      />

      {/* Small glowing timeline node */}
      <div
        className="absolute left-[-26px] sm:left-[-32px] top-[29px] w-3.5 h-3.5 rounded-full z-20 flex items-center justify-center"
        style={{
          background:
            "radial-gradient(circle, var(--teal-light) 0%, var(--teal) 55%, var(--teal-dark) 100%)",
          boxShadow:
            "0 0 0 2px var(--teal-bg), 0 0 6px var(--teal), 0 0 12px rgba(13,148,136,0.35)",
        }}
      >
        <div className="w-1 h-1 rounded-full bg-white shadow-[0_0_5px_white]" />
      </div>

      {/* Horizontal glowing connector */}
      <div
        className="absolute left-[-17px] sm:left-[-23px] top-[35px] w-5 sm:w-7 h-px"
        style={{
          background:
            "linear-gradient(to right, var(--teal-light), var(--teal), transparent)",
          boxShadow: "0 0 5px var(--teal)",
        }}
      />

      {/* Education card */}
      <div
        className="group relative overflow-hidden bg-white p-5 sm:p-6 rounded-2xl border transition-all duration-500 hover:-translate-y-1 hover:translate-x-1"
        style={{
          borderColor: "var(--gray-200)",
          boxShadow:
            "0 4px 20px rgba(15,23,42,0.05), 0 0 0 rgba(13,148,136,0)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow =
            "0 12px 35px rgba(15,23,42,0.08), 0 0 22px rgba(13,148,136,0.18)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow =
            "0 4px 20px rgba(15,23,42,0.05), 0 0 0 rgba(13,148,136,0)";
        }}
      >
        {/* Top scanning line */}
        <div
          className="absolute top-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-700"
          style={{
            background:
              "linear-gradient(to right, var(--teal), var(--teal-light), transparent)",
            boxShadow: "0 0 10px var(--teal)",
          }}
        />

        {/* Technical corner */}
        <div
          className="absolute top-0 right-0 w-16 h-16 opacity-40"
          style={{
            background:
              "linear-gradient(135deg, transparent 50%, var(--teal-bg) 50%)",
          }}
        />

        {/* Small technical marker */}
        <div className="absolute top-4 right-5 flex items-center gap-1.5 opacity-50">
          <Cpu size={11} className="text-[var(--teal)]" />

          <span className="text-[9px] font-mono tracking-widest text-[var(--teal)]">
            0{index + 1}
          </span>
        </div>

        {/* Date */}
        <span
          className="inline-flex items-center gap-1.5 text-[var(--teal)] text-xs font-semibold px-3 py-1.5 rounded-full mb-3"
          style={{
            background: "var(--teal-bg)",
            boxShadow: "0 0 10px rgba(13,148,136,0.08)",
          }}
        >
          <Zap size={11} />
          {item.date}
        </span>

        {/* Degree */}
        <h3 className="text-[1.05rem] sm:text-base font-bold text-[var(--navy)] mb-2 leading-snug">
          {item.title}
        </h3>

        {/* School */}
        <div className="flex items-center gap-2 text-[var(--text-secondary)] text-sm mb-3">
          <div
            className="flex items-center justify-center w-7 h-7 rounded-md shrink-0"
            style={{
              background: "var(--teal-bg)",
              color: "var(--teal)",
              boxShadow: "0 0 10px rgba(13,148,136,0.08)",
            }}
          >
            <GraduationCap size={15} />
          </div>

          <span>{item.school}</span>
        </div>

        {/* Description */}
        <p className="text-[var(--text-secondary)] text-sm leading-[1.75] mb-4">
          {item.description}
        </p>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-[var(--text-light)] text-xs">
          <MapPin
            size={12}
            className="text-[var(--teal)] shrink-0"
          />

          <span>{item.location}</span>
        </div>

        {/* Bottom technical line */}
        <div
          className="absolute bottom-0 left-6 right-6 h-px opacity-30"
          style={{
            background:
              "linear-gradient(to right, transparent, var(--teal), transparent)",
          }}
        />
      </div>
    </div>
  );
}