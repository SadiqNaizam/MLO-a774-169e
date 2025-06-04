import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import {
  PlusCircle,
  Archive,
  Settings
} from 'lucide-react';

interface Story {
  id: string;
  userName: string;
  avatarUrl: string;
  storyImageUrl: string;
  viewed?: boolean;
}

interface StoriesWidgetProps {
  className?: string;
}

const StoriesWidget: React.FC<StoriesWidgetProps> = ({ className }) => {
  const storiesData: Story[] = [
    { id: '1', userName: 'Alex G', avatarUrl: 'https://via.placeholder.com/32?text=AG', storyImageUrl: 'https://via.placeholder.com/100x150/FFA500/FFFFFF?text=Story+1' },
    { id: '2', userName: 'Maria K', avatarUrl: 'https://via.placeholder.com/32?text=MK', storyImageUrl: 'https://via.placeholder.com/100x150/FFC0CB/000000?text=Story+2', viewed: true },
    { id: '3', userName: 'John B', avatarUrl: 'https://via.placeholder.com/32?text=JB', storyImageUrl: 'https://via.placeholder.com/100x150/ADD8E6/000000?text=Story+3' },
    { id: '4', userName: 'Lisa P', avatarUrl: 'https://via.placeholder.com/32?text=LP', storyImageUrl: 'https://via.placeholder.com/100x150/90EE90/FFFFFF?text=Story+4' },
    { id: '5', userName: 'Kevin S', avatarUrl: 'https://via.placeholder.com/32?text=KS', storyImageUrl: 'https://via.placeholder.com/100x150/DDA0DD/000000?text=Story+5', viewed: true },
    { id: '6', userName: 'Sara W', avatarUrl: 'https://via.placeholder.com/32?text=SW', storyImageUrl: 'https://via.placeholder.com/100x150/FFFF00/000000?text=Story+6' },
  ];

  return (
    <Card className={cn('w-full shadow-sm rounded-lg', className)}>
      <CardHeader className="flex flex-row items-center justify-between p-3 border-b">
        <CardTitle className="text-base font-semibold">Stories</CardTitle>
        <div className="space-x-2">
          <Button variant="ghost" size="sm" className="text-xs text-muted-foreground hover:bg-gray-100">
            <Archive className="h-4 w-4 mr-1" /> Archive
          </Button>
          <Button variant="ghost" size="sm" className="text-xs text-muted-foreground hover:bg-gray-100">
            <Settings className="h-4 w-4 mr-1" /> Settings
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-3">
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex space-x-3 pb-2">
            {/* Add to Your Story Card */}
            <div className="flex-shrink-0 w-28 h-40 rounded-lg overflow-hidden relative group cursor-pointer bg-secondary hover:opacity-90 transition-opacity">
              <div className="w-full h-2/3 bg-muted-foreground/20 flex items-center justify-center">
                 {/* Placeholder for potential background image if user has one */}
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-background flex flex-col items-center justify-center border-t">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Button variant="default" size="icon" className="h-8 w-8 rounded-full border-2 border-background">
                        <PlusCircle className="h-5 w-5" />
                    </Button>
                </div>
                <p className="text-xs font-medium text-center mt-2 text-foreground px-1">Add to Story</p>
              </div>
            </div>

            {/* Individual Story Cards */}
            {storiesData.map((story) => (
              <div
                key={story.id}
                className={cn(
                  'flex-shrink-0 w-28 h-40 rounded-lg overflow-hidden relative group cursor-pointer',
                  'border-2',
                  story.viewed ? 'border-gray-300 dark:border-gray-600' : 'border-primary'
                )}
              >
                <img src={story.storyImageUrl} alt={`${story.userName}'s story`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <Avatar className="absolute top-2 left-2 h-8 w-8 border-2 border-primary">
                  <AvatarImage src={story.avatarUrl} alt={story.userName} />
                  <AvatarFallback>{story.userName.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <p className="absolute bottom-2 left-2 right-2 text-xs font-medium text-white truncate">
                  {story.userName}
                </p>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default StoriesWidget;
