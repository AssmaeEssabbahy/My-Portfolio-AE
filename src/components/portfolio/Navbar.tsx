"use client";

import { useState, useEffect } from "react";
import {
  Linkedin,
  Github,
  Mail,
  Sun,
  Moon,
  Home,
  User,
  Briefcase,
  Wrench,
  FolderOpen,
  Award,
} from "lucide-react";

type Section =
  | "home"
  | "about"
  | "education"
  | "experience"
  | "projects"
  | "skills"
  | "contact";

interface NavbarProps {
  activeSection: Section;
  onNavigate: (section: Section) => void;
}

const navItems: {
  label: string;
  section: Section;
  icon: typeof Home;
}[] = [
  { label: "Home", section: "home", icon: Home },
  { label: "About", section: "about", icon: User },
  { label: "Education", section: "education", icon: Award },
  { label: "Experience", section: "experience", icon: Briefcase },
  { label: "Projects", section: "projects", icon: FolderOpen },
  { label: "Skills", section: "skills", icon: Wrench },
  { label: "Contact", section: "contact", icon: Mail },
];

export default function Navbar({
  activeSection,
  onNavigate,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsDark(!document.documentElement.classList.contains("light"));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const willBeLight = html.classList.contains("dark");

    html.classList.remove("light", "dark");
    html.classList.add(willBeLight ? "light" : "dark");

    localStorage.setItem(
      "portfolio-theme",
      willBeLight ? "light" : "dark"
    );

    setIsDark(!willBeLight);
  };

  const handleNavClick = (section: Section) => {
    setMobileOpen(false);
    onNavigate(section);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
        scrolled
          ? "shadow-[0_4px_30px_rgba(0,0,0,0.08)]"
          : ""
      }`}
      style={{
        background: "var(--t-nav-bg)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid var(--t-nav-border)",
      }}
    >
      <div className="max-w-[1100px] mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => handleNavClick("home")}
          className="text-lg font-bold tracking-tight whitespace-nowrap bg-transparent border-none cursor-pointer"
          style={{ color: "var(--t-text-on-dark)" }}
        >
          Assmae{" "}
          <span style={{ color: "var(--t-text-accent)" }}>
            Essabbahy
          </span>
        </button>

        <ul className="hidden md:flex list-none items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.section;

            return (
              <li key={item.section}>
                <button
                  onClick={() => handleNavClick(item.section)}
                  className="text-[13px] font-medium px-3 py-1.5 rounded-lg transition-all duration-200 bg-transparent border-none cursor-pointer"
                  style={
                    isActive
                      ? {
                          color: "var(--t-text-accent)",
                          background:
                            "var(--t-nav-active-bg)",
                        }
                      : {
                          color:
                            "var(--t-text-on-dark-muted)",
                          background: "transparent",
                        }
                  }
                >
                  <span className="inline-flex items-center gap-1.5">
                    <Icon size={14} />
                    {item.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 cursor-pointer border-none"
            style={{
              background: "var(--t-nav-active-bg)",
              color: "var(--t-text-on-dark-sub)",
            }}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <a
            href="https://www.linkedin.com/in/assmae-essabbahy-bb686829b"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors p-1"
            style={{
              color: "var(--t-text-on-dark-muted)",
            }}
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>

          <a
            href="mailto:assmae.essabbahy2003@gmail.com"
            className="transition-colors p-1"
            style={{
              color: "var(--t-text-on-dark-muted)",
            }}
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>

        <button
          className="md:hidden flex flex-col gap-[5px] bg-none border-none cursor-pointer p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span
            className="block w-5 h-[2px] rounded-sm transition-all duration-300"
            style={
              mobileOpen
                ? {
                    transform:
                      "rotate(45deg) translate(5px, 5px)",
                    background:
                      "var(--t-text-on-dark)",
                  }
                : {
                    background:
                      "var(--t-text-on-dark)",
                  }
            }
          />

          <span
            className="block w-5 h-[2px] rounded-sm transition-all duration-300"
            style={
              mobileOpen
                ? { opacity: 0 }
                : {
                    background:
                      "var(--t-text-on-dark)",
                  }
            }
          />

          <span
            className="block w-5 h-[2px] rounded-sm transition-all duration-300"
            style={
              mobileOpen
                ? {
                    transform:
                      "rotate(-45deg) translate(5px, -5px)",
                    background:
                      "var(--t-text-on-dark)",
                  }
                : {
                    background:
                      "var(--t-text-on-dark)",
                  }
            }
          />
        </button>
      </div>

      <div
        className={`md:hidden fixed top-16 left-0 right-0 transition-all duration-300 border-b ${
          mobileOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        style={{
          background: "var(--t-nav-mobile-bg)",
          borderBottomColor: "var(--t-nav-border)",
        }}
      >
        <div className="flex flex-col p-4 gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              activeSection === item.section;

            return (
              <button
                key={item.section}
                onClick={() =>
                  handleNavClick(item.section)
                }
                className="text-sm font-medium py-2.5 px-4 rounded-lg w-full transition-all duration-200 border-none cursor-pointer text-left"
                style={
                  isActive
                    ? {
                        color: "var(--t-text-accent)",
                        background:
                          "var(--t-nav-active-bg)",
                      }
                    : {
                        color:
                          "var(--t-text-on-dark-muted)",
                        background: "transparent",
                      }
                }
              >
                <span className="inline-flex items-center gap-2">
                  <Icon size={15} />
                  {item.label}
                </span>
              </button>
            );
          })}

          <div
            className="flex items-center gap-4 mt-3 pt-3 px-4"
            style={{
              borderTop:
                "1px solid var(--t-nav-divider)",
            }}
          >
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 cursor-pointer border-none"
              style={{
                background:
                  "var(--t-nav-active-bg)",
                color:
                  "var(--t-text-on-dark-sub)",
              }}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun size={16} />
              ) : (
                <Moon size={16} />
              )}
            </button>

            <a
              href="mailto:assmae.essabbahy2003@gmail.com"
              className="transition-colors p-1"
              style={{
                color:
                  "var(--t-text-on-dark-muted)",
              }}
              aria-label="Email"
            >
              <Mail size={16} />
            </a>

            <a
              href="https://www.linkedin.com/in/assmae-essabbahy-bb686829b"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors p-1"
              style={{
                color:
                  "var(--t-text-on-dark-muted)",
              }}
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>

            <a
              href="https://github.com/AssmaeEssabbahy"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors p-1"
              style={{
                color:
                  "var(--t-text-on-dark-muted)",
              }}
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}