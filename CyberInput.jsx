import React from 'react';

export default function CyberInput({
  label,
  sublabel,
  error,
  className = '',
  cyan = false,
  textarea = false,
  rows = 4,
  ...props
}) {
  const Tag = textarea ? 'textarea' : 'input';
  const focusClass = cyan ? 'neon-input-cyan' : 'neon-input';

  return (
    <div className={`space-y-1.5 ${className}`}>
      {label && (
        <div className="flex items-center justify-between">
          <label className="font-label text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
            {label}
          </label>
          {sublabel && (
            <span className="font-mono text-[10px] text-muted-foreground/40">{sublabel}</span>
          )}
        </div>
      )}
      <div className="relative">
        {/* Corner brackets */}
        <span className="absolute top-0 left-0 w-2.5 h-2.5 border-t border-l border-sulfur/30 pointer-events-none z-10" />
        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 border-b border-r border-sulfur/30 pointer-events-none z-10" />
        <Tag
          rows={textarea ? rows : undefined}
          className={`
            w-full bg-obsidian border border-border
            px-3 py-2.5 font-mono text-sm text-foreground
            placeholder:text-muted-foreground/30
            transition-all duration-200
            ${focusClass}
            ${textarea ? 'resize-none' : ''}
          `}
          {...props}
        />
      </div>
      {error && (
        <p className="font-mono text-[11px] text-signal_red">{error}</p>
      )}
    </div>
  );
}
