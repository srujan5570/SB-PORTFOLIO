import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'SQL', 'Flutter', 'JavaScript', 'Dart', 'TypeScript'],
    color: 'var(--cyan)',
    icon: '⌨',
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['React', 'React Native', 'Node.js', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'Plotly', 'Express', 'Socket.IO'],
    color: 'var(--magenta)',
    icon: '⚡',
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase Firestore'],
    color: 'var(--purple)',
    icon: '🗄',
  },
  {
    title: 'Tools & Platforms',
    skills: ['Power BI', 'Tableau', 'Excel', 'Git', 'GitHub', 'VSCode', 'Jupyter', 'Firebase Auth', 'WebRTC', 'REST APIs'],
    color: '#00ff88',
    icon: '🛠',
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

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="skills" className="section" ref={ref}>
      <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', position: 'relative', zIndex: 2 }}>
        <ParallaxSection>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, x: -60, rotate: -2 }}
            animate={inView ? { opacity: 1, x: 0, rotate: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Skills & Expertise
          </motion.h2>
        </ParallaxSection>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {skillCategories.map((cat, i) => (
            <ParallaxSection key={cat.title} delay={i * 0.15}>
              <motion.div
                className="glass-card"
                whileHover={{
                  y: -8,
                  borderColor: `${cat.color}40`,
                  boxShadow: `0 20px 60px rgba(0,0,0,0.3), 0 0 50px ${cat.color}15`,
                }}
                style={{ padding: '2rem', position: 'relative', overflow: 'hidden' }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  style={{
                    position: 'absolute',
                    top: -60,
                    right: -60,
                    width: 120,
                    height: 120,
                    borderRadius: '50%',
                    border: `1px solid ${cat.color}10`,
                    pointerEvents: 'none',
                  }}
                />
                <motion.div
                  animate={{ rotate: [360, 0] }}
                  transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                  style={{
                    position: 'absolute',
                    top: -40,
                    right: -40,
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    border: `1px solid ${cat.color}08`,
                    pointerEvents: 'none',
                  }}
                />

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: 3 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    style={{
                      height: 28,
                      borderRadius: 2,
                      background: cat.color,
                      boxShadow: `0 0 10px ${cat.color}40`,
                    }}
                  />
                  <h3 style={{ color: cat.color, fontSize: '1.1rem', fontWeight: 600 }}>{cat.title}</h3>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                  {cat.skills.map((skill, j) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.5, y: 10 }}
                      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
                      transition={{ duration: 0.3, delay: i * 0.15 + j * 0.04, type: 'spring', stiffness: 200 }}
                      whileHover={{
                        scale: 1.08,
                        borderColor: cat.color,
                        boxShadow: `0 0 20px ${cat.color}30`,
                        color: cat.color,
                      }}
                      className={`tag ${i === 1 ? 'tag-magenta' : i === 2 ? 'tag-purple' : ''}`}
                      style={{ padding: '0.4rem 1rem', fontSize: '0.8rem', cursor: 'default' }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                <div style={{ marginTop: '1.5rem', height: 4, borderRadius: 2, background: 'rgba(255,255,255,0.05)', overflow: 'hidden', position: 'relative' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${75 + Math.random() * 20}%` } : {}}
                    transition={{ duration: 1.5, delay: i * 0.2 + 0.3, ease: 'easeOut' }}
                    style={{
                      height: '100%',
                      borderRadius: 2,
                      background: `linear-gradient(90deg, ${cat.color}, ${cat.color}44)`,
                      boxShadow: `0 0 10px ${cat.color}30`,
                      position: 'relative',
                    }}
                  >
                    <motion.div
                      animate={{ x: ['0%', '100%', '0%'] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                      style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: 20,
                        height: '100%',
                        background: `linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)`,
                      }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </ParallaxSection>
          ))}
        </div>
      </div>
    </section>
  )
}
