import React from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import TechSphere from './components/TechSphere'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <Services />
      <TechSphere />
      <Process />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
