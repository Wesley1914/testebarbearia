import React from 'react';
import { OFFICIAL_LINKS, OFFICIAL_ADDRESS } from '../data/barberData';
import { BioCard3D } from './BioCard3D';
import { GoogleLogoIcon } from './GoogleEmblem';
import { MessageCircle, Scissors, Instagram, Star, Navigation, Sparkles, Image as ImageIcon, MapPin, Compass } from 'lucide-react';
import { BioTabType } from './BioTabNavigation';

interface BioLinksViewProps {
  onNavigateTab: (tab: BioTabType) => void;
}

export const BioLinksView: React.FC<BioLinksViewProps> = ({ onNavigateTab }) => {
  return (
    <div className="space-y-4 px-4 pb-6">
      
      {/* 1. O Principal Botão 3D: Chamar no WhatsApp */}
      <BioCard3D
        variant="primary"
        title="CHAMAR NO WHATSAPP"
        subtitle="Agendamentos rápidos, tirar dúvidas e consultar horários vagos"
        badge="Prioritário"
        badgeColor="bg-emerald-500 text-white"
        href={OFFICIAL_LINKS.whatsapp}
        isExternal={true}
        icon={<MessageCircle className="w-6 h-6 text-white" />}
        iconBg="bg-emerald-600/90 text-white"
      />

      {/* 2. Botão 3D de Rota Automática Solicitado */}
      <div className="space-y-2">
        <BioCard3D
          variant="orange"
          title="TRAÇAR ROTA AUTOMÁTICA"
          subtitle={`${OFFICIAL_ADDRESS.street} · ${OFFICIAL_ADDRESS.neighborhood} (GPS)`}
          badge="GPS Ativo"
          badgeColor="bg-amber-400 text-slate-900 font-black"
          href={OFFICIAL_LINKS.googleMapsRoute}
          isExternal={true}
          icon={<Navigation className="w-6 h-6 text-white fill-white animate-pulse" />}
          iconBg="bg-amber-500/30 text-white"
        />

        {/* Quick GPS Switchers (Google Maps & Waze) */}
        <div className="grid grid-cols-2 gap-2 pt-0.5">
          <a
            href={OFFICIAL_LINKS.googleMapsRoute}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#092442] border border-slate-700/80 text-[11px] font-bold text-slate-200 hover:text-white hover:border-[#F28C28] transition-all active:scale-98 shadow-sm"
          >
            <Compass className="w-3.5 h-3.5 text-blue-400" />
            <span>Google Maps</span>
          </a>

          <a
            href={OFFICIAL_LINKS.wazeRoute}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#092442] border border-slate-700/80 text-[11px] font-bold text-slate-200 hover:text-white hover:border-[#F28C28] transition-all active:scale-98 shadow-sm"
          >
            <Navigation className="w-3.5 h-3.5 text-sky-400" />
            <span>Abrir no Waze</span>
          </a>
        </div>
      </div>

      {/* 3. Botão 3D: Avaliar no Google com Emblema Oficial */}
      <BioCard3D
        variant="white"
        title="AVALIE NOSSA BARBEARIA"
        subtitle="Sua avaliação no Google fortalece o nosso trabalho em Santana"
        badge="Google 5.0 ★"
        badgeColor="bg-amber-100 text-amber-900 border border-amber-300"
        href={OFFICIAL_LINKS.googleReview}
        isExternal={true}
        icon={<GoogleLogoIcon size={26} />}
        iconBg="bg-slate-100"
      />

      {/* 4. Botão 3D: Siga Nosso Instagram */}
      <BioCard3D
        variant="navy"
        title="SIGA NOSSO INSTAGRAM"
        subtitle="Acompanhe nossos cortes, novidades e o dia a dia da barbearia."
        badge="@nohvo"
        badgeColor="bg-pink-600 text-white"
        href={OFFICIAL_LINKS.instagram}
        isExternal={true}
        icon={<Instagram className="w-6 h-6 text-pink-400" />}
        iconBg="bg-gradient-to-tr from-amber-500/20 via-pink-500/20 to-purple-600/20"
      />

      {/* 5. Botão 3D: Ver Serviços & Preços */}
      <BioCard3D
        variant="navy"
        title="VER SERVIÇOS & VALORES"
        subtitle="Corte Degradê, Barba Terapia, Combos e cuidados especiais"
        badge="Tabela Atualizada"
        badgeColor="bg-[#F28C28] text-white"
        onClick={() => onNavigateTab('servicos')}
        icon={<Scissors className="w-6 h-6 text-[#F28C28]" />}
        iconBg="bg-amber-500/10"
      />

      {/* 6. Botão 3D: Galeria de Fotos */}
      <BioCard3D
        variant="navy"
        title="GALERIA DE CORTES & AMBIENTE"
        subtitle="Veja fotos reais dos nossos cortes, barbas e espaço em Santana"
        onClick={() => onNavigateTab('galeria')}
        icon={<ImageIcon className="w-6 h-6 text-blue-400" />}
        iconBg="bg-blue-500/10"
      />

      {/* 7. Botão 3D: Localização & Horários */}
      <BioCard3D
        variant="navy"
        title="HORÁRIOS & DETALHES"
        subtitle={`${OFFICIAL_ADDRESS.full}`}
        onClick={() => onNavigateTab('sobre')}
        icon={<MapPin className="w-6 h-6 text-amber-400" />}
        iconBg="bg-amber-500/10"
      />

      {/* Feature highlight mini card */}
      <div className="p-4 rounded-2xl bg-[#092442]/90 border border-slate-700/80 text-center space-y-2 mt-6">
        <div className="flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#F28C28]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Experiência Nohvo Santana</span>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed">
          Ambiente climatizado, café expresso cortesia, Wi-Fi liberado e profissionais com atendimento pontual na R. Conselheiro Moreira de Barros, 596.
        </p>
      </div>

    </div>
  );
};
