import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { AppSidebar } from './AppSidebar';

export const AppLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-full bg-bg text-text overflow-hidden">
      <AppSidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />
      
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile Header */}
        <header className="lg:hidden flex items-center justify-between h-16 px-4 border-b border-border bg-surface">
          <div className="flex items-center gap-3">
            <button 
              type="button"
              onClick={() => setIsSidebarOpen(true)}
              className="p-1 text-text-muted hover:text-text"
            >
              <Menu size={24} />
            </button>
            <span className="text-xl font-bold tracking-tight text-gradient">Matryo</span>
          </div>
          <div className="flex items-center justify-between rounded-lg border border-border bg-surface-light px-3 py-1.5 text-sm font-medium text-text transition-colors">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-primary to-accent shrink-0"></div>
              <span className="truncate">menglayer.btc</span>
            </div>
            <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] ml-2"></div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <div className="mx-auto max-w-6xl">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};
