import React from 'react';
import { GOOGLE_REVIEWS, OFFICIAL_LINKS } from '../data/barberData';
import { Button3D } from './Button3D';
import { GoogleLogoIcon } from './GoogleEmblem';
import { Star, CheckCircle, ExternalLink } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="avaliacoes" className="py-24 bg-[#092442] relative border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Google Callout Box */}
        <div className="bg-[#101c2c] rounded-3xl p-8 sm:p-12 border border-slate-700/80 shadow-2xl text-center relative overflow-hidden">
          {/* Subtle ambient lighting */}
          <div className="absolute top-0 right-1/2 translate-x-1/2 w-96 h-32 bg-blue-500/10 blur-3xl rounded-full pointer-events-none" />

          {/* Official Google Emblem Lockup */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white text-slate-900 shadow-md mb-6">
            <GoogleLogoIcon size={26} />
            <div className="flex items-center gap-2 text-left">
              <span className="font-bold text-sm tracking-tight text-slate-800">Avaliações Google</span>
              <div className="flex text-amber-500 text-sm" aria-label="5 estrelas">
                {'★★★★★'}
              </div>
              <span className="text-xs font-extrabold text-slate-900 bg-amber-100 px-1.5 py-0.5 rounded">
                5.0
              </span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-3xl mx-auto leading-tight text-balance">
            Sua opinião constrói a nossa excelência
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Já esteve na Barbearia Nohvo Santana? Compartilhe como foi seu corte, sua barba ou seu momento em nosso espaço e ajude outros homens a descobrirem nosso trabalho.
          </p>

          {/* Primary 3D Button Requested */}
          <div className="mt-8 flex justify-center">
            <Button3D
              variant="orange"
              size="lg"
              href={OFFICIAL_LINKS.googleReview}
              icon={<Star className="w-5 h-5 text-white fill-white" />}
              className="text-sm sm:text-base px-8 py-4"
            >
              AVALIE NOSSA BARBEARIA
            </Button3D>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
            <span>Redirecionamento oficial direto para o formulário de avaliação do Google</span>
          </div>
        </div>

        {/* Verified Reviews Cards */}
        <div className="mt-14">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F28C28]">
                Depoimentos Reais de Clientes
              </span>
            </div>
            <a
              href={OFFICIAL_LINKS.googleReview}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-[#F28C28] transition-colors"
            >
              <span>Ver mais no Google</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {GOOGLE_REVIEWS.map((review) => (
              <div
                key={review.id}
                className="p-6 rounded-2xl bg-[#101c2c] border border-slate-700/60 shadow-md flex flex-col justify-between hover:border-slate-600 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm ${review.avatarColor}`}
                      >
                        {review.avatarLetter}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                          {review.author}
                          <span title="Cliente verificado">
                            <CheckCircle className="w-3.5 h-3.5 text-blue-400" />
                          </span>
                        </h4>
                        <span className="text-xs text-slate-400">{review.timeAgo}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-amber-400 text-sm">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed italic">
                    "{review.text}"
                  </p>
                </div>

                {review.serviceMentioned && (
                  <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400 flex items-center gap-1.5">
                    <span className="text-[#F28C28] font-medium">Serviço avaliado:</span>
                    <span>{review.serviceMentioned}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
