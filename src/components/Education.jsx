import React, { useState } from 'react';
import { 
  GraduationCap, 
  Award, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  Workflow, 
  ShieldCheck, 
  BookOpen, 
  Building2,
  Sparkles,
  School
} from 'lucide-react';
import SectionHeader from './SectionHeader';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;
  const [activeTab, setActiveTab] = useState('all');

  const filteredEducation = activeTab === 'all'
    ? education
    : activeTab === 'undergraduate'
    ? education.filter(e => e.type === 'Undergraduate')
    : education.filter(e => e.type === 'Schooling');

  return (
    <section id="education" className="py-10 sm:py-14 relative overflow-hidden bg-transparent">
      
      {/* Background Architectural Patterns */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />

      {/* Dynamic Colored Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-indigo-600/15 via-purple-600/10 to-cyan-500/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          number="05"
          tag="Academics"
          title="Formal Education &"
          highlightedWord="Degrees"
          description="Rigorous theoretical foundations in Computer Science & Engineering, algorithms, mathematics, and systems design."
        />

        {/* Filter Navigation Tabs */}
        <div className="flex items-center justify-center gap-2 mb-6 sm:mb-8">
          <div className="p-1 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-1 shadow-inner shadow-indigo-950/20">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-bold shadow-md shadow-indigo-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Qualifications ({education.length})
            </button>
            <button
              onClick={() => setActiveTab('undergraduate')}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                activeTab === 'undergraduate'
                  ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-bold shadow-md shadow-indigo-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              B.Tech (CSE)
            </button>
            <button
              onClick={() => setActiveTab('schooling')}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                activeTab === 'schooling'
                  ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-bold shadow-md shadow-indigo-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Senior Secondary (PCM)
            </button>
          </div>
        </div>

        {/* Education Showcase Cards Container */}
        <div className="space-y-12">
          {filteredEducation.map((item) => (
            <div key={item.id} className="beam-container shadow-2xl shadow-indigo-950/40">
              {/* Animated Rotating Border Beam */}
              <div className="beam-border" />

              {/* Inner Luxury Carbon Card */}
              <div className="relative rounded-[1.2rem] bg-[#0d1424] border border-indigo-500/30 p-8 sm:p-10 lg:p-12 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Left Column: Academic Info & Curriculum Pipeline */}
                  <div className="lg:col-span-7 space-y-6">
                    
                    {/* Top Badges */}
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-sm shadow-indigo-500/30 flex items-center gap-1.5">
                        {item.type === 'Undergraduate' ? (
                          <GraduationCap className="w-3.5 h-3.5" />
                        ) : (
                          <School className="w-3.5 h-3.5" />
                        )}
                        {item.badge}
                      </span>

                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-emerald-300 bg-emerald-950/60 border border-emerald-500/40">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                        </span>
                        <span className="font-semibold">{item.status}</span>
                      </span>

                      <span className="px-3 py-1 rounded-full text-xs font-mono text-cyan-300 bg-indigo-950/60 border border-indigo-500/30">
                        {item.score}
                      </span>
                    </div>

                    {/* Titles */}
                    <div className="space-y-2">
                      <h3 className="text-2xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-100 to-cyan-200 tracking-tight">
                        {item.institution}
                      </h3>
                      <p className="text-sm sm:text-base font-mono text-cyan-400 font-medium">
                        {item.degree} • <span className="text-slate-300">{item.field}</span>
                      </p>
                      
                      {/* Meta pills: Location, Duration, Affiliation */}
                      <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400 pt-1">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                          {item.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                          {item.duration}
                        </span>
                        <span className="flex items-center gap-1.5 text-slate-400">
                          <Building2 className="w-3.5 h-3.5 text-indigo-400" />
                          {item.affiliation}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                      {item.description}
                    </p>

                    {/* Academic Curriculum Pipeline (Matches Project Architecture 3-Step) */}
                    <div className="p-4 rounded-xl bg-[#090e1c] border border-indigo-500/20 space-y-2 font-mono text-xs text-slate-300">
                      <div className="flex items-center gap-2 text-cyan-300 font-semibold text-[11px] uppercase tracking-wider mb-2">
                        <Workflow className="w-3.5 h-3.5 text-indigo-400" />
                        <span>Curriculum & Knowledge Pipeline</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px]">
                        {item.pipeline.map((step, pIdx) => (
                          <div key={pIdx} className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                            <span className={`${
                              pIdx === 0 ? 'text-cyan-400' : pIdx === 1 ? 'text-indigo-400' : 'text-emerald-400'
                            } font-bold block`}>
                              {step.step}
                            </span>
                            <span className="text-slate-300">{step.desc}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Coursework & Domain Badges */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {item.courses.map((course, cIdx) => (
                        <span
                          key={cIdx}
                          className="px-3 py-1 rounded-lg text-xs font-mono bg-indigo-950/40 text-indigo-200 border border-indigo-500/25"
                        >
                          {course}
                        </span>
                      ))}
                    </div>

                    {/* Action / Verified Credentials Footer */}
                    <div className="flex flex-wrap items-center gap-4 pt-3">
                      <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900/90 border border-indigo-500/30 text-slate-200 font-semibold text-xs">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span>Institutional Verification Verified</span>
                      </div>
                      <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        {item.type === 'Undergraduate' ? 'Accredited B.Tech Degree Track' : 'Official UP Board High Distinction'}
                      </span>
                    </div>

                  </div>

                  {/* Right Column: Simulated Live Academic Telemetry & Performance Console */}
                  <div className="lg:col-span-5">
                    <div className="rounded-2xl bg-[#090e1c] border border-indigo-500/30 p-6 space-y-4 font-mono shadow-2xl shadow-indigo-950/40">
                      
                      {/* Telemetry Header */}
                      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                        <div className="flex items-center gap-2 text-xs text-slate-200 font-semibold">
                          <BookOpen className="w-4 h-4 text-cyan-400 animate-pulse" />
                          <span>Academic Standing & Performance</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[10px] text-emerald-300 bg-emerald-950/70 px-2 py-0.5 rounded border border-emerald-500/30">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                          <span>{item.type === 'Undergraduate' ? 'University Active' : 'Conferred'}</span>
                        </div>
                      </div>

                      {/* Main Metric Highlight Box */}
                      <div className="p-4 rounded-xl bg-[#0c1324] border border-indigo-500/30 flex items-center justify-between shadow-inner">
                        <div>
                          <span className="text-[11px] text-slate-400 uppercase tracking-wider block">
                            {item.scoreLabel}
                          </span>
                          <span className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-200 to-indigo-200">
                            {item.score}
                          </span>
                          <span className="text-[10px] text-slate-400 block mt-0.5">
                            {item.standing}
                          </span>
                        </div>
                        <div className="w-12 h-12 rounded-full border-2 border-emerald-400/80 bg-emerald-950/40 flex items-center justify-center font-bold text-sm text-emerald-300 shadow-md shadow-emerald-500/20">
                          <Award className="w-6 h-6 text-emerald-400" />
                        </div>
                      </div>

                      {/* 3 Academic Metrics Grid */}
                      <div className="grid grid-cols-3 gap-2 text-center text-xs">
                        {item.metrics.map((m, mIdx) => (
                          <div key={mIdx} className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                            <span className="text-slate-400 text-[10px] block">{m.label}</span>
                            <span className="text-slate-200 font-bold text-[11px] mt-0.5 block truncate">
                              {m.value}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Academic Highlights Checklist */}
                      <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-2 text-[11px] text-slate-300">
                        <div className="text-cyan-400 font-bold text-[10px] uppercase tracking-wider flex items-center gap-1.5">
                          <Sparkles className="w-3 h-3 text-cyan-400" />
                          <span>Scholastic Highlights</span>
                        </div>
                        {item.highlights.map((highlight, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span className="leading-tight">{highlight}</span>
                          </div>
                        ))}
                      </div>

                      {/* Status Verification Pill */}
                      <div className="flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800/80 pt-3">
                        <span className="flex items-center gap-1.5 text-cyan-300">
                          <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                          <span>Institutional Registry Verified</span>
                        </span>
                        <span className="font-mono text-emerald-400 font-bold">100% Authentic</span>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
