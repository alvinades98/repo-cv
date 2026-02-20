export type Locale = 'en' | 'id';

export const translations = {
    en: {
        // Navbar
        nav: {
            home: 'Home',
            about: 'About',
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
                `Hello! I'm ${name}, a passionate Full Stack Developer with a knack for building robust and scalable web applications. I love solving complex problems and turning ideas into reality through code.`,
            journeyTitle: 'My Journey',
            journeyText:
                'I started my coding journey exploring simple HTML & CSS, and have since deep-dived into the modern JavaScript ecosystem. My expertise lies in React, Next.js, Node.js, and database management. I am constantly learning new technologies to stay at the forefront of web development.',
            frontendSkills: 'Frontend Skills',
            backendSkills: 'Backend Skills',
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
                `Halo! Saya ${name}, seorang Full Stack Developer yang bersemangat dalam membangun aplikasi web yang kokoh dan skalabel. Saya suka memecahkan masalah kompleks dan mewujudkan ide menjadi kenyataan melalui kode.`,
            journeyTitle: 'Perjalanan Saya',
            journeyText:
                'Saya memulai perjalanan coding dengan mempelajari HTML & CSS sederhana, dan sejak itu mendalami ekosistem JavaScript modern. Keahlian saya terletak pada React, Next.js, Node.js, dan manajemen database. Saya terus belajar teknologi baru untuk tetap berada di garis depan pengembangan web.',
            frontendSkills: 'Keahlian Frontend',
            backendSkills: 'Keahlian Backend',
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
    nav: { home: string; about: string; portfolio: string; contact: string };
    hero: { contactMe: string; viewWork: string };
    about: {
        title: string;
        intro: (name: string) => string;
        journeyTitle: string;
        journeyText: string;
        frontendSkills: string;
        backendSkills: string;
    };
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

