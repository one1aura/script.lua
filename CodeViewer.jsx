import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export default function CodeViewer({ code, title }) {
  const [copied, setCopied] = useState(false);
  const lines = (code || '').split('\n');

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success('Code copied to clipboard');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="border border-border bg-obsidian relative h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-graphite shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-signal_red" />
          <div className="w-2 h-2 bg-sulfur" />
          <div className="w-2 h-2 bg-cyan_trace" />
        </div>
        <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
          {title || 'script.lua'}
        </span>
        <span className="font-mono text-[10px] text-muted-foreground">
          {lines.length} lines
        </span>
      </div>

      {/* Code */}
      <div className="flex-1 overflow-auto p-4 font-mono text-sm leading-[1.7]">
        {lines.map((line, idx) => (
          <div key={idx} className="flex hover:bg-sulfur/[0.03] transition-colors">
            <span className="w-10 text-right mr-4 text-muted-foreground/25 select-none text-xs leading-[1.7] shrink-0">
              {idx + 1}
            </span>
            <span className="text-foreground whitespace-pre">{line}</span>
          </div>
        ))}
      </div>

      {/* Copy button - anchored bottom right */}
      <div className="absolute bottom-4 right-4">
        <Button
          onClick={handleCopy}
          className="bg-sulfur text-obsidian hover:bg-sulfur/90 font-mono text-xs uppercase tracking-wider gap-2"
        >
          {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
          {copied ? 'COPIED' : 'COPY CODE'}
        </Button>
      </div>
    </div>
  );
}
