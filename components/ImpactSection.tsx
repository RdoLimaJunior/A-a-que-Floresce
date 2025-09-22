import React from 'react';
import { RecycleIcon, CommunityIcon, LeafIcon, HeartIcon } from './icons';

interface Impact {
    icon: React.ReactElement;
    title: string;
    description: string;
}

const impacts: Impact[] = [
    {
        icon: <RecycleIcon className="text-4xl text-purple-600"/>,
        title: 'Ambiental',
        description: 'Redução do volume de resíduos plásticos e incentivo à cultura da reciclagem.'
    },
    {
        icon: <CommunityIcon className="text-4xl text-purple-600"/>,
        title: 'Social',
        description: 'Conscientização dos clientes e da comunidade sobre sustentabilidade e consumo responsável.'
    },
    {
        icon: <HeartIcon className="text-4xl text-purple-600"/>,
        title: 'Comunitário',
        description: 'Ajuda direta a instituições de caridade e famílias vulneráveis com a doação de cestas básicas.'
    },
    {
        icon: <LeafIcon className="text-4xl text-purple-600"/>,
        title: 'Ecológico',
        description: 'Preservação da biodiversidade local através do cultivo e distribuição de plantas nativas.'
    }
];

const ImpactCard: React.FC<{ impact: Impact }> = ({ impact }) => (
    <div className="bg-transparent p-6 rounded-lg h-full transition-all duration-300 border border-transparent hover:border-purple-100 hover:bg-purple-50">
        <div className="mb-4">
           {impact.icon}
        </div>
        <h3 className="text-xl font-bold text-purple-800 mb-2">{impact.title}</h3>
        <p className="text-gray-600">{impact.description}</p>
    </div>
);

const ImpactSection: React.FC = () => {
    return (
        <section id="impact" className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-purple-800">Resultados Esperados</h2>
                    <p className="text-lg text-gray-600 mt-4">Um pequeno gesto que gera grandes transformações.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-10 max-w-4xl mx-auto">
                    {impacts.map((impact, index) => (
                        <div className="fade-in-up" style={{ animationDelay: `${index * 0.1}s` }} key={index}>
                           <ImpactCard impact={impact} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImpactSection;