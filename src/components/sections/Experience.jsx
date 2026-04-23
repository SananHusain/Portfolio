import { motion } from 'framer-motion'

const experiences = [
  {
    company: "Oodles Technologies",
    role: "Associate Consultant iOS Developer",
    period: "2024 – 2026",
    details: [
      "Built native iOS applications using Swift, SwiftUI & MVVM architecture.",
      "Integrated Firebase services including Crashlytics and Analytics.",
      "Optimized application performance and memory management."
    ]
  },
  {
    company: "Mobiloitte Technologies",
    role: "iOS Developer",
    period: "2023 – 2024",
    details: [
      "Developed interactive and user-friendly mobile interfaces.",
      "Collaborated closely with cross-functional agile teams."
    ]
  }
]

export default function Experience() {
  return (
    <section className="w-full min-h-screen snap-center flex flex-col items-center justify-center py-20 px-6">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        className="text-4xl md:text-5xl font-bold mb-16"
      >
        Experience
      </motion.h2>
      
      <div className="flex flex-col gap-8 w-full max-w-3xl relative">
        {/* Timeline Line */}
        <div className="absolute left-[20px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[var(--color-neon)] to-transparent opacity-30"></div>
        
        {experiences.map((exp, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: false, margin: "-10%" }}
            className="relative pl-12"
          >
            {/* Timeline Dot */}
            <div className="absolute left-[13px] top-6 w-4 h-4 rounded-full bg-[var(--color-neon)] shadow-[0_0_10px_rgba(0,255,204,0.8)]"></div>
            
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-2xl hover:bg-white/10 transition-colors">
              <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
              <p className="text-[var(--color-neon-blue)] font-medium text-lg mt-1">{exp.role}</p>
              <p className="text-gray-400 text-sm mb-4">{exp.period}</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {exp.details.map((desc, idx) => (
                  <li key={idx} className="leading-relaxed">{desc}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
