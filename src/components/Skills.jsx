import React, { useState } from 'react';
import { 
  Code2, 
  Layout, 
  Server, 
  Sparkles, 
  Wrench, 
  Check, 
  Cpu, 
  Layers 
} from 'lucide-react';
import SectionHeader from './SectionHeader';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { categories } = portfolioData.skills;
  const [activeCategory, setActiveCategory] = useState('all');

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Code2': return Code2;
      case 'Layout': return Layout;
      case 'Server': return Server;
      case 'Sparkles': return Sparkles;
      case 'Wrench': return Wrench;
      default: return Layers;
    }
  };

  const filteredCategories = activeCategory === 'all' 
    ? categories 
    : categories.filter(c => c.id === activeCategory);

  return (
    <section id="skills" className="py-10 sm:py-14 relative overflow-hidden bg-[#080c14]">
      
      {/* Background ambient light */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[400px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[400px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          number="02"
          tag="Technical Arsenal"
          title="Skills, Tools &"
          highlightedWord="Specializations"
          description="Disciplined stack encompassing modern reactive frontends, resilient backend APIs, and cutting-edge GenAI vector implementations."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6 sm:mb-8">
          <div className="p-1 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-wrap items-center gap-1 shadow-inner shadow-indigo-950/20">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                activeCategory === 'all'
                  ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-bold shadow-md shadow-indigo-500/30'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Disciplines
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-bold shadow-md shadow-indigo-500/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const Icon = getIcon(category.icon);
            return (
              <div
                key={category.id}
                className="beam-container group shadow-lg shadow-indigo-950/20"
              >
                <div className="beam-border-subtle" />
                <div className="relative rounded-[1.2rem] bg-[#0d1424] border border-indigo-500/20 p-6 h-full flex flex-col justify-between transition-colors group-hover:border-indigo-500/40">
                  <div>
                    {/* Category Header */}
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-indigo-500/30 flex items-center justify-center text-cyan-300">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h3 className="font-bold text-white text-sm sm:text-base">
                          {category.title}
                        </h3>
                      </div>
                      <span className="text-[11px] font-mono text-cyan-300 bg-indigo-950/60 px-2 py-0.5 rounded border border-indigo-500/30">
                        {category.items.length}
                      </span>
                    </div>

                    {/* Skills List */}
                    <div className="space-y-2.5">
                      {category.items.map((skill, sIdx) => (
                        <div
                          key={sIdx}
                          className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between transition-all hover:border-indigo-500/30 hover:bg-slate-900"
                        >
                          <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                            <span className="text-xs sm:text-sm font-medium text-slate-200">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950/40 text-indigo-300 border border-indigo-500/20">
                            {skill.badge}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                    <span>Proficiency</span>
                    <span className="text-emerald-400 font-semibold">Production Ready</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Specialized AI Banner */}
        <div className="mt-12 rounded-2xl bg-gradient-to-r from-[#0d1424] to-[#0f172a] border border-indigo-500/30 p-8 shadow-xl shadow-indigo-950/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-indigo-500/40 flex items-center justify-center text-cyan-300 flex-shrink-0 shadow-md shadow-indigo-500/20">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                  <span>Generative AI & Vector Search Capabilities</span>
                  <span className="text-[10px] font-mono font-normal px-2 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300">
                    Cutting Edge
                  </span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-400">
                  Engineering RAG architectures, prompt injection defenses, Pinecone vector search, and Gemini / OpenAI API integration.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 justify-center md:justify-end font-mono">
              <span className="px-3 py-1 rounded-lg bg-indigo-950/60 border border-indigo-500/30 text-indigo-200 text-xs shadow-sm">
                Google Gemini API
              </span>
              <span className="px-3 py-1 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-cyan-200 text-xs shadow-sm">
                Pinecone DB
              </span>
              <span className="px-3 py-1 rounded-lg bg-indigo-950/60 border border-indigo-500/30 text-indigo-200 text-xs shadow-sm">
                RAG Architecture
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
