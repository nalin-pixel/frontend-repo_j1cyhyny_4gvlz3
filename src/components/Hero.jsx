import React from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const GlitchHeading = ({ children }) => {
  return (
    <motion.h1
      whileHover={{
        textShadow: [
          '0 0 8px #00f0ff',
          '2px 0 #ff00c1, -2px 0 #00f0ff',
          '0 0 16px #00f0ff',
        ],
      }}
      className="pointer-events-auto select-none font-[Orbitron] text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight drop-shadow-[0_0_10px_rgba(0,240,255,0.35)]"
    >
      {children}
    </motion.h1>
  )
}

const Starfield = () => {
  // Simple starfield using CSS gradients
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden>
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage:
          'radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.9) 99%, transparent 100%),\
           radial-gradient(1px 1px at 80% 20%, rgba(255,255,255,0.7) 99%, transparent 100%),\
           radial-gradient(1px 1px at 40% 70%, rgba(255,255,255,0.8) 99%, transparent 100%),\
           radial-gradient(1px 1px at 60% 50%, rgba(255,255,255,0.6) 99%, transparent 100%),\
           radial-gradient(1px 1px at 10% 80%, rgba(255,255,255,0.5) 99%, transparent 100%)',
        backgroundSize: '3px 3px, 3px 3px, 3px 3px, 3px 3px, 3px 3px',
        animation: 'twinkle 6s linear infinite',
      }} />
    </div>
  )
}

const CTAButton = ({ children }) => (
  <motion.button
    whileHover={{ y: -4, boxShadow: '0 10px 30px rgba(0,240,255,0.35)' }}
    whileTap={{ y: 0 }}
    className="relative px-6 py-3 rounded-xl bg-[#0c1b2a]/60 backdrop-blur-md border border-cyan-400/40 text-white font-semibold tracking-wide shadow-[inset_0_0_20px_rgba(0,240,255,0.25)] hover:shadow-[inset_0_0_30px_rgba(0,240,255,0.35)] transition"
  >
    <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 pointer-events-none" />
    <span className="relative">{children}</span>
  </motion.button>
)

export default function Hero() {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useTransform(my, [-200, 200], [8, -8])
  const rotateY = useTransform(mx, [-200, 200], [-8, 8])

  return (
    <section
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        mx.set(e.clientX - rect.left - rect.width / 2)
        my.set(e.clientY - rect.top - rect.height / 2)
      }}
      className="relative min-h-[90vh] w-full overflow-hidden flex items-center justify-center"
      style={{
        background: 'radial-gradient(1200px 600px at 50% 0%, rgba(0,240,255,0.15), transparent 60%), linear-gradient(180deg, #0a0e27 0%, #000000 100%)',
      }}
    >
      <Starfield />

      <motion.div
        style={{ rotateX, rotateY }}
        className="absolute inset-0"
      >
        <Spline scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-6">
        <GlitchHeading>INAI - Intelligent Automation & Innovation</GlitchHeading>
        <p className="mx-auto max-w-2xl text-cyan-100/90">
          We build agentic AI systems, intelligent automation, and data-driven products for the next era of business.
        </p>
        <div className="flex items-center justify-center gap-4 pt-2">
          <CTAButton>Start a Project</CTAButton>
          <motion.a
            href="#services"
            whileHover={{ x: 2 }}
            className="text-cyan-300 hover:text-white transition font-medium"
          >
            Explore Services →
          </motion.a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0e27]" />
    </section>
  )
}
