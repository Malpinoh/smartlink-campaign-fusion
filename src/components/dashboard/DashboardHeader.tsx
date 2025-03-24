
import React from 'react';
import { Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const DashboardHeader: React.FC = () => {
  // This would normally be fetched from an API
  const userStats = {
    totalLinks: 5,
    totalClicks: 1247,
    activePreSaves: 2
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Manage your campaigns and track performance</p>
        </div>
        <Button variant="outline" size="icon">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Notifications</span>
        </Button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="text-sm font-medium text-muted-foreground">Total Smart Links</div>
            <div className="text-3xl font-bold mt-1">{userStats.totalLinks}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-sm font-medium text-muted-foreground">Total Clicks</div>
            <div className="text-3xl font-bold mt-1">{userStats.totalClicks}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-sm font-medium text-muted-foreground">Active Pre-Saves</div>
            <div className="text-3xl font-bold mt-1">{userStats.activePreSaves}</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardHeader;
