import { motion } from 'framer-motion'
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

function ExpandingGallery() {
  const [active, setActive] = useState(0)

  return (
    <div className="flex flex-col md:flex-row w-full max-w-7xl h-[70vh] gap-4 px-6 md:px-12">
      {projects.map((project, index) => {
        const isActive = active === index;
        return (
          <motion.div
            key={index}
            layout
            onHoverStart={() => setActive(index)}
            onClick={() => {
              if (isActive) {
                window.open(project.link, '_blank')
              } else {
                setActive(index)
              }
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={`relative rounded-[2rem] overflow-hidden cursor-pointer flex items-end ${isActive ? 'flex-[4] md:flex-[5]' : 'flex-[1]'}`}
            style={{ 
              backgroundImage: `url(${project.img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Dynamic Overlay */}
            <div className={`absolute inset-0 transition-colors duration-500 ${isActive ? 'bg-gradient-to-t from-black via-black/40 to-transparent' : 'bg-black/60 hover:bg-black/40'}`}></div>
            
            {/* Content Area */}
            <motion.div 
              layout
              className="relative p-6 md:p-8 w-full h-full flex items-end"
            >
              {isActive ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="w-full"
                >
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 drop-shadow-lg">{project.title}</h3>
                  <p className="text-gray-200 text-base md:text-lg leading-relaxed drop-shadow-md max-w-xl mb-6 hidden md:block">{project.desc}</p>
                  <button 
                    onClick={(e) => { e.stopPropagation(); window.open(project.link, '_blank'); }}
                    className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-full hover:bg-[var(--color-neon)] hover:text-black hover:border-[var(--color-neon)] transition-all shadow-lg"
                  >
                    View on App Store
                  </button>
                </motion.div>
              ) : (
                <div className="hidden md:flex items-center justify-center w-full h-full absolute inset-0">
                  <h3 className="text-white/80 font-bold text-2xl whitespace-nowrap -rotate-90 origin-center drop-shadow-lg tracking-widest uppercase">
                    {project.title}
                  </h3>
                </div>
              )}
            </motion.div>
          </motion.div>
        )
      })}
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="w-full h-screen snap-center flex flex-col items-center justify-center py-10">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        className="text-4xl md:text-6xl font-bold mb-10 bg-gradient-to-r from-white to-gray-500 text-transparent bg-clip-text"
      >
        Featured Projects
      </motion.h2>
      
      <ExpandingGallery />
    </section>
  )
}
