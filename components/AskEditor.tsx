import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { PROJECTS, SKILLS } from '../constants';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const AskEditor: React.FC = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setResponse('');
    
    try {
      const prompt = `
        You are Joel Johnson's personal AI assistant. You help people understand his background as a Data Analyst and ML Enthusiast.
        
        Information about Joel:
        Projects: ${JSON.stringify(PROJECTS)}
        Skills: ${JSON.stringify(SKILLS)}
        
        User Question: ${query}
        
        Instructions:
        Answer in a professional, clear, and authoritative editorial tone. 
        Use clear English and focus on technical facts from his archives. 
        Be concise and helpful.
      `;

      const res = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });

      setResponse(res.text || 'The archives are currently unreachable.');
    } catch (error) {
      console.error(error);
      setResponse('An editorial error occurred while querying the database.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [response]);

  return (
    <div className="my-40 px-8 md:px-20">
      <div className="max-w-5xl mx-auto bg-vogue-sand border-2 vogue-border p-12 md:p-24 relative overflow-hidden shadow-[20px_20px_0px_0px_rgba(45,106,79,0.1)]">
        <div className="absolute top-0 right-0 p-8 text-[12rem] vogue-serif opacity-5 italic font-black pointer-events-none uppercase">Editor</div>
        
        <div className="relative z-10 space-y-16">
          <div className="text-center space-y-6">
            <span className="text-[11px] font-black uppercase tracking-[0.8em] vogue-pink block">Interactive Correspondence</span>
            <h3 className="vogue-serif text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none">The Knowledge Base</h3>
            <p className="text-lg font-light italic max-w-2xl mx-auto leading-relaxed text-gray-500">
              Query the artificial intelligence archives regarding Joel's analytical methodology, technical stack, or project outcomes.
            </p>
          </div>
          
          <form onSubmit={handleAsk} className="flex flex-col gap-10">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="What methodology does Joel apply to financial data?"
              className="bg-transparent border-b-2 vogue-border py-6 px-4 focus:outline-none focus:border-vogue-pink transition-all text-2xl font-light placeholder:opacity-20 italic font-serif"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-black text-white px-16 py-6 uppercase text-[12px] font-black tracking-[0.6em] hover:bg-vogue-pink disabled:opacity-50 transition-all self-center shadow-xl active:scale-95"
            >
              {loading ? 'Interrogating Archive...' : 'Submit Inquiry'}
            </button>
          </form>

          {response && (
            <div className="border-t-2 vogue-border pt-16 mt-16 animate-fade-in" ref={scrollRef}>
              <span className="text-[11px] font-black uppercase vogue-pink block mb-6 italic tracking-[0.4em]">Official Response:</span>
              <p className="text-2xl md:text-3xl leading-relaxed vogue-serif italic text-gray-800 border-l-8 border-vogue-pink pl-12 py-4">
                "{response}"
              </p>
              <div className="mt-12 w-24 h-[2px] bg-black"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};