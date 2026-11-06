import React from 'react';
import { OFFICIAL_LINKS } from '../data/barberData';
import { Button3D } from './Button3D';
import { Award, Coffee, ShieldCheck, HeartHandshake, Sparkles, MessageCircle } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-[#092442] relative overflow-hidden border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Showcase (Images) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-slate-700/80 shadow-2xl">
                <img
                  src="/src/assets/images/barbershop_interior_lounge_1793991833779.jpg"
                  alt="Lounge e ambiente exclusivo da Barbearia Nohvo Santana"
                  className="w-full h-[380px] sm:h-[440px] object-cover hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#092442]/90 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#101c2c]/90 backdrop-blur-md border border-slate-700/70 text-white">
                  <div className="flex items-center gap-2 text-[#F28C28] text-xs font-bold uppercase tracking-wider mb-1">
                    <Sparkles className="w-4 h-4" />
                    <span>Ambiente Exclusivo</span>
                  </div>
                  <p className="text-sm font-semibold text-slate-100">
                    Conforto, café expresso e um momento de pausa para renovar sua autoestima.
                  </p>
                </div>
              </div>

              {/* Overlapping Badge / Mini Card */}
              <div className="hidden sm:flex absolute -bottom-6 -right-6 p-4 rounded-2xl bg-[#101c2c] border-2 border-[#F28C28] shadow-2xl items-center gap-3 max-w-xs animate-in fade-in duration-500">
                <div className="p-3 rounded-xl bg-amber-500/15 text-[#F28C28] shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Padrão Nohvo</p>
                  <p className="text-sm font-bold text-white">Excelência em Cada Detalhe</p>
                </div>
              </div>
            </div>
          </div>

          {/* Institutional Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F28C28]">
              <HeartHandshake className="w-4 h-4" />
              <span>Sobre a Barbearia Nohvo Santana</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight text-balance">
              Mais do que um corte, um ritual de confiança e respeito à sua identidade.
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              A <strong className="text-white font-semibold">Barbearia Nohvo Santana</strong> nasceu com a missão de elevar o padrão do cuidado masculino no tradicional bairro de Santana. Unimos as técnicas mais respeitadas da barbearia artesanal às tendências modernas de visagismo e estilo contemporâneo.
            </p>

            <p className="text-sm text-slate-300 leading-relaxed">
              Nosso ambiente foi planejado para que cada cliente sinta-se em casa: cadeiras confortáveis, higiene rigorosa com toalhas descartáveis esterilizadas, navalhas novas a cada atendimento e produtos de formulação premium para saúde dos fios e da pele.
            </p>

            {/* Core Values Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
              <div className="p-4 rounded-xl bg-[#101c2c] border border-slate-700/60 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Biossegurança e Higiene</h4>
                  <p className="text-xs text-slate-400 mt-1">Materiais 100% esterilizados e lâminas descartáveis.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#101c2c] border border-slate-700/60 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-amber-500/10 text-[#F28C28] shrink-0">
                  <Coffee className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Hospitalidade Premium</h4>
                  <p className="text-xs text-slate-400 mt-1">Café expresso cortesia e recepção acolhedora.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button3D
                variant="orange"
                size="md"
                href={OFFICIAL_LINKS.whatsapp}
                icon={<MessageCircle className="w-4 h-4" />}
              >
                Chamar no WhatsApp
              </Button3D>

              <Button3D
                variant="white"
                size="md"
                href="#galeria"
              >
                Conhecer Nosso Trabalho
              </Button3D>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
