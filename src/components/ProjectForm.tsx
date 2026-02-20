'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface ProjectFormProps {
    initialData?: {
        id?: string;
        title: string;
        description: string;
        techStack: string;
        imageUrl?: string;
        githubUrl?: string;
        demoUrl?: string;
    };
}

export default function ProjectForm({ initialData }: ProjectFormProps) {
    const router = useRouter();
    const [formData, setFormData] = useState({
        title: initialData?.title || '',
        description: initialData?.description || '',
        techStack: initialData?.techStack || '',
        imageUrl: initialData?.imageUrl || '',
        githubUrl: initialData?.githubUrl || '',
        demoUrl: initialData?.demoUrl || '',
    });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const url = initialData?.id
                ? `/api/projects/${initialData.id}`
                : '/api/projects';

            const method = initialData?.id ? 'PUT' : 'POST';

            const res = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error('Failed to save project');

            router.push('/');
            router.refresh();
        } catch (error) {
            console.error(error);
            alert('Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto p-6 bg-white/5 rounded-xl border border-white/10">
            <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Project Title</label>
                <input
                    type="text"
                    required
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
                <textarea
                    required
                    rows={4}
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Tech Stack (comma separated)</label>
                <input
                    type="text"
                    required
                    placeholder="Next.js, Tailwind, Prisma"
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                    value={formData.techStack}
                    onChange={(e) => setFormData({ ...formData, techStack: e.target.value })}
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Image URL</label>
                <input
                    type="url"
                    className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                    value={formData.imageUrl}
                    onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                    placeholder="https://example.com/image.jpg"
                />
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">GitHub URL</label>
                    <input
                        type="url"
                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                        value={formData.githubUrl}
                        onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Demo URL</label>
                    <input
                        type="url"
                        className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                        value={formData.demoUrl}
                        onChange={(e) => setFormData({ ...formData, demoUrl: e.target.value })}
                    />
                </div>
            </div>

            <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg transition-colors disabled:opacity-50"
            >
                {loading ? 'Saving...' : 'Save Project'}
            </button>
        </form>
    );
}
