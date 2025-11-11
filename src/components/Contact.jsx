import React from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-[#030617] to-black">
      <div className="absolute inset-0" aria-hidden>
        <div className="absolute inset-0 opacity-60" style={{
          background: 'radial-gradient(1000px 400px at 50% 0%, rgba(0,240,255,0.12), transparent 60%)',
        }} />
      </div>
      <div className="max-w-4xl mx-auto px-6 relative">
        <div className="text-center mb-10">
          <h3 className="text-3xl md:text-5xl font-[Orbitron] text-white font-bold">Let\'s build</h3>
          <p className="text-cyan-100/80 mt-3">Tell us about your goals and timelines.</p>
        </div>
        <motion.form
          whileHover={{ boxShadow: '0 30px 80px rgba(0,240,255,0.15)' }}
          className="rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-8 text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-white/70">Name</label>
              <input className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="text-sm text-white/70">Email</label>
              <input type="email" className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" placeholder="you@company.com" />
            </div>
          </div>
          <div className="mt-4">
            <label className="text-sm text-white/70">Project</label>
            <textarea rows={5} className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 p-3 focus:outline-none focus:ring-2 focus:ring-cyan-400/50" placeholder="What are you building?" />
          </div>
          <div className="mt-6 flex justify-end">
            <motion.button whileHover={{ y: -2 }} className="px-6 py-3 rounded-xl bg-cyan-500/20 border border-cyan-400/40 shadow-[inset_0_0_20px_rgba(0,240,255,0.25)]">
              Send →
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
