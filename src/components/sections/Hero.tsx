
import React, { useEffect, useRef } from 'react';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      heroRef.current.style.setProperty('--x', `${x}`);
      heroRef.current.style.setProperty('--y', `${y}`);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-32"
      style={{ 
        '--x': '0.5', 
        '--y': '0.5'
      } as React.CSSProperties}
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-radial from-accent/10 via-transparent to-transparent"
          style={{ 
            transformOrigin: 'calc(var(--x) * 100%) calc(var(--y) * 100%)',
            opacity: 0.8,
            transform: 'scale(1.5)',
          }}
        ></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,rgba(120,119,198,0.1),transparent)]"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      </div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div 
            className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-sm mb-8 animate-fade-in"
            style={{ animationDelay: '200ms' }}
          >
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            <span>Revolutionizing music distribution</span>
          </div>
          
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl font-display font-bold tracking-tight mb-6 animate-fade-in"
            style={{ animationDelay: '300ms' }}
          >
            Amplify Your Music With
            <span className="text-gradient bg-gradient-to-r from-primary to-accent block mt-2">
              Smart Distribution
            </span>
          </h1>
          
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 animate-fade-in"
            style={{ animationDelay: '400ms' }}
          >
            Create smart links and pre-save campaigns that connect your music to fans everywhere. 
            One link to rule all platforms, powerful insights, and seamless distribution.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in"
            style={{ animationDelay: '500ms' }}
          >
            <Button href="/sign-up" size="lg" className="group">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button href="#features" variant="secondary" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      <div 
        className="mt-16 md:mt-24 max-w-5xl mx-auto px-4 md:px-6 animate-fade-in"
        style={{ animationDelay: '600ms' }}
      >
        <div className="w-full aspect-[16/9] rounded-xl overflow-hidden border border-border bg-card/50 shadow-xl flex items-center justify-center">
          <div className="text-2xl font-medium text-muted-foreground">Platform Dashboard Preview</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
