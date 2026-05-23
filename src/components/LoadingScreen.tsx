'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from './LanguageProvider';

export default function LoadingScreen() {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);
  const greeting = t.loading.greeting;

  useEffect(() => {
    document.body.classList.add('loading');

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.classList.remove('loading');
    }, 2500);

    return () => {
      clearTimeout(timer);
      document.body.classList.remove('loading');
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loading-screen"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: 'var(--bg-dark)' }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `linear-gradient(rgba(0,245,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />

          <div className="relative flex flex-col items-center gap-6">
            {/* Terminal style greeting */}
            <div className="flex items-baseline font-mono">
              <span className="text-cyan-neon text-sm mr-3 tracking-widest">&gt;</span>
              {greeting.split('').map((letter, index) => (
                <motion.span
                  key={index}
                  className="text-5xl md:text-7xl lg:text-8xl font-bold text-[var(--text-main)] inline-block font-display"
                  initial={{ y: 80, opacity: 0, rotateX: 40 }}
                  animate={{ y: 0, opacity: 1, rotateX: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.3 + index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{ perspective: '500px' }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}

              <motion.span
                className="text-5xl md:text-7xl lg:text-8xl font-bold inline-block text-magenta"
                initial={{ y: 80, opacity: 0, scale: 0 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.7,
                  delay: 0.3 + greeting.length * 0.08 + 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                .
              </motion.span>
            </div>

            {/* Status line */}
            <motion.div
              className="font-mono text-xs tracking-[0.3em] text-[var(--text-muted)] uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              Initializing system...
            </motion.div>

            {/* Progress bar */}
            <div className="w-64 h-[2px] bg-white/5 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: 'linear-gradient(90deg, #FF2D78, #9B30FF, #00F5FF)',
                }}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{
                  duration: 2.0,
                  delay: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
