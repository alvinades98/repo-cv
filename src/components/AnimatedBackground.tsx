'use client';

import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Animated diagonal lines */}
      <motion.div
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.02]"
        style={{
          backgroundImage:
            'linear-gradient(45deg, rgba(255,45,120,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        animate={{
          backgroundPosition: ['0px 0px', '60px 60px'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Subtle floating orbs (very reduced) */}
      <motion.div
        className="absolute top-[-15%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-magenta/10 to-purple-neon/5 blur-3xl"
        animate={{
          x: [0, 30, -20, 15, 0],
          y: [0, -25, 15, -30, 0],
          scale: [1, 1.1, 0.95, 1.05, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute top-[40%] right-[-8%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-cyan-neon/8 to-purple-neon/5 blur-3xl"
        animate={{
          x: [0, -20, 30, -15, 0],
          y: [0, 15, -25, 10, 0],
          scale: [1, 0.95, 1.1, 1, 1],
        }}
        transition={{
          duration: 25,
          delay: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
