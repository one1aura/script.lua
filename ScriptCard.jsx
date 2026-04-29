import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Shield, Cpu, ChevronRight, Terminal, Gamepad2 } from 'lucide-react';

const statusConfig = {
  active:  { label: 'ACTIVE',  cls: 'border-sulfur/40 text-sulfur bg-sulfur/8',              dot: 'bg-sulfur' },
  patched: { label: 'PATCHED', cls: 'border-signal_red/40 text-signal_red bg-signal_red/8',  dot: 'bg-signal_red' },
  testing: { label: 'TESTING', cls: 'border-cyan_trace/40 text-cyan_trace bg-cyan_trace/8',  dot: 'bg-cyan_trace' },
};

const keyTypeConfig = {
  keyless:   { label: '🔓 KEYLESS',   cls: 'text-sulfur border-sulfur/30' },
  key:       { label: '🔑 KEY',       cls: 'text-signal_red border-signal_red/30' },
  universal: { label: '🌐 UNIVERSAL', cls: 'text-cyan_trace border-cyan_trace/30' },
};

const riskConfig = {
  low:    'text-sulfur',
  medium: 'text-yellow-500',
  high:   'text-signal_red',
};

export default function ScriptCard({ script }) {
  const [hovered, setHovered] = useState(false);
  const codeLines = (script.code || '').split('\n').slice(0, 6);
  const status  = statusConfig[script.status]   || statusConfig.active;
 
