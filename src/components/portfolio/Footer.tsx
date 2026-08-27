"use client";

import { Linkedin, Github, Mail, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="w-full py-6 mt-auto border-t shrink-0"
      style={{
        background: "var(--t-nav-bg)",
        borderTopColor: "var(--t-nav-border)",
      }}
    >
      <div className="max-w-[1100px] mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p
          className="text-xs flex items-center gap-1"
          style={{ color: "var(--t-text-on-dark-sub)" }}
        >
          © {new Date().getFullYear()} Assmae Essabbahy. Made with{" "}
          <Heart
            size={12}
            className="text-red-400 fill-red-400 inline shrink-0"
          />{" "}
          All rights reserved.
        </p>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href="mailto:assmae.essabbahy2003@gmail.com"
            aria-label="Email"
            className="transition-colors duration-200 hover:text-[var(--teal-light)]"
            style={{ color: "var(--t-text-on-dark-muted)" }}
          >
            <Mail size={15} />
          </a>

          <a
            href="https://linkedin.com/in/assmae-essabbahy-bb686829b"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors duration-200 hover:text-[var(--teal-light)]"
            style={{ color: "var(--t-text-on-dark-muted)" }}
          >
            <Linkedin size={15} />
          </a>

          <a
            href="https://github.com/AssmaeEssabbahy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors duration-200 hover:text-[var(--teal-light)]"
            style={{ color: "var(--t-text-on-dark-muted)" }}
          >
            <Github size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}