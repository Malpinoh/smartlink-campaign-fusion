
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CircleUser, Music, Link, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DashboardHeader: React.FC = () => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold mb-6">Welcome back, Artist!</h1>
      
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <CircleUser className="h-8 w-8 text-primary" />
            </div>
            
            <div className="flex-1">
              <h2 className="text-xl font-bold mb-1">Your Account</h2>
              <p className="text-muted-foreground">Free Plan · Upgrade for more features</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full md:w-auto">
              <div className="flex flex-col items-center p-3 bg-primary/5 rounded-lg">
                <Music className="h-5 w-5 text-primary mb-1" />
                <span className="text-xl font-bold">3</span>
                <span className="text-xs text-muted-foreground">Smart Links</span>
              </div>
              
              <div className="flex flex-col items-center p-3 bg-primary/5 rounded-lg">
                <Calendar className="h-5 w-5 text-primary mb-1" />
                <span className="text-xl font-bold">1</span>
                <span className="text-xs text-muted-foreground">Pre-Saves</span>
              </div>
              
              <div className="flex flex-col items-center p-3 bg-primary/5 rounded-lg">
                <Link className="h-5 w-5 text-primary mb-1" />
                <span className="text-xl font-bold">256</span>
                <span className="text-xs text-muted-foreground">Total Clicks</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardHeader;
