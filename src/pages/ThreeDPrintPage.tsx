import React from 'react';
import { Link } from 'react-router-dom';
import AuroraBackground from '../components/AuroraBackground';
import TextReveal from '../components/TextReveal';
import FadeInSection from '../components/FadeInSection';

function ThreeDPrintPage() {
    return (
        <div className="bg-slate-950 text-slate-200 min-h-screen relative selection:bg-purple-500 selection:text-white">
            <AuroraBackground />

            <div className="relative z-10 container mx-auto px-6 py-20">
                <div className="mb-12">
                    <Link to="/" className="text-slate-500 hover:text-white transition-colors text-sm tracking-widest mb-8 inline-block">
                        &larr; BACK TO HOME
                    </Link>
                    <TextReveal>
                        <h1 className="font-noto text-3xl md:text-5xl lg:text-6xl font-light tracking-[0.2em] text-white drop-shadow-lg">
                            3D PRINT WORKS
                        </h1>
                    </TextReveal>
                </div>

                <FadeInSection delay={0.3}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Placeholder items */}
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="aspect-square bg-slate-900/50 border border-slate-800 rounded-sm flex items-center justify-center backdrop-blur-sm">
                                <p className="text-slate-600 tracking-widest">COMING SOON</p>
                            </div>
                        ))}
                    </div>
                </FadeInSection>
            </div>
        </div>
    );
}

export default ThreeDPrintPage;
