import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import ButterflyDrift from './components/ButterflyDrift';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col selection:bg-indigo-500/30 selection:text-indigo-200 relative">
      {/* Global Full-Page Butterfly Drift Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <ButterflyDrift
          background="transparent"
          baseColor="#00FFE8"
          accentColor="#6366F1"
          density={95}
          size={52}
          speed={70}
          flap={8}
          wander={25}
          depth={100}
          hover={140}
          reach={28}
          vignette={0}
          style={{ position: 'fixed', inset: 0, width: '100vw', height: '100vh' }}
        />
      </div>

      {/* Top Navbar */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Sections */}
      <main className="flex-grow relative z-10">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
