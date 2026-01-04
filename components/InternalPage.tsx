import React from 'react';
import { Logo } from './Logo';

interface InternalPageProps {
  tag?: string;
  title: string;
  subtitle: string;
  message: string;
  onBack: () => void;
}

export const InternalPage: React.FC<InternalPageProps> = ({ 
  tag = "Portfolio System Alert", 
  title, 
  subtitle, 
  message, 
  onBack 
}) => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-6 py-24">
      <div className="max-w-4xl w-full border-4 border-black p-8 md:p-20 relative bg-vogue-sand shadow-[20px_20px_0px_0px_rgba(45,106,79,1)] sm:shadow-[30px_30px_0px_0px_rgba(45,106,79,1)]">
        <div className="absolute top-4 right-4 opacity-10 hidden md:block">
          <Logo className="scale-150" />
        </div>
        
        <div className="border-b-2 border-black pb-8 mb-12">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] vogue-pink block mb-4 italic">{tag}</span>
          <h2 className="vogue-serif text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-4">
            {title}
          </h2>
          <p className="vogue-serif text-xl md:text-3xl italic text-gray-500 font-light">
            "{subtitle}"
          </p>
        </div>
        
        <div className="space-y-8 mb-16">
          <p className="vogue-serif text-lg md:text-2xl leading-relaxed text-gray-800">
            {message}
          </p>
          <div className="h-[1px] w-full bg-black/10"></div>
          <p className="text-[11px] font-black uppercase tracking-[0.3em] text-gray-400 italic">
            Status: Connection Active // Archive ID: PENDING
          </p>
        </div>
        
        <button 
          onClick={onBack}
          className="bg-black text-white px-10 py-5 text-[11px] font-black uppercase tracking-[0.6em] hover:bg-vogue-pink transition-all shadow-xl active:scale-95 w-full sm:w-auto"
        >
          Return to Portfolio
        </button>
      </div>
    </div>
  );
};