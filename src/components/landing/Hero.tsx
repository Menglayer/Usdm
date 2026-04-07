import { motion } from 'framer-motion';
import { AnimatedCounter } from '@/components/shared/AnimatedCounter';
import { useLanguage } from '@/contexts/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' as const, delay: 0.8 } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-indigo-600/20 blur-[120px] mix-blend-screen animate-pulse duration-10000" />
        <div className="absolute top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-violet-600/20 blur-[120px] mix-blend-screen animate-pulse duration-7000" />
        <div className="absolute -bottom-[10%] left-[20%] w-[70%] h-[60%] rounded-full bg-cyan-600/15 blur-[150px] mix-blend-screen animate-pulse duration-8000" />
        <div className="absolute inset-0 bg-bg/80 backdrop-blur-[1px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-5xl mx-auto"
        >
          {/* Main Heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight text-text mb-6 leading-tight"
          >
            <span className="text-gradient">{t('hero.title.line1')}</span>
            <br className="hidden sm:block" /> {t('hero.title.line2')}
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-text-secondary max-w-3xl mb-10 leading-relaxed font-light"
          >
            {t('hero.subtitle')}
          </motion.p>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 mb-20 w-full sm:w-auto">
            <a
              href="#/app"
              className="w-full sm:w-auto px-8 py-4 text-base md:text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-full shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:shadow-[0_0_40px_rgba(99,102,241,0.6)] transition-all duration-300"
            >{t('hero.launchApp')}</a>
            <a
              href="#/docs"
              className="w-full sm:w-auto px-8 py-4 text-base md:text-lg font-medium text-text border border-border hover:border-white/20 hover:bg-white/5 rounded-full transition-all duration-300 glass"
            >{t('hero.readDocs')}</a>
          </motion.div>
        </motion.div>

        {/* Stats Bar */}
        <motion.div 
          variants={statsVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-6xl mx-auto mt-auto"
        >
          {/* TVL */}
          <div className="glass-strong rounded-2xl p-6 border border-border/50 flex flex-col items-center text-center hover:border-border transition-colors">
            <h3 className="text-sm font-medium text-text-muted uppercase tracking-wider mb-2">{t('hero.stat.tvl')}</h3>
            <div className="text-3xl md:text-4xl font-bold text-text font-mono">
              <AnimatedCounter end={847.52} prefix="$" suffix="M" decimals={2} duration={2} />
            </div>
          </div>

          {/* Supply */}
          <div className="glass-strong rounded-2xl p-6 border border-border/50 flex flex-col items-center text-center hover:border-border transition-colors">
            <h3 className="text-sm font-medium text-text-muted uppercase tracking-wider mb-2">{t('hero.stat.supply')}</h3>
            <div className="text-3xl md:text-4xl font-bold text-text font-mono">
              <AnimatedCounter end={623.10} prefix="$" suffix="M" decimals={2} duration={2} />
            </div>
          </div>

          {/* APY */}
          <div className="glass-strong rounded-2xl p-6 border border-border/50 flex flex-col items-center text-center hover:border-border transition-colors relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="text-sm font-medium text-text-muted uppercase tracking-wider mb-2 relative z-10">{t('hero.stat.apy')}</h3>
            <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400 font-mono relative z-10 glow-accent">
              <AnimatedCounter end={28.4} suffix="%" decimals={1} duration={2.5} />
            </div>
          </div>

          {/* Revenue */}
          <div className="glass-strong rounded-2xl p-6 border border-border/50 flex flex-col items-center text-center hover:border-border transition-colors">
            <h3 className="text-sm font-medium text-text-muted uppercase tracking-wider mb-2">{t('hero.stat.revenue')}</h3>
            <div className="text-3xl md:text-4xl font-bold text-text font-mono">
              <AnimatedCounter end={4.23} prefix="$" suffix="M" decimals={2} duration={2} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
