import React, { useState } from 'react';
import { Masthead } from './components/Masthead';
import { Testimonials } from './components/Testimonials';
import { ProjectImage } from './components/ProjectImage';
import { PROJECTS, SKILLS, CONTACT_DETAILS } from './constants';
import { Logo } from './components/Logo';
import { InternalPage } from './components/InternalPage';
import { StudentPerformanceDetails } from './components/StudentPerformanceDetails';

type PageView = 'home' | 'dev' | '404' | 'student-performance-details';

const App: React.FC = () => {
  const [view, setView] = useState<PageView>('home');
  const mainFeature = PROJECTS[0];
  const projectArchive = PROJECTS.slice(1);

  const navigateTo = (v: PageView) => {
    setView(v);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    if (view !== 'home') {
      setView('home');
      setTimeout(() => {
        const el = document.querySelector(target);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.querySelector(target);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderHome = () => (
    <>
      {/* About Section */}
      <section id="about" className="px-5 md:px-20 mb-20 md:mb-60 max-w-[1800px] mx-auto text-center scroll-mt-24 md:scroll-mt-48">
        <div className="max-w-7xl mx-auto border-y-2 border-black py-10 md:py-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 md:gap-12 mb-12 md:mb-16">
            <div className="max-w-4xl text-left">
              <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.5em] vogue-pink block mb-4 md:mb-6 animate-fade-up">Professional Profile</span>
              <h2 className="vogue-serif uppercase font-black tracking-tighter leading-[0.85] text-[16vw] sm:text-[12vw] md:text-[8rem] lg:text-[10rem] italic animate-fade-up mb-6 md:mb-8 break-words">
                Data Analyst <br/><span className="lowercase font-light serif">&</span> <span className="vogue-pink italic">ML Engineer.</span>
              </h2>
            </div>
            <div className="text-left md:text-right space-y-3 md:space-y-4">
              <Logo className="scale-90 md:scale-125 mb-2 md:mb-8" />
              <p className="vogue-serif text-base md:text-3xl font-light italic text-gray-400">Covenant University Student</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-24 items-start border-t border-black/10 pt-10 md:pt-16">
            <div className="md:col-span-5 text-left space-y-4 md:space-y-8">
              <h3 className="vogue-serif text-2xl sm:text-3xl md:text-6xl font-black uppercase leading-tight italic">
                Solving Real <br className="hidden md:block"/>Problems <br className="hidden md:block"/>With <span className="vogue-pink italic">Big Data.</span>
              </h3>
              <div className="h-[2px] w-16 md:w-32 bg-vogue-pink"></div>
            </div>
            <div className="md:col-span-7 text-left space-y-6 md:space-y-8 text-base sm:text-lg md:text-2xl font-light leading-relaxed">
              <p className="drop-cap">
                My name is Joel Johnson. I am a Computer Science student at Covenant University who loves finding insights in data. I believe that every dataset tells a story, and my job is to make that story easy for everyone to understand.
              </p>
              <p>
                I focus on using Python and visualization tools like Power BI to help businesses make better choices. By using machine learning, I can help people see patterns that would otherwise stay hidden.
              </p>
              <div className="pt-2 md:pt-8">
                <a 
                  href="#contact-section" 
                  onClick={(e) => handleLinkClick(e, '#contact-section')}
                  className="inline-block bg-black text-white px-6 md:px-10 py-3 md:py-5 text-[9px] md:text-[11px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] hover:bg-vogue-pink transition-all shadow-lg active:scale-95"
                >
                  Work Together
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section id="editorials" className="max-w-full mb-20 md:mb-60 scroll-mt-24 md:scroll-mt-48">
        <div className="px-5 md:px-20 mb-6 md:mb-12 max-w-[1800px] mx-auto flex items-center gap-4">
          <span className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.4em] md:tracking-[0.8em] vogue-pink whitespace-nowrap">Featured Case Study</span>
          <div className="h-[1px] flex-grow bg-black"></div>
          <span className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.4em] md:tracking-[0.8em] vogue-pink whitespace-nowrap">Vol. 01</span>
        </div>
        
        <article className="group relative">
          <div className="px-5 md:px-20 relative z-30 mb-6 md:mb-12 overflow-hidden">
             <div className="max-w-[1800px] mx-auto text-center">
               <h3 className="vogue-serif text-[14vw] sm:text-[10vw] md:text-[8rem] lg:text-[10rem] font-black uppercase tracking-tighter leading-[0.75] transition-all duration-[2000ms] group-hover:tracking-normal drop-shadow-sm break-words">
                 {mainFeature.title.split(' ').map((word, i) => (
                   <span key={i} className={i % 2 === 1 ? 'vogue-pink italic block text-[0.5em] leading-[1.2] my-2 md:my-6' : 'block'}>{word}</span>
                 ))}
               </h3>
             </div>
          </div>

          <div className="full-bleed h-[40vh] sm:h-[50vh] md:h-[80vh] overflow-hidden relative mb-10 md:mb-40 border-y-[4px] md:border-y-[15px] vogue-border bg-gray-100">
            <ProjectImage 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000" 
              alt={mainFeature.title}
              className="w-full h-full grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-95 transition-all duration-[4000ms] scale-110 group-hover:scale-100 object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
            
            <div className="absolute bottom-6 left-5 right-5 md:bottom-24 md:left-24 text-white z-10">
               <div className="max-w-4xl space-y-3 md:space-y-6">
                  <span className="bg-vogue-pink text-white px-2 py-0.5 md:px-3 md:py-1 text-[8px] md:text-[10px] font-black uppercase tracking-widest">In-Depth Analysis</span>
                  <p className="vogue-serif text-lg sm:text-2xl md:text-6xl italic font-light leading-tight drop-shadow-lg">
                    "I use Random Forest models to identify at-risk students before it's too late."
                  </p>
               </div>
            </div>
          </div>

          <div className="px-5 md:px-24 max-w-[1800px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-32">
              <div className="lg:col-span-7 space-y-8 md:space-y-10 order-2 lg:order-1">
                <div className="border-b-2 border-black pb-6 md:pb-10 mb-6 md:mb-10">
                   <h4 className="vogue-serif text-3xl sm:text-5xl md:text-8xl font-black uppercase tracking-tighter mb-4 leading-none">
                     Finding <span className="vogue-pink italic">Value</span> In Data.
                   </h4>
                   <p className="vogue-serif text-base sm:text-lg md:text-3xl italic text-gray-500 font-light leading-relaxed">"{mainFeature.subtitle}"</p>
                </div>
                
                <div className="space-y-6 md:space-y-10 text-base sm:text-lg md:text-2xl font-light leading-relaxed">
                  <p className="drop-cap">In this project, I trained Random Forest and Linear Regression models to predict final student grades (G3) with high precision. By analyzing study time, absences, past grades, and lifestyle factors, the model provides a comprehensive risk assessment for educators.</p>
                  <p>The interactive Streamlit dashboard features real-time data input, color-coded pass/fail indicators, and visual risk interpretations. This tool empowers decision-makers to intervene early and improve academic outcomes based on data-driven insights, achieving a Mean R² score of 0.984.</p>
                  <p className="italic border-l-4 border-vogue-pink pl-4 md:pl-6 my-6 md:my-8 text-gray-600 font-serif">
                    "Accurate pass/fail classification based on final grade thresholds."
                  </p>
                </div>
              </div>
              
              <div className="lg:col-span-5 relative order-1 lg:order-2">
                <div className="bg-black text-white p-6 sm:p-8 md:p-12 border-t-[8px] md:border-t-[12px] border-vogue-pink h-auto lg:sticky lg:top-40 shadow-2xl z-40">
                   <div className="flex justify-between items-center mb-6 md:mb-8 border-b border-white/20 pb-4 md:pb-6 gap-4">
                     <span className="text-[9px] md:text-[12px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] vogue-pink block">Project Brief</span>
                     <Logo className="scale-75 brightness-0 invert" />
                   </div>
                   
                   <div className="space-y-6 md:space-y-10">
                      <div>
                        <p className="text-[8px] md:text-[10px] font-bold uppercase mb-2 text-vogue-pink tracking-widest">Main Purpose</p>
                        <p className="vogue-serif text-base md:text-2xl italic font-light leading-snug">{mainFeature.objective}</p>
                      </div>
                      
                      <div className="py-4 md:py-6 border-y border-white/10">
                        <p className="text-[8px] md:text-[10px] font-bold uppercase mb-2 md:mb-3 text-vogue-pink tracking-widest">Performance</p>
                        <p className="text-4xl sm:text-5xl md:text-8xl font-black vogue-pink tracking-tighter uppercase leading-none">{mainFeature.outcome}</p>
                        <span className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] opacity-40 mt-2 md:mt-3 block italic">Verified Improvement</span>
                      </div>
                      
                      <div className="space-y-3 md:space-y-4">
                        <p className="text-[8px] md:text-[10px] font-bold uppercase text-vogue-pink tracking-widest">Core Toolkit</p>
                        <div className="flex flex-wrap gap-1.5 md:gap-2">
                           {mainFeature.tools.map(tool => (
                             <div key={tool} className="flex items-center gap-2 border border-white/20 px-2 py-0.5 md:py-1 bg-neutral-900/50">
                               <span className="text-[7px] md:text-[9px] uppercase tracking-widest font-black text-white">{tool}</span>
                             </div>
                         ))}
                        </div>
                      </div>
                      
                      <button 
                        onClick={() => navigateTo('dev')}
                        className="w-full bg-vogue-pink text-white py-3 md:py-4 text-[9px] md:text-[11px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] hover:bg-white hover:text-black transition-all duration-700 active:scale-95 shadow-lg"
                      >
                        Inspect Code
                      </button>

                      <button 
                        onClick={() => navigateTo('student-performance-details')}
                        className="w-full bg-white text-black border-2 border-white py-3 md:py-4 text-[9px] md:text-[11px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] hover:bg-[#2D6A4F] hover:text-white hover:border-[#2D6A4F] transition-all duration-500 active:scale-95 shadow-lg"
                      >
                        More Info
                      </button>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* Project Archive Gallery */}
      <section id="picks" className="px-5 md:px-20 mb-20 md:mb-60 max-w-[1800px] mx-auto scroll-mt-24 md:scroll-mt-48">
        <div className="border-t-[2px] md:border-t-[3px] border-black pt-10 md:pt-16 mb-10 md:mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-10">
          <div className="space-y-2 md:space-y-4">
            <span className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.6em] md:tracking-[0.8em] vogue-pink">Classifieds</span>
            <h3 className="vogue-serif text-4xl sm:text-5xl md:text-9xl font-black uppercase italic tracking-tighter leading-none">Selected <span className="vogue-pink">Works</span></h3>
          </div>
          <p className="text-sm sm:text-base md:text-lg font-light italic text-gray-400 max-w-md md:text-right leading-relaxed">
            Curated projects showing how I handle customer data, language models, and logistics reports.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
          {projectArchive.map((project, idx) => (
            <div key={project.id} className="group border-b-2 md:border-b-[3px] border-black pb-8 md:pb-12 hover:border-[#2D6A4F] transition-all duration-500 flex flex-col sm:flex-row gap-6 md:gap-10">
              <div className="w-full sm:w-1/3 aspect-[4/5] overflow-hidden border vogue-border shrink-0 bg-gray-50">
                <ProjectImage 
                  src={`https://images.unsplash.com/photo-${1551288049 + (idx * 3000)}?auto=format&fit=crop&q=80&w=600`} 
                  alt={project.title}
                  className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                />
              </div>
              <div className="flex flex-col justify-between space-y-4 md:space-y-6 flex-grow">
                <div>
                  <div className="flex justify-between items-baseline border-b border-black/10 pb-2 md:pb-3 mb-3 md:mb-6">
                    <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest vogue-pink">{project.year}</span>
                    <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest opacity-30">{project.role}</span>
                  </div>
                  <h4 className="vogue-serif text-2xl md:text-5xl font-black uppercase mb-2 leading-tight group-hover:text-[#2D6A4F] transition-colors">{project.title}</h4>
                  <p className="text-sm md:text-lg font-light leading-relaxed text-gray-500 line-clamp-3 italic">"{project.subtitle}"</p>
                </div>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {project.tools.slice(0, 3).map(tool => (
                    <span 
                      key={tool} 
                      className="text-[7px] md:text-[9px] font-black border border-black group-hover:border-[#2D6A4F] px-1.5 md:px-3 py-0.5 md:py-1 uppercase tracking-widest transition-all duration-300 bg-white group-hover:bg-[#2D6A4F] text-black group-hover:text-white"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <button 
                  onClick={() => navigateTo('dev')}
                  className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] border-b-2 vogue-border pb-1 w-fit hover:border-[#2D6A4F] hover:text-[#2D6A4F] transition-all"
                >
                  Full Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Teaser CV Section */}
      <section className="px-5 md:px-20 mb-20 md:mb-60 max-w-[1800px] mx-auto overflow-hidden">
        <div className="bg-vogue-sand border-y-4 border-black py-12 md:py-20 px-6 md:px-24">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24">
            <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
               <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.8em] vogue-pink block">The Short-List</span>
               <h3 className="vogue-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase italic leading-[0.9] break-words max-w-full">
                 Curriculum <br/><span className="vogue-pink">Vitae.</span>
               </h3>
               <p className="text-lg md:text-2xl font-light italic leading-relaxed text-gray-500 max-w-md">
                 "A concise documentation of my academic progression and professional milestones within the data atelier."
               </p>
               <button 
                onClick={() => window.print()}
                className="bg-black text-white px-8 md:px-12 py-3.5 md:py-5 text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] hover:bg-vogue-pink transition-all shadow-xl active:scale-95"
               >
                 Download Full Record
               </button>
            </div>
            
            <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
               <div className="space-y-8 md:space-y-12">
                  <div className="border-b border-black/10 pb-6 md:pb-8">
                     <p className="text-[9px] md:text-[10px] font-black uppercase text-vogue-pink tracking-widest mb-3 md:mb-4">Higher Education</p>
                     <h4 className="vogue-serif text-2xl md:text-3xl font-black uppercase mb-2 leading-tight">Covenant University</h4>
                     <p className="text-[10px] sm:text-xs font-light uppercase tracking-widest opacity-60">B.Sc. Computer Science // Ongoing</p>
                  </div>
                  <div className="border-b border-black/10 pb-6 md:pb-8">
                     <p className="text-[9px] md:text-[10px] font-black uppercase text-vogue-pink tracking-widest mb-3 md:mb-4">Key Achievement 01</p>
                     <h4 className="vogue-serif text-2xl md:text-3xl font-black uppercase mb-2 leading-tight">Market Prediction Engine</h4>
                     <p className="text-[10px] sm:text-xs font-light uppercase tracking-widest opacity-60">90% Accuracy in Sentiment Analysis</p>
                  </div>
               </div>
               <div className="space-y-8 md:space-y-12">
                  <div className="border-b border-black/10 pb-6 md:pb-8">
                     <p className="text-[9px] md:text-[10px] font-black uppercase text-vogue-pink tracking-widest mb-3 md:mb-4">Core Focus</p>
                     <h4 className="vogue-serif text-2xl md:text-3xl font-black uppercase mb-2 leading-tight">Predictive Analytics</h4>
                     <p className="text-[10px] sm:text-xs font-light uppercase tracking-widest opacity-60">ML Modeling & Data Orchestration</p>
                  </div>
                  <div className="border-b border-black/10 pb-6 md:pb-8">
                     <p className="text-[9px] md:text-[10px] font-black uppercase text-vogue-pink tracking-widest mb-3 md:mb-4">Key Achievement 02</p>
                     <h4 className="vogue-serif text-2xl md:text-3xl font-black uppercase mb-2 leading-tight">Retail Intelligence Hub</h4>
                     <p className="text-[10px] sm:text-xs font-light uppercase tracking-widest opacity-60">25% Improvement in Client Retention</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="essentials" className="bg-black text-white py-20 md:py-60 mb-20 md:mb-60 relative overflow-hidden scroll-mt-24 md:scroll-mt-48">
        <div className="absolute top-0 right-0 p-8 text-[12rem] md:text-[30rem] vogue-serif opacity-5 italic font-black pointer-events-none uppercase rotate-12">Expertise</div>
        
        <div className="max-w-[1800px] mx-auto px-5 md:px-20 relative z-10">
          <div className="mb-12 md:mb-32 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 md:gap-10">
             <div className="space-y-3 md:space-y-6">
              <span className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.6em] md:tracking-[1em] vogue-pink block">The Atelier</span>
              <h3 className="vogue-serif text-4xl sm:text-5xl md:text-[12rem] italic font-black leading-[0.8] uppercase tracking-tighter">My Technical <br/><span className="vogue-pink">Toolkit</span></h3>
            </div>
            <div className="max-w-xl md:text-right border-l-4 md:border-l-0 md:border-r-8 border-vogue-pink pl-6 md:pl-0 md:pr-16 py-3 md:py-4">
              <p className="text-lg md:text-3xl font-light italic leading-relaxed text-gray-300">
                A selection of modern tools I use to analyze complex data and build smart solutions.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
            {SKILLS.map((category, idx) => (
              <div key={category.name} className="group bg-neutral-900/50 border border-white/10 p-8 md:p-16 transition-all duration-700 hover:bg-vogue-pink hover:-translate-y-4 flex flex-col h-full shadow-2xl relative overflow-hidden">
                 <div className="flex items-center justify-between mb-8 md:mb-16">
                  <span className="vogue-serif text-4xl md:text-6xl opacity-20 group-hover:opacity-100 transition-opacity italic">0{idx + 1}</span>
                  <Logo className="scale-75 brightness-0 invert opacity-10 group-hover:opacity-50" />
                </div>
                <h4 className="vogue-serif text-xl md:text-4xl font-black uppercase mb-4 md:mb-10 border-b border-white/20 pb-3 md:pb-6 transition-colors">{category.name}</h4>
                <ul className="space-y-3 md:space-y-6 flex-grow">
                  {category.skills.map(skill => (
                    <li key={skill} className="flex items-center gap-3 md:gap-4">
                      <div className="w-1.5 h-1.5 bg-vogue-pink group-hover:bg-white rounded-full transition-colors shrink-0"></div>
                      <span className="text-base md:text-xl font-light tracking-tight text-gray-300 group-hover:text-white transition-colors">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Contact Section */}
      <section id="contact-section" className="px-5 md:px-20 mb-20 md:mb-60 max-w-[1800px] mx-auto scroll-mt-24 md:scroll-mt-48">
        <div className="border-t-[6px] md:border-t-[10px] border-black pt-12 md:pt-40">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-40 items-start">
              <div className="lg:col-span-5 space-y-10 md:space-y-20">
                 <div className="space-y-4 md:space-y-6">
                    <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.8em] md:tracking-[1em] vogue-pink block">Get In Touch</span>
                    <h2 className="vogue-serif text-5xl sm:text-6xl md:text-[10rem] font-black uppercase italic tracking-tighter leading-[0.75]">Contact Joel</h2>
                 </div>
                 
                 <div className="space-y-8 md:space-y-12">
                    <div className="border-l-[6px] md:border-l-[10px] border-vogue-pink pl-6 md:pl-12 py-3 md:py-4">
                       <p className="vogue-serif text-lg md:text-4xl font-light italic leading-relaxed text-gray-500">
                         "I am always looking for new data projects and collaborations. Reach out to me directly."
                       </p>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-6 md:gap-12 pt-4 md:pt-12">
                       <div className="group">
                          <p className="text-[9px] md:text-[12px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-gray-400 mb-1 md:mb-4">Direct Email</p>
                          <a href={`mailto:${CONTACT_DETAILS.email}`} className="vogue-serif text-lg md:text-4xl font-black hover:vogue-pink transition-colors break-all border-b-2 border-transparent hover:border-vogue-pink pb-1">
                            {CONTACT_DETAILS.email}
                          </a>
                       </div>
                       <div className="group">
                          <p className="text-[9px] md:text-[12px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-gray-400 mb-1 md:mb-4">Phone Line</p>
                          <p className="vogue-serif text-lg md:text-4xl font-black">{CONTACT_DETAILS.phone}</p>
                       </div>
                       <div className="group">
                          <p className="text-[9px] md:text-[12px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-gray-400 mb-1 md:mb-4">Social Network</p>
                          <a href={CONTACT_DETAILS.linkedin} target="_blank" rel="noopener noreferrer" className="vogue-serif text-lg md:text-4xl font-black hover:vogue-pink transition-colors border-b-2 border-transparent hover:border-vogue-pink pb-1">LinkedIn Profile</a>
                       </div>
                    </div>
                 </div>
              </div>
              
              <div className="lg:col-span-7 bg-white border-[3px] md:border-[6px] border-black p-6 sm:p-12 md:p-24 shadow-[12px_12px_0px_0px_rgba(45,106,79,1)] md:shadow-[40px_40px_0px_0px_rgba(45,106,79,1)]">
                 <div className="border-b-4 border-black pb-6 md:pb-12 mb-8 md:mb-16 flex justify-between items-end gap-4">
                    <div className="space-y-1">
                       <h3 className="vogue-serif text-2xl md:text-6xl font-black uppercase tracking-tighter leading-none">Submit Message</h3>
                       <p className="text-[8px] md:text-[11px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] opacity-40">Digital Correspondence Form</p>
                    </div>
                    <Logo className="scale-75 md:scale-125 hidden sm:block" />
                 </div>
                 
                 <form className="space-y-8 md:space-y-16" onSubmit={(e) => { e.preventDefault(); navigateTo('404'); }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                       <div className="border-b-2 border-black/20 focus-within:border-vogue-pink transition-all pb-2 md:pb-4">
                          <label className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] mb-2 md:mb-4 block">Full Name</label>
                          <input type="text" className="w-full bg-transparent focus:outline-none font-serif italic text-xl md:text-3xl placeholder:opacity-10" placeholder="John Doe" />
                       </div>
                       <div className="border-b-2 border-black/20 focus-within:border-vogue-pink transition-all pb-2 md:pb-4">
                          <label className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] mb-2 md:mb-4 block">Institution</label>
                          <input type="text" className="w-full bg-transparent focus:outline-none font-serif italic text-xl md:text-3xl placeholder:opacity-10" placeholder="Organization" />
                       </div>
                    </div>
                    <div className="border-b-2 border-black/20 focus-within:border-vogue-pink transition-all pb-2 md:pb-4">
                       <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] mb-2 md:mb-4 block">Subject</label>
                       <input type="text" className="w-full bg-transparent focus:outline-none font-serif italic text-xl md:text-3xl placeholder:opacity-10" placeholder="How can I help you?" />
                    </div>
                    <div className="border-b-2 border-black/20 focus-within:border-vogue-pink transition-all pb-2 md:pb-4">
                       <label className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] mb-2 md:mb-4 block">Message Details</label>
                       <textarea className="w-full bg-transparent focus:outline-none font-serif italic text-xl md:text-3xl min-h-[120px] md:min-h-[200px] resize-none placeholder:opacity-10" placeholder="Write your details here..."></textarea>
                    </div>
                    <button className="bg-black text-white px-8 md:px-16 py-4 md:py-8 text-[11px] md:text-[14px] font-black uppercase tracking-[0.6em] md:tracking-[1em] hover:bg-vogue-pink transition-all w-full shadow-2xl active:scale-95">
                       Send Message
                    </button>
                 </form>
              </div>
           </div>
        </div>
      </section>
      
    </>
  );

  return (
    <div className="bg-white text-black min-h-screen selection:bg-black selection:text-white">
      <Masthead onNavigateHome={() => setView('home')} />

      <div className="pt-20 sm:pt-24 md:pt-48 overflow-x-hidden">
        {view === 'home' && renderHome()}
        
        {view === 'dev' && (
          <InternalPage 
            tag="Portfolio Status"
            title="Project Pending" 
            subtitle="Extended Analysis Ongoing" 
            message="This specific section of the dossier is currently being finalized. I am organizing the repository and polishing the technical documentation for public viewing. Check back shortly for the full project lifecycle data."
            onBack={() => navigateTo('home')}
          />
        )}

        {view === '404' && (
          <InternalPage 
            tag="System Alert // 404"
            title="Project Pending" 
            subtitle="Archival Record Missing" 
            message="The path you've navigated to is currently unavailable in the main archive. Return to the main hub for verified project data."
            onBack={() => navigateTo('home')}
          />
        )}
        
        {view === 'student-performance-details' && (
          <StudentPerformanceDetails onBack={() => navigateTo('home')} />
        )}

        {/* Final Footer */}
        <footer className="mt-20 md:mt-40 bg-black text-white pt-24 md:pt-60 pb-16 md:pb-24 px-6 md:px-20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 md:h-2 bg-vogue-pink"></div>
          <div className="max-w-[1800px] mx-auto">
            <div className="mb-24 md:mb-60">
               <h2 className="vogue-serif text-[18vw] md:text-[25rem] font-black uppercase tracking-tighter leading-[0.6] flex flex-col items-center text-center select-none pointer-events-none">
                <span className="text-white">JOEL</span>
                <span className="vogue-pink italic mt-2 md:mt-0 mb-[-2vw] drop-shadow-[0_0_40px_rgba(45,106,79,0.3)]">JOHNSON</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20 border-t border-white/10 pt-16 md:pt-32 mb-24 md:mb-40">
              <div className="space-y-6 md:space-y-10">
                <h6 className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.6em] text-vogue-pink border-b border-vogue-pink/30 pb-2 w-fit">Direct Lineage</h6>
                <div className="text-[11px] uppercase tracking-[0.3em] font-light leading-loose space-y-4">
                  <p className="opacity-70">Covenant University // Ota</p>
                  <p className="opacity-70">Ogun State, Nigeria</p>
                  <a href={`mailto:${CONTACT_DETAILS.email}`} className="vogue-pink font-black block text-sm sm:text-base md:text-lg tracking-tight hover:tracking-normal transition-all underline underline-offset-8 decoration-1">
                    {CONTACT_DETAILS.email}
                  </a>
                  <p className="pt-2 font-black text-base md:text-lg">{CONTACT_DETAILS.phone}</p>
                </div>
              </div>

              <div className="space-y-6 md:space-y-10">
                <h6 className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.6em] text-vogue-pink border-b border-vogue-pink/30 pb-2 w-fit">Wire Services</h6>
                <ul className="text-[12px] uppercase tracking-[0.4em] font-black space-y-6">
                  <li>
                    <a href={CONTACT_DETAILS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-vogue-pink transition-all flex items-center gap-3 group">
                      <div className="w-1.5 h-1.5 bg-vogue-pink rounded-full group-hover:scale-150 transition-transform"></div> 
                      LinkedIn Profile
                    </a>
                  </li>
                  <li>
                    <button onClick={() => navigateTo('dev')} className="hover:text-vogue-pink transition-all flex items-center gap-3 group text-left">
                      <div className="w-1.5 h-1.5 bg-vogue-pink rounded-full group-hover:scale-150 transition-transform"></div> 
                      GitHub Archive
                    </button>
                  </li>
                </ul>
              </div>

              <div className="space-y-6 md:space-y-10">
                <h6 className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.6em] text-vogue-pink border-b border-vogue-pink/30 pb-2 w-fit">Editorial Motto</h6>
                <p className="text-[11px] uppercase tracking-[0.3em] font-light leading-relaxed italic text-gray-500 max-w-xs">
                  "In a world of noise, clear data is the best way to find the truth."
                </p>
                <div className="pt-4">
                  <Logo className="scale-110 md:scale-125 brightness-0 invert opacity-40" />
                </div>
              </div>

              <div className="space-y-6 md:space-y-10 md:text-right">
                <h6 className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.6em] text-vogue-pink border-b border-vogue-pink/30 pb-2 w-fit ml-auto">Archives Info</h6>
                <div className="text-[11px] uppercase tracking-[0.3em] font-light space-y-3 text-gray-400">
                  <p><span className="text-white/30">Edition //</span> Vol. 01</p>
                  <p><span className="text-white/30">Status //</span> Active Learner</p>
                  <p><span className="text-white/30">Release //</span> {new Date().toLocaleDateString('en-US', {month: 'long', year: 'numeric'})}</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center pt-16 md:pt-24 border-t border-white/10 text-[10px] md:text-[11px] font-black uppercase tracking-[0.8em] md:tracking-[1.2em] text-gray-500 text-center md:text-left gap-10">
               <span>© {new Date().getFullYear()} JOEL JOHNSON PORTFOLIO</span>
               <span className="italic vogue-pink text-sm md:text-base tracking-[0.4em]">Truth Through Data.</span>
               <span className="opacity-40 text-[9px] md:text-[10px]">ALL RIGHTS RESERVED // DIGITAL HUB</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;