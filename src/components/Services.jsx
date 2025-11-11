import React from 'react'
import { motion } from 'framer-motion'
import { Cpu, Bot, Database, BarChart3, MonitorSmartphone, Cloud } from 'lucide-react'

const services = [
  {
    title: 'AI Automation',
    desc: 'Automate complex workflows with AI-driven decisioning and RPA.',
    icon: Cpu,
    glow: 'from-cyan-400 via-cyan-300 to-cyan-200',
    ring: 'shadow-[0_0_40px_rgba(0,240,255,0.35)]',
  },
  {
    title: 'Agentic AI',
    desc: 'Multi-agent systems that plan, coordinate, and act autonomously.',
    icon: Bot,
    glow: 'from-purple-400 via-fuchsia-400 to-pink-400',
    ring: 'shadow-[0_0_40px_rgba(168,85,247,0.35)]',
  },
  {
    title: 'Data Science',
    desc: 'Predictive models, experimentation, and ML pipelines at scale.',
    icon: Database,
    glow: 'from-emerald-400 via-emerald-300 to-emerald-200',
    ring: 'shadow-[0_0_40px_rgba(16,185,129,0.35)]',
  },
  {
    title: 'Data Analysis',
    desc: 'Dashboards, BI, and insights that move metrics.',
    icon: BarChart3,
    glow: 'from-amber-400 via-yellow-400 to-yellow-300',
    ring: 'shadow-[0_0_40px_rgba(245,158,11,0.35)]',
  },
  {
    title: 'Web & App Dev',
    desc: 'High-performance web and mobile apps with modern stacks.',
    icon: MonitorSmartphone,
    glow: 'from-cyan-400 via-sky-400 to-blue-400',
    ring: 'shadow-[0_0_40px_rgba(6,182,212,0.35)]',
  },
  {
    title: 'SaaS Solutions',
    desc: 'From MVP to scale: architecture, billing, analytics, and more.',
    icon: Cloud,
    glow: 'from-violet-400 via-purple-400 to-fuchsia-400',
    ring: 'shadow-[0_0_40px_rgba(139,92,246,0.35)]',
  },
]

const tilt = {
  initial: { rotateX: 0, rotateY: 0 },
  whileHover: (i) => ({
    rotateX: 6,
    rotateY: -6,
    transition: { type: 'spring', stiffness: 200, damping: 15 },
  }),
}

const ServiceCard = ({ item, index }) => {
  const Icon = item.icon
  return (
    <motion.div
      custom={index}
      whileHover={{ y: -6 }}
      className={`relative rounded-2xl p-6 bg-white/5 backdrop-blur-md border border-white/10 text-white ${item.ring}`}
    >
      <div className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${item.glow} opacity-20`} />
      <div className="relative flex items-start gap-4">
        <div className="p-3 rounded-xl bg-black/30 border border-white/10">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-lg">{item.title}</h3>
          <p className="text-white/70 text-sm mt-1">{item.desc}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" className="relative py-20 bg-gradient-to-b from-[#030712] via-[#0a0e27] to-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-[Orbitron] text-white font-bold">Capabilities</h2>
          <p className="text-cyan-100/80 mt-3">Six pillars of delivery, engineered for impact.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <ServiceCard key={s.title} item={s} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
