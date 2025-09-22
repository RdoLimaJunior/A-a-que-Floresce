import React, { useState, useEffect, useCallback } from 'react';
import { RecycleIcon, PlantIcon, LeafIcon, BasketIcon, HeartIcon, ChevronLeftIcon, ChevronRightIcon } from './icons';

interface Step {
  icon: React.ReactElement;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: <RecycleIcon className="text-5xl text-purple-600" />,
    title: '1. Coleta das Embalagens',
    description: 'Clientes trazem as embalagens limpas para nossos pontos de coleta na loja.',
  },
  {
    icon: <PlantIcon className="text-5xl text-purple-600" />,
    title: '2. Transformação em Vasos',
    description: 'As embalagens coletadas são higienizadas e transformadas em vasos criativos.',
  },
  {
    icon: <LeafIcon className="text-5xl text-purple-600" />,
    title: '3. Cultivo de Mudas',
    description: 'Plantamos mudas de espécies nativas em um espaço dedicado, cuidando do nosso ecossistema.',
  },
  {
    icon: <BasketIcon className="text-5xl text-purple-600" />,
    title: '4. Venda das Mudas',
    description: 'As mudas são vendidas na loja a preços acessíveis, incentivando o verde em cada lar.',
  },
  {
    icon: <HeartIcon className="text-5xl text-purple-600" />,
    title: '5. Doação de Cestas Básicas',
    description: '100% do valor arrecadado é usado para comprar cestas básicas e apoiar famílias da região.',
  },
];

const HowItWorksSection: React.FC = () => {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = useCallback(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
    }, []);

    const handlePrev = useCallback(() => {
        setActiveStep((prev) => (prev - 1 + steps.length) % steps.length);
    }, []);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') {
                handleNext();
            } else if (e.key === 'ArrowLeft') {
                handlePrev();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleNext, handlePrev]);

  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-800">Como Funciona?</h2>
          <p className="text-lg text-gray-600 mt-4">Um ciclo de bem, do copo à comunidade.</p>
        </div>

        <div 
            className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8 md:p-12 relative fade-in-up"
            role="region"
            aria-roledescription="carousel"
            aria-label="Como o projeto funciona"
        >
            <div className="sr-only" aria-live="polite" aria-atomic="true">
                {`Etapa ${activeStep + 1} de ${steps.length}: ${steps[activeStep].title}`}
            </div>
            <button 
                onClick={handlePrev} 
                className="absolute top-1/2 left-2 md:left-4 -translate-y-1/2 z-10 bg-gray-200 text-gray-700 rounded-full w-12 h-12 flex items-center justify-center hover:bg-purple-100 hover:text-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                aria-label="Etapa anterior"
                aria-controls="carousel-track"
            >
                <ChevronLeftIcon className="w-6 h-6" />
            </button>
            
            <div className="overflow-hidden">
                <div 
                    id="carousel-track"
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${activeStep * 100}%)` }}
                >
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="w-full flex-shrink-0"
                            role="group"
                            aria-roledescription="slide"
                            aria-label={`Etapa ${index + 1} de ${steps.length}`}
                            aria-hidden={activeStep !== index}
                        >
                            <div className={`flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:min-h-[150px] ${activeStep === index ? 'animate-slide-in-right' : ''}`}>
                                <div className="flex-shrink-0 w-20 text-center">
                                    {step.icon}
                                </div>
                                <div className="text-center md:text-left">
                                    <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{step.title}</h3>
                                    <p className="text-gray-600 max-w-sm">{step.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button 
                onClick={handleNext} 
                className="absolute top-1/2 right-2 md:right-4 -translate-y-1/2 z-10 bg-gray-200 text-gray-700 rounded-full w-12 h-12 flex items-center justify-center hover:bg-purple-100 hover:text-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                aria-label="Próxima etapa"
                aria-controls="carousel-track"
            >
                <ChevronRightIcon className="w-6 h-6" />
            </button>
        </div>

        <div className="flex justify-center gap-3 mt-8 fade-in-up" role="tablist" aria-label="Navegação das etapas">
            {steps.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${activeStep === index ? 'bg-purple-600 w-10' : 'bg-gray-300 hover:bg-gray-400'}`}
                    role="tab"
                    aria-selected={activeStep === index}
                    aria-controls="carousel-track"
                    aria-label={`Ir para a etapa ${index + 1}`}
                />
            ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;