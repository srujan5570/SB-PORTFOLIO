import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { HiDeviceTablet, HiGlobe, HiChat } from 'react-icons/hi'

const projects = [
  {
    title: 'V-NutriLife',
    subtitle: 'Nutrition & Health App',
    description: 'A beta-stage nutrition and health app offering personalized diet plans, nutrition tracking, health tips, and direct consultations with clinical dietitians. Features condition-specific diets (endometriosis, PCOS, weight loss), meal logging, water tracking, and seasonal health guides.',
    tags: ['Flutter', 'Dart', 'Firebase', 'Nutrition', 'Health Tech', 'Mobile App'],
    icon: <HiDeviceTablet size={28} />,
    color: 'var(--magenta)',
    links: { website: '/v-nutrilife-app.html', internalTesting: 'https://play.google.com/apps/internaltest/4701581662108778000' },
  },
  {
    title: 'UPSC Cart',
    subtitle: 'Student Marketplace for UPSC Aspirants',
    description: 'Built a full-fledged marketplace app for UPSC aspirants to buy & sell books, notes, furniture, electronics, and find rooms near coaching hubs. Features in-app chat, zero-commission hyper-local discovery, and direct deals between students.',
    tags: ['Flutter', 'Dart', 'Firebase', 'In-App Chat', 'Google Pay', 'Google Play'],
    icon: <HiDeviceTablet size={28} />,
    color: '#00ff88',
    links: { playStore: 'https://play.google.com/store/apps/details?id=com.upsccart.upsc.cart', website: 'https://upsccart.shop/', roomLeads: 'https://roomleads.upsccart.shop/room-leads' },
  },
  {
    title: 'Easy Money',
    subtitle: 'Financial Tracking App',
    description: 'Engineered a scalable cross-platform app using Flutter, enabling real-time financial tracking with Firebase Firestore integrated earning application. Built secure authentication with Firebase Auth and Google Sign-In. Designed admin dashboard with ad monetization and social sharing.',
    tags: ['Flutter', 'Dart', 'Firebase', 'Google Sign-In', 'Provider', 'Google Mobile Ads', 'REST APIs'],
    icon: <HiDeviceTablet size={28} />,
    color: 'var(--cyan)',
    links: { playStore: 'https://play.google.com/store/apps/details?id=com.banav.easymoney', amazon: 'https://www.amazon.com/gp/product/B0F5THZXNZ' },
  },
  {
    title: 'Communication App',
    subtitle: 'Real-Time Messaging Platform',
    description: 'Built a secure cross-platform messaging app using React Native, WebRTC, and Socket.IO for real-time text, audio, and video communication. Designed JWT-based authentication and MongoDB schemas. Achieved <100ms latency with typing indicators, read receipts, and online status.',
    tags: ['React Native', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'WebRTC', 'JWT', 'TypeScript'],
    icon: <HiChat size={28} />,
    color: 'var(--magenta)',
    links: { github: 'https://github.com/srujan5570/Communications-App' },
  },
  {
    title: 'Lumia Beauty Products',
    subtitle: 'E-Commerce Website',
    description: 'Built a fully functional e-commerce website showcasing skincare products with detailed catalogs and shopping cart functionality. Integrated customer service systems including contact forms, email support, and clear return/shipping policies.',
    tags: ['Google Sites', 'Content Management', 'E-commerce Tools', 'Responsive Design'],
    icon: <HiGlobe size={28} />,
    color: 'var(--purple)',
    links: { website: 'https://sites.google.com/view/lumia-beauty-products/home', github: '#' },
  },
  {
    title: 'Basket Grab',
    subtitle: 'Smart Shopping Platform',
    description: 'Developed a smart shopping platform with instant checkout capabilities. Built inventory management system and integrated payment processing. Focused on intuitive UX and responsive design for seamless mobile-first shopping.',
    tags: ['Google Sites', 'E-commerce', 'Responsive Web Design', 'Content Management'],
    icon: <HiGlobe size={28} />,
    color: '#00ff88',
    links: { website: 'https://bascket-grab.web.app/', github: 'https://github.com/srujan5570/basket-grab' },
  },
  {
    title: 'My Time',
    subtitle: 'Founder & CEO at My Time',
    description: 'Founded and leading My Time — a startup revolutionizing time and money management with next-gen mobile apps. Overseeing development of 16+ apps including My Time (productivity), Easy Money (finance), Health Tracker, and more. Serving 1000+ users with a focus on innovation, security, and user experience.',
    tags: ['Startup', 'Entrepreneurship', 'Flutter', 'Firebase', 'Product Management', 'Team Leadership'],
    icon: <HiGlobe size={28} />,
    color: 'var(--cyan)',
    links: { website: 'https://mytimes.app/' },
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

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="projects" className="section" ref={ref}>
      <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%', position: 'relative', zIndex: 2 }}>
        <ParallaxSection>
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, x: -60, rotate: -2 }}
            animate={inView ? { opacity: 1, x: 0, rotate: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Projects
          </motion.h2>
        </ParallaxSection>

        <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {projects.map((project, i) => (
            <ParallaxSection key={project.title} delay={i * 0.12}>
              <motion.div
                className="glass-card"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{
                  y: -10,
                  borderColor: `${project.color}40`,
                  boxShadow: `0 30px 80px rgba(0,0,0,0.4), 0 0 60px ${project.color}15`,
                }}
                style={{ padding: 0, overflow: 'hidden', position: 'relative', cursor: 'default' }}
              >
                <motion.div
                  animate={{ backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                  style={{
                    height: 6,
                    background: `linear-gradient(90deg, ${project.color}, ${project.color}44, ${project.color})`,
                    backgroundSize: '200% 100%',
                    boxShadow: `0 0 20px ${project.color}30`,
                  }}
                />

                <div style={{ padding: '2rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      style={{ color: project.color, opacity: 0.8 }}
                    >
                      {project.icon}
                    </motion.div>
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      style={{
                        color: project.color,
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        letterSpacing: 1,
                        opacity: 0.5,
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </motion.span>
                  </div>

                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.2rem', color: 'var(--text-primary)' }}>{project.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: project.color, marginBottom: '1rem', fontFamily: 'var(--font-mono)', opacity: 0.8 }}>
                    {project.subtitle}
                  </p>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '1.2rem' }}>
                    {project.description}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                    {project.tags.map((t, j) => (
                      <motion.span
                        key={t}
                        initial={{ opacity: 0, scale: 0.8, y: 5 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: 0.2 + j * 0.04 + i * 0.1 }}
                        whileHover={{ scale: 1.05, borderColor: project.color }}
                        style={{
                          padding: '0.2rem 0.6rem',
                          borderRadius: 12,
                          fontSize: '0.65rem',
                          fontFamily: 'var(--font-mono)',
                          background: `${project.color}10`,
                          border: `1px solid ${project.color}20`,
                          color: project.color,
                        }}
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: '1rem' }}>
                    {Object.entries(project.links).map(([key, href]) => (
                      <motion.a
                        key={key}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 4, color: project.color }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          color: 'var(--text-muted)',
                          fontSize: '0.8rem',
                          fontFamily: 'var(--font-mono)',
                          textTransform: 'capitalize',
                          transition: 'color 0.3s',
                        }}
                      >
                        {key === 'github' ? <FiGithub /> : <FiExternalLink />}
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </ParallaxSection>
          ))}
        </div>
      </div>
    </section>
  )
}
