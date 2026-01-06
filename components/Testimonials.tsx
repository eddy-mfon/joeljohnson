import React from 'react';
import { TESTIMONIALS } from '../constants';

export const Testimonials: React.FC = () => {
  return (
    <section className="mt-32 pt-24 md:pt-40 border-t-2 vogue-border bg-vogue-sand dark:bg-[#0A0A0A] px-6 md:px-20 py-24 md:py-32 transition-colors duration-500">
      <div className="text-center mb-24 md:mb-40 space-y-6">
        <span className="text-[11px] font-black uppercase tracking-[1em] vogue-pink block">Acclamations</span>
        <h2 className="vogue-serif text-6xl md:text-[10rem] font-black uppercase italic tracking-tighter leading-none dark:text-vogue-offwhite">The Endorsements</h2>
        <p className="text-[11px] md:text-xs font-light uppercase tracking-[0.6em] text-gray-400 dark:text-vogue-offwhite/50">Verified Voices from the Academic and Professional Atelier</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-20 max-w-[1700px] mx-auto">
        {TESTIMONIALS.map((t, idx) => (
          <div key={idx} className="space-y-10 flex flex-col justify-between p-10 md:p-16 border-2 vogue-border bg-white dark:bg-[#111] hover:bg-black dark:hover:bg-black hover:text-white transition-all duration-700 group relative overflow-hidden shadow-sm hover:shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-vogue-pink opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="space-y-8">
              <span className="vogue-serif text-7xl md:text-9xl vogue-pink opacity-10 group-hover:opacity-100 transition-opacity absolute top-6 left-6 pointer-events-none italic">“</span>
              <p className="vogue-serif text-2xl md:text-3xl italic leading-relaxed text-gray-800 dark:text-vogue-offwhite/80 group-hover:text-white pt-12 relative z-10">
                {t.quote}
              </p>
            </div>
            <div className="pt-10 border-t border-black/5 dark:border-white/5 group-hover:border-white/10 mt-auto">
              <p className="text-[11px] font-black uppercase tracking-[0.5em] mb-2 group-hover:text-vogue-pink transition-colors dark:text-vogue-offwhite">{t.author}</p>
              <p className="text-[10px] uppercase tracking-[0.4em] opacity-40 dark:text-vogue-offwhite/40 group-hover:opacity-70">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};