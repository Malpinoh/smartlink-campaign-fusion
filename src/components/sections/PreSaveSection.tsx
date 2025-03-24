
import React from 'react';
import Button from '../ui/Button';
import { Calendar, Bell, Users, Share2 } from 'lucide-react';

const PreSaveSection: React.FC = () => {
  return (
    <section id="pre-save" className="py-20 md:py-32 relative overflow-hidden bg-secondary/30">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-primary/30 to-accent/30 opacity-50 blur-xl"></div>
              <div className="relative bg-card border border-border rounded-3xl overflow-hidden shadow-xl">
                <div className="p-6 border-b border-border">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Pre-Save Campaign</h4>
                      <p className="text-sm text-muted-foreground">Releasing: May 15, 2023</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="aspect-square max-w-[260px] mx-auto bg-muted rounded-xl mb-6 animate-pulse-light"></div>
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-medium mb-2">New Album - "Midnight Sessions"</h3>
                    <p className="text-muted-foreground">Be the first to listen when it drops</p>
                  </div>
                  
                  <button className="w-full py-3 px-4 rounded-lg bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors">
                    <Bell className="w-5 h-5 mr-3" />
                    Pre-Save Now
                  </button>
                  
                  <div className="flex items-center justify-center pt-4">
                    <div className="flex -space-x-3">
                      <div className="w-8 h-8 rounded-full border-2 border-card bg-muted"></div>
                      <div className="w-8 h-8 rounded-full border-2 border-card bg-muted"></div>
                      <div className="w-8 h-8 rounded-full border-2 border-card bg-muted"></div>
                    </div>
                    <p className="text-sm text-muted-foreground ml-3">1,245 people pre-saved</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <div className="inline-flex items-center rounded-full border border-border bg-background px-3 py-1 text-sm mb-6">
              <Calendar className="h-3.5 w-3.5 mr-2 text-primary" />
              <span>Pre-Save Campaigns</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-6">
              Build Anticipation<br />
              <span className="text-gradient bg-gradient-to-r from-primary to-accent">Boost Day-One Streams</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              Let fans save your music before it's released. Pre-save campaigns create excitement and ensure your new tracks appear in their libraries the moment they drop.
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <div className="rounded-full p-1.5 bg-primary/10 mr-4 mt-0.5">
                  <Bell className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Automatic Notifications</h4>
                  <p className="text-muted-foreground text-sm">
                    Fans receive notifications when your music is available, driving immediate streams.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="rounded-full p-1.5 bg-primary/10 mr-4 mt-0.5">
                  <Users className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Fan Data Collection</h4>
                  <p className="text-muted-foreground text-sm">
                    Capture email addresses and platform preferences for future marketing.
                  </p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="rounded-full p-1.5 bg-primary/10 mr-4 mt-0.5">
                  <Share2 className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Shareable Campaigns</h4>
                  <p className="text-muted-foreground text-sm">
                    Optimized for social sharing with customizable preview cards and messaging.
                  </p>
                </div>
              </li>
            </ul>
            
            <Button href="/sign-up">
              Create Pre-Save Campaign
            </Button>
          </div>
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-1/3 left-0 w-1/3 h-1/3 bg-gradient-radial from-primary/5 to-transparent -z-10 blur-2xl"></div>
    </section>
  );
};

export default PreSaveSection;
