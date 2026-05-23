'use client';

import { useRef, useState, useEffect } from 'react';
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
import AnimatedBackground from '@/components/AnimatedBackground';
import { useLanguage } from '@/components/LanguageProvider';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

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
    <main className="min-h-screen text-[var(--text-main)] selection:bg-magenta selection:text-black transition-colors duration-300 relative overflow-x-hidden">
      <AnimatedBackground />

      <div className="relative z-10">
        {/* ================== HERO SECTION ================== */}
        <section id="home" className="min-h-screen flex flex-col justify-center pt-16 relative overflow-hidden">
          <div className="container mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 items-center max-w-[1200px] mx-auto">
              {/* Left Content */}
              <ScrollReveal>
                <div className="space-y-5 sm:space-y-8">
                  {/* Tag */}
                  <div className="inline-flex items-center gap-2.5 font-mono text-[10px] sm:text-xs text-cyan-neon uppercase tracking-[0.25em]">
                    <span
                      className="w-2 h-2 rounded-full bg-cyan-neon shrink-0"
                      style={{ boxShadow: '0 0 12px #00F5FF' }}
                    />
                    <span className="break-all">SYSTEM ONLINE // VER 2.0.{new Date().getFullYear()}</span>
                  </div>

                  {/* Title */}
                  <h1 className="font-display text-[clamp(2.5rem,10vw,7rem)] leading-[0.95] tracking-tight">
                    <span className="block overflow-hidden">
                      <span className="inline-block bg-gradient-to-b from-white to-[#b8b8d0] bg-clip-text text-transparent">
                        Full Stack
                      </span>
                    </span>
                    <span className="block overflow-hidden">
                      <span className="inline-block bg-gradient-to-b from-white to-[#b8b8d0] bg-clip-text text-transparent">
                        Developer
                      </span>
                    </span>
                    <span className="block overflow-hidden">
                      <GlitchText
                        text="Portfolio."
                        className="bg-gradient-to-r from-magenta via-purple-neon to-cyan-neon bg-clip-text text-transparent"
                        as="span"
                      />
                    </span>
                  </h1>

                  {/* Typewriter */}
                  <Typewriter lines={typewriterLines} className="text-xs sm:text-sm" />

                  {/* Subtitle */}
                  <p className="text-sm sm:text-base md:text-lg leading-[1.7] text-[var(--text-muted)] max-w-[520px] font-light break-words">
                    <b className="text-[var(--text-main)] font-medium">{APP_CONFIG.name}</b> — {t.hero.description}
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex gap-3 sm:gap-4 flex-wrap">
                    <CyberButton variant="primary" href="#contact">
                      {t.hero.contactMe} →
                    </CyberButton>
                    <CyberButton variant="ghost" href="#portfolio">
                      {t.hero.viewWork}
                    </CyberButton>
                  </div>
                </div>
              </ScrollReveal>

              {/* Right Visual */}
              <ScrollReveal delay={0.2}>
                <HeroVisual />
              </ScrollReveal>
            </div>
          </div>

          {/* Scroll Hint */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 font-mono text-[0.7rem] text-[var(--text-muted)] uppercase tracking-[0.3em]">
            <span>Scroll</span>
            <div
              className="w-px h-[50px]"
              style={{
                background: 'linear-gradient(180deg, #00F5FF, transparent)',
                animation: 'scroll-down 2s infinite',
              }}
            />
          </div>
        </section>

        {/* ================== ABOUT / CORE SYSTEMS ================== */}
        <section id="about" className="py-24 relative overflow-x-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent pointer-events-none" />
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

            {/* Journey Card */}
            <ScrollReveal delay={0.2}>
              <div className="mt-8 glass-card p-8 rounded-2xl group relative overflow-hidden">
                <div className="corner absolute top-4 right-4 font-mono text-[0.65rem] text-white/20 tracking-[0.2em]">
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
        <section id="career" className="py-24 relative overflow-x-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-neon/[0.02] to-transparent pointer-events-none" />
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
        <section id="portfolio" className="py-24 relative overflow-x-hidden">
          <div className="container mx-auto px-6 md:px-12 relative max-w-[1400px]">
            <ScrollReveal>
              <div className="text-center mb-10 sm:mb-16">
                <SectionTag text="Visual Archive" centered />
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
                <ScrollReveal key={project.id} delay={index * 0.1}>
                  <ProjectCard project={project} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ================== CONTACT / CTA BANNER ================== */}
        <section id="contact" className="py-24 relative overflow-x-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-neon/[0.02] to-transparent pointer-events-none" />
          <div className="container mx-auto px-6 md:px-12 relative max-w-[1200px]">
            <ScrollReveal>
              <div
                className="relative p-6 sm:p-10 md:p-16 overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,45,120,0.15), rgba(155,48,255,0.1) 50%, rgba(0,245,255,0.12))',
                  border: '1px solid rgba(255,45,120,0.3)',
                }}
              >
                {/* Grid pattern inside */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'repeating-linear-gradient(90deg, rgba(0,245,255,0.06) 0 1px, transparent 1px 30px), repeating-linear-gradient(0deg, rgba(255,45,120,0.04) 0 1px, transparent 1px 30px)',
                  }}
                />
                {/* Glow orb */}
                <div
                  className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full -top-[150px] sm:-top-[200px] -right-[80px] sm:-right-[100px] pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle, rgba(255,45,120,0.4), transparent 70%)',
                    filter: 'blur(40px)',
                  }}
                />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 sm:gap-10 items-center">
                  <div>
                    <SectionTag text="Limited Access" />
                    <h2 className="font-display text-[clamp(1.6rem,6vw,3.4rem)] leading-none mb-3 sm:mb-4">
                      Get In Touch<br />
                      <span className="bg-gradient-to-r from-cyan-neon to-magenta bg-clip-text text-transparent">
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
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
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
        <section id="game" className="py-24 relative overflow-x-hidden">
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
        <footer className="py-10 border-t border-white/5 relative z-10 overflow-x-hidden">
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
    const handleMouseMove = (e: MouseEvent) => {
      if (!card1Ref.current || !card2Ref.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 14;
      const y = (e.clientY / window.innerHeight - 0.5) * 14;
      card1Ref.current.style.transform = `translate(${x}px, ${y}px)`;
      card2Ref.current.style.transform = `translate(${x * 0.7}px, ${y * 0.7}px)`;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative h-[380px] md:h-[540px] hidden lg:block">
      <div
        ref={card1Ref}
        className="absolute top-0 right-0 w-[260px] h-[340px] animate-float"
        style={{ transform: 'rotate(4deg)', transition: 'transform 0.1s ease-out' }}
      >
        <div className="w-full h-full border border-white/8 rounded-xl p-4 overflow-hidden backdrop-blur-md"
          style={{
            background: 'linear-gradient(135deg, rgba(255,45,120,0.08), rgba(0,245,255,0.05))',
            boxShadow: '0 30px 80px rgba(255,45,120,0.15)',
          }}
        >
          <div className="w-full h-[75%] rounded-lg relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(255,45,120,0.5), rgba(155,48,255,0.3) 40%, rgba(0,245,255,0.4)), repeating-linear-gradient(45deg, rgba(0,0,0,0.2) 0 2px, transparent 2px 6px)',
            }}
          >
            <div className="absolute inset-0" style={{
              background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.4) 0 1px, transparent 1px 3px)',
              mixBlendMode: 'multiply',
            }} />
          </div>
          <div className="flex justify-between font-mono text-[0.7rem] text-cyan-neon mt-3 tracking-[0.1em]">
            <span>DEV_01</span>
            <span>S+</span>
          </div>
          <div className="font-display text-base text-white tracking-wide mt-1">
            {APP_CONFIG.name.toUpperCase()}
          </div>
        </div>
      </div>

      <div
        ref={card2Ref}
        className="absolute bottom-5 left-0 w-[200px] h-[260px] animate-float-delayed"
        style={{ transform: 'rotate(-6deg)', transition: 'transform 0.1s ease-out' }}
      >
        <div className="w-full h-full border border-cyan-neon/30 rounded-xl p-4 overflow-hidden backdrop-blur-md"
          style={{
            background: 'linear-gradient(135deg, rgba(0,245,255,0.08), rgba(155,48,255,0.05))',
            boxShadow: '0 30px 80px rgba(0,245,255,0.15)',
          }}
        >
          <div className="w-full h-[75%] rounded-lg relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(0,245,255,0.5), rgba(155,48,255,0.4), rgba(255,45,120,0.3))',
            }}
          >
            <div className="absolute inset-0" style={{
              background: 'repeating-linear-gradient(0deg, rgba(0,0,0,0.4) 0 1px, transparent 1px 3px)',
              mixBlendMode: 'multiply',
            }} />
          </div>
          <div className="flex justify-between font-mono text-[0.7rem] text-cyan-neon mt-3 tracking-[0.1em]">
            <span>STACK_02</span>
            <span>A</span>
          </div>
          <div className="font-display text-base text-cyan-neon tracking-wide mt-1">
            FULLSTACK
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
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = (e.clientX - rect.left) / rect.width - 0.5;
    const cy = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(cx);
    y.set(cy);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const accentColors = [
    { border: 'border-magenta', bg: 'from-magenta/15', text: 'text-magenta', shadow: 'hover:shadow-[0_20px_60px_rgba(255,45,120,0.2),0_0_40px_rgba(0,245,255,0.1)]' },
    { border: 'border-cyan-neon', bg: 'from-cyan-neon/15', text: 'text-cyan-neon', shadow: 'hover:shadow-[0_20px_60px_rgba(0,245,255,0.2),0_0_40px_rgba(155,48,255,0.15)]' },
    { border: 'border-purple-neon', bg: 'from-purple-neon/15', text: 'text-purple-neon', shadow: 'hover:shadow-[0_20px_60px_rgba(155,48,255,0.2),0_0_40px_rgba(255,45,120,0.15)]' },
    { border: 'border-magenta', bg: 'from-magenta/15', text: 'text-magenta', shadow: 'hover:shadow-[0_20px_60px_rgba(255,45,120,0.2),0_0_40px_rgba(0,245,255,0.1)]' },
  ];
  const ac = accentColors[index % 4];

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 900 }}
      className={`relative p-5 sm:p-8 overflow-hidden group min-h-[260px] sm:min-h-[300px] border border-white/6 transition-all duration-400 ${ac.shadow}`}
      whileHover={{ scale: 1.02 }}
    >
      {/* Gradient border on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
        style={{
          padding: '1px',
          background: `linear-gradient(135deg, var(--magenta), transparent 40%, var(--cyan))`,
          WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />

      <div className="corner absolute top-3 right-3 sm:top-4 sm:right-4 font-mono text-[0.6rem] sm:text-[0.65rem] text-white/20 tracking-[0.2em]">
        {corner}
      </div>

      <div className="font-mono text-[0.7rem] sm:text-[0.78rem] text-[var(--text-muted)] tracking-[0.2em] mb-4 sm:mb-6">
        // FEATURE.0{index + 1}
      </div>

      <div
        className={`w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6 flex items-center justify-center border ${ac.border} bg-gradient-to-br ${ac.bg} to-transparent ${ac.text} relative shrink-0`}
      >
        {icon}
      </div>

      <h3 className="font-heading text-xl sm:text-2xl tracking-wide mb-2 sm:mb-3 text-white break-words">{title}</h3>

      <ul className="space-y-1 text-[var(--text-muted)] text-xs sm:text-sm font-light">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2 break-words">
            <span className={`w-1 h-1 rounded-full shrink-0 ${ac.text === 'text-magenta' ? 'bg-magenta' : ac.text === 'text-cyan-neon' ? 'bg-cyan-neon' : 'bg-purple-neon'}`} />
            <span className="break-words">{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
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
  const borderColors = {
    magenta: 'border-magenta/30 hover:border-magenta/60 hover:shadow-[0_0_30px_rgba(255,45,120,0.2)]',
    cyan: 'border-cyan-neon/30 hover:border-cyan-neon/60 hover:shadow-[0_0_30px_rgba(0,245,255,0.2)]',
    purple: 'border-purple-neon/30 hover:border-purple-neon/60 hover:shadow-[0_0_30px_rgba(155,48,255,0.2)]',
  };

  const numColors = {
    magenta: 'from-white to-magenta',
    cyan: 'from-white to-cyan-neon',
    purple: 'from-white to-purple-neon',
  };

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`text-center p-4 sm:p-5 border ${borderColors[accent]} bg-[var(--bg-dark)]/60 backdrop-blur-sm relative group transition-all duration-300 min-w-0`}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${accent === 'magenta' ? '#FF2D78' : accent === 'cyan' ? '#00F5FF' : '#9B30FF'}, transparent)`,
        }}
      />
      <div
        className={`font-display text-xl sm:text-2xl leading-none mb-1.5 sm:mb-2 bg-gradient-to-b ${numColors[accent]} bg-clip-text text-transparent break-words`}
      >
        {label}
      </div>
      <div className="font-mono text-[0.6rem] sm:text-[0.65rem] text-[var(--text-muted)] uppercase tracking-[0.15em] sm:tracking-[0.2em] break-all">
        {value}
      </div>
    </a>
  );
}
