import React, { useState, useEffect, useRef } from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Send, X, ChevronDown, User } from 'lucide-react';
import { format } from 'date-fns';

export default function GlobalChat() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');
  const [user, setUser] = useState(null);
  const bottomRef = useRef(null);
  const queryClient = useQueryClient();

  useEffect(() => {
    base44.auth.me().then(u => setUser(u)).catch(() => {});
  }, []);

  const { data: messages = [] } = useQuery({
    queryKey: ['chat-messages'],
    queryFn: () => base44.entities.ChatMessage.list('created_date', 60),
    refetchInterval: 3000,
  });

  // Real-time subscription
  useEffect(() => {
    const unsub = base44.entities.ChatMessage.subscribe((event) => {
      queryClient.invalidateQueries({ queryKey: ['chat-messages'] });
    });
    return unsub;
  }, [queryClient]);

  useEffect(() => {
    if (open) setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
  }, [open, messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    const username = user?.username || user?.full_name || user?.email?.split('@')[0] || 'ANON';
    await base44.entities.ChatMessage.create({
      text: text.trim(),
      username,
      avatar_url: user?.avatar_url || '',
    });
    queryClient.invalidateQueries({ queryKey: ['chat-messages'] });
    setText('');
  };

  const unread = !open ? messages.length : 0;

  return (
    <>
      {/* Floating toggle button */}
      <button
        onClick={() => setOpen(o => !o)}
        className="fixed bottom-6 right-6 z-[300] w-12 h-12 border border-sulfur bg-obsidian flex items-center justify-center hover:bg-sulfur/10 transition-all hover:shadow-[0_0_20px_rgba(230,255,0,0.3)] group"
      >
        <MessageSquare className="w-5 h-5 text-sulfur group-hover:scale-110 transition-transform" />
        {messages.length > 0 && !open && (
          <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-sulfur text-obsidian font-mono text-[9px] flex items-center justify-center font-bold">
            {Math.min(messages.length, 99)}
          </span>
        )}
      </button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 right-6 z-[300] w-80 sm:w-96 border border-border bg-obsidian flex flex-col shadow-2xl"
            style={{ height: '420px' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-graphite shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="font-heading text-xs font-bold uppercase tracking-widest text-foreground">Global Chat</span>
                <span className="font-mono text-[10px] text-muted-foreground/50">{messages.length} msgs</span>
              </div>
              <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-signal_red transition-colors">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 space-y-3">
              {messages.length === 0 && (
                <div className="text-center py-8">
                  <MessageSquare className="w-6 h-6 text-muted-foreground/20 mx-auto mb-2" />
                  <div className="font-mono text-xs text-muted-foreground/40">NO_MESSAGES_YET</div>
                  <div className="font-mono text-[10px] text-muted-foreground/30 mt-1">Be the first to speak</div>
                </div>
              )}
              {messages.map((msg, i) => {
                const isMe = user && msg.created_by === user.email;
                return (
                  <motion.div key={msg.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
                    className={`flex gap-2 ${isMe ? 'flex-row-reverse' : ''}`}>
                    {/* Avatar */}
                    <div className="shrink-0 w-7 h-7 border border-border bg-graphite flex items-center justify-center overflow-hidden">
                      {msg.avatar_url
                        ? <img src={msg.avatar_url} alt="" className="w-full h-full object-cover" />
                        : <User className="w-3.5 h-3.5 text-muted-foreground/40" />
                      }
                    </div>
                    <div className={`max-w-[75%] ${isMe ? 'items-end' : 'items-start'} flex flex-col gap-0.5`}>
                      <div className="flex items-center gap-2">
                        <span className={`font-mono text-[10px] ${isMe ? 'text-sulfur' : 'text-cyan_trace'}`}>
                          {msg.username || 'ANON'}
                        </span>
                        <span className="font-mono text-[9px] text-muted-foreground/30">
                          {msg.created_date ? format(new Date(msg.created_date), 'HH:mm') : ''}
                        </span>
                      </div>
                      <div className={`px-3 py-2 border font-mono text-xs leading-relaxed break-words ${
                        isMe
                          ? 'border-sulfur/30 bg-sulfur/5 text-foreground'
                          : 'border-border bg-graphite text-foreground'
                      }`}>
                        {msg.text}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="flex items-center gap-2 px-3 py-2.5 border-t border-border bg-graphite/80 shrink-0">
              <span className="font-mono text-[10px] text-sulfur shrink-0">&gt;</span>
              <input
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder={user ? 'Type a message...' : 'Login to chat...'}
                disabled={!user}
                maxLength={300}
                className="flex-1 bg-transparent font-mono text-xs text-foreground placeholder:text-muted-foreground/30 outline-none disabled:opacity-40"
              />
              <button type="submit" disabled={!text.trim() || !user}
                className="text-muted-foreground hover:text-sulfur disabled:opacity-30 transition-colors">
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
