"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Cog,
  Truck,
  BarChart3,
  Wrench,
  LineChart,
  Layers,
  Gauge,
  Database,
  Calculator,
  PenTool,
  Globe,
  Settings,
  Activity,
  Workflow,
  ShieldCheck,
  RefreshCw,
  Lightbulb,
  ScanLine,
} from "lucide-react";

const techItems = [
  { icon: Cog, label: "Lean Manufacturing", cat: "IE" },
  { icon: Truck, label: "Supply Chain", cat: "Logistics" },
  { icon: BarChart3, label: "Excel / VBA", cat: "Tools" },
  { icon: Wrench, label: "AutoCAD", cat: "Tools" },
  { icon: LineChart, label: "MATLAB", cat: "Tools" },
  { icon: Layers, label: "SAP", cat: "ERP" },
  { icon: Gauge, label: "Six Sigma", cat: "IE" },
  { icon: Database, label: "Power BI", cat: "Data" },
  { icon: Calculator, label: "Minitab", cat: "Stats" },
  { icon: PenTool, label: "Value Stream Mapping", cat: "IE" },
  { icon: Globe, label: "Python", cat: "Data" },

  { icon: Settings, label: "CATIA V5", cat: "CAD" },
  { icon: Activity, label: "Grafana", cat: "Monitoring" },
  { icon: Workflow, label: "Node-RED", cat: "IIoT" },
  { icon: Database, label: "InfluxDB", cat: "Database" },
  { icon: ShieldCheck, label: "ISO 9001", cat: "Quality" },

  { icon: Cog, label: "DMAIC", cat: "Lean Six Sigma" },
  { icon: RefreshCw, label: "PDCA", cat: "CI" },
  { icon: Lightbulb, label: "Kaizen", cat: "CI" },
  { icon: ScanLine, label: "Poka-Yoke", cat: "Quality" },
  { icon: Layers, label: "SIPOC", cat: "Process" },
  { icon: Wrench, label: "SMED", cat: "Lean" },
  { icon: Gauge, label: "5S", cat: "Lean" },
];

export default function TechStack() {
  const { ref, isVisible } = useScrollReveal();

  const track1 = [...techItems, ...techItems];
  const track2 = [
    ...[...techItems].reverse(),
    ...[...techItems].reverse(),
  ];

  return (
    <section
      ref={ref}
      className={`py-16 sm:py-20 fade-in-up ${
        isVisible ? "visible" : ""
      }`}
      style={{ background: "var(--gray-50)" }}
    >
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-[var(--teal)] text-xs font-semibold uppercase tracking-[2px] mb-2">
            Tools &amp; Technologies
          </p>

          <h2 className="text-2xl sm:text-[2rem] font-extrabold text-[var(--navy)] tracking-tight">
            Tech Stack
          </h2>

          <p className="text-[var(--text-secondary)] text-sm sm:text-base mt-3 max-w-[500px] mx-auto">
            The tools, methodologies, and software I use to drive operational excellence.
          </p>
        </div>
      </div>

      <div className="marquee-container">
        <div className="marquee-track">
          {track1.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={`r1-${i}`}
                className="marquee-item"
              >
                <Icon size={15} />
                <span>{item.label}</span>
                <span className="text-[0.65rem] text-[var(--gray-400)] uppercase tracking-wide">
                  {item.cat}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="marquee-container mt-3">
        <div
          className="marquee-track"
          style={{
            animationDirection: "reverse",
            animationDuration: "35s",
          }}
        >
          {track2.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={`r2-${i}`}
                className="marquee-item"
              >
                <Icon size={15} />
                <span>{item.label}</span>
                <span className="text-[0.65rem] text-[var(--gray-400)] uppercase tracking-wide">
                  {item.cat}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}