import React from 'react'
import { motion } from 'framer-motion'

const logos = [
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
]

export default function TechSphere() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-black to-[#020617] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-3xl md:text-5xl font-[Orbitron] text-white font-bold">Tech we master</h3>
          <p className="text-cyan-100/80 mt-4">
            We combine modern AI frameworks, data infrastructure, and product tooling to ship durable systems.
          </p>
        </div>
        <div className="relative aspect-square">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 rounded-full border border-cyan-400/20"
          />
          <div className="absolute inset-0 grid place-items-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 border border-white/10" />
          </div>
          {logos.map((src, i) => (
            <motion.img
              key={src}
              src={src}
              alt="logo"
              className="absolute w-12 h-12 object-contain drop-shadow-[0_0_10px_rgba(0,240,255,0.35)]"
              style={{
                top: `${50 + 40 * Math.sin((i / logos.length) * Math.PI * 2)}%`,
                left: `${50 + 40 * Math.cos((i / logos.length) * Math.PI * 2)}%`,
                transform: 'translate(-50%, -50%)',
              }}
              whileHover={{ scale: 1.2 }}
            />
          ))}
          <div className="pointer-events-none absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(0,240,255,0.25), transparent 60%)',
          }} />
        </div>
      </div>
    </section>
  )
}
