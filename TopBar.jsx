import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Terminal, BookOpen, Clock, Shield, MonitorDot, Info, ExternalLink, Menu, X } from 'lucide-react';

const NAV = [
  { to: '/library',   label: 'Library',   icon: BookOpen },
  { to: '/terminal',  label: 'Lua Tools', icon: MonitorDot },
  { to: '/changelog', label: 'Changelog', icon: Clock },
  { to: '/rules',     label: 'Rules',     icon: Shield },
  { to: '/about',     label: 'About',     icon: Info },
];

export default function TopBar({ onOpenPalette }) {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 h-12 bg-obsidian/98 border-b border-sulfur/20" style={{ backdropFilter: 'blur(12px)' }}>
        {/* Animated top scan line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sulfur to-transparent opacity-80" />
        <div className="absolute top-0 left-0 h-px w-1/3 bg-sulfur execution-pulse opacity-40" style={{ animationDuration: '3s' }} />

        <div className="h-full flex items-center justify-between px-4 sm:px-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="relative w-8 h-8 border border-sulfur/60 bg-sulfur/5 flex items-center justify-center group-hover:border-sulfur group-hover:bg-sulfur/10 transition-all duration-300" style={{ clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))' }}>
 
