'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { APP_CONFIG } from '@/lib/config';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from './LanguageProvider';

type NavKey = 'home' | 'about' | 'career' | 'portfolio' | 'contact' | 'game';
const NAV_ITEMS: NavKey[] = ['home', 'about', 'career', 'portfolio', 'contact', 'game'];

export default function Navbar() {
  const { t, locale } = useLanguage();
  const [activeSection, setActiveSection] = useState<NavKey>('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  // Observer instead of a scroll handler: no layout reads per scroll frame.
  // A thin band near the top of the viewport decides which section is active.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id as NavKey);
        }
      },
      { rootMargin: '-100px 0px -70% 0px' }
    );
    NAV_ITEMS.forEach((id) => {
      const section = document.getElementById(id);
      if (section) io.observe(section);
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <nav className="neo-navbar fixed top-0 w-full z-50">
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
        <div
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
        </div>
      )}
    </nav>
  );
}
