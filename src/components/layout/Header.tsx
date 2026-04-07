import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, locale, setLocale } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), href: '#/' },
    { name: t('nav.ecosystem'), href: '#/ecosystem' },
    { name: t('nav.docs'), href: '#/docs' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'py-4 glass-strong shadow-lg border-b border-white/5' : 'py-6 bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#/" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 flex items-center justify-center">
              {/* Matryoshka-like layered ellipses */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-full opacity-80 group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-1 bg-gradient-to-br from-indigo-500 to-cyan-400 rounded-full opacity-90 group-hover:scale-110 transition-transform duration-300 delay-75" />
              <div className="absolute inset-2 bg-cyan-300 rounded-full group-hover:scale-110 transition-transform duration-300 delay-150 shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
            </div>
            <span className="text-xl font-bold tracking-tight text-text">
              Matryo
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-text-secondary hover:text-text transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Section (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 mr-2">
              <button
                type="button"
                onClick={toggleTheme}
                className="p-2 text-text-muted hover:text-text transition-colors rounded-full hover:bg-surface-light"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                type="button"
                onClick={() => setLocale(locale === 'zh' ? 'en' : 'zh')}
                className="flex items-center gap-1 p-2 text-text-muted hover:text-text transition-colors rounded-full hover:bg-surface-light text-sm font-medium"
              >
                <Globe size={18} />
                <span>{locale === 'zh' ? 'EN' : '中'}</span>
              </button>
            </div>
            <a
              href="#/app"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_25px_rgba(99,102,241,0.5)] transition-all duration-300"
            >
              {t('nav.launchApp')}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="md:hidden text-text-secondary hover:text-text p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-strong border-b border-white/5 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-text-secondary hover:text-text transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              
              <div className="flex items-center gap-4 py-2 border-t border-white/5 mt-2 pt-4">
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="flex items-center gap-2 text-sm text-text-muted hover:text-text transition-colors"
                >
                  {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                  <span>{theme === 'dark' ? t('theme.light') : t('theme.dark')}</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setLocale(locale === 'zh' ? 'en' : 'zh');
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-2 text-sm text-text-muted hover:text-text transition-colors ml-4"
                >
                  <Globe size={18} />
                  <span>{locale === 'zh' ? 'English' : '中文'}</span>
                </button>
              </div>

              <button
                type="button"
                onClick={() => { window.location.hash = '/app'; setIsMobileMenuOpen(false); }}
                className="inline-flex items-center justify-center px-6 py-3 mt-4 text-base font-semibold text-white bg-indigo-600 rounded-full"
              >
                {t('nav.launchApp')}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
