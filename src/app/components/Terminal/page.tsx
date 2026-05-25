"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const TERMINAL_SCRIPT = [
  { command: "whoami", output: "Sahil Rathod" },
  { command: "skills", output: "Next.js, Django, React Native, Node.js" },
  { command: "projects", output: "YouTube Clone\nSheCurity App\nTravel Planner" },
  { command: "status", output: "Available for internships" },
];

export default function Terminal() {
  const [history, setHistory] = useState<{ command: string; output: string }[]>(
    [],
  );
  const [currentStep, setCurrentStep] = useState(0);
  const [typedCommand, setTypedCommand] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const terminalBodyRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history, typedCommand]);

  useEffect(() => {
    if (!isInView || currentStep >= TERMINAL_SCRIPT.length) return;

    let timeout: NodeJS.Timeout;
    const currentScript = TERMINAL_SCRIPT[currentStep];

    if (!isTyping) {
      timeout = setTimeout(() => setIsTyping(true), 800);
      return () => clearTimeout(timeout);
    }

    if (typedCommand.length < currentScript.command.length) {
      timeout = setTimeout(() => {
        setTypedCommand(currentScript.command.slice(0, typedCommand.length + 1));
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setHistory((prev) => [...prev, currentScript]);
        setTypedCommand("");
        setIsTyping(false);
        setCurrentStep((prev) => prev + 1);
      }, 500);
    }

    return () => clearTimeout(timeout);
  }, [currentStep, typedCommand, isTyping, isInView]);

  return (
    <section
      ref={containerRef}
      className="relative flex w-full flex-col items-center overflow-hidden bg-[#071827] px-4 py-24 sm:px-6"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(14,165,233,0.16),transparent_32rem)]" />
      <div className="animated-grid pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.035)_1px,transparent_1px)] bg-[size:56px_56px]" />

      <div className="relative z-10 mb-14 text-center">
        <h2 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
          Developer <span className="text-sky-300">Terminal</span>
        </h2>
        <div className="mx-auto h-1 w-24 rounded-full bg-sky-400/70" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-3xl"
      >
        <div className="flex w-full flex-col overflow-hidden rounded-lg border border-sky-300/20 bg-slate-950/80 shadow-[0_30px_90px_rgba(2,6,23,0.42),0_0_42px_rgba(14,165,233,0.12)] backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-sky-300/15 bg-slate-900/80 px-4 py-3">
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full border border-[#e0443e] bg-[#ff5f56]" />
              <div className="h-3 w-3 rounded-full border border-[#dea123] bg-[#ffbd2e]" />
              <div className="h-3 w-3 rounded-full border border-[#1aab29] bg-[#27c93f]" />
            </div>
            <div className="select-none font-mono text-xs text-slate-400">
              sahil@portfolio:~
            </div>
            <div className="w-12" />
          </div>

          <div
            ref={terminalBodyRef}
            className="scrollbar-hide h-[350px] overflow-y-auto bg-[linear-gradient(180deg,rgba(15,23,42,0.78),rgba(2,6,23,0.92))] p-6 font-mono text-sm text-slate-200 md:text-base"
          >
            {history.map((item, index) => (
              <div key={index} className="mb-6">
                <div className="mb-1 flex gap-2 text-sky-300">
                  <span className="text-sky-400">$</span>
                  <span className="text-cyan-300">~</span>
                  <span className="text-emerald-300">{item.command}</span>
                </div>
                <div className="whitespace-pre-line pl-5 leading-relaxed text-slate-300">
                  {item.output}
                </div>
              </div>
            ))}

            {currentStep < TERMINAL_SCRIPT.length && (
              <div className="flex gap-2 text-sky-300">
                <span className="text-sky-400">$</span>
                <span className="text-cyan-300">~</span>
                <span className="flex items-center text-emerald-300">
                  {typedCommand}
                  <span className="ml-1 h-5 w-2 animate-pulse bg-sky-300" />
                </span>
              </div>
            )}

            {currentStep >= TERMINAL_SCRIPT.length && (
              <div className="mt-6 flex gap-2 text-sky-300">
                <span className="text-sky-400">$</span>
                <span className="text-cyan-300">~</span>
                <span className="ml-1 h-5 w-2 animate-pulse bg-sky-300" />
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
