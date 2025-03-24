
import React from 'react';
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', fullWidth, children, href, ...props }, ref) => {
    const baseStyles = "relative inline-flex items-center justify-center rounded-md font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background";
    
    const variants = {
      primary: "bg-primary text-primary-foreground shadow hover:bg-primary/90 focus:ring-primary/70",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 focus:ring-secondary/70",
      ghost: "bg-transparent hover:bg-muted focus:ring-primary/40",
      link: "bg-transparent underline-offset-4 hover:underline focus:ring-primary/40 p-0 h-auto"
    };
    
    const sizes = {
      sm: "text-xs px-3 py-1.5 h-8",
      md: "text-sm px-4 py-2 h-10",
      lg: "text-base px-6 py-3 h-12"
    };
    
    const widthClass = fullWidth ? "w-full" : "";

    const classes = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      widthClass,
      className
    );

    if (href) {
      return (
        <a 
          href={href} 
          className={classes}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        className={classes}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
