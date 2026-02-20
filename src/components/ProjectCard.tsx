'use client';

import { Project } from '@/lib/data';
import { useLanguage } from './LanguageProvider';

export default function ProjectCard({ project }: { project: Project }) {
    const { t } = useLanguage();

    return (
        <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 group flex flex-col h-full shadow-sm dark:shadow-none">
            {project.imageUrl && (
                <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                </div>
            )}
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4 line-clamp-3 flex-grow">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.split(',').map((tech) => (
                    <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full border border-blue-200 dark:border-blue-500/20"
                    >
                        {tech.trim()}
                    </span>
                ))}
            </div>

            <div className="flex gap-4 items-center mt-auto">
                {project.githubUrl && (
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors flex items-center gap-2"
                    >
                        {t.portfolio.github}
                    </a>
                )}
                {project.demoUrl && (
                    <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-500 dark:text-blue-400 hover:text-blue-400 dark:hover:text-blue-300 transition-colors flex items-center gap-2"
                    >
                        {t.portfolio.liveDemo}
                    </a>
                )}
            </div>
        </div>
    );
}
