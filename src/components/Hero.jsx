import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Terminal, MapPin, Sparkles, ChevronDown, Check, Code2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const { personal } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-12 sm:pb-16 flex items-center justify-center overflow-hidden bg-[#080c14]">
      
      {/* Background Architectural Patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-70 pointer-events-none" />
      
      {/* Dynamic Linear / Vercel Colored Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[380px] bg-gradient-to-r from-indigo-500/15 via-purple-500/10 to-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[320px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[300px] bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Radial vignette mask */}
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_40%,#000_60%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          
          {/* Left Column: Headlines & Call-to-actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Avatar & Status Pill */}
            <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start gap-3.5">
              <div className="relative group flex-shrink-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full p-0.5 bg-gradient-to-tr from-indigo-500 via-cyan-400 to-teal-300 shadow-lg shadow-indigo-500/25 transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={personal.avatar || "/profile.jpg"}
                    alt={personal.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-[#080c14] flex items-center justify-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                </span>
              </div>

              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-indigo-950/50 border border-indigo-500/30 shadow-lg shadow-indigo-950/40">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                <span className="text-xs font-mono font-medium text-indigo-200">
                  {personal.statusBadge}
                </span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={itemVariants} className="space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
                Crafting <span className="text-gradient-accent">Scalable Web</span> & Intelligent AI.
              </h1>
              <div className="flex items-center justify-center lg:justify-start gap-2.5 text-lg sm:text-xl font-mono text-slate-400">
                <span className="text-indigo-500">//</span>
                <span className="text-slate-200 font-semibold">{personal.name}</span>
                <span className="text-slate-600">—</span>
                <span className="text-cyan-400 font-normal">{personal.role}</span>
              </div>
            </motion.div>

            {/* Tagline / Subtitle */}
            <motion.p variants={itemVariants} className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Specialized in high-performance <strong className="text-indigo-300 font-semibold">MERN stack architecture</strong>, robust REST APIs, and production <strong className="text-cyan-300 font-semibold">Generative AI systems (RAG, Gemini & Pinecone)</strong>.
            </motion.p>

            {/* Quick Meta: Location & Trainee info */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs font-mono text-slate-400 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 shadow-sm">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                {personal.location}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 shadow-sm">
                <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                Star Chain Labs Trainee
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-3">
              
              {/* Primary Gradient Button */}
              <a
                href="#projects"
                className="group flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-cyan-500 text-white font-semibold text-sm shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Indigo Glass Border Secondary Button */}
              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-850 border border-indigo-500/30 hover:border-indigo-400 text-slate-200 hover:text-white font-semibold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-black/40"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>View Resume</span>
              </button>

              <a
                href="#contact"
                className="px-5 py-3.5 rounded-xl text-slate-400 hover:text-cyan-300 font-medium text-sm transition-colors"
              >
                Let's Talk →
              </a>
            </motion.div>

            {/* Live Stats Row */}
            <motion.div variants={itemVariants} className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto lg:mx-0">
              {personal.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 text-center lg:text-left transition-all hover:border-indigo-500/40 hover:bg-slate-900/90 shadow-sm"
                >
                  <div className="text-xl sm:text-2xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-100 to-cyan-300 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

          </div>

          {/* Right Column: High-End Developer Terminal with ELECTRIC BORDER MOTION */}
          <motion.div variants={itemVariants} className="lg:col-span-5 flex justify-center">
            
            {/* Moving Border Beam Container */}
            <div className="beam-container w-full max-w-md shadow-2xl shadow-indigo-950/40">
              {/* The rotating light beam */}
              <div className="beam-border" />
              
              {/* Inner Card Content */}
              <div className="relative rounded-[1.2rem] bg-[#0c1220] border border-indigo-500/20 overflow-hidden font-mono text-xs">
                
                {/* Terminal Title Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#080d17] border-b border-indigo-500/15">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400 text-[11px]">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="text-slate-300 font-medium">tushar.config.ts</span>
                  </div>
                  <div className="text-[10px] text-cyan-300 font-mono bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
                    TypeScript
                  </div>
                </div>

                {/* Code Window Body (Linear syntax highlighting) */}
                <div className="p-5 space-y-2 text-slate-300 leading-relaxed overflow-x-auto text-[11.5px]">
                  <div>
                    <span className="text-indigo-400">export const</span> <span className="text-cyan-300 font-bold">engineer</span> = &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">identity:</span> <span className="text-emerald-300">"Tushar Shukla"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">specialization:</span> <span className="text-cyan-300">"Full Stack + GenAI"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">stack:</span> [
                    <div className="pl-4 text-indigo-200">
                      "React", "Node.js", "Express", "MongoDB", "MySQL"
                    </div>
                    <span className="text-slate-400">],</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">aiIntegration:</span> &#123;
                    <div className="pl-4">
                      <span className="text-slate-400">ragArchitecture:</span> <span className="text-cyan-400 font-bold">true</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">models:</span> [<span className="text-emerald-300">"Gemini API"</span>, <span className="text-emerald-300">"OpenAI"</span>],
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">vectorStore:</span> <span className="text-emerald-300">"Pinecone"</span>
                    </div>
                    <span className="text-slate-400">&#125;,</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">currentStatus:</span> <span className="text-emerald-400 font-semibold">"Ready for High-Impact Teams"</span>
                  </div>
                  <div>&#125;;</div>

                  {/* Terminal CLI Command */}
                  <div className="pt-3 border-t border-slate-800/80 text-slate-400">
                    <div className="flex items-center gap-2">
                      <span className="text-indigo-400 font-bold">&gt;</span>
                      <span className="text-cyan-300">tushar.getAvailability()</span>
                    </div>
                    <div className="mt-1 flex items-center gap-2 text-slate-300 text-[11px]">
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Immediate • Open to Full-time & Trainee Roles</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Quick Action Footer */}
                <div className="px-4 py-3 bg-[#080d17] border-t border-indigo-500/15 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400 font-mono truncate max-w-[200px]">
                    shukla.tushar0219@gmail.com
                  </span>
                  <a
                    href="#contact"
                    className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1 transition-colors"
                  >
                    Connect →
                  </a>
                </div>

              </div>
            </div>

          </motion.div>

        </motion.div>

        {/* Scroll Indicator */}
        <div className="mt-10 sm:mt-12 text-center">
          <a
            href="#about"
            className="inline-flex flex-col items-center gap-1 text-slate-500 hover:text-cyan-400 transition-colors"
            aria-label="Scroll to content"
          >
            <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-indigo-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
