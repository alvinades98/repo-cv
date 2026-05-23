'use client';

import { useLanguage } from './LanguageProvider';

export default function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  const toggleLocale = () => {
    setLocale(locale === 'en' ? 'id' : 'en');
  };

  return (
    <button
      onClick={toggleLocale}
      className="px-3 py-1.5 rounded-lg glass-card hover:scale-110 transition-all duration-200 text-xs font-bold font-mono text-[var(--text-muted)] hover:text-magenta border border-white/5 hover:border-magenta/30 tracking-wide"
      title={locale === 'en' ? 'Switch to Indonesian' : 'Ganti ke Bahasa Inggris'}
      aria-label={locale === 'en' ? 'Switch to Indonesian' : 'Ganti ke Bahasa Inggris'}
    >
      {locale === 'en' ? 'ID' : 'EN'}
    </button>
  );
}
