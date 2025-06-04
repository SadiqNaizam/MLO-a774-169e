import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Facebook,
  Search,
  Home,
  Users,
  Bell,
  MessageCircle, // Using MessageCircle as it's a common icon for chat/messages in headers
  HelpCircle,
  ChevronDown,
  Settings,
  LogOut
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface TopHeaderProps {
  className?: string;
}

const TopHeader: React.FC<TopHeaderProps> = ({ className }) => {
  const user = {
    name: 'Olenna Mason',
    avatarUrl: 'https://via.placeholder.com/32?text=OM',
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-60 right-72 h-[60px] bg-white border-b px-4 flex items-center justify-between z-10',
        className
      )}
    >
      {/* Left Section: Logo and Search */} 
      <div className="flex items-center space-x-2">
        <Facebook className="h-10 w-10 text-primary" />
        <div className="relative">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search"
            className="pl-8 pr-2 py-2 h-9 w-60 rounded-full bg-secondary border-none focus-visible:ring-primary"
          />
        </div>
      </div>

      {/* Center Section: Navigation Icons (Simplified from image) */}
      <nav className="flex items-center space-x-2">
        {[Home, Users].map((Icon, index) => (
            <Button
              key={index}
              variant="ghost"
              size="icon"
              className={cn(
                'h-12 w-16 rounded-none hover:bg-gray-100',
                index === 0 ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground'
              )}
            >
              <Icon className="h-6 w-6" />
            </Button>
          ))}
      </nav>

      {/* Right Section: User Actions & Profile */} 
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 bg-secondary hover:bg-gray-200">
          <MessageCircle className="h-5 w-5 text-foreground" />
        </Button>
        <div className="relative">
            <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 bg-secondary hover:bg-gray-200">
                <Bell className="h-5 w-5 text-foreground" />
            </Button>
            <Badge variant="destructive" className="absolute -top-1 -right-1 px-1.5 py-0.5 text-xs h-auto">36</Badge>
        </div>
        <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 bg-secondary hover:bg-gray-200">
          <HelpCircle className="h-5 w-5 text-foreground" />
        </Button>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center space-x-2 p-1 rounded-full hover:bg-gray-200">
              <Avatar className="h-7 w-7">
                <AvatarImage src={user.avatarUrl} alt={user.name} />
                <AvatarFallback>{user.name.substring(0,1)}</AvatarFallback>
              </Avatar>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel className="flex items-center space-x-2">
                <Avatar className="h-9 w-9">
                    <AvatarImage src={user.avatarUrl} alt={user.name} />
                    <AvatarFallback>{user.name.substring(0,2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div>
                    <p className="text-sm font-medium leading-none">{user.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">View your profile</p>
                </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings & Privacy</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <HelpCircle className="mr-2 h-4 w-4" />
              <span>Help & Support</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className='text-destructive focus:text-destructive focus:bg-destructive/10'>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log Out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default TopHeader;
