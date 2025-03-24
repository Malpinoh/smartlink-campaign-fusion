
import React from 'react';
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';
import { Bell, Music, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  React.useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      
      if (targetDate > now) {
        setTimeLeft({
          days: differenceInDays(targetDate, now),
          hours: differenceInHours(targetDate, now) % 24,
          minutes: differenceInMinutes(targetDate, now) % 60,
          seconds: differenceInSeconds(targetDate, now) % 60
        });
      } else {
        // Release date has passed
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeBlocks = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <div className="flex justify-center space-x-4 my-6">
      {timeBlocks.map((block, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="bg-primary/10 text-primary font-bold text-xl w-14 h-14 rounded-lg flex items-center justify-center">
            {block.value}
          </div>
          <span className="text-xs mt-1 text-muted-foreground">{block.label}</span>
        </div>
      ))}
    </div>
  );
};

interface PreSaveCampaignPreviewProps {
  data: {
    releaseName?: string;
    artistName?: string;
    releaseDate?: Date;
    spotifyUrl?: string;
    appleMusicUrl?: string;
    coverImageUrl?: string;
    description?: string;
  } | null;
}

const PreSaveCampaignPreview: React.FC<PreSaveCampaignPreviewProps> = ({ data }) => {
  if (!data || !data.releaseDate) {
    return (
      <Card className="p-6 border border-dashed flex items-center justify-center h-[580px] bg-muted/50">
        <div className="text-center text-muted-foreground">
          <Music className="mx-auto h-12 w-12 mb-4 opacity-20" />
          <p>Campaign preview will appear here</p>
          <p className="text-sm">Fill out the form to see a preview</p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden border shadow-lg">
      <div className="p-6 border-b border-border bg-card">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
            <Music className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h4 className="font-medium">Pre-Save Campaign</h4>
            <p className="text-sm text-muted-foreground">
              Releasing: {data.releaseDate.toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
      
      <div className="p-6 space-y-4">
        <div className="aspect-square max-w-[260px] mx-auto bg-muted rounded-xl mb-6 overflow-hidden">
          {data.coverImageUrl ? (
            <img 
              src={data.coverImageUrl} 
              alt={`${data.releaseName} cover`}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = 'https://placehold.co/260x260/e2e8f0/1e293b?text=Cover&font=montserrat';
              }}
            />
          ) : (
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <Music className="h-16 w-16 text-muted-foreground/30" />
            </div>
          )}
        </div>
        
        <div className="text-center mb-3">
          <h3 className="text-xl font-medium mb-1">{data.releaseName}</h3>
          <p className="text-muted-foreground">{data.artistName}</p>
          {data.description && (
            <p className="text-sm mt-2 text-muted-foreground">
              {data.description}
            </p>
          )}
        </div>
        
        <div>
          <p className="text-center font-medium mb-2">Releasing In:</p>
          <CountdownTimer targetDate={data.releaseDate} />
        </div>
        
        <div className="space-y-3">
          {data.spotifyUrl && (
            <Button 
              variant="outline" 
              className="w-full flex items-center justify-center gap-2 bg-[#1DB954] text-white hover:bg-[#1DB954]/90 border-none"
            >
              <Bell className="w-5 h-5" />
              Pre-Save on Spotify
            </Button>
          )}
          
          {data.appleMusicUrl && (
            <Button 
              variant="outline" 
              className="w-full flex items-center justify-center gap-2 bg-black text-white hover:bg-black/90 border-none"
            >
              <Bell className="w-5 h-5" />
              Pre-Add on Apple Music
            </Button>
          )}
        </div>
        
        <div className="flex items-center justify-center pt-4">
          <div className="flex -space-x-2">
            <div className="w-7 h-7 rounded-full border-2 border-card bg-muted"></div>
            <div className="w-7 h-7 rounded-full border-2 border-card bg-muted"></div>
            <div className="w-7 h-7 rounded-full border-2 border-card bg-muted"></div>
          </div>
          <p className="text-xs text-muted-foreground ml-3">0 people pre-saved</p>
        </div>
        
        <Button 
          variant="outline"
          className="w-full flex items-center justify-center gap-2 mt-2"
          disabled
        >
          <Share2 className="w-4 h-4" />
          Share Campaign
        </Button>
      </div>
    </Card>
  );
};

export default PreSaveCampaignPreview;
