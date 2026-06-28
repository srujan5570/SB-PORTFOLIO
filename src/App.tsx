import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const ParticleBackground = lazy(() => import('./components/ParticleBackground'))

export default function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <Suspense fallback={null}>
        <ParticleBackground />
      </Suspense>
      <div style={{
        position: 'relative',
        zIndex: 2,
        minHeight: '100vh',
        background: 'linear-gradient(180deg, rgba(10,10,31,0.3) 0%, rgba(10,10,31,0.5) 50%, rgba(10,10,31,0.3) 100%)',
      }}>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
