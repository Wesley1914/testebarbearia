import React from 'react';
import { Link2, Scissors, Image as ImageIcon, Star, MapPin } from 'lucide-react';

export type BioTabType = 'links' | 'servicos' | 'galeria' | 'avaliacoes' | 'sobre';

interface BioTabNavigationProps {
  activeTab: BioTabType;
  onChangeTab: (tab: BioTabType) => void;
}

export const BioTabNavigation: React.FC<BioTabNavigationProps> = ({ activeTab, onChangeTab }) => {
  const tabs: { id: BioTabType; label: string; icon: React.ReactNode }[] = [
    { id: 'links', label: 'Links', icon: <Link2 className="w-4 h-4" /> },
    { id: 'servicos', label: 'Serviços', icon: <Scissors className="w-4 h-4" /> },
    { id: 'galeria', label: 'Galeria', icon: <ImageIcon className="w-4 h-4" /> },
    { id: 'avaliacoes', label: 'Avaliações', icon: <Star className="w-4 h-4" /> },
    { id: 'sobre', label: 'Sobre & Local', icon: <MapPin className="w-4 h-4" /> },
  ];

  return (
    <div className="px-4 mb-6">
      <div className="flex items-center p-1.5 rounded-2xl bg-[#092442] border border-slate-700/80 overflow-x-auto no-scrollbar shadow-inner gap-1">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onChangeTab(tab.id)}
              className={`flex-1 min-w-[70px] py-2 px-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer select-none ${
                isActive
                  ? 'bg-[#F28C28] text-white shadow-md shadow-[#F28C28]/25 scale-102'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <span className={isActive ? 'text-white' : 'text-[#F28C28]'}>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
