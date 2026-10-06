'use client';

import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  width?: 'fit-content' | '100%';
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

const directionVariants = {
  up: { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } },
  down: { hidden: { opacity: 0, y: -40 }, visible: { opacity: 1, y: 0 } },
  left: { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } },
  none: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
};

export default function ScrollReveal({
  children,
  width = '100%',
  className = '',
  delay = 0.15,
  direction = 'up',
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView, mainControls]);

  const variants = directionVariants[direction];

  return (
    <div ref={ref} style={{ position: 'relative', width, minWidth: 0, height: '100%' }} className={className}>
      <motion.div
        style={{ height: '100%' }}
        variants={variants}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.9,
          delay,
          ease: [0.2, 0.8, 0.2, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
