import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Menu, Sparkles, ChevronDown } from 'lucide-react';
import { AppSidebar } from './AppSidebar';
import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { ToastProvider } from '@/contexts/ToastContext';

export const AppLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();
  const [isNetworkOpen, setIsNetworkOpen] = useState(false);

  return (
    <ToastProvider position="top-right">
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
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <Sparkles size={14} className="text-primary" />
              <span>12,450</span>
            </div>
            
            <div className="flex items-center justify-between rounded-lg border border-border bg-surface-light px-3 py-1.5 text-sm font-medium text-text transition-colors">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-primary to-accent shrink-0"></div>
                <span className="truncate max-w-[80px]">menglayer.btc</span>
              </div>
              <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] ml-2"></div>
            </div>
          </div>
        </header>

        {/* Desktop Header */}
        <header className="hidden lg:flex items-center justify-end h-20 px-8 border-b border-border/50 bg-surface/30 backdrop-blur-md sticky top-0 z-30 shadow-sm">
          <div className="flex items-center gap-4">
            
            {/* Network Selector */}
            <div className="relative">
              <button 
                type="button"
                onClick={() => setIsNetworkOpen(!isNetworkOpen)}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-surface-light border border-border/50 hover:border-primary/50 transition-all text-sm font-medium hover:bg-surface-light/80"
              >
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 shadow-sm flex items-center justify-center text-[10px] text-white font-bold">M</div>
                <span>MengLayer</span>
                <ChevronDown size={14} className={cn("text-text-muted transition-transform ml-1", isNetworkOpen && "rotate-180")} />
              </button>
              
              <AnimatePresence>
                {isNetworkOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-[calc(100%+8px)] right-0 w-48 p-2 rounded-xl border border-border/50 bg-surface/90 backdrop-blur-xl shadow-xl z-50 ring-1 ring-black/5"
                  >
                    <button type="button" className="w-full flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 border border-primary/20 text-sm font-medium text-text transition-colors hover:bg-primary/20">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 shadow-sm flex items-center justify-center text-[10px] text-white font-bold">M</div>
                      MengLayer
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Points Tracker */}
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-sm font-bold text-gradient cursor-pointer hover:shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-all">
              <Sparkles size={16} className="text-primary animate-pulse" />
              <span>12,450 {t('nav.points') || '萌积分'}</span>
            </div>

            {/* Wallet Connection Badge */}
            <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-surface-light border border-border/50 hover:border-primary/30 transition-all text-sm font-medium cursor-pointer hover:bg-surface-light/80">
              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-primary to-accent shrink-0 shadow-sm ring-2 ring-surface"></div>
              <span className="font-semibold tracking-wide">menglayer.btc</span>
              <div className="flex items-center gap-1.5 ml-1 px-2 py-0.5 rounded-full bg-green-500/10">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse"></div>
                <span className="text-xs text-green-500 font-bold">{t('connected')}</span>
              </div>
            </div>
            
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 relative z-0">
          <div className="mx-auto max-w-6xl">
            <AnimatePresence mode="wait">
              <Outlet key={location.pathname} />
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
    </ToastProvider>
  );
};
