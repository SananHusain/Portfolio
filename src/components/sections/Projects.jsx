import { motion, useMotionValue, useTransform } from 'framer-motion'
import { useState } from 'react'

const projects = [
  {
    title: "Speech Timer",
    desc: "Practice speeches with real-time tracking and feedback.",
    img: "/projects/speechtimer/speech1.webp"
  },
  {
    title: "Crop Diagnostix",
    desc: "AI-powered crop disease detection utilizing advanced machine learning models.",
    img: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=800&auto=format&fit=crop&q=60" // Placeholder
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
