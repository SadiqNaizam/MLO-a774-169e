import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import {
  LayoutDashboard,
  MessageSquare,
  PlaySquare,
  Store,
  Users,
  CalendarDays,
  Flag,
  List,
  HeartHandshake,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Moon
} from 'lucide-react';

interface SidebarMenuItemProps {
  icon: React.ElementType;
  label: string;
  href?: string;
  isActive?: boolean;
  count?: number;
  onClick?: () => void;
}

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({ icon: Icon, label, href = '#', isActive, count, onClick }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        'flex items-center space-x-3 px-3 py-2 rounded-md hover:bg-gray-200 transition-colors',
        isActive ? 'bg-gray-200 font-semibold text-primary' : 'text-foreground'
      )}
    >
      <Icon className={cn('h-5 w-5', isActive ? 'text-primary' : 'text-muted-foreground')} />
      <span className="flex-1 text-sm">{label}</span>
      {count && <span className="text-xs bg-red-500 text-white rounded-full px-1.5 py-0.5">{count}</span>}
    </a>
  );
};

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const [isExploreOpen, setIsExploreOpen] = React.useState(true);
  const [isShortcutsOpen, setIsShortcutsOpen] = React.useState(true);

  const user = {
    name: 'Olenna Mason',
    avatarUrl: 'https://via.placeholder.com/40?text=OM',
  };

  const mainNavItems: SidebarMenuItemProps[] = [
    { icon: LayoutDashboard, label: 'News Feed', href: '#', isActive: true },
    { icon: MessageSquare, label: 'Messenger', href: '#', count: 3 },
    { icon: PlaySquare, label: 'Watch', href: '#' },
    { icon: Store, label: 'Marketplace', href: '#' },
  ];

  const shortcutItems: SidebarMenuItemProps[] = [
    { icon: Users, label: 'FarmVille 2', href: '#' }, // Using Users as a placeholder
  ];

  const exploreItems: SidebarMenuItemProps[] = [
    { icon: CalendarDays, label: 'Events', href: '#' },
    { icon: Flag, label: 'Pages', href: '#' },
    { icon: Users, label: 'Groups', href: '#' },
    { icon: List, label: 'Friend Lists', href: '#' },
    { icon: HeartHandshake, label: 'Fundraisers', href: '#' },
  ];

  const additionalExploreItems: SidebarMenuItemProps[] = [
    { icon: ShieldCheck, label: 'Crisis Response', href: '#' },
    { icon: Moon, label: 'Dark Mode (Placeholder)', href: '#' },
  ];

  const createItems = [
    { label: 'Ad', href: '#' as const },
    { label: 'Page', href: '#' as const },
    { label: 'Group', href: '#' as const },
    { label: 'Event', href: '#' as const },
    { label: 'Fundraiser', href: '#' as const },
  ];

  return (
    <aside className={cn('w-60 fixed top-0 left-0 h-screen bg-sidebar flex flex-col border-r z-20', className)}>
      <div className="p-4 border-b">
        <a href="#" className="flex items-center space-x-3 group">
          <Avatar className="h-8 w-8">
            <AvatarImage src={user.avatarUrl} alt={user.name} />
            <AvatarFallback>{user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <span className="font-semibold text-sm text-foreground group-hover:text-primary">{user.name}</span>
        </a>
      </div>

      <ScrollArea className="flex-1">
        <nav className="p-2 space-y-1">
          {mainNavItems.map((item) => (
            <SidebarMenuItem key={item.label} {...item} />
          ))}
        </nav>

        <div className="p-2">
          <Collapsible open={isShortcutsOpen} onOpenChange={setIsShortcutsOpen}>
            <CollapsibleTrigger className="w-full">
              <div className="flex items-center justify-between px-3 py-2 text-xs font-semibold text-muted-foreground uppercase hover:text-foreground">
                Shortcuts
                {isShortcutsOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-1 pt-1">
              {shortcutItems.map((item) => (
                <SidebarMenuItem key={item.label} {...item} />
              ))}
            </CollapsibleContent>
          </Collapsible>
        </div>

        <div className="p-2">
          <Collapsible open={isExploreOpen} onOpenChange={setIsExploreOpen}>
            <CollapsibleTrigger className="w-full">
              <div className="flex items-center justify-between px-3 py-2 text-xs font-semibold text-muted-foreground uppercase hover:text-foreground">
                Explore
                {isExploreOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-1 pt-1">
              {exploreItems.map((item) => (
                <SidebarMenuItem key={item.label} {...item} />
              ))}
              <Collapsible>
                <CollapsibleTrigger asChild>
                    <Button variant="ghost" className="w-full justify-start px-3 py-2 text-sm text-muted-foreground hover:bg-gray-200">
                        <ChevronDown className="h-5 w-5 mr-3" /> See More...
                    </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-1 pt-1 pl-3">
                    {additionalExploreItems.map((item) => (
                        <SidebarMenuItem key={item.label} {...item} />
                    ))}
                </CollapsibleContent>
              </Collapsible>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </ScrollArea>

      <div className="p-4 border-t">
        <h3 className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase">Create</h3>
        <div className="flex flex-wrap gap-2 pt-2">
          {createItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-primary hover:underline"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
