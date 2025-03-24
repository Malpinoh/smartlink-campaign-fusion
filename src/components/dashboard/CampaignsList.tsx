
import React from 'react';
import { MoreHorizontal, ExternalLink, BarChart2 } from 'lucide-react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Mock data for campaigns - this would come from an API in a real app
const mockCampaigns = [
  {
    id: 1,
    name: 'Summer EP Release',
    type: 'Smart Link',
    clicks: 542,
    views: 1203,
    status: 'Active',
    created: '2023-06-15'
  },
  {
    id: 2,
    name: 'New Single Pre-Save',
    type: 'Pre-Save',
    clicks: 325,
    views: 780,
    status: 'Active',
    created: '2023-07-02'
  },
  {
    id: 3,
    name: 'Remix EP',
    type: 'Smart Link',
    clicks: 128,
    views: 356,
    status: 'Draft',
    created: '2023-07-20'
  },
  {
    id: 4,
    name: 'Collaboration Single',
    type: 'Pre-Save',
    clicks: 252,
    views: 602,
    status: 'Ended',
    created: '2023-05-10'
  }
];

const CampaignsList: React.FC = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Recent Campaigns</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead className="text-right">Clicks</TableHead>
              <TableHead className="text-right">Views</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockCampaigns.map((campaign) => (
              <TableRow key={campaign.id}>
                <TableCell className="font-medium">{campaign.name}</TableCell>
                <TableCell>{campaign.type}</TableCell>
                <TableCell className="text-right">{campaign.clicks}</TableCell>
                <TableCell className="text-right">{campaign.views}</TableCell>
                <TableCell>
                  <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    campaign.status === 'Active' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : campaign.status === 'Draft'
                      ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                      : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'
                  }`}>
                    {campaign.status}
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="sm" asChild>
                      <a href="#" aria-label="View statistics">
                        <BarChart2 className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href="#" aria-label="View campaign">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default CampaignsList;
