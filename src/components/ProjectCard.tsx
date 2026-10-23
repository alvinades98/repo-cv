'use client';

import { Project } from '@/lib/data';
import { useLanguage } from './LanguageProvider';

export default function ProjectCard({ project }: { project: Project }) {
  const { t, locale } = useLanguage();
  return (
    <div className="neo-card project-card group relative overflow-hidden">
      <div>
        {project.imageUrl && (
          <div className="project-card-image w-full h-48 relative overflow-hidden">
            <img
              src={project.imageUrl}
              // Cards render ≤ ~420px wide; serve 480w to 1x screens instead of always 800w
              srcSet={`${project.imageUrl.replace('w=800', 'w=480')} 480w, ${project.imageUrl} 800w`}
              sizes="(min-width: 1024px) 420px, (min-width: 768px) 50vw, 100vw"
              width={800}
              height={384}
              loading="lazy"
              decoding="async"
              alt={project.title[locale]}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}

        <div className="project-card-content p-4 sm:p-6">
          <h3 className="text-base sm:text-lg font-bold text-[var(--text-main)] mb-2 group-hover:text-cyan-neon transition-colors font-display tracking-wide break-words">
            {project.title[locale]}
          </h3>
          <p className="text-[var(--text-muted)] mb-4 line-clamp-3 flex-grow text-sm leading-relaxed font-light break-words">
            {project.description[locale]}
          </p>

          <div className="flex flex-wrap gap-2 mb-4 overflow-hidden">
            {project.techStack.split(',').map((tech) => (
              <span
                key={tech}
                className="project-tech px-2.5 py-1 text-[10px] sm:text-[11px] font-bold border font-mono tracking-wide whitespace-nowrap"
              >
                {tech.trim()}
              </span>
            ))}
          </div>

          <div className="flex gap-4 items-center mt-auto font-mono text-[10px] sm:text-xs tracking-wide overflow-hidden">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link text-[var(--text-muted)] hover:text-cyan-neon transition-colors flex items-center gap-2 break-all"
              >
                {t.portfolio.gitlab}
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link text-cyan-neon/70 hover:text-cyan-neon transition-colors flex items-center gap-2 break-all"
              >
                {t.portfolio.liveDemo}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
