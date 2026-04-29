import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, Terminal, BookOpen, Clock, Home, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { label: 'COMMAND CENTER', path: '/', icon: Home, desc: 'Main interface' },
  { label: 'LIBRARY MATRIX', path: '/library', icon: BookOpen, desc: 'Script repository' },
  { label: 'TELEMETRY FEED', path: '/changelog', icon: Clock, desc: 'Updates & status' },
  { label: 'SITE RULES', path: '/rules', icon: Shield, desc: 'Community rules & guidelines' },
  { label: 'TERMINAL SCRIPTS', path: '/terminal', icon: Terminal, desc: 'Terminal-only scripts' },
  { label: 'ABOUT', path: '/about', icon: Terminal, desc: 'About Syntax Override' },
];

export default function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  const filtered = NAV_ITEMS.filter(item =>
    item.label.toLowerCase().includes(query.toLowerCase()) ||
 
