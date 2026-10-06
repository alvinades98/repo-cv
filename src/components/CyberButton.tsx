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
  const buttonClassName = `neo-button ${variant === 'ghost' ? 'neo-button--secondary' : ''} ${className}`;

  if (href) {
    const linkProps = external
      ? { target: '_blank', rel: 'noopener noreferrer' }
      : {};
    return (
      <Link
        href={href}
        className={buttonClassName}
        {...linkProps}
      >
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClassName}>
      {children}
    </button>
  );
}
