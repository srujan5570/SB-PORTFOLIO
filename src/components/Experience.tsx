import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiBriefcase, HiLocationMarker } from 'react-icons/hi'

const experiences = [
  {
    role: 'JavaScript Developer Intern',
    company: 'Paninian India Pvt. Ltd.',
    location: 'Bengaluru, Karnataka',
    period: '26 Nov 2025 - 3 Months',
    highlights: [
      'Selected as JavaScript Developer Intern at Paninian India Pvt. Ltd., an Indian aerospace company',
      'Working on JavaScript development projects with a focus on building scalable web applications',
      'Receiving performance-based quarterly bonuses as part of the RMS program',
    ],
    tags: ['JavaScript', 'Web Development', 'React', 'Node.js'],
    color: '#00ff88',
  },
  {
    role: 'Finance and Research Analyst Intern',
    company: 'Big Bulls',
    location: 'Remote',
    period: 'Jul 2024 - Dec 2024',
    highlights: [
      'Built and maintained finance dashboards with frontend/backend integration',
      'Improved financial data systems through preprocessing and database optimization',
      'Achieved 82% project completion with high ratings in problem-solving and initiative',
    ],
    tags: ['React', 'Node.js', 'SQL', 'Data Preprocessing'],
    color: 'var(--cyan)',
  },
  {
    role: 'Data Visualization Intern',
    company: 'Tata Group',
    location: 'Remote',
    period: 'Sep 2023 - Oct 2023',
    highlights: [
      'Designed dynamic dashboards using Power BI and Tableau',
      'Applied visual storytelling to present KPIs, driving insights for cross-functional teams',
      'Practiced business framing techniques to align visualizations with strategic goals',
    ],
    tags: ['Power BI', 'Tableau', 'Excel', 'Data Storytelling'],
    color: 'var(--magenta)',
  },
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

export default function Experience() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <section id="experience" className="section" ref={ref}>
      <div style={{ maxWidth: 1000, margin: '0 auto', width: '100%', position: 'relative', zIndex: 2 }}>
        <ParallaxSection>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, x: -60, rotate: -2 }}
            animate={inView ? { opacity: 1, x: 0, rotate: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Experience
          </motion.h2>
        </ParallaxSection>

        <div style={{ position: 'relative' }}>
          <div className="exp-line" style={{
            position: 'absolute',
            left: 20,
            top: 0,
            bottom: 0,
            width: 2,
            background: 'linear-gradient(180deg, var(--cyan), var(--magenta), transparent)',
            opacity: 0.3,
          }} />

          {experiences.map((exp, i) => (
            <div key={exp.company + i} className="exp-item" style={{ position: 'relative', paddingLeft: '3.5rem', marginBottom: '3rem' }}>
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: 0.4 + i * 0.3, type: 'spring', stiffness: 200 }}
                style={{
                  position: 'absolute',
                  left: 11,
                  top: 5,
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  background: exp.color,
                  boxShadow: `0 0 20px ${exp.color}80, 0 0 60px ${exp.color}40`,
                  zIndex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <motion.div
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i }}
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: 'white',
                  }}
                />
              </motion.div>

              <ParallaxSection delay={0.2 + i * 0.25}>
                <motion.div
                  className="glass-card"
                  whileHover={{
                    y: -5,
                    borderColor: `${exp.color}40`,
                    boxShadow: `0 20px 60px rgba(0,0,0,0.3), 0 0 40px ${exp.color}10`,
                  }}
                  style={{
                    padding: '1.8rem 2rem',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <motion.div
                    initial={{ x: '-100%' }}
                    whileInView={{ x: '100%' }}
                    transition={{ duration: 2, delay: 0.5 + i * 0.3, repeat: Infinity, repeatDelay: 3 }}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '50%',
                      height: 1,
                      background: `linear-gradient(90deg, transparent, ${exp.color})`,
                    }}
                  />

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', marginBottom: '1rem' }}>
                    <div>
                      <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.3rem' }}>{exp.role}</h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                        <span style={{ color: exp.color, fontSize: '0.9rem', fontWeight: 600 }}>{exp.company}</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                          <HiLocationMarker /> {exp.location}
                        </span>
                      </div>
                    </div>
                    <motion.span
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + i * 0.3 }}
                      style={{
                        color: 'var(--text-muted)',
                        fontSize: '0.8rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '0.3rem 0.8rem',
                        borderRadius: 20,
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid var(--glass-border)',
                      }}
                    >
                      {exp.period}
                    </motion.span>
                  </div>

                  <ul style={{ listStyle: 'none', marginBottom: '1rem' }}>
                    {exp.highlights.map((h, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + j * 0.1 + i * 0.3 }}
                        style={{
                          color: 'var(--text-secondary)',
                          fontSize: '0.9rem',
                          lineHeight: 1.8,
                          paddingLeft: '1.2rem',
                          position: 'relative',
                        }}
                      >
                        <motion.span
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 2, repeat: Infinity, delay: j * 0.5 }}
                          style={{
                            position: 'absolute',
                            left: 0,
                            top: 10,
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            background: exp.color,
                            opacity: 0.5,
                          }}
                        />
                        {h}
                      </motion.li>
                    ))}
                  </ul>

                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {exp.tags.map((t, j) => (
                      <motion.span
                        key={t}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + j * 0.08 + i * 0.3 }}
                        whileHover={{ scale: 1.05, borderColor: exp.color }}
                        className={`tag ${i === 1 ? 'tag-magenta' : ''}`}
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </ParallaxSection>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
