import React from 'react';
import { ChevronRight, ExternalLink } from 'lucide-react';

export type BioCardVariant = 'orange' | 'primary' | 'navy' | 'white';

interface BioCard3DProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  iconBg?: string;
  iconColor?: string;
  badge?: string;
  badgeColor?: string;
  href?: string;
  onClick?: () => void;
  variant?: BioCardVariant;
  isExternal?: boolean;
  className?: string;
}

export const BioCard3D: React.FC<BioCard3DProps> = ({
  title,
  subtitle,
  icon,
  iconBg = 'bg-[#092442]',
  iconColor = 'text-white',
  badge,
  badgeColor = 'bg-[#F28C28] text-white',
  href,
  onClick,
  variant = 'navy',
  isExternal = false,
  className = '',
}) => {
  const variantClassMap: Record<BioCardVariant, string> = {
    orange: 'bio-card-3d bio-card-3d-orange',
    primary: 'bio-card-3d bio-card-3d-primary text-white',
    navy: 'bio-card-3d bio-card-3d-navy text-white',
    white: 'bio-card-3d bio-card-3d-white text-slate-900',
  };

  const content = (
    <>
      {/* Icon Section */}
      {icon && (
        <div
          className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center mr-3.5 shadow-md ${iconBg} ${iconColor} transition-transform group-hover:scale-105`}
        >
          {icon}
        </div>
      )}

      {/* Text Info */}
      <div className="flex-1 min-w-0 text-left">
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className={`font-bold text-sm sm:text-base tracking-tight leading-snug truncate ${
              variant === 'white' ? 'text-slate-900' : 'text-white'
            }`}
          >
            {title}
          </span>
          {badge && (
            <span
              className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full shrink-0 shadow-sm ${badgeColor}`}
            >
              {badge}
            </span>
          )}
        </div>

        {subtitle && (
          <p
            className={`text-xs mt-0.5 line-clamp-2 leading-relaxed ${
              variant === 'primary'
                ? 'text-amber-100 font-medium'
                : variant === 'white'
                ? 'text-slate-600'
                : 'text-slate-300'
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>

      {/* Right Indicator */}
      <div className="shrink-0 ml-2">
        {isExternal ? (
          <div
            className={`p-1.5 rounded-lg ${
              variant === 'primary' ? 'bg-black/15 text-white' : 'text-slate-400 group-hover:text-white'
            }`}
          >
            <ExternalLink className="w-4 h-4" />
          </div>
        ) : (
          <div
            className={`p-1.5 rounded-lg ${
              variant === 'primary' ? 'bg-black/15 text-white' : 'text-slate-400 group-hover:text-white'
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </div>
        )}
      </div>
    </>
  );

  const combinedClass = `group ${variantClassMap[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        className={combinedClass}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={combinedClass} onClick={onClick}>
      {content}
    </button>
  );
};
