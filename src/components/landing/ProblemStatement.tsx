import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

export function ProblemStatement() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-bg-alt relative border-y border-border/50 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/4 w-1/2 h-full bg-violet-600/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6 tracking-tight">
            {t('problem.title')} <span className="text-indigo-400">{t('problem.titleHighlight')}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - The Problem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="glass p-8 rounded-3xl border border-border/50 shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-danger/5 to-transparent opacity-50" />
              <h3 className="text-xl font-semibold text-text mb-4 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-danger/20 text-danger flex items-center justify-center font-bold font-mono text-sm">01</span>{t('problem.brokenModel')}</h3>
              <p className="text-text-secondary leading-relaxed text-lg">
                {t('problem.brokenModelDesc')}
              </p>
            </div>
          </motion.div>

          {/* Right Column - The Solution */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-6"
          >
            <div className="glass-strong p-8 rounded-3xl border border-indigo-500/20 shadow-[0_0_30px_rgba(99,102,241,0.1)] relative overflow-hidden group hover:border-indigo-500/40 transition-colors duration-500">
              <div className="absolute inset-0 bg-gradient-to-bl from-indigo-500/10 to-violet-500/10 opacity-50" />
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl group-hover:bg-indigo-500/30 transition-colors" />
              
              <h3 className="text-xl font-semibold text-text mb-4 flex items-center gap-3 relative z-10">
                <span className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold font-mono text-sm shadow-[0_0_10px_rgba(99,102,241,0.5)]">02</span>{t('problem.solution')}</h3>
              <p className="text-text-secondary leading-relaxed text-lg relative z-10">
                {t('problem.solutionDesc')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
