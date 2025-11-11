import React from 'react'
import { motion } from 'framer-motion'

const steps = [
  { name: 'Discovery', desc: 'Research, strategy, and problem framing.' },
  { name: 'Development', desc: 'Prototyping, modeling, and iteration.' },
  { name: 'Deployment', desc: 'Reliable infra, CI/CD, and monitoring.' },
  { name: 'Optimization', desc: 'Continuous learning and improvement.' },
]

export default function Process() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#000000] to-[#030617] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h3 className="text-3xl md:text-5xl font-[Orbitron] text-white font-bold">How we deliver</h3>
          <p className="text-cyan-100/80 mt-3">A flowing pipeline with energy through every stage.</p>
        </div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-cyan-500/30 via-fuchsia-500/30 to-cyan-500/30 rounded-full" />
          <motion.div
            className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-cyan-400/70 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {steps.map((s, i) => (
              <motion.div
                key={s.name}
                whileHover={{ scale: 1.04 }}
                className="relative z-10 p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-white"
              >
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-cyan-400 to-fuchsia-400 mb-3 shadow-[0_0_18px_rgba(0,240,255,0.6)]" />
                <h4 className="font-semibold text-lg">{s.name}</h4>
                <p className="text-white/70 text-sm mt-1">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
