'use client';

import { useRef, useEffect } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  className?: string;
  delay?: number;
  /** rise: text fades up. land: inner cards are set down onto the page (see MOTION in globals.css). */
  variant?: 'rise' | 'land';
}

export default function ScrollReveal({
  children,
  width = '100%',
  className = '',
  delay = 0,
  variant = 'rise',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Only content below the fold is hidden, and only once JS runs — SSR/no-JS render it plainly.
  // data-reveal is set on the DOM directly so reveals never re-render React.
  useEffect(() => {
    const el = ref.current;
    if (!el || el.getBoundingClientRect().top < window.innerHeight * 0.88) return;
    el.dataset.reveal = 'pending';
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.dataset.reveal = 'in';
        io.disconnect();
      },
      { rootMargin: '0px 0px -12% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal reveal--${variant} ${className}`}
      style={{ position: 'relative', width, minWidth: 0, height: '100%', '--reveal-delay': `${delay}s` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
