import React from 'react';
import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';
import PostComposer from '@/components/SocialFeed/PostComposer';
import FeedCard from '@/components/SocialFeed/FeedCard';
import StoriesWidget from '@/components/SocialFeed/StoriesWidget';
import SuggestedGroupsWidget from '@/components/SocialFeed/SuggestedGroupsWidget';
import { cn } from '@/lib/utils';

// Define local types for data structures, mirroring FeedCardProps where appropriate
interface UserProfile {
  name: string;
  avatarUrl: string;
}

interface PostContent {
  timeAgo: string;
  privacy?: 'public' | 'friends';
  text?: string;
  imageUrl?: string;
  mapImageUrl?: string;
  location?: {
    name: string;
    type: string;
  };
  taggedFriends?: string[];
}

interface PostEngagement {
  likes: number;
  comments: number;
  shares: number;
}

interface FeedItemData {
  id: string;
  user: UserProfile;
  post: PostContent;
  engagement?: PostEngagement;
}

const IndexPage: React.FC = () => {
  const currentUser: UserProfile = {
    name: 'Olenna Mason',
    avatarUrl: 'https://via.placeholder.com/40?text=OM',
  };

  const feedItems: FeedItemData[] = [
    {
      id: '1',
      user: { name: 'Julia Fillory', avatarUrl: 'https://via.placeholder.com/40?text=JF' },
      post: {
        timeAgo: '2 hrs',
        privacy: 'friends' as const,
        text: 'Checking out some new stores downtown! This place is amazing. Highly recommend visiting if you are in the area.',
        mapImageUrl: 'https://via.placeholder.com/600x250/aabbcc/000000?text=Map+of+Raleigh+Downtown',
        location: { name: 'Raleigh, North Carolina', type: 'City - United States' },
        taggedFriends: ['Bryan Durand', 'Alice Smith'],
      },
      engagement: { likes: 125, comments: 12, shares: 5 },
    },
    {
      id: '2',
      user: { name: 'John Doe', avatarUrl: 'https://via.placeholder.com/40?text=JD' },
      post: {
        timeAgo: '5 hrs',
        privacy: 'public' as const,
        text: 'Beautiful day at the park! Enjoying the sunshine and fresh air. Highly recommend this spot for a weekend picnic. ☀️ #parklife #nature',
        imageUrl: 'https://via.placeholder.com/600x400/90EE90/000000?text=Park+View',
      },
      engagement: { likes: 232, comments: 27, shares: 11 },
    },
    {
      id: '3',
      user: { name: 'Jane Smith', avatarUrl: 'https://via.placeholder.com/40?text=JS' },
      post: {
        timeAgo: '1 day ago',
        privacy: 'public' as const,
        text: "Just finished reading an amazing book titled 'The Art of Code'. It's a deep dive into software craftsmanship. What's everyone else reading? Any recommendations? #books #reading #softwaredevelopment",
      },
      engagement: { likes: 98, comments: 15, shares: 3 },
    },
    {
      id: '4',
      user: { name: 'Olenna Mason', avatarUrl: 'https://via.placeholder.com/40?text=OM' }, // Current user's post
      post: {
        timeAgo: '3 days ago',
        privacy: 'friends' as const,
        text: 'Throwback to my trip to the mountains! Such breathtaking views. Can\'t wait to go back. #travel #mountains #adventure',
        imageUrl: 'https://via.placeholder.com/600x450/6495ED/FFFFFF?text=Mountain+ paisaje',
        taggedFriends: ['Julia Fillory'],
      },
      engagement: { likes: 176, comments: 22, shares: 8 },
    },
  ];

  return (
    <div className="min-h-screen bg-secondary">
      <Sidebar />
      <Header />

      {/* Main Content Area */}
      <main className="ml-60 mr-72 pt-[60px]">
        <div className="p-4">
          <div className="flex flex-col gap-4 max-w-xl mx-auto">
            <PostComposer userAvatarUrl={currentUser.avatarUrl} userName={currentUser.name} />
            {feedItems.map((item) => (
              <FeedCard
                key={item.id}
                user={item.user}
                post={item.post}
                engagement={item.engagement}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Right Sidebar Area */}
      <aside
        className={cn(
          'fixed top-0 right-0 h-screen w-72 bg-white border-l overflow-y-auto',
          'flex flex-col gap-4 p-4'
        )}
      >
        <StoriesWidget />
        <SuggestedGroupsWidget />
        {/* Additional right sidebar content could go here */}
      </aside>
    </div>
  );
};

export default IndexPage;
