import React from 'react'

export default function Footer() {
  return (
    <footer className="relative py-12 bg-gradient-to-b from-[#020617] to-black text-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-fuchsia-500 animate-pulse" />
          <span className="font-semibold tracking-wide">INAI Agency</span>
        </div>
        <nav className="flex items-center gap-6 text-white/70">
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
          <a href="#" className="hover:text-white transition">Privacy</a>
        </nav>
      </div>
      <div className="absolute inset-0 -z-0" aria-hidden>
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(800px 300px at 50% 100%, rgba(0,240,255,0.08), transparent 60%)'
        }} />
      </div>
    </footer>
  )
}
