import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-800">Plantando um Futuro Mais Verde e Justo</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">Nossa resposta para o desafio do descarte de embalagens: uma solução sustentável que floresce em ajuda para nossa comunidade.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
                <img 
                    src="https://picsum.photos/seed/plants/800/600" 
                    alt="Mudas de plantas em vasos reciclados" 
                    className="rounded-lg shadow-2xl w-full h-auto object-cover"
                />
            </div>
            <div className="fade-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="mb-8">
                    <h3 className="text-2xl font-bold text-yellow-600 mb-3">O Problema</h3>
                    <p className="text-gray-700 leading-relaxed">
                        O grande consumo de açaí gera um volume significativo de resíduos plásticos. Em nossa loja, o descarte de embalagens como baldes de calda pode chegar a <span className="font-bold text-purple-800">288 por ano</span>, um impacto ambiental que decidimos enfrentar.
                    </p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-purple-800 mb-3">Nossa Solução</h3>
                    <p className="text-gray-700 leading-relaxed">
                       O projeto "Açaí que Floresce" recicla essas embalagens, transformando-as em vasos para mudas de plantas. A venda dessas mudas financia a compra de cestas básicas para instituições de caridade locais, unindo sustentabilidade e ação social.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;