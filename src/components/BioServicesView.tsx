import React, { useState } from 'react';
import { ServiceItem, OFFICIAL_LINKS } from '../data/barberData';
import { Button3D } from './Button3D';
import { Clock, MessageCircle, SlidersHorizontal, Sparkles } from 'lucide-react';

interface BioServicesViewProps {
  services: ServiceItem[];
  onOpenEditModal: () => void;
}

export const BioServicesView: React.FC<BioServicesViewProps> = ({ services, onOpenEditModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');

  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'cabelo', label: 'Cabelo' },
    { id: 'barba', label: 'Barba' },
    { id: 'combo', label: 'Combos' },
    { id: 'especial', label: 'Especiais' },
  ];

  const filtered = services.filter((s) => {
    if (selectedCategory === 'todos') return true;
    return s.category === selectedCategory;
  });

  const getBookingLink = (name: string) => {
    return `${OFFICIAL_LINKS.whatsapp}?text=${encodeURIComponent(
      `Olá! Estou no Bio Site da Barbearia Nohvo Santana e gostaria de agendar o serviço: ${name}. Quais os horários disponíveis?`
    )}`;
  };

  return (
    <div className="space-y-4 px-4 pb-6">
      
      {/* Header with edit toggle */}
      <div className="flex items-center justify-between gap-2 pb-2">
        <div>
          <h2 className="text-base font-bold text-white tracking-tight">Tabela de Serviços</h2>
          <p className="text-xs text-slate-400">Selecione para agendar via WhatsApp</p>
        </div>

        <button
          onClick={onOpenEditModal}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#092442] border border-slate-700/80 text-[11px] font-semibold text-slate-300 hover:text-white hover:border-[#F28C28] transition-colors shadow-sm"
          title="Editar valores e nomes de serviços"
        >
          <SlidersHorizontal className="w-3.5 h-3.5 text-[#F28C28]" />
          <span>Editar Valores</span>
        </button>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setSelectedCategory(c.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
              selectedCategory === c.id
                ? 'bg-[#F28C28] text-white shadow-sm'
                : 'bg-[#092442] text-slate-300 hover:text-white border border-slate-700/60'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Services List */}
      <div className="space-y-3">
        {filtered.map((service) => (
          <div
            key={service.id}
            className={`p-4 rounded-2xl bg-[#092442] border transition-all duration-200 ${
              service.isPopular
                ? 'border-[#F28C28]/70 shadow-md shadow-[#F28C28]/10'
                : 'border-slate-700/70 hover:border-slate-600'
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-white">{service.name}</h3>
                  {service.isPopular && (
                    <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-[#F28C28] text-[9px] font-black uppercase text-white tracking-wider">
                      <Sparkles className="w-2.5 h-2.5" />
                      Destaque
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 text-[11px] text-slate-400 mt-1">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#F28C28]" />
                    {service.durationMinutes} min
                  </span>
                  <span>·</span>
                  <span className="capitalize">{service.category}</span>
                </div>
              </div>

              {/* Price */}
              <div className="text-right shrink-0">
                <span className="text-base font-extrabold text-white tabular-nums tracking-tight">
                  R$ {service.price.toFixed(2).replace('.', ',')}
                </span>
              </div>
            </div>

            <p className="mt-2 text-xs text-slate-300 leading-relaxed">
              {service.description}
            </p>

            <div className="mt-3 pt-3 border-t border-slate-700/60 flex items-center justify-end">
              <Button3D
                variant="orange"
                size="sm"
                href={getBookingLink(service.name)}
                icon={<MessageCircle className="w-3.5 h-3.5" />}
              >
                Agendar Horário
              </Button3D>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
