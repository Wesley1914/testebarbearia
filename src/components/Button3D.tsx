import React from 'react';

export type Button3DVariant = 'orange' | 'white' | 'navy' | 'whatsapp' | 'google' | 'instagram';
export type Button3DSize = 'sm' | 'md' | 'lg';

interface Button3DProps {
  children: React.ReactNode;
  variant?: Button3DVariant;
  size?: Button3DSize;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  icon?: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
  fullWidth?: boolean;
}

export const Button3D: React.FC<Button3DProps> = ({
  children,
  variant = 'orange',
  size = 'md',
  href,
  onClick,
  icon,
  className = '',
  target,
  rel,
  ariaLabel,
  fullWidth = false,
}) => {
  const sizeClasses: Record<Button3DSize, string> = {
    sm: 'px-3.5 py-1.5 text-xs gap-1.5',
    md: 'px-5 py-2.5 text-sm gap-2',
    lg: 'px-6 py-3.5 text-base gap-2.5 tracking-wide',
  };

  const variantClassMap: Record<Button3DVariant, string> = {
    orange: 'btn-3d-orange',
    white: 'btn-3d-white',
    navy: 'btn-3d-navy',
    whatsapp: 'btn-3d-whatsapp',
    google: 'btn-3d-google',
    instagram: 'btn-3d-instagram',
  };

  const baseClasses = `btn-3d ${sizeClasses[size]} ${variantClassMap[variant]} ${
    fullWidth ? 'w-full flex' : 'inline-flex'
  } ${className}`;

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('https://wa.link');
    return (
      <a
        href={href}
        target={target ?? (isExternal ? '_blank' : undefined)}
        rel={rel ?? (isExternal ? 'noopener noreferrer' : undefined)}
        className={baseClasses}
        onClick={onClick}
        aria-label={ariaLabel}
      >
        {icon && <span className="shrink-0">{icon}</span>}
        <span className="font-bold whitespace-nowrap">{children}</span>
      </a>
    );
  }

  return (
    <button
      type="button"
      className={baseClasses}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span className="font-bold whitespace-nowrap">{children}</span>
    </button>
  );
};
