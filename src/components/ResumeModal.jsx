import React, { useEffect } from 'react';
import { X, Printer, Phone, Mail } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const { personal, experience, projects, skills, education } = portfolioData;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0d1424] border border-indigo-500/30 rounded-2xl shadow-2xl shadow-indigo-950/60 overflow-hidden flex flex-col z-10 my-auto">
        
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#090e1c] border-b border-indigo-500/20">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-white font-mono">Tushar Shukla – Resume</span>
            <span className="hidden sm:inline-block text-[11px] font-mono text-cyan-300 bg-indigo-950/70 px-2 py-0.5 rounded border border-indigo-500/30">
              ATS Compliant
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-indigo-500 to-cyan-500 text-white hover:opacity-90 text-xs font-semibold transition-all shadow-md shadow-indigo-500/20"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Content */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-slate-200 font-sans print:p-0 print:bg-white print:text-black">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-center gap-5 pb-6 border-b border-slate-800">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-indigo-500/30 flex-shrink-0 shadow-lg shadow-indigo-950/40">
              <img
                src={personal.avatar || "/profile.jpg"}
                alt={personal.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-center sm:text-left flex-1">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {personal.name}
              </h1>
              <p className="text-xs sm:text-sm text-cyan-400 font-medium mt-0.5 font-mono">
                {personal.role} • {personal.location}
              </p>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs text-slate-300 font-mono mt-2">
                <span className="flex items-center gap-1">
                  <Phone className="w-3 h-3 text-indigo-400" /> {personal.phone}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3 h-3 text-indigo-400" /> {personal.email}
                </span>
                <span>•</span>
                <a href={personal.linkedin} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">
                  LinkedIn
                </a>
                <span>•</span>
                <a href={personal.github} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-2 border-b border-indigo-500/20 pb-1">
              Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Full Stack Developer skilled in MERN stack, building scalable web applications, REST APIs, and responsive interfaces. Experienced in AI integration, LLMs, RAG architecture, and vector search technologies. Passionate about combining Full Stack Development and AI to build intelligent and innovative solutions.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-2 border-b border-indigo-500/20 pb-1">
              Technical Skills
            </h2>
            <div className="text-xs sm:text-sm space-y-1.5 text-slate-300 font-mono">
              <p><strong className="text-white">Languages:</strong> C/C++(DSA), JavaScript(ES6+), SQL</p>
              <p><strong className="text-white">Frontend:</strong> React.js, Redux Toolkit, Zustand, Context API, HTML5, CSS3, Tailwind CSS</p>
              <p><strong className="text-white">Backend & Databases:</strong> Node.js, Express.js, MongoDB, MySQL, RESTful APIs, WebSockets(Socket.io)</p>
              <p><strong className="text-white">AI & Vector Search:</strong> RAG Architecture, LLM Integration (Gemini/OpenAI), Pinecone, Vector Embeddings</p>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-3 border-b border-indigo-500/20 pb-1">
              Experience
            </h2>
            <div className="space-y-4">
              {experience.map((exp, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                    <span className="font-bold text-white">{exp.role}</span>
                    <span className="font-mono text-xs text-zinc-400">{exp.period}</span>
                  </div>
                  <div className="text-xs text-zinc-400 font-semibold italic">
                    {exp.company}, {exp.location}
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-zinc-300 pt-1">
                    {exp.points.map((p, pIdx) => (
                      <li key={pIdx} className="leading-relaxed">{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-3 border-b border-indigo-500/20 pb-1">
              Projects
            </h2>
            <div className="space-y-4">
              {projects.map((proj, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                    <span className="font-bold text-white">{proj.title}</span>
                    <span className="text-[11px] font-mono text-cyan-300">{proj.tags.slice(0, 4).join(', ')}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-slate-300 pt-1">
                    {proj.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="leading-relaxed">{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-3 border-b border-indigo-500/20 pb-1">
              Education
            </h2>
            <div className="space-y-3">
              {education.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                  <div>
                    <span className="font-bold text-white">{edu.institution}</span>
                    <p className="text-xs text-slate-400">{edu.degree} - {edu.field}</p>
                  </div>
                  <div className="text-left sm:text-right font-mono text-xs mt-1 sm:mt-0">
                    <span className="text-cyan-300 font-semibold">{edu.score}</span>
                    <p className="text-slate-500">{edu.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
