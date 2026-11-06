import React from 'react';
import { OFFICIAL_LINKS, INSTAGRAM_POSTS } from '../data/barberData';
import { Button3D } from './Button3D';
import { Instagram, Heart, MessageCircle, ExternalLink } from 'lucide-react';

export const InstagramSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#101c2c] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-amber-500/10 border border-pink-500/20 text-pink-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Instagram className="w-4 h-4" />
            <span>@barbearianohvo.santana</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Acompanhe nossos cortes, novidades e o dia a dia da barbearia.
          </h2>

          <p className="mt-3 text-base text-slate-300">
            Inspirações de estilo, transformações reais, bastidores e avisos sobre horários de feriados diretamente no nosso perfil.
          </p>

          <div className="mt-8 flex justify-center">
            <Button3D
              variant="instagram"
              size="lg"
              href={OFFICIAL_LINKS.instagram}
              icon={<Instagram className="w-5 h-5" />}
              className="px-8 py-3.5"
            >
              SIGA NOSSO INSTAGRAM
            </Button3D>
          </div>
        </div>

        {/* Instagram Visual Feed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={OFFICIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl overflow-hidden bg-[#092442] border border-slate-700/70 shadow-lg block aspect-square transition-all duration-300 hover:-translate-y-1 hover:border-pink-500/60 hover:shadow-2xl hover:shadow-pink-500/10"
            >
              <img
                src={post.image}
                alt="Post da Barbearia Nohvo Santana no Instagram"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-106"
                referrerPolicy="no-referrer"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

              {/* Post Header on Hover */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-xs font-bold tracking-tight bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-lg">
                  @barbearianohvo.santana
                </span>
                <span className="p-1.5 rounded-lg bg-pink-600/80 text-white">
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </div>

              {/* Caption & Stats at Bottom */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-4 text-xs font-bold mb-2">
                  <span className="flex items-center gap-1.5 text-pink-400">
                    <Heart className="w-4 h-4 fill-pink-400" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-200">
                    <MessageCircle className="w-4 h-4" />
                    {post.comments}
                  </span>
                </div>
                <p className="text-xs text-slate-200 line-clamp-2 leading-relaxed">
                  {post.caption}
                </p>
                <p className="text-[10px] text-pink-300 font-medium mt-1 truncate">
                  {post.tag}
                </p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
