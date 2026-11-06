import React from 'react';
import { OFFICIAL_LINKS } from '../data/barberData';
import { MessageCircle, Instagram, Star, ShieldCheck } from 'lucide-react';
import { GoogleLogoIcon } from './GoogleEmblem';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#071626] border-t border-slate-800 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand & Logo Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={OFFICIAL_LINKS.logo}
                alt="Logo Barbearia Nohvo Santana"
                className="h-14 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">Barbearia Nohvo Santana</h3>
                <p className="text-xs text-[#F28C28] font-medium">Santana · São Paulo</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              O ponto de encontro do cuidado masculino premium. Cortes modernos, barba terapia e atendimento exclusivo com hora marcada.
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#inicio" className="hover:text-[#F28C28] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#F28C28] transition-colors">
                  Serviços & Preços
                </a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-[#F28C28] transition-colors">
                  Sobre a Barbearia
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-[#F28C28] transition-colors">
                  Galeria de Fotos
                </a>
              </li>
              <li>
                <a href="#avaliacoes" className="hover:text-[#F28C28] transition-colors">
                  Avaliações no Google
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-[#F28C28] transition-colors">
                  Contato & Localização
                </a>
              </li>
            </ul>
          </div>

          {/* Official Shortcuts / Links Required */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Canais Oficiais
            </h4>
            <ul className="space-y-3 text-xs">
              <li>
                <a
                  href={OFFICIAL_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-emerald-400 transition-colors"
                >
                  <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <span className="font-medium">Chamar no WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href={OFFICIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-pink-400 transition-colors"
                >
                  <div className="p-1.5 rounded-lg bg-pink-500/10 text-pink-400">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <span className="font-medium">Instagram @barbearianohvo.santana</span>
                </a>
              </li>
              <li>
                <a
                  href={OFFICIAL_LINKS.googleReview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-amber-400 transition-colors"
                >
                  <div className="p-1.5 rounded-lg bg-white/10 text-white">
                    <GoogleLogoIcon size={16} />
                  </div>
                  <span className="font-medium">Avaliar no Google (5.0 ★)</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Quality & Commitment */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Nosso Compromisso
            </h4>
            <div className="p-4 rounded-xl bg-[#092442]/60 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-white">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Garantia de Satisfação</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-normal">
                Seu estilo alinhado nos mínimos detalhes com os melhores produtos e técnica de ponta em Santana.
              </p>
            </div>
          </div>

        </div>

        {/* Copyright strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Barbearia Nohvo Santana. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 transition-colors">Santana, São Paulo - SP</span>
            <span>·</span>
            <a href={OFFICIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-[#F28C28] transition-colors">
              Agendamentos WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
