import React, { useState, useEffect } from 'react';

const SCRAMBLE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*<>/\\|';

export default function GlitchText({ text, className = '', tag = 'span', scramble = false }) {
  const Tag = tag;
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (!scramble) return;
    let iteration = 0;
    const id = setInterval(() => {
      setDisplay(
        text.split('').map((char, idx) => {
          if (char === ' ') return ' ';
          if (idx < iteration) return text[idx];
          return SCRAMBLE[Math.floor(Math.random() * SCRAMBLE.length)];
        }).join('')
      );
      if (iteration >= text.length) {
        clearInterval(id);
        setDisplay(text);
      }
      iteration += 0.4;
    }, 30);
    return () => clearInterval(id);
  }, [text, scramble]);

  return (
    <Tag
      data-text={text}
      className={`glitch-title ${className}`}
    >
      {display}
    </Tag>
  );
}
