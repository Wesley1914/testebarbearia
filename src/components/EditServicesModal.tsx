import React, { useState } from 'react';
import { ServiceItem } from '../data/barberData';
import { X, Plus, Trash2, RotateCcw, Check, DollarSign } from 'lucide-react';
import { Button3D } from './Button3D';

interface EditServicesModalProps {
  isOpen: boolean;
  onClose: () => void;
  services: ServiceItem[];
  onSave: (services: ServiceItem[]) => void;
  onReset: () => void;
}

export const EditServicesModal: React.FC<EditServicesModalProps> = ({
  isOpen,
  onClose,
  services,
  onSave,
  onReset,
}) => {
  const [localServices, setLocalServices] = useState<ServiceItem[]>(services);
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Sync if opened
  React.useEffect(() => {
    setLocalServices(services);
    setSavedSuccess(false);
  }, [isOpen, services]);

  if (!isOpen) return null;

  const handleChange = (id: string, field: keyof ServiceItem, value: any) => {
    setLocalServices((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const handleAddService = () => {
    const newService: ServiceItem = {
      id: `serv-${Date.now()}`,
      name: 'Novo Serviço',
      description: 'Descrição detalhada do procedimento e cuidados inclusos.',
      price: 50,
      durationMinutes: 30,
      category: 'cabelo',
      isPopular: false,
    };
    setLocalServices([...localServices, newService]);
  };

  const handleDelete = (id: string) => {
    setLocalServices((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSave = () => {
    onSave(localServices);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#092442] border border-slate-700 rounded-2xl w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-700/80 bg-[#101c2c]">
          <div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-[#F28C28]" />
              Gerenciador de Serviços & Preços
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Edite nomes, valores e descrições dos serviços oferecidos na Barbearia Nohvo Santana.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable list */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          {localServices.map((service, index) => (
            <div
              key={service.id}
              className="p-4 rounded-xl bg-[#101c2c] border border-slate-700/70 space-y-3 relative group"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs font-mono font-bold text-[#F28C28]">
                  Item #{index + 1}
                </span>
                <div className="flex items-center gap-3">
                  <label className="flex items-center gap-1.5 text-xs text-slate-300 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={service.isPopular || false}
                      onChange={(e) => handleChange(service.id, 'isPopular', e.target.checked)}
                      className="rounded border-slate-600 text-[#F28C28] focus:ring-[#F28C28]"
                    />
                    Destaque
                  </label>
                  <button
                    onClick={() => handleDelete(service.id)}
                    className="p-1.5 rounded-lg text-rose-400 hover:bg-rose-950/40 transition-colors"
                    title="Excluir serviço"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-slate-400 mb-1">Nome do Serviço</label>
                  <input
                    type="text"
                    value={service.name}
                    onChange={(e) => handleChange(service.id, 'name', e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-[#092442] border border-slate-700 text-white text-sm focus:outline-none focus:border-[#F28C28]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">Preço (R$)</label>
                  <input
                    type="number"
                    value={service.price}
                    onChange={(e) => handleChange(service.id, 'price', Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-lg bg-[#092442] border border-slate-700 text-white text-sm font-bold focus:outline-none focus:border-[#F28C28]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">Descrição</label>
                <textarea
                  rows={2}
                  value={service.description}
                  onChange={(e) => handleChange(service.id, 'description', e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[#092442] border border-slate-700 text-white text-xs focus:outline-none focus:border-[#F28C28]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">Duração (minutos)</label>
                  <input
                    type="number"
                    value={service.durationMinutes}
                    onChange={(e) => handleChange(service.id, 'durationMinutes', Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-lg bg-[#092442] border border-slate-700 text-white text-xs focus:outline-none focus:border-[#F28C28]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-400 mb-1">Categoria</label>
                  <select
                    value={service.category}
                    onChange={(e) => handleChange(service.id, 'category', e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-[#092442] border border-slate-700 text-white text-xs focus:outline-none focus:border-[#F28C28]"
                  >
                    <option value="cabelo">Cabelo & Corte</option>
                    <option value="barba">Barba & Barbaterapia</option>
                    <option value="combo">Combos</option>
                    <option value="especial">Cuidados Especiais</option>
                  </select>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer actions */}
        <div className="p-4 sm:p-6 border-t border-slate-700/80 bg-[#101c2c] flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={handleAddService}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-800 text-slate-200 text-xs font-medium hover:bg-slate-700 transition-colors"
            >
              <Plus className="w-4 h-4 text-[#F28C28]" />
              Adicionar Serviço
            </button>
            <button
              onClick={onReset}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-800/60 text-slate-400 text-xs font-medium hover:text-white transition-colors"
              title="Restaurar valores padrão originais"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Restaurar Padrão
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white"
            >
              Cancelar
            </button>
            <Button3D
              variant="orange"
              size="md"
              onClick={handleSave}
              icon={savedSuccess ? <Check className="w-4 h-4" /> : undefined}
            >
              {savedSuccess ? 'Salvo com Sucesso!' : 'Salvar Alterações'}
            </Button3D>
          </div>
        </div>
      </div>
    </div>
  );
};
