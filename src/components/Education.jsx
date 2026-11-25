import React from 'react';
import { GraduationCap, Award, MapPin, Calendar } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-16 sm:py-20 relative overflow-hidden bg-[#0a0f1d]">
      
      {/* Background ambient light */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[350px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          number="05"
          tag="Academics"
          title="Formal Education &"
          highlightedWord="Degrees"
          description="Rigorous theoretical foundations in Computer Science & Engineering, algorithms, mathematics, and systems design."
        />

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {education.map((item, idx) => (
            <div
              key={idx}
              className="beam-container group shadow-xl shadow-indigo-950/20"
            >
              <div className="beam-border-subtle" />
              <div className="relative rounded-[1.2rem] bg-[#0d1424] border border-indigo-500/20 p-8 h-full flex flex-col justify-between transition-colors group-hover:border-indigo-500/40">
                <div>
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-indigo-500/30 flex items-center justify-center text-cyan-300">
                      <GraduationCap className="w-5 h-5" />
                    </div>

                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-sm shadow-indigo-500/20">
                      <Award className="w-3.5 h-3.5" />
                      {item.score}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.institution}
                  </h3>

                  <div className="text-xs sm:text-sm font-mono text-cyan-300 mt-1">
                    {item.degree} • <span className="text-slate-400">{item.field}</span>
                  </div>

                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 font-mono mt-3 pb-4 border-b border-slate-800">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                      {item.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                      {item.duration}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mt-4 font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-500 text-[11px]">{item.type}</span>
                  <span className="text-emerald-400 font-semibold text-[11px]">✓ Verified Academic Track</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
