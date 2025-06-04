import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import {
  ThumbsUp,
  MessageSquare,
  Share2,
  MoreHorizontal,
  Globe,
  Bookmark, // Added Bookmark for Save functionality
  Users
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface FeedCardProps {
  className?: string;
  user: {
    name: string;
    avatarUrl: string;
  };
  post: {
    timeAgo: string;
    privacy?: 'public' | 'friends'; // Simplified privacy
    text?: string;
    imageUrl?: string;
    mapImageUrl?: string; // Specific for map content
    location?: {
      name: string;
      type: string;
    };
    taggedFriends?: string[]; // Names of tagged friends
  };
  engagement?: {
    likes: number;
    comments: number;
    shares: number;
  };
}

const FeedCard: React.FC<FeedCardProps> = ({
  className,
  user,
  post,
  engagement = { likes: 0, comments: 0, shares: 0 },
}) => {
  const formatCount = (count: number): string => {
    if (count > 1000) return `${(count / 1000).toFixed(1)}k`;
    return count.toString();
  };

  return (
    <Card className={cn('w-full shadow-sm rounded-lg overflow-hidden', className)}>
      <CardHeader className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={user.avatarUrl} alt={user.name} />
              <AvatarFallback>{user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
              <a href="#" className="font-semibold text-sm text-foreground hover:underline">
                {user.name}
                {post.location && <span className="font-normal text-muted-foreground"> is in <span className="font-semibold text-foreground">{post.location.name}</span></span>}
              </a>
              <div className="text-xs text-muted-foreground flex items-center space-x-1">
                <span>{post.timeAgo}</span>
                <span>&middot;</span>
                {post.privacy === 'public' ? (
                  <Globe className="h-3 w-3" />
                ) : (
                  <Users className="h-3 w-3" />
                )}
              </div>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem><Bookmark className="mr-2 h-4 w-4" /> Save Post</DropdownMenuItem>
              <DropdownMenuItem>Hide Post</DropdownMenuItem>
              <DropdownMenuItem>Report Post</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>

      {(post.text || post.taggedFriends) && (
        <CardContent className="px-4 pb-2 pt-0">
          {post.text && <p className="text-sm text-foreground mb-2 whitespace-pre-wrap">{post.text}</p>}
          {post.taggedFriends && post.taggedFriends.length > 0 && (
             <p className="text-sm text-muted-foreground">- with <span className="font-semibold text-foreground">{post.taggedFriends.join(', ')}</span></p>
          )}
        </CardContent>
      )}

      {post.imageUrl && (
        <div className="bg-gray-100 dark:bg-gray-800">
          <img src={post.imageUrl} alt="Post content" className="w-full max-h-[500px] object-cover" />
        </div>
      )}

      {post.mapImageUrl && (
         <div className="bg-gray-100 dark:bg-gray-800 border-y">
          <img src={post.mapImageUrl} alt={`Map of ${post.location?.name || 'location'}`} className="w-full h-64 object-cover" />
           {post.location && (
             <div className="p-3 bg-background border-t">
                <p className="font-semibold text-sm text-foreground">{post.location.name}</p>
                <p className="text-xs text-muted-foreground">{post.location.type}</p>
                {/* Add tagged people if applicable to map posts */}
             </div>
           )}
        </div>
      )}

      {(engagement.likes > 0 || engagement.comments > 0 || engagement.shares > 0) && (
        <div className="px-4 py-2 flex justify-between items-center text-xs text-muted-foreground border-b">
            <div className="flex items-center space-x-1">
                {engagement.likes > 0 && 
                    <><ThumbsUp className="h-3 w-3 text-primary" /> <span>{formatCount(engagement.likes)}</span></>
                }
            </div>
            <div className="flex items-center space-x-2">
                {engagement.comments > 0 && <span>{formatCount(engagement.comments)} comments</span>}
                {engagement.shares > 0 && <span>{formatCount(engagement.shares)} shares</span>}
            </div>
        </div>
      )}

      <CardFooter className="p-1 flex justify-around items-center border-t">
        <Button variant="ghost" className="flex-1 text-muted-foreground hover:bg-gray-100 py-2.5">
          <ThumbsUp className="h-5 w-5 mr-2" /> <span className="text-sm font-medium">Like</span>
        </Button>
        <Button variant="ghost" className="flex-1 text-muted-foreground hover:bg-gray-100 py-2.5">
          <MessageSquare className="h-5 w-5 mr-2" /> <span className="text-sm font-medium">Comment</span>
        </Button>
        <Button variant="ghost" className="flex-1 text-muted-foreground hover:bg-gray-100 py-2.5">
          <Share2 className="h-5 w-5 mr-2" /> <span className="text-sm font-medium">Share</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

// Example Usage (for testing, not part of the component export)
/*
const ExampleFeedCardContainer = () => {
    const exampleUser = { name: 'Julia Fillory', avatarUrl: 'https://via.placeholder.com/40?text=JF' };
    const examplePostWithImage = {
        timeAgo: '2 hrs',
        privacy: 'friends' as const,
        text: 'Checking out some new stores downtown! This place is amazing. Highly recommend visiting if you are in the area.',
        imageUrl: 'https://via.placeholder.com/600x400?text=Store+Front',
    };
    const examplePostWithMap = {
        timeAgo: '5 hrs',
        privacy: 'public' as const,
        text: 'Julia Fillory is in Raleigh, North Carolina.\nChecking out some new stores downtown!',
        mapImageUrl: 'https://via.placeholder.com/600x250?text=Map+of+Raleigh',
        location: { name: 'Raleigh, North Carolina', type: 'City - United States' },
        taggedFriends: ['Bryan Durand', '2 others']
    };

    return (
        <div className="space-y-4 p-4 max-w-xl mx-auto bg-gray-50">
            <FeedCard user={exampleUser} post={examplePostWithMap} engagement={{ likes: 125, comments: 12, shares: 5 }} />
            <FeedCard user={{name: 'John Doe', avatarUrl: 'https://via.placeholder.com/40?text=JD'}} post={examplePostWithImage} engagement={{ likes: 32, comments: 3, shares: 1 }} />
        </div>
    );
};
*/

export default FeedCard;
