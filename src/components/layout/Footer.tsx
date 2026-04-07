import { MessageCircle, Disc, Send } from 'lucide-react';
import { SITE } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-bg-alt border-t border-white/5 py-12 md:py-16 z-10 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Protocol Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase opacity-80 mb-2">Protocol</h3>
            <a href="#/" className="text-white/60 hover:text-white transition-colors text-sm">Whitepaper</a>
            <a href="#/" className="text-white/60 hover:text-white transition-colors text-sm">Governance</a>
            <a href="#/" className="text-white/60 hover:text-white transition-colors text-sm">Updates</a>
          </div>

          {/* Resources Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase opacity-80 mb-2">Resources</h3>
            <a href="#/" className="text-white/60 hover:text-white transition-colors text-sm">Documentation</a>
            <a href="#/" className="text-white/60 hover:text-white transition-colors text-sm">Audits</a>
            <a href="#/" className="text-white/60 hover:text-white transition-colors text-sm">Risk Policy</a>
          </div>

          {/* Community Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase opacity-80 mb-2">Community</h3>
            <a href="#/" className="text-white/60 hover:text-white transition-colors text-sm flex items-center gap-2">
              <MessageCircle className="w-4 h-4" /> Twitter / X
            </a>
            <a href="#/" className="text-white/60 hover:text-white transition-colors text-sm flex items-center gap-2">
              <Disc className="w-4 h-4" /> Discord
            </a>
            <a href="#/" className="text-white/60 hover:text-white transition-colors text-sm flex items-center gap-2">
              <Send className="w-4 h-4" /> Telegram
            </a>
          </div>

          {/* Legal Column */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase opacity-80 mb-2">Legal</h3>
            <a href="#/" className="text-white/60 hover:text-white transition-colors text-sm">Terms of Service</a>
            <a href="#/" className="text-white/60 hover:text-white transition-colors text-sm">Privacy Policy</a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3 group">
            <div className="relative w-6 h-6 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-full" />
              <div className="absolute inset-0.5 bg-gradient-to-br from-indigo-500 to-cyan-400 rounded-full" />
              <div className="absolute inset-1 bg-cyan-300 rounded-full" />
            </div>
            <span className="text-white/70 text-sm font-medium">
              &copy; {currentYear} Matryo Finance
            </span>
          </div>

          <div className="flex items-center gap-4 text-white/50">
            <a href={SITE.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-2" aria-label="Twitter">
              <MessageCircle className="w-5 h-5" />
            </a>
            <a href={SITE.discord} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-2" aria-label="Discord">
              <Disc className="w-5 h-5" />
            </a>
            <a href={SITE.telegram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-2" aria-label="Telegram">
              <Send className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative gradient blur at bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-24 bg-indigo-600/10 blur-[100px] pointer-events-none rounded-t-[100%]" />
    </footer>
  );
}
