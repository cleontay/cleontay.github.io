import { motion } from "framer-motion";

const projects = [
  {
    title: "Telegram Media Bot",
    desc: "A powerful Telegram bot built with Python that leverages yt-dlp to download and process videos or audio from YouTube and other platforms directly into your chat.",
    link: "https://github.com/cleontay/Telegram-Media-Downloader-Bot",
    tags: ["Python", "Telegram API", "YTDLP"]
  },
  {
    title: "Personal Accountant",
    desc: "A lightweight, personal expense tracker that syncs with Supabase. Monitor monthly spending, visualize categories with pie charts, and manage transactions from anywhere.",
    link: "https://github.com/cleontay/P-Accountant",
    tags: ["HTML", "Supabase", "Google Script", "JS"],
    demoLink: "https://cleontay.github.io/P-Accountant/", // optional
  },
  {
    title: "ChronoLuna",
    desc: "A personal mobile Event Countdown (ChronoLuna) that syncs to a Supabase database.",
    link: "https://github.com/cleontay/ChronoLuna/tree/main",
    tags: ["HTML", "Supabase", "JS"],
    demoLink: "https://cleontay.github.io/ChronoLuna/", // optional
  }
];

const tech = ["React", "Next.js", "Flutter", "Node.js", "Docker", "n8n", "Linux", "MongoDB", "Express.js", "LLM", "VLLM", "Prompt Engineer", "Scripting"];

export default function Portfolio() {
  return (
    <div className="bg-[#020617] text-white min-h-screen w-full font-sans p-4 md:p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        <div className="lg:col-span-8">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="w-8 h-[2px] bg-cyan-400"></span>
              Featured Projects
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <Card 
                key={i} 
                className="min-h-[320px] flex flex-col justify-between group hover:border-cyan-400/30 transition-all duration-300"
              >
                <div>
                  <h3 className="font-bold text-xl text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {p.tags?.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-wider text-cyan-400/80 font-mono bg-cyan-400/5 px-2 py-0.5 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  {/* Demo Button */}
                  <a 
                    href={p.demoLink} 
                    target="_blank" 
                    rel="noreferrer"
                    className={`
                      flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200
                      ${p.demoLink 
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105' 
                        : 'bg-gray-700/50 text-gray-500 cursor-not-allowed opacity-50 pointer-events-none'
                      }
                    `}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                  
                  {/* Source Button */}
                  <a 
                    href={p.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className={`
                      flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 border
                      ${p.link 
                        ? 'border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 hover:scale-105' 
                        : 'border-gray-700 text-gray-600 cursor-not-allowed opacity-50 pointer-events-none'
                      }
                    `}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    Source Code
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <a href="https://github.com/cleontay" className="lg:col-span-4 space-y-6">
          <Card className="flex flex-col items-center justify-center text-center py-8">
            <div className="relative mb-4 flex justify-center">
               <div className="w-40 h-40 rounded-full border-2 border-cyan-400 p-1">
                  <img 
                    src="/hero_profile.png" 
                    alt="Profile" 
                    className="w-full h-full rounded-full object-cover bg-gray-800"
                  />
               </div>
            </div>
            <h1 className="text-2xl font-bold text-white">Cleon Tay</h1>
            <p className="text-cyan-400 text-sm">AI Automation & Systems Architect</p>
            <div className="mt-4 flex gap-3 justify-evenly">
               <span className="px-3 py-1 text-[10px] bg-cyan-500/10 border border-cyan-400/30 rounded-full text-cyan-300">
                Remote
               </span>
               <span className="px-3 py-1 text-[10px] bg-violet-500/10 border border-violet-400/30 rounded-full text-violet-300">
                Available
               </span>
            </div>
          </Card>

          <Card>
            <h2 className="font-semibold mb-3 text-white border-b border-white/10 pb-2">About Me</h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              I am a Systems Architect & Full-Stack Developer bridging clean code and robust infrastructure.
            </p>
          </Card>

          <Card>
            <h2 className="font-semibold mb-4 text-white border-b border-white/10 pb-2">Capabilities</h2>
            <div className="flex flex-wrap gap-2">
              {tech.map((t) => (
                <span key={t} className="px-2 py-1 text-[11px] bg-white/5 border border-white/10 rounded hover:border-violet-400 transition-colors cursor-default">
                  {t}
                </span>
              ))}
            </div>
          </Card>
        </a>

      </div>
    </div>
  );
}

function Card({ children, className = "" }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`relative rounded-2xl p-5 backdrop-blur-xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/50 transition-all shadow-2xl overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 bg-gradient-to-br from-cyan-500/5 to-violet-500/5 transition duration-500"></div>
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}