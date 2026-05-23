'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { APP_CONFIG } from '@/lib/config';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from './LanguageProvider';
import { useTheme } from './ThemeProvider';

type NavKey = 'home' | 'about' | 'career' | 'portfolio' | 'contact' | 'game';
const NAV_ITEMS: NavKey[] = ['home', 'about', 'career', 'portfolio', 'contact', 'game'];

export default function Navbar() {
  const { t } = useLanguage();
  const { resolvedTheme } = useTheme();
  const [activeSection, setActiveSection] = useState<NavKey>('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_ITEMS.map((id) => document.getElementById(id));
      const scrollPos = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(NAV_ITEMS[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDark = resolvedTheme === 'dark';

  return (
    <motion.nav
      className="fixed top-0 w-full z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? isDark
            ? 'linear-gradient(180deg, rgba(5,6,13,0.85), rgba(5,6,13,0.6))'
            : 'linear-gradient(180deg, rgba(248,249,252,0.85), rgba(248,249,252,0.6))'
          : 'linear-gradient(180deg, rgba(5,6,13,0.7), rgba(5,6,13,0))',
        borderBottom: scrolled
          ? '1px solid rgba(255,255,255,0.04)'
          : '1px solid transparent',
        backdropFilter: 'blur(12px)',
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-display tracking-wider gradient-text"
          style={{ letterSpacing: '0.05em' }}
        >
          {APP_CONFIG.name.toUpperCase()}
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 items-center">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item}
              href={`#${item}`}
              className="relative font-mono text-xs uppercase tracking-[0.15em] text-[var(--text-muted)] hover:text-cyan-neon transition-colors duration-250 group"
              onClick={() => setMobileOpen(false)}
            >
              {t.nav[item as keyof typeof t.nav]}
              <span
                className="absolute left-0 -bottom-1.5 h-[1px] bg-cyan-neon transition-all duration-300"
                style={{
                  width: activeSection === item ? '100%' : '0%',
                }}
              />
              <span className="absolute left-0 -bottom-1.5 h-[1px] bg-cyan-neon w-0 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3">
          <LanguageToggle />
          <ThemeToggle />

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-[var(--text-muted)] hover:text-cyan-neon transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-white/5 px-6 py-4"
          style={{
            background: isDark ? 'rgba(5,6,13,0.95)' : 'rgba(248,249,252,0.95)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <div className="flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                className={`font-mono text-xs uppercase tracking-[0.15em] py-2 transition-colors ${
                  activeSection === item ? 'text-cyan-neon' : 'text-[var(--text-muted)] hover:text-cyan-neon'
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {t.nav[item as keyof typeof t.nav]}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
