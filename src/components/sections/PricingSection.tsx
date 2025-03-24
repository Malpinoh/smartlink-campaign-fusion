
import React from 'react';
import Button from '../ui/Button';
import { Check, CreditCard } from 'lucide-react';

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Access powerful tools with our flexible payment options
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Basic Plan */}
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm animate-slide-up" style={{ animationDelay: '100ms' }}>
            <h3 className="text-xl font-semibold mb-2">Basic</h3>
            <p className="text-muted-foreground mb-6">Essential features to get started</p>
            
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-bold">$9</span>
              <span className="text-muted-foreground ml-2">/month</span>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <Check className="mr-3 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>10 Smart Links</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-3 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>5 Pre-Save Campaigns</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-3 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Basic Analytics</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-3 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Email Support</span>
              </li>
            </ul>
            
            <Button href="/sign-up" variant="secondary" fullWidth>
              Get Started
            </Button>
          </div>
          
          {/* Pro Plan */}
          <div className="rounded-2xl border-2 border-primary bg-card p-8 shadow-md relative animate-slide-up" style={{ animationDelay: '200ms' }}>
            <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/2">
              <span className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full">
                Popular
              </span>
            </div>
            
            <h3 className="text-xl font-semibold mb-2">Pro</h3>
            <p className="text-muted-foreground mb-6">Advanced features for growing artists</p>
            
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-bold">$19</span>
              <span className="text-muted-foreground ml-2">/month</span>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <Check className="mr-3 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Unlimited Smart Links</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-3 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>20 Pre-Save Campaigns</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-3 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Advanced Analytics</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-3 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Priority Support</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-3 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Custom Landing Pages</span>
              </li>
            </ul>
            
            <Button href="/sign-up" fullWidth>
              Get Started
            </Button>
          </div>
          
          {/* Enterprise Plan */}
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm animate-slide-up" style={{ animationDelay: '300ms' }}>
            <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
            <p className="text-muted-foreground mb-6">Maximum power for labels & agencies</p>
            
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-bold">$49</span>
              <span className="text-muted-foreground ml-2">/month</span>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start">
                <Check className="mr-3 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Unlimited Everything</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-3 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Multi-Artist Management</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-3 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>API Access</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-3 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Dedicated Account Manager</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-3 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>White-Label Solution</span>
              </li>
            </ul>
            
            <Button href="/sign-up" variant="secondary" fullWidth>
              Contact Sales
            </Button>
          </div>
        </div>
        
        {/* Manual Payment Section */}
        <div className="mt-16 max-w-3xl mx-auto rounded-2xl border border-border bg-card/50 p-8 animate-fade-in" style={{ animationDelay: '400ms' }}>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-shrink-0 p-4 rounded-full bg-primary/10">
              <CreditCard className="h-8 w-8 text-primary" />
            </div>
            
            <div className="flex-grow">
              <h3 className="text-xl font-semibold mb-2">Manual Payment via OPay</h3>
              <p className="text-muted-foreground mb-4">
                For those who prefer alternative payment methods, we offer manual payments through OPay.
              </p>
              <ol className="list-decimal ml-5 space-y-2 text-sm">
                <li>Log in to your OPay account</li>
                <li>Select "Send Money" and enter our merchant details</li>
                <li>Complete the transaction and forward the payment receipt to <span className="text-primary">payments@malpinohdistrolink.com</span></li>
                <li>Your account will be activated within 24 hours after verification</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
