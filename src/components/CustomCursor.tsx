'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    if (!cursor || !cursorDot) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[role="button"]') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('select') ||
        target.closest('[data-hover]') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const animate = () => {
      const dx = mouseX - cursorX;
      const dy = mouseY - cursorY;
      cursorX += dx * 0.18;
      cursorY += dy * 0.18;
      cursor.style.left = `${cursorX}px`;
      cursor.style.top = `${cursorY}px`;
      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <>
      {/* Ring - smooth follow */}
      <div
        ref={cursorRef}
        className="fixed z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          opacity: isVisible ? 1 : 0,
          width: isHovering ? '64px' : '36px',
          height: isHovering ? '64px' : '36px',
          border: `1.5px solid ${isHovering ? '#00F5FF' : '#FF2D78'}`,
          boxShadow: isHovering
            ? '0 0 30px rgba(0,245,255,0.7)'
            : '0 0 20px rgba(255,45,120,0.6), inset 0 0 12px rgba(255,45,120,0.3)',
          mixBlendMode: 'difference',
          transition: 'width 0.25s ease, height 0.25s ease, opacity 0.3s ease, border-color 0.25s ease, box-shadow 0.25s ease',
        }}
      />
      {/* Dot - instant follow */}
      <div
        ref={cursorDotRef}
        className="fixed z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          opacity: isVisible ? 1 : 0,
          width: '6px',
          height: '6px',
          background: '#00F5FF',
          boxShadow: '0 0 12px #00F5FF',
          mixBlendMode: 'difference',
          transition: 'opacity 0.3s ease',
        }}
      />
    </>
  );
}
