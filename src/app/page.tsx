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
  const [activeSection, setActiveSection] = useState<Section>("home");

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <About />;

      case "education":
        return <Education />;

      case "experience":
        return <Experience />;

      case "projects":
        return <Projects />;

      case "skills":
        return <Skills />;

      case "contact":
        return (
          <>
            <GetInTouch />
            <Contact />
          </>
        );

      case "home":
      default:
        return (
          <>
            <Hero />
            <TechStack />
          </>
        );
    }
  };

  return (
    <div className="h-screen w-full overflow-hidden flex flex-col">
      <Navbar
        activeSection={activeSection}
        onNavigate={(section) => setActiveSection(section)}
      />

      <main className="portfolio-section-container flex-1 min-h-0">
        <div className="portfolio-section-content">
          {renderSection()}
        </div>
      </main>

      <Footer />
    </div>
  );
}