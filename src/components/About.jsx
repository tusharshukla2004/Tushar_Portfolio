import React from 'react';
import { motion } from 'framer-motion';
import { Code2, BrainCircuit, Users2, Check, ArrowRight } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { personal } = portfolioData;

  const pillars = [
    {
      number: "01",
      icon: Code2,
      title: "Full-Stack Web Engineering",
      description: "Developing scalable, production-grade applications using the MERN stack with modular component hierarchies, strict typing, and high-throughput REST APIs.",
    },
    {
      number: "02",
      icon: BrainCircuit,
      title: "Generative AI & RAG",
      description: "Engineering contextual Retrieval-Augmented Generation (RAG) pipelines, integrating Google Gemini and OpenAI LLMs, and indexing vector embeddings with Pinecone.",
    },
    {
      number: "03",
      icon: Users2,
      title: "Team Execution & Agile",
      description: "Demonstrated track record contributing across 3 engineering teams (Star Chain Labs, New Rise Technosys, ZenExim) with Git workflows, code reviews, and fast release cycles.",
    }
  ];

  const competencies = [
    "MERN Stack (MongoDB, Express.js, React.js, Node.js)",
    "RAG Architecture & Vector Search (Pinecone)",
    "Secure JWT Authentication & Role-Based Access Control",
    "Payment Gateway Integrations (Razorpay)",
    "Data Structures & Algorithms in C / C++",
    "Current Trainee at Star Chain Labs development team"
  ];

  return (
    <section id="about" className="py-28 relative overflow-hidden bg-[#0a0f1d]">
      
      {/* Subtle ambient light */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <SectionHeader
          number="01"
          tag="Engineering Philosophy"
          title="Bridging Robust Systems With"
          highlightedWord="Artificial Intelligence"
          description="Crafting deterministic software architectures while expanding the boundaries of what web applications can achieve through intelligent LLM automation."
        />

        {/* 3 Pillars Grid with subtle card border motion */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="beam-container group shadow-lg shadow-indigo-950/20"
              >
                <div className="beam-border-subtle" />
                <div className="relative rounded-[1.2rem] bg-[#0d1424] border border-indigo-500/20 p-8 h-full flex flex-col justify-between transition-colors group-hover:border-indigo-500/40">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-indigo-500/30 flex items-center justify-center text-cyan-300 group-hover:border-cyan-400 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs text-indigo-400 font-bold">{pillar.number}</span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>Engineering Focus</span>
                    <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Active
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Narrative & Profile Showcase */}
        <div className="rounded-2xl bg-[#0d1424]/90 border border-indigo-500/20 p-6 sm:p-10 shadow-xl shadow-indigo-950/30 backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            {/* Left: Professional Portrait Card */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="beam-container w-full max-w-sm shadow-2xl shadow-indigo-950/50">
                <div className="beam-border-subtle" />
                <div className="relative rounded-[1.2rem] bg-[#090e1c] border border-indigo-500/30 p-3 overflow-hidden">
                  <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden group">
                    <img
                      src={personal.avatar || "/profile.jpg"}
                      alt={personal.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-transparent to-transparent opacity-85" />
                    
                    {/* Floating pill badge */}
                    <div className="absolute top-3 right-3">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-[#080c14]/90 border border-emerald-500/40 text-emerald-300 backdrop-blur-md shadow-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Available for Hire
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 space-y-1">
                      <div className="text-sm font-bold text-white font-mono flex items-center justify-between">
                        <span>{personal.name}</span>
                        <span className="text-xs text-cyan-300 font-normal">Full Stack + AI</span>
                      </div>
                      <p className="text-[11px] text-slate-400 font-mono">
                        Trainee @ Star Chain Labs
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 px-1 flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>📍 Bhopal, MP</span>
                    <span className="text-cyan-400 font-semibold">B.Tech CSE '26</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Bio narrative & Competencies */}
            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                  <span>Engineering Background & Trajectory</span>
                </h3>
                {personal.about.map((paragraph, idx) => (
                  <p key={idx} className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Competencies Checklist */}
              <div className="bg-[#080d1a] rounded-xl p-5 sm:p-6 border border-indigo-500/20 space-y-3 shadow-inner">
                <div className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider pb-2 border-b border-slate-800 flex items-center justify-between">
                  <span>Core Competencies</span>
                  <span className="text-emerald-400 font-semibold text-[11px]">✓ Verified</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {competencies.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
