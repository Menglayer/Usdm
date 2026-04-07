import { motion } from 'framer-motion';
import { ECOSYSTEM_PARTNERS } from '@/data/stats';
import { useLanguage } from '@/contexts/LanguageContext';

export const Ecosystem = () => {
  const { t } = useLanguage();

  return (
    <section id="ecosystem" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('ecosystem.title')}</h2>
          <p className="text-text-muted max-w-2xl mx-auto text-lg">
            {t('ecosystem.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 mb-16">
          {Object.entries(ECOSYSTEM_PARTNERS).flatMap(([category, partners]) => 
            partners.map(partner => ({ ...partner, category }))
          ).map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-3 border border-border/40 hover:border-primary/40 hover:bg-surface-light transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-300" />
              <span className="text-xs font-semibold uppercase tracking-wider text-text-muted group-hover:text-text-secondary transition-colors">
                {t(`ecosystem.category.${partner.category}`)}
              </span>
              <span className="text-xl font-bold text-text group-hover:text-white transition-colors">
                {partner.name}
              </span>
              <span className="text-xs text-text-muted/70 group-hover:text-text-muted transition-colors px-2 leading-tight">
                {partner.description}
              </span>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 py-8 border-y border-border/30 bg-surface/30">
          <div className="text-center">
            <div className="text-3xl font-mono font-bold text-primary mb-1">10+</div>
            <div className="text-sm text-text-secondary uppercase tracking-wider">{t('ecosystem.integratedProtocols')}</div>
          </div>
          <div className="w-px h-12 bg-border/50 hidden md:block" />
          <div className="text-center">
            <div className="text-3xl font-mono font-bold text-secondary mb-1">3</div>
            <div className="text-sm text-text-secondary uppercase tracking-wider">{t('ecosystem.chains')}</div>
          </div>
          <div className="w-px h-12 bg-border/50 hidden md:block" />
          <div className="text-center">
            <div className="text-3xl font-mono font-bold text-accent mb-1">50+</div>
            <div className="text-sm text-text-secondary uppercase tracking-wider">{t('ecosystem.yieldStrategies')}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
