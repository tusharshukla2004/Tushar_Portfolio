import React from 'react';
import { Calendar, MapPin, Check, Building2 } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-16 sm:py-20 relative overflow-hidden bg-[#0a0f1d]">
      
      {/* Background ambient light */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[400px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          number="03"
          tag="Work History"
          title="Industry Experience &"
          highlightedWord="Internships"
          description="Proven delivery track record across product engineering, e-commerce scale, and collaborative team environments."
        />

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Connecting Line */}
          <div className="hidden sm:block absolute left-8 top-4 bottom-4 w-[1px] bg-slate-800" />

          <div className="space-y-8">
            {experience.map((item, idx) => {
              const isCurrent = item.status === 'Current';

              return (
                <div key={idx} className="relative sm:pl-20 group">
                  {/* Timeline Node Dot */}
                  <div className="hidden sm:flex absolute left-8 top-6 -translate-x-1/2 w-6 h-6 rounded-full bg-[#0a0f1d] border border-indigo-500/40 items-center justify-center shadow-lg group-hover:border-cyan-400 transition-colors z-10">
                    <div className={`w-2 h-2 rounded-full ${isCurrent ? 'bg-emerald-400 animate-ping' : 'bg-indigo-400'}`} />
                  </div>

                  {/* Main Card with Subtle Border Motion */}
                  <div className="beam-container shadow-xl shadow-indigo-950/20">
                    <div className="beam-border-subtle" />
                    <div className="relative rounded-[1.2rem] bg-[#0d1424] border border-indigo-500/20 p-6 sm:p-8 transition-colors group-hover:border-indigo-500/40">
                      
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 border-b border-slate-800 pb-4 mb-4">
                        <div>
                          <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                            <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                              {item.role}
                            </h3>
                            {isCurrent ? (
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 shadow-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                Current
                              </span>
                            ) : (
                              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono text-indigo-300 bg-indigo-950/50 border border-indigo-500/25">
                                {item.type}
                              </span>
                            )}
                          </div>

                          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-medium text-slate-300">
                            <span className="flex items-center gap-1.5 text-white font-semibold">
                              <Building2 className="w-4 h-4 text-cyan-400" />
                              {item.company}
                            </span>
                            <span className="text-slate-600">•</span>
                            <span className="flex items-center gap-1.5 text-slate-400">
                              <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                              {item.location}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-300 bg-indigo-950/60 px-3 py-1.5 rounded-xl border border-indigo-500/30 w-fit">
                          <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      {/* Bullet Points */}
                      <ul className="space-y-2.5 mb-5">
                        {item.points.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                            <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-slate-800">
                        <span className="text-[11px] font-mono text-slate-400 mr-1">Stack:</span>
                        {item.skillsUsed.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded text-[11px] font-mono bg-indigo-950/40 text-indigo-300 border border-indigo-500/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
