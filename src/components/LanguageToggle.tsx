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
      className="neo-control px-3 py-1.5 transition-all duration-200 text-xs font-bold font-mono tracking-wide"
      title={locale === 'en' ? 'Switch to Indonesian' : 'Ganti ke Bahasa Inggris'}
      aria-label={locale === 'en' ? 'Switch to Indonesian' : 'Ganti ke Bahasa Inggris'}
    >
      {locale === 'en' ? 'ID' : 'EN'}
    </button>
  );
}
