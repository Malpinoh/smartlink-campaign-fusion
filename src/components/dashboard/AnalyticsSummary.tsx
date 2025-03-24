
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';

// Mock data - this would come from an API in a real app
const mockChartData = [
  { name: 'Mon', clicks: 42, views: 123 },
  { name: 'Tue', clicks: 63, views: 145 },
  { name: 'Wed', clicks: 52, views: 132 },
  { name: 'Thu', clicks: 78, views: 180 },
  { name: 'Fri', clicks: 91, views: 203 },
  { name: 'Sat', clicks: 105, views: 252 },
  { name: 'Sun', clicks: 85, views: 221 }
];

const chartConfig = {
  clicks: {
    label: "Clicks",
    color: "hsl(var(--primary))"
  },
  views: {
    label: "Views",
    color: "hsl(var(--muted-foreground) / 0.5)"
  }
};

const AnalyticsSummary: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Performance</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ChartContainer config={chartConfig}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockChartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <XAxis 
                  dataKey="name" 
                  stroke="hsl(var(--muted-foreground))" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false} 
                />
                <YAxis 
                  stroke="hsl(var(--muted-foreground))" 
                  fontSize={12} 
                  tickLine={false} 
                  axisLine={false} 
                  tickFormatter={(value) => `${value}`}
                />
                <Bar 
                  dataKey="views" 
                  fill="hsl(var(--muted-foreground) / 0.5)" 
                  radius={[4, 4, 0, 0]} 
                  barSize={16} 
                />
                <Bar 
                  dataKey="clicks" 
                  fill="hsl(var(--primary))" 
                  radius={[4, 4, 0, 0]} 
                  barSize={16} 
                />
                <ChartTooltip content={<ChartTooltipContent />} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default AnalyticsSummary;
