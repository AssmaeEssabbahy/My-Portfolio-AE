"use client";

import Image from "next/image";
import {
  ArrowDown,
  FileText,
  Linkedin,
  Github,
  Mail,
  MapPin,
  Briefcase,
  FolderOpen,
  Award,
  BookOpen,
} from "lucide-react";
import { useCountUp } from "@/hooks/useScrollReveal";
import { useEffect, useState, useRef } from "react";

const stats = [
  { icon: Award, value: 2026, suffix: "", label: "Graduate" },
  { icon: Briefcase, value: 3, suffix: "+", label: "Internships" },
  { icon: FolderOpen, value: 8, suffix: "+", label: "Projects" },
  { icon: BookOpen, value: 3, suffix: "+", label: "Online Courses" },
];

const specializations = [
  "Process Optimization",
  "Continuous Improvement",
  "Quality Management",
  "Project Management",
  "Operational Excellence",
  "KPI Monitoring",
  "Supply Chain",
  "Lean Manufacturing",
  "Production Systems",
];

type Section =
  | "home"
  | "about"
  | "education"
  | "experience"
  | "projects"
  | "skills"
  | "contact";

type HeroProps = {
  onNavigate: (section: Section) => void;
};

export default function Hero({ onNavigate }: HeroProps) {
  const [heroVisible, setHeroVisible] = useState(false);
  const [statsStarted, setStatsStarted] = useState(false);
  const [currentSpec, setCurrentSpec] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showEmailMsg, setShowEmailMsg] = useState(false);

  const specRef = useRef<HTMLSpanElement>(null);
  const emailTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setStatsStarted(true), 800);

    return () => clearTimeout(timer);
  }, []);

  /* =========================
     DRIVING TYPEWRITER
     ========================= */

  useEffect(() => {
    const fullText = specializations[currentSpec];

    if (!isDeleting && displayText === fullText) {
      const pauseTimer = setTimeout(() => {
        setIsDeleting(true);
      }, 2200);

      return () => clearTimeout(pauseTimer);
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);

      setCurrentSpec(
        (prevSpec) => (prevSpec + 1) % specializations.length
      );

      return;
    }

    const speed = isDeleting ? 35 : 65;

    const timer = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1)
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentSpec]);

  useEffect(() => {
    if (specRef.current) {
      specRef.current.style.minWidth =
        `${specializations[currentSpec].length}ch`;
    }
  }, [currentSpec]);

  useEffect(() => {
    return () => {
      if (emailTimerRef.current) {
        clearTimeout(emailTimerRef.current);
      }
    };
  }, []);

  const handleEmailClick = () => {
    if (emailTimerRef.current) {
      clearTimeout(emailTimerRef.current);
    }

    setShowEmailMsg(true);

    emailTimerRef.current = setTimeout(() => {
      setShowEmailMsg(false);
    }, 4000);
  };

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        flex
        items-center
        justify-center
        overflow-hidden
      "
      style={{
        background:
          "linear-gradient(135deg, var(--navy) 0%, #0c1929 50%, #0a1628 100%)",
        padding: "100px 24px 80px",
      }}
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute rounded-full animate-float"
          style={{
            width: 500,
            height: 500,
            background: "var(--teal)",
            top: -150,
            right: -100,
            opacity: 0.06,
          }}
        />

        <div
          className="absolute rounded-full animate-float-reverse"
          style={{
            width: 300,
            height: 300,
            background: "var(--teal-light)",
            bottom: -100,
            left: -50,
            opacity: 0.06,
          }}
        />

        <div
          className="absolute rounded-full animate-float-delayed"
          style={{
            width: 200,
            height: 200,
            background: "var(--white)",
            top: "50%",
            left: "50%",
            opacity: 0.04,
          }}
        />
      </div>

      {/* CONTENT */}
      <div className="max-w-[1100px] w-full flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-16 relative z-[1]">
        <div
          className={`flex-1 text-center md:text-left transition-all duration-700 ease-out ${
            heroVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <h1 className="text-[clamp(2.2rem,5vw,3.5rem)] font-extrabold text-white leading-[1.15] tracking-tight mb-2">
            Hi, I&apos;m{" "}
            <span className="gradient-text">Assmae</span>
          </h1>

          <p className="text-[var(--teal-light)] text-xs sm:text-sm font-medium tracking-[2px] uppercase mb-3">
            Industrial &amp; Logistics Engineer
          </p>

          {/* DRIVING */}
          <div className="min-h-[2.5rem] mb-2">
            <p className="text-[var(--gray-300)] text-[clamp(1rem,1.8vw,1.2rem)] font-normal leading-relaxed">
              Driving{" "}
              <span
                ref={specRef}
                className="text-[var(--teal-light)] font-medium inline-block"
                style={{ minWidth: "18ch" }}
              >
                {displayText}
              </span>
              <span className="typewriter-cursor" />
            </p>
          </div>

          <p className="text-[var(--gray-400)] text-sm sm:text-base font-normal mb-2">
            Specializing in{" "}
            <span className="text-[var(--gray-300)] font-medium">
              Industrial Management
            </span>
            ,{" "}
            <span className="text-[var(--gray-300)] font-medium">
              Continuous Improvement
            </span>
            ,{" "}
            <span className="text-[var(--gray-300)] font-medium">
              Product &amp; Process Quality
            </span>
            ,{" "}
            <span className="text-[var(--gray-300)] font-medium">
              Supply Chain
            </span>
            , and{" "}
            <span className="text-[var(--gray-300)] font-medium">
              Data-Driven Optimization
            </span>
            .
          </p>

          {/* STATUS */}
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--teal-light)] opacity-75" />

              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--teal-light)]" />
            </span>

            <span className="text-[var(--teal-light)] text-sm font-semibold">
              Actively seeking a professional opportunity
            </span>

            <span className="text-[var(--gray-500)] text-sm">
              ·
            </span>

            <span className="text-[var(--gray-400)] text-sm font-medium">
              Available immediately
            </span>
          </div>

          {/* LOCATION */}
          <div className="flex items-center justify-center md:justify-start gap-1.5 text-[var(--gray-400)] text-sm mb-7">
            <MapPin
              size={14}
              className="text-[var(--teal)] shrink-0"
            />

            <span>Rabat, Morocco</span>
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-7">
            {/* VIEW MY WORK */}
            <button
              type="button"
              onClick={() => onNavigate("experience")}
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                h-[44px]
                px-6
                rounded-[10px]
                text-[0.9rem]
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-0.5
                cursor-pointer
                border-none
                font-[inherit]
              "
              style={{
                background: "var(--teal)",
                boxShadow:
                  "0 4px 14px rgba(13, 148, 136, 0.35)",
              }}
              onMouseEnter={(event) => {
                event.currentTarget.style.background =
                  "var(--teal-dark)";
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.background =
                  "var(--teal)";
              }}
            >
              View My Work
            </button>

            {/* LET'S TALK */}
            <button
              type="button"
              onClick={() => onNavigate("contact")}
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                h-[44px]
                px-6
                rounded-[10px]
                text-[0.9rem]
                font-semibold
                text-white/80
                border-2
                border-white/20
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-[var(--teal-light)]
                hover:text-[var(--teal-light)]
                hover:bg-[var(--teal)]/5
                cursor-pointer
                bg-transparent
                font-[inherit]
              "
            >
              Let&apos;s Talk
            </button>

            {/* DOWNLOAD CV */}
            <a
              href="/CV_ASSMAE ESSABBAHY_Indus & Logis Engineer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                h-[44px]
                px-6
                rounded-[10px]
                text-[0.9rem]
                font-semibold
                text-white/80
                border-2
                border-white/20
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-[var(--teal-light)]
                hover:text-[var(--teal-light)]
                hover:bg-[var(--teal)]/5
              "
            >
              <FileText size={16} />
              Download CV
            </a>
          </div>

          {/* SOCIAL */}
          <div className="flex items-center gap-3 justify-center md:justify-start relative">
            <a
              href="https://www.linkedin.com/in/assmae-essabbahy-bb686829b"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                justify-center
                w-10
                h-10
                text-[var(--gray-400)]
                border
                border-white/15
                rounded-full
                transition-all
                duration-300
                hover:text-[var(--teal-light)]
                hover:border-[var(--teal-light)]
                hover:-translate-y-1
              "
              aria-label="LinkedIn"
            >
              <Linkedin
                size={16}
                className="[&>path]:fill-current"
              />
            </a>

            <a
              href="https://github.com/AssmaeEssabbahy"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                justify-center
                w-10
                h-10
                text-[var(--gray-400)]
                border
                border-white/15
                rounded-full
                transition-all
                duration-300
                hover:text-[var(--teal-light)]
                hover:border-[var(--teal-light)]
                hover:-translate-y-1
              "
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>

            <button
              type="button"
              onClick={handleEmailClick}
              className="
                flex
                items-center
                justify-center
                w-10
                h-10
                text-[var(--gray-400)]
                border
                border-white/15
                rounded-full
                transition-all
                duration-300
                hover:text-[var(--teal-light)]
                hover:border-[var(--teal-light)]
                hover:-translate-y-1
                cursor-pointer
                bg-transparent
              "
              aria-label="Email"
            >
              <Mail size={16} />
            </button>

            <div
              className={`absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-1.5 rounded-full border border-[var(--teal)]/40 bg-[var(--teal)]/10 transition-all duration-400 ease-out ${
                showEmailMsg
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-1 pointer-events-none"
              }`}
            >
              <span className="text-[var(--teal-light)] text-xs font-medium">
                Don&apos;t hesitate to reach out:
                assmae.essabbahy2003@gmail.com
              </span>
            </div>
          </div>
        </div>

        {/* IMAGE + STATS */}
        <div
          className={`flex-shrink-0 flex flex-col items-center transition-all duration-700 delay-200 ease-out ${
            heroVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-6 scale-95"
          }`}
        >
          <div className="relative">
            <div
              className="absolute -inset-4 rounded-full opacity-20 blur-2xl"
              style={{
                background: "var(--teal)",
              }}
            />

            <Image
              src="/profile.jpg"
              alt="Assmae Essabbahy"
              width={300}
              height={300}
              className="
                relative
                w-[220px]
                h-[220px]
                sm:w-[260px]
                sm:h-[260px]
                lg:w-[300px]
                lg:h-[300px]
                rounded-full
                object-cover
                border-4
                border-[var(--teal)]/20
                shadow-2xl
                transition-transform
                duration-500
                hover:scale-[1.03]
              "
              priority
              unoptimized
            />
          </div>

          <div className="grid grid-cols-4 gap-3 sm:gap-5 mt-8 px-2">
            {stats.map((stat, index) => (
              <StatItem
                key={index}
                stat={stat}
                started={statsStarted}
                delay={index * 150}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ARROW */}
      <div className="absolute bottom-[18px] left-1/2 -translate-x-1/2 text-[var(--gray-500)] animate-bounce-arrow z-10">
        <ArrowDown size={18} />
      </div>
    </section>
  );
}

function StatItem({
  stat,
  started,
  delay,
}: {
  stat: {
    icon: React.ComponentType<{
      size?: number;
      className?: string;
    }>;
    value: number;
    suffix: string;
    label: string;
  };
  started: boolean;
  delay: number;
}) {
  const [localStarted, setLocalStarted] = useState(false);

  const count = useCountUp(
    stat.value,
    2000,
    localStarted
  );

  useEffect(() => {
    if (!started) return;

    const timer = setTimeout(() => {
      setLocalStarted(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [started, delay]);

  const Icon = stat.icon;

  return (
    <div className="text-center">
      <Icon
        size={18}
        className="text-[var(--teal-light)] mx-auto mb-1.5"
      />

      <div className="text-xl sm:text-2xl font-bold text-white leading-none">
        <span className="counter-value">{count}</span>
        {stat.suffix}
      </div>

      <div className="text-[var(--gray-400)] text-[10px] sm:text-xs mt-1 leading-tight">
        {stat.label}
      </div>
    </div>
  );
}