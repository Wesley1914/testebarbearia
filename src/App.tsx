import React, { useState } from 'react';
import { INITIAL_SERVICES, ServiceItem } from './data/barberData';
import { BioSiteHeader } from './components/BioSiteHeader';
import { BioTabNavigation, BioTabType } from './components/BioTabNavigation';
import { BioLinksView } from './components/BioLinksView';
import { BioServicesView } from './components/BioServicesView';
import { BioGalleryView } from './components/BioGalleryView';
import { BioReviewsView } from './components/BioReviewsView';
import { BioAboutContactView } from './components/BioAboutContactView';
import { EditServicesModal } from './components/EditServicesModal';
import { ShareModal } from './components/ShareModal';
import { BioStickyFooter } from './components/BioStickyFooter';

export default function App() {
  const [activeTab, setActiveTab] = useState<BioTabType>('links');
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [services, setServices] = useState<ServiceItem[]>(() => {
    try {
      const saved = localStorage.getItem('nohvo_barber_services');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {
      // Fallback
    }
    return INITIAL_SERVICES;
  });

  const handleUpdateServices = (updated: ServiceItem[]) => {
    setServices(updated);
    try {
      localStorage.setItem('nohvo_barber_services', JSON.stringify(updated));
    } catch {}
  };

  const handleResetServices = () => {
    setServices(INITIAL_SERVICES);
    try {
      localStorage.removeItem('nohvo_barber_services');
    } catch {}
  };

  return (
    <div className="min-h-screen bg-[#101c2c] text-white flex justify-center selection:bg-[#F28C28] selection:text-white relative overflow-x-hidden">
      
      {/* Ambient background for desktop view */}
      <div className="fixed inset-0 pointer-events-none opacity-20 hidden md:block">
        <img
          src="/src/assets/images/hero_barbershop_ambience_1793991832121.jpg"
          alt="Backdrop ambient"
          className="w-full h-full object-cover blur-2xl scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[#101c2c]/80" />
      </div>

      {/* Main Bio Site Container */}
      <div className="w-full max-w-md sm:max-w-lg min-h-screen bg-[#101c2c] sm:my-6 sm:rounded-3xl sm:border sm:border-slate-800 sm:shadow-2xl flex flex-col relative z-10 pb-24">
        
        {/* Header Profile */}
        <BioSiteHeader onOpenShare={() => setIsShareOpen(true)} />

        {/* Tab Selector */}
        <BioTabNavigation activeTab={activeTab} onChangeTab={setActiveTab} />

        {/* Dynamic Views */}
        <div className="flex-1">
          {activeTab === 'links' && (
            <BioLinksView onNavigateTab={(tab) => setActiveTab(tab)} />
          )}

          {activeTab === 'servicos' && (
            <BioServicesView
              services={services}
              onOpenEditModal={() => setIsEditModalOpen(true)}
            />
          )}

          {activeTab === 'galeria' && <BioGalleryView />}

          {activeTab === 'avaliacoes' && <BioReviewsView />}

          {activeTab === 'sobre' && <BioAboutContactView />}
        </div>

        {/* Bio Footer Credits */}
        <footer className="pt-6 pb-4 px-4 text-center border-t border-slate-800/80 text-slate-500 text-[11px] space-y-1">
          <p className="font-semibold text-slate-400">Barbearia Nohvo Santana</p>
          <p>© {new Date().getFullYear()} · Todos os direitos reservados</p>
          <p className="text-[10px] text-slate-600">Santana, São Paulo - SP</p>
        </footer>

      </div>

      {/* Persistent 3D Bottom WhatsApp Button */}
      <BioStickyFooter />

      {/* Share / QR Code Modal */}
      <ShareModal isOpen={isShareOpen} onClose={() => setIsShareOpen(false)} />

      {/* Edit Services Modal (for shop owner customization) */}
      <EditServicesModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        services={services}
        onSave={handleUpdateServices}
        onReset={handleResetServices}
      />

    </div>
  );
}
