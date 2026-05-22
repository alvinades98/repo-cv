'use client';

import ProjectCard from '@/components/ProjectCard';
import Carousel from '@/components/Carousel';
import Link from 'next/link';
import { APP_CONFIG } from '@/lib/config';
import { PROJECTS } from '@/lib/data';
import ScrollReveal from '@/components/ScrollReveal';
import MemoryGame from '@/components/MemoryGame';
import TextHoverEffect from '@/components/TextHoverEffect';
import CareerTimeline from '@/components/CareerTimeline';
import { useLanguage } from '@/components/LanguageProvider';

export default function Home() {
  const projects = PROJECTS;
  const { t, locale } = useLanguage();

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-gray-900 dark:text-white selection:bg-blue-500/30 transition-colors duration-300">

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col justify-center pt-16">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            {/* Carousel Section (Top 3 projects with images) */}
            {projects.length > 0 && (
              <Carousel
                images={projects
                  .filter(p => p.imageUrl)
                  .slice(0, 3)
                  .map(p => ({
                    src: p.imageUrl!,
                    alt: p.title[locale],
                    title: p.title[locale]
                  }))
                }
              />
            )}

            <div className="text-center space-y-8 max-w-4xl mx-auto">
              <div className="relative w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-gray-200 dark:border-white/10 ring-4 ring-blue-500/20 shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={APP_CONFIG.profileImage}
                  alt={APP_CONFIG.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                <TextHoverEffect text={APP_CONFIG.portfolioTitle} />
              </h1>
              <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 leading-relaxed">
                {t.hero.description}
              </p>

              <div className="flex gap-4 justify-center pt-8">
                <Link
                  href="#contact"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold transition-all hover:scale-105 shadow-lg shadow-blue-500/20"
                >
                  {t.hero.contactMe}
                </Link>
                <Link
                  href="#portfolio"
                  className="px-8 py-4 bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10 rounded-full font-bold transition-all hover:scale-105 border border-gray-300 dark:border-white/10"
                >
                  {t.hero.viewWork}
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-100/50 dark:bg-black/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <ScrollReveal>
            <h2 className="text-4xl font-bold mb-12 text-center text-blue-600 dark:text-blue-400">
              {t.about.title}
            </h2>

            <div className="space-y-8 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              <p>
                {t.about.intro(APP_CONFIG.name)}
              </p>

              <div className="bg-white dark:bg-white/5 p-8 rounded-2xl border border-gray-200 dark:border-white/10 hover:border-blue-500/30 transition-colors shadow-sm dark:shadow-none">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t.about.journeyTitle}</h3>
                <p>
                  {t.about.journeyText}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-white/5 p-6 rounded-xl border border-gray-200 dark:border-white/10 hover:border-blue-500/30 transition-colors shadow-sm dark:shadow-none">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{t.about.frontendSkills}</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-500 dark:text-gray-400">
                    <li>JavaScript</li>
                    <li>React Native</li>
                    <li>Next.js</li>
                    <li>React.js</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-white/5 p-6 rounded-xl border border-gray-200 dark:border-white/10 hover:border-blue-500/30 transition-colors shadow-sm dark:shadow-none">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{t.about.backendSkills}</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-500 dark:text-gray-400">
                    <li>Laravel</li>
                    <li>Node.js</li>
                    <li>Bun.js</li>
                    <li>CodeIgniter</li>
                    <li>Python</li>
                    <li>Java Script</li>
                    <li>PHP</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-white/5 p-6 rounded-xl border border-gray-200 dark:border-white/10 hover:border-blue-500/30 transition-colors shadow-sm dark:shadow-none">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{t.about.databaseSkills}</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-500 dark:text-gray-400">
                    <li>MySQL</li>
                    <li>PostgreSQL</li>
                    <li>Redis</li>
                    <li>SQLite</li>
                    <li>Supabase</li>
                    <li>Firebase</li>
                    <li>MongoDB</li>
                  </ul>
                </div>
                <div className="bg-white dark:bg-white/5 p-6 rounded-xl border border-gray-200 dark:border-white/10 hover:border-blue-500/30 transition-colors shadow-sm dark:shadow-none">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{t.about.toolsSkills}</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-500 dark:text-gray-400">
                    <li>Visual Studio Code</li>
                    <li>Ubuntu Server</li>
                    <li>Ms. Office</li>
                    <li>Docker</li>
                    <li>Nginx</li>
                    <li>Git</li>
                    <li>CI/CD</li>
                    <li>N8N</li>
                  </ul>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Career Timeline Section */}
      <section id="career" className="py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-4xl font-bold mb-4 text-center text-blue-600 dark:text-blue-400">
              {t.career.title}
            </h2>
            <p className="text-center text-gray-500 dark:text-gray-400 mb-16 max-w-xl mx-auto">
              {t.career.subtitle}
            </p>
            <CareerTimeline />
          </ScrollReveal>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-4xl font-bold mb-16 text-center text-blue-600 dark:text-blue-400">
              {t.portfolio.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ScrollReveal key={project.id} delay={index * 0.1}>
                  <ProjectCard project={project} />
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-100/50 dark:bg-black/20">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <ScrollReveal>
            <h2 className="text-4xl font-bold mb-8 text-blue-600 dark:text-blue-400">
              {t.contact.title}
            </h2>

            <p className="text-xl text-gray-500 dark:text-gray-400 mb-12">
              {t.contact.description}
            </p>

            <div className="flex flex-col gap-4 max-w-md mx-auto">
              <a
                href="mailto:alvinade998@gmail.com"
                className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10 hover:scale-105 transition-all group shadow-sm dark:shadow-none"
              >
                <span className="font-semibold text-lg group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">{t.contact.emailMe}</span>
              </a>

              <a
                href={APP_CONFIG.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10 hover:scale-105 transition-all group shadow-sm dark:shadow-none"
              >
                <span className="font-semibold text-lg group-hover:text-gray-900 dark:group-hover:text-white transition-colors">GitLab</span>
              </a>

              <a
                href={APP_CONFIG.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10 hover:scale-105 transition-all group shadow-sm dark:shadow-none"
              >
                <span className="font-semibold text-lg group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">LinkedIn</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mini Game Section */}
      <section id="game" className="py-24">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <h2 className="text-4xl font-bold mb-4 text-center text-blue-600 dark:text-blue-400">
              {t.game.title}
            </h2>
            <p className="text-center text-gray-500 dark:text-gray-400 mb-12 max-w-md mx-auto">
              {t.game.description}
            </p>
            <MemoryGame />
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 dark:text-gray-600 border-t border-gray-200 dark:border-white/5">
        <p>© {new Date().getFullYear()} {APP_CONFIG.name}. {t.footer.rights}</p>
      </footer>
    </main>
  );
}
