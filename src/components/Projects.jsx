import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  Sparkles, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  FileCheck, 
  ArrowUpRight,
  Workflow,
  CheckCircle2,
  Scissors,
  Radio,
  Calendar
} from 'lucide-react';
import SectionHeader from './SectionHeader';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;
  const [activeTab, setActiveTab] = useState('all');

  const filteredProjects = activeTab === 'all'
    ? projects
    : activeTab === 'ai'
    ? projects.filter(p => p.id === 'ai-resume-optimizer' || p.category.includes('AI'))
    : projects.filter(p => p.id !== 'ai-resume-optimizer' && (p.category.includes('E-Commerce') || p.category.includes('Full Stack') || p.id === 'sovereign-barbershop' || p.id === 'shopwave' || p.id === 'smart-study'));

  return (
    <section id="projects" className="py-28 relative overflow-hidden bg-[#080c14]">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />
      
      {/* Dynamic colored ambient light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-indigo-600/15 via-purple-600/10 to-cyan-500/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Consistent Section Header */}
        <SectionHeader
          number="04"
          tag="Selected Work"
          title="Architected Products &"
          highlightedWord="Systems"
          description="Production-tested full-stack platforms integrating LLM reasoning engines, payment security, and scalable database schemas."
        />

        {/* Filter Navigation Tabs */}
        <div className="flex items-center justify-center gap-2 mb-16">
          <div className="p-1 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-1 shadow-inner shadow-indigo-950/20">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-bold shadow-md shadow-indigo-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              onClick={() => setActiveTab('ecommerce')}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                activeTab === 'ecommerce'
                  ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-bold shadow-md shadow-indigo-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Full Stack & E-Commerce
            </button>
            <button
              onClick={() => setActiveTab('ai')}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                activeTab === 'ai'
                  ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-bold shadow-md shadow-indigo-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              AI & LLM
            </button>
          </div>
        </div>

        {/* Projects Showcase Container */}
        <div className="space-y-12">
          
          {/* Project 1 (TOP): Sovereign Barbershop – Luxury Salon & Queue Management Platform */}
          {filteredProjects.find(p => p.id === 'sovereign-barbershop') && (
            <div className="beam-container shadow-2xl shadow-indigo-950/40">
              {/* Animated Rotating Border Beam */}
              <div className="beam-border" />
              
              {/* Inner Luxury Carbon Card */}
              <div className="relative rounded-[1.2rem] bg-[#0d1424] border border-indigo-500/30 p-8 sm:p-10 lg:p-12 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Left Column: Info & Specs */}
                  <div className="lg:col-span-7 space-y-6">
                    
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-gradient-to-r from-amber-500 via-indigo-500 to-cyan-500 text-white shadow-sm shadow-indigo-500/30 flex items-center gap-1.5">
                        <Scissors className="w-3.5 h-3.5" />
                        FULL STACK & E-COMMERCE • TOP PROJECT
                      </span>
                      <a
                        href="https://barbershop123-roan.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-emerald-300 bg-emerald-950/60 border border-emerald-500/40 hover:bg-emerald-900/60 transition-colors group/live"
                      >
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                        </span>
                        <span className="font-semibold">Live Demo Online</span>
                        <ExternalLink className="w-3 h-3 group-hover/live:translate-x-0.5 transition-transform" />
                      </a>
                      <span className="px-3 py-1 rounded-full text-xs font-mono text-cyan-300 bg-indigo-950/60 border border-indigo-500/30">
                        Deterministic Queue Engine
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-100 to-cyan-200 tracking-tight">
                        Sovereign Barbershop
                      </h3>
                      <p className="text-sm sm:text-base font-mono text-cyan-400 font-medium">
                        Luxury Salon & Queue Management Platform
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                      Developed Sovereign Barbershop, a full-stack salon management platform using React, Node.js, Express, and MongoDB, featuring real-time appointment booking, a live digital walk-in queue, dynamic pricing, and role-based staff dashboards.
                    </p>

                    {/* Architecture Workflow Steps */}
                    <div className="p-4 rounded-xl bg-[#090e1c] border border-indigo-500/20 space-y-2 font-mono text-xs text-slate-300">
                      <div className="flex items-center gap-2 text-cyan-300 font-semibold text-[11px] uppercase tracking-wider mb-2">
                        <Workflow className="w-3.5 h-3.5 text-indigo-400" />
                        <span>Core Platform Architecture</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px]">
                        <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                          <span className="text-cyan-400 font-bold block">01. 4-Step Booking</span>
                          <span className="text-slate-300">Promo Validation & Calendar Sync</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                          <span className="text-indigo-400 font-bold block">02. Deterministic Engine</span>
                          <span className="text-slate-300">Zero Double-Booking & Live Walk-In Queue</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                          <span className="text-emerald-400 font-bold block">03. Cryptographic Links</span>
                          <span className="text-slate-300">Passwordless Reschedule & Cancel</span>
                        </div>
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {["React.js", "Node.js", "Express.js", "MongoDB", "Redux Toolkit", "Tailwind CSS", "Recharts", "WhatsApp API"].map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-lg text-xs font-mono bg-indigo-950/40 text-indigo-200 border border-indigo-500/25"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-4 pt-3">
                      <a
                        href="https://barbershop123-roan.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-cyan-500 text-white font-semibold text-xs shadow-lg shadow-indigo-500/30 hover:opacity-95 transition-all hover:scale-[1.02] active:scale-[0.98]"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Launch Live Demo</span>
                      </a>
                      <a
                        href="https://github.com/tusharshukla2004"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900/90 border border-indigo-500/30 hover:border-indigo-400 text-slate-200 hover:text-white font-semibold text-xs transition-all hover:scale-[1.02]"
                      >
                        <Github className="w-4 h-4" />
                        <span>Inspect Repository</span>
                      </a>
                      <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        barbershop123-roan.vercel.app
                      </span>
                    </div>

                  </div>

                  {/* Right Column: Simulated Live Salon & Queue Telemetry Preview Card */}
                  <div className="lg:col-span-5">
                    <div className="rounded-2xl bg-[#090e1c] border border-indigo-500/30 p-6 space-y-4 font-mono shadow-2xl shadow-indigo-950/40">
                      
                      {/* Card Header */}
                      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                        <div className="flex items-center gap-2 text-xs text-slate-200 font-semibold">
                          <Radio className="w-4 h-4 text-cyan-400 animate-pulse" />
                          <span>Salon OS Telemetry</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[10px] text-emerald-300 bg-emerald-950/70 px-2 py-0.5 rounded border border-emerald-500/30">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                          <span>Deterministic Engine</span>
                        </div>
                      </div>

                      {/* Conflict-Free Metric */}
                      <div className="p-4 rounded-xl bg-[#0c1324] border border-indigo-500/30 flex items-center justify-between shadow-inner">
                        <div>
                          <span className="text-[11px] text-slate-400 uppercase tracking-wider block">Scheduling Precision</span>
                          <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-200 to-indigo-200">
                            0 Double-Booking
                          </span>
                          <span className="text-[10px] text-slate-400 block mt-0.5">Deterministic Conflict Elimination</span>
                        </div>
                        <div className="w-12 h-12 rounded-full border-2 border-emerald-400/80 bg-emerald-950/40 flex items-center justify-center font-bold text-sm text-emerald-300 shadow-md shadow-emerald-500/20">
                          <ShieldCheck className="w-6 h-6 text-emerald-400" />
                        </div>
                      </div>

                      {/* Feature Checklist */}
                      <div className="space-y-2 text-xs text-slate-300">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                          <span>Frictionless 4-Step Booking & Calendar Sync</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                          <span>Live Digital Walk-In Queue & Dynamic Pricing</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                          <span>Cryptographic Links (Passwordless Reschedule & Cancel)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                          <span>Interactive Recharts (Revenue & Peak-Hour Heatmaps)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                          <span>1-Tap WhatsApp Reminder Workflows</span>
                        </div>
                      </div>

                      <div className="p-3 rounded-lg bg-indigo-950/30 border border-indigo-500/20 text-[11px] text-slate-300">
                        <span className="text-cyan-300 font-semibold">Live System:</span> Role-based staff dashboards with real-time slot synchronization and automated client follow-ups.
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </div>
          )}

          {/* Project 2: Flagship AI Project (Large Full-Width Showcase with ANIMATED BORDER BEAM) */}
          {filteredProjects.find(p => p.id === 'ai-resume-optimizer') && (
            <div className="beam-container shadow-2xl shadow-indigo-950/40">
              {/* Animated Rotating Border Beam */}
              <div className="beam-border" />
              
              {/* Inner Luxury Carbon Card */}
              <div className="relative rounded-[1.2rem] bg-[#0d1424] border border-indigo-500/30 p-8 sm:p-10 lg:p-12 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Left Column: Info & Specs */}
                  <div className="lg:col-span-7 space-y-6">
                    
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-sm shadow-indigo-500/30">
                        FLAGSHIP AI SYSTEM
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-mono text-cyan-300 bg-indigo-950/60 border border-indigo-500/30">
                        Generative AI + ATS
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-100 to-cyan-200 tracking-tight">
                        AI Resume Optimizer
                      </h3>
                      <p className="text-sm sm:text-base font-mono text-cyan-400">
                        Intelligent ATS scoring, context-aware rewriting & automated PDF generator
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                      Built an end-to-end AI-driven platform that parses job descriptions, computes automated ATS compatibility scores, and integrates Google Gemini API for intelligent section rewriting. Produces pixel-perfect PDF resumes using automated Puppeteer rendering.
                    </p>

                    {/* Architecture Workflow Steps */}
                    <div className="p-4 rounded-xl bg-[#090e1c] border border-indigo-500/20 space-y-2 font-mono text-xs text-slate-300">
                      <div className="flex items-center gap-2 text-cyan-300 font-semibold text-[11px] uppercase tracking-wider mb-2">
                        <Workflow className="w-3.5 h-3.5 text-indigo-400" />
                        <span>System Pipeline Architecture</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px]">
                        <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                          <span className="text-cyan-400 font-bold block">01. Parsing</span>
                          <span className="text-slate-300">Job Description & Resume Extraction</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                          <span className="text-indigo-400 font-bold block">02. LLM Reasoning</span>
                          <span className="text-slate-300">Gemini API Contextual Rewriting</span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                          <span className="text-emerald-400 font-bold block">03. Headless PDF</span>
                          <span className="text-slate-300">Puppeteer Pixel-Perfect Export</span>
                        </div>
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {["React.js", "Node.js", "Express.js", "MongoDB", "Google Gemini API", "Puppeteer", "Tailwind CSS"].map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-lg text-xs font-mono bg-indigo-950/40 text-indigo-200 border border-indigo-500/25"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-4 pt-3">
                      <a
                        href="https://github.com/tusharshukla2004"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold text-xs shadow-lg shadow-indigo-500/25 hover:opacity-95 transition-all hover:scale-[1.02]"
                      >
                        <Github className="w-4 h-4" />
                        <span>Inspect Repository</span>
                      </a>
                      <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        Full Stack Architecture & GenAI Integration
                      </span>
                    </div>

                  </div>

                  {/* Right Column: Simulated Live ATS Engine Preview Card */}
                  <div className="lg:col-span-5">
                    <div className="rounded-2xl bg-[#090e1c] border border-indigo-500/30 p-6 space-y-4 font-mono shadow-2xl shadow-indigo-950/40">
                      
                      {/* Card Header */}
                      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                        <div className="flex items-center gap-2 text-xs text-slate-200 font-semibold">
                          <Cpu className="w-4 h-4 text-cyan-400" />
                          <span>ATS Engine Metrics</span>
                        </div>
                        <span className="text-[10px] text-cyan-300 bg-indigo-950/70 px-2 py-0.5 rounded border border-indigo-500/30">
                          Gemini 1.5 Pro
                        </span>
                      </div>

                      {/* Score Indicator */}
                      <div className="p-4 rounded-xl bg-[#0c1324] border border-indigo-500/30 flex items-center justify-between shadow-inner">
                        <div>
                          <span className="text-[11px] text-slate-400 uppercase tracking-wider block">ATS Match Score</span>
                          <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-100 to-cyan-300">94.8%</span>
                        </div>
                        <div className="w-12 h-12 rounded-full border-2 border-cyan-400/80 bg-cyan-950/40 flex items-center justify-center font-bold text-sm text-cyan-300 shadow-md shadow-cyan-500/20">
                          A+
                        </div>
                      </div>

                      {/* Feature Checklist */}
                      <div className="space-y-2 text-xs text-slate-300">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Keyword Density Analysis: Optimal</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Gemini Section Rewriting: Active</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Puppeteer Automated Rendering: 0.8s</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Client-Side Real-Time Preview: Synchronized</span>
                        </div>
                      </div>

                      <div className="p-3 rounded-lg bg-indigo-950/30 border border-indigo-500/20 text-[11px] text-slate-300">
                        <span className="text-cyan-300 font-semibold">Outcome:</span> Tailored resume bullet points with quantifiable metrics matching technical job descriptions.
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </div>
          )}

          {/* Project 2 & 3: Grid Showcase with Animated Sub-Beam */}
          {filteredProjects.some(p => p.id === 'shopwave' || p.id === 'smart-study') && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Project 2: ShopWave */}
              {filteredProjects.find(p => p.id === 'shopwave') && (
              <div className="beam-container shadow-2xl shadow-indigo-950/20 group">
                <div className="beam-border-subtle" />
                <div className="relative rounded-[1.2rem] bg-[#0d1424] border border-indigo-500/20 p-8 h-full flex flex-col justify-between transition-colors group-hover:border-indigo-500/40">
                  <div className="space-y-5">
                    
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-indigo-950/60 text-cyan-300 border border-indigo-500/30">
                        E-COMMERCE ARCHITECTURE
                      </span>
                      <a
                        href="https://shopwave-nine.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-cyan-300 transition-colors"
                        title="Open Live Demo"
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </a>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        ShopWave Platform
                      </h3>
                      <p className="text-xs font-mono text-indigo-300 pt-1">
                        Full-Stack E-Commerce with Razorpay & Role-Based Access
                      </p>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      Complete online shopping engine featuring product catalog browsing, cart & wishlist state management, secure Razorpay checkout, inventory validation, and custom seller/admin dashboards.
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2 text-xs text-slate-300">
                      <div className="flex items-start gap-2">
                        <span className="text-cyan-400 font-bold">•</span>
                        <span>JWT Authentication with secure HTTP-only cookies and protected route guards.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-cyan-400 font-bold">•</span>
                        <span>Razorpay payments integration with automated transaction verification.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-cyan-400 font-bold">•</span>
                        <span>Role-based seller and admin panels for catalog management and analytics.</span>
                      </div>
                    </div>

                    {/* Metrics Row */}
                    <div className="grid grid-cols-3 gap-2 pt-2">
                      <div className="p-2.5 rounded-xl bg-[#090e1c] border border-indigo-500/20 text-center font-mono">
                        <span className="text-[10px] text-slate-400 block">Payment</span>
                        <span className="text-xs font-bold text-cyan-300">Razorpay</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#090e1c] border border-indigo-500/20 text-center font-mono">
                        <span className="text-[10px] text-slate-400 block">Auth</span>
                        <span className="text-xs font-bold text-indigo-300">JWT Guards</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#090e1c] border border-indigo-500/20 text-center font-mono">
                        <span className="text-[10px] text-slate-400 block">Database</span>
                        <span className="text-xs font-bold text-emerald-300">MySQL Schema</span>
                      </div>
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {["React.js", "Node.js", "Express.js", "MySQL", "Razorpay", "JWT"].map((t, idx) => (
                        <span key={idx} className="px-2.5 py-1 rounded text-xs font-mono bg-indigo-950/40 text-indigo-300 border border-indigo-500/20">
                          {t}
                        </span>
                      ))}
                    </div>

                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
                    <a
                      href="https://github.com/tusharshukla2004"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-slate-400 hover:text-cyan-300 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>
                    <a
                      href="https://shopwave-nine.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-500/20 hover:bg-indigo-500/30 border border-indigo-500/40 text-xs font-mono text-cyan-300 font-semibold transition-all hover:scale-[1.02]"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Project 3: Smart Study Platform */}
            {filteredProjects.find(p => p.id === 'smart-study') && (
              <div className="beam-container shadow-2xl shadow-indigo-950/20 group">
                <div className="beam-border-subtle" />
                <div className="relative rounded-[1.2rem] bg-[#0d1424] border border-indigo-500/20 p-8 h-full flex flex-col justify-between transition-colors group-hover:border-indigo-500/40">
                  <div className="space-y-5">
                    
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-indigo-950/60 text-cyan-300 border border-indigo-500/30">
                        COLLABORATIVE PLATFORM
                      </span>
                      <a
                        href="https://smart-study-xqyl.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-cyan-300 transition-colors"
                        title="Open Live Demo"
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </a>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        Smart Study Platform
                      </h3>
                      <p className="text-xs font-mono text-indigo-300 pt-1">
                        MERN-based Student Collaboration & Group Workspace
                      </p>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      Engineered during internship tenure at ZenExim Pvt. Ltd. Centralized collaborative workspace enabling students to create study circles, manage task dependencies, share study materials, and monitor group sprints.
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2 text-xs text-slate-300">
                      <div className="flex items-start gap-2">
                        <span className="text-cyan-400 font-bold">•</span>
                        <span>Engineered RESTful APIs for study group creation and member permissions.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-cyan-400 font-bold">•</span>
                        <span>Dynamic task tracking board with milestone progression and status filters.</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-cyan-400 font-bold">•</span>
                        <span>Integrated real-time updates and seamless state sync with MongoDB.</span>
                      </div>
                    </div>

                    {/* Metrics Row */}
                    <div className="grid grid-cols-3 gap-2 pt-2">
                      <div className="p-2.5 rounded-xl bg-[#090e1c] border border-indigo-500/20 text-center font-mono">
                        <span className="text-[10px] text-slate-400 block">Stack</span>
                        <span className="text-xs font-bold text-cyan-300">MERN</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#090e1c] border border-indigo-500/20 text-center font-mono">
                        <span className="text-[10px] text-slate-400 block">Sync</span>
                        <span className="text-xs font-bold text-indigo-300">RESTful</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-[#090e1c] border border-indigo-500/20 text-center font-mono">
                        <span className="text-[10px] text-slate-400 block">Testing</span>
                        <span className="text-xs font-bold text-emerald-300">Unit Tests</span>
                      </div>
                    </div>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {["React.js", "MongoDB", "Express.js", "Node.js", "REST APIs", "Socket.io"].map((t, idx) => (
                        <span key={idx} className="px-2.5 py-1 rounded text-xs font-mono bg-indigo-950/40 text-indigo-300 border border-indigo-500/20">
                          {t}
                        </span>
                      ))}
                    </div>

                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-800 flex items-center justify-between">
                    <a
                      href="https://github.com/tusharshukla2004"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-slate-400 hover:text-cyan-300 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>
                    <a
                      href="https://smart-study-xqyl.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-500/20 hover:bg-indigo-500/30 border border-indigo-500/40 text-xs font-mono text-cyan-300 font-semibold transition-all hover:scale-[1.02]"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            )}

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
