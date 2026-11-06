import React, { useState } from 'react';
import { X, Copy, Check, Share2, MessageCircle, QrCode } from 'lucide-react';
import { OFFICIAL_LINKS } from '../data/barberData';
import { Button3D } from './Button3D';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [showQR, setShowQR] = useState(false);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://nohvosantana.com';

  const handleCopy = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(currentUrl);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const shareViaWhatsApp = () => {
    const text = encodeURIComponent(
      `Conheça o bio site da Barbearia Nohvo Santana em Santana! Agende seu horário e confira os serviços: ${currentUrl}`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#092442] border border-slate-700 rounded-2xl w-full max-w-sm p-6 shadow-2xl relative text-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-[#F28C28] flex items-center justify-center mx-auto mb-4 border border-[#F28C28]/20">
          <Share2 className="w-7 h-7" />
        </div>

        <h3 className="text-lg font-bold text-white">Compartilhar Bio Site</h3>
        <p className="text-xs text-slate-300 mt-1 mb-5">
          Compartilhe o cartão digital da Barbearia Nohvo Santana com amigos ou clientes.
        </p>

        {showQR ? (
          <div className="bg-white p-4 rounded-xl inline-block mx-auto mb-4 shadow-lg">
            {/* Vector representation of QR */}
            <div className="w-44 h-44 bg-slate-100 flex flex-col items-center justify-center border-2 border-slate-300 rounded-lg p-2 text-slate-800">
              <QrCode className="w-28 h-28 text-slate-900" />
              <span className="text-[10px] font-bold mt-1 text-slate-700">Scan no balcão da barbearia</span>
            </div>
            <button
              onClick={() => setShowQR(false)}
              className="text-xs text-[#092442] font-bold mt-2 hover:underline block mx-auto"
            >
              Voltar aos links
            </button>
          </div>
        ) : (
          <div className="space-y-3 mb-5">
            <div className="flex items-center gap-2 p-2 rounded-xl bg-[#101c2c] border border-slate-700/80">
              <input
                type="text"
                readOnly
                value={currentUrl}
                className="bg-transparent text-xs text-slate-300 w-full px-2 outline-none truncate"
              />
              <button
                onClick={handleCopy}
                className="px-3 py-1.5 rounded-lg bg-[#F28C28] text-white text-xs font-bold hover:bg-amber-600 transition-colors shrink-0 flex items-center gap-1 shadow-sm"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copiado!' : 'Copiar'}</span>
              </button>
            </div>

            <button
              onClick={shareViaWhatsApp}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#25D366] text-white text-xs font-bold hover:bg-emerald-600 transition-colors shadow-md active:scale-98"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Enviar pelo WhatsApp</span>
            </button>

            <button
              onClick={() => setShowQR(true)}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-800 text-slate-200 text-xs font-semibold hover:bg-slate-700 transition-colors"
            >
              <QrCode className="w-4 h-4 text-[#F28C28]" />
              <span>Exibir QR Code</span>
            </button>
          </div>
        )}

        <Button3D variant="white" size="sm" fullWidth onClick={onClose}>
          Fechar
        </Button3D>
      </div>
    </div>
  );
};
