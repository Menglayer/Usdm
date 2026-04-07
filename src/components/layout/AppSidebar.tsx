import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Coins, TrendingUp, Gem, Eye, Star, X, Sun, Moon, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';

interface AppSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppSidebar: React.FC<AppSidebarProps> = ({ isOpen, onClose }) => {
  const { t, locale, setLocale } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: t('nav.overview'), path: '/app', icon: LayoutDashboard, exact: true },
    { name: t('nav.mintRedeem'), path: '/app/mint', icon: Coins },
    { name: t('nav.stake'), path: '/app/stake', icon: TrendingUp },
    { name: t('nav.earn'), path: '/app/earn', icon: Gem },
    { name: t('nav.transparency'), path: '/app/transparency', icon: Eye },
    { name: t('nav.points'), path: '/app/points', icon: Star },
  ];

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
          <div className="flex items-center gap-2 mb-3">
            <button type="button" onClick={toggleTheme} className="flex-1 flex items-center justify-center gap-1 py-2 rounded-lg text-sm text-text-muted hover:text-text hover:bg-surface-light transition-colors">
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button type="button" onClick={() => setLocale(locale === 'zh' ? 'en' : 'zh')} className="flex-1 flex items-center justify-center gap-1 py-2 rounded-lg text-sm text-text-muted hover:text-text hover:bg-surface-light transition-colors">
              <Globe size={16} />
              <span>{locale === 'zh' ? 'EN' : '中'}</span>
            </button>
          </div>
          <button type="button" className="w-full rounded-lg border border-primary/50 text-primary py-2.5 text-sm font-medium hover:bg-primary/10 transition-colors">
            {t('nav.connectWallet')}
          </button>
        </div>
      </aside>
    </>
  );
};
