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
        year: '2025 — Present',
        role: 'Senior Full Stack Developer',
        company: 'TechNova Solutions',
        description:
            'Leading a team of 5 developers to build scalable SaaS products. Architected microservices with Node.js and deployed on AWS with Docker & Kubernetes.',
        tech: ['Next.js', 'TypeScript', 'AWS', 'Docker', 'PostgreSQL'],
        type: 'work',
    },
    {
        year: '2023 — 2025',
        role: 'Full Stack Developer',
        company: 'Digital Kreasi Indonesia',
        description:
            'Built and maintained multiple client-facing web applications. Implemented CI/CD pipelines and improved page load performance by 40%.',
        tech: ['React', 'Node.js', 'Express', 'MySQL', 'Tailwind CSS'],
        type: 'work',
    },
    {
        year: '2022 — 2023',
        role: 'Frontend Developer',
        company: 'StartupHub',
        description:
            'Developed responsive UI components for an e-commerce platform serving 10k+ daily users. Collaborated closely with UX designers.',
        tech: ['Vue.js', 'Nuxt', 'SCSS', 'Figma'],
        type: 'work',
    },
    {
        year: '2021 — 2022',
        role: 'Junior Web Developer',
        company: 'Freelance',
        description:
            'Started freelancing by building websites for local businesses. Gained hands-on experience with full project lifecycle from design to deployment.',
        tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'WordPress'],
        type: 'work',
    },
    {
        year: '2018 — 2022',
        role: 'Bachelor of Computer Science',
        company: 'Universitas Teknologi Digital',
        description:
            'Graduated with honors. Focus on Software Engineering and Web Technologies. Active in coding competitions and tech communities.',
        tech: ['Algorithms', 'Data Structures', 'Software Engineering', 'Database'],
        type: 'education',
    },
];

const CAREER_DATA_ID: TimelineItem[] = [
    {
        year: '2025 — Sekarang',
        role: 'Senior Full Stack Developer',
        company: 'TechNova Solutions',
        description:
            'Memimpin tim 5 developer untuk membangun produk SaaS yang skalabel. Merancang arsitektur microservices dengan Node.js dan deploy di AWS dengan Docker & Kubernetes.',
        tech: ['Next.js', 'TypeScript', 'AWS', 'Docker', 'PostgreSQL'],
        type: 'work',
    },
    {
        year: '2023 — 2025',
        role: 'Full Stack Developer',
        company: 'Digital Kreasi Indonesia',
        description:
            'Membangun dan memelihara beberapa aplikasi web untuk klien. Mengimplementasi CI/CD pipeline dan meningkatkan performa load halaman sebesar 40%.',
        tech: ['React', 'Node.js', 'Express', 'MySQL', 'Tailwind CSS'],
        type: 'work',
    },
    {
        year: '2022 — 2023',
        role: 'Frontend Developer',
        company: 'StartupHub',
        description:
            'Mengembangkan komponen UI responsif untuk platform e-commerce yang melayani 10k+ pengguna harian. Berkolaborasi erat dengan desainer UX.',
        tech: ['Vue.js', 'Nuxt', 'SCSS', 'Figma'],
        type: 'work',
    },
    {
        year: '2021 — 2022',
        role: 'Junior Web Developer',
        company: 'Freelance',
        description:
            'Memulai freelance dengan membangun website untuk bisnis lokal. Mendapatkan pengalaman langsung dengan siklus proyek penuh dari desain hingga deployment.',
        tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'WordPress'],
        type: 'work',
    },
    {
        year: '2018 — 2022',
        role: 'Sarjana Ilmu Komputer',
        company: 'Universitas Teknologi Digital',
        description:
            'Lulus dengan predikat cumlaude. Fokus pada Rekayasa Perangkat Lunak dan Teknologi Web. Aktif di kompetisi coding dan komunitas teknologi.',
        tech: ['Algoritma', 'Struktur Data', 'Rekayasa Perangkat Lunak', 'Database'],
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
