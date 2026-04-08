import { motion } from 'framer-motion';
import { ArrowDownCircle, Info, Timer, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Redemption = () => {
  const { t } = useLanguage();

  const options = [
    {
      title: t('redemption.instant'),
      description: t('redemption.instantDesc'),
      badge: t('redemption.instantBadge'),
      color: 'text-success',
      bgColor: 'bg-success/10',
      borderColor: 'border-success/30',
      icon: Zap
    },
    {
      title: t('redemption.standard'),
      description: t('redemption.standardDesc'),
      badge: t('redemption.standardBadge'),
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      borderColor: 'border-accent/30',
      icon: Timer
    },
    {
      title: t('redemption.slow'),
      description: t('redemption.slowDesc'),
      badge: t('redemption.slowBadge'),
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
      borderColor: 'border-secondary/30',
      icon: ArrowDownCircle
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
         <div className="text-center mb-16">
           <h2 className="text-3xl md:text-5xl font-bold mb-4">
             {t('redemption.title')}
           </h2>
           <p className="text-text-muted max-w-2xl mx-auto text-lg">
             {t('redemption.subtitle')}
           </p>
         </div>

        <div className="relative pl-8 md:pl-0 mb-12">
          {/* Vertical line connecting the steps */}
          <div className="absolute left-[39px] md:left-1/2 md:-ml-px top-6 bottom-6 w-0.5 bg-border/50 hidden md:block" />
          <div className="absolute left-[39px] top-6 bottom-6 w-0.5 bg-border/50 md:hidden block" />

          <div className="space-y-12">
            {options.map((opt, i) => (
              <motion.div
                key={opt.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className={`relative flex items-center md:justify-between flex-col md:flex-row ${ i % 2 === 0 ? 'md:flex-row-reverse' : '' }`}
              >
                {/* Center marker */}
                <div className="absolute left-0 md:left-1/2 top-4 md:top-1/2 -ml-3 md:-mt-3 w-6 h-6 rounded-full bg-surface border-4 border-border/80 z-10" />

                {/* Content */}
                <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${i % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <div className={`glass p-6 rounded-2xl border ${opt.borderColor} transition-colors duration-300 hover:bg-surface-light`}>
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${opt.bgColor} ${opt.color} text-xs font-bold uppercase tracking-wider mb-4`}>
                      <opt.icon className="w-3.5 h-3.5" />
                      {opt.badge}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-text">{opt.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {opt.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="glass p-4 rounded-xl flex items-start gap-4 border border-border/50 bg-primary/5">
          <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
           <p className="text-sm text-text-muted leading-relaxed">
             <strong className="text-text font-medium">{t('redemption.emergencyGuard')}</strong> {t('redemption.emergencyGuardDesc')}
           </p>
        </div>
      </div>
    </section>
  );
};
