import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

export const CTAFooter = () => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden py-32 border-t border-border/30">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-surface to-secondary/20 z-0" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none z-0" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
         <motion.h2 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
         >
           {t('cta.title')} <span className="text-gradient">{t('cta.titleHighlight')}</span>
         </motion.h2>
        
         <motion.p 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.1 }}
           viewport={{ once: true }}
           className="text-xl text-text-muted mb-12 max-w-2xl"
         >
           {t('cta.subtitle')}
         </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Link
            to="/app"
            className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-white transition-all duration-300 bg-primary rounded-full overflow-hidden hover:scale-105 shadow-[0_0_40px_rgba(99,102,241,0.4)] hover:shadow-[0_0_60px_rgba(99,102,241,0.6)]"
          >
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black" />
             <span className="relative flex items-center gap-3 text-lg">
               {t('cta.launchApp')}
               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
             </span>
          </Link>
        </motion.div>

        {/* Social Links Row */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="flex items-center gap-6 mt-20"
        >
          <a href="https://x.com/MengLayer" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full glass border border-border/50 text-text-muted hover:text-white hover:border-primary/50 transition-all hover:-translate-y-1 text-sm font-semibold">
            Twitter
          </a>
          <a href="https://discord.gg/Vk7tKpPZmB" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full glass border border-border/50 text-text-muted hover:text-white hover:border-primary/50 transition-all hover:-translate-y-1 text-sm font-semibold">
            Discord
          </a>
          <a href="https://t.me/MengYaWeb3" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full glass border border-border/50 text-text-muted hover:text-white hover:border-primary/50 transition-all hover:-translate-y-1 text-sm font-semibold">
            Telegram
          </a>
        </motion.div>
      </div>

       <div className="absolute bottom-8 w-full text-center text-text-muted text-sm z-10">
         {t('cta.copyright')}
       </div>
    </section>
  );
};
