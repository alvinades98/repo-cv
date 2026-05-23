'use client';

interface SectionTagProps {
  text: string;
  className?: string;
  centered?: boolean;
}

export default function SectionTag({ text, className = '', centered = false }: SectionTagProps) {
  return (
    <div
      className={`section-tag ${className}`}
      style={centered ? { justifyContent: 'center' } : undefined}
    >
      {text}
    </div>
  );
}
