export interface Project {
    id: string;
    title: { en: string; id: string };
    description: { en: string; id: string };
    techStack: string;
    imageUrl?: string;
    githubUrl?: string;
    demoUrl?: string;
}

export const PROJECTS: Project[] = [
    {
        id: "0",
        title: {
            en: "Video Call & Chat App",
            id: "Aplikasi Video Call & Chat",
        },
        description: {
            en: "Real-time communication app supporting video calls and chat. Built with WebRTC for peer-to-peer connections and messaging features.",
            id: "Aplikasi komunikasi real-time yang mendukung video call dan chat. Dibangun dengan WebRTC untuk koneksi peer-to-peer dan fitur messaging.",
        },
        techStack: "Node.js, WebRTC, Socket.io, JavaScript",
        imageUrl: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=800&q=80",
        githubUrl: "https://gitlab.com/alvinade98/aplikasi-chat.git",
    },
    {
        id: "1",
        title: {
            en: "Boarding School Alumni Management",
            id: "Web Management Alumni Pondok",
        },
        description: {
            en: "Alumni management system for boarding schools to manage alumni data, activities, and community communication.",
            id: "Sistem manajemen alumni pondok pesantren untuk mengelola data alumni, kegiatan, dan komunikasi antar anggota komunitas.",
        },
        techStack: "Laravel, MySQL, Bootstrap",
        imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: "2",
        title: {
            en: "Church Management Web",
            id: "Web Management Gereja",
        },
        description: {
            en: "Web application for church activity management, congregation management, worship schedules, and church community information.",
            id: "Aplikasi web untuk manajemen kegiatan gereja, pengelolaan jemaat, jadwal ibadah, dan informasi komunitas gereja.",
        },
        techStack: "Laravel, MySQL, JavaScript",
        imageUrl: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: "3",
        title: {
            en: "EPrint Repository Modification",
            id: "Modifikasi Repo EPrint",
        },
        description: {
            en: "Customization and modification of EPrints repository for educational institution needs, including UI adjustments and additional features.",
            id: "Kustomisasi dan modifikasi repositori EPrints untuk kebutuhan institusi pendidikan, termasuk penyesuaian tampilan dan fitur tambahan.",
        },
        techStack: "Perl, MySQL, HTML/CSS",
        imageUrl: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: "4",
        title: {
            en: "Campus Academic System",
            id: "Sistem Akademik Kampus",
        },
        description: {
            en: "Academic information system for managing student data, lecturers, courses, scheduling, and grading in a campus environment.",
            id: "Sistem informasi akademik untuk manajemen data mahasiswa, dosen, mata kuliah, penjadwalan, dan penilaian di lingkungan kampus.",
        },
        techStack: "Laravel, PostgreSQL, JavaScript",
        imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: "5",
        title: {
            en: "Task Management App",
            id: "Aplikasi Management Task",
        },
        description: {
            en: "Productivity app for managing tasks, tracking progress, and team collaboration with real-time update features.",
            id: "Aplikasi produktivitas untuk mengelola tugas, melacak progres, dan kolaborasi tim dengan fitur real-time update.",
        },
        techStack: "Node.js, MySQL, React",
        imageUrl: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: "6",
        title: {
            en: "Tracer Study",
            id: "Tracer Study",
        },
        description: {
            en: "Tracer study system for tracking university graduates, collecting alumni career data, and generating statistical reports.",
            id: "Sistem tracer study untuk melacak lulusan perguruan tinggi, mengumpulkan data karir alumni, dan menghasilkan laporan statistik.",
        },
        techStack: "Laravel, MySQL, Chart.js",
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: "7",
        title: {
            en: "Interview App",
            id: "Aplikasi Wawancara",
        },
        description: {
            en: "Digital platform for managing interview processes, scheduling interviews, evaluating candidates, and reporting interview results.",
            id: "Platform digital untuk mengelola proses wawancara, penjadwalan interview, penilaian kandidat, dan pelaporan hasil wawancara.",
        },
        techStack: "Laravel, MySQL, JavaScript",
        imageUrl: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: "8",
        title: {
            en: "E-Library",
            id: "E-Perpus",
        },
        description: {
            en: "Digital library system for book collection management, borrowing, returning, and online cataloging.",
            id: "Sistem perpustakaan digital untuk manajemen koleksi buku, peminjaman, pengembalian, dan katalog online.",
        },
        techStack: "Laravel, MySQL, Bootstrap",
        imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80",
    },
    {
        id: "9",
        title: {
            en: "Warehouse Management",
            id: "Management Gudang",
        },
        description: {
            en: "Warehouse management app for stock management, inventory tracking, and real-time stock reporting.",
            id: "Aplikasi manajemen gudang untuk pengelolaan stok barang, pencatatan keluar masuk inventaris, dan pelaporan stok real-time.",
        },
        techStack: "Laravel, MySQL, JavaScript",
        imageUrl: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80",
    },
];
