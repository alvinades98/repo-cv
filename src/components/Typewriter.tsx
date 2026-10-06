'use client';

import { useState, useEffect } from 'react';

interface TypewriterProps {
  lines: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export default function Typewriter({
  lines,
  className = '',
  typingSpeed = 55,
  deletingSpeed = 25,
  pauseDuration = 1800,
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    if (!lines.length) return;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    let timer: ReturnType<typeof setTimeout>;
    let lineIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const tick = () => {
      if (media.matches) {
        setDisplayText(lines[0]);
        return;
      }
      const line = lines[lineIndex];
      charIndex += deleting ? -1 : 1;
      setDisplayText(line.slice(0, charIndex));
      let delay = deleting ? deletingSpeed : typingSpeed;
      if (!deleting && charIndex >= line.length) {
        deleting = true;
        delay = pauseDuration;
      } else if (deleting && charIndex <= 0) {
        deleting = false;
        lineIndex = (lineIndex + 1) % lines.length;
        delay = typingSpeed;
      }
      timer = setTimeout(tick, delay);
    };

    const restart = () => {
      clearTimeout(timer);
      lineIndex = 0;
      charIndex = 0;
      deleting = false;
      timer = setTimeout(tick, 0);
    };
    restart();
    media.addEventListener('change', restart);
    return () => {
      clearTimeout(timer);
      media.removeEventListener('change', restart);
    };
  }, [lines, typingSpeed, deletingSpeed, pauseDuration]);

  if (!lines.length) return null;

  return (
    <div className={`font-mono text-sm tracking-wide ${className}`}>
      <span className="sr-only">{lines[0]}</span>
      <span className="typewriter-text" aria-hidden="true">{displayText}</span>
      <span className="typewriter-caret motion-safe:animate-pulse" aria-hidden="true">_</span>
    </div>
  );
}
