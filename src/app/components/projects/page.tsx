// "use client"; // Required for state management (filtering) in Next.js App Router

// import React, { useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { ArrowLeft, Star } from "lucide-react";

// // --- PROJECT DATA ---
// const PROJECTS_DATA = [
//   {
//     id: 1,
//     title: "YouTube Clone",
//     type: "Full Stack",
//     description: "A full-featured video streaming platform with secure authentication, video uploading capabilities, and real-time user interactions.",
//     image: "https://tse2.mm.bing.net/th/id/OIP._VhKBg1yKlM_DQ3EfIejQQHaIB?pid=Api&P=0&h=180", 
//     techStack: ["Next.js", "Node.js", "Express", "MongoDB"],
//     githubLink: "https://github.com/Sahil-Rathod-0306/Youtube-Clone.git",
//     featured: true,
//   },
//   {
//     id: 2,
//     title: "Aarogya App Backend",
//     type: "Backend",
//     description: "A robust healthcare backend system focused on secure patient data handling, RESTful API development, and a highly scalable architecture.",
//     highlight: "Security & API Design",
//     image: "https://tse3.mm.bing.net/th/id/OIP.l7isvsvHCJiVCJckLyt3vQHaHa?pid=Api&P=0&h=180",
//     techStack: ["Django", "Python", "PostgreSQL", "Docker"],
//     githubLink: "https://github.com/Sahil-Rathod-0306/Aarogya-App.git",
//     featured: false,
//   },
//   {
//     id: 3,
//     title: "Travel Planner",
//     type: "Full Stack",
//     description: "A smart itinerary management system where users can plan, organize, and manage complex travel schedules efficiently.",
//     image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000&auto=format&fit=crop",
//     techStack: ["Django", "React", "Tailwind CSS", "SQLite"],
//     githubLink: "https://github.com/Sahil-Rathod-0306/TravelItinerary.git",
//     featured: false,
//   },
//   {
//     id: 4,
//     title: "SheCurity App",
//     type: "Mobile Apps",
//     description: "A vital safety-focused mobile application featuring real-time location tracking, emergency SOS alerts, and trusted contact integration.",
//     highlight: "Real-world Impact & User Safety",
//     image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1000&auto=format&fit=crop",
//     techStack: ["React Native", "Firebase", "Google Maps API"],
//     githubLink: "https://github.com/Sahil-Rathod-0306/SheCurity_App.git",
//     featured: false,
//   }
// ];

// const CATEGORIES = ["All", "Full Stack", "Backend", "Mobile Apps"];

// export default function ProjectsPage() {
//   const [activeFilter, setActiveFilter] = useState("All");

//   // Filter logic
//   const filteredProjects = PROJECTS_DATA.filter(project => 
//     activeFilter === "All" || project.type === activeFilter
//   );

//   return (
//     <section className="relative min-h-screen overflow-hidden bg-[#071827] px-6 py-24 text-white md:px-12">
//       {/* Background ambient glow */}
//       <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         <Link
//           href="/"
//           className="shine-button mb-12 inline-flex items-center gap-2 rounded-md bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-950/35 transition hover:bg-sky-400"
//         >
//           <ArrowLeft className="h-4 w-4" />
//           Back
//         </Link>
        
//         {/* --- HEADER SECTION --- */}
//         <div className="text-center mb-16 animate-fade-in-up">
//           <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
//             My <span className="bg-gradient-to-r from-sky-300 to-sky-200 bg-clip-text text-transparent">Projects</span>
//           </h1>
//           <p className="mx-auto max-w-2xl text-lg font-light text-slate-400 md:text-xl">
//             A collection of real-world applications showcasing my full-stack development skills, problem-solving abilities, and passion for clean code.
//           </p>
//         </div>

//         {/* --- FILTER SECTION --- */}
//         <div className="flex flex-wrap justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
//           {CATEGORIES.map((category) => (
//             <button
//               key={category}
//               onClick={() => setActiveFilter(category)}
//               className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 backdrop-blur-md border ${
//                 activeFilter === category 
//                   ? "border-sky-400 bg-sky-500 text-white shadow-lg shadow-sky-950/35" 
//                   : "border-slate-700 bg-slate-900/60 text-slate-300 hover:border-slate-500 hover:bg-slate-800"
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {/* --- PROJECTS GRID --- */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredProjects.map((project, index) => (
//             <div 
//               key={project.id}
//               className={`professional-panel motion-lift group relative flex animate-rise-delay flex-col overflow-hidden rounded-lg hover:border-sky-400/40 ${
//                 project.featured ? "md:col-span-2 lg:col-span-2 md:flex-row" : ""
//               }`}
//               style={{ animationDelay: `${index * 100}ms` }}
//             >
//               {/* Optional: Glow effect behind the card on hover */}
//               <div className="absolute inset-0 z-0 bg-gradient-to-br from-sky-500/0 to-sky-500/0 transition-all duration-500 group-hover:from-sky-500/10 group-hover:to-sky-500/5"></div>

//               {/* Project Image */}
//               <div className={`relative overflow-hidden z-10 ${project.featured ? "md:w-1/2" : "w-full aspect-video"}`}>
//                 <Image 
//                   src={project.image} 
//                   alt={project.title}
//                   fill
//                   className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
//                 />
//                 <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-500"></div>
                
//                 {/* Featured Badge over Image */}
//                 {project.featured && (
//                   <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-md bg-sky-500/90 px-4 py-1.5 text-sm font-bold text-white shadow-lg backdrop-blur-md">
//                     <Star className="w-4 h-4 fill-white" /> Featured
//                   </div>
//                 )}
//               </div>

//               {/* Project Content */}
//               <div className={`p-8 flex flex-col flex-grow z-10 ${project.featured ? "md:w-1/2 justify-center" : ""}`}>
                
//                 <div className="flex justify-between items-start mb-4">
//                   <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-sky-200">
//                     {project.title}
//                   </h3>
//                   <span className="ml-3 whitespace-nowrap rounded-md border border-slate-700 bg-slate-950/50 px-3 py-1 text-xs font-semibold text-slate-300">
//                     {project.type}
//                   </span>
//                 </div>

//                 <p className="mb-6 flex-grow leading-relaxed text-slate-400">
//                   {project.description}
//                 </p>

//                 {/* Highlight text if exists */}
//                 {project.highlight && (
//                   <div className="mb-6 inline-block w-fit rounded-md border border-sky-800/50 bg-sky-950/40 px-3 py-1.5 text-sm font-medium text-sky-200">
//                     {project.highlight}
//                   </div>
//                 )}

//                 {/* Tech Stack */}
//                 <div className="flex flex-wrap gap-2 mb-8">
//                   {project.techStack.map((tech) => (
//                     <span 
//                       key={tech} 
//                       className="rounded-md border border-slate-700 bg-slate-950/50 px-3 py-1.5 text-xs font-semibold text-slate-300"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Links / Buttons */}
//                 <div className="flex gap-4 mt-auto">
                 
//                   <a 
//                     href={project.githubLink} 
//                     target="_blank" 
//                     rel="noopener noreferrer"
//                     className="motion-lift flex flex-1 items-center justify-center gap-2 rounded-md border border-slate-700 bg-slate-950/50 py-2.5 font-medium text-white hover:border-sky-400/50 hover:bg-slate-800"
//                   >
//                     <svg
//                       aria-hidden="true"
//                       className="w-4 h-4"
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M12 2C6.48 2 2 6.59 2 12.25c0 4.53 2.87 8.37 6.84 9.72.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.45-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 7.12c.85 0 1.71.12 2.5.36 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.94-2.33 4.8-4.56 5.06.36.32.67.95.67 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.25C22 6.59 17.52 2 12 2Z" />
//                     </svg>
//                     Source
//                   </a>
//                 </div>

//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Empty State (If a filter has no projects) */}
//         {filteredProjects.length === 0 && (
//           <div className="text-center py-20 animate-fade-in-up">
//             <p className="text-gray-400 text-xl">More projects coming soon in this category!</p>
//           </div>
//         )}

//       </div>
//     </section>
//   );
// }






"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Star, ExternalLink as Github } from "lucide-react";

// --- PROJECT DATA ---
const PROJECTS_DATA = [
  {
    id: 1,
    title: "YouTube Clone",
    type: "Full Stack",
    description: "A full-featured video streaming platform with secure authentication, video uploading capabilities, and real-time user interactions.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop", // Swapped to high-res Unsplash for premium look
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
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop",
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

  const filteredProjects = PROJECTS_DATA.filter(project => 
    activeFilter === "All" || project.type === activeFilter
  );

  return (
    <section className="relative min-h-screen bg-[#0a0a0a] px-4 py-24 sm:px-6 md:px-12 overflow-hidden selection:bg-blue-500/30">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Back Button */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="group mb-12 inline-flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-5 py-2.5 text-sm font-medium text-gray-300 transition-all hover:bg-white/10 hover:text-white hover:border-white/20"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </motion.div>
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
            My <span className="text-blue-500">Projects</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            A collection of real-world applications showcasing my full-stack development skills, problem-solving abilities, and passion for clean code.
          </p>
        </motion.div>

        {/* Filter Section (Premium Sliding Tab Animation) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-16 p-1.5 bg-white/[0.03] border border-white/10 rounded-2xl w-fit mx-auto backdrop-blur-md"
        >
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className="relative px-6 py-2.5 rounded-xl text-sm font-medium transition-colors"
            >
              {activeFilter === category && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-blue-600 rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
              <span className={`relative z-10 ${activeFilter === category ? "text-white" : "text-gray-400 hover:text-gray-200"}`}>
                {category}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className={`group relative flex flex-col bg-white/[0.02] backdrop-blur-xl border border-white/10 overflow-hidden rounded-3xl transition-all duration-500 hover:border-blue-500/50 hover:shadow-[0_8px_40px_rgba(59,130,246,0.15)] hover:-translate-y-1 ${
                  project.featured ? "md:col-span-2 lg:col-span-2 md:flex-row" : ""
                }`}
              >
                {/* Project Image */}
                <div className={`relative overflow-hidden ${project.featured ? "md:w-1/2 min-h-[300px]" : "w-full aspect-video"}`}>
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#0a0a0a]/80" />
                  
                  {project.featured && (
                    <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-blue-600/90 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white shadow-lg border border-white/10">
                      <Star className="w-3.5 h-3.5 fill-white" /> Featured
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className={`p-8 flex flex-col flex-grow relative z-10 ${project.featured ? "md:w-1/2 justify-center bg-gradient-to-l from-transparent to-[#0a0a0a]/80 md:bg-none" : ""}`}>
                  
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-blue-400">
                      {project.title}
                    </h3>
                    <span className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-300 backdrop-blur-md">
                      {project.type}
                    </span>
                  </div>

                  <p className="mb-6 flex-grow leading-relaxed text-gray-400 text-sm md:text-base">
                    {project.description}
                  </p>

                  {project.highlight && (
                    <div className="mb-6 inline-block w-fit rounded-lg border border-blue-500/30 bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-blue-300">
                      ✨ {project.highlight}
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.techStack.map((tech) => (
                      <span 
                        key={tech} 
                        className="rounded-md border border-white/5 bg-white/5 px-2.5 py-1 text-xs font-medium text-gray-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 mt-auto pt-4 border-t border-white/5">
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" /> Source Code
                    </a>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-500 text-lg">No projects found in this category yet.</p>
          </motion.div>
        )}

      </div>
    </section>
  );
}