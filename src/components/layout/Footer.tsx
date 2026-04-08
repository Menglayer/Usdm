import { MessageCircle, Disc, Send } from 'lucide-react';
import { SITE } from '@/lib/constants';
import { useLanguage } from '@/contexts/LanguageContext';
import { Logo } from '@/components/shared/Logo';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="relative bg-bg-alt border-t border-white/5 py-12 md:py-16 z-10 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {/* Protocol Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-text font-semibold text-sm tracking-wider uppercase opacity-80 mb-2">{t('footer.protocol')}</h3>
             <a href="#/whitepaper" className="text-text-muted hover:text-text transition-colors text-sm">{t('footer.whitepaper')}</a>
          </div>

          {/* Resources Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-text font-semibold text-sm tracking-wider uppercase opacity-80 mb-2">{t('footer.resources')}</h3>
            <a href="#/docs" className="text-text-muted hover:text-text transition-colors text-sm">{t('footer.documentation')}</a>
            <a href="#/audits" className="text-text-muted hover:text-text transition-colors text-sm">{t('footer.audits')}</a>
            <a href="#/risk" className="text-text-muted hover:text-text transition-colors text-sm">{t('footer.riskPolicy')}</a>
          </div>

           {/* Community Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-text font-semibold text-sm tracking-wider uppercase opacity-80 mb-2">{t('footer.community')}</h3>
            <a href={SITE.twitter} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text transition-colors text-sm flex items-center gap-2">
              <MessageCircle className="w-4 h-4" /> Twitter / X
            </a>
            <a href={SITE.discord} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text transition-colors text-sm flex items-center gap-2">
              <Disc className="w-4 h-4" /> Discord
            </a>
            <a href={SITE.telegram} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-text transition-colors text-sm flex items-center gap-2">
              <Send className="w-4 h-4" /> Telegram
            </a>
          </div>
        </div>

         {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3 group">
            <Logo className="w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity" />
            <span className="text-text-secondary text-sm font-medium">
              &copy; {currentYear} Matryo Finance
            </span>
          </div>
        </div>
      </div>
      
      {/* Decorative gradient blur at bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-24 bg-indigo-600/10 blur-[100px] pointer-events-none rounded-t-[100%]" />
    </footer>
  );
}
