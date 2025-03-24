
import React from 'react';
import FeatureCard from '../ui/FeatureCard';
import { Link, Zap, BarChart3, Music, Share2, Calendar } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Link className="h-6 w-6" />,
      title: "Smart Links",
      description: "Create a single link that directs fans to your music across all streaming platforms, simplifying your promotion strategy."
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Pre-Save Campaigns",
      description: "Build anticipation for your releases by allowing fans to save your music before it drops, boosting day-one streams."
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Detailed Analytics",
      description: "Gain valuable insights into your audience with comprehensive data on clicks, saves, and streams across platforms."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fast Setup",
      description: "Create and customize your campaigns in minutes with our intuitive, user-friendly interface."
    },
    {
      icon: <Share2 className="h-6 w-6" />,
      title: "Social Integration",
      description: "Seamlessly share your links across social media platforms to maximize your reach and engagement."
    },
    {
      icon: <Music className="h-6 w-6" />,
      title: "Artist Customization",
      description: "Personalize your landing pages with your branding to create a consistent experience for your fans."
    }
  ];

  return (
    <section id="features" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4 animate-fade-in">
            Everything You Need to Succeed
          </h2>
          <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: '100ms' }}>
            Our platform provides the tools for artists to connect with fans and distribute their music effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
              className="animate-fade-in"
            />
          ))}
        </div>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent -z-10"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-accent/5 to-transparent -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-primary/5 to-transparent -z-10"></div>
    </section>
  );
};

export default Features;
