import React, { useEffect } from 'react';
import { ProjectImage } from './ProjectImage';
import { Logo } from './Logo';

interface Props {
    onBack: () => void;
}

export const LoanApprovalDetails: React.FC<Props> = ({ onBack }) => {
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
                        Loan Approval <br /><span className="text-[#2D6A4F] italic">Prediction</span> <br />System
                    </h1>
                </header>

                {/* Hero Image */}
                <div className="mb-20 md:mb-32 border-y-[4px] border-black dark:border-vogue-offwhite/20 py-4">
                    <div className="h-[40vh] md:h-[70vh] w-full overflow-hidden relative">
                        <ProjectImage
                            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=2000"
                            alt="Loan Approval Dashboard"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 object-center"
                        />
                        <div className="absolute bottom-0 left-0 bg-black text-white px-6 py-3 text-[10px] uppercase tracking-widest font-bold">
                            Fig 1.0 — Streamlit Dashboard Interface
                        </div>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-24">

                    {/* Left Column: Description & Features */}
                    <div className="lg:col-span-8 space-y-16">
                        <div>
                            <h3 className="vogue-serif text-3xl md:text-4xl font-black uppercase mb-6 border-b border-black/10 pb-4">Project Overview</h3>
                            <p className="text-lg md:text-xl font-light leading-relaxed mb-8 drop-cap text-gray-800">
                                This project is an end-to-end machine learning application designed to predict whether a customer's loan request will be approved or rejected based on their financial profile, assets, and creditworthiness.
                            </p>

                            <div className="space-y-8 pl-4 border-l-2 border-[#2D6A4F]">
                                <div>
                                    <h4 className="font-bold uppercase tracking-widest text-xs mb-2 text-[#2D6A4F]">Data Processing</h4>
                                    <p className="font-serif italic text-lg text-gray-600">
                                        Comprehensive data cleaning and handling of inconsistent categorical formats. Applied feature engineering to create <span className="font-bold not-italic">debt-to-income ratio</span>, <span className="font-bold not-italic">loan-to-asset ratio</span>, and <span className="font-bold not-italic">total assets</span> metrics.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-bold uppercase tracking-widest text-xs mb-2 text-[#2D6A4F]">Model Selection</h4>
                                    <p className="font-serif italic text-lg text-gray-600">
                                        Evaluated multiple algorithms including Logistic Regression, Decision Tree, and XGBoost using 5-fold cross-validation. XGBoost was selected as the final model due to superior performance and robustness.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-bold uppercase tracking-widest text-xs mb-2 text-[#2D6A4F]">Production Pipeline</h4>
                                    <p className="font-serif italic text-lg text-gray-600">
                                        Built production-ready pipeline using scikit-learn, ensuring consistent preprocessing and prediction. Model persistence implemented using .pkl and JSON feature schema for deployment reliability.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-bold uppercase tracking-widest text-xs mb-2 text-[#2D6A4F]">Interactive Dashboard</h4>
                                    <ul className="list-disc list-inside font-serif italic text-lg text-gray-600">
                                        <li>Real-time loan approval predictions</li>
                                        <li>Confidence score visualization</li>
                                        <li>User-friendly input interface</li>
                                        <li>Instant decision feedback</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Key Features Section */}
                        <div className="bg-[#F9F8F6] p-8 md:p-12 border border-black">
                            <h3 className="vogue-serif text-2xl md:text-3xl font-black uppercase mb-6">Key Features</h3>
                            <ul className="space-y-6 text-base md:text-lg font-light">
                                <li className="flex gap-4 items-start">
                                    <span className="text-[#2D6A4F] font-bold text-xl font-serif">01</span>
                                    <span><strong className="font-bold uppercase text-xs tracking-widest block mb-1">Financial Analysis</strong> Analyzes income, loan amount, asset values, credit score (CIBIL), and employment status.</span>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <span className="text-[#2D6A4F] font-bold text-xl font-serif">02</span>
                                    <span><strong className="font-bold uppercase text-xs tracking-widest block mb-1">Advanced Engineering</strong> Custom features including debt-to-income and loan-to-asset ratios for better predictions.</span>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <span className="text-[#2D6A4F] font-bold text-xl font-serif">03</span>
                                    <span><strong className="font-bold uppercase text-xs tracking-widest block mb-1">Model Validation</strong> 5-fold cross-validation ensures reliable and consistent performance across datasets.</span>
                                </li>
                                <li className="flex gap-4 items-start">
                                    <span className="text-[#2D6A4F] font-bold text-xl font-serif">04</span>
                                    <span><strong className="font-bold uppercase text-xs tracking-widest block mb-1">Production Ready</strong> Industry-standard deployment practices with scikit-learn pipeline and model persistence.</span>
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
                                    <span className="font-serif text-xl italic">Python</span>
                                </li>
                                <li className="border-b border-white/20 pb-2">
                                    <span className="block text-[9px] uppercase tracking-widest opacity-50 mb-1">Core Libraries</span>
                                    <span className="font-serif text-xl italic">Pandas, NumPy, Scikit-learn</span>
                                </li>
                                <li className="border-b border-white/20 pb-2">
                                    <span className="block text-[9px] uppercase tracking-widest opacity-50 mb-1">ML Algorithm</span>
                                    <span className="font-serif text-xl italic">XGBoost</span>
                                </li>
                                <li className="border-b border-white/20 pb-2">
                                    <span className="block text-[9px] uppercase tracking-widest opacity-50 mb-1">Visualization</span>
                                    <span className="font-serif text-xl italic">Matplotlib, Seaborn</span>
                                </li>
                                <li className="border-b border-white/20 pb-2">
                                    <span className="block text-[9px] uppercase tracking-widest opacity-50 mb-1">Deployment</span>
                                    <span className="font-serif text-xl italic">Streamlit</span>
                                </li>
                                <li className="border-b border-white/20 pb-2">
                                    <span className="block text-[9px] uppercase tracking-widest opacity-50 mb-1">Model Type</span>
                                    <span className="font-serif text-xl italic">Binary Classification</span>
                                </li>
                            </ul>
                        </div>

                        {/* Key Highlights */}
                        <div className="border-t-4 border-black pt-6">
                            <h3 className="vogue-serif text-2xl font-black uppercase mb-6">Key Highlights</h3>
                            <div className="space-y-6">
                                <div className="group">
                                    <span className="text-4xl md:text-5xl font-black text-[#2D6A4F] block mb-2">XGBoost</span>
                                    <span className="text-[10px] font-bold uppercase tracking-widest block">Superior Model Performance</span>
                                </div>
                                <div className="h-[1px] bg-black/10 w-full"></div>
                                <div className="group">
                                    <span className="text-xl font-black block mb-2 uppercase">5-Fold Validation</span>
                                    <p className="text-sm text-gray-500 font-light">Cross-validation for reliable performance evaluation.</p>
                                </div>
                                <div className="h-[1px] bg-black/10 w-full"></div>
                                <div className="group">
                                    <span className="text-xl font-black block mb-2 uppercase">Real-time</span>
                                    <p className="text-sm text-gray-500 font-light">Interactive dashboard with instant predictions and confidence scores.</p>
                                </div>
                            </div>
                        </div>

                        {/* Secondary Image Placeholder */}
                        <div className="aspect-[3/4] w-full bg-gray-100 border border-black relative overflow-hidden group">
                            <ProjectImage
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                                alt="Financial Data Analysis"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                                <span className="text-white text-xs font-bold uppercase tracking-[0.3em] border border-white px-4 py-2">Model Pipeline</span>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Impact Section */}
                <div className="mb-24 border-t-2 border-black pt-16">
                    <h3 className="vogue-serif text-3xl md:text-5xl font-black uppercase mb-8 text-center">Outcome & Impact</h3>
                    <p className="text-lg md:text-2xl font-light leading-relaxed text-center max-w-4xl mx-auto text-gray-700 italic">
                        "The application accurately predicts loan approval outcomes and demonstrates how machine learning can support financial decision-making, reduce risk, and improve efficiency in lending systems. The project follows industry-standard ML deployment practices, making it suitable for real-world applications."
                    </p>
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
