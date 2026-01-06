import React, { useEffect } from 'react';
import { ProjectImage } from './ProjectImage';
import { Logo } from './Logo';

interface Props {
    onBack: () => void;
}

export const StudentPerformanceDetails: React.FC<Props> = ({ onBack }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white dark:bg-vogue-dark min-h-screen pt-24 md:pt-40 pb-20 px-5 md:px-20 animate-fade-up transition-colors duration-500">
            <div className="max-w-[1400px] mx-auto">
                {/* Navigation / Header */}
                <div className="flex justify-between items-center mb-12 border-b-2 border-black dark:border-vogue-offwhite/20 pb-6">
                    <button
                        onClick={onBack}
                        className="group flex items-center gap-3 text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] hover:text-[#2D6A4F] transition-colors dark:text-vogue-offwhite"
                    >
                        <span className="group-hover:-translate-x-1 transition-transform">←</span> Return to Edition
                    </button>
                    <Logo className="scale-75 md:scale-100 dark:brightness-0 dark:invert" />
                </div>

                {/* Title Section */}
                <header className="mb-16 md:mb-24 text-center">
                    <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.6em] text-[#2D6A4F] block mb-6">In-Depth Report</span>
                    <h1 className="vogue-serif text-5xl md:text-7xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-8 dark:text-vogue-offwhite">
                        Student <br /><span className="text-[#2D6A4F] italic">Performance</span> <br />Prediction App
                    </h1>
                </header>

                {/* Hero Image */}
                <div className="mb-20 md:mb-32 border-y-[4px] border-black dark:border-vogue-offwhite/20 py-4">
                    <div className="h-[40vh] md:h-[70vh] w-full overflow-hidden relative">
                        <ProjectImage
                            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000"
                            alt="Student Performance Dashboard"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 object-top"
                        />
                        <div className="absolute bottom-0 left-0 bg-black text-white px-6 py-3 text-[10px] uppercase tracking-widest font-bold">
                            Fig 1.0 — Dashboard Interface
                        </div>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-24">

                    {/* Left Column: Description & Features */}
                    <div className="lg:col-span-8 space-y-16">
                        <div>
                            <h3 className="vogue-serif text-3xl md:text-4xl font-black uppercase mb-6 border-b border-black/10 pb-4">Detailed Description & Features</h3>
                            <p className="text-lg md:text-xl font-light leading-relaxed mb-8 drop-cap text-gray-800">
                                Trained Random Forest and Linear Regression models to predict final grade (G3) based on features like study time, absences, past grades, parental education, and lifestyle factors.
                            </p>

                            <div className="space-y-8 pl-4 border-l-2 border-[#2D6A4F]">
                                <div>
                                    <h4 className="font-bold uppercase tracking-widest text-xs mb-2 text-[#2D6A4F]">Feature Engineering</h4>
                                    <p className="font-serif italic text-lg text-gray-600">
                                        Engineered critical features including <span className="font-bold not-italic">total_parent_edu</span> (sum of mother & father education) and <span className="font-bold not-italic">alcohol_consumption</span> (average of weekday & weekend alcohol use).
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-bold uppercase tracking-widest text-xs mb-2 text-[#2D6A4F]">Dashboard Implementation</h4>
                                    <p className="font-serif italic text-lg text-gray-600">
                                        Implemented interactive Streamlit dashboard allowing users to input student data and get predicted grades, pass/fail classification, and risk level.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-bold uppercase tracking-widest text-xs mb-2 text-[#2D6A4F]">Visual Analytics</h4>
                                    <ul className="list-disc list-inside font-serif italic text-lg text-gray-600">
                                        <li>Color-coded PASS/FAIL indicators</li>
                                        <li>Progress bar for performance</li>
                                        <li>Risk level interpretation</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-bold uppercase tracking-widest text-xs mb-2 text-[#2D6A4F]">Methodology</h4>
                                    <p className="font-serif italic text-lg text-gray-600">
                                        Applied cross-validation and performance metrics (R²) to evaluate model accuracy. Preprocessed data using StandardScaler for proper model input.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Takeaways Section */}
                        <div className="bg-[#F9F8F6] p-8 md:p-12 border border-black">
                            <h3 className="vogue-serif text-2xl md:text-3xl font-black uppercase mb-6">Overall Takeaways</h3>
                            <ul className="space-y-6 text-base md:text-lg font-light">
                                <li className="flex gap-4 items-start">
                                    <span className="text-[#2D6A4F] font-bold text-xl font-serif">01</span>
                                    <span><strong className="font-bold uppercase text-xs tracking-widest block mb-1">Predictive Power</strong> Past performance (G1, G2, avg_grade) is the strongest predictor.</span>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <span className="text-[#2D6A4F] font-bold text-xl font-serif">02</span>
                                    <span><strong className="font-bold uppercase text-xs tracking-widest block mb-1">Lifestyle Impact</strong> Behavioral and lifestyle factors (studytime, failures, absences, alcohol) matter moderately.</span>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <span className="text-[#2D6A4F] font-bold text-xl font-serif">03</span>
                                    <span><strong className="font-bold uppercase text-xs tracking-widest block mb-1">Socio-Economic</strong> Parental education also contributes → socio-economic factors matter.</span>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <span className="text-[#2D6A4F] font-bold text-xl font-serif">04</span>
                                    <span><strong className="font-bold uppercase text-xs tracking-widest block mb-1">Ensemble Value</strong> Some features (freetime, goout) are weak alone but may be useful in random forest or other ensemble models.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Column: Tech Stack & Highlights */}
                    <div className="lg:col-span-4 space-y-12">

                        {/* Tech Stack */}
                        <div className="bg-black text-white p-8 shadow-[10px_10px_0px_0px_rgba(45,106,79,1)]">
                            <h3 className="text-[#2D6A4F] text-[10px] font-black uppercase tracking-[0.4em] mb-6 block">Technical Specifications</h3>
                            <ul className="space-y-4">
                                <li className="border-b border-white/20 pb-2">
                                    <span className="block text-[9px] uppercase tracking-widest opacity-50 mb-1">Language</span>
                                    <span className="font-serif text-xl italic">Python 3.10 / 3.11</span>
                                </li>
                                <li className="border-b border-white/20 pb-2">
                                    <span className="block text-[9px] uppercase tracking-widest opacity-50 mb-1">Libraries</span>
                                    <span className="font-serif text-xl italic">Pandas, NumPy, scikit-learn, joblib</span>
                                </li>
                                <li className="border-b border-white/20 pb-2">
                                    <span className="block text-[9px] uppercase tracking-widest opacity-50 mb-1">Framework</span>
                                    <span className="font-serif text-xl italic">Streamlit</span>
                                </li>
                                <li className="border-b border-white/20 pb-2">
                                    <span className="block text-[9px] uppercase tracking-widest opacity-50 mb-1">Environment</span>
                                    <span className="font-serif text-xl italic">Google Colab</span>
                                </li>
                            </ul>
                        </div>

                        {/* Key Highlights */}
                        <div className="border-t-4 border-black pt-6">
                            <h3 className="vogue-serif text-2xl font-black uppercase mb-6">Key Highlights</h3>
                            <div className="space-y-6">
                                <div className="group">
                                    <span className="text-4xl md:text-5xl font-black text-[#2D6A4F] block mb-2">0.984</span>
                                    <span className="text-[10px] font-bold uppercase tracking-widest block">Mean R² Score (Random Forest)</span>
                                </div>
                                <div className="h-[1px] bg-black/10 w-full"></div>
                                <div className="group">
                                    <span className="text-xl font-black block mb-2 uppercase">Pass/Fail Logic</span>
                                    <p className="text-sm text-gray-500 font-light">Accurate classification based on final grade thresholds (≥7 = PASS).</p>
                                </div>
                                <div className="h-[1px] bg-black/10 w-full"></div>
                                <div className="group">
                                    <span className="text-xl font-black block mb-2 uppercase">Real-time</span>
                                    <p className="text-sm text-gray-500 font-light">Interactive dashboard for immediate academic insights.</p>
                                </div>
                            </div>
                        </div>

                        {/* Secondary Image Placeholder */}
                        <div className="aspect-[3/4] w-full bg-gray-100 border border-black relative overflow-hidden group">
                            <ProjectImage
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
                                alt="Code Analysis"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                                <span className="text-white text-xs font-bold uppercase tracking-[0.3em] border border-white px-4 py-2">Data Source</span>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Footer Navigation */}
                <div className="border-t-2 border-black pt-12 flex justify-center pb-12">
                    <button
                        onClick={onBack}
                        className="bg-[#2D6A4F] text-white px-12 py-4 text-[11px] font-black uppercase tracking-[0.4em] hover:bg-black transition-all shadow-xl active:scale-95"
                    >
                        Close Report
                    </button>
                </div>
            </div>
        </div>
    );
};