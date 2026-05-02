import React from "react";
import { Code2, Database, Globe, Server, Smartphone } from "lucide-react";

const SKILLS = [
  { name: "Next.js", icon: <Globe className="h-5 w-5" /> },
  { name: "Express.js", icon: <Server className="h-5 w-5" /> },
  { name: "Node.js", icon: <Code2 className="h-5 w-5" /> },
  { name: "MongoDB", icon: <Database className="h-5 w-5" /> },
  { name: "React Native", icon: <Smartphone className="h-5 w-5" /> },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-[#071827] px-6 py-24 text-white md:px-12"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

      <div className="relative z-10 mx-auto flex max-w-4xl animate-fade-in-up flex-col items-center text-center">
        <h2 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
          About{" "}
          <span className="bg-gradient-to-r from-sky-300 to-sky-200 bg-clip-text text-transparent">
            Me
          </span>
        </h2>

        <div className="animate-soft-pop mb-8 inline-block rounded-md border border-sky-400/25 bg-sky-950/30 px-5 py-2 text-sm font-semibold tracking-wide text-sky-200">
          Sahil Rathod • Full Stack Developer
        </div>

        <p className="mb-14 max-w-3xl text-lg font-light leading-relaxed text-slate-300 md:text-xl">
          I am a Full Stack Developer focused on building scalable web and
          mobile applications with Next.js, React Native, Django, and modern
          JavaScript. I have built projects such as a YouTube Clone, Aarogya
          backend system, Travel Planner, and SheCurity App, with a focus on
          practical features, reliable APIs, and clean user experiences.
        </p>

        <div className="w-full">
          <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-slate-500">
            Core Technologies
          </h3>

          <div className="flex flex-wrap justify-center gap-4">
            {SKILLS.map((skill) => (
              <div
                key={skill.name}
                className="motion-lift group flex cursor-default items-center gap-3 rounded-md border border-slate-700/70 bg-slate-900/70 px-6 py-3.5 hover:border-sky-400/50 hover:bg-slate-800"
              >
                <span className="text-sky-300 transition-colors duration-300 group-hover:text-sky-200">
                  {skill.icon}
                </span>
                <span className="font-medium text-slate-200 transition-colors duration-300 group-hover:text-white">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

