
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/sections/Footer';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import CampaignsList from '../components/dashboard/CampaignsList';
import AnalyticsSummary from '../components/dashboard/AnalyticsSummary';
import PaymentInstructions from '../components/dashboard/PaymentInstructions';
import { Button } from '@/components/ui/button';
import { PlusCircle, WhatsApp } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container px-4 md:px-6">
          <DashboardHeader />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="md:col-span-2 space-y-6">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-bold">Your Campaigns</h2>
                <div className="flex gap-2">
                  <Button variant="outline" asChild>
                    <Link to="/create-smart-link">
                      <PlusCircle className="mr-2 h-4 w-4" />
                      New Smart Link
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/create-pre-save">
                      <PlusCircle className="mr-2 h-4 w-4" />
                      New Pre-Save
                    </Link>
                  </Button>
                </div>
              </div>
              
              <CampaignsList />
              <AnalyticsSummary />
            </div>
            
            <div className="space-y-6">
              <PaymentInstructions />
              
              <div className="p-6 bg-primary/5 rounded-lg border">
                <h3 className="text-lg font-medium mb-3">Need Help?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Have questions or need assistance with your campaigns? Our team is ready to help!
                </p>
                <Button className="w-full gap-2 bg-green-600 hover:bg-green-700" asChild>
                  <a 
                    href="https://wa.me/2348168940582" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <WhatsApp className="h-4 w-4" />
                    Contact Support
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
