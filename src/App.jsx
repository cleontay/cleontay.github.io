import { motion } from "framer-motion";

const projects = [
  {
    title: "MySQL App Backend",
    desc: "Scalable Node.js API with Sequelize",
    link: "https://github.com/yourusername/project1",
    tags: ["Node.js", "Sequelize", "MySQL"]
  },
  {
    title: "n8n Automation",
    desc: "Workflow automation pipelines with Docker",
    link: "https://github.com/yourusername/project2",
    tags: ["n8n", "Docker", "Automation"]
  },
  {
    title: "Flutter Map App",
    desc: "Navigation + open map integration",
    link: "https://github.com/yourusername/project3",
    tags: ["Flutter", "Dart", "Maps API"]
  },
  {
    title: "Telegram Media Bot",
    desc: "YT-DLP and FFmpeg media processor",
    link: "https://github.com/yourusername/project4",
    tags: ["Python", "FFmpeg", "Telegram API"]
  },
];

const tech = ["React", "Next.js", "Flutter", "Node.js", "Docker", "n8n", "Linux", "MongoDB"];

export default function Portfolio() {
  return (
    <div className="bg-[#020617] text-white min-h-screen w-full font-sans p-4 md:p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* LEFT COLUMN: PROJECTS FOCUS (8 Units) */}
        <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="col-span-full mb-2">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <span className="w-8 h-[2px] bg-cyan-400"></span>
              Featured Projects
            </h2>
          </div>
          
          {projects.map((p, i) => (
            <Card key={i} className="h-[220px] flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-lg text-white mb-2">{p.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mt-3">
                    {p.tags?.map(tag => (
                        <span key={tag} className="text-[10px] uppercase tracking-wider text-cyan-400/80 font-mono">
                            #{tag}
                        </span>
                    ))}
                </div>
              </div>
              <a href={p.link} target="_blank" className="text-cyan-400 text-sm font-medium hover:underline inline-block">
                Source Code →
              </a>
            </Card>
          ))}
        </div>

        {/* RIGHT COLUMN: PERSONAL INFO & PROFILE (4 Units) */}
        <div className="md:col-span-4 space-y-6">
          
          {/* Profile Section */}
          <Card className="flex flex-col items-center text-center py-8">
            <div className="relative mb-4">
               {/* Replace with your actual image path */}
               <div className="w-48 h-48 rounded-full border-2 border-cyan-400 p-1">
                  <img 
                    src="/hero_profile.png" 
                    alt="Profile" 
                    className="w-full h-full rounded-full object-cover bg-gray-800"
                  />
               </div>
            </div>
            <h1 className="text-2xl font-bold text-white">Tay Cleon</h1>
            <p className="text-cyan-400 text-sm">Full-Stack Software Engineer</p>
            <div className="mt-4 flex gap-3">
               <span className="px-3 py-1 text-[10px] bg-cyan-500/10 border border-cyan-400/30 rounded-full text-cyan-300">
                Remote
               </span>
               <span className="px-3 py-1 text-[10px] bg-violet-500/10 border border-violet-400/30 rounded-full text-violet-300">
                Available
               </span>
            </div>
          </Card>

          {/* About Section */}
          <Card>
            <h2 className="font-semibold mb-3 text-white border-b border-white/10 pb-2">About Me</h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Specializing in scalable web and mobile solutions. I bridge the gap between 
              complex backends and fluid, interactive user interfaces.
            </p>
          </Card>

          {/* Tech Stack Section */}
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

        </div>
      </div>
    </div>
  );
}

function Card({ children, className = "" }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`relative rounded-2xl p-5 backdrop-blur-xl bg-white/[0.03] border border-white/10 hover:border-cyan-400/50 transition-all shadow-2xl ${className}`}
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 bg-gradient-to-br from-cyan-500/5 to-violet-500/5 transition duration-500"></div>
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}