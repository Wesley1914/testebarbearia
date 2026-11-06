import React from 'react';
import { GOOGLE_REVIEWS, OFFICIAL_LINKS } from '../data/barberData';
import { Button3D } from './Button3D';
import { GoogleLogoIcon } from './GoogleEmblem';
import { Star, CheckCircle, ExternalLink } from 'lucide-react';

export const BioReviewsView: React.FC = () => {
  return (
    <div className="space-y-4 px-4 pb-6 text-left">
      
      {/* Google Emblem Box */}
      <div className="p-5 rounded-2xl bg-[#092442] border border-slate-700/80 text-center space-y-3 shadow-lg">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-slate-900 shadow-sm">
          <GoogleLogoIcon size={20} />
          <span className="text-xs font-bold text-slate-800">Avaliações no Google</span>
          <div className="flex text-amber-500 text-xs">★★★★★</div>
          <span className="text-xs font-extrabold text-slate-900">5.0</span>
        </div>

        <h3 className="text-lg font-bold text-white">
          Sua opinião é fundamental para nós!
        </h3>

        <p className="text-xs text-slate-300 leading-relaxed">
          Já cortou ou cuidou da barba na Barbearia Nohvo Santana? Conte como foi sua experiência no Google.
        </p>

        <div className="pt-2">
          <Button3D
            variant="orange"
            size="md"
            fullWidth
            href={OFFICIAL_LINKS.googleReview}
            icon={<Star className="w-4 h-4 fill-white" />}
          >
            AVALIE NOSSA BARBEARIA
          </Button3D>
        </div>
      </div>

      {/* Customer Reviews List */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F28C28]">
            Depoimentos Recentes
          </span>
          <a
            href={OFFICIAL_LINKS.googleReview}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[11px] font-semibold text-slate-400 hover:text-white flex items-center gap-1"
          >
            <span>Ver todos</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {GOOGLE_REVIEWS.map((review) => (
          <div
            key={review.id}
            className="p-4 rounded-xl bg-[#092442] border border-slate-700/60 space-y-2 text-left"
          >
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs ${review.avatarColor}`}
                >
                  {review.avatarLetter}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white flex items-center gap-1">
                    {review.author}
                    <span title="Cliente verificado">
                      <CheckCircle className="w-3 h-3 text-blue-400" />
                    </span>
                  </h4>
                  <span className="text-[10px] text-slate-400">{review.timeAgo}</span>
                </div>
              </div>

              <div className="flex text-amber-400 text-xs">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400" />
                ))}
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed italic">
              "{review.text}"
            </p>

            {review.serviceMentioned && (
              <p className="text-[10px] text-slate-400">
                <span className="text-[#F28C28] font-medium">Serviço:</span> {review.serviceMentioned}
              </p>
            )}
          </div>
        ))}
      </div>

    </div>
  );
};
