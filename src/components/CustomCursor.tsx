'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const cursorDotRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const cursor = cursorRef.current;
        const cursorDot = cursorDotRef.current;
        if (!cursor || !cursorDot) return;

        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            // Dot follows instantly
            cursorDot.style.left = `${mouseX}px`;
            cursorDot.style.top = `${mouseY}px`;

            if (!isVisible) setIsVisible(true);
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);
        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        // Detect hoverable elements
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.closest('a') ||
                target.closest('button') ||
                target.closest('[role="button"]') ||
                target.closest('input') ||
                target.closest('textarea') ||
                target.closest('select') ||
                target.closest('[data-cursor="pointer"]') ||
                window.getComputedStyle(target).cursor === 'pointer'
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        // Smooth follow ring animation
        const animate = () => {
            const dx = mouseX - cursorX;
            const dy = mouseY - cursorY;
            cursorX += dx * 0.15;
            cursorY += dy * 0.15;
            cursor.style.left = `${cursorX}px`;
            cursor.style.top = `${cursorY}px`;
            requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        window.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseleave', handleMouseLeave);
        document.addEventListener('mouseenter', handleMouseEnter);
        requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [isVisible]);

    // Hide on touch devices
    if (typeof window !== 'undefined' && 'ontouchstart' in window) {
        return null;
    }

    return (
        <>
            {/* Outer ring - smooth follow */}
            <div
                ref={cursorRef}
                className="fixed z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2"
                style={{
                    opacity: isVisible ? 1 : 0,
                    transition: 'width 0.3s ease, height 0.3s ease, opacity 0.3s ease, border-color 0.3s ease, background-color 0.3s ease',
                    width: isHovering ? '48px' : isClicking ? '28px' : '36px',
                    height: isHovering ? '48px' : isClicking ? '28px' : '36px',
                    borderRadius: '50%',
                    border: `2px solid ${isHovering ? 'rgba(59, 130, 246, 0.8)' : 'rgba(147, 197, 253, 0.5)'}`,
                    backgroundColor: isHovering
                        ? 'rgba(59, 130, 246, 0.1)'
                        : isClicking
                            ? 'rgba(59, 130, 246, 0.15)'
                            : 'transparent',
                    mixBlendMode: 'difference' as const,
                }}
            />
            {/* Inner dot - instant follow */}
            <div
                ref={cursorDotRef}
                className="fixed z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2"
                style={{
                    opacity: isVisible ? 1 : 0,
                    transition: 'width 0.15s ease, height 0.15s ease, opacity 0.3s ease, background-color 0.2s ease',
                    width: isHovering ? '6px' : isClicking ? '10px' : '5px',
                    height: isHovering ? '6px' : isClicking ? '10px' : '5px',
                    borderRadius: '50%',
                    backgroundColor: isHovering
                        ? 'rgb(59, 130, 246)'
                        : 'rgb(147, 197, 253)',
                }}
            />
        </>
    );
}
