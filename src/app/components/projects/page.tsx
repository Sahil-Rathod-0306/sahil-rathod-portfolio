"use client"; // Required for state management (filtering) in Next.js App Router

import React, { useState } from "react";
import Image from "next/image";
import { ExternalLink, Star } from "lucide-react";

// --- PROJECT DATA ---
const PROJECTS_DATA = [
  {
    id: 1,
    title: "YouTube Clone",
    type: "Full Stack",
    description: "A full-featured video streaming platform with secure authentication, video uploading capabilities, and real-time user interactions.",
    image: "https://tse2.mm.bing.net/th/id/OIP._VhKBg1yKlM_DQ3EfIejQQHaIB?pid=Api&P=0&h=180", 
    techStack: ["Next.js", "Node.js", "Express", "MongoDB"],
    githubLink: "https://github.com/Sahil-Rathod-0306/Youtube-Clone.git",
    featured: true,
  },
  {
    id: 2,
    title: "Aarogya App Backend",
    type: "Backend",
    description: "A robust healthcare backend system focused on secure patient data handling, RESTful API development, and a highly scalable architecture.",
    highlight: "Security & API Design",
    image: "https://tse3.mm.bing.net/th/id/OIP.l7isvsvHCJiVCJckLyt3vQHaHa?pid=Api&P=0&h=180",
    techStack: ["Django", "Python", "PostgreSQL", "Docker"],
    githubLink: "https://github.com/Sahil-Rathod-0306/Aarogya-App.git",
    featured: false,
  },
  {
    id: 3,
    title: "Travel Planner",
    type: "Full Stack",
    description: "A smart itinerary management system where users can plan, organize, and manage complex travel schedules efficiently.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000&auto=format&fit=crop",
    techStack: ["Django", "React", "Tailwind CSS", "SQLite"],
    githubLink: "https://github.com/Sahil-Rathod-0306/TravelItinerary.git",
    featured: false,
  },
  {
    id: 4,
    title: "SheCurity App",
    type: "Mobile Apps",
    description: "A vital safety-focused mobile application featuring real-time location tracking, emergency SOS alerts, and trusted contact integration.",
    highlight: "Real-world Impact & User Safety",
    image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1000&auto=format&fit=crop",
    techStack: ["React Native", "Firebase", "Google Maps API"],
    githubLink: "https://github.com/Sahil-Rathod-0306/SheCurity_App.git",
    featured: false,
  }
];

const CATEGORIES = ["All", "Full Stack", "Backend", "Mobile Apps"];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  // Filter logic
  const filteredProjects = PROJECTS_DATA.filter(project => 
    activeFilter === "All" || project.type === activeFilter
  );

  return (
    <section className="min-h-screen bg-slate-950 text-white py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- HEADER SECTION --- */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Projects</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
            A collection of real-world applications showcasing my full-stack development skills, problem-solving abilities, and passion for clean code.
          </p>
        </div>

        {/* --- FILTER SECTION --- */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 backdrop-blur-md border ${
                activeFilter === category 
                  ? "bg-blue-600 border-blue-500 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]" 
                  : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* --- PROJECTS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`group relative flex flex-col bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(37,99,235,0.2)] hover:border-blue-500/50 transition-all duration-500 ${
                project.featured ? "md:col-span-2 lg:col-span-2 md:flex-row" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Optional: Glow effect behind the card on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/5 transition-all duration-500 z-0"></div>

              {/* Project Image */}
              <div className={`relative overflow-hidden z-10 ${project.featured ? "md:w-1/2" : "w-full aspect-video"}`}>
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-500"></div>
                
                {/* Featured Badge over Image */}
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-blue-600/90 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-sm font-bold flex items-center gap-1.5 shadow-lg">
                    <Star className="w-4 h-4 fill-white" /> Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className={`p-8 flex flex-col flex-grow z-10 ${project.featured ? "md:w-1/2 justify-center" : ""}`}>
                
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <span className="text-xs font-semibold px-3 py-1 bg-white/10 text-gray-300 rounded-full border border-white/10 whitespace-nowrap ml-3">
                    {project.type}
                  </span>
                </div>

                <p className="text-gray-400 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Highlight text if exists */}
                {project.highlight && (
                  <div className="mb-6 inline-block w-fit text-sm font-medium text-cyan-300 bg-cyan-950/50 px-3 py-1.5 rounded-md border border-cyan-800/50">
                    ✦ {project.highlight}
                  </div>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs font-semibold px-3 py-1.5 bg-blue-900/30 text-blue-300 border border-blue-700/30 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links / Buttons */}
                <div className="flex gap-4 mt-auto">
                 
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white py-2.5 rounded-xl font-medium border border-white/10 hover:border-white/30 transition-all duration-300"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C6.48 2 2 6.59 2 12.25c0 4.53 2.87 8.37 6.84 9.72.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.45-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 7.12c.85 0 1.71.12 2.5.36 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.94-2.33 4.8-4.56 5.06.36.32.67.95.67 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.25C22 6.59 17.52 2 12 2Z" />
                    </svg>
                    Source
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Empty State (If a filter has no projects) */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 animate-fade-in-up">
            <p className="text-gray-400 text-xl">More projects coming soon in this category!</p>
          </div>
        )}

      </div>
    </section>
  );
}
