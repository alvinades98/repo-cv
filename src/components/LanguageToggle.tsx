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
            className="px-2.5 py-1.5 rounded-lg bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 transition-all duration-200 text-xs font-bold text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white tracking-wide"
            title={locale === 'en' ? 'Switch to Indonesian' : 'Ganti ke Bahasa Inggris'}
            aria-label={locale === 'en' ? 'Switch to Indonesian' : 'Ganti ke Bahasa Inggris'}
        >
            {locale === 'en' ? 'ID' : 'EN'}
        </button>
    );
}
