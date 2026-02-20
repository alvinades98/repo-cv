'use client';

interface TextHoverEffectProps {
    text: string;
    className?: string;
}

export default function TextHoverEffect({ text, className = '' }: TextHoverEffectProps) {
    return (
        <span className={className}>
            {text.split('').map((char, index) => (
                <span
                    key={index}
                    className="inline-block transition-all duration-200 ease-out
            text-blue-600 dark:text-blue-400
            hover:text-blue-400 hover:dark:text-white
            hover:scale-125 cursor-default"
                    style={{ transformOrigin: 'center bottom' }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </span>
            ))}
        </span>
    );
}
