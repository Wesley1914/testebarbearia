import React, { useState } from 'react';
import { OFFICIAL_LINKS, OFFICIAL_ADDRESS } from '../data/barberData';
import { Button3D } from './Button3D';
import { DEFAULT_CONTACT_INFO, ShopContactInfo } from './ContactSection';
import { MessageCircle, MapPin, Clock, ShieldCheck, Coffee, Edit3, Check, Navigation, Copy, Compass } from 'lucide-react';

export const BioAboutContactView: React.FC = () => {
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
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleSave = () => {
    setContactInfo(tempInfo);
    try {
      localStorage.setItem('nohvo_contact_info', JSON.stringify(tempInfo));
    } catch {}
    setIsEditing(false);
  };

  const handleCopyAddress = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(OFFICIAL_ADDRESS.full);
      }
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2000);
    } catch {
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2000);
    }
  };

  return (
    <div className="space-y-4 px-4 pb-6 text-left">
      
      {/* Location Card with Automatic Route Action */}
      <div className="p-4 rounded-2xl bg-[#092442] border-2 border-[#F28C28]/60 shadow-xl space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-slate-700/60">
          <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-[#F28C28]" />
            Endereço Oficial da Barbearia
          </h4>
          <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
            Santana - SP
          </span>
        </div>

        <div className="p-3 rounded-xl bg-[#101c2c] border border-slate-700/80 space-y-2">
          <p className="text-xs font-bold text-white leading-snug">
            {OFFICIAL_ADDRESS.street}
          </p>
          <p className="text-[11px] text-slate-300">
            {OFFICIAL_ADDRESS.neighborhood}, {OFFICIAL_ADDRESS.city} - {OFFICIAL_ADDRESS.state}
          </p>
          <p className="text-[10px] font-mono text-[#F28C28]">
            CEP: {OFFICIAL_ADDRESS.postalCode}
          </p>
        </div>

        {/* Automatic Route 3D Buttons */}
        <div className="space-y-2 pt-1">
          <Button3D
            variant="orange"
            size="md"
            fullWidth
            href={OFFICIAL_LINKS.googleMapsRoute}
            icon={<Navigation className="w-4 h-4 fill-white animate-pulse" />}
          >
            TRAÇAR ROTA NO GOOGLE MAPS
          </Button3D>

          <div className="grid grid-cols-2 gap-2">
            <a
              href={OFFICIAL_LINKS.wazeRoute}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#101c2c] border border-slate-700 text-xs font-bold text-white hover:border-[#F28C28] hover:text-[#F28C28] transition-all shadow-sm active:scale-98"
            >
              <Compass className="w-3.5 h-3.5 text-sky-400" />
              <span>Rota no Waze</span>
            </a>

            <button
              type="button"
              onClick={handleCopyAddress}
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#101c2c] border border-slate-700 text-xs font-bold text-white hover:border-[#F28C28] hover:text-[#F28C28] transition-all shadow-sm active:scale-98 cursor-pointer"
            >
              {copiedAddress ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-amber-400" />}
              <span>{copiedAddress ? 'Copiado!' : 'Copiar Endereço'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Opening Hours & Custom info */}
      <div className="p-4 rounded-2xl bg-[#092442] border border-slate-700/80 space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-slate-700/60">
          <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[#F28C28]" />
            Horários de Atendimento
          </h4>
          <button
            onClick={() => {
              setTempInfo(contactInfo);
              setIsEditing(!isEditing);
            }}
            className="text-[11px] text-slate-400 hover:text-[#F28C28] flex items-center gap-1"
          >
            <Edit3 className="w-3 h-3" />
            <span>{isEditing ? 'Cancelar' : 'Editar'}</span>
          </button>
        </div>

        {isEditing ? (
          <div className="space-y-3 text-xs">
            <div>
              <label className="block text-slate-400 text-[10px] uppercase font-bold mb-1">
                Horário Seg a Sex
              </label>
              <input
                type="text"
                value={tempInfo.openingHoursWeek}
                onChange={(e) => setTempInfo({ ...tempInfo, openingHoursWeek: e.target.value })}
                className="w-full px-2.5 py-1.5 rounded-lg bg-[#101c2c] border border-slate-700 text-white text-xs focus:border-[#F28C28] outline-none"
              />
            </div>
            <div>
              <label className="block text-slate-400 text-[10px] uppercase font-bold mb-1">
                Horário Sábado
              </label>
              <input
                type="text"
                value={tempInfo.openingHoursSaturday}
                onChange={(e) => setTempInfo({ ...tempInfo, openingHoursSaturday: e.target.value })}
                className="w-full px-2.5 py-1.5 rounded-lg bg-[#101c2c] border border-slate-700 text-white text-xs focus:border-[#F28C28] outline-none"
              />
            </div>

            <div className="flex items-center justify-end gap-2 pt-1">
              <button
                onClick={() => setIsEditing(false)}
                className="px-2.5 py-1 text-slate-400 text-xs"
              >
                Voltar
              </button>
              <button
                onClick={handleSave}
                className="px-3 py-1.5 rounded-lg bg-[#F28C28] text-white font-bold text-xs flex items-center gap-1 shadow-sm"
              >
                <Check className="w-3 h-3" />
                Salvar
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-2.5 text-xs">
            <div className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">{contactInfo.openingHoursWeek}</p>
                <p className="text-slate-400 mt-0.5">{contactInfo.openingHoursSaturday}</p>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-[#101c2c]/80 border border-slate-700/60 text-[11px] text-slate-300">
              💡 {contactInfo.notes}
            </div>
          </div>
        )}

        <div className="pt-2">
          <Button3D
            variant="whatsapp"
            size="md"
            fullWidth
            href={OFFICIAL_LINKS.whatsapp}
            icon={<MessageCircle className="w-4 h-4" />}
          >
            CHAMAR NO WHATSAPP
          </Button3D>
        </div>
      </div>

      {/* Institutional presentation */}
      <div className="p-4 rounded-2xl bg-[#092442] border border-slate-700/80 space-y-3">
        <h3 className="text-sm font-bold text-white flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#F28C28]" />
          Sobre a Barbearia Nohvo Santana
        </h3>
        <p className="text-xs text-slate-300 leading-relaxed">
          Nascemos para proporcionar uma experiência de barbearia de excelência em Santana. Unimos técnica artesanal na navalha, degradês modernos com tesoura e máquina, e visagismo sob medida.
        </p>

        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-700/60">
          <div className="p-2.5 rounded-xl bg-[#101c2c] border border-slate-700/40 text-center">
            <Coffee className="w-4 h-4 text-[#F28C28] mx-auto mb-1" />
            <span className="text-[11px] font-bold text-white block">Café Cortesia</span>
            <span className="text-[10px] text-slate-400">Expresso & Conforto</span>
          </div>

          <div className="p-2.5 rounded-xl bg-[#101c2c] border border-slate-700/40 text-center">
            <ShieldCheck className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
            <span className="text-[11px] font-bold text-white block">100% Higiene</span>
            <span className="text-[10px] text-slate-400">Lâminas Descartáveis</span>
          </div>
        </div>
      </div>

    </div>
  );
};
