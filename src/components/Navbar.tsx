import React, { useState } from 'react';
import { OFFICIAL_LINKS } from '../data/barberData';
import { Button3D } from './Button3D';
import { MessageCircle, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Avaliações', href: '#avaliacoes' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#101c2c]/95 backdrop-blur-md border-b border-[#092442]/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Zone 1: Brand Wordmark & Official Logo */}
          <a
            href="#inicio"
            className="flex items-center gap-3 shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F28C28] rounded-lg"
          >
            <img
              src={OFFICIAL_LINKS.logo}
              alt="Logo Barbearia Nohvo Santana"
              className="h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="flex flex-col text-left">
              <span className="text-lg font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors">
                Nohvo Santana
              </span>
              <span className="text-[11px] font-medium uppercase tracking-widest text-slate-400">
                Barbearia Premium
              </span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap transition-colors hover:text-[#F28C28] relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#F28C28] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action (WhatsApp 3D Button) */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <Button3D
              variant="orange"
              size="md"
              href={OFFICIAL_LINKS.whatsapp}
              icon={<MessageCircle className="w-4 h-4" />}
            >
              Chamar no WhatsApp
            </Button3D>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-3 lg:hidden">
            <a
              href={OFFICIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden p-2 rounded-lg bg-[#F28C28] text-white shadow-md active:scale-95 transition-transform"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-[#092442] focus:outline-none focus:ring-2 focus:ring-[#F28C28]"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#092442] border-b border-slate-700/80 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:bg-[#101c2c] hover:text-[#F28C28] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-slate-700/60">
            <Button3D
              variant="orange"
              size="lg"
              fullWidth
              href={OFFICIAL_LINKS.whatsapp}
              icon={<MessageCircle className="w-5 h-5" />}
              onClick={handleLinkClick}
            >
              Chamar no WhatsApp
            </Button3D>
          </div>
        </div>
      )}
    </header>
  );
};
