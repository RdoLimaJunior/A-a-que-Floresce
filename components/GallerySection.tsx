import React from 'react';

const ImageCard: React.FC<{ src: string; alt: string; className?: string }> = ({ src, alt, className = '' }) => (
    <div className={`overflow-hidden rounded-lg shadow-xl group h-full ${className}`}>
        <img 
            src={src} 
            alt={alt} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
    </div>
);

const GallerySection: React.FC = () => {
    return (
        <section id="gallery" className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-bold text-purple-800">Nossos Expositores</h2>
                    <p className="text-lg text-gray-600 mt-4">Veja os esboços de como nossas mudas serão apresentadas na loja.</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto" style={{ gridAutoRows: 'minmax(250px, auto)' }}>
                    <div className="col-span-2 md:col-span-1 md:row-span-2 fade-in-up">
                        <ImageCard src="https://picsum.photos/seed/expositor1/800/1200" alt="Esboço do expositor de mudas 1" />
                    </div>
                    <div className="col-span-1 fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <ImageCard src="https://picsum.photos/seed/expositor2/600/600" alt="Esboço do expositor de mudas 2" />
                    </div>
                    <div className="col-span-1 fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <ImageCard src="https://picsum.photos/seed/expositor3/600/600" alt="Esboço do expositor de mudas 3" />
                    </div>
                    <div className="col-span-2 md:col-span-1 fade-in-up" style={{ animationDelay: '0.4s' }}>
                       <ImageCard src="https://picsum.photos/seed/expositor4/600/600" alt="Detalhe dos vasos reciclados" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GallerySection;