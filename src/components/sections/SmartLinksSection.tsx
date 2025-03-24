
import React from 'react';
import Button from '../ui/Button';
import { Layers, BarChart, Link as LinkIcon, ExternalLink } from 'lucide-react';

const SmartLinksSection: React.FC = () => {
  return (
    <section id="smart-links" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <div className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-sm mb-6">
              <LinkIcon className="h-3.5 w-3.5 mr-2 text-primary" />
              <span>Smart Links</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6">
              One Link for<br />
              <span className="text-gradient bg-gradient-to-r from-primary to-accent">All Platforms</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              Create a single shareable link that directs your fans to your music on their preferred streaming platform. Simplify your promotion strategy and provide a seamless experience for your audience.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="rounded-full p-1.5 bg-primary/10 mr-4 mt-0.5">
                  <Layers className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">All Major Platforms</h4>
                  <p className="text-muted-foreground text-sm">
                    Connect to Spotify, Apple Music, YouTube Music, Amazon Music, Deezer, and more in one link.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="rounded-full p-1.5 bg-primary/10 mr-4 mt-0.5">
                  <ExternalLink className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Automatic Platform Detection</h4>
                  <p className="text-muted-foreground text-sm">
                    Intelligently directs users to their default or previously used music service.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="rounded-full p-1.5 bg-primary/10 mr-4 mt-0.5">
                  <BarChart className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Click Tracking</h4>
                  <p className="text-muted-foreground text-sm">
                    See exactly where your fans are coming from and which platforms they prefer.
                  </p>
                </div>
              </li>
            </ul>
            
            <Button href="/sign-up">
              Create Your Smart Link
            </Button>
          </div>
          
          <div className="order-1 lg:order-2 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-primary/30 to-accent/30 opacity-50 blur-xl"></div>
              <div className="relative bg-card border border-border rounded-3xl overflow-hidden shadow-xl">
                <div className="p-6 border-b border-border">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <LinkIcon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">New Single - "Summer Nights"</h4>
                      <p className="text-sm text-muted-foreground">smartlink.malpinohdistrolink.com/summer</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="aspect-square max-w-[260px] mx-auto bg-muted rounded-xl mb-6 animate-pulse-light"></div>
                  
                  <div className="space-y-3">
                    <button className="w-full py-3 px-4 rounded-lg border border-border bg-secondary text-secondary-foreground flex items-center justify-center hover:bg-secondary/80 transition-colors">
                      <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.36.12-.78-.12-.9-.48-.12-.36.12-.78.48-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.48.66.36 1.021zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.24 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                      </svg>
                      Spotify
                    </button>
                    
                    <button className="w-full py-3 px-4 rounded-lg border border-border bg-secondary text-secondary-foreground flex items-center justify-center hover:bg-secondary/80 transition-colors">
                      <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 5.46 4.45 9.91 9.91 9.91 5.46 0 9.91-4.45 9.91-9.91 0-5.46-4.45-9.91-9.91-9.91zM7.59 17.41c-.39.39-1.02.39-1.41 0s-.39-1.02 0-1.41l5.66-5.66-5.66-5.66c-.39-.39-.39-1.02 0-1.41s1.02-.39 1.41 0l6.36 6.36c.39.39.39 1.02 0 1.41l-6.36 6.37z"/>
                      </svg>
                      Apple Music
                    </button>
                    
                    <div className="border-t border-border pt-3 mt-3">
                      <p className="text-center text-sm text-muted-foreground mb-3">All streaming platforms</p>
                      <div className="flex justify-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center"></div>
                        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center"></div>
                        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center"></div>
                        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-1/3 right-0 w-1/3 h-1/3 bg-gradient-radial from-accent/5 to-transparent -z-10 blur-2xl"></div>
    </section>
  );
};

export default SmartLinksSection;
