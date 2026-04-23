import Background3D from './components/Background3D'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <div className="relative w-full h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth text-white">
      <Background3D />
      
      <div className="relative z-10 w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </div>
  )
}
