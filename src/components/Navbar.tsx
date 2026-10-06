'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { APP_CONFIG } from '@/lib/config';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from './LanguageProvider';

type NavKey = 'home' | 'about' | 'career' | 'portfolio' | 'contact' | 'game';
const NAV_ITEMS: NavKey[] = ['home', 'about', 'career', 'portfolio', 'contact', 'game'];

export default function Navbar() {
  const { t, locale } = useLanguage();
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

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <motion.nav
      className={`neo-navbar fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'is-scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="neo-nav-inner container mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="neo-logo text-xl font-display tracking-wider"
        >
          {APP_CONFIG.name.toUpperCase()}
        </Link>

        {/* Desktop Nav */}
        <div className="neo-nav-links hidden lg:flex gap-8 items-center">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item}
              href={`#${item}`}
              className={`neo-nav-link relative font-mono text-xs uppercase tracking-[0.1em] transition-colors duration-250 ${activeSection === item ? 'is-active' : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              {item === 'game' ? (locale === 'id' ? 'Main' : 'Play') : t.nav[item]}
            </Link>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageToggle />
          <ThemeToggle />

          {/* Mobile hamburger */}
          <button
            className="neo-control lg:hidden p-2 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
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
          id="mobile-navigation"
          className="neo-mobile-menu lg:hidden px-6 py-4"
        >
          <div className="flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                className={`neo-nav-link py-2 transition-colors ${activeSection === item ? 'is-active' : ''}`}
                onClick={() => setMobileOpen(false)}
              >
                {item === 'game' ? (locale === 'id' ? 'Main' : 'Play') : t.nav[item]}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
