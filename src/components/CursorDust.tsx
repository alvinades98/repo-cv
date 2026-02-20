'use client';

import { useEffect, useRef } from 'react';

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
    maxLife: number;
    size: number;
    opacity: number;
}

export default function CursorDust() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const mouseRef = useRef({ x: 0, y: 0 });
    const animFrameRef = useRef<number>(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        let lastX = 0;
        let lastY = 0;
        let throttle = 0;

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };

            // Calculate speed for intensity
            const dx = e.clientX - lastX;
            const dy = e.clientY - lastY;
            const speed = Math.sqrt(dx * dx + dy * dy);
            lastX = e.clientX;
            lastY = e.clientY;

            // Throttle particle creation
            throttle++;
            if (throttle % 2 !== 0) return;

            // Spawn particles based on speed
            const count = Math.min(Math.floor(speed * 0.3), 4);
            for (let i = 0; i < count; i++) {
                particlesRef.current.push({
                    x: e.clientX + (Math.random() - 0.5) * 8,
                    y: e.clientY + (Math.random() - 0.5) * 8,
                    vx: (Math.random() - 0.5) * 1.5,
                    vy: (Math.random() - 0.5) * 1.5 - 0.5,
                    life: 0,
                    maxLife: 30 + Math.random() * 20,
                    size: 1 + Math.random() * 2.5,
                    opacity: 0.3 + Math.random() * 0.4,
                });
            }

            // Limit particles
            if (particlesRef.current.length > 80) {
                particlesRef.current = particlesRef.current.slice(-80);
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            const isDark = document.documentElement.classList.contains('dark');

            particlesRef.current = particlesRef.current.filter((p) => {
                p.life++;
                if (p.life >= p.maxLife) return false;

                p.x += p.vx;
                p.y += p.vy;
                p.vy -= 0.01; // slight float upward
                p.vx *= 0.98;

                const progress = p.life / p.maxLife;
                const alpha = p.opacity * (1 - progress);
                const size = p.size * (1 - progress * 0.5);

                if (isDark) {
                    ctx.fillStyle = `rgba(147, 197, 253, ${alpha})`; // blue-300
                } else {
                    ctx.fillStyle = `rgba(59, 130, 246, ${alpha * 0.6})`; // blue-500
                }

                ctx.beginPath();
                ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
                ctx.fill();

                return true;
            });

            animFrameRef.current = requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', handleMouseMove);
        animFrameRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animFrameRef.current);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-[99] pointer-events-none"
            aria-hidden="true"
        />
    );
}
