'use client';

import { useState, useEffect, useCallback } from 'react';

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
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const type = useCallback(() => {
    const currentLine = lines[lineIndex];

    if (isPaused) {
      return;
    }

    if (!isDeleting) {
      if (charIndex < currentLine.length) {
        setDisplayText(currentLine.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else {
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      if (charIndex > 0) {
        setDisplayText(currentLine.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        setIsDeleting(false);
        setLineIndex((prev) => (prev + 1) % lines.length);
      }
    }
  }, [lines, lineIndex, charIndex, isDeleting, isPaused, pauseDuration]);

  useEffect(() => {
    const timer = setTimeout(
      type,
      isDeleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timer);
  }, [type, isDeleting, deletingSpeed, typingSpeed]);

  // Start after initial delay
  useEffect(() => {
    const initialDelay = setTimeout(() => {
      setDisplayText(lines[0].slice(0, 1));
      setCharIndex(1);
    }, 600);
    return () => clearTimeout(initialDelay);
  }, [lines]);

  return (
    <div className={`font-mono text-sm tracking-wide min-h-[1.4rem] ${className}`}>
      <span className="text-cyan-neon">{displayText}</span>
      <span className="text-magenta animate-pulse">_</span>
    </div>
  );
}
