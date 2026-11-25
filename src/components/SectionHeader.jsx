import React from 'react';
import { motion } from 'framer-motion';

export default function SectionHeader({ number, tag, title, highlightedWord, description, align = "center" }) {
  const isCenter = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`max-w-3xl ${isCenter ? 'mx-auto text-center' : 'text-left'} space-y-2 mb-6 sm:mb-8`}
    >
      {/* Category Tag with Numbering */}
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/40 border border-indigo-500/25 text-[11px] font-mono tracking-wider text-indigo-300 shadow-sm shadow-indigo-950/50`}>
        <span className="text-cyan-400 font-bold">{number}</span>
        <span className="text-indigo-500/50">/</span>
        <span className="uppercase text-indigo-200 font-medium">{tag}</span>
      </div>

      {/* Main Heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
        {title}{' '}
        {highlightedWord && (
          <span className="text-gradient-accent underline decoration-indigo-500/40 decoration-2 underline-offset-8">
            {highlightedWord}
          </span>
        )}
      </h2>

      {/* Subtitle / Description */}
      {description && (
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
}
