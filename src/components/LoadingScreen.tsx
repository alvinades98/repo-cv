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
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-50 dark:bg-slate-950 transition-colors"
                    exit={{ y: '-100%' }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                >
                    <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.03]"
                        style={{
                            backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
                            backgroundSize: '60px 60px',
                        }}
                    />

                    <div className="relative flex items-baseline">
                        {greeting.split('').map((letter, index) => (
                            <motion.span
                                key={index}
                                className="text-6xl md:text-8xl lg:text-9xl font-bold text-gray-900 dark:text-white inline-block"
                                initial={{ y: 80, opacity: 0, rotateX: 40 }}
                                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                                transition={{
                                    duration: 0.7,
                                    delay: 0.3 + index * 0.08,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                style={{ perspective: '500px' }}
                            >
                                {letter}
                            </motion.span>
                        ))}

                        <motion.span
                            className="text-6xl md:text-8xl lg:text-9xl font-bold inline-block text-blue-600 dark:text-blue-400"
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

                    <motion.div
                        className="absolute bottom-0 left-0 h-[2px] bg-blue-600 dark:bg-blue-400"
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{
                            duration: 2.0,
                            delay: 0.5,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}
