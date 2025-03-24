
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/sections/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Copy, Plus, Trash2, Music, Link as LinkIcon, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const PLATFORM_OPTIONS = [
  { name: 'Spotify', placeholder: 'https://open.spotify.com/track/...' },
  { name: 'Apple Music', placeholder: 'https://music.apple.com/...' },
  { name: 'YouTube Music', placeholder: 'https://music.youtube.com/...' },
  { name: 'Amazon Music', placeholder: 'https://music.amazon.com/...' },
  { name: 'Deezer', placeholder: 'https://www.deezer.com/...' },
  { name: 'Tidal', placeholder: 'https://tidal.com/...' },
  { name: 'SoundCloud', placeholder: 'https://soundcloud.com/...' },
  { name: 'Audiomack', placeholder: 'https://audiomack.com/...' }
];

const CreateSmartLink: React.FC = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [customUrl, setCustomUrl] = useState('');
  const [platforms, setPlatforms] = useState([
    { platform: 'Spotify', url: '' },
    { platform: 'Apple Music', url: '' }
  ]);
  
  const baseUrl = 'smartlink.malpinohdistrolink.com/';
  
  const handleAddPlatform = () => {
    // Find a platform not already in the list
    const unusedPlatforms = PLATFORM_OPTIONS.filter(
      option => !platforms.some(p => p.platform === option.name)
    );
    
    if (unusedPlatforms.length > 0) {
      setPlatforms([...platforms, { platform: unusedPlatforms[0].name, url: '' }]);
    } else {
      toast({
        title: "All platforms added",
        description: "You've added all available platforms",
        variant: "destructive"
      });
    }
  };
  
  const handleRemovePlatform = (index: number) => {
    setPlatforms(platforms.filter((_, i) => i !== index));
  };
  
  const handlePlatformChange = (index: number, field: 'platform' | 'url', value: string) => {
    const updatedPlatforms = [...platforms];
    updatedPlatforms[index] = {
      ...updatedPlatforms[index],
      [field]: value
    };
    setPlatforms(updatedPlatforms);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!title.trim()) {
      toast({
        title: "Missing title",
        description: "Please enter a title for your Smart Link",
        variant: "destructive"
      });
      return;
    }
    
    if (!customUrl.trim()) {
      toast({
        title: "Missing custom URL",
        description: "Please enter a custom URL for your Smart Link",
        variant: "destructive"
      });
      return;
    }
    
    const validPlatforms = platforms.filter(p => p.url.trim() !== '');
    if (validPlatforms.length < 1) {
      toast({
        title: "Missing platform URLs",
        description: "Please enter at least one platform URL",
        variant: "destructive"
      });
      return;
    }
    
    // In a real app, we would save the smart link to a database here
    toast({
      title: "Smart Link created",
      description: "Your Smart Link has been created successfully"
    });
    
    // For demo purposes, we'll just navigate back to the dashboard
    setTimeout(() => navigate('/dashboard'), 1500);
  };
  
  const handleCopyLink = () => {
    const fullUrl = baseUrl + (customUrl || '');
    navigator.clipboard.writeText(fullUrl).then(() => {
      toast({
        title: "Link copied",
        description: "Smart Link URL copied to clipboard"
      });
    });
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Create Smart Link | Malpinoh Distro</title>
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container px-4 md:px-6 max-w-5xl">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold">Create Smart Link</h1>
            <Button variant="outline" onClick={() => navigate('/dashboard')}>
              Back to Dashboard
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="title">Title</Label>
                    <Input 
                      id="title" 
                      value={title} 
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="E.g., My New Single" 
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="customUrl">Custom URL</Label>
                    <div className="flex mt-1">
                      <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-muted text-muted-foreground text-sm">
                        {baseUrl}
                      </span>
                      <Input 
                        id="customUrl" 
                        value={customUrl} 
                        onChange={(e) => setCustomUrl(e.target.value)}
                        placeholder="my-single" 
                        className="rounded-l-none"
                      />
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <div className="flex items-center justify-between mb-2">
                      <Label>Platforms</Label>
                      <Button 
                        type="button" 
                        variant="outline" 
                        size="sm" 
                        onClick={handleAddPlatform}
                      >
                        <Plus className="h-4 w-4 mr-1" />
                        Add Platform
                      </Button>
                    </div>
                    
                    <div className="space-y-3">
                      {platforms.map((platform, index) => (
                        <div key={index} className="flex gap-3 items-start">
                          <div className="w-1/3">
                            <select 
                              value={platform.platform}
                              onChange={(e) => handlePlatformChange(index, 'platform', e.target.value)}
                              className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm"
                            >
                              {PLATFORM_OPTIONS.map(option => (
                                <option 
                                  key={option.name} 
                                  value={option.name}
                                  disabled={platforms.some(p => p.platform === option.name && p !== platform)}
                                >
                                  {option.name}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div className="flex-1">
                            <Input 
                              value={platform.url}
                              onChange={(e) => handlePlatformChange(index, 'url', e.target.value)}
                              placeholder={PLATFORM_OPTIONS.find(o => o.name === platform.platform)?.placeholder || 'Enter URL'}
                            />
                          </div>
                          <Button 
                            type="button"
                            variant="outline"
                            size="icon"
                            onClick={() => handleRemovePlatform(index)}
                            disabled={platforms.length <= 1}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <Button type="submit" className="w-full">
                  Create Smart Link
                </Button>
              </form>
            </div>
            
            <div>
              <h2 className="text-lg font-medium mb-3">Link Preview</h2>
              <div className="sticky top-24">
                <Card>
                  <CardContent className="p-0 overflow-hidden">
                    <div className="p-4 border-b">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                          <Music className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">
                            {title || "My Smart Link"}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {baseUrl}{customUrl || "my-link"}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <div className="aspect-square max-w-[200px] mx-auto bg-muted rounded-xl mb-4"></div>
                      
                      <div className="space-y-2">
                        {platforms.filter(p => p.url.trim() !== '').map((platform, index) => (
                          <button 
                            key={index}
                            type="button"
                            className="w-full py-2 px-3 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-colors"
                          >
                            <span className="w-4 h-4 mr-2 flex-shrink-0">
                              <LinkIcon className="h-4 w-4" />
                            </span>
                            <span>{platform.platform}</span>
                          </button>
                        ))}
                        
                        {platforms.filter(p => p.url.trim() !== '').length === 0 && (
                          <div className="text-center text-muted-foreground py-4">
                            Add platform URLs to see them here
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Button 
                  variant="outline" 
                  className="w-full mt-3"
                  onClick={handleCopyLink}
                  disabled={!customUrl.trim()}
                >
                  <Copy className="h-4 w-4 mr-2" />
                  Copy Link
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

export default CreateSmartLink;
