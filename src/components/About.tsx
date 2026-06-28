import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiAcademicCap, HiLocationMarker } from 'react-icons/hi'

const education = [
  { institution: 'Indian Institute of Information Technology, Nagpur', degree: 'B.Tech', gpa: '5.6', period: '2021 - 2025' },
  { institution: 'Board of Intermediate Education, Hyderabad', degree: 'Intermediate', gpa: '8.9', period: '2019 - 2021' },
  { institution: 'Board of Secondary School Education, Nizamabad', degree: 'SSC', gpa: '9.2', period: '2018 - 2019' },
]

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

function SectionTitle({ text }: { text: string }) {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })
  return (
    <motion.h2
      ref={ref}
      className="section-title"
      initial={{ opacity: 0, x: -60, rotate: -2 }}
      animate={inView ? { opacity: 1, x: 0, rotate: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {text}
    </motion.h2>
  )
}

export default function About() {
  return (
    <section id="about" className="section">
      <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', position: 'relative', zIndex: 2 }}>
        <SectionTitle text="About Me" />

        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
          <ParallaxSection delay={0.2}>
            <div className="glass-card" style={{ padding: '2rem', position: 'relative', overflow: 'hidden' }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 2,
                background: 'linear-gradient(90deg, transparent, var(--cyan), var(--magenta), transparent)',
                backgroundSize: '200% 100%',
                animation: 'gradient-slide 3s linear infinite',
              }} />
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, marginBottom: '1.5rem' }}>
                I am a passionate <span style={{ color: 'var(--cyan)' }}>Fullstack Developer</span> and <span style={{ color: 'var(--cyan)' }}>Founder</span> with expertise in building
                cross-platform applications, data-driven dashboards, and interactive web experiences. I thrive at the intersection
                of technology and creativity, turning complex problems into elegant, user-centric solutions.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.9, marginBottom: '2rem' }}>
                I'm the Founder & CEO of <span style={{ color: 'var(--cyan)' }}>My Time</span>, a startup building next-gen time and financial management apps.
                A B.Tech graduate from <span style={{ color: 'var(--magenta)' }}>IIIT Nagpur</span>, I've gained experience through internships at
                <span style={{ color: 'var(--magenta)' }}> Paninian India </span>,
                <span style={{ color: 'var(--magenta)' }}> Big Bulls</span>, and
                <span style={{ color: 'var(--magenta)' }}> Tata Group</span>, while also launching multiple apps on the Play Store and Amazon.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { icon: <HiLocationMarker style={{ color: 'var(--cyan)' }} />, label: 'Delhi, India' },
                  { icon: <HiAcademicCap style={{ color: 'var(--magenta)' }} />, label: 'IIIT Nagpur — B.Tech' },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.2 }}
                    style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-muted)' }}
                  >
                    <motion.span
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                      style={{ display: 'flex' }}
                    >
                      {item.icon}
                    </motion.span>
                    <span>{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </ParallaxSection>

          <ParallaxSection delay={0.35}>
            <h3 style={{
              color: 'var(--cyan)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              marginBottom: '1.5rem',
              letterSpacing: 2,
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}>
              <motion.span
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--cyan)', display: 'inline-block' }}
              />
              EDUCATION
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {education.map((edu, i) => (
                <motion.div
                  key={edu.institution}
                  className="glass-card"
                  initial={{ opacity: 0, x: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                  whileHover={{
                    x: 8,
                    borderColor: `rgba(${i === 0 ? '0,212,255' : i === 1 ? '255,0,229' : '123,47,247'},0.3)`,
                    boxShadow: `0 0 30px rgba(${i === 0 ? '0,212,255' : i === 1 ? '255,0,229' : '123,47,247'},0.1)`,
                  }}
                  style={{
                    padding: '1.2rem 1.5rem',
                    cursor: 'default',
                    position: 'relative',
                    overflow: 'hidden',
                    borderLeft: `3px solid ${i === 0 ? 'var(--cyan)' : i === 1 ? 'var(--magenta)' : 'var(--purple)'}`,
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <h4 style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '0.3rem' }}>{edu.institution}</h4>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{edu.degree}</p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 + i * 0.2, type: 'spring' }}
                        style={{
                          color: 'var(--cyan)',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.8rem',
                          display: 'inline-block',
                          padding: '0.2rem 0.6rem',
                          borderRadius: 8,
                          background: 'rgba(0,212,255,0.1)',
                          border: '1px solid rgba(0,212,255,0.2)',
                        }}
                      >
                        GPA: {edu.gpa}
                      </motion.span>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginTop: '0.3rem' }}>{edu.period}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </ParallaxSection>
        </div>
      </div>
      <style>{`@keyframes gradient-slide { 0% { background-position: -200% 0 } 100% { background-position: 200% 0 } }
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  )
}
