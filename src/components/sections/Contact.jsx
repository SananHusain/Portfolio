import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="w-full h-screen snap-center flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--color-neon)] rounded-full blur-[200px] opacity-10 pointer-events-none"></div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
        className="w-full max-w-2xl bg-white/5 border border-white/10 backdrop-blur-2xl p-10 md:p-16 rounded-[2rem] shadow-2xl flex flex-col items-center text-center relative z-10"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[var(--color-neon)] to-[var(--color-neon-blue)] text-transparent bg-clip-text">
          Let's Talk
        </h2>
        <p className="text-gray-300 text-lg mb-12 max-w-md">
          Interested in building something amazing together? My inbox is always open.
        </p>

        <div className="flex flex-col md:flex-row gap-6 w-full">
          <a 
            href="mailto:sananhusain.sh@gmail.com" 
            className="flex-1 flex items-center justify-center gap-3 py-5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-[var(--color-neon)] transition-all group"
          >
            <Mail className="text-[var(--color-neon)] group-hover:scale-110 transition-transform" />
            <span className="font-medium text-lg">Email Me</span>
          </a>
          <a 
            href="tel:+916307631789" 
            className="flex-1 flex items-center justify-center gap-3 py-5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-[var(--color-neon-blue)] transition-all group"
          >
            <Phone className="text-[var(--color-neon-blue)] group-hover:scale-110 transition-transform" />
            <span className="font-medium text-lg">Call Me</span>
          </a>
        </div>
      </motion.div>
    </section>
  )
}
