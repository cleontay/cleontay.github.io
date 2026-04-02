// High-performance Bento Portfolio (Vite + React)
// Deployable to GitHub Pages
// Instructions:
// 1. npm create vite@latest my-portfolio -- --template react
// 2. Replace src/App.jsx with this file
// 3. Install: npm i framer-motion
// 4. Add base in vite.config.js: base: '/<repo-name>/'
// 5. npm run build && deploy to gh-pages

import { motion } from "framer-motion";

const projects = [
  {
    title: "MySQL App Backend",
    desc: "Scalable Node.js API with Sequelize",
    link: "https://github.com/yourusername/project1",
  },
  {
    title: "n8n Automation",
    desc: "Workflow automation pipelines",
    link: "https://github.com/yourusername/project2",
  },
  {
    title: "Flutter Map App",
    desc: "Navigation + open map integration",
    link: "https://github.com/yourusername/project3",
  },
];

const tech = ["Node.js", "Docker", "n8n", "Linux", "React", "Next.js", "Flutter"];

export default function App() {
  return (
    <div className="bg-[#020617] text-white min-h-screen font-sans p-6">
      <div className="max-w-6xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-3 auto-rows-[150px]">

        {/* Hero */}
        <Card className="md:col-span-2 row-span-2">
          <h1 className="text-3xl font-bold">Tay Cleon</h1>
          <p className="text-cyan-400">Full-Stack Software Engineer</p>
          <span className="mt-2 inline-block px-3 py-1 text-xs bg-cyan-500/20 border border-cyan-400 rounded-full">
            Open to Collabs
          </span>
        </Card>

        {/* About */}
        <Card>
          <h2 className="font-semibold mb-2">About</h2>
          <p className="text-sm text-gray-300">
            Building scalable apps using React, Next.js, and Flutter. Focused on performance,
            automation, and clean architecture.
          </p>
        </Card>

        {/* Tech */}
        <Card className="md:col-span-2">
          <h2 className="font-semibold mb-2">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {tech.map((t) => (
              <span key={t} className="px-2 py-1 text-xs border border-violet-400 rounded-full">
                {t}
              </span>
            ))}
          </div>
        </Card>

        {/* Projects */}
        {projects.map((p, i) => (
          <Card key={i}>
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-sm text-gray-400">{p.desc}</p>
            <a href={p.link} target="_blank" className="text-cyan-400 text-sm mt-2 inline-block">
              View Project →
            </a>
          </Card>
        ))}
      </div>
    </div>
  );
}

function Card({ children, className = "" }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className={`relative rounded-2xl p-4 backdrop-blur-lg bg-white/5 border border-white/10 hover:border-cyan-400 transition-all shadow-lg ${className}`}
    >
      <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 bg-gradient-to-r from-cyan-500/10 to-violet-500/10 transition"></div>
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
