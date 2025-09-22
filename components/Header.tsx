import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white/90 backdrop-blur-lg shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-purple-800">
          Açaí que Floresce
        </div>
        <nav className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-gray-600 hover:text-purple-800 font-medium transition-colors">O Projeto</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-purple-800 font-medium transition-colors">Como Funciona</a>
            <a href="#impact" className="text-gray-600 hover:text-purple-800 font-medium transition-colors">Impacto</a>
            <a href="#cta" className="text-gray-600 hover:text-purple-800 font-medium transition-colors">Participe</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;