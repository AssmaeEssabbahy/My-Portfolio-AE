"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  BrainCircuit,
  ShieldCheck,
  Truck,
  BarChart3,
  Factory,
  Leaf,
  Cpu,
  Sparkles,
} from "lucide-react";

const categories = [
  "all",
  "industry-4.0",
  "logistics-4.0",
  "data-optimization",
  "environment",
  "sst",
  "industrial-it",
];

const categoryLabels: Record<string, string> = {
  all: "All",
  "industry-4.0": "Industry 4.0",
  "logistics-4.0": "Logistics 4.0",
  "data-optimization": "Data & Optimization",
  environment: "Environment",
  sst: "SST",
  "industrial-it": "Industrial IT",
};

const projects = [
  {
    title: "Intelligent Industrial Production Forecasting by AI",
    category: "industry-4.0",
    categoryLabel: "Industry 4.0",
    icon: BrainCircuit,
    description:
      "Development of an intelligent production forecasting solution based on time-series analysis to anticipate demand variations and support industrial planning. Classical forecasting methods were compared with ANN, RNN and LSTM models.",
    tags: [
      "ANN",
      "Machine Learning",
      "Deep Learning",
      "LSTM",
      "RNN",
      "Holt-Winters",
      "Python",
      "TensorFlow/Keras",
      "Scikit-learn",
      "Optuna",
    ],
  },

  {
    title: "Digital Twin — Industry 4.0 Production System",
    category: "industry-4.0",
    categoryLabel: "Industry 4.0",
    icon: Factory,
    description:
      "Design of an industrial digital twin prototype simulating a connected production line through a complete IoT architecture for real-time data acquisition, communication, storage and visualization.",
    tags: [
      "Digital Twin",
      "IoT",
      "MQTT",
      "Node-RED",
      "InfluxDB",
      "Grafana",
      "Docker",
      "Python",
    ],
  },

  {
    title: "Advanced Logistics Fleet Optimization — CVRP",
    category: "logistics-4.0",
    categoryLabel: "Logistics 4.0",
    icon: Truck,
    description:
      "Development of an intelligent decision-support system for the Capacitated Vehicle Routing Problem (CVRP). Genetic Algorithm and Ant Colony Optimization were implemented with Optuna for hyperparameter tuning and OSRM for real-road routing.",
    tags: [
      "Python",
      "CVRP",
      "Genetic Algorithm",
      "ACO",
      "Metaheuristics",
      "Combinatorial Optimization",
      "Optuna",
      "OSRM",
      "Tkinter",
      "TkinterMapView",
    ],
  },

  {
    title: "Multi-Criteria Decision Support — PROMETHEE & TOPSIS",
    category: "data-optimization",
    categoryLabel: "Data & Optimization",
    icon: BarChart3,
    description:
      "Application of PROMETHEE and TOPSIS multi-criteria decision-making methods to evaluate diesel-photovoltaic hybridization scenarios for power plants according to technical, economic and environmental criteria.",
    tags: [
      "MCDA",
      "PROMETHEE",
      "TOPSIS",
      "Multi-Criteria Optimization",
      "Python",
    ],
  },

  {
    title: "Data Analysis — Least Squares Regression",
    category: "data-optimization",
    categoryLabel: "Data & Optimization",
    icon: BarChart3,
    description:
      "Analysis and mathematical modeling of a dataset using the least squares method to establish relationships between variables, evaluate model quality and interpret predictive results.",
    tags: [
      "Data Analysis",
      "Linear Regression",
      "Statistics",
      "Python",
    ],
  },

  {
    title: "GREEN ENSEM — Life Cycle Assessment",
    category: "environment",
    categoryLabel: "Environment",
    icon: Leaf,
    description:
      "Life Cycle Assessment of a portable solar-powered desalination unit for brackish water. Evaluation of environmental impacts throughout the product life cycle.",
    tags: [
      "LCA",
      "Life Cycle Assessment",
      "Solar Energy",
      "Desalination",
    ],
  },

  {
    title: "Occupational Risk Assessment — FIM",
    category: "sst",
    categoryLabel: "SST",
    icon: ShieldCheck,
    description:
      "Assessment of occupational risks within an industrial environment using the EvRP approach. Identification and prioritization of workplace hazards according to severity and likelihood, followed by preventive and corrective action proposals aligned with SST requirements and ISO 45001 principles.",
    tags: [
      "SST",
      "Risk Assessment",
      "EvRP",
      "AMDEC",
      "ISO 45001",
    ],
  },

  {
    title: "Industrial Automation with Motorola 68000",
    category: "industrial-it",
    categoryLabel: "Industrial IT",
    icon: Cpu,
    description:
      "Development of assembly-language programs for the Motorola 68000 microprocessor using EASy68k. Applications included elevator control and intelligent traffic-light management through embedded-system simulation.",
    tags: [
      "Embedded Systems",
      "Industrial Automation",
      "Assembly",
      "Motorola 68000",
      "EASy68k",
      "Industrial Control",
    ],
  },
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const { ref: titleRef, isVisible: titleVisible } =
    useScrollReveal();

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter(
          (project) => project.category === activeFilter
        );

  return (
    <section
      id="projects"
      className="py-20 sm:py-24 relative overflow-hidden"
      style={{ background: "var(--gray-50)" }}
    >
      {/* Background luminous effects */}
      <div className="absolute top-10 left-[-150px] w-80 h-80 rounded-full bg-[var(--teal)]/5 blur-3xl pointer-events-none" />

      <div className="absolute bottom-10 right-[-150px] w-80 h-80 rounded-full bg-[var(--teal-light)]/5 blur-3xl pointer-events-none" />

      <div className="max-w-[1100px] mx-auto px-6 relative z-10">

        {/* Header */}
        <div ref={titleRef}>
          <div
            className={`flex items-center gap-2 mb-3 fade-in-up ${
              titleVisible ? "visible" : ""
            }`}
          >
            <Sparkles
              size={15}
              className="text-[var(--teal)]"
            />

            <p className="text-[var(--teal)] text-xs font-semibold uppercase tracking-[2px]">
              Selected Work
            </p>
          </div>

          <h2
            className={`text-2xl sm:text-[2rem] font-extrabold text-[var(--navy)] tracking-tight section-title-line fade-in-up ${
              titleVisible ? "visible" : ""
            }`}
          >
            Projects
          </h2>

          <p
  className={`text-[var(--text-secondary)] text-base sm:text-[1.05rem] mt-5 mb-0 max-w-none sm:whitespace-nowrap fade-in-up stagger-1 ${
    titleVisible ? "visible" : ""
  }`}
>
  Academic and engineering projects combining industrial performance, digital technologies, optimization and intelligent decision-making.
</p>
        </div>

        {/* Filters */}
        <div
          className={`flex flex-wrap gap-2 mt-8 mb-8 fade-in-up stagger-2 ${
            titleVisible ? "visible" : ""
          }`}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-1.5 rounded-full border text-[0.8rem] font-medium cursor-pointer transition-all duration-300 font-[inherit] ${
                activeFilter === category
                  ? "text-white border-[var(--teal)] shadow-[0_0_18px_rgba(20,184,166,0.3)]"
                  : "bg-white text-[var(--text-secondary)] border-[var(--gray-200)] hover:border-[var(--teal)] hover:text-[var(--teal)]"
              }`}
              style={
                activeFilter === category
                  ? { background: "var(--teal)" }
                  : undefined
              }
            >
              {categoryLabels[category]}
            </button>
          ))}
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const { ref, isVisible } = useScrollReveal();

  const Icon = project.icon;

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden bg-white p-5 sm:p-6 rounded-2xl border flex flex-col transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgba(15,23,42,0.10)] hover:border-[var(--teal)]/50 fade-in-up ${
        isVisible ? "visible" : ""
      }`}
      style={{
        borderColor: "var(--gray-200)",
        transitionDelay: `${(index % 3) * 0.08}s`,
      }}
    >
      {/* Card glow */}
      <div className="absolute -top-20 -right-20 w-44 h-44 rounded-full bg-[var(--teal)]/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Left luminous line */}
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[var(--teal)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Icon + category */}
      <div className="flex items-start justify-between mb-4">

        <div
          className="relative w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_22px_rgba(20,184,166,0.3)]"
          style={{
            background: "var(--teal-bg)",
            color: "var(--teal)",
            borderColor: "var(--teal)",
          }}
        >
          <Icon size={21} />

          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[var(--teal-light)] shadow-[0_0_10px_var(--teal-light)]" />
        </div>

        <span
          className="px-2.5 py-1 text-[0.65rem] font-semibold rounded-full uppercase tracking-wide"
          style={{
            background: "var(--teal-bg)",
            color: "var(--teal-dark)",
          }}
        >
          {project.categoryLabel}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-[1rem] sm:text-[1.05rem] font-bold text-[var(--navy)] mb-3 leading-snug group-hover:text-[var(--teal-dark)] transition-colors">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-[var(--text-secondary)] text-[0.85rem] sm:text-[0.9rem] leading-[1.7] mb-5 flex-1">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-1 px-2.5 py-1 bg-[var(--gray-50)] text-[var(--text-secondary)] text-[0.7rem] font-medium rounded-lg border transition-all duration-300 hover:bg-[var(--teal-bg)] hover:text-[var(--teal-dark)] hover:border-[var(--teal)]"
            style={{
              borderColor: "var(--gray-200)",
            }}
          >
            <span className="w-1 h-1 rounded-full bg-[var(--teal)] opacity-70" />
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}