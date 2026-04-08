import { motion } from 'framer-motion';
import { Shield, Eye, Lock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Security = () => {
  const { t } = useLanguage();

  const features = [
    {
      title: t('security.multiSig'),
      description: t('security.multiSigDesc'),
      icon: Shield,
    },
    {
      title: t('security.onChain'),
      description: t('security.onChainDesc'),
      icon: Eye,
    },
    {
      title: t('security.insurance'),
      description: t('security.insuranceDesc'),
      icon: Lock,
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {t('security.title')} <span className="text-gradient">{t('security.titleHighlight')}</span>
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-lg">
            {t('security.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-colors"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-text-muted leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-text-secondary mb-8">
            {t('security.auditedBy')}
          </h3>
          <div className="flex flex-wrap justify-center gap-6 opacity-60">
            {['Certik', 'Trail of Bits', 'OpenZeppelin'].map((auditor) => (
              <div 
                key={auditor}
                className="px-8 py-4 bg-surface rounded-lg border border-border/50 font-mono font-bold text-lg text-text-secondary grayscale hover:grayscale-0 transition-all duration-300 hover:text-white"
              >
                {auditor}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
