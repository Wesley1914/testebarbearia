import React, { useState } from 'react';
import { GALLERY_ITEMS, GalleryItem, OFFICIAL_LINKS } from '../data/barberData';
import { Button3D } from './Button3D';
import { Camera, Maximize2, X, Instagram } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'cortes' | 'barba' | 'ambiente'>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const filterTabs = [
    { id: 'all', label: 'Todos os Trabalhos' },
    { id: 'cortes', label: 'Cortes & Degradês' },
    { id: 'barba', label: 'Barba & Navalha' },
    { id: 'ambiente', label: 'Ambiente & Experiência' },
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  return (
    <section id="galeria" className="py-24 bg-[#101c2c] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F28C28] mb-3">
            <Camera className="w-4 h-4" />
            <span>Portfólio & Espaço</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Galeria da Barbearia Nohvo Santana
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Confira detalhes do nosso ambiente acolhedor e os resultados dos cortes e barbas executados no nosso espaço.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  filter === tab.id
                    ? 'bg-[#F28C28] text-white shadow-md shadow-[#F28C28]/25'
                    : 'bg-[#092442] text-slate-300 hover:text-white border border-slate-700/60 hover:bg-[#153457]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-2xl overflow-hidden bg-[#092442] border border-slate-700/70 shadow-lg cursor-pointer aspect-4/3 transition-all duration-300 hover:border-[#F28C28]/80 hover:shadow-2xl"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101c2c]/90 via-[#101c2c]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Hover Badge */}
              <div className="absolute top-4 right-4 p-2.5 rounded-xl bg-black/60 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-105">
                <Maximize2 className="w-4 h-4 text-[#F28C28]" />
              </div>

              {/* Title & Info */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#092442]/85 backdrop-blur-md border border-slate-700/60">
                <span className="text-[10px] uppercase font-bold text-[#F28C28] tracking-wider block">
                  {item.category === 'cortes' ? 'Corte Masculino' : item.category === 'barba' ? 'Barba & Visagismo' : 'Estrutura'}
                </span>
                <h4 className="text-sm sm:text-base font-bold text-white mt-0.5 truncate">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery CTA */}
        <div className="mt-12 text-center flex flex-wrap items-center justify-center gap-4">
          <Button3D
            variant="instagram"
            size="md"
            href={OFFICIAL_LINKS.instagram}
            icon={<Instagram className="w-4 h-4" />}
          >
            Ver Mais Fotos no Instagram
          </Button3D>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#092442] border border-slate-700 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/80 transition-colors"
              aria-label="Fechar visualização"
            >
              <X className="w-6 h-6" />
            </button>

            <img
              src={selectedImage.image}
              alt={selectedImage.alt}
              className="w-full max-h-[75vh] object-cover"
              referrerPolicy="no-referrer"
            />

            <div className="p-6 bg-[#101c2c] border-t border-slate-700/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase font-bold text-[#F28C28] tracking-wider">
                  {selectedImage.category}
                </span>
                <h3 className="text-lg font-bold text-white mt-1">
                  {selectedImage.title}
                </h3>
              </div>
              <Button3D
                variant="orange"
                size="sm"
                href={OFFICIAL_LINKS.whatsapp}
              >
                Quero Esse Estilo
              </Button3D>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
