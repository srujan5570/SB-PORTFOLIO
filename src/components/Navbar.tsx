import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = navItems.map(item => item.href.slice(1))
      for (const id of sections.reverse()) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = () => {
    setMobileOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? '0.8rem 5%' : '1.2rem 5%',
        background: scrolled ? 'rgba(10, 10, 31, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0, 212, 255, 0.1)' : '1px solid transparent',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: 'all 0.3s ease',
      }}
    >
      <motion.a
        href="#hero"
        onClick={handleNavClick}
        whileHover={{ scale: 1.05 }}
        style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          background: 'var(--gradient-text)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {'<SB />'}
      </motion.a>

      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
        <div className="nav-links" style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {navItems.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              onClick={handleNavClick}
              whileHover={{ y: -2 }}
              style={{
                color: activeSection === item.href.slice(1) ? 'var(--cyan)' : 'var(--text-secondary)',
                fontSize: '0.9rem',
                fontWeight: 500,
                position: 'relative',
                transition: 'color 0.3s ease',
              }}
            >
              {item.label}
              {activeSection === item.href.slice(1) && (
                <motion.div
                  layoutId="nav-indicator"
                  style={{
                    position: 'absolute',
                    bottom: -4,
                    left: 0,
                    right: 0,
                    height: 2,
                    background: 'var(--gradient-1)',
                    borderRadius: 1,
                  }}
                />
              )}
            </motion.a>
          ))}
        </div>

        <div className="mobile-menu-btn" style={{ display: 'none' }}>
          <motion.button
            onClick={() => setMobileOpen(!mobileOpen)}
            whileTap={{ scale: 0.9 }}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-primary)',
              fontSize: '1.5rem',
              cursor: 'pointer',
              padding: '0.3rem',
              display: 'flex',
            }}
          >
            {mobileOpen ? <HiX /> : <HiMenu />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: '100%',
              left: 0,
              right: 0,
              background: 'rgba(10, 10, 31, 0.95)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(0, 212, 255, 0.1)',
              padding: '1rem 5%',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}
          >
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                whileTap={{ scale: 0.98 }}
                style={{
                  color: activeSection === item.href.slice(1) ? 'var(--cyan)' : 'var(--text-secondary)',
                  fontSize: '1.1rem',
                  fontWeight: 500,
                  padding: '0.6rem 0',
                  borderBottom: '1px solid rgba(255,255,255,0.03)',
                }}
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </motion.nav>
  )
}
