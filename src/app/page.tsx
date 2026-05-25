// Using standard img elements instead of next/image to avoid missing module/type issues
import { Mail, ArrowRight } from "lucide-react";
import Skills from "./components/Skills/page";

import About from "./components/About/page";
import FloatingSkillButton from "./components/FloatingNav/page";
import Achievements from "@/app/components/Achievements/page";
import Contact from "./components/contact/page";
import Footer from "./components/Footer/page";
import Link from "next/link";
import Terminal from "./components/Terminal/page";

export default function Home() {
  return (
    <main className="relative scroll-smooth bg-[#071827]">
      <FloatingSkillButton />

      <section className="space-hero relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20 text-white md:px-12">
        <div className="animated-grid absolute inset-0 z-0 bg-[linear-gradient(rgba(148,163,184,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.035)_1px,transparent_1px)] bg-[size:56px_56px]"></div>
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-[#071827]/40 to-[#071827]"></div>

        <div className="z-10 grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col space-y-6 animate-fade-in-up">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-300">
              Hello, I'm
            </p>

            <h1 className="text-5xl font-extrabold tracking-tight text-white md:text-7xl">
              Sahil{" "}
              <span className="bg-gradient-to-r from-sky-300 via-slate-100 to-sky-200 bg-clip-text text-transparent">
                Rathod
              </span>
            </h1>

            <h2 className="pb-2 text-2xl font-medium text-slate-200 md:text-3xl">
              Full Stack Developer
              <span className="mt-2 block text-lg font-light text-slate-400">
                Next.js | Node.js | React
              </span>
            </h2>

            <p className="max-w-md border-l-2 border-sky-400 pl-4 text-lg leading-relaxed text-slate-300">
              I build scalable web & mobile applications with clean, intuitive
              UIs and highly efficient backend architectures.
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              <a
                href="/components/projects"
                className="shine-button group inline-flex items-center gap-2 rounded-md bg-sky-500 px-8 py-3.5 font-semibold text-white shadow-lg shadow-sky-950/35 transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-400"
              >
                View My Projects
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/SAHIL-RATHOD-Resume.pdf"
                download
                className="motion-lift group flex items-center gap-2 rounded-md border border-slate-600 bg-slate-900/40 px-8 py-3.5 font-semibold text-slate-100 hover:border-sky-400 hover:bg-slate-800"
              >
                <svg
                  className="h-5 w-5 transition-transform group-hover:-translate-y-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 5v14m0 0l-6-6m6 6l6-6" />
                </svg>
                Download Resume
              </a>
            </div>

            <div className="flex gap-5 pt-8">
              <a
                href="https://www.linkedin.com/in/sahil-rathod-073b92354"
                target="_blank"
                rel="noopener noreferrer"
                className="motion-lift rounded-md border border-slate-700 bg-slate-900/70 p-3.5 shadow-lg backdrop-blur-sm hover:border-sky-400 hover:bg-slate-800"
              >
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 text-gray-200"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5a2.49 2.49 0 1 0 0 4.98 2.49 2.49 0 0 0 0-4.98ZM3 8.98h3.96V21H3zM10.14 8.98H14v1.64h.06c.54-1.02 1.86-2.1 3.82-2.1 4.08 0 4.83 2.69 4.83 6.18V21h-3.96v-5.58c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95V21h-3.96z" />
                </svg>
              </a>
              <a
                href="https://github.com/Sahil-Rathod-0306"
                target="_blank"
                rel="noopener noreferrer"
                className="motion-lift rounded-md border border-slate-700 bg-slate-900/70 p-3.5 shadow-lg backdrop-blur-sm hover:border-sky-400 hover:bg-slate-800"
              >
                <svg
                  aria-hidden="true"
                  className="h-6 w-6 text-gray-200"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.59 2 12.25c0 4.53 2.87 8.37 6.84 9.72.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.45-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 7.12c.85 0 1.71.12 2.5.36 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.94-2.33 4.8-4.56 5.06.36.32.67.95.67 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.25C22 6.59 17.52 2 12 2Z" />
                </svg>
              </a>
              <a
                href="mailto:sahilrathod0306@gmail.com"
                className="motion-lift rounded-md border border-slate-700 bg-slate-900/70 p-3.5 shadow-lg backdrop-blur-sm hover:border-sky-400 hover:bg-slate-800"
              >
                <Mail className="h-6 w-6 text-gray-200" />
              </a>
            </div>
          </div>

          <div className="relative hidden h-[600px] w-full items-center justify-center lg:flex">
            <div className="animate-hero-portrait relative z-20 flex h-full w-full items-end justify-center">
              <img
                src="/sahil_photo.png"
                alt="Sahil Rathod"
                width={500}
                height={900}
                className="w-[500px] object-contain drop-shadow-[0_28px_48px_rgba(2,6,23,0.55)] transition-all duration-500"
              />
            </div>

            <div className="absolute left-4 top-20 z-30 animate-float-slow">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                alt="React"
                width={60}
                height={60}
                className="object-contain drop-shadow-[0_0_20px_rgba(97,218,251,0.6)]"
              />
            </div>

            <div className="absolute right-12 top-32 z-30 animate-float-medium">
              <img
                src="https://assets.vercel.com/image/upload/front/assets/design/nextjs-white-logo.svg"
                alt="Next.js"
                width={110}
                height={45}
                className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
              />
            </div>

            <div className="absolute bottom-40 left-10 z-30 animate-float-fast">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
                alt="JavaScript"
                width={55}
                height={55}
                className="rounded-lg object-contain drop-shadow-[0_0_20px_rgba(247,223,30,0.5)]"
              />
            </div>

            <div className="absolute -right-4 bottom-80 z-20 animate-float-slow">
              <div className="flex items-center rounded-md border border-sky-400/30 bg-sky-950/50 px-6 py-3 text-xl font-bold tracking-widest text-sky-300 shadow-xl backdrop-blur-md">
                Node.js
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-12 flex justify-center">
        <Link
          href="/components/Achievements"
          className="shine-button rounded-md bg-sky-500 px-6 py-3 font-semibold text-white shadow-lg shadow-sky-950/35 transition hover:bg-sky-400"
        >
          View All Certificates
        </Link>
      </div>
      <About />
      <Skills />
      <Contact />
      <Terminal />

      <Footer />
    </main>
  );
}


