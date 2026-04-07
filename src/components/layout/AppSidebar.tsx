import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Coins, TrendingUp, Gem, Eye, Star, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AppSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { name: 'Overview', path: '/app', icon: LayoutDashboard, exact: true },
  { name: 'Mint / Redeem', path: '/app/mint', icon: Coins },
  { name: 'Stake', path: '/app/stake', icon: TrendingUp },
  { name: 'Earn', path: '/app/earn', icon: Gem },
  { name: 'Transparency', path: '/app/transparency', icon: Eye },
  { name: 'Points', path: '/app/points', icon: Star },
];

export const AppSidebar: React.FC<AppSidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-50 h-full w-[260px] transform flex flex-col bg-surface border-r border-border transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-16 items-center justify-between px-6 border-b border-border">
          <NavLink to="/" className="text-xl font-bold tracking-tight text-gradient">
            Matryo
          </NavLink>
          <button onClick={onClose} className="p-1 lg:hidden text-text-muted hover:text-text">
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 space-y-1 p-4 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.exact}
              onClick={() => {
                if (window.innerWidth < 1024) onClose();
              }}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary/10 border-l-2 border-primary text-text"
                    : "text-text-muted hover:text-text hover:bg-surface-light border-l-2 border-transparent"
                )
              }
            >
              <item.icon size={18} />
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-border">
          <button className="w-full rounded-lg border border-primary/50 text-primary py-2.5 text-sm font-medium hover:bg-primary/10 transition-colors">
            Connect Wallet
          </button>
        </div>
      </aside>
    </>
  );
};
