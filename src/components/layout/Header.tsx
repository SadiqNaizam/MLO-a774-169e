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
  MessageCircle,
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

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const user = {
    name: 'Olenna Mason',
    avatarUrl: 'https://via.placeholder.com/32?text=OM',
  };

  const navIcons = [
    { icon: Home, active: true },
    { icon: Users, active: false },
    // Add more icons as needed, e.g., PlaySquare for Watch, Store for Marketplace from Sidebar logic
  ];

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
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search"
            className="pl-9 pr-3 py-2 h-10 w-60 rounded-full bg-secondary border-none focus-visible:ring-1 focus-visible:ring-primary"
          />
        </div>
      </div>

      {/* Center Section: Navigation Icons */} 
      <nav className="flex items-center space-x-2">
        {navIcons.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              size="icon"
              className={cn(
                'h-12 w-24 rounded-lg hover:bg-gray-100 flex-col justify-center items-center group',
                item.active ? 'text-primary border-b-2 border-primary rounded-none' : 'text-muted-foreground'
              )}
            >
              <item.icon className={cn('h-6 w-6', item.active ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground')} />
            </Button>
          ))}
      </nav>

      {/* Right Section: User Actions & Profile */} 
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 bg-secondary hover:bg-gray-200">
          <MessageCircle className="h-5 w-5 text-foreground" />
        </Button>
        <div className="relative">
            <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 bg-secondary hover:bg-gray-200">
                <Bell className="h-5 w-5 text-foreground" />
            </Button>
            <Badge variant="destructive" className="absolute -top-1 -right-1 px-1.5 py-0.5 text-xs h-auto">36</Badge>
        </div>
        <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 bg-secondary hover:bg-gray-200">
          <HelpCircle className="h-5 w-5 text-foreground" />
        </Button>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center space-x-1 p-0.5 rounded-full hover:bg-gray-200">
              <Avatar className="h-8 w-8">
                <AvatarImage src={user.avatarUrl} alt={user.name} />
                <AvatarFallback>{user.name.substring(0,1).toUpperCase()}</AvatarFallback>
              </Avatar>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-60 mt-2">
            <DropdownMenuLabel className="font-normal">
                <div className="flex items-center space-x-3 p-2">
                    <Avatar className="h-10 w-10">
                        <AvatarImage src={user.avatarUrl} alt={user.name} />
                        <AvatarFallback>{user.name.substring(0,2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm font-semibold leading-none text-foreground">{user.name}</p>
                        <p className="text-xs leading-tight text-muted-foreground">View your profile</p>
                    </div>
                </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="py-2 px-3">
              <Settings className="mr-2 h-5 w-5 text-muted-foreground" />
              <span className="text-sm">Settings & Privacy</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="py-2 px-3">
              <HelpCircle className="mr-2 h-5 w-5 text-muted-foreground" />
              <span className="text-sm">Help & Support</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className='text-destructive focus:text-destructive focus:bg-destructive/10 py-2 px-3'>
              <LogOut className="mr-2 h-5 w-5" />
              <span className="text-sm">Log Out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
