'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface CarouselProps {
    images: {
        src: string;
        alt: string;
        title: string;
    }[];
}

export default function Carousel({ images }: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    if (!images.length) return null;

    return (
        <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-12 group">
            <div
                className="absolute inset-0 flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((img, idx) => (
                    <div key={idx} className="min-w-full h-full relative">
                        {/* Use simple img tag if remote patterns not configured or just standard next/image with logic */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={img.src}
                            alt={img.alt}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-white">{img.title}</h2>
                        </div>
                    </div>
                ))}
            </div>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-white w-6' : 'bg-white/50'
                            }`}
                    />
                ))}
            </div>

            {/* Arrows */}
            <button
                onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
                ←
            </button>
            <button
                onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
                →
            </button>
        </div>
    );
}
