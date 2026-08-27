"use client";

import { useState, FormEvent } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Send,
  CheckCircle,
} from "lucide-react";

const WEB3FORMS_ACCESS_KEY =
  "7928c048-7cd1-4185-8f70-6b9f8898420e";

export default function Contact() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: infoRef, isVisible: infoVisible } = useScrollReveal();
  const { ref: formRef, isVisible: formVisible } = useScrollReveal();

  return (
    <section
      id="contact"
      className="py-20 sm:py-24"
      style={{ background: "var(--gray-50)" }}
    >
      <div className="max-w-[1100px] mx-auto px-6">

        {/* Section Header */}
        <div ref={titleRef}>
          <h2
            className={`text-2xl sm:text-[2rem] font-extrabold text-[var(--navy)] tracking-tight section-title-line fade-in-up ${
              titleVisible ? "visible" : ""
            }`}
          >
            Contact
          </h2>

          <p
  className={`text-[var(--text-secondary)] text-base sm:text-[1.05rem] mt-5 mb-0 max-w-[650px] fade-in-up stagger-1 ${
    titleVisible ? "visible" : ""
  }`}
>
  If you know of any opportunities or have something in mind that could be a
  good fit for my profile, feel free to reach out. I’d be happy to connect
  and discuss it.
</p>
</div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-8 sm:gap-10 items-start">

          {/* Contact Information */}
          <div
            ref={infoRef}
            className={`flex flex-col gap-5 fade-in-left ${
              infoVisible ? "visible" : ""
            }`}
          >
            <ContactItem
              icon={Mail}
              label="Email"
              value="assmae.essabbahy2003@gmail.com"
              href="mailto:assmae.essabbahy2003@gmail.com"
              description="Typically replies within 24 hours"
            />

            <ContactItem
              icon={Phone}
              label="Phone"
              value="+212 626 533 613"
              href="tel:+212626533613"
              description="Available for calls"
            />

            <ContactItem
              icon={MapPin}
              label="Location"
              value="Rabat, Morocco"
              href="#"
              description="Open to professional opportunities"
            
            />

            {/* Follow & Connect */}
            <div className="pt-3">
              <h3 className="text-[0.7rem] font-semibold text-[var(--text-light)] uppercase tracking-wider mb-3">
                Follow & Connect
              </h3>

              <div className="flex items-center gap-2.5">
                <SocialLink
                  href="https://www.linkedin.com/in/assmae-essabbahy-bb686829b"
                  label="LinkedIn"
                >
                  <Linkedin size={17} />
                </SocialLink>

                <SocialLink
                  href="https://github.com/AssmaeEssabbahy"
                  label="GitHub"
                >
                  <Github size={17} />
                </SocialLink>

                <SocialLink
                  href="mailto:assmae.essabbahy2003@gmail.com"
                  label="Email"
                >
                  <Mail size={17} />
                </SocialLink>
              </div>
            </div>

            {/* Currently Available */}
            <div
              className="mt-2 p-4 rounded-xl border bg-white"
              style={{ borderColor: "var(--gray-200)" }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
                </span>

                <h3 className="text-sm font-bold text-[var(--navy)]">
                  Currently Available
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-[1.7]">
                Open to new career opportunities and professional
                collaborations. Let’s connect and discuss how I could
                contribute to your team.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div
            ref={formRef}
            className={`card-glow bg-white p-6 sm:p-7 rounded-xl border shadow-sm fade-in-right ${
              formVisible ? "visible" : ""
            }`}
            style={{ borderColor: "var(--gray-200)" }}
          >
            <div className="mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-[var(--navy)]">
                Send a Message
              </h3>

              <p className="text-sm text-[var(--text-secondary)] mt-1.5 leading-[1.7]">
                Have an opportunity or a project in mind? I&apos;d be happy to
                hear from you.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
  description,
}: {
  icon: React.ComponentType<{
    size?: number;
    className?: string;
  }>;
  label: string;
  value: string;
  href: string;
  description: string;
}) {
  const isExternal = href.startsWith("http");

  return (
    <div className="flex items-start gap-3 group">
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-105"
        style={{
          background: "var(--teal-bg)",
          color: "var(--teal)",
        }}
      >
        <Icon size={18} />
      </div>

      <div className="min-w-0">
        <h4 className="text-[0.7rem] font-semibold text-[var(--text-light)] uppercase tracking-wider mb-0.5">
          {label}
        </h4>

        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="text-sm text-[var(--navy-light)] font-medium hover:text-[var(--teal)] transition-colors break-all"
        >
          {value}
        </a>

        <p className="text-xs text-[var(--text-light)] mt-0.5">
          {description}
        </p>
      </div>
    </div>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      aria-label={label}
      title={label}
      className="w-9 h-9 rounded-lg flex items-center justify-center border bg-white text-[var(--text-secondary)] transition-all duration-300 hover:-translate-y-1 hover:text-[var(--teal)] hover:border-[var(--teal)] hover:shadow-md"
      style={{ borderColor: "var(--gray-200)" }}
    >
      {children}
    </a>
  );
}

function ContactForm() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSending(true);
    setSent(false);
    setError(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", WEB3FORMS_ACCESS_KEY);

    formData.append(
      "from_name",
      "Assmae Portfolio"
    );

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setSent(true);
        form.reset();

        setTimeout(() => {
          setSent(false);
        }, 4000);
      } else {
        console.error("Web3Forms error:", data);
        setError(true);
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>

      {/* Name */}
      <div className="relative mb-5 form-floating-label">
        <input
          type="text"
          name="name"
          placeholder=" "
          required
          autoComplete="name"
          className="w-full px-4 pt-4 pb-2 border rounded-lg text-sm text-[var(--navy-light)] bg-[var(--gray-50)] outline-none transition-all duration-300 focus:border-[var(--teal)] focus:bg-white"
          style={{ borderColor: "var(--gray-200)" }}
        />

        <label className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--gray-400)] text-sm pointer-events-none transition-all duration-300">
          Your Name
        </label>
      </div>

      {/* Email */}
      <div className="relative mb-5 form-floating-label">
        <input
          type="email"
          name="email"
          placeholder=" "
          required
          autoComplete="email"
          className="w-full px-4 pt-4 pb-2 border rounded-lg text-sm text-[var(--navy-light)] bg-[var(--gray-50)] outline-none transition-all duration-300 focus:border-[var(--teal)] focus:bg-white"
          style={{ borderColor: "var(--gray-200)" }}
        />

        <label className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--gray-400)] text-sm pointer-events-none transition-all duration-300">
          Your Email
        </label>
      </div>

      {/* Subject */}
      <div className="relative mb-5 form-floating-label">
        <input
          type="text"
          name="subject"
          placeholder=" "
          required
          className="w-full px-4 pt-4 pb-2 border rounded-lg text-sm text-[var(--navy-light)] bg-[var(--gray-50)] outline-none transition-all duration-300 focus:border-[var(--teal)] focus:bg-white"
          style={{ borderColor: "var(--gray-200)" }}
        />

        <label className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--gray-400)] text-sm pointer-events-none transition-all duration-300">
          Subject
        </label>
      </div>

      {/* Message */}
      <div className="relative mb-6 form-floating-label">
        <textarea
          name="message"
          rows={4}
          placeholder=" "
          required
          className="w-full px-4 pt-5 pb-2 border rounded-lg text-sm text-[var(--navy-light)] bg-[var(--gray-50)] outline-none transition-all duration-300 focus:border-[var(--teal)] focus:bg-white resize-none"
          style={{ borderColor: "var(--gray-200)" }}
        />

        <label className="absolute left-4 top-5 text-[var(--gray-400)] text-sm pointer-events-none transition-all duration-300">
          Your Message
        </label>
      </div>

      {/* Error message */}
      {error && (
        <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-600 text-xs leading-relaxed">
          Something went wrong while sending your message. Please try again
          or contact me directly by email.
        </div>
      )}

      {/* Success message */}
      {sent && (
        <div className="mb-4 p-3 rounded-lg bg-green-50 border border-green-200 text-green-600 text-xs leading-relaxed">
          Your message has been sent successfully. Thank you for reaching out!
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={sending}
        className="w-full flex items-center justify-center gap-2 h-[44px] rounded-lg text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed font-[inherit] border-none cursor-pointer"
        style={
          sent
            ? {
                background: "#22c55e",
                boxShadow:
                  "0 4px 14px rgba(34, 197, 94, 0.35)",
              }
            : {
                background: "var(--teal)",
                boxShadow:
                  "0 4px 14px rgba(13, 148, 136, 0.35)",
              }
        }
      >
        {sent ? (
          <>
            <CheckCircle size={16} />
            Message Sent!
          </>
        ) : sending ? (
          <>
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send size={16} />
            Send Message
          </>
        )}
      </button>
    </form>
  );
}