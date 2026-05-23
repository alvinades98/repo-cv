'use client';

import { motion } from 'framer-motion';

interface TextHoverEffectProps {
  text: string;
  className?: string;
}

export default function TextHoverEffect({ text, className = '' }: TextHoverEffectProps) {
  return (
    <span className={`glitch-text ${className}`} data-text={text}>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          className="inline-block cursor-default select-none"
          style={{
            background: 'linear-gradient(to right, #FF2D78, #9B30FF, #00F5FF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
          whileHover={{
            scale: 1.25,
            y: -4,
            filter: [
              'hue-rotate(0deg) brightness(1)',
              'hue-rotate(20deg) brightness(1.3)',
              'hue-rotate(-15deg) brightness(1)',
            ],
            transition: { duration: 0.25 },
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
}
