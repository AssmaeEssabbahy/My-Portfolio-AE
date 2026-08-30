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

  const handleNavigate = (section: Section) => {
    setActiveSection(section);
  };

  return (
    <div className="h-screen w-full overflow-hidden flex flex-col">
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      <main className="flex-1 min-h-0 overflow-hidden relative">
        <section
          id="home"
          className={`h-full w-full overflow-y-auto flex flex-col justify-between ${
            activeSection === "home" ? "flex" : "hidden"
          }`}
        >
          <div className="my-auto">
            <Hero onNavigate={handleNavigate} />
            <TechStack />
          </div>
          <Footer />
        </section>

        <section
          id="about"
          className={`h-full w-full overflow-y-auto flex flex-col justify-between ${
            activeSection === "about" ? "flex" : "hidden"
          }`}
        >
          <div className="my-auto">
            <About />
          </div>
          <Footer />
        </section>

        <section
          id="education"
          className={`h-full w-full overflow-y-auto flex flex-col justify-between ${
            activeSection === "education" ? "flex" : "hidden"
          }`}
        >
          <div className="my-auto">
            <Education />
          </div>
          <Footer />
        </section>

        <section
          id="experience"
          className={`h-full w-full overflow-y-auto flex flex-col justify-between ${
            activeSection === "experience" ? "flex" : "hidden"
          }`}
        >
          <div className="my-auto">
            <Experience />
          </div>
          <Footer />
        </section>

        <section
          id="projects"
          className={`h-full w-full overflow-y-auto flex flex-col justify-between ${
            activeSection === "projects" ? "flex" : "hidden"
          }`}
        >
          <div className="my-auto">
            <Projects />
          </div>
          <Footer />
        </section>

        <section
          id="skills"
          className={`h-full w-full overflow-y-auto flex flex-col justify-between ${
            activeSection === "skills" ? "flex" : "hidden"
          }`}
        >
          <div className="my-auto">
            <Skills />
          </div>
          <Footer />
        </section>

        <section
          id="contact"
          className={`h-full w-full overflow-y-auto flex flex-col justify-between ${
            activeSection === "contact" ? "flex" : "hidden"
          }`}
        >
          <div className="my-auto">
  <GetInTouch /> 
  <Contact /> 
</div> 
<Footer /> 
        </section>
      </main>
    </div>
  );
}