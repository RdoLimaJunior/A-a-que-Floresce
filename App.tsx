import React, { useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import HowItWorksSection from './components/HowItWorksSection';
import ImpactSection from './components/ImpactSection';
import GallerySection from './components/GallerySection';
import CallToActionSection from './components/CallToActionSection';
import FoundersSection from './components/FoundersSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    const targets = document.querySelectorAll('.fade-in-up');
    targets.forEach(target => observer.observe(target));

    return () => {
      targets.forEach(target => observer.unobserve(target));
    };
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800 antialiased">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <HowItWorksSection />
        <ImpactSection />
        <GallerySection />
        <CallToActionSection />
        <FoundersSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;