
import React from 'react';
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  index?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description, 
  className,
  index = 0
}) => {
  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:shadow-md group",
        className
      )}
      style={{ 
        animationDelay: `${index * 100}ms`,
        animationFillMode: 'backwards'
      }}
    >
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 transition-opacity group-hover:opacity-100" />
      
      <div className="relative">
        {icon && (
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
            {icon}
          </div>
        )}
        
        <h3 className="mb-2 text-xl font-semibold tracking-tight">{title}</h3>
        
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
