import React from "react";
import { Code2 } from "lucide-react";

export default function FloatingSkillButton() {
  return (
    <div className="fixed bottom-8 right-4 z-50 md:right-8 md:bottom-auto md:top-1/2 md:-translate-y-1/2">
      <a
        href="#skills"
        aria-label="Scroll to Skills"
        className="animate-bounce-slow group relative flex h-12 w-12 items-center justify-center rounded-md border border-sky-400/40 bg-slate-900/80 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-sky-300 hover:bg-slate-800"
      >
        {/* Tooltip (Appears on Hover) */}
        <span className="pointer-events-none absolute right-14 translate-x-2 whitespace-nowrap rounded-md border border-slate-700 bg-slate-900/95 px-3 py-1.5 text-sm font-semibold text-white opacity-0 shadow-xl backdrop-blur-sm transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
           Skills
        </span>

        {/* The Icon */}
        <Code2 className="h-5 w-5 text-sky-300 transition-colors duration-300 group-hover:text-white" />
      </a>
    </div>
  );
}

