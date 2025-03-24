
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { format } from "date-fns";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { CalendarIcon, Music, SparkleIcon } from "lucide-react";

import Navbar from '../components/layout/Navbar';
import Footer from '../components/sections/Footer';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import PreSaveCampaignPreview from "@/components/campaigns/PreSaveCampaignPreview";

// Define the form schema
const formSchema = z.object({
  releaseName: z.string().min(2, "Release name must be at least 2 characters."),
  artistName: z.string().min(2, "Artist name must be at least 2 characters."),
  releaseDate: z.date({
    required_error: "Release date is required.",
  }),
  spotifyUrl: z.string().url("Please enter a valid Spotify pre-save URL.").optional().or(z.literal("")),
  appleMusicUrl: z.string().url("Please enter a valid Apple Music pre-save URL.").optional().or(z.literal("")),
  coverImageUrl: z.string().optional(),
  description: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const CreatePreSave: React.FC = () => {
  const navigate = useNavigate();
  const [previewData, setPreviewData] = useState<FormValues | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      releaseName: "",
      artistName: "",
      spotifyUrl: "",
      appleMusicUrl: "",
      coverImageUrl: "",
      description: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    // In a real app, this would save to a database
    console.log("Form submitted:", data);
    
    // Show toast notification
    toast({
      title: "Pre-save campaign created!",
      description: "Your pre-save campaign has been created successfully.",
    });
    
    // Generate the preview
    setPreviewData(data);

    // In a real app, this would navigate to the campaign page
    // navigate(`/campaigns/${campaignId}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>Create Pre-Save Campaign | Malpinoh Distro Link</title>
      </Helmet>
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container px-4 md:px-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Create Pre-Save Campaign</h1>
            <p className="text-muted-foreground">
              Set up a pre-save campaign for your upcoming music release.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Music className="h-5 w-5 text-primary" />
                  Campaign Details
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="releaseName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Release Name</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g. Summer Vibes EP" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="artistName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Artist Name</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g. DJ Awesome" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="releaseDate"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Release Date</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-full pl-3 text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) => date < new Date()}
                                initialFocus
                                className={cn("p-3 pointer-events-auto")}
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="spotifyUrl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Spotify Pre-Save URL</FormLabel>
                          <FormControl>
                            <Input placeholder="https://spotify.com/..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="appleMusicUrl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Apple Music Pre-Save URL</FormLabel>
                          <FormControl>
                            <Input placeholder="https://music.apple.com/..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="coverImageUrl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Cover Image URL (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="https://example.com/cover.jpg" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="description"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description (Optional)</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell fans about your upcoming release..." 
                              className="min-h-[120px]" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" className="w-full">
                      <SparkleIcon className="mr-2 h-4 w-4" />
                      Create Pre-Save Campaign
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
            
            <div>
              <h2 className="text-xl font-semibold mb-4">Campaign Preview</h2>
              <PreSaveCampaignPreview data={previewData} />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CreatePreSave;
