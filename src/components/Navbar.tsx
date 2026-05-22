'use client';

import Link from 'next/link';
import { APP_CONFIG } from '@/lib/config';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from './LanguageProvider';

export default function Navbar() {
    const { t } = useLanguage();

    return (
        <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10 z-50 transition-colors duration-300">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
                    {APP_CONFIG.name}
                </Link>

                <div className="hidden md:flex gap-8">
                    <NavLink href="#home">{t.nav.home}</NavLink>
                    <NavLink href="#about">{t.nav.about}</NavLink>
                    <NavLink href="#career">{t.nav.career}</NavLink>
                    <NavLink href="#portfolio">{t.nav.portfolio}</NavLink>
                    <NavLink href="#contact">{t.nav.contact}</NavLink>
                </div>

                <div className="flex items-center gap-3">
                    <LanguageToggle />
                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-medium"
        >
            {children}
        </Link>
    );
}
