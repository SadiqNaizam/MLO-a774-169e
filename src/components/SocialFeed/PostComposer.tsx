import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Image as ImageIcon,
  Video as VideoIcon,
  UserTag,
  ListChecks,
  Pencil
} from 'lucide-react';

interface PostComposerProps {
  className?: string;
  userAvatarUrl?: string;
  userName?: string;
}

const PostComposer: React.FC<PostComposerProps> = ({ 
  className,
  userAvatarUrl = 'https://via.placeholder.com/40?text=OM',
  userName = 'Olenna Mason'
}) => {

  const composerActions = [
    { label: 'Make Post', icon: Pencil, variant: 'ghost' as const, className: 'text-foreground hover:bg-gray-100'},
    { label: 'Photo/Video Album', icon: ImageIcon, variant: 'ghost' as const, className: 'text-green-500 hover:bg-green-50'},
    { label: 'Live Video', icon: VideoIcon, variant: 'ghost' as const, className: 'text-red-500 hover:bg-red-50'},
  ];

  const quickActions = [
    { label: 'List', icon: ListChecks, className: 'text-blue-500' },
    { label: 'Photo/Video', icon: ImageIcon, className: 'text-green-500' },
    { label: 'Tag Friends', icon: UserTag, className: 'text-yellow-500' },
  ];

  return (
    <Card className={cn('w-full shadow-sm rounded-lg', className)}>
      <CardHeader className="p-3 border-b">
        <div className="flex space-x-2">
          {composerActions.map((action, index) => (
            <Button
              key={action.label}
              variant={action.variant}
              size="sm"
              className={cn(
                'px-3 py-1.5 font-medium text-sm rounded-md',
                action.className,
                index === 0 && 'border-b-2 border-primary text-primary rounded-none pb-2.5'
              )}
            >
              <action.icon className="h-5 w-5 mr-2" />
              {action.label}
            </Button>
          ))}
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex items-start space-x-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={userAvatarUrl} alt={userName} />
            <AvatarFallback>{userName.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <Input
            placeholder={`What's on your mind, ${userName.split(' ')[0]}?`}
            className="flex-1 h-10 border-none focus-visible:ring-0 focus-visible:ring-offset-0 text-base bg-transparent p-0"
          />
        </div>
        <Separator className="my-3" />
        <div className="flex justify-around items-center">
          {quickActions.map((action) => (
            <Button key={action.label} variant="ghost" className="text-muted-foreground hover:bg-gray-100">
              <action.icon className={cn('h-5 w-5 mr-2', action.className)} />
              <span className="text-sm font-medium">{action.label}</span>
            </Button>
          ))}
          <Button variant="ghost" className="text-muted-foreground hover:bg-gray-100">
             ...
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PostComposer;
