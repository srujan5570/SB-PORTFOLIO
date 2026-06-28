import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { FiGithub, FiLinkedin, FiSend } from 'react-icons/fi'

function ParallaxSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true })
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.open(`mailto:srujanbanoth0@gmail.com?subject=Portfolio Contact from ${formState.name}&body=${encodeURIComponent(formState.message)}`)
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" className="section" ref={ref}>
      <div style={{ maxWidth: 1000, margin: '0 auto', width: '100%', position: 'relative', zIndex: 2 }}>
        <ParallaxSection>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, x: -60, rotate: -2 }}
            animate={inView ? { opacity: 1, x: 0, rotate: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Get In Touch
          </motion.h2>
        </ParallaxSection>

        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '3rem', alignItems: 'start' }}>
          <ParallaxSection delay={0.2}>
            <div className="glass-card" style={{ padding: '2rem', position: 'relative', overflow: 'hidden' }}>
              <motion.div
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: 1,
                  background: 'linear-gradient(90deg, transparent, var(--cyan), transparent)',
                }}
              />
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
                Have a project in mind or just want to say hello? I'm always open to new opportunities
                and collaborations. Let's build something amazing together.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                {[
                  { icon: <HiMail />, label: 'Email', value: 'srujanbanoth0@gmail.com', href: 'mailto:srujanbanoth0@gmail.com' },
                  { icon: <HiPhone />, label: 'Phone', value: '+91 9133778923', href: 'tel:+919133778923' },
                  { icon: <HiLocationMarker />, label: 'Location', value: 'Delhi, India', href: null },
                ].map((info, i) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.15 }}
                    style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(0,212,255,0.3)' }}
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        background: 'rgba(0, 212, 255, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--cyan)',
                        fontSize: '1.1rem',
                        flexShrink: 0,
                        border: '1px solid rgba(0,212,255,0.2)',
                      }}
                    >
                      {info.icon}
                    </motion.div>
                    <div>
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: '0.1rem' }}>{info.label}</p>
                      {info.href ? (
                        <a href={info.href} style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', transition: 'color 0.3s' }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--cyan)')}
                          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{info.value}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
                {[
                  { icon: <FiGithub />, href: 'https://github.com/srujan5570', label: 'GitHub' },
                  { icon: <FiLinkedin />, href: 'https://linkedin.com/in/Banavath-Srujan5191', label: 'LinkedIn' },
                ].map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -4, scale: 1.1 }}
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      border: '1px solid var(--glass-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-muted)',
                      transition: 'all 0.3s',
                      background: 'rgba(255,255,255,0.02)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--cyan)'
                      e.currentTarget.style.color = 'var(--cyan)'
                      e.currentTarget.style.boxShadow = '0 0 30px rgba(0,212,255,0.2)'
                      e.currentTarget.style.background = 'rgba(0,212,255,0.05)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--glass-border)'
                      e.currentTarget.style.color = 'var(--text-muted)'
                      e.currentTarget.style.boxShadow = 'none'
                      e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
                    }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </ParallaxSection>

          <ParallaxSection delay={0.35}>
            <motion.form
              onSubmit={handleSubmit}
              className="glass-card"
              style={{ padding: '2rem', position: 'relative', overflow: 'hidden' }}
              whileHover={{ borderColor: 'rgba(0,212,255,0.2)' }}
            >
              <motion.div
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '50%',
                  height: 1,
                  background: 'linear-gradient(90deg, transparent, var(--magenta))',
                }}
              />

              {['NAME', 'EMAIL'].map((label) => (
                <div key={label} style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', marginBottom: '0.5rem', letterSpacing: 1 }}>
                    {'// '}{label}
                  </label>
                  <motion.input
                    type={label === 'EMAIL' ? 'email' : 'text'}
                    required
                    value={label === 'NAME' ? formState.name : formState.email}
                    onChange={(e) => setFormState(s => ({ ...s, [label.toLowerCase()]: e.target.value }))}
                    whileFocus={{ borderColor: 'var(--cyan)', boxShadow: '0 0 20px rgba(0,212,255,0.1)' }}
                    style={{
                      width: '100%',
                      padding: '0.8rem 1rem',
                      borderRadius: 8,
                      border: '1px solid var(--glass-border)',
                      background: 'rgba(255,255,255,0.02)',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-main)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      transition: 'all 0.3s',
                    }}
                  />
                </div>
              ))}

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', marginBottom: '0.5rem', letterSpacing: 1 }}>
                  {'// '}MESSAGE
                </label>
                <motion.textarea
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState(s => ({ ...s, message: e.target.value }))}
                  whileFocus={{ borderColor: 'var(--cyan)', boxShadow: '0 0 20px rgba(0,212,255,0.1)' }}
                  style={{
                    width: '100%',
                    padding: '0.8rem 1rem',
                    borderRadius: 8,
                    border: '1px solid var(--glass-border)',
                    background: 'rgba(255,255,255,0.02)',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-main)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    resize: 'vertical',
                    transition: 'all 0.3s',
                  }}
                />
              </div>

              <motion.button
                type="submit"
                className="glow-btn"
                whileHover={{ scale: 1.02, boxShadow: '0 10px 40px rgba(0,212,255,0.3)' }}
                whileTap={{ scale: 0.98 }}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                {sent ? (
                  <motion.span initial={{ scale: 1.2 }} animate={{ scale: 1 }}>
                    ✓ Message Sent!
                  </motion.span>
                ) : (
                  <><FiSend /> Send Message</>
                )}
              </motion.button>
            </motion.form>
          </ParallaxSection>
        </div>
      </div>
    </section>
  )
}
