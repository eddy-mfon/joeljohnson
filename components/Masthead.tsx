import React, { useEffect, useState } from 'react';

interface MastheadProps {
  onNavigateHome: () => void;
}

export const Masthead: React.FC<MastheadProps> = ({ onNavigateHome }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    onNavigateHome(); // Reset view to home first
    
    // Small delay to ensure React has rendered the home view before scrolling
    setTimeout(() => {
      const el = document.querySelector(target);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <nav className={`fixed w-full top-0 left-0 z-[100] transition-all duration-700 px-3 md:px-12 border-b-2 vogue-border ${scrolled ? 'py-2 md:py-3 bg-white/95 backdrop-blur-xl' : 'py-3 md:py-6 lg:py-10 bg-white/70 backdrop-blur-md'}`}>
      <div className="flex justify-between items-center max-w-[1800px] mx-auto gap-2">
        {/* Navigation Left */}
        <div className="flex-1 flex items-center gap-2 md:gap-6 lg:gap-8 text-[7px] xs:text-[8px] md:text-[10px] font-black uppercase tracking-[0.05em] md:tracking-[0.3em]">
          <a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="hover:text-[#2D6A4F] transition-all border-b-2 border-transparent hover:border-[#2D6A4F] pb-1">About</a>
          <a href="#picks" onClick={(e) => handleLinkClick(e, '#picks')} className="hover:text-[#2D6A4F] transition-all border-b-2 border-transparent hover:border-[#2D6A4F] pb-1">Works</a>
          <a href="#essentials" onClick={(e) => handleLinkClick(e, '#essentials')} className="hover:text-[#2D6A4F] transition-all border-b-2 border-transparent hover:border-[#2D6A4F] pb-1">Skills</a>
        </div>
        
        {/* Logo Center */}
        <div className="flex-none md:flex-1 text-center shrink-0">
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigateHome(); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="inline-block group">
            <h1 className={`vogue-serif uppercase font-black tracking-tighter transition-all duration-700 leading-none ${scrolled ? 'text-lg sm:text-2xl md:text-3xl' : 'text-xl sm:text-3xl md:text-6xl'}`}>
              Joel <span className="text-[#2D6A4F] italic">Johnson</span>
            </h1>
          </a>
        </div>

        {/* Navigation Right */}
        <div className="flex-1 flex justify-end items-center gap-2 md:gap-4 lg:gap-8 text-[7px] xs:text-[8px] md:text-[10px] font-black uppercase tracking-[0.05em] md:tracking-[0.3em]">
          <button 
            onClick={() => window.print()} 
            className="group relative flex items-center bg-black text-white px-2 sm:px-4 md:px-7 py-1.5 sm:py-2 md:py-3.5 hover:bg-[#2D6A4F] transition-all duration-500 shadow-[3px_3px_0px_0px_rgba(45,106,79,0.2)] md:shadow-[6px_6px_0px_0px_rgba(45,106,79,0.2)] hover:shadow-none active:scale-95 whitespace-nowrap"
          >
            <span className="font-black tracking-[0.1em] md:tracking-[0.5em] uppercase text-[6px] xs:text-[7px] md:text-[10px]">Official CV</span>
            <div className="ml-2 md:ml-4 h-3 w-[1px] bg-white/20 hidden md:block"></div>
            <svg className="hidden md:block w-3.5 h-3.5 ml-3 transition-transform group-hover:translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
          <a href="#contact-section" onClick={(e) => handleLinkClick(e, '#contact-section')} className="hidden lg:block border-2 border-black px-6 py-3 hover:bg-black hover:text-white transition-all tracking-widest text-[10px] font-black uppercase shadow-sm">Contact</a>
        </div>
      </div>
      
      {!scrolled && (
        <div className="mt-2 md:mt-6 flex justify-center gap-2 md:gap-6 text-[6px] md:text-[9px] font-black uppercase tracking-[0.2em] md:tracking-[0.5em] opacity-40 italic overflow-hidden whitespace-nowrap">
          <span>Vol. 01</span>
          <span className="text-[#2D6A4F]">•</span>
          <span>Covenant University</span>
          <span className="text-[#2D6A4F]">•</span>
          <span className="hidden xs:inline">Data Analyst</span>
        </div>
      )}
    </nav>
  );
};