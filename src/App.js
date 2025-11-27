import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import '@fontsource/playfair-display/400.css';
import '@fontsource/playfair-display/700.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';

import { ThemeProvider } from './lib/ThemeContext';
import SEO from './components/SEO';
import Header from './components/Header';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import OffersSection from './components/OffersSection';
import GallerySection from './components/GallerySection';
import ReviewsSection from './components/ReviewsSection';
import TeamSection from './components/TeamSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MobileStickyCTA from './components/MobileStickyCTA';

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <SEO />
        <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white transition-colors duration-300">
          <Header />
          <main>
            <Hero />
            <ServicesSection />
            <OffersSection />
            <GallerySection />
            <ReviewsSection />
            <TeamSection />
            <ContactSection />
          </main>
          <Footer />
          <MobileStickyCTA />
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
