'use client';

import { useRef, useEffect } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { APP_CONFIG } from '@/lib/config';
import { PROJECTS } from '@/lib/data';
import ScrollReveal from '@/components/ScrollReveal';
import MemoryGame from '@/components/MemoryGame';
import CareerTimeline from '@/components/CareerTimeline';
import GlitchText from '@/components/GlitchText';
import Typewriter from '@/components/Typewriter';
import SectionTag from '@/components/SectionTag';
import CyberButton from '@/components/CyberButton';
import { useLanguage } from '@/components/LanguageProvider';

const TYPEWRITER_LINES_EN = [
  '> initializing dev environment...',
  '> compiling fullstack modules...',
  '> deployment ready_',
];

const TYPEWRITER_LINES_ID = [
  '> menginisialisasi environment...',
  '> mengkompilasi modul fullstack...',
  '> deployment siap_',
];

export default function Home() {
  const projects = PROJECTS;
  const { t, locale } = useLanguage();
  const typewriterLines = locale === 'id' ? TYPEWRITER_LINES_ID : TYPEWRITER_LINES_EN;

  return (
    <main className="neo-portfolio min-h-screen text-[var(--text-main)] selection:bg-magenta selection:text-black transition-colors duration-300 relative overflow-x-clip">
      <div className="relative z-10">
        {/* ================== HERO SECTION ================== */}
        <section id="home" className="min-h-screen flex flex-col justify-center pt-16 relative overflow-hidden">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 items-center max-w-[1200px] mx-auto">
              {/* Left Content — entrance is CSS (.hero-enter) so it runs before hydration */}
              <div className="hero-enter">
                <div className="space-y-5 sm:space-y-8">
                  {/* Tag */}
                  <div className="hero-status inline-flex items-center gap-2.5 font-mono text-[10px] sm:text-xs uppercase tracking-[0.15em]">
                    <span className="hero-status-dot w-2 h-2 shrink-0" />
                    <span className="break-all">SYSTEM ONLINE // VER 2.0.{new Date().getFullYear()}</span>
                  </div>

                  {/* Title */}
                  <h1 className="hero-title font-display text-[clamp(2.5rem,10vw,7rem)] leading-[0.95] tracking-tight">
                    <span className="block overflow-hidden">
                      <span className="inline-block">
                        Full Stack
                      </span>
                    </span>
                    <span className="block overflow-hidden">
                      <span className="inline-block">
                        Developer
                      </span>
                    </span>
                    <span className="block overflow-hidden">
                      <GlitchText
                        text="Portfolio."
                        className="hero-title-accent"
                        as="span"
                      />
                    </span>
                  </h1>

                  {/* Typewriter */}
                  <Typewriter lines={typewriterLines} className="hero-terminal text-xs sm:text-sm" />

                  {/* Subtitle */}
                  <p className="hero-description text-sm sm:text-base md:text-lg leading-[1.7] text-[var(--text-muted)] max-w-[520px] break-words">
                    <b className="text-[var(--text-main)] font-medium">{APP_CONFIG.name}</b> — {t.hero.description}
                  </p>

                  {/* CTA Buttons */}
                  <div className="hero-actions flex gap-3 sm:gap-4 flex-wrap">
                    <CyberButton variant="primary" href="#contact">
                      {t.hero.contactMe} →
                    </CyberButton>
                    <CyberButton variant="ghost" href="#portfolio">
                      {t.hero.viewWork}
                    </CyberButton>
                  </div>
                </div>
              </div>

              {/* Right Visual */}
              <HeroVisual />
            </div>
          </div>

          {/* Scroll Hint */}
          <div className="neo-scroll-hint absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.2em]">
            <span>Scroll</span>
            <div className="scroll-hint-line w-[3px] h-[42px]" />
          </div>
        </section>

        {/* ================== ABOUT / CORE SYSTEMS ================== */}
        <section id="about" className="py-24 relative overflow-x-clip">
          <div className="container mx-auto px-6 md:px-12 max-w-[1300px] relative">
            <ScrollReveal>
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 lg:gap-8 mb-10 sm:mb-16">
                <div>
                  <SectionTag text="Core Systems" />
                  <h2 className="font-display text-[clamp(1.8rem,5vw,4rem)] leading-none tracking-tight">
                    What I Do<br />
                    <span className="stroke-text">Best</span>
                  </h2>
                </div>
                <p className="text-[var(--text-muted)] max-w-[580px] leading-[1.7] font-light text-sm sm:text-base">
                  {t.about.intro(APP_CONFIG.name)}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="land">
              <div className="systems-sheet grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <FeatureCard
                  index={0}
                  corner="01 / FE"
                  title={t.about.frontendSkills}
                  items={['JavaScript', 'React Native', 'Next.js', 'React.js']}
                  icon={
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-7 h-7" strokeWidth={1.5}>
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M3 9h18M9 21V9" />
                    </svg>
                  }
                />
                <FeatureCard
                  index={1}
                  corner="02 / BE"
                  title={t.about.backendSkills}
                  items={['Laravel', 'Node.js', 'Bun.js', 'CodeIgniter', 'Python', 'PHP']}
                  icon={
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-7 h-7" strokeWidth={1.5}>
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  }
                />
                <FeatureCard
                  index={2}
                  corner="03 / DB"
                  title={t.about.databaseSkills}
                  items={['MySQL', 'PostgreSQL', 'Redis', 'SQLite', 'Supabase', 'Firebase', 'MongoDB']}
                  icon={
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-7 h-7" strokeWidth={1.5}>
                      <ellipse cx="12" cy="5" rx="9" ry="3" />
                      <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
                      <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
                    </svg>
                  }
                />
                <FeatureCard
                  index={3}
                  corner="04 / OPS"
                  title={t.about.toolsSkills}
                  items={['VS Code', 'Ubuntu Server', 'Docker', 'Nginx', 'Git', 'CI/CD', 'N8N']}
                  icon={
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-7 h-7" strokeWidth={1.5}>
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    </svg>
                  }
                />
              </div>
            </ScrollReveal>

            {/* Journey Card */}
            <ScrollReveal variant="land">
              <div className="neo-card glass-card journey-card mt-8 p-8 group relative overflow-hidden">
                <div className="corner absolute top-4 right-4 font-mono text-[0.65rem] tracking-[0.2em]">
                  JOURNEY_LOG
                </div>
                <h3 className="text-2xl font-semibold text-[var(--text-main)] mb-4 font-display tracking-wide">
                  {t.about.journeyTitle}
                </h3>
                <p className="text-[var(--text-muted)] leading-relaxed">
                  {t.about.journeyText}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ================== CAREER TIMELINE ================== */}
        <section id="career" className="py-24 relative overflow-x-clip">
          <div className="container mx-auto px-6 md:px-12 relative">
            <ScrollReveal>
              <div className="text-center mb-10 sm:mb-16">
                <SectionTag text="Experience Log" centered />
                <h2 className="font-display text-[clamp(1.8rem,6vw,4rem)] leading-none tracking-tight">
                  Career<br />
                  <span className="stroke-text">Journey</span>
                </h2>
                <p className="text-[var(--text-muted)] max-w-[580px] mx-auto mt-3 sm:mt-4 leading-[1.7] font-light text-sm sm:text-base px-4">
                  {t.career.subtitle}
                </p>
              </div>
            </ScrollReveal>
            <CareerTimeline />
          </div>
        </section>

        {/* ================== PORTFOLIO / VISUAL ARCHIVE ================== */}
        <section id="portfolio" className="py-24 relative overflow-x-clip">
          <div className="container mx-auto px-6 md:px-12 relative max-w-[1400px]">
            <ScrollReveal>
              <div className="text-center mb-10 sm:mb-16">
                <h2 className="font-display text-[clamp(1.8rem,6vw,4rem)] leading-none tracking-tight">
                  Fragments of<br />
                  <span className="stroke-text">Code</span>
                </h2>
                <p className="text-[var(--text-muted)] max-w-[580px] mx-auto mt-3 sm:mt-4 leading-[1.7] font-light text-sm sm:text-base px-4">
                  A collection of projects and experiments built with passion.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ScrollReveal key={project.id} delay={(index % 3) * 0.08} variant="land">
                  <ProjectCard project={project} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ================== CONTACT / CTA BANNER ================== */}
        <section id="contact" className="py-24 relative overflow-x-clip">
          <div className="container mx-auto px-6 md:px-12 relative max-w-[1200px]">
            <ScrollReveal variant="land">
              <div
                className="contact-panel relative p-6 sm:p-10 md:p-16 overflow-hidden"
              >
                {/* Grid pattern inside */}
                <div className="contact-grid-pattern absolute inset-0 pointer-events-none" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 sm:gap-10 items-center">
                  <div>
                    <SectionTag text="Limited Access" />
                    <h2 className="font-display text-[clamp(1.6rem,6vw,3.4rem)] leading-none mb-3 sm:mb-4">
                      Get In Touch<br />
                      <span className="contact-heading-accent">
                        Before The Gate Closes.
                      </span>
                    </h2>
                    <p className="text-[var(--text-muted)] leading-[1.7] mb-5 sm:mb-6 font-light text-sm sm:text-base break-words">
                      {t.contact.description}
                    </p>
                    <CyberButton variant="primary" href="mailto:alvinade998@gmail.com">
                      {t.contact.emailMe} →
                    </CyberButton>
                  </div>

                  {/* Contact boxes */}
                  <div className="contact-links grid grid-cols-1 gap-3 sm:gap-4">
                    <ContactBox
                      label="Email"
                      value="alvinade998@gmail.com"
                      href="mailto:alvinade998@gmail.com"
                      accent="magenta"
                    />
                    <ContactBox
                      label="GitLab"
                      value="@alvinade98"
                      href={APP_CONFIG.socials.github}
                      accent="cyan"
                      external
                    />
                    <ContactBox
                      label="LinkedIn"
                      value="Alvin Ade"
                      href={APP_CONFIG.socials.linkedin}
                      accent="purple"
                      external
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ================== MINI GAME ================== */}
        <section id="game" className="py-24 relative overflow-x-clip">
          <div className="container mx-auto px-6 md:px-12 relative">
            <ScrollReveal>
              <div className="text-center mb-10 sm:mb-12">
                <SectionTag text="System Test" centered />
                <h2 className="font-display text-[clamp(1.8rem,6vw,4rem)] leading-none tracking-tight">
                  Memory<br />
                  <span className="stroke-text">Protocol</span>
                </h2>
                <p className="text-[var(--text-muted)] max-w-[580px] mx-auto mt-3 sm:mt-4 leading-[1.7] font-light text-sm sm:text-base px-4">
                  {t.game.description}
                </p>
              </div>
            </ScrollReveal>
            <MemoryGame />
          </div>
        </section>

        {/* ================== FOOTER ================== */}
        <footer className="neo-footer py-10 relative z-10 overflow-x-clip">
          <div className="container mx-auto px-6 md:px-12 max-w-[1300px] flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="font-display text-xl tracking-wide">
              {APP_CONFIG.name.toUpperCase()}::
              <span className="gradient-text">DEV</span>
            </div>
            <div className="flex gap-8 font-mono text-xs uppercase tracking-[0.15em] text-[var(--text-muted)]">
              <a href={APP_CONFIG.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-neon transition-colors">
                GitLab
              </a>
              <a href={APP_CONFIG.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-neon transition-colors">
                LinkedIn
              </a>
            </div>
            <div className="font-mono text-xs text-[var(--text-muted)] tracking-[0.1em]">
              © {new Date().getFullYear()} {APP_CONFIG.name}. {t.footer.rights}
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}

/* ================== SUB-COMPONENTS ================== */

function HeroVisual() {
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Art is hidden below lg; skip the listener entirely there and for reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce), (max-width: 1023px)').matches) return;
    let frame = 0;
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (frame) return; // one style write per frame, not per event
      frame = requestAnimationFrame(() => {
        frame = 0;
        if (!card1Ref.current || !card2Ref.current) return;
        const x = (mouseX / window.innerWidth - 0.5) * 14;
        const y = (mouseY / window.innerHeight - 0.5) * 14;
        card1Ref.current.style.transform = `translate(${x}px, ${y}px) rotate(4deg)`;
        card2Ref.current.style.transform = `translate(${x * 0.7}px, ${y * 0.7}px) rotate(-6deg)`;
      });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="hero-art hero-enter relative h-[380px] md:h-[540px] hidden lg:block">
      <div
        ref={card1Ref}
        className="hero-art-card hero-art-card--front absolute top-0 right-0 w-[260px] h-[340px]"
        style={{ transform: 'rotate(4deg)', transition: 'transform 0.1s ease-out' }}
      >
        <div className="hero-art-frame">
          <div className="hero-art-image">
            <span>&lt;/&gt;</span>
            <small>WEB / APP / API</small>
          </div>
          <div className="hero-art-meta flex justify-between font-mono text-[0.7rem] mt-3 tracking-[0.1em]">
            <span>INDEPENDENT DEVELOPER</span>
            <span>01</span>
          </div>
          <div className="hero-art-name font-display text-base tracking-wide mt-1">
            {APP_CONFIG.name.toUpperCase()}<span>®</span>
          </div>
        </div>
      </div>

      <div
        ref={card2Ref}
        className="hero-art-card hero-art-card--back absolute bottom-5 left-0 w-[200px] h-[260px]"
        style={{ transform: 'rotate(-6deg)', transition: 'transform 0.1s ease-out' }}
      >
        <div className="hero-art-frame">
          <div className="hero-art-image hero-art-image--alt">
            <span>BUILD<br />BETTER.</span>
            <small>EST. 2018</small>
          </div>
          <div className="hero-art-meta flex justify-between font-mono text-[0.7rem] mt-3 tracking-[0.1em]">
            <span>SELECTED WORK</span>
            <span>02</span>
          </div>
          <div className="hero-art-name font-display text-base tracking-wide mt-1">
            FULL STACK
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({
  index,
  corner,
  title,
  items,
  icon,
}: {
  index: number;
  corner: string;
  title: string;
  items: string[];
  icon: React.ReactNode;
}) {
  const accent = ['coral', 'lime', 'violet', 'coral'][index % 4];
  const [num, code] = corner.split(' / ');

  // One column of the Core Systems spec sheet: accent band with a display numeral, then the skills
  return (
    <article className="systems-col">
      <header className={`systems-band systems-band--${accent}`}>
        <span className="systems-num" aria-hidden="true">{num}</span>
        <span className="systems-icon">{icon}</span>
        <span className="systems-code">{code}</span>
      </header>
      <div className="systems-body">
        <h3 className="systems-title">{title}</h3>
        <ul className="systems-skills">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function ContactBox({
  label,
  value,
  href,
  accent,
  external = false,
}: {
  label: string;
  value: string;
  href: string;
  accent: 'magenta' | 'cyan' | 'purple';
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`neo-card contact-box contact-box--${accent} text-center p-4 sm:p-5 relative group min-w-0`}
    >
      <div className="contact-label font-display text-xl sm:text-2xl leading-none mb-1.5 sm:mb-2 break-words">
        {label}
      </div>
      <div className="font-mono text-[0.6rem] sm:text-[0.65rem] text-[var(--text-muted)] uppercase tracking-[0.15em] sm:tracking-[0.2em] break-all">
        {value}
      </div>
    </a>
  );
}
