import React from "react";
import { Code2, Server, Smartphone, Database, Globe } from "lucide-react";

// Define your skills with paired icons for a premium look
const SKILLS = [
  { name: "Next.js", icon: <Globe className="w-5 h-5" /> },
  { name: "Express.js", icon: <Server className="w-5 h-5" /> },
  { name: "Node.js", icon: <Code2 className="w-5 h-5" /> },
  { name: "MongoDB", icon: <Database className="w-5 h-5" /> },
  { name: "React Native", icon: <Smartphone className="w-5 h-5" /> },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-slate-950 text-white relative overflow-hidden flex items-center justify-center min-h-[70vh]">
      
      {/* Subtle Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center animate-fade-in-up">
        
        {/* --- HEADING --- */}
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Me</span>
        </h2>

        {/* --- ROLE BADGE --- */}
        <div className="inline-block mb-8 px-5 py-2 rounded-full bg-blue-900/20 border border-blue-500/30 text-blue-300 font-semibold tracking-wide text-sm shadow-[0_0_15px_rgba(37,99,235,0.15)]">
          Sahil Rathod • Full Stack Developer
        </div>

        {/* --- BIO PARAGRAPH --- */}
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mb-14 font-light">
         I am a Full Stack Developer with experience in building scalable web and mobile applications using technologies such as Next.js, React Native, Django, and modern JavaScript frameworks. 

I have developed projects including a YouTube Clone, Aarogya App (backend system), Travel Planner, and a Safety App, focusing on delivering efficient, user-friendly, and real-world solutions.

I am skilled in optimizing application performance, designing robust APIs, and automating workflows. Through hackathons and collaborative projects, I have strengthened my problem-solving abilities and teamwork skills.

I am passionate about technology and continuously strive to create impactful digital solutions that solve real-world problems.
        </p>

        {/* --- SKILLS SECTION --- */}
        <div className="w-full">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">
            Core Technologies
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {SKILLS.map((skill) => (
              <div 
                key={skill.name}
                className="group flex items-center gap-3 px-6 py-3.5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-blue-500/50 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] transition-all duration-300 cursor-default"
              >
                <span className="text-blue-400 group-hover:text-cyan-300 transition-colors duration-300">
                  {skill.icon}
                </span>
                <span className="font-medium text-gray-200 group-hover:text-white transition-colors duration-300">
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