import React, { useState } from 'react';
import { OFFICIAL_LINKS } from '../data/barberData';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 group">
      {/* Tooltip bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#092442] border border-slate-700/80 text-white shadow-xl text-xs font-semibold animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Agende seu corte via WhatsApp</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-slate-400 hover:text-white ml-1"
            aria-label="Fechar dica"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* 3D Physical WhatsApp Button */}
      <a
        href={OFFICIAL_LINKS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chamar no WhatsApp Barbearia Nohvo Santana"
        className="btn-3d btn-3d-whatsapp p-3.5 sm:p-4 rounded-full shadow-2xl flex items-center justify-center relative transition-transform hover:scale-105 active:scale-95"
      >
        <MessageCircle className="w-7 h-7 sm:w-8 h-8 text-white" />
        <span className="sr-only">Chamar no WhatsApp</span>
      </a>
    </div>
  );
};
