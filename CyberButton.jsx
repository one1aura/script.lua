import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  sulfur: 'bg-sulfur text-obsidian border-sulfur hover:shadow-[0_0_20px_rgba(230,255,0,0.5)] hover:bg-[#f0ff1a]',
  cyan:   'bg-transparent text-cyan_trace border-cyan_trace hover:bg-cyan_trace/10 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]',
  red:    'bg-transparent text-signal_red border-signal_red hover:bg-signal_red/10 hover:shadow-[0_0_20px_rgba(255,77,77,0.3)]',
  ghost:  'bg-transparent text-foreground border-border hover:border-sulfur/50 hover:text-sulfur',
};

export default function CyberButton({
  children,
  variant = 'sulfur',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  icon: Icon,
}) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileTap={{ scale: 0.97 }}
      className={`
        relative inline-flex items-center justify-center gap-2
        px-5 py-2.5 border font-heading text-xs font-bold uppercase tracking-widest
        transition-all duration-200 overflow-hidden
        disabled:opacity-40 disabled:cursor-not-allowed
        ${variants[variant]}
        ${className}
      `}
    >
      {/* Corner accents */}
      <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-current opacity-60" />
      <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-current opacity-60" />
      {Icon && React.createElement(Icon, { className: "w-3.5 h-3.5 shrink-0" })}
      {children}
    </motion.button>
  );
}
