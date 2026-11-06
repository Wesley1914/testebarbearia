import React from 'react';
import { OFFICIAL_LINKS } from '../data/barberData';
import { Button3D } from './Button3D';
import { GoogleEmblem } from './GoogleEmblem';
import { MessageCircle, Scissors, Star, ShieldCheck, Clock } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* Background with Generated Barbershop Ambience + Measured Dark Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_barbershop_ambience_1793991832121.jpg"
          alt="Ambiente sofisticado da Barbearia Nohvo Santana"
          className="w-full h-full object-cover object-center scale-105 transform animate-in fade-in duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Deep layered gradient scrim with #101c2c and #092442 for perfect contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#101c2c] via-[#101c2c]/85 to-[#092442]/80" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#101c2c]/50 to-[#101c2c]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Official Logo Spotlight with Glow */}
        <div className="inline-flex flex-col items-center justify-center mb-6 group">
          <div className="relative p-3 rounded-2xl bg-[#092442]/80 border border-slate-700/60 shadow-2xl backdrop-blur-sm">
            <img
              src={OFFICIAL_LINKS.logo}
              alt="Logo Barbearia Nohvo Santana"
              className="h-24 sm:h-32 w-auto object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] transition-transform duration-300 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Official Google Badge */}
          <div className="mt-4">
            <a
              href={OFFICIAL_LINKS.googleReview}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform hover:scale-105"
              title="Ver e avaliar no Google"
            >
              <GoogleEmblem size={22} />
            </a>
          </div>
        </div>

        {/* Company Title & Striking Statement */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight sm:leading-none text-balance">
          Barbearia <span className="text-[#F28C28]">Nohvo Santana</span>
        </h1>

        <p className="mt-5 text-xl sm:text-2xl font-medium text-slate-200 max-w-3xl mx-auto leading-relaxed text-balance">
          A tradição da barbearia clássica unida à sofisticação e precisão contemporânea.
        </p>

        <p className="mt-4 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-normal">
          Um espaço pensado exclusivamente para o cuidado, estilo e conforto masculino. Cortes precisos na tesoura e máquina, barba terapia com toalha quente e atendimento de alto padrão.
        </p>

        {/* 3D Action Buttons Grid */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
          <Button3D
            variant="orange"
            size="lg"
            href={OFFICIAL_LINKS.whatsapp}
            icon={<MessageCircle className="w-5 h-5" />}
          >
            Chamar no WhatsApp
          </Button3D>

          <Button3D
            variant="white"
            size="lg"
            href="#servicos"
            icon={<Scissors className="w-5 h-5 text-[#092442]" />}
          >
            Ver Serviços & Preços
          </Button3D>

          <Button3D
            variant="navy"
            size="lg"
            href={OFFICIAL_LINKS.googleReview}
            icon={<Star className="w-5 h-5 text-amber-400 fill-amber-400" />}
          >
            Avaliar no Google
          </Button3D>
        </div>

        {/* Key Features Strip */}
        <div className="mt-14 pt-8 border-t border-slate-700/50 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-[#092442]/60 border border-slate-700/40">
            <div className="p-2 rounded-lg bg-amber-500/10 text-[#F28C28]">
              <Scissors className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-400">Técnica Apurada</p>
              <p className="text-sm font-semibold text-white">Barbeiros Especialistas</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-[#092442]/60 border border-slate-700/40">
            <div className="p-2 rounded-lg bg-amber-500/10 text-[#F28C28]">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-400">Pontualidade</p>
              <p className="text-sm font-semibold text-white">Horário Agendado</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-[#092442]/60 border border-slate-700/40">
            <div className="p-2 rounded-lg bg-amber-500/10 text-[#F28C28]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-400">Higiene Máxima</p>
              <p className="text-sm font-semibold text-white">Navalha Descartável</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-[#092442]/60 border border-slate-700/40">
            <div className="p-2 rounded-lg bg-amber-500/10 text-[#F28C28]">
              <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
            </div>
            <div>
              <p className="text-xs text-slate-400">Nota no Google</p>
              <p className="text-sm font-semibold text-white">5.0 Estrelas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
