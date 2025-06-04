import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <div className={cn("min-h-screen bg-secondary", className)}>
      <Sidebar />
      <Header />
      
      {/* Main content area: ml-60 for left sidebar, mr-72 for right sidebar, pt-[60px] for header */}
      <main className="ml-60 mr-72 pt-[60px]">
        {/* Inner container for main content styling (padding, flex, gap) */}
        <div className="p-4">
          {children}
        </div>
      </main>

      {/* Right Sidebar placeholder */}
      <aside 
        className={cn(
          "fixed top-0 right-0 h-screen w-72 bg-white border-l overflow-y-auto",
          "flex flex-col gap-4 p-4 z-0" // z-0 to be behind dropdowns from header if they overlap
        )}
      >
        {/* Content for the right sidebar would go here, e.g., StoriesWidget, SuggestedGroupsWidget */}
        {/* For now, a placeholder */}
        <div className="font-semibold text-lg text-foreground">Right Panel</div>
        <div className="border p-3 rounded-lg bg-card text-sm text-muted-foreground">
          Stories Widget Area (Placeholder)
        </div>
        <div className="border p-3 rounded-lg bg-card text-sm text-muted-foreground">
          Suggested Groups Widget Area (Placeholder)
        </div>
        {/* Add more placeholder widgets or actual components as needed */}
      </aside>
    </div>
  );
};

export default MainAppLayout;
