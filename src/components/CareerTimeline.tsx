'use client';

import { motion } from 'framer-motion';
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
  { year: '2020 — Present', role: 'Fullstack Developer', company: 'Freelance', description: 'Handling end-to-end web and mobile application projects independently for individual clients. Fully responsible for all project roles including requirements analysis, system design, UI/UX design, task planning, coding, and server deployment. Managing client communication, gathering detailed specifications, and providing progress updates throughout the development cycle.', tech: ['Laravel', 'Node.js', 'React Native', 'REST API', 'MySQL', 'SSL/Domain'], type: 'work' },
  { year: '2023 — Present', role: 'Fullstack Developer', company: 'Arkatama Multi Solusindo', description: 'Developed and maintained various web application projects across multiple industries. Built RESTful APIs for frontend and mobile integration using Laravel and other PHP frameworks. Integrated third-party services like payment gateways (Midtrans, Tripay). Served as Assistant Mentor in internal training programs, helping junior developers and interns.', tech: ['Laravel', 'PHP', 'HTML', 'CSS', 'JavaScript', 'Midtrans', 'Tripay'], type: 'work' },
  { year: '2022 — 2022', role: 'Intern Fullstack Developer', company: 'Arkatama Multi Solusindo', description: 'Led a development team during the internship program focused on full stack web application projects. Performed system analysis, task division, and distributed development responsibilities to team members using Arkatama\'s core framework based on CodeIgniter 3.', tech: ['CodeIgniter 3', 'MySQL', 'Git', 'Team Lead'], type: 'work' },
  { year: '2020 — 2022', role: 'Fullstack Developer', company: 'Bengkel IT', description: 'Developed and maintained web applications as a Full Stack Developer with a focus on backend development using Node.js. Collaborated with frontend developers to implement API endpoints and ensure smooth integration. Handled application deployment and server configuration.', tech: ['Node.js', 'Express.js', 'MySQL', 'PostgreSQL', 'PM2', 'Nginx'], type: 'work' },
  { year: '2019 — 2020', role: 'Freelance Fullstack Developer', company: 'Omah Media', description: 'Worked as a Full Stack Developer handling both frontend and backend development tasks. Responsible for analyzing project requirements, writing clean and scalable code, and deploying applications to servers.', tech: ['Laravel', 'JavaScript', 'MySQL'], type: 'work' },
  { year: '2018 — 2018', role: 'Intern Fullstack Developer', company: 'Ezy Industries', description: 'Completed a 4-month internship focused on web and mobile development. Learned and developed mobile applications using React Native. Gained hands-on experience building full stack web applications using CodeIgniter 3 and MySQL.', tech: ['React Native', 'CodeIgniter 3', 'MySQL', 'Mobile Dev'], type: 'work' },
  { year: '2020 — 2024', role: 'Bachelor of Computer Science — GPA 3.78', company: 'STMIK PPKIA Pradnya Paramita', description: 'Graduated with honors (GPA 3.78). Focused on Software Engineering and Web Technologies. Active in coding communities and tech events.', tech: ['Software Engineering', 'Web Technologies', 'Database', 'Algorithms'], type: 'education' },
  { year: '2017 — 2020', role: 'Vocational High School', company: 'SMKN 8 Malang', description: 'Studied at SMK Negeri 8 Malang, building the foundation for a career in software development and IT.', tech: ['Programming Basics', 'Networking', 'Web Development'], type: 'education' },
];

const CAREER_DATA_ID: TimelineItem[] = [
  { year: '2020 — Sekarang', role: 'Fullstack Developer', company: 'Freelance', description: 'Menangani secara mandiri proyek aplikasi web dan mobile secara end-to-end untuk klien individu. Bertanggung jawab penuh atas seluruh peran proyek, termasuk analisis kebutuhan, perancangan sistem, desain UI/UX, perencanaan tugas, pengkodean, dan deployment ke server.', tech: ['Laravel', 'Node.js', 'React Native', 'REST API', 'MySQL', 'SSL/Domain'], type: 'work' },
  { year: '2023 — Sekarang', role: 'Fullstack Developer', company: 'Arkatama Multi Solusindo', description: 'Mengembangkan dan memelihara berbagai proyek aplikasi web di berbagai industri. Membangun RESTful API untuk integrasi dengan frontend dan aplikasi mobile menggunakan Laravel dan framework PHP lainnya. Mengintegrasikan layanan pihak ketiga seperti payment gateway (Midtrans, Tripay). Berperan sebagai Asisten Mentor dalam program pelatihan internal.', tech: ['Laravel', 'PHP', 'HTML', 'CSS', 'JavaScript', 'Midtrans', 'Tripay'], type: 'work' },
  { year: '2022 — 2022', role: 'Intern Fullstack Developer', company: 'Arkatama Multi Solusindo', description: 'Memimpin tim pengembang selama program magang yang berfokus pada proyek aplikasi web full stack. Melakukan analisis sistem, membagi tugas, dan mendistribusikan tanggung jawab pengembangan kepada anggota tim menggunakan framework inti berbasis CodeIgniter 3.', tech: ['CodeIgniter 3', 'MySQL', 'Git', 'Team Lead'], type: 'work' },
  { year: '2020 — 2022', role: 'Fullstack Developer', company: 'Bengkel IT', description: 'Mengembangkan dan memelihara aplikasi web sebagai Full Stack Developer, dengan fokus pada pengembangan backend menggunakan Node.js. Bekerja sama dengan developer frontend untuk mengimplementasikan endpoint API dan memastikan integrasi berjalan lancar.', tech: ['Node.js', 'Express.js', 'MySQL', 'PostgreSQL', 'PM2', 'Nginx'], type: 'work' },
  { year: '2019 — 2020', role: 'Freelance Fullstack Developer', company: 'Omah Media', description: 'Bekerja sebagai Full Stack Developer yang menangani tugas pengembangan frontend dan backend. Bertanggung jawab untuk menganalisis kebutuhan proyek, menulis kode yang bersih dan skalabel, serta melakukan deployment aplikasi ke server.', tech: ['Laravel', 'JavaScript', 'MySQL'], type: 'work' },
  { year: '2018 — 2018', role: 'Intern Fullstack Developer', company: 'Ezy Industries', description: 'Mengikuti program magang selama 4 bulan dengan fokus pada pengembangan web dan mobile. Mempelajari dan mengembangkan aplikasi mobile menggunakan React Native. Mendapatkan pengalaman langsung dalam membangun aplikasi web full stack menggunakan CodeIgniter 3 dan MySQL.', tech: ['React Native', 'CodeIgniter 3', 'MySQL', 'Mobile Dev'], type: 'work' },
  { year: '2020 — 2024', role: 'Sarjana Komputer — IPK 3.78', company: 'STMIK PPKIA Pradnya Paramita', description: 'Lulus dengan predikat cumlaude (IPK 3.78). Fokus pada Rekayasa Perangkat Lunak dan Teknologi Web. Aktif di komunitas coding dan acara teknologi.', tech: ['Rekayasa Perangkat Lunak', 'Teknologi Web', 'Database', 'Algoritma'], type: 'education' },
  { year: '2017 — 2020', role: 'Sekolah Menengah Kejuruan', company: 'SMKN 8 Malang', description: 'Menempuh pendidikan di SMK Negeri 8 Malang, membangun fondasi untuk karir di bidang pengembangan perangkat lunak dan IT.', tech: ['Dasar Pemrograman', 'Jaringan', 'Pengembangan Web'], type: 'education' },
];

export default function CareerTimeline() {
  const { t, locale } = useLanguage();
  const data = locale === 'id' ? CAREER_DATA_ID : CAREER_DATA_EN;

  return (
    <div className="relative max-w-4xl mx-auto overflow-x-hidden">
      {/* Center line */}
      <div
        className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px"
        style={{
          background: 'linear-gradient(180deg, rgba(255,45,120,0.6), rgba(0,245,255,0.3), transparent)',
        }}
      />

      {data.map((item, index) => {
        const isLeft = index % 2 === 0;
        const isEducation = item.type === 'education';

        return (
          <ScrollReveal key={index} delay={index * 0.1} direction={isLeft ? 'left' : 'right'}>
            <div className={`relative flex items-start mb-10 md:mb-16 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}>
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                <motion.div
                  className={`w-4 h-4 md:w-5 md:h-5 rounded-full border-[3px] ${
                    isEducation
                      ? 'border-cyan-neon bg-cyan-neon/20'
                      : 'border-magenta bg-magenta/20'
                  }`}
                  style={{
                    boxShadow: isEducation
                      ? '0 0 16px rgba(0,245,255,0.5)'
                      : '0 0 16px rgba(255,45,120,0.5)',
                  }}
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                />
              </div>

              <div className="w-14 sm:w-16 shrink-0 md:hidden" />

              <div className={`md:w-[calc(50%-2rem)] w-full ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="group relative glass-card p-4 sm:p-6 rounded-2xl border border-white/6 hover:border-magenta/30 transition-all duration-300 overflow-hidden">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
                    <span
                      className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full border font-mono ${
                        isEducation
                          ? 'bg-cyan-neon/10 text-cyan-neon border-cyan-neon/20'
                          : 'bg-magenta/10 text-magenta border-magenta/20'
                      }`}
                    >
                      {isEducation ? (t.career?.education ?? 'Education') : (t.career?.work ?? 'Work')}
                    </span>
                    <span className="text-[10px] sm:text-xs text-[var(--text-muted)] font-mono">{item.year}</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[var(--text-main)] mb-1 group-hover:text-cyan-neon transition-colors font-display tracking-wide break-words">
                    {item.role}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-magenta/80 mb-2 sm:mb-3 break-words">{item.company}</p>
                  <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-3 sm:mb-4 font-light break-words">{item.description}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {item.tech.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] sm:text-[11px] font-medium px-1.5 py-0.5 sm:px-2 sm:py-0.5 rounded-md border border-white/5 text-[var(--text-muted)] font-mono whitespace-nowrap"
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
