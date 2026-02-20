'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import { translations, type Locale, type Translations } from '@/lib/translations';

interface LanguageContextType {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
    locale: 'en',
    setLocale: () => { },
    t: translations.en,
});

export function useLanguage() {
    return useContext(LanguageContext);
}

export default function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>('en');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem('locale') as Locale | null;
        if (stored && (stored === 'en' || stored === 'id')) {
            setLocaleState(stored);
        }
        setMounted(true);
    }, []);

    const setLocale = (newLocale: Locale) => {
        setLocaleState(newLocale);
        localStorage.setItem('locale', newLocale);
        document.documentElement.lang = newLocale;
    };

    useEffect(() => {
        if (mounted) {
            document.documentElement.lang = locale;
        }
    }, [locale, mounted]);

    const t = translations[locale];

    return (
        <LanguageContext.Provider value={{ locale, setLocale, t }}>
            {children}
        </LanguageContext.Provider>
    );
}
