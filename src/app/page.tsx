"use client";

import { useState } from "react";

import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import TechStack from "@/components/portfolio/TechStack";
import Education from "@/components/portfolio/Education";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import Skills from "@/components/portfolio/Skills";
import GetInTouch from "@/components/portfolio/GetInTouch";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

export type Section =
  | "home"
  | "about"
  | "education"
  | "experience"
  | "projects"
  | "skills"
  | "contact";

export default function Home() {
  const [activeSection, setActiveSection] =
    useState<Section>("home");

  const handleNavigate = (section: Section) => {
    setActiveSection(section);
  };

  return (
    <div className="h-screen w-full flex flex-col overflow-hidden">
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      <main className="flex-1 min-h-0 overflow-hidden">
        <div className="h-full w-full overflow-y-auto overflow-x-hidden">
          {activeSection === "home" && (
            <>
              <Hero onNavigate={handleNavigate} />
              <TechStack />
            </>
          )}

          {activeSection === "about" && <About />}

          {activeSection === "education" && <Education />}

          {activeSection === "experience" && <Experience />}

          {activeSection === "projects" && <Projects />}

          {activeSection === "skills" && <Skills />}

          {activeSection === "contact" && (
            <>
              <GetInTouch />
              <Contact />
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}