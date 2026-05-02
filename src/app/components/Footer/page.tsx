"use client";

import { ArrowUp, Mail } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    icon: "github",
    href: "https://github.com/Sahil-Rathod-0306",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    href: "https://www.linkedin.com/in/sahil-rathod-073b92354",
  },
  {
    name: "Email",
    icon: "mail",
    href: "mailto:sahilrathod0306@gmail.com",
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const renderIcon = (icon: string) => {
    if (icon === "github") {
      return (
        <svg
          aria-hidden="true"
          className="h-5 w-5 text-slate-300 transition-colors duration-300 group-hover:text-sky-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.48 2 2 6.59 2 12.25c0 4.53 2.87 8.37 6.84 9.72.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.45-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 7.12c.85 0 1.71.12 2.5.36 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.94-2.33 4.8-4.56 5.06.36.32.67.95.67 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.25C22 6.59 17.52 2 12 2Z" />
        </svg>
      );
    }

    if (icon === "linkedin") {
      return (
        <svg
          aria-hidden="true"
          className="h-5 w-5 text-slate-300 transition-colors duration-300 group-hover:text-sky-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M4.98 3.5a2.49 2.49 0 1 0 0 4.98 2.49 2.49 0 0 0 0-4.98ZM3 8.98h3.96V21H3zM10.14 8.98H14v1.64h.06c.54-1.02 1.86-2.1 3.82-2.1 4.08 0 4.83 2.69 4.83 6.18V21h-3.96v-5.58c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95V21h-3.96z" />
        </svg>
      );
    }

    return (
      <Mail className="h-5 w-5 text-slate-300 transition-colors duration-300 group-hover:text-sky-300" />
    );
  };

  return (
    <footer className="relative overflow-hidden border-t border-slate-800 bg-[#071827] text-slate-300">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/70 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-sky-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-center text-center">
          <h2 className="mb-2 text-3xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-sky-200 via-white to-sky-300 bg-clip-text text-transparent">
              Sahil Rathod
            </span>
          </h2>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-sky-300">
            Full Stack Developer
          </p>

          <p className="mx-auto mb-8 max-w-md leading-relaxed text-slate-400">
            Building scalable web and mobile apps with modern technologies,
            thoughtful interfaces, and clean architecture.
          </p>

          <div className="mb-10 flex items-center gap-4">
            {socialLinks.map((social) => {
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target={social.name === "Email" ? undefined : "_blank"}
                  rel={social.name === "Email" ? undefined : "noopener noreferrer"}
                  aria-label={social.name}
                  className="motion-lift group rounded-md border border-slate-700 bg-slate-900/70 p-3 shadow-lg backdrop-blur-sm hover:border-sky-400 hover:bg-slate-800"
                >
                  {renderIcon(social.icon)}
                </a>
              );
            })}
          </div>

          <div className="mb-6 h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

          <div className="flex w-full flex-col items-center justify-between gap-4 text-sm text-slate-500 md:flex-row">
            <p>© 2026 Sahil Rathod. All rights reserved.</p>

            <button
              type="button"
              onClick={scrollToTop}
              className="group inline-flex items-center gap-2 rounded-md border border-slate-700 bg-slate-900/60 px-4 py-2 text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-400 hover:bg-slate-800 hover:text-white"
              aria-label="Scroll to top"
            >
              Back to top
              <ArrowUp className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
