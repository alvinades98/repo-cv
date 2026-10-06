'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from './LanguageProvider';

export default function LoadingScreen() {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.classList.add('loading');

    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.classList.remove('loading');
    }, 1100);

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
          className="neo-loading fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
          exit={{ y: '-100%' }}
          transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="neo-loading-card relative flex flex-col items-center gap-5 px-8 py-8">
            <motion.div
              className="neo-loading-greeting font-display text-4xl sm:text-6xl md:text-7xl font-bold"
              initial={{ y: 18, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {t.loading.greeting}<span>.</span>
            </motion.div>
            <div className="neo-loading-track w-56 h-3 overflow-hidden">
              <motion.div
                className="neo-loading-progress h-full"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.9, ease: 'easeInOut' }}
              />
            </div>
            <div className="neo-loading-caption font-mono text-xs uppercase tracking-[0.2em]">
              Alvin Ade · Portfolio
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
