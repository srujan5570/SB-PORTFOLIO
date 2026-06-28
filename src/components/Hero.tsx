import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiArrowDown, HiMail, HiDownload } from 'react-icons/hi'
import { FiGithub, FiLinkedin, FiExternalLink } from 'react-icons/fi'

const roles = ['Fullstack Developer', 'App Developer', 'Data Enthusiast', 'Problem Solver']

const glitchKeyframes = {
  glitch1: { '0%': { clipPath: 'inset(0 0 80% 0)' }, '20%': { clipPath: 'inset(20% 0 60% 0)' }, '40%': { clipPath: 'inset(40% 0 40% 0)' }, '60%': { clipPath: 'inset(60% 0 20% 0)' }, '80%': { clipPath: 'inset(80% 0 0 0)' }, '100%': { clipPath: 'inset(0 0 80% 0)' } },
  glitch2: { '0%': { clipPath: 'inset(80% 0 0 0)' }, '20%': { clipPath: 'inset(60% 0 20% 0)' }, '40%': { clipPath: 'inset(40% 0 40% 0)' }, '60%': { clipPath: 'inset(20% 0 60% 0)' }, '80%': { clipPath: 'inset(0 0 80% 0)' }, '100%': { clipPath: 'inset(80% 0 0 0)' } },
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % roles.length)
    } else {
      timeout = setTimeout(() => {
        setDisplayText(isDeleting
          ? currentRole.substring(0, displayText.length - 1)
          : currentRole.substring(0, displayText.length + 1)
        )
      }, isDeleting ? 50 : 80)
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      padding: '100px 5%',
    }}>
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 900, width: '100%' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <span style={{
              display: 'inline-block',
              padding: '0.4rem 1.2rem',
              borderRadius: 50,
              fontSize: '0.75rem',
              fontFamily: 'var(--font-mono)',
              letterSpacing: 3,
              color: 'var(--cyan)',
              border: '1px solid rgba(0,212,255,0.3)',
              background: 'rgba(0,212,255,0.05)',
              marginBottom: '1.5rem',
              animation: 'pulse-border 2s ease-in-out infinite',
            }}>
              SYSTEM ONLINE // PORTFOLIO v2.0
            </span>
          </motion.div>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 8vw, 5.5rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            marginBottom: '1rem',
            position: 'relative',
          }}>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              style={{
                background: 'linear-gradient(135deg, #00d4ff 0%, #7b2ff7 50%, #ff00e5 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                backgroundSize: '200% 200%',
                animation: 'gradient-shift 4s ease-in-out infinite',
                display: 'block',
                position: 'relative',
              }}
            >
              Srujan Banavath
              <motion.span
              animate={{ x: [0, 2, -1, 0], opacity: [0, 0.5, 0.3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg, #ff00e5 0%, #00d4ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  filter: 'blur(2px)',
                  opacity: 0.3,
                }}
              >
                Srujan Banavath
              </motion.span>
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)', color: 'var(--text-secondary)', marginBottom: '1.5rem', minHeight: '2.5rem' }}
          >
            <span style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.8em' }}>$ </span>
            <span>{displayText}</span>
            <span style={{ color: 'var(--cyan)', animation: 'blink 1s step-end infinite', fontWeight: 100, fontSize: '1.1em' }}>|</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            style={{
              color: 'var(--text-muted)',
              maxWidth: 600,
              margin: '0 auto 2.5rem',
              fontSize: '0.85rem',
              lineHeight: 1.9,
              fontFamily: 'var(--font-mono)',
            }}
          >
            <span style={{ color: 'var(--text-muted)' }}>{'<code>'}</span>
            {' '}Building the future through fullstack development{' '}
            <span style={{ color: 'var(--text-muted)' }}>{'</code>'}</span>
            <br />
            <span style={{ color: 'var(--cyan)', opacity: 0.6 }}>// </span>
            <span style={{ color: 'var(--text-muted)' }}>Flutter · React · Python · Data</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <motion.a
              href="#projects"
              className="glow-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              <FiExternalLink /> Explore My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.8rem 2rem',
                borderRadius: 50,
                border: '1px solid var(--cyan)',
                color: 'var(--cyan)',
                fontFamily: 'var(--font-main)',
                fontWeight: 600,
                fontSize: '1rem',
                transition: 'all 0.3s',
                background: 'rgba(0,212,255,0.05)',
                boxShadow: '0 0 20px rgba(0,212,255,0.1)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(0,212,255,0.15)'; e.currentTarget.style.boxShadow = '0 0 40px rgba(0,212,255,0.2)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(0,212,255,0.05)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(0,212,255,0.1)' }}
            >
              <HiMail /> Connect With Me
            </motion.a>
            <motion.a
              href="/SB-PORTFOLIO/resume.html"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.8rem 2rem',
                borderRadius: 50,
                border: '1px solid var(--magenta)',
                color: 'var(--magenta)',
                fontFamily: 'var(--font-main)',
                fontWeight: 600,
                fontSize: '1rem',
                transition: 'all 0.3s',
                background: 'rgba(255,0,229,0.05)',
                boxShadow: '0 0 20px rgba(255,0,229,0.1)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,0,229,0.15)'; e.currentTarget.style.boxShadow = '0 0 40px rgba(255,0,229,0.2)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,0,229,0.05)'; e.currentTarget.style.boxShadow = '0 0 20px rgba(255,0,229,0.1)' }}
            >
              <HiDownload /> Download Resume
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginTop: '3.5rem' }}
          >
            {[
              { icon: <FiGithub size={20} />, href: 'https://github.com/srujan5570', label: 'GitHub' },
              { icon: <FiLinkedin size={20} />, href: 'https://linkedin.com/in/Banavath-Srujan5191', label: 'LinkedIn' },
              { icon: <HiMail size={20} />, href: 'mailto:srujanbanoth0@gmail.com', label: 'Email' },
            ].map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_self"
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ y: -4, scale: 1.1 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + i * 0.15 }}
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  border: '1px solid rgba(0,212,255,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-muted)',
                  transition: 'all 0.3s',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--cyan)'
                  e.currentTarget.style.color = 'var(--cyan)'
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(0,212,255,0.3), inset 0 0 30px rgba(0,212,255,0.05)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0,212,255,0.2)'
                  e.currentTarget.style.color = 'var(--text-muted)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'var(--cyan)',
          opacity: 0.3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.3rem',
        }}
      >
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: 2 }}>SCROLL</span>
        <HiArrowDown size={20} />
      </motion.div>

      <style>{`
        @keyframes blink { 0%,100% { opacity:1 } 50% { opacity:0 } }
        @keyframes gradient-shift { 0%,100% { background-position: 0% 50% } 50% { background-position: 100% 50% } }
        @keyframes pulse-border { 0%,100% { border-color: rgba(0,212,255,0.3); box-shadow: 0 0 10px rgba(0,212,255,0.05) } 50% { border-color: rgba(0,212,255,0.6); box-shadow: 0 0 20px rgba(0,212,255,0.15) } }
      `}</style>
    </section>
  )
}
