
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-background/70 backdrop-blur-lg shadow-sm border-b border-border/50' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <span className="text-xl font-display font-semibold tracking-tight">
              MALPINOHDISTROLINK
            </span>
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium link-underline">Features</a>
            <a href="#smart-links" className="text-sm font-medium link-underline">Smart Links</a>
            <a href="#pre-save" className="text-sm font-medium link-underline">Pre-Save</a>
            <a href="#pricing" className="text-sm font-medium link-underline">Pricing</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button href="/sign-up" size="md" variant="primary">
              Get Started
            </Button>
          </div>

          <button 
            className="md:hidden" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-background pt-20 px-4 animate-fade-in">
          <nav className="flex flex-col space-y-6 py-8">
            <a 
              href="#features" 
              className="text-lg font-medium" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#smart-links" 
              className="text-lg font-medium" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Smart Links
            </a>
            <a 
              href="#pre-save" 
              className="text-lg font-medium" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pre-Save
            </a>
            <a 
              href="#pricing" 
              className="text-lg font-medium" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <div className="pt-6">
              <Button href="/sign-up" size="lg" variant="primary" fullWidth>
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
