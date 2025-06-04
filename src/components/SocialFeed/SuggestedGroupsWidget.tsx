import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { UserPlus, X } from 'lucide-react';

interface Group {
  id: string;
  name: string;
  members: number;
  coverImageUrl: string;
  mutualFriendsAvatars?: string[];
}

interface SuggestedGroupsWidgetProps {
  className?: string;
}

const SuggestedGroupsWidget: React.FC<SuggestedGroupsWidgetProps> = ({ className }) => {
  const [groups, setGroups] = React.useState<Group[]>([
    {
      id: '1',
      name: 'Mad Men (MADdicts)',
      members: 6195,
      coverImageUrl: 'https://via.placeholder.com/260x100/333/fff?text=Mad+Men+Cover',
      mutualFriendsAvatars: [
        'https://via.placeholder.com/20?text=P1',
        'https://via.placeholder.com/20?text=P2',
        'https://via.placeholder.com/20?text=P3',
      ],
    },
    {
      id: '2',
      name: 'Dexter Morgan Fans',
      members: 6984,
      coverImageUrl: 'https://via.placeholder.com/260x100/555/fff?text=Dexter+Cover',
      mutualFriendsAvatars: [
        'https://via.placeholder.com/20?text=P4',
        'https://via.placeholder.com/20?text=P5',
      ],
    },
    {
      id: '3',
      name: 'Tech Innovators Hub',
      members: 12030,
      coverImageUrl: 'https://via.placeholder.com/260x100/007bff/fff?text=Tech+Hub',
      mutualFriendsAvatars: [],
    },
  ]);

  const handleDismissGroup = (groupId: string) => {
    setGroups(prevGroups => prevGroups.filter(group => group.id !== groupId));
  };

  return (
    <Card className={cn('w-full shadow-sm rounded-lg', className)}>
      <CardHeader className="flex flex-row items-center justify-between p-3 border-b">
        <CardTitle className="text-base font-semibold">Suggested Groups</CardTitle>
        <Button variant="link" size="sm" className="text-xs text-primary p-0 h-auto">
          See All
        </Button>
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-0">
          {groups.map((group, index) => (
            <div key={group.id} className={cn('relative group', index < groups.length - 1 && 'border-b')}>
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute top-1 right-1 h-6 w-6 text-muted-foreground hover:bg-gray-200 dark:hover:bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity z-10"
                onClick={() => handleDismissGroup(group.id)}
              >
                <X className="h-4 w-4" />
              </Button>
              <div className="p-3">
                <img src={group.coverImageUrl} alt={`${group.name} cover`} className="w-full h-24 object-cover rounded-md mb-2" />
                <h4 className="text-sm font-semibold text-foreground hover:underline cursor-pointer">{group.name}</h4>
                <p className="text-xs text-muted-foreground">{group.members.toLocaleString()} members</p>
                {group.mutualFriendsAvatars && group.mutualFriendsAvatars.length > 0 && (
                  <div className="flex items-center mt-1 space-x-1">
                    <div className="flex -space-x-2">
                      {group.mutualFriendsAvatars.slice(0,3).map((avatar, idx) => (
                        <Avatar key={idx} className="h-5 w-5 border-2 border-background">
                          <AvatarImage src={avatar} />
                          <AvatarFallback>{idx}</AvatarFallback>
                        </Avatar>
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {group.mutualFriendsAvatars.length} mutual friends
                    </span>
                  </div>
                )}
                <Button variant="outline" className="w-full mt-3 text-sm py-1.5 h-auto bg-secondary hover:bg-gray-200 dark:hover:bg-gray-700 border-gray-300">
                  <UserPlus className="h-4 w-4 mr-2 text-primary" /> Join
                </Button>
              </div>
            </div>
          ))}
          {groups.length === 0 && (
            <p className="p-4 text-sm text-muted-foreground text-center">No group suggestions at the moment.</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default SuggestedGroupsWidget;
