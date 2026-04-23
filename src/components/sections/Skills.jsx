import { motion } from 'framer-motion'

const skills = [
  "Swift", "SwiftUI", "UIKit", "Firebase", 
  "Core Data", "REST APIs", "MVVM", "Git"
]

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <section className="w-full h-screen snap-center flex flex-col items-center justify-center px-6 md:px-24">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-20%" }}
        className="text-4xl md:text-5xl font-bold mb-12"
      >
        Core Skills
      </motion.h2>
      
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, margin: "-20%" }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl"
      >
        {skills.map((skill) => (
          <motion.div 
            key={skill}
            variants={item}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white/5 border border-white/10 backdrop-blur-md py-6 px-4 rounded-2xl flex items-center justify-center text-xl font-medium shadow-lg hover:border-[var(--color-neon)] hover:shadow-[0_0_15px_rgba(0,255,204,0.2)] transition-all"
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
