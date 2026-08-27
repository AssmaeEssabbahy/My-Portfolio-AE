"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Calendar,
  MapPin,
  ArrowUpRight,
  FileText,
} from "lucide-react";

const experiences = [
  {
    title: "Product Quality Engineer",
    company: "OCP Group",
    date: "Feb 2026 – Jun 2026",
    location: "El Jadida, Morocco",
    badge: "PFE",
    report: "/Rapport_PFE_Assmae_Essabbahy.pdf",
    description:
      "Worked on optimizing finished-product quality on a DAP EURO production line, focusing on granulometric conformity and the caking phenomenon. Using a Lean Six Sigma approach, I analyzed production and quality data to understand process variability and identify key parameters affecting product performance. The project combined process optimization, equipment reliability, digitalization, and automation to support more stable and efficient production.",
    missions: [
      "Defined the project scope and quality requirements by framing the problem, identifying CTQs and stakeholders, and mapping the production process using SIPOC.",
      "Performed Measurement System Analysis (MSA / R&R) to assess the reliability of laboratory granulometric measurements.",
      "Analyzed process capability and performance using Cp, Cpk, Pp, and Ppk to evaluate granulometric conformity and process variability.",
      "Developed a Preventive Maintenance Plan (PMP) for vibrating screens to support equipment availability and reliability.",
      "Proposed an intelligent vibration-control system using vibration sensors on vibrating-screen motors to adapt vibration according to process load.",
      "Developed a CustomTkinter interface to monitor and support the correction of 54% phosphoric acid quality parameters, including solids content and P₂O₅ concentration, helping maintain target specifications and prevent process deviations.",
      "Automated laboratory data collection using Excel VBA and developed a Power BI dashboard to centralize quality information, facilitate communication between Quality and Process teams, monitor quality KPIs, and support data-driven decision-making.",
    ],
    tags: [
      "Lean Six Sigma",
      "DMAIC",
      "CTQ",
      "SIPOC",
      "RACI",
      "Ishikawa",
      "Fault Tree Analysis",
      "MSP",
      "Minitab",
      "MSA / R&R",
      "SPC",
      "Control Charts",
      "Box Plot",
      "FMEA",
      "Python",
      "CustomTkinter",
      "Power BI",
      "Excel VBA",
      "PMP",
    ],
  },

  {
    title: "Organizational Management Engineer",
    company: "OCP Group",
    date: "Jul 2025 – Sep 2025",
    location: "El Jadida, Morocco",
    badge: "Internship PFA",
    report: "/Rapport_PFA_Assmae_Essabbahy.pdf",
    description:
      "Worked on a continuous improvement project focused on optimizing the organization and management of industrial cleaning operations on the TSP 107F production line. The project aimed to improve operational KPIs, including operator productivity, intervention time, task completion, workload management, and process traceability.",
    missions: [
      "Diagnosed the industrial cleaning process using DMAIC and analytical tools including SIPOC, Ishikawa, SWOT, and 5 Why to identify sources of inefficiency.",
      "Standardized cleaning operations through procedures, process flowcharts, operational checklists, and an operator evaluation system.",
      "Designed a management application to digitalize cleaning operations, including task scheduling, operator assignment, intervention tracking, and real-time operational follow-up.",
      "Developed a Power BI dashboard to monitor and evaluate operator KPIs, identify performance gaps, support workload allocation, and facilitate operational reporting and decision-making.",
    ],
    tags: [
      "DMAIC",
      "Continuous Improvement",
      "SIPOC",
      "Ishikawa",
      "SWOT",
      "5 Why",
      "Process Standardization",
      "Power BI",
      "Digitalization",
      "KPI",
      "Operational Management",
    ],
  },

  {
    title: "After-Sales Service Engineer",
    company: "Auto Hall",
    date: "Jul 2024 – Aug 2024",
    location: "Kénitra, Morocco",
    badge: "Internship",
    description:
      "Discovered automotive after-sales service operations and contributed to the follow-up of corrective maintenance, warranty, insurance, and spare-parts activities. Gained practical exposure to the coordination between technical teams, spare-parts management, administrative processes, and customer service.",
    missions: [
      "Managed warranty and insurance documentation, including repair orders, quotations, invoices, and delivery notes.",
      "Followed spare-parts requests and coordinated with the relevant stakeholders to support the smooth execution of maintenance interventions.",
      "Participated in the processing and follow-up of recovery files and corrective maintenance operations.",
      "Observed and analyzed the interactions between after-sales service, technical teams, spare-parts management, and customers.",
    ],
    tags: [
      "After-Sales Service",
      "Corrective Maintenance",
      "Spare Parts",
      "Warranty",
      "Insurance",
      "Customer Service",
      "Recovery",
    ],
  },
];

export default function Experience() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();

  return (
    <section id="experience" className="py-20 sm:py-24">
      <div className="max-w-[1100px] mx-auto px-6">

        {/* Section Header */}
        <div ref={titleRef} className="mb-12">
          <h2
            className={`text-2xl sm:text-[2rem] font-extrabold text-[var(--navy)] tracking-tight section-title-line fade-in-up ${
              titleVisible ? "visible" : ""
            }`}
          >
            Experience
          </h2>

          <p
  className={`text-[var(--text-secondary)] text-base sm:text-[1.05rem] mt-5 max-w-none whitespace-nowrap fade-in-up stagger-1 ${
    titleVisible ? "visible" : ""
  }`}
>
  Engineering experience across industrial quality, operational excellence, organizational management, and after-sales operations.
</p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">

          {/* Glowing vertical line */}
          <div className="absolute left-[8px] sm:left-[11px] top-0 bottom-0 w-px bg-gradient-to-b from-[var(--teal)] via-[var(--teal)]/40 to-transparent hidden sm:block" />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={index}
                exp={exp}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({
  exp,
  index,
}: {
  exp: (typeof experiences)[number];
  index: number;
}) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`relative pl-0 sm:pl-10 fade-in-up ${
        isVisible ? "visible" : ""
      }`}
      style={{
        transitionDelay: `${(index % 3) * 0.1}s`,
      }}
    >

      {/* Timeline glowing point */}
      <div className="absolute left-[3px] sm:left-[5px] top-8 hidden sm:flex items-center justify-center">
        <div className="absolute w-7 h-7 rounded-full bg-[var(--teal)]/10 blur-md" />
        <div className="relative w-3.5 h-3.5 rounded-full bg-[var(--teal)] border-[3px] border-white shadow-[0_0_15px_var(--teal)]" />
      </div>

      {/* Card */}
      <div className="group relative overflow-hidden bg-white p-6 sm:p-7 rounded-2xl border border-[var(--gray-200)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_45px_rgba(15,23,42,0.10)] hover:border-[var(--teal)]/50">

        {/* Animated luminous accent */}
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[var(--teal)] shadow-[0_0_15px_var(--teal)] opacity-40 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Subtle hover glow */}
        <div className="absolute -right-20 -top-20 w-48 h-48 rounded-full bg-[var(--teal)]/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        {/* Header */}
        <div className="relative flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-3">

          <div>
            <div className="flex flex-wrap items-center gap-2">

              <h3 className="text-base sm:text-[1.12rem] font-bold text-[var(--navy)]">
                {exp.title}
              </h3>

              <span
                className="text-[0.62rem] font-bold text-[var(--teal-dark)] px-2.5 py-1 rounded-full uppercase tracking-[0.08em] border"
                style={{
                  background: "var(--teal-bg)",
                  borderColor: "var(--teal)",
                }}
              >
                {exp.badge}
              </span>
            </div>

            <p className="text-[var(--teal)] text-sm font-semibold mt-1">
              {exp.company}
            </p>
          </div>

          {/* Date / Location */}
          <div className="flex flex-col sm:items-end gap-1.5 shrink-0">
            <div className="flex items-center gap-1.5 text-[var(--text-light)] text-xs sm:text-sm">
              <Calendar
                size={13}
                className="text-[var(--teal)] shrink-0"
              />
              {exp.date}
            </div>

            <div className="flex items-center gap-1.5 text-[var(--text-light)] text-xs sm:text-sm">
              <MapPin
                size={13}
                className="text-[var(--teal)] shrink-0"
              />
              {exp.location}
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="relative text-[var(--text-secondary)] text-sm leading-[1.75] mb-5">
          {exp.description}
        </p>

        {/* Missions */}
        <div className="relative flex flex-col gap-2.5 mb-5">
          {exp.missions.map((mission, i) => (
            <div
              key={i}
              className="flex items-start gap-3 text-[var(--text-secondary)] text-sm leading-[1.7] group/mission"
            >
              <span className="relative mt-[8px] shrink-0">
                <span className="block w-1.5 h-1.5 rounded-full bg-[var(--teal)] shadow-[0_0_7px_var(--teal)] group-hover/mission:scale-125 transition-transform" />
              </span>

              <span>{mission}</span>
            </div>
          ))}
        </div>

        {/* Technology / Methodology Tags */}
        <div className="relative flex flex-wrap gap-1.5">
          {exp.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-[var(--gray-100)] text-[var(--text-secondary)] text-[0.72rem] font-medium rounded-full border border-[var(--gray-200)] transition-all duration-300 hover:bg-[var(--teal-bg)] hover:text-[var(--teal-dark)] hover:border-[var(--teal)] hover:shadow-[0_0_10px_rgba(20,184,166,0.12)]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* View My Work - PFE only */}
        {exp.report && (
          <div className="relative mt-6 pt-5 border-t border-[var(--gray-200)]">
            <a
              href={exp.report}
              target="_blank"
              rel="noopener noreferrer"
              className="group/work inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: "var(--teal-bg)",
                color: "var(--teal-dark)",
                border: "1px solid var(--teal)",
                boxShadow: "0 0 0 rgba(20,184,166,0)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 22px rgba(20,184,166,0.20)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 0 0 rgba(20,184,166,0)";
              }}
            >
              <FileText size={16} />

              <span>View My Work</span>

              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover/work:translate-x-0.5 group-hover/work:-translate-y-0.5"
              />
            </a>
          </div>
        )}

      </div>
    </div>
  );
}