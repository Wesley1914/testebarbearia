import React, { useState } from 'react';
import { GALLERY_ITEMS, GalleryItem, OFFICIAL_LINKS } from '../data/barberData';
import { Button3D } from './Button3D';
import { Instagram, Maximize2, X } from 'lucide-react';

export const BioGalleryView: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  return (
    <div className="space-y-4 px-4 pb-6">
      <div className="text-left pb-1">
        <h2 className="text-base font-bold text-white tracking-tight">Galeria de Fotos</h2>
        <p className="text-xs text-slate-400">Ambiente, cortes degradê e barba na navalha</p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {GALLERY_ITEMS.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedPhoto(item)}
            className="group relative rounded-xl overflow-hidden bg-[#092442] border border-slate-700/80 aspect-square cursor-pointer shadow-md hover:border-[#F28C28] transition-all"
          >
            <img
              src={item.image}
              alt={item.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />

            <div className="absolute bottom-2 left-2 right-2 text-white text-[11px] font-semibold leading-tight line-clamp-2">
              {item.title}
            </div>

            <div className="absolute top-2 right-2 p-1 rounded-md bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
              <Maximize2 className="w-3.5 h-3.5 text-[#F28C28]" />
            </div>
          </div>
        ))}
      </div>

      <div className="pt-2 text-center">
        <Button3D
          variant="instagram"
          size="sm"
          fullWidth
          href={OFFICIAL_LINKS.instagram}
          icon={<Instagram className="w-4 h-4" />}
        >
          SIGA NOSSO INSTAGRAM
        </Button3D>
      </div>

      {/* Lightbox */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-sm w-full bg-[#092442] border border-slate-700 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-black/70 text-white hover:bg-black transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={selectedPhoto.image}
              alt={selectedPhoto.alt}
              className="w-full max-h-[60vh] object-cover"
              referrerPolicy="no-referrer"
            />

            <div className="p-4 bg-[#101c2c] border-t border-slate-700/80 text-left">
              <span className="text-[10px] uppercase font-bold text-[#F28C28] tracking-wider block">
                {selectedPhoto.category}
              </span>
              <h4 className="text-sm font-bold text-white mt-0.5">{selectedPhoto.title}</h4>

              <div className="mt-3">
                <Button3D
                  variant="orange"
                  size="sm"
                  fullWidth
                  href={OFFICIAL_LINKS.whatsapp}
                >
                  Quero Esse Corte
                </Button3D>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
