import React from "react";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: ["C++","Next.js", "React Native", "JavaScript", "HTML", "CSS", "Bootstrap"],
  },
  {
    title: "Backend & Databases",
    skills: ["Node.js", "Express.js", "Django", "MongoDB", "REST APIs"],
  },
  {
    title: "Tools & Platforms",
    skills: ["GitHub", "Version Control", "EmailJS", "Deployment"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative z-10 flex w-full flex-col items-center justify-center overflow-hidden border-t border-slate-800 bg-[#071827] py-24"
    >
      <div className="mb-16 animate-fade-in-up text-center">
        <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
          Technical{" "}
          <span className="bg-gradient-to-r from-sky-300 to-sky-200 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>
        <p className="mx-auto max-w-2xl px-4 text-lg text-slate-400">
          Technologies and tools I use to build scalable, high-performance
          applications.
        </p>
      </div>

      <div className="relative z-20 mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 px-6 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="professional-panel motion-lift group animate-rise-delay rounded-lg p-7 hover:border-sky-400/40"
          >
            <h3 className="mb-6 inline-block text-xl font-bold text-slate-100">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <div
                  key={skill}
                  className="cursor-default rounded-md border border-slate-700 bg-slate-950/50 px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-400/50 hover:text-white"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

