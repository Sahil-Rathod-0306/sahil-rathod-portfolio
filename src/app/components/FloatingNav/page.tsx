import React from "react";
import { Code2 } from "lucide-react";

export default function FloatingSkillButton() {
  return (
    <div className="fixed right-4 md:right-8 bottom-8 md:bottom-auto md:top-1/2 md:-translate-y-1/2 z-50 animate-bounce-slow">
      <a
        href="#skills"
        aria-label="Scroll to Skills"
        className="group relative flex items-center justify-center w-12 h-12 rounded-full bg-blue-600/20 backdrop-blur-md border border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:bg-blue-600/40 hover:scale-110 hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] transition-all duration-300"
      >
        {/* Tooltip (Appears on Hover) */}
        <span className="absolute right-14 px-3 py-1.5 rounded-lg bg-slate-800/90 backdrop-blur-sm text-white text-sm font-semibold border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl translate-x-2 group-hover:translate-x-0">
           Skills
        </span>

        {/* The Icon */}
        <Code2 className="w-5 h-5 text-blue-400 group-hover:text-white transition-colors duration-300" />
      </a>
    </div>
  );
}