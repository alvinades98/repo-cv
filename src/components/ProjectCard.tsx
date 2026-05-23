'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Project } from '@/lib/data';
import { useLanguage } from './LanguageProvider';

export default function ProjectCard({ project }: { project: Project }) {
  const { t, locale } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), {
    stiffness: 200,
    damping: 20,
  });

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

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 800 }}
      className="group relative overflow-hidden border border-white/6 cursor-pointer transition-all duration-300 hover:border-magenta/50 hover:shadow-[0_0_30px_rgba(255,45,120,0.2)]"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div style={{ transform: 'translateZ(20px)' }}>
        {project.imageUrl && (
          <div className="w-full h-48 relative overflow-hidden">
            <img
              src={project.imageUrl}
              alt={project.title[locale]}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            {/* Scan line overlay */}
            <div className="scan-line" />
            {/* Gradient fade bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-dark)] via-transparent to-transparent" />
          </div>
        )}

        <div className="p-6">
          <h3 className="text-lg font-bold text-[var(--text-main)] mb-2 group-hover:text-cyan-neon transition-colors font-display tracking-wide">
            {project.title[locale]}
          </h3>
          <p className="text-[var(--text-muted)] mb-4 line-clamp-3 flex-grow text-sm leading-relaxed font-light">
            {project.description[locale]}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.split(',').map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-[11px] font-medium rounded-full border border-magenta/20 text-magenta/80 font-mono tracking-wide"
              >
                {tech.trim()}
              </span>
            ))}
          </div>

          <div className="flex gap-4 items-center mt-auto font-mono text-xs tracking-wide">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-muted)] hover:text-cyan-neon transition-colors flex items-center gap-2"
              >
                {t.portfolio.gitlab}
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-neon/70 hover:text-cyan-neon transition-colors flex items-center gap-2"
              >
                {t.portfolio.liveDemo}
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
