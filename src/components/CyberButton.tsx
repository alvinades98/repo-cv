'use client';

import Link from 'next/link';

interface CyberButtonProps {
  variant?: 'primary' | 'ghost';
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export default function CyberButton({
  variant = 'primary',
  href,
  onClick,
  children,
  className = '',
  external = false,
}: CyberButtonProps) {
  const baseClasses =
    'relative inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] px-8 py-4 transition-all duration-300 overflow-hidden group';

  const variantClasses =
    variant === 'primary'
      ? 'bg-gradient-to-r from-magenta to-purple-neon text-white shadow-[0_0_24px_rgba(255,45,120,0.5),0_0_60px_rgba(155,48,255,0.25)] hover:shadow-[0_0_36px_rgba(255,45,120,0.7),0_0_80px_rgba(155,48,255,0.4)] hover:-translate-y-0.5 hover:scale-[1.02]'
      : 'bg-transparent text-[var(--text-main)] border border-cyan-neon/40 hover:border-cyan-neon hover:shadow-[inset_0_0_20px_rgba(0,245,255,0.15),0_0_20px_rgba(0,245,255,0.3)] hover:text-cyan-neon';

  const content = (
    <>
      {variant === 'primary' && (
        <span
          className="absolute inset-[-2px] -z-10 opacity-70 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'linear-gradient(90deg, #00F5FF, #FF2D78, #9B30FF)',
            filter: 'blur(14px)',
          }}
        />
      )}
      {children}
    </>
  );

  if (href) {
    const linkProps = external
      ? { target: '_blank', rel: 'noopener noreferrer' }
      : {};
    return (
      <Link
        href={href}
        className={`${baseClasses} ${variantClasses} ${className}`}
        {...linkProps}
      >
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClasses} ${variantClasses} ${className}`}>
      {content}
    </button>
  );
}
