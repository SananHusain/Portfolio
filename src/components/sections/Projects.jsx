import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useState } from 'react'

const projects = [
  {
    title: "Speaker Presentation Timer",
    desc: "Manage your presentation time flawlessly with precise tracking.",
    img: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/0f/f6/ef/0ff6efb9-12d8-9330-e2f1-1ed4d6a9c610/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/1200x630wa.jpg",
    link: "https://apps.apple.com/us/app/speaker-presentation-timer/id1496053701"
  },
  {
    title: "Attenddee",
    desc: "Streamline event attendance and management on the go.",
    img: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/63/c3/46/63c34619-114f-a81b-0401-76c6f9ea4fb1/Placeholder.mill/1200x630wa.jpg",
    link: "https://apps.apple.com/us/app/attenddee/id6738990068"
  },
  {
    title: "Crop Dx",
    desc: "AI-powered crop disease detection and agricultural diagnostics.",
    img: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/99/b5/b3/99b5b369-4677-4d3f-15c9-a581e7012d62/Placeholder.mill/1200x630wa.jpg",
    link: "https://apps.apple.com/us/app/crop-dx/id6746733530"
  },
  {
    title: "Whirlwind: Mystery Stories",
    desc: "Immersive, interactive mystery stories where your choices matter.",
    img: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/13/24/5e/13245e1e-ea44-9213-c8a3-784bd1eefbe6/Placeholder.mill/1200x630wa.jpg",
    link: "https://apps.apple.com/us/app/whirlwind-mystery-stories/id6746146476"
  },
  {
    title: "The SHOW App",
    desc: "The premier platform for showcase events and talent discovery.",
    img: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/75/83/a3/7583a39a-40c3-0b11-4dc1-f40998c42a63/Placeholder.mill/1200x630wa.jpg",
    link: "https://apps.apple.com/us/app/the-show-app/id6749635073"
  }
]

function ProjectCard({ project }) {
  const x = useMotionValue(200)
  const y = useMotionValue(200)

  const rotateX = useTransform(y, [0, 400], [10, -10])
  const rotateY = useTransform(x, [0, 400], [-10, 10])

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouse}
      onMouseLeave={() => { x.set(200); y.set(200); }}
      onClick={() => window.open(project.link, '_blank')}
      className="relative w-full max-w-[320px] h-[500px] rounded-3xl bg-white/5 border border-white/10 overflow-hidden cursor-pointer backdrop-blur-md"
    >
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="absolute inset-4 rounded-2xl overflow-hidden pointer-events-none"
      >
        <img src={project.img} alt={project.title} className="w-full h-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-6">
          <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-gray-300 text-sm leading-relaxed">{project.desc}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="w-full min-h-screen snap-center flex flex-col items-center justify-center py-20 px-6">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        className="text-4xl md:text-5xl font-bold mb-16"
      >
        Featured Projects
      </motion.h2>
      
      <div className="flex flex-wrap justify-center gap-12 w-full max-w-6xl perspective-[1000px]">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: false, margin: "-10%" }}
          >
            <ProjectCard project={p} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
