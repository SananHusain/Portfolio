import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="w-full h-screen snap-center flex items-center justify-between px-6 md:px-24">
      <div className="flex flex-col justify-center max-w-2xl">
        <motion.h1 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-bold leading-tight"
        >
          Sanan Husain
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl text-gray-400 mt-4"
        >
          I am a <span className="text-[var(--color-neon)]">iOS Developer</span> building real products.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 flex gap-4"
        >
          <a href="#contact" className="px-8 py-4 bg-gradient-to-r from-[var(--color-neon)] to-[var(--color-neon-blue)] text-black font-semibold rounded-xl hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,255,204,0.3)]">
            Contact Me
          </a>
          <a href="#projects" className="px-8 py-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors backdrop-blur-md">
            View Work
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="hidden md:block relative w-[500px]"
      >
        {/* Placeholder for 3D elements or floating images */}
        <img src="/my-image.png" alt="Sanan Husain" className="w-full object-contain relative z-10 filter drop-shadow-2xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-[var(--color-neon)] to-[var(--color-neon-blue)] rounded-full blur-[120px] opacity-20 -z-10"></div>
      </motion.div>
    </section>
  )
}
