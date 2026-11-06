import React, { useState } from 'react';
import { ServiceItem, OFFICIAL_LINKS } from '../data/barberData';
import { Button3D } from './Button3D';
import { EditServicesModal } from './EditServicesModal';
import { MessageCircle, Clock, Sparkles, SlidersHorizontal, Scissors } from 'lucide-react';

interface ServicesSectionProps {
  services: ServiceItem[];
  onUpdateServices: (services: ServiceItem[]) => void;
  onResetServices: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  services,
  onUpdateServices,
  onResetServices,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const categories = [
    { id: 'todos', label: 'Todos os Serviços' },
    { id: 'cabelo', label: 'Cabelo & Cortes' },
    { id: 'barba', label: 'Barba & Terapia' },
    { id: 'combo', label: 'Combos Especiais' },
    { id: 'especial', label: 'Tratamentos' },
  ];

  const filteredServices = services.filter((s) => {
    if (activeCategory === 'todos') return true;
    return s.category === activeCategory;
  });

  const getWhatsAppLinkForService = (serviceName: string) => {
    // Official wa.link base
    return `${OFFICIAL_LINKS.whatsapp}?text=${encodeURIComponent(
      `Olá! Vi o site da Barbearia Nohvo Santana e gostaria de agendar o serviço: ${serviceName}. Quais os próximos horários disponíveis?`
    )}`;
  };

  return (
    <section id="servicos" className="py-24 bg-[#101c2c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F28C28] mb-3">
              <Scissors className="w-4 h-4" />
              <span>Menu de Cuidados Masculinos</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Nossos Serviços & Cuidados
            </h2>
            <p className="mt-3 text-base text-slate-300 max-w-2xl">
              Cada atendimento é um ritual de bem-estar. Produtos premium, navalhas descartáveis e a habilidade dos melhores barbeiros de Santana.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setIsEditModalOpen(true)}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#092442] border border-slate-700/80 text-xs font-semibold text-slate-300 hover:text-white hover:border-[#F28C28] transition-all shadow-sm"
              title="Ajustar serviços e preços da barbearia"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#F28C28]" />
              <span>Editar Valores / Serviços</span>
            </button>
          </div>
        </div>

        {/* Category Filter Tabs (Interactive segmented control) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#F28C28] text-white shadow-md shadow-[#F28C28]/20 scale-102'
                  : 'bg-[#092442] text-slate-300 hover:bg-[#153457] hover:text-white border border-slate-700/60'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`group flex flex-col justify-between p-6 rounded-2xl bg-[#092442] border transition-all duration-300 hover:-translate-y-1 ${
                service.isPopular
                  ? 'border-[#F28C28]/60 shadow-lg shadow-[#F28C28]/5 relative overflow-hidden'
                  : 'border-slate-700/60 hover:border-slate-600'
              }`}
            >
              {service.isPopular && (
                <div className="absolute top-0 right-0 bg-[#F28C28] text-white text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-bl-xl flex items-center gap-1 shadow-sm">
                  <Sparkles className="w-3 h-3" />
                  Mais Pedido
                </div>
              )}

              <div>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                    {service.name}
                  </h3>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-400 mt-2">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#F28C28]" />
                    {service.durationMinutes} minutos
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="capitalize">{service.category}</span>
                </div>

                <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-700/60 flex items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 block">
                    Valor
                  </span>
                  <span className="text-2xl font-extrabold text-white tabular-nums tracking-tight">
                    R$ {service.price.toFixed(2).replace('.', ',')}
                  </span>
                </div>

                <Button3D
                  variant="orange"
                  size="sm"
                  href={getWhatsAppLinkForService(service.name)}
                  icon={<MessageCircle className="w-3.5 h-3.5" />}
                >
                  Agendar
                </Button3D>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Booking Notice */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#092442] to-[#133254] border border-slate-700/70 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-xl font-bold text-white">Precisa de um horário especial ou atendimento para eventos?</h4>
            <p className="text-sm text-slate-300 mt-1">
              Fale diretamente com nossa equipe no WhatsApp para checar disponibilidade rápida em Santana.
            </p>
          </div>
          <Button3D
            variant="orange"
            size="md"
            href={OFFICIAL_LINKS.whatsapp}
            icon={<MessageCircle className="w-4 h-4" />}
          >
            Falar com a Barbearia
          </Button3D>
        </div>
      </div>

      {/* Edit Services Modal */}
      <EditServicesModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        services={services}
        onSave={onUpdateServices}
        onReset={onResetServices}
      />
    </section>
  );
};
