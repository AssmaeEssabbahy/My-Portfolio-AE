"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Cog,
  ShieldCheck,
  Wrench,
  Truck,
  BarChart3,
  BrainCircuit,
  Languages,
  Cpu,
  Users,
  Lightbulb,
  Target,
  Handshake,
} from "lucide-react";

/* =========================================================
   TECHNICAL SKILLS
========================================================= */

const skillGroups = [
  {
    icon: Cog,
    title: "Production & Industrial Engineering",
    skills: [
      "Lean Manufacturing",
      "Lean Six Sigma",
      "DMAIC",
      "VSM",
      "5S",
      "Kaizen",
      "SMED",
      "Poka-Yoke",
      "PDCA",
      "Process Optimization",
      "Production Planning",
      "Production Scheduling",
      "Capacity Planning",
      "Line Balancing",
      "Time & Motion Study",
      "Bottleneck Analysis",
      "OEE / TRS",
      "Kanban",
      "JIT",
    ],
  },

  {
    icon: ShieldCheck,
    title: "Quality Management",
    skills: [
      "Quality Control",
      "Quality Assurance",
      "SPC",
      "MSA / R&R",
      "Cp / Cpk",
      "Pp / Ppk",
      "Process Capability",
      "FMEA / AMDEC",
      "8D",
      "5 Why",
      "Ishikawa",
      "Root Cause Analysis",
      "DOE",
      "Continuous Improvement",
      "ISO 9001",
      "Risk Assessment / EvRP",
      "Occupational Safety",
      "SST",
      "ISO 45001",
      "Risk Analysis",
      "Preventive & Corrective Actions",
    ],
  },

  {
    icon: Wrench,
    title: "Maintenance & Reliability",
    skills: [
      "TPM",
      "Preventive Maintenance",
      "Corrective Maintenance",
      "Predictive Maintenance",
      "Maintenance Planning",
      "GMAO / CMMS",
      "Reliability Engineering",
      "Failure Analysis",
      "MTBF / MTTR",
      "Spare Parts Management",
      "Maintenance Performance Monitoring",
    ],
  },

  {
    icon: Truck,
    title: "Supply Chain & Logistics",
    skills: [
      "Supply Chain Management",
      "Demand Forecasting",
      "Inventory Management",
      "Inventory Optimization",
      "ABC Analysis",
      "EOQ / Wilson",
      "MRP",
      "ERP",
      "Procurement",
      "Warehouse Management",
      "Transportation Management",
      "Logistics Optimization",
      "Production Planning",
      "Routing / CVRP",
      "Smart Supply Chain",
    ],
  },

  {
    icon: BarChart3,
    title: "Data & Analytics",
    skills: [
      "Data Analysis",
      "Statistics",
      "Business Intelligence",
      "Data Visualization",
      "Power BI",
      "Advanced Excel",
      "Excel VBA",
      "Python",
      "SQL",
      "Minitab",
      "Forecasting",
      "Predictive Analytics",
      "Machine Learning",
      "Optimization",
    ],
  },

  {
    icon: Cpu,
    title: "Digital Transformation & Industry 4.0",
    skills: [
      "Industry 4.0",
      "Smart Manufacturing",
      "Digital Transformation",
      "Digital Twin",
      "Industrial IoT / IIoT",
      "IoT",
      "Process Automation",
      "Industrial Digitalization",
      "Real-Time Monitoring",
      "Data-Driven Decision Making",
      "Predictive Maintenance",
      "MQTT",
      "Node-RED",
      "Grafana",
      "InfluxDB",
      "Docker",
    ],
  },
];

/* =========================================================
   SOFT SKILLS
========================================================= */

const softSkills = [
  {
    icon: Users,
    number: "01",
    title: "Understand",
    description:
      "Deeply understand problems, context, constraints, and what shapes real-world challenges.",
    skills: [
      "Active Listening",
      "Observation",
      "Curiosity",
      "Open-Mindedness",
    ],
  },

  {
    icon: Target,
    number: "02",
    title: "Define",
    description:
      "Structure complex situations into clear problems, priorities, objectives, and directions.",
    skills: [
      "Problem Framing",
      "Critical Thinking",
      "Prioritization",
      "Organization",
    ],
  },

  {
    icon: Lightbulb,
    number: "03",
    title: "Explore",
    description:
      "Challenge assumptions, generate ideas, and explore different perspectives.",
    skills: [
      "Creativity",
      "Brainstorming",
      "Adaptability",
      "Initiative",
    ],
  },

  {
    icon: Handshake,
    number: "04",
    title: "Collaborate",
    description:
      "Share ideas clearly, work with different perspectives, and turn ideas into action.",
    skills: [
      "Communication",
      "Teamwork",
      "Leadership",
      "Decision Making",
    ],
  },
];

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function Skills() {
  const { ref: titleRef, isVisible: titleVisible } =
    useScrollReveal();

  const { ref: softRef, isVisible: softVisible } =
    useScrollReveal();

  return (
    <section id="skills" className="py-20 sm:py-24">
      <div className="max-w-[1100px] mx-auto px-6">

        {/* =================================================
            HEADER
        ================================================= */}

        <div ref={titleRef}>
          <h2
            className={`text-2xl sm:text-[2rem] font-extrabold
            text-[var(--navy)] tracking-tight section-title-line
            fade-in-up ${
              titleVisible ? "visible" : ""
            }`}
          >
            Skills
          </h2>

          <p
  className={`text-[var(--text-secondary)] text-base sm:text-[1.05rem] mt-5 max-w-none sm:whitespace-nowrap leading-[1.75] fade-in-up stagger-1 ${
    titleVisible ? "visible" : ""
  }`}
>
  Technical, analytical, digital, and interpersonal skills developed throughout my engineering journey.
</p>
        </div>

        {/* =================================================
            TECHNICAL SKILLS
        ================================================= */}

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {skillGroups.map((group, index) => (
            <SkillGroup
              key={group.title}
              group={group}
              index={index}
            />
          ))}
        </div>

        {/* =================================================
            SOFT SKILLS
        ================================================= */}

        <div
          ref={softRef}
          className={`mt-16 sm:mt-20 fade-in-up ${
            softVisible ? "visible" : ""
          }`}
        >
          {/* Soft Skills Header */}

          <div className="mb-9">

            <div className="flex items-center gap-2.5 mb-3">

              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{
                  background: "var(--teal-bg)",
                  color: "var(--teal)",
                }}
              >
                <BrainCircuit size={18} />
              </div>

              <h3
                className="text-xl sm:text-[1.35rem]
                font-extrabold text-[var(--navy)]"
              >
                Soft Skills
              </h3>

            </div>

            <p
              className="text-[var(--text-secondary)]
              text-sm sm:text-base max-w-none
              leading-[1.75]"
            >
              Beyond technical expertise, the soft skills
              that drive successful project delivery and
              effective collaboration.
            </p>

          </div>

          {/* =================================================
              CONNECTED SOFT SKILLS PROCESS
          ================================================= */}

          <div className="relative">

            {/* Connection Line */}

            <div
              className="
                hidden md:block
                absolute
                top-[31px]
                left-[10%]
                right-[10%]
                h-[2px]
                bg-gradient-to-r
                from-transparent
                via-[var(--teal)]/40
                to-transparent
              "
            />

            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                md:grid-cols-4
                gap-4
                md:gap-5
                items-stretch
              "
            >

              {softSkills.map((item, index) => {

                const Icon = item.icon;

                return (
                  <div
                    key={item.number}
                    className="group relative"
                    style={{
                      transitionDelay: `${index * 0.1}s`,
                    }}
                  >

                    {/* =================================================
                        ICON / STEP
                    ================================================= */}

                    <div className="relative z-10 flex justify-center mb-4">

                      <div
                        className="
                          relative
                          w-[58px]
                          h-[58px]
                          rounded-full
                          flex
                          items-center
                          justify-center
                          border-4
                          border-white
                          transition-all
                          duration-500
                          group-hover:scale-110
                        "
                        style={{
                          background: "var(--teal-bg)",
                          color: "var(--teal)",
                          boxShadow:
                            "0 0 0 1px var(--gray-200), 0 8px 25px rgba(20,184,166,0.10)",
                        }}
                      >

                        <Icon size={21} />

                        <span
                          className="
                            absolute
                            -top-2
                            -right-2
                            min-w-[21px]
                            h-[21px]
                            px-1
                            rounded-full
                            flex
                            items-center
                            justify-center
                            bg-[var(--teal)]
                            text-white
                            text-[0.58rem]
                            font-bold
                            shadow-[0_0_14px_rgba(20,184,166,0.35)]
                          "
                        >
                          {item.number}
                        </span>

                      </div>
                    </div>

                    {/* =================================================
                        SOFT SKILL CARD
                    ================================================= */}

                    <div
                      className="
                        relative
                        overflow-hidden
                        bg-white
                        rounded-xl
                        border
                        px-4
                        py-4
                        min-h-[210px]
                        transition-all
                        duration-500
                        hover:-translate-y-1
                        hover:shadow-xl
                      "
                      style={{
                        borderColor: "var(--gray-200)",
                      }}
                    >

                      {/* Glow */}

                      <div
                        className="
                          absolute
                          -top-16
                          -right-16
                          w-32
                          h-32
                          rounded-full
                          bg-[var(--teal)]/10
                          blur-3xl
                          opacity-0
                          group-hover:opacity-100
                          transition-opacity
                          duration-500
                          pointer-events-none
                        "
                      />

                      {/* Accent */}

                      <div
                        className="
                          absolute
                          left-0
                          top-0
                          bottom-0
                          w-[3px]
                          bg-[var(--teal)]
                          opacity-0
                          group-hover:opacity-100
                          transition-opacity
                          duration-300
                        "
                      />

                      <div className="relative">

                        <h4
                          className="
                            text-[0.95rem]
                            font-bold
                            text-[var(--navy)]
                            mb-2
                          "
                        >
                          {item.title}
                        </h4>

                        <p
                          className="
                            text-[var(--text-secondary)]
                            text-[0.76rem]
                            leading-[1.6]
                            mb-3
                          "
                        >
                          {item.description}
                        </p>

                        {/* Skill Tags */}

                        <div className="flex flex-wrap gap-1.5">

                          {item.skills.map((skill) => (

                            <span
                              key={skill}
                              className="
                                px-2
                                py-1
                                bg-[var(--gray-50)]
                                text-[var(--navy-light)]
                                text-[0.67rem]
                                font-medium
                                rounded-md
                                border
                                transition-all
                                duration-300
                                hover:bg-[var(--teal-bg)]
                                hover:text-[var(--teal-dark)]
                                hover:-translate-y-0.5
                              "
                              style={{
                                borderColor:
                                  "var(--gray-200)",
                              }}
                            >
                              {skill}
                            </span>

                          ))}

                        </div>

                      </div>
                    </div>
                  </div>
                );
              })}

            </div>
          </div>
        </div>

        {/* =================================================
            LANGUAGES
        ================================================= */}

        <LanguageSection />

      </div>
    </section>
  );
}

/* =========================================================
   TECHNICAL SKILL CARD
========================================================= */

function SkillGroup({
  group,
  index,
}: {
  group: (typeof skillGroups)[number];
  index: number;
}) {

  const { ref, isVisible } = useScrollReveal();

  const Icon = group.icon;

  return (
    <div
      ref={ref}
      className={`
        group
        relative
        overflow-hidden
        card-glow
        bg-white
        p-5
        sm:p-6
        rounded-xl
        border
        transition-all
        duration-300
        hover:shadow-xl
        hover:border-[var(--teal)]
        hover:-translate-y-1
        fade-in-up
        ${isVisible ? "visible" : ""}
      `}
      style={{
        borderColor: "var(--gray-200)",
        transitionDelay: `${(index % 3) * 0.1}s`,
      }}
    >

      {/* Glow */}

      <div
        className="
          absolute
          -top-12
          -right-12
          w-28
          h-28
          rounded-full
          bg-[var(--teal)]/5
          blur-3xl
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-500
        "
      />

      {/* Left Accent */}

      <div
        className="
          absolute
          left-0
          top-0
          bottom-0
          w-1
          bg-[var(--teal)]
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-300
        "
      />

      {/* Header */}

      <div className="relative flex items-center gap-2.5 mb-4">

        <div
          className="
            w-10
            h-10
            rounded-xl
            flex
            items-center
            justify-center
            shrink-0
            transition-all
            duration-300
            group-hover:scale-110
          "
          style={{
            background: "var(--teal-bg)",
            color: "var(--teal)",
          }}
        >
          <Icon size={19} />
        </div>

        <h3
          className="
            text-sm
            sm:text-[0.95rem]
            font-bold
            text-[var(--navy)]
          "
        >
          {group.title}
        </h3>

      </div>

      {/* Skills */}

      <div className="relative flex flex-wrap gap-1.5">

        {group.skills.map((skill) => (

          <span
            key={skill}
            className="
              px-2.5
              py-1
              bg-[var(--gray-50)]
              text-[var(--navy-light)]
              text-[0.76rem]
              font-medium
              rounded-md
              border
              transition-all
              duration-300
              hover:bg-[var(--teal-bg)]
              hover:text-[var(--teal-dark)]
              hover:border-[var(--teal)]
              hover:-translate-y-0.5
            "
            style={{
              borderColor: "var(--gray-200)",
            }}
          >
            {skill}
          </span>

        ))}

      </div>

    </div>
  );
}

/* =========================================================
   LANGUAGES
========================================================= */

function LanguageSection() {

  const languages = [
    {
      name: "Arabic",
      level: "Native",
      description: "Native language",
    },
    {
      name: "French",
      level: "Professional",
      description: "Professional working proficiency",
    },
    {
      name: "English",
      level: "Professional",
      description: "Professional working proficiency",
    },
  ];

  return (
    <div className="mt-10">

      {/* Header */}

      <div className="flex items-center gap-2.5 mb-4">

        <div
          className="
            w-9
            h-9
            rounded-lg
            flex
            items-center
            justify-center
          "
          style={{
            background: "var(--teal-bg)",
            color: "var(--teal)",
          }}
        >
          <Languages size={18} />
        </div>

        <h3
          className="
            text-sm
            sm:text-[0.95rem]
            font-bold
            text-[var(--navy)]
          "
        >
          Languages
        </h3>

      </div>

      {/* Language Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

        {languages.map((language) => (

          <div
            key={language.name}
            className="
              group
              bg-white
              rounded-xl
              border
              p-4
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-md
              hover:border-[var(--teal)]
            "
            style={{
              borderColor: "var(--gray-200)",
            }}
          >

            <div className="flex items-center justify-between gap-3 mb-1">

              <span
                className="
                  text-sm
                  font-bold
                  text-[var(--navy)]
                "
              >
                {language.name}
              </span>

              <span
                className="
                  text-[0.62rem]
                  font-semibold
                  uppercase
                  tracking-wide
                  px-2
                  py-0.5
                  rounded-full
                "
                style={{
                  background: "var(--teal-bg)",
                  color: "var(--teal-dark)",
                }}
              >
                {language.level}
              </span>

            </div>

            <p
              className="
                text-xs
                text-[var(--text-light)]
              "
            >
              {language.description}
            </p>

          </div>

        ))}

      </div>
    </div>
  );
}