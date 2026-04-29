import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import TopBar from './TopBar';
import StatusFooter from './StatusFooter';
import CommandPalette from './CommandPalette';
import ExecutionPulse from './ExecutionPulse';
import GlobalChat from '../chat/GlobalChat';
import CustomCursor from '../ui/CustomCursor';

export default function AppLayout() {
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setPaletteOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <div className="min-h-screen bg-obsidian text-foreground">
      <CustomCursor />
      <ExecutionPulse />
      <TopBar onOpenPalette={() => setPaletteOpen(true)} />
      <CommandPalette isOpen={paletteOpen} onClose={() => setPaletteOpen(false)} />
      <main className="pt-12 pb-8 relative z-10">
        <Outlet />
      </main>
      <StatusFooter />
      <GlobalChat />
    </div>
 
