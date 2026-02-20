export type Locale = 'en' | 'id';

export const translations = {
    en: {
        // Navbar
        nav: {
            home: 'Home',
            about: 'About',
            career: 'Career',
            portfolio: 'Portfolio',
            contact: 'Contact',
        },

        // Hero
        hero: {
            contactMe: 'Contact Me',
            viewWork: 'View Work',
        },

        // About
        about: {
            title: 'About Me',
            intro: (name: string) =>
                `Hi! I'm ${name}, a motivated and detail-oriented Full Stack Developer with hands-on experience in developing web and mobile applications using Laravel, React Native, and other modern technologies. I have a strong passion for learning new tools and technologies while continuously improving my technical skills.`,
            journeyTitle: 'My Journey',
            journeyText:
                'Proven ability to work independently as well as in teams. Skilled in problem-solving and producing clean, efficient code to meet project goals. Enthusiastic about contributing to innovative development projects and growing with forward-thinking companies.',
            frontendSkills: 'Frontend',
            backendSkills: 'Backend',
            databaseSkills: 'Database',
            toolsSkills: 'Tools',
        },

        // Career
        career: {
            title: 'Career Journey',
            subtitle: 'A timeline of my professional experience and education.',
            work: 'Work',
            education: 'Education',
        },

        // Portfolio
        portfolio: {
            title: 'My Projects',
            github: 'GitHub',
            liveDemo: 'Live Demo',
        },

        // Contact
        contact: {
            title: 'Get In Touch',
            description:
                "I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
            emailMe: 'Email Me',
        },

        // Game
        game: {
            title: 'Take a Break 🎮',
            description: 'Match all the emoji pairs! Test your memory while you\'re here.',
            moves: 'Moves',
            pairs: 'Pairs',
            reset: '🔄 Reset',
            best: 'Best',
            bestMoves: 'moves',
            youWon: 'You Won!',
            completedIn: 'Completed in',
            and: '&',
            playAgain: 'Play Again 🔄',
        },

        // Loading
        loading: {
            greeting: 'Hello',
        },

        // Footer
        footer: {
            rights: 'All rights reserved.',
        },

        // Theme
        theme: {
            system: 'System',
            light: 'Light',
            dark: 'Dark',
        },
    },

    id: {
        // Navbar
        nav: {
            home: 'Beranda',
            about: 'Tentang',
            career: 'Karir',
            portfolio: 'Portofolio',
            contact: 'Kontak',
        },

        // Hero
        hero: {
            contactMe: 'Hubungi Saya',
            viewWork: 'Lihat Karya',
        },

        // About
        about: {
            title: 'Tentang Saya',
            intro: (name: string) =>
                `Halo! Saya ${name}, seorang Full Stack Developer yang termotivasi dan berorientasi pada detail dengan pengalaman langsung dalam mengembangkan aplikasi web dan mobile menggunakan Laravel, React Native, dan teknologi modern lainnya. Memiliki semangat belajar tinggi terhadap alat dan teknologi baru serta terus meningkatkan kemampuan teknis.`,
            journeyTitle: 'Perjalanan Saya',
            journeyText:
                'Terbukti mampu bekerja secara mandiri maupun dalam tim. Mahir dalam pemecahan masalah dan menghasilkan kode yang bersih dan efisien untuk memenuhi tujuan proyek. Antusias untuk berkontribusi dalam proyek pengembangan yang inovatif dan tumbuh bersama perusahaan yang berpikiran maju.',
            frontendSkills: 'Frontend',
            backendSkills: 'Backend',
            databaseSkills: 'Database',
            toolsSkills: 'Tools',
        },

        // Career
        career: {
            title: 'Perjalanan Karir',
            subtitle: 'Timeline pengalaman profesional dan pendidikan saya.',
            work: 'Kerja',
            education: 'Pendidikan',
        },

        // Portfolio
        portfolio: {
            title: 'Proyek Saya',
            github: 'GitHub',
            liveDemo: 'Demo Langsung',
        },

        // Contact
        contact: {
            title: 'Hubungi Saya',
            description:
                'Saya saat ini terbuka untuk peluang dan kolaborasi baru. Apakah Anda punya pertanyaan atau hanya ingin menyapa, saya akan berusaha untuk membalas sesegera mungkin!',
            emailMe: 'Kirim Email',
        },

        // Game
        game: {
            title: 'Istirahat Sejenak 🎮',
            description: 'Cocokkan semua pasangan emoji! Uji ingatan kamu di sini.',
            moves: 'Langkah',
            pairs: 'Pasangan',
            reset: '🔄 Ulang',
            best: 'Terbaik',
            bestMoves: 'langkah',
            youWon: 'Kamu Menang!',
            completedIn: 'Selesai dalam',
            and: '&',
            playAgain: 'Main Lagi 🔄',
        },

        // Loading
        loading: {
            greeting: 'Halo',
        },

        // Footer
        footer: {
            rights: 'Hak cipta dilindungi.',
        },

        // Theme
        theme: {
            system: 'Sistem',
            light: 'Terang',
            dark: 'Gelap',
        },
    },
};

export interface Translations {
    nav: { home: string; about: string; career: string; portfolio: string; contact: string };
    hero: { contactMe: string; viewWork: string };
    about: {
        title: string;
        intro: (name: string) => string;
        journeyTitle: string;
        journeyText: string;
        frontendSkills: string;
        backendSkills: string;
        databaseSkills: string;
        toolsSkills: string;
    };
    career: { title: string; subtitle: string; work: string; education: string };
    portfolio: { title: string; github: string; liveDemo: string };
    contact: { title: string; description: string; emailMe: string };
    game: {
        title: string;
        description: string;
        moves: string;
        pairs: string;
        reset: string;
        best: string;
        bestMoves: string;
        youWon: string;
        completedIn: string;
        and: string;
        playAgain: string;
    };
    loading: { greeting: string };
    footer: { rights: string };
    theme: { system: string; light: string; dark: string };
}

