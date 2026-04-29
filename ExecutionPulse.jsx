import React from 'react';

export default function ExecutionPulse() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Scanning line */}
      <div className="execution-pulse absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-sulfur/25 to-transparent shadow-[0_0_8px_rgba(230,255,0,0.4)]" />

      {/* Grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right,  rgba(230,255,0,0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(230,255,0,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '8.33% 80px',
        }}
      />

      {/* Corner vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(8,8,10,0.6)_100%)]" />

      {/* Scanlines */}
      <div className="absolute inset-0 scanlines" />
    </div>
  );
}
