import React from 'react';
import { OFFICIAL_LINKS } from '../data/barberData';
import { GoogleLogoIcon } from './GoogleEmblem';
import { MessageCircle, Instagram, Share2, BadgeCheck, MapPin, Clock, Star } from 'lucide-react';

interface BioSiteHeaderProps {
  onOpenShare: () => void;
}

export const BioSiteHeader: React.FC<BioSiteHeaderProps> = ({ onOpenShare }) => {
  return (
    <header className="relative text-center pt-8 pb-6 px-4">
      {/* Top share icon */}
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={onOpenShare}
          className="p-2.5 rounded-full bg-[#092442] border border-slate-700/80 text-slate-300 hover:text-white hover:border-[#F28C28] transition-all shadow-md active:scale-95"
          aria-label="Compartilhar Bio"
          title="Compartilhar perfil"
        >
          <Share2 className="w-4 h-4" />
        </button>
      </div>

      {/* Official Logo Spotlight with 3D Ring */}
      <div className="inline-block relative mb-4">
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto rounded-3xl bg-[#092442] border-2 border-[#F28C28] shadow-[0_10px_25px_rgba(242,140,40,0.25)] flex items-center justify-center p-3 transition-transform hover:scale-105">
          <img
            src={OFFICIAL_LINKS.logo}
            alt="Logo Oficial Barbearia Nohvo Santana"
            className="w-full h-full object-contain drop-shadow-md"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-2 -right-2 p-1.5 rounded-full bg-[#101c2c] border-2 border-[#F28C28] text-[#F28C28] shadow-md">
            <BadgeCheck className="w-5 h-5 fill-[#F28C28] text-white" />
          </div>
        </div>
      </div>

      {/* Brand Title */}
      <div className="flex items-center justify-center gap-1.5">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
          Barbearia Nohvo Santana
        </h1>
      </div>

      <p className="text-xs font-bold uppercase tracking-widest text-[#F28C28] mt-1">
        Cuidado Masculino Premium & Estilo
      </p>

      {/* Bio Description */}
      <p className="mt-3 text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
        A tradição da barbearia clássica com a sofisticação e precisão contemporânea no coração de Santana.
      </p>

      {/* Proof & Location Strip */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs">
        <a
          href={OFFICIAL_LINKS.googleReview}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-slate-900 font-bold shadow-sm hover:scale-103 transition-transform"
        >
          <GoogleLogoIcon size={14} />
          <span>5.0</span>
          <div className="flex text-amber-500 text-[10px]">★★★★★</div>
        </a>

        <a
          href={OFFICIAL_LINKS.googleMapsRoute}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#092442] border border-slate-700/80 text-slate-300 font-medium hover:border-[#F28C28] hover:text-white transition-colors"
          title="R. Conselheiro Moreira de Barros, 596 - Traçar rota automática"
        >
          <MapPin className="w-3.5 h-3.5 text-[#F28C28]" />
          <span>R. Moreira de Barros, 596 · Santana</span>
        </a>

        <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800 text-emerald-300 font-medium">
          <Clock className="w-3.5 h-3.5 text-emerald-400" />
          <span>Atendimento Aberto</span>
        </div>
      </div>

      {/* Quick Direct Social Icon Shortcuts */}
      <div className="mt-5 flex items-center justify-center gap-3">
        <a
          href={OFFICIAL_LINKS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-2xl bg-[#092442] border border-slate-700/80 text-emerald-400 hover:text-white hover:bg-[#25D366] hover:border-[#25D366] transition-all shadow-md active:scale-95"
          aria-label="Abrir WhatsApp"
          title="WhatsApp Oficial"
        >
          <MessageCircle className="w-5 h-5" />
        </a>

        <a
          href={OFFICIAL_LINKS.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-2xl bg-[#092442] border border-slate-700/80 text-pink-400 hover:text-white hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-500 hover:to-purple-600 hover:border-pink-500 transition-all shadow-md active:scale-95"
          aria-label="Abrir Instagram"
          title="Instagram Oficial"
        >
          <Instagram className="w-5 h-5" />
        </a>

        <a
          href={OFFICIAL_LINKS.googleReview}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-2xl bg-[#092442] border border-slate-700/80 text-amber-400 hover:text-white hover:bg-amber-600 hover:border-amber-500 transition-all shadow-md active:scale-95"
          aria-label="Avaliar no Google"
          title="Avaliações no Google"
        >
          <Star className="w-5 h-5 fill-amber-400" />
        </a>

        <button
          onClick={onOpenShare}
          className="p-3 rounded-2xl bg-[#092442] border border-slate-700/80 text-slate-300 hover:text-white hover:bg-[#F28C28] hover:border-[#F28C28] transition-all shadow-md active:scale-95"
          aria-label="Compartilhar Link"
          title="Compartilhar Bio"
        >
          <Share2 className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};
