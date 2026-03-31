
// import Image from "next/image";
// import { Mail, Download, ArrowRight } from "lucide-react";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-slate-950 bg-[url('/space-bg.jpg')] bg-cover bg-center text-white flex items-center justify-center overflow-hidden relative px-6 md:px-12 py-20">
//       {/* Added a subtle dark gradient overlay to ensure text remains readable over the space background */}
//       <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/80 z-0"></div>

//       {/* Container */}
//       <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">

//         {/* Left Column: Text Content */}
//         <div className="flex flex-col space-y-6 animate-fade-in-up">
//           <p className="text-xl text-blue-400 font-semibold tracking-wide uppercase tracking-[0.2em]">
//             Hello, I&apos;m
//           </p>

//           <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight drop-shadow-lg">
//             Sahil <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Rathod</span>
//           </h1>

//           <h2 className="text-2xl md:text-3xl text-gray-200 font-medium pb-2">
//             Full Stack Developer
//             <span className="block text-lg text-gray-400 mt-2 font-light">Next.js | Node.js | React</span>
//           </h2>

//           <p className="text-gray-300 max-w-md text-lg leading-relaxed border-l-2 border-blue-500 pl-4">
//             I build scalable web & mobile applications with clean, intuitive UIs and highly efficient backend architectures.
//           </p>

//           {/* Buttons */}
//           <div className="flex flex-wrap gap-4 pt-6">
//             <Link href="/components/projects">
//               <button className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)]">
//                 View My Projects
//                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </button>
//             </Link>
//             <a
//               href="/SAHIL-RATHOD-Resume.pdf"
//               download
//               className="group flex items-center gap-2 bg-transparent border border-gray-500 hover:border-blue-500 text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1"
//             >
//               Download Resume
//               <svg
//                 className="w-5 h-5 group-hover:translate-y-1 transition-transform"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M12 5v14m0 0l-6-6m6 6l6-6" />
//               </svg>
//             </a>
//           </div>

//           {/* Social Links */}
//           <div className="flex gap-5 pt-8">
//             <a href="https://www.linkedin.com/in/sahil-rathod-073b92354" className="bg-white/5 backdrop-blur-sm border border-white/10 p-3.5 rounded-full hover:bg-blue-600 hover:border-blue-500 hover:scale-110 transition-all duration-300 shadow-lg">
//               <svg
//                 aria-hidden="true"
//                 className="w-6 h-6 text-gray-200"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M4.98 3.5a2.49 2.49 0 1 0 0 4.98 2.49 2.49 0 0 0 0-4.98ZM3 8.98h3.96V21H3zM10.14 8.98H14v1.64h.06c.54-1.02 1.86-2.1 3.82-2.1 4.08 0 4.83 2.69 4.83 6.18V21h-3.96v-5.58c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95V21h-3.96z" />
//               </svg>
//             </a>
//             <a href="https://github.com/Sahil-Rathod-0306" className="bg-white/5 backdrop-blur-sm border border-white/10 p-3.5 rounded-full hover:bg-blue-600 hover:border-blue-500 hover:scale-110 transition-all duration-300 shadow-lg">
//               <svg
//                 aria-hidden="true"
//                 className="w-6 h-6 text-gray-200"
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M12 2C6.48 2 2 6.59 2 12.25c0 4.53 2.87 8.37 6.84 9.72.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.45-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 7.12c.85 0 1.71.12 2.5.36 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.94-2.33 4.8-4.56 5.06.36.32.67.95.67 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.25C22 6.59 17.52 2 12 2Z" />
//               </svg>
//             </a>
//             <a href="sahilrathod0306@gmail.com" className="bg-white/5 backdrop-blur-sm border border-white/10 p-3.5 rounded-full hover:bg-blue-600 hover:border-blue-500 hover:scale-110 transition-all duration-300 shadow-lg">
//               <Mail className="w-6 h-6 text-gray-200" />
//             </a>
//           </div>
//         </div>

//         {/* Right Column: Images & Floating Icons */}
//         <div className="relative h-[600px] w-full hidden lg:flex items-center justify-center">

//           {/* Main Profile Image */}
//           <div className="relative z-20 h-full flex items-end justify-center w-full">
//             <Image
//               src="/sahil_photo.png"
//               alt="Sahil Rathod"
//               width={500}
//               height={900}
//               className="w-[900px] object-contain drop-shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:drop-shadow-[0_0_60px_rgba(59,130,246,0.5)] transition-all duration-500"
//               priority
//             />
//           </div>

//           {/* Floating Tech Icons - Corrected URLs and added custom animation classes */}

//           {/* React Logo */}
//           <div className="absolute top-20 left-4 z-30 animate-float-slow">
//             <Image src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" width={60} height={60} className="object-contain drop-shadow-[0_0_20px_rgba(97,218,251,0.6)]" />
//           </div>

//           {/* Next.js Logo */}
//           <div className="absolute top-32 right-12 z-30 animate-float-medium">
//             <Image src="https://assets.vercel.com/image/upload/front/assets/design/nextjs-white-logo.svg" alt="Next.js" width={110} height={45} className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
//           </div>

//           {/* JavaScript Logo */}
//           <div className="absolute bottom-40 left-10 z-30 animate-float-fast">
//             <Image src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="JavaScript" width={55} height={55} className="object-contain rounded-lg drop-shadow-[0_0_20px_rgba(247,223,30,0.5)]" />
//           </div>

//           {/* Django Logo (Upgraded to a premium glassmorphism badge) */}
//           <div className="absolute bottom-80 -right- z-20 animate-float-slow">
//             <div className="bg-green-950/60 backdrop-blur-md text-green-400 px-6 py-3 rounded-2xl font-bold text-xl tracking-widest shadow-[0_0_25px_rgba(21,128,61,0.4)] flex items-center border border-green-500/30">
//               Node.js
//             </div>
//           </div>

//         </div>
//       </div>
//     </main>
//   );
// }


import Image from "next/image";
import { Mail, ArrowRight } from "lucide-react";
import Link from "next/link";
import Skills from "./components/Skills/page"; // Make sure the path matches where you saved it!

// 1. Importing based exactly on YOUR folder structure from the screenshot
import About from "./components/About/page";
import FloatingSkillButton from "./components/FloatingNav/page"; // Assuming you put the skill button code here
import ProjectsPage from "./components/projects/page";

export default function Home() {
  return (
    <main className="bg-slate-950 relative scroll-smooth">
      
      {/* Floating dot to jump to skills */}
      <FloatingSkillButton />

      {/* --- HERO SECTION --- */}
      <section className="min-h-screen bg-[url('/space-bg.jpg')] bg-cover bg-center text-white flex items-center justify-center overflow-hidden relative px-6 md:px-12 py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/80 z-0"></div>

        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
          <div className="flex flex-col space-y-6 animate-fade-in-up">
            <p className="text-xl text-blue-400 font-semibold tracking-wide uppercase tracking-[0.2em]">
              Hello, I&apos;m
            </p>

            <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight drop-shadow-lg">
              Sahil <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Rathod</span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-gray-200 font-medium pb-2">
              Full Stack Developer
              <span className="block text-lg text-gray-400 mt-2 font-light">Next.js | Node.js | React</span>
            </h2>

            <p className="text-gray-300 max-w-md text-lg leading-relaxed border-l-2 border-blue-500 pl-4">
              I build scalable web & mobile applications with clean, intuitive UIs and highly efficient backend architectures.
            </p>

            <div className="flex flex-wrap gap-4 pt-6">
              <Link href="/components/projects">
                <button className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)]">
                  View My Projects
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <a
                href="/SAHIL-RATHOD-Resume.pdf"
                download
                className="group flex items-center gap-2 bg-transparent border border-gray-500 hover:border-blue-500 text-white px-8 py-3.5 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-1"
              >
                <svg className="w-5 h-5 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M12 5v14m0 0l-6-6m6 6l6-6" />
                </svg>
                Download Resume
              </a>
            </div>

            <div className="flex gap-5 pt-8">
              <a href="https://www.linkedin.com/in/sahil-rathod-073b92354" target="_blank" rel="noopener noreferrer" className="bg-white/5 backdrop-blur-sm border border-white/10 p-3.5 rounded-full hover:bg-blue-600 hover:border-blue-500 hover:scale-110 transition-all duration-300 shadow-lg">
                <svg aria-hidden="true" className="w-6 h-6 text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5a2.49 2.49 0 1 0 0 4.98 2.49 2.49 0 0 0 0-4.98ZM3 8.98h3.96V21H3zM10.14 8.98H14v1.64h.06c.54-1.02 1.86-2.1 3.82-2.1 4.08 0 4.83 2.69 4.83 6.18V21h-3.96v-5.58c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95V21h-3.96z" />
                </svg>
              </a>
              <a href="https://github.com/Sahil-Rathod-0306" target="_blank" rel="noopener noreferrer" className="bg-white/5 backdrop-blur-sm border border-white/10 p-3.5 rounded-full hover:bg-blue-600 hover:border-blue-500 hover:scale-110 transition-all duration-300 shadow-lg">
                <svg aria-hidden="true" className="w-6 h-6 text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.59 2 12.25c0 4.53 2.87 8.37 6.84 9.72.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.45-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 7.12c.85 0 1.71.12 2.5.36 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.94-2.33 4.8-4.56 5.06.36.32.67.95.67 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.25C22 6.59 17.52 2 12 2Z" />
                </svg>
              </a>
              <a href="mailto:sahilrathod0306@gmail.com" className="bg-white/5 backdrop-blur-sm border border-white/10 p-3.5 rounded-full hover:bg-blue-600 hover:border-blue-500 hover:scale-110 transition-all duration-300 shadow-lg">
                <Mail className="w-6 h-6 text-gray-200" />
              </a>
            </div>
          </div>

          <div className="relative h-[600px] w-full hidden lg:flex items-center justify-center">
            <div className="relative z-20 h-full flex items-end justify-center w-full">
              <Image src="/sahil_photo.png" alt="Sahil Rathod" width={500} height={900} className="w-[500px] object-contain drop-shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:drop-shadow-[0_0_60px_rgba(59,130,246,0.5)] transition-all duration-500" priority />
            </div>

            <div className="absolute top-20 left-4 z-30 animate-float-slow">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" width={60} height={60} className="object-contain drop-shadow-[0_0_20px_rgba(97,218,251,0.6)]" />
            </div>

            <div className="absolute top-32 right-12 z-30 animate-float-medium">
              <Image src="https://assets.vercel.com/image/upload/front/assets/design/nextjs-white-logo.svg" alt="Next.js" width={110} height={45} className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" />
            </div>

            <div className="absolute bottom-40 left-10 z-30 animate-float-fast">
              <Image src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="JavaScript" width={55} height={55} className="object-contain rounded-lg drop-shadow-[0_0_20px_rgba(247,223,30,0.5)]" />
            </div>

            <div className="absolute bottom-80 -right-4 z-20 animate-float-slow">
              <div className="bg-green-950/60 backdrop-blur-md text-green-400 px-6 py-3 rounded-2xl font-bold text-xl tracking-widest shadow-[0_0_25px_rgba(21,128,61,0.4)] flex items-center border border-green-500/30">
                Node.js
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* --- ABOUT SECTION --- */}
      <About />

     
      {/* --- SKILLS SECTION --- */}
      {/* --- SKILLS SECTION --- */}
      <Skills />

      --- PROJECTS SECTION ---
      {/* <div id="projects">
        <ProjectsPage />
      </div> */}

    </main>
  );
}