import React, { useEffect, useState } from 'react';

interface MastheadProps {
  onNavigateHome: () => void;
}

export const Masthead: React.FC<MastheadProps> = ({ onNavigateHome }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Initial theme check
    const isDarkTheme = document.documentElement.classList.contains('dark');
    setIsDark(isDarkTheme);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Sync with system theme changes if no manual preference set
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        setIsDark(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

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
    <nav className={`fixed w-full top-0 left-0 z-[100] transition-all duration-700 px-3 md:px-12 border-b-2 vogue-border ${scrolled ? 'py-2 md:py-3 bg-white/95 dark:bg-vogue-dark/95 backdrop-blur-xl' : 'py-3 md:py-6 lg:py-10 bg-white/70 dark:bg-vogue-dark/70 backdrop-blur-md'}`}>
      <div className="flex justify-between items-center max-w-[1800px] mx-auto gap-2">
        {/* Navigation Left */}
        <div className="flex-1 flex items-center gap-2 md:gap-6 lg:gap-8 text-[7px] xs:text-[8px] md:text-[10px] font-black uppercase tracking-[0.05em] md:tracking-[0.3em] dark:text-vogue-offwhite">
          <a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="hover:text-[#2D6A4F] transition-all border-b-2 border-transparent hover:border-[#2D6A4F] pb-1">About</a>
          <a href="#picks" onClick={(e) => handleLinkClick(e, '#picks')} className="hover:text-[#2D6A4F] transition-all border-b-2 border-transparent hover:border-[#2D6A4F] pb-1">Works</a>
          <a href="#essentials" onClick={(e) => handleLinkClick(e, '#essentials')} className="hover:text-[#2D6A4F] transition-all border-b-2 border-transparent hover:border-[#2D6A4F] pb-1">Skills</a>
        </div>

        {/* Logo Center */}
        <div className="flex-none md:flex-1 text-center shrink-0">
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigateHome(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="inline-block group">
            <h1 className={`vogue-serif uppercase font-black tracking-tighter transition-all duration-700 leading-none dark:text-vogue-offwhite ${scrolled ? 'text-lg sm:text-2xl md:text-3xl' : 'text-xl sm:text-3xl md:text-6xl'}`}>
              Joel <span className="text-[#2D6A4F] italic">Johnson</span>
            </h1>
          </a>
        </div>

        {/* Navigation Right */}
        <div className="flex-1 flex justify-end items-center gap-2 md:gap-4 lg:gap-8 text-[7px] xs:text-[8px] md:text-[10px] font-black uppercase tracking-[0.05em] md:tracking-[0.3em] dark:text-vogue-offwhite">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 transition-all duration-500 hover:scale-110 active:scale-95 text-black dark:text-vogue-offwhite"
          >
            {isDark ? (
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
              </svg>
            ) : (
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>

          <button
            onClick={() => window.print()}
            className="group relative flex items-center bg-black dark:bg-vogue-offwhite text-white dark:text-vogue-dark px-2 sm:px-4 md:px-7 py-1.5 sm:py-2 md:py-3.5 hover:bg-[#2D6A4F] dark:hover:bg-[#2D6A4F] dark:hover:text-white transition-all duration-500 shadow-[3px_3px_0px_0px_rgba(45,106,79,0.2)] md:shadow-[6px_6px_0px_0px_rgba(45,106,79,0.2)] hover:shadow-none active:scale-95 whitespace-nowrap"
          >
            <span className="font-black tracking-[0.1em] md:tracking-[0.5em] uppercase text-[6px] xs:text-[7px] md:text-[10px]">Official CV</span>
            <div className="ml-2 md:ml-4 h-3 w-[1px] bg-white/20 dark:bg-black/20 hidden md:block"></div>
            <svg className="hidden md:block w-3.5 h-3.5 ml-3 transition-transform group-hover:translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
          <a href="#contact-section" onClick={(e) => handleLinkClick(e, '#contact-section')} className="hidden lg:block border-2 border-black dark:border-vogue-offwhite px-6 py-3 hover:bg-black dark:hover:bg-vogue-offwhite hover:text-white dark:hover:text-vogue-dark transition-all tracking-widest text-[10px] font-black uppercase shadow-sm">Contact</a>
        </div>
      </div>

      {!scrolled && (
        <div className="mt-2 md:mt-6 flex justify-center gap-2 md:gap-6 text-[6px] md:text-[9px] font-black uppercase tracking-[0.2em] md:tracking-[0.5em] opacity-40 italic overflow-hidden whitespace-nowrap dark:text-vogue-offwhite">
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