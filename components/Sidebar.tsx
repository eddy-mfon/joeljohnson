
import React from 'react';

export const Sidebar: React.FC = () => {
  return (
    <aside className="md:col-span-4 space-y-16 py-12">
      <div className="sticky top-32 space-y-12">
        <div className="space-y-6">
          <h3 className="vogue-serif text-3xl font-bold uppercase border-b-2 vogue-border pb-2">
            Quick Look
          </h3>
          <p className="text-xs font-light leading-relaxed uppercase tracking-widest text-gray-500">
            A summary of my current focus areas in data science and machine learning.
          </p>
          <ul className="space-y-4 pt-4">
            <li className="group cursor-pointer">
              <span className="text-[10px] vogue-accent font-bold block mb-1">FOCUS</span>
              <span className="text-sm font-semibold group-hover:underline">Predictive Models</span>
            </li>
            <li className="group cursor-pointer">
              <span className="text-[10px] vogue-accent font-bold block mb-1">CURRENT</span>
              <span className="text-sm font-semibold group-hover:underline">Data Visualizations</span>
            </li>
            <li className="group cursor-pointer">
              <span className="text-[10px] vogue-accent font-bold block mb-1">LEARNING</span>
              <span className="text-sm font-semibold group-hover:underline">Deep Learning Architectures</span>
            </li>
          </ul>
        </div>

        <div className="bg-vogue-sand p-8 border vogue-border text-center space-y-4">
          <span className="text-[10px] font-bold tracking-widest uppercase block">Personal Motto</span>
          <p className="vogue-serif text-xl italic leading-tight">
            "In a world of noise, clear data is the best way to find the truth."
          </p>
          <div className="w-8 h-[1px] bg-black mx-auto"></div>
          <p className="text-[10px] font-bold uppercase tracking-widest">Joel Johnson</p>
        </div>

        <div className="space-y-4">
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400" 
            alt="Data Visualization Abstract" 
            className="w-full grayscale hover:grayscale-0 transition-all duration-700"
          />
          <p className="text-[9px] font-light uppercase tracking-widest text-center italic">Example of Data Insights</p>
        </div>
      </div>
    </aside>
  );
};
