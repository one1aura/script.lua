import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Shield, Zap, Users, ExternalLink, Code, Target } from 'lucide-react';
import MatrixRain from '../components/ui/MatrixRain';

const TEAM = [
  {
    handle: '+1 aura',
    role: 'Founder & Lead Developer',
    desc: 'Builder of Syntax Override. Architect of the platform, design system, and script library.',
  },
];

const FEATURES = [
  { icon: Code,    label: 'Script Library',    desc: 'Hundreds of Lua scripts for Roblox, searchable and filterable.' },
  { icon: Terminal, label: 'Live Terminal',    desc: 'Validate Lua, Python, and Bash commands before executing.' },
  { icon: Shield,  label: 'Status Tracking',   desc: 'Every script is marked Working, Patched, or Testing in real-time.' },
  { icon: Zap,     label: 'Fast Injection',    desc: 'Scripts are categorised by key type and risk level for quick deployment.' },
  { icon: Users,   label: 'Community',          desc: 'Global chat, user profiles, and Discord for the community.' },
  { icon: Target,  label: 'Script Upload',      desc: 'Submit your own scripts through the 3-step upload system.' },
];

export default function About() {
  return (
    <div className="min-h-screen px-4 sm:px-6 pt-10 pb-24 relative">
      <div className="fixed inset-0 pointer-events-none z-0">
        <MatrixRain />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="mb-12">
          <div className="font-label text-[11px] uppercase tracking-[0.2em] text-sulfur mb-2 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-sulfur inline-block animate-pulse" />
            // ABOUT_SYNTAX_OVERRIDE
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold uppercase tracking-tight text-foreground mb-4">
            WHAT IS <span className="text-sulfur text-glow-sulfur">SYNTAX OVERRIDE</span>?
          </h1>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed max-w-2xl">
            Syntax Override is an advanced Lua script platform built for the Roblox ecosystem.
            It hosts precision-crafted exploit scripts, provides a live terminal validator,
            and connects a community of developers pushing the limits of what's possible in Roblox.
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }} className="mb-10">
          <div className="border border-sulfur/30 bg-graphite p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sulfur/60 to-transparent" />
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-sulfur/50" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-sulfur/50" />
            <div className="font-label text-[10px] uppercase tracking-[0.2em] text-sulfur mb-3">// MISSION</div>
            <p className="font-mono text-sm text-foreground leading-relaxed">
              To build the most reliable, community-driven Lua script repository for Roblox —
              where every script is tracked for status, labelled by risk, and available instantly.
              No bloated interfaces, no fake scripts. Just clean execution.
            </p>
          </div>
        </motion.div>

        {/* What we offer */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.15 }} className="mb-10">
          <div className="font-label text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-cyan_trace inline-block" />
            // PLATFORM FEATURES
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
            {FEATURES.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div key={f.label}
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: 0.2 + i * 0.05 }}
                  className="bg-graphite p-5 flex gap-4 items-start hover:bg-obsidian/60 transition-colors">
                  <div className="w-8 h-8 border border-sulfur/30 bg-obsidian flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-sulfur" />
                  </div>
                  <div>
                    <div className="font-heading text-xs font-bold uppercase tracking-widest text-foreground mb-1">{f.label}</div>
                    <div className="font-mono text-[11px] text-muted-foreground leading-relaxed">{f.desc}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.3 }} className="mb-10">
          <div className="font-label text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-sulfur inline-block" />
            // THE TEAM
          </div>
          <div className="space-y-3">
            {TEAM.map((member) => (
              <div key={member.handle} className="border border-border bg-graphite p-5 flex items-center gap-5 hover:border-sulfur/30 transition-colors">
                <div className="w-12 h-12 border-2 border-sulfur/40 bg-obsidian flex items-center justify-center shrink-0">
                  <Terminal className="w-5 h-5 text-sulfur" />
                </div>
                <div>
                  <div className="font-heading text-sm font-bold uppercase tracking-tight text-sulfur">{member.handle}</div>
                  <div className="font-label text-[10px] uppercase tracking-widest text-muted-foreground mt-0.5">{member.role}</div>
                  <div className="font-mono text-xs text-muted-foreground/70 mt-1">{member.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Discord CTA */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.35 }}>
          <div className="border border-cyan_trace/30 bg-graphite p-8 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan_trace/60 to-transparent" />
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-cyan_trace/40" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-cyan_trace/40" />
            <Users className="w-8 h-8 text-cyan_trace mx-auto mb-3" />
            <h2 className="font-heading text-lg font-bold uppercase tracking-tight text-foreground mb-2">
              JOIN THE <span className="text-cyan_trace">COMMUNITY</span>
            </h2>
            <p className="font-mono text-xs text-muted-foreground mb-6 max-w-sm mx-auto">
              Get early access to new scripts, report patched ones, suggest features, and connect with other developers.
            </p>
            <a
              href="https://discord.gg/MxtngkPNzy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 border border-cyan_trace text-cyan_trace font-heading text-xs font-bold uppercase tracking-widest hover:bg-cyan_trace hover:text-obsidian transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]"
            >
              <ExternalLink className="w-4 h-4" />
              JOIN DISCORD
            </a>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
