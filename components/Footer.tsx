import React from 'react';
import { InstagramIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-purple-900 text-white">
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left mb-12">
            <div>
                <h3 className="text-xl font-bold mb-4">Açaí que Floresce</h3>
                <p className="text-purple-200 text-sm">Plantando um futuro mais verde e justo em Redenção - CE.</p>
            </div>
            <div>
                <h3 className="text-xl font-bold mb-4">Navegue</h3>
                <ul className="space-y-2">
                    <li><a href="#about" className="text-purple-200 hover:text-white transition-colors">O Projeto</a></li>
                    <li><a href="#how-it-works" className="text-purple-200 hover:text-white transition-colors">Como Funciona</a></li>
                    <li><a href="#impact" className="text-purple-200 hover:text-white transition-colors">Impacto</a></li>
                    <li><a href="#gallery" className="text-purple-200 hover:text-white transition-colors">Galeria</a></li>
                </ul>
            </div>
            <div>
                <h3 className="text-xl font-bold mb-4">Siga-nos</h3>
                <a 
                    href="https://www.instagram.com/acaiarretado/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-purple-200 hover:text-white transition-colors"
                >
                    <InstagramIcon className="text-2xl" />
                    <span>@acaiarretado</span>
                </a>
            </div>
        </div>
        <div className="border-t border-purple-800 mt-8 pt-6 text-center text-sm text-purple-300">
          <p>© {new Date().getFullYear()} Açaí Arretado. Todos os direitos reservados.</p>
          <p className="mt-1">Uma iniciativa de Sara Maria da Silva Pereira & Tayan Costa Viana.</p>
          <div className="mt-4">
            <a href="/admin" className="text-xs text-purple-400 hover:text-white transition-colors" aria-label="Acesso à área administrativa">
                Admin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;