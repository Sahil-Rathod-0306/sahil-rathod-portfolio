import React from "react";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: ["Next.js", "React Native", "JavaScript", "HTML", "CSS", "Bootstrap", "Django"],
    color: "from-blue-500 to-cyan-400",
    shadow: "hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]",
    border: "hover:border-blue-500/50"
  },
  {
    title: "Backend & Databases",
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
    color: "from-green-500 to-emerald-400",
    shadow: "hover:shadow-[0_0_20px_rgba(16,185,129,0.5)]",
    border: "hover:border-green-500/50"
  },
  {
    title: "Tools & Platforms",
    skills: ["GitHub", "Gmail", "Version Control"],
    color: "from-purple-500 to-fuchsia-400",
    shadow: "hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]",
    border: "hover:border-purple-500/50"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 w-full py-24 flex flex-col items-center justify-center bg-slate-950 border-t border-white/10 overflow-hidden">
      
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Section Title */}
      <div className="text-center mb-16 animate-fade-in-up">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Skills</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto px-4">
          Technologies and tools I use to build scalable, high-performance applications.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="max-w-6xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-20">
        {skillCategories.map((category, index) => (
          <div 
            key={index} 
            className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.08]"
          >
            {/* Category Header */}
            <h3 className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${category.color} mb-6 inline-block`}>
              {category.title}
            </h3>

            {/* Skill Badges */}
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, skillIndex) => (
                <div 
                  key={skillIndex}
                  className={`bg-slate-900/50 text-gray-300 px-4 py-2 rounded-xl text-sm font-medium border border-white/5 cursor-default transition-all duration-300 hover:text-white hover:scale-105 ${category.border} ${category.shadow}`}
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