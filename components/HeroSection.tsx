import React from 'react';
import { ChevronDownIcon } from './icons';

const HeroSection: React.FC = () => {
  return (
    <section 
      className="relative h-screen flex items-center justify-center text-white text-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1590318563412-20f1a63e25b5?q=80&w=1974&auto=format&fit=crop')" }}
    >
      <div className="absolute inset-0 bg-purple-900/70"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="fade-in-up max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight mb-4">
              PROJETO AÇAÍ QUE FLORESCE
            </h1>
            <p className="text-xl md:text-2xl font-light text-yellow-300">
              Transformando embalagens em solidariedade.
            </p>
            <a 
              href="#about"
              className="mt-8 inline-flex items-center gap-2 bg-yellow-400 text-purple-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-300 transition-all duration-300 shadow-lg transform hover:scale-105 animate-pulse-cta"
            >
              <span>Conheça o Projeto</span>
              <ChevronDownIcon className="w-5 h-5" />
            </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;