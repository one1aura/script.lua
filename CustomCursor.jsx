import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);
  const pos = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const raf = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
      // check if hovering interactive element
      const el = document.elementFromPoint(e.clientX, e.clientY);
      const interactive = el?.closest('a, button, input, textarea, [role="button"]');
      setHovering(!!interactive);
    };

    const onDown = () => setClicking(true);
    const onUp   = () => setClicking(false);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mousedown', onDown);
    window.addEventListener('mouseup', onUp);

    // Lag-follow ring
    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`;
      }
      raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mousedown', onDown);
      window.removeEventListener('mouseup', onUp);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999]"
        style={{ willChange: 'transform' }}
      >
        <div
          style={{
            width: clicking ? 6 : hovering ? 10 : 8,
            height: clicking ? 6 : hovering ? 10 : 8,
            background: hovering ? '#00F0FF' : '#E6FF00',
            boxShadow: hovering
              ? '0 0 8px rgba(0,240,255,0.9), 0 0 20px rgba(0,240,255,0.4)'
              : '0 0 8px rgba(230,255,0,0.9), 0 0 20px rgba(230,255,0,0.4)',
            borderRadius: 0,
            transform: `translate(-50%, -50%)`,
            transition: 'width 0.1s, height 0.1s, background 0.15s, box-shadow 0.15s',
          }}
        />
      </div>

      {/* Lagging ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998]"
        style={{ willChange: 'transform' }}
      >
        <div
          style={{
            width: clicking ? 20 : hovering ? 36 : 28,
            height: clicking ? 20 : hovering ? 36 : 28,
            border: `1px solid ${hovering ? 'rgba(0,240,255,0.7)' : 'rgba(230,255,0,0.5)'}`,
            boxShadow: hovering
              ? '0 0 10px rgba(0,240,255,0.3)'
              : '0 0 10px rgba(230,255,0,0.2)',
            borderRadius: 0,
            transform: `translate(-50%, -50%)`,
            transition: 'width 0.15s, height 0.15s, border-color 0.15s',
          }}
        />
      </div>

      {/* Hide native cursor globally */}
      <style>{`* { cursor: none !important; }`}</style>
    </>
  );
}
