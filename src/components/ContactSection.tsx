import React, { useState } from 'react';
import { OFFICIAL_LINKS } from '../data/barberData';
import { Button3D } from './Button3D';
import { MessageCircle, MapPin, Clock, Calendar, Edit3, Check, X } from 'lucide-react';

export interface ShopContactInfo {
  locationSummary: string;
  locationDetails: string;
  openingHoursWeek: string;
  openingHoursSaturday: string;
  notes: string;
}

export const DEFAULT_CONTACT_INFO: ShopContactInfo = {
  locationSummary: 'R. Conselheiro Moreira de Barros, 596 - Santana',
  locationDetails: 'São Paulo - SP, CEP 02018-011. Próximo ao metrô Santana com fácil acesso e opções de estacionamento.',
  openingHoursWeek: 'Segunda a Sexta: 09:00 às 20:00',
  openingHoursSaturday: 'Sábado: 09:00 às 19:00 (Domingos sob consulta)',
  notes: 'Atendimento por ordem de agendamento prévio para garantir pontualidade e dedicação total ao seu horário.',
};

export const ContactSection: React.FC = () => {
  const [contactInfo, setContactInfo] = useState<ShopContactInfo>(() => {
    try {
      const saved = localStorage.getItem('nohvo_contact_info');
      return saved ? JSON.parse(saved) : DEFAULT_CONTACT_INFO;
    } catch {
      return DEFAULT_CONTACT_INFO;
    }
  });

  const [isEditing, setIsEditing] = useState(false);
  const [tempInfo, setTempInfo] = useState<ShopContactInfo>(contactInfo);

  const handleSave = () => {
    setContactInfo(tempInfo);
    try {
      localStorage.setItem('nohvo_contact_info', JSON.stringify(tempInfo));
    } catch {}
    setIsEditing(false);
  };

  return (
    <section id="contato" className="py-24 bg-[#092442] relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main WhatsApp CTA Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F28C28]">
              <MessageCircle className="w-4 h-4" />
              <span>Atendimento & Agendamentos</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
              Pronto para renovar seu visual na Barbearia Nohvo Santana?
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Agende seu horário com antecedência e garanta um atendimento pontual e exclusivo com nossos barbeiros especialistas.
            </p>

            <div className="p-6 rounded-2xl bg-[#101c2c] border-2 border-[#F28C28]/80 shadow-xl space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-amber-500/15 text-[#F28C28] shrink-0">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Canal Direto no WhatsApp</h3>
                  <p className="text-sm text-slate-300 mt-1">
                    Tire dúvidas sobre cortes, consulte disponibilidade de horários e receba a confirmação do seu agendamento em instantes.
                  </p>
                </div>
              </div>

              {/* The Primary WhatsApp 3D Button */}
              <div className="pt-2">
                <Button3D
                  variant="orange"
                  size="lg"
                  fullWidth
                  href={OFFICIAL_LINKS.whatsapp}
                  icon={<MessageCircle className="w-6 h-6" />}
                  className="py-4 text-base tracking-wide"
                >
                  CHAMAR NO WHATSAPP
                </Button3D>
              </div>
            </div>
          </div>

          {/* Location & Hours Card (Editable to comply with non-invented data rule) */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#101c2c] border border-slate-700/80 shadow-2xl relative space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-700/80">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#F28C28]" />
                  Informações da Barbearia
                </h3>

                <button
                  type="button"
                  onClick={() => {
                    setTempInfo(contactInfo);
                    setIsEditing(!isEditing);
                  }}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-[#F28C28] transition-colors"
                  title="Editar dados de endereço e horário"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>{isEditing ? 'Cancelar' : 'Editar dados'}</span>
                </button>
              </div>

              {isEditing ? (
                /* Inline Editor */
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Bairro / Região
                    </label>
                    <input
                      type="text"
                      value={tempInfo.locationSummary}
                      onChange={(e) => setTempInfo({ ...tempInfo, locationSummary: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-[#092442] border border-slate-700 text-white text-xs focus:outline-none focus:border-[#F28C28]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Endereço / Referência
                    </label>
                    <textarea
                      rows={2}
                      value={tempInfo.locationDetails}
                      onChange={(e) => setTempInfo({ ...tempInfo, locationDetails: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-[#092442] border border-slate-700 text-white text-xs focus:outline-none focus:border-[#F28C28]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Horário Seg a Sex
                    </label>
                    <input
                      type="text"
                      value={tempInfo.openingHoursWeek}
                      onChange={(e) => setTempInfo({ ...tempInfo, openingHoursWeek: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-[#092442] border border-slate-700 text-white text-xs focus:outline-none focus:border-[#F28C28]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Horário Sábado / Fim de Semana
                    </label>
                    <input
                      type="text"
                      value={tempInfo.openingHoursSaturday}
                      onChange={(e) => setTempInfo({ ...tempInfo, openingHoursSaturday: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-[#092442] border border-slate-700 text-white text-xs focus:outline-none focus:border-[#F28C28]"
                    />
                  </div>

                  <div className="flex items-center justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="px-3 py-1.5 text-xs text-slate-400 hover:text-white"
                    >
                      Descartar
                    </button>
                    <button
                      type="button"
                      onClick={handleSave}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#F28C28] text-white text-xs font-bold hover:bg-amber-600 shadow-md"
                    >
                      <Check className="w-3.5 h-3.5" />
                      Salvar Dados
                    </button>
                  </div>
                </div>
              ) : (
                /* Static view with clean typography */
                <div className="space-y-5 text-left">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{contactInfo.locationSummary}</h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        {contactInfo.locationDetails}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="p-2 rounded-lg bg-amber-500/10 text-[#F28C28] shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Horário de Funcionamento</h4>
                      <p className="text-xs text-slate-300 mt-1">{contactInfo.openingHoursWeek}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{contactInfo.openingHoursSaturday}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0 mt-0.5">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">Agendamento Flexível</h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        {contactInfo.notes}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Quick direct action */}
              <div className="pt-4 border-t border-slate-800">
                <Button3D
                  variant="white"
                  size="md"
                  fullWidth
                  href={OFFICIAL_LINKS.whatsapp}
                  icon={<MessageCircle className="w-4 h-4 text-[#092442]" />}
                >
                  Consultar Disponibilidade de Horário
                </Button3D>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
