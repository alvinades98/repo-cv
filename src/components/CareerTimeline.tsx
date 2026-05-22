'use client';

import ScrollReveal from './ScrollReveal';
import { useLanguage } from './LanguageProvider';

interface TimelineItem {
    year: string;
    role: string;
    company: string;
    description: string;
    tech: string[];
    type: 'work' | 'education';
}

const CAREER_DATA_EN: TimelineItem[] = [
    {
        year: '2020 — Present',
        role: 'Fullstack Developer',
        company: 'Freelance',
        description:
            'Handling end-to-end web and mobile application projects independently for individual clients. Fully responsible for all project roles including requirements analysis, system design, UI/UX design, task planning, coding, and server deployment. Managing client communication, gathering detailed specifications, and providing progress updates throughout the development cycle.',
        tech: ['Laravel', 'Node.js', 'React Native', 'REST API', 'MySQL', 'SSL/Domain'],
        type: 'work',
    },
    {
        year: '2023 — Present',
        role: 'Fullstack Developer',
        company: 'Arkatama Multi Solusindo',
        description:
            'Developed and maintained various web application projects across multiple industries. Built RESTful APIs for frontend and mobile integration using Laravel and other PHP frameworks. Integrated third-party services like payment gateways (Midtrans, Tripay). Served as Assistant Mentor in internal training programs, helping junior developers and interns.',
        tech: ['Laravel', 'PHP', 'HTML', 'CSS', 'JavaScript', 'Midtrans', 'Tripay'],
        type: 'work',
    },
    {
        year: '2022 — 2022',
        role: 'Intern Fullstack Developer',
        company: 'Arkatama Multi Solusindo',
        description:
            'Led a development team during the internship program focused on full stack web application projects. Performed system analysis, task division, and distributed development responsibilities to team members using Arkatama\'s core framework based on CodeIgniter 3.',
        tech: ['CodeIgniter 3', 'MySQL', 'Git', 'Team Lead'],
        type: 'work',
    },
    {
        year: '2020 — 2022',
        role: 'Fullstack Developer',
        company: 'Bengkel IT',
        description:
            'Developed and maintained web applications as a Full Stack Developer with a focus on backend development using Node.js. Collaborated with frontend developers to implement API endpoints and ensure smooth integration. Handled application deployment and server configuration.',
        tech: ['Node.js', 'Express.js', 'MySQL', 'PostgreSQL', 'PM2', 'Nginx'],
        type: 'work',
    },
    {
        year: '2019 — 2020',
        role: 'Freelance Fullstack Developer',
        company: 'Omah Media',
        description:
            'Worked as a Full Stack Developer handling both frontend and backend development tasks. Responsible for analyzing project requirements, writing clean and scalable code, and deploying applications to servers.',
        tech: ['Laravel', 'JavaScript', 'MySQL'],
        type: 'work',
    },
    {
        year: '2018 — 2018',
        role: 'Intern Fullstack Developer',
        company: 'Ezy Industries',
        description:
            'Completed a 4-month internship focused on web and mobile development. Learned and developed mobile applications using React Native. Gained hands-on experience building full stack web applications using CodeIgniter 3 and MySQL.',
        tech: ['React Native', 'CodeIgniter 3', 'MySQL', 'Mobile Dev'],
        type: 'work',
    },
    {
        year: '2020 — 2024',
        role: 'Bachelor of Computer Science — GPA 3.78',
        company: 'STMIK PPKIA Pradnya Paramita',
        description:
            'Graduated with honors (GPA 3.78). Focused on Software Engineering and Web Technologies. Active in coding communities and tech events.',
        tech: ['Software Engineering', 'Web Technologies', 'Database', 'Algorithms'],
        type: 'education',
    },
    {
        year: '2017 — 2020',
        role: 'Vocational High School',
        company: 'SMKN 8 Malang',
        description:
            'Studied at SMK Negeri 8 Malang, building the foundation for a career in software development and IT.',
        tech: ['Programming Basics', 'Networking', 'Web Development'],
        type: 'education',
    },
];

const CAREER_DATA_ID: TimelineItem[] = [
    {
        year: '2020 — Sekarang',
        role: 'Fullstack Developer',
        company: 'Freelance',
        description:
            'Menangani secara mandiri proyek aplikasi web dan mobile secara end-to-end untuk klien individu. Bertanggung jawab penuh atas seluruh peran proyek, termasuk analisis kebutuhan, perancangan sistem, desain UI/UX, perencanaan tugas, pengkodean, dan deployment ke server. Mengelola komunikasi dengan klien, mengumpulkan spesifikasi secara detail, dan memberikan pembaruan progres selama siklus pengembangan.',
        tech: ['Laravel', 'Node.js', 'React Native', 'REST API', 'MySQL', 'SSL/Domain'],
        type: 'work',
    },
    {
        year: '2023 — Sekarang',
        role: 'Fullstack Developer',
        company: 'Arkatama Multi Solusindo',
        description:
            'Mengembangkan dan memelihara berbagai proyek aplikasi web di berbagai industri. Membangun RESTful API untuk integrasi dengan frontend dan aplikasi mobile menggunakan Laravel dan framework PHP lainnya. Mengintegrasikan layanan pihak ketiga seperti payment gateway (Midtrans, Tripay). Berperan sebagai Asisten Mentor dalam program pelatihan internal, membantu developer junior dan peserta magang.',
        tech: ['Laravel', 'PHP', 'HTML', 'CSS', 'JavaScript', 'Midtrans', 'Tripay'],
        type: 'work',
    },
    {
        year: '2022 — 2022',
        role: 'Intern Fullstack Developer',
        company: 'Arkatama Multi Solusindo',
        description:
            'Memimpin tim pengembang selama program magang yang berfokus pada proyek aplikasi web full stack. Melakukan analisis sistem, membagi tugas, dan mendistribusikan tanggung jawab pengembangan kepada anggota tim menggunakan framework inti berbasis CodeIgniter 3 yang dikembangkan oleh Arkatama.',
        tech: ['CodeIgniter 3', 'MySQL', 'Git', 'Team Lead'],
        type: 'work',
    },
    {
        year: '2020 — 2022',
        role: 'Fullstack Developer',
        company: 'Bengkel IT',
        description:
            'Mengembangkan dan memelihara aplikasi web sebagai Full Stack Developer, dengan fokus pada pengembangan backend menggunakan Node.js. Bekerja sama dengan developer frontend untuk mengimplementasikan endpoint API dan memastikan integrasi berjalan lancar. Menangani deployment aplikasi dan konfigurasi server.',
        tech: ['Node.js', 'Express.js', 'MySQL', 'PostgreSQL', 'PM2', 'Nginx'],
        type: 'work',
    },
    {
        year: '2019 — 2020',
        role: 'Freelance Fullstack Developer',
        company: 'Omah Media',
        description:
            'Bekerja sebagai Full Stack Developer yang menangani tugas pengembangan frontend dan backend. Bertanggung jawab untuk menganalisis kebutuhan proyek, menulis kode yang bersih dan skalabel, serta melakukan deployment aplikasi ke server.',
        tech: ['Laravel', 'JavaScript', 'MySQL'],
        type: 'work',
    },
    {
        year: '2018 — 2018',
        role: 'Intern Fullstack Developer',
        company: 'Ezy Industries',
        description:
            'Mengikuti program magang selama 4 bulan dengan fokus pada pengembangan web dan mobile. Mempelajari dan mengembangkan aplikasi mobile menggunakan React Native. Mendapatkan pengalaman langsung dalam membangun aplikasi web full stack menggunakan CodeIgniter 3 dan MySQL.',
        tech: ['React Native', 'CodeIgniter 3', 'MySQL', 'Mobile Dev'],
        type: 'work',
    },
    {
        year: '2020 — 2024',
        role: 'Sarjana Komputer — IPK 3.78',
        company: 'STMIK PPKIA Pradnya Paramita',
        description:
            'Lulus dengan predikat cumlaude (IPK 3.78). Fokus pada Rekayasa Perangkat Lunak dan Teknologi Web. Aktif di komunitas coding dan acara teknologi.',
        tech: ['Rekayasa Perangkat Lunak', 'Teknologi Web', 'Database', 'Algoritma'],
        type: 'education',
    },
    {
        year: '2017 — 2020',
        role: 'Sekolah Menengah Kejuruan',
        company: 'SMKN 8 Malang',
        description:
            'Menempuh pendidikan di SMK Negeri 8 Malang, membangun fondasi untuk karir di bidang pengembangan perangkat lunak dan IT.',
        tech: ['Dasar Pemrograman', 'Jaringan', 'Pengembangan Web'],
        type: 'education',
    },
];

export default function CareerTimeline() {
    const { t, locale } = useLanguage();
    const data = locale === 'id' ? CAREER_DATA_ID : CAREER_DATA_EN;

    return (
        <div className="relative max-w-4xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/60 via-blue-400/30 to-transparent" />

            {data.map((item, index) => {
                const isLeft = index % 2 === 0;

                return (
                    <ScrollReveal key={index} delay={index * 0.1}>
                        <div
                            className={`relative flex items-start mb-12 md:mb-16 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                                } flex-row`}
                        >
                            {/* Dot on timeline */}
                            <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                                <div
                                    className={`w-4 h-4 rounded-full border-[3px] ${item.type === 'education'
                                        ? 'border-emerald-400 bg-emerald-400/20 shadow-[0_0_12px_rgba(52,211,153,0.4)]'
                                        : 'border-blue-400 bg-blue-400/20 shadow-[0_0_12px_rgba(96,165,250,0.4)]'
                                        }`}
                                />
                            </div>

                            {/* Spacer for mobile */}
                            <div className="w-16 shrink-0 md:hidden" />

                            {/* Content card */}
                            <div
                                className={`md:w-[calc(50%-2rem)] w-full ${isLeft ? 'md:pr-12' : 'md:pl-12'
                                    }`}
                            >
                                <div className="group relative bg-white dark:bg-white/5 p-6 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-blue-500/40 transition-all duration-300 shadow-sm dark:shadow-none hover:shadow-md dark:hover:shadow-blue-500/5">
                                    {/* Type badge */}
                                    <div className="flex items-center gap-3 mb-3">
                                        <span
                                            className={`text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${item.type === 'education'
                                                ? 'bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                                                : 'bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400'
                                                }`}
                                        >
                                            {item.type === 'education'
                                                ? (t.career?.education ?? 'Education')
                                                : (t.career?.work ?? 'Work')}
                                        </span>
                                        <span className="text-xs text-gray-400 dark:text-gray-500 font-mono">
                                            {item.year}
                                        </span>
                                    </div>

                                    {/* Role & Company */}
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {item.role}
                                    </h3>
                                    <p className="text-sm font-medium text-blue-600 dark:text-blue-400/80 mb-3">
                                        {item.company}
                                    </p>

                                    {/* Description */}
                                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">
                                        {item.description}
                                    </p>

                                    {/* Tech tags */}
                                    <div className="flex flex-wrap gap-1.5">
                                        {item.tech.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 border border-gray-200/50 dark:border-white/5"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                );
            })}
        </div>
    );
}
