import React, { useState, useEffect } from 'react';
import { Activity, Zap, Globe, Radio } from 'lucide-react';

export default function StatusFooter() {
  const [latency, setLatency] = useState(12);
  const [tick, setTick] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(Math.floor(Math.random() * 8) + 8);
      setTick(t => !t);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 h-7 bg-obsidian/98 border-t border-sulfur/15">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sulfur/30 to-transparent" />
      <div className="h-full flex items-center justify-between px-4 font-mono text-[10px] tracking-widest overflow-hidden">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-sulfur/80">
            <Activity className="w-2.5 h-2.5" />
            <span className="text-muted-foreground/40">SCRIPTS:</span>
            <span className="text-sulfur">1,402</span>
          </span>
          <span className="text-border/40">|</span>
          <span className="flex items-center gap-1.5 text-cyan_trace/80">
 
