import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="w-full h-screen snap-center flex items-center justify-center px-6 md:px-24">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, margin: "-20%" }}
        className="max-w-4xl w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-neon-blue)] rounded-full blur-[100px] opacity-20 -z-10"></div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          I am an iOS developer specializing in UI design and MVVM architecture. 
          Experienced in Swift, SwiftUI, UIKit, and Firebase. I am deeply passionate 
          about building scalable, immersive, and user-friendly mobile applications 
          that provide genuine value.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-6">
          <div>
            <h4 className="text-[var(--color-neon)] font-bold text-xl">2+ Years</h4>
            <p className="text-gray-400">Professional Experience</p>
          </div>
          <div>
            <h4 className="text-[var(--color-neon)] font-bold text-xl">10+ Apps</h4>
            <p className="text-gray-400">Developed & Published</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
