'use client';

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'div';
}

export default function GlitchText({ text, className = '', as: Tag = 'span' }: GlitchTextProps) {
  return (
    <span className="inline-block overflow-hidden">
      <Tag className={`glitch-text ${className}`} data-text={text}>
        {text}
      </Tag>
    </span>
  );
}
