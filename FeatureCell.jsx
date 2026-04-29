import React from 'react';
import { motion } from 'framer-motion';

export default function FeatureCell({ icon: Icon, label, value, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="relative bg-graphite border border-border p-6 hover:border-sulfur/40 transition-all duration-300 group overflow-hidden"
    >
      {/* Corner cuts */}
      <div className="absolute top-0 left-0 w-0 h-0 border-t-[20px] border-t-sulfur/20 border-r-[20px] border-r-transparent" />
      <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[20px] border-b-sulfur/10 border-l-[20px] border-l-transparent" />

      {/* Hover glow */}
      <div className="absolute inset-0 bg-sulfur/0 group-hover:bg-sulfur/[0.03] transition-all duration-300" />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="p-2 border border-sulfur/20 bg-sulfur/5 group-hover:border-sulfur/50 group-hover:bg-sulfur/10 transition-all duration-300">
            <Icon className="w-4 h-4 text-sulfur" />
          </div>
          <div className="w-1 h-1 bg-sulfur/30 group-hover:bg-sulfur animate-pulse transition-colors" />
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50 mb-1">
          {label}
        </div>
        <div className="font-heading text-2xl font-bold text-foreground group-hover:text-sulfur transition-colors duration-300">
          {value}
        </div>
      </div>
    </motion.div>
  );
}
