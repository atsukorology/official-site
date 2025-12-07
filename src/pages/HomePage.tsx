import React from 'react';
import { Link } from 'react-router-dom';
import TextReveal from '../components/TextReveal';
import FadeInSection from '../components/FadeInSection';
import brandIcon from '../assets/brand-icon.svg';

function HomePage() {
    return (
        <div className="bg-white text-slate-800 min-h-screen relative overflow-hidden flex flex-col items-center justify-center selection:bg-slate-200 selection:text-slate-900">

            <div className="relative z-10 w-full max-w-6xl px-8 md:px-16 flex flex-col md:flex-row items-center md:items-start justify-between gap-16 md:gap-8">

                {/* Brand Section */}
                <div className="flex flex-col items-center md:items-start space-y-8 md:flex-1">
                    <FadeInSection delay={0.2}>
                        <img src={brandIcon} alt="The Sheep Company Logo" className="w-24 h-24 md:w-32 md:h-32 opacity-90" />
                    </FadeInSection>

                    <TextReveal>
                        <h1 className="font-['Montserrat'] text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 leading-[0.9] text-center md:text-left">
                            THE<br />
                            SHEEP<br />
                            COMPANY
                        </h1>
                    </TextReveal>

                    <FadeInSection delay={0.6}>
                        <p className="font-sans text-sm md:text-base tracking-[0.2em] text-slate-500 uppercase">
                            Creative Studio & Personal Session
                        </p>
                    </FadeInSection>
                </div>

                {/* Navigation Section */}
                <div className="flex flex-col space-y-6 w-full md:w-auto md:min-w-[300px] pt-8 md:pt-32">
                    <FadeInSection delay={0.8}>
                        <Link to="/atsukorology" className="group block relative overflow-hidden pb-2 border-b border-slate-200 hover:border-slate-900 transition-colors duration-500">
                            <div className="flex justify-between items-end">
                                <h2 className="font-serif text-2xl md:text-3xl text-slate-800 group-hover:text-black transition-colors">
                                    Atsukorology
                                </h2>
                                <span className="font-sans text-xs tracking-widest text-slate-400 group-hover:text-slate-600 transition-colors mb-1">
                                    01
                                </span>
                            </div>
                            <p className="font-sans text-xs text-slate-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                                Astrology & Tarot Session
                            </p>
                        </Link>
                    </FadeInSection>

                    <FadeInSection delay={1.0}>
                        <Link to="/3d-print" className="group block relative overflow-hidden pb-2 border-b border-slate-200 hover:border-slate-900 transition-colors duration-500">
                            <div className="flex justify-between items-end">
                                <h2 className="font-serif text-2xl md:text-3xl text-slate-800 group-hover:text-black transition-colors">
                                    3D Print Works
                                </h2>
                                <span className="font-sans text-xs tracking-widest text-slate-400 group-hover:text-slate-600 transition-colors mb-1">
                                    02
                                </span>
                            </div>
                            <p className="font-sans text-xs text-slate-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                                Original 3D Printed Art
                            </p>
                        </Link>
                    </FadeInSection>
                </div>
            </div>

            <footer className="absolute bottom-8 w-full text-center">
                <FadeInSection delay={1.2}>
                    <p className="text-slate-400 text-[10px] font-sans tracking-[0.3em] uppercase">
                        &copy; {new Date().getFullYear()} The Sheep Company
                    </p>
                </FadeInSection>
            </footer>
        </div>
    );
}

export default HomePage;
