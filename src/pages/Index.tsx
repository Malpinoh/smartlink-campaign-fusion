
import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import SmartLinksSection from '../components/sections/SmartLinksSection';
import PreSaveSection from '../components/sections/PreSaveSection';
import PricingSection from '../components/sections/PricingSection';
import Footer from '../components/sections/Footer';

const Index = () => {
  // Smooth scroll functionality
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (!anchor) return;
      
      const href = anchor.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      
      e.preventDefault();
      
      const element = document.querySelector(href);
      if (!element) return;
      
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth'
      });
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Features />
        <SmartLinksSection />
        <PreSaveSection />
        <PricingSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
