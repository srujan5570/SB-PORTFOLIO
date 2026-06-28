import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer style={{
      position: 'relative',
      zIndex: 2,
      padding: '3rem 5%',
      borderTop: '1px solid var(--glass-border)',
      textAlign: 'center',
      backdropFilter: 'blur(10px)',
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          style={{
            width: 1,
            height: 40,
            background: 'linear-gradient(180deg, var(--cyan), transparent)',
            margin: '0 auto 1.5rem',
          }}
        />

        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
          Designed & Built with
          <motion.span
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ color: 'var(--magenta)', margin: '0 0.3rem', display: 'inline-block' }}
          >
            &lt;/&gt;
          </motion.span>
          by{' '}
          <span style={{
            background: 'var(--gradient-text)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontWeight: 600,
          }}>
            Srujan Banavath
          </span>
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.7rem', fontFamily: 'var(--font-mono)', opacity: 0.5 }}>
          &copy; {new Date().getFullYear()} — All rights reserved
        </p>
      </motion.div>
    </footer>
  )
}
