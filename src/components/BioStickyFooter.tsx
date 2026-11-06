import React from 'react';
import { OFFICIAL_LINKS } from '../data/barberData';
import { MessageCircle } from 'lucide-react';
import { Button3D } from './Button3D';

export const BioStickyFooter: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#101c2c]/95 backdrop-blur-md border-t border-slate-800 p-3 flex items-center justify-center">
      <div className="w-full max-w-md mx-auto">
        <Button3D
          variant="orange"
          size="md"
          fullWidth
          href={OFFICIAL_LINKS.whatsapp}
          icon={<MessageCircle className="w-5 h-5" />}
          className="py-3 text-sm shadow-xl tracking-wider"
        >
          Agendar pelo WhatsApp
        </Button3D>
      </div>
    </div>
  );
};
