import { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatedCounter } from '@/components/shared/AnimatedCounter';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

export const YieldCalculator = () => {
  const { t } = useLanguage();

  const [amount, setAmount] = useState(10000);
  const apy = 28.4;
  const bankApy = 0.5;

  const calculateYield = (days: number, rate: number) => {
    return (amount * (rate / 100) * (days / 365));
  };

  const day7Yield = calculateYield(7, apy);
  const day30Yield = calculateYield(30, apy);
  const day365Yield = calculateYield(365, apy);
  const day365Bank = calculateYield(365, bankApy);
  const diff = day365Yield - day365Bank;

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('yieldCalc.title')}</h2>
           <p className="text-text-muted max-w-2xl mx-auto text-lg">
             {t('yieldCalc.subtitle')}
           </p>
        </div>

        <div className="glass-strong rounded-3xl p-8 md:p-12 max-w-4xl mx-auto border border-border/50 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[80px] rounded-full pointer-events-none" />
          
          <div className="mb-12">
            <div className="flex justify-between items-end mb-6">
              <div>
                <label htmlFor="deposit-amount" className="block text-sm font-medium text-text-secondary mb-2 uppercase tracking-wide">{t('yieldCalc.depositAmount')}</label>
                <div className="text-4xl font-mono font-bold text-gradient flex items-center gap-1">
                  $<input 
                    id="deposit-amount"
                    type="number" 
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="bg-transparent border-none outline-none focus:ring-0 w-full min-w-[200px]"
                  />
                </div>
              </div>
              <div className="text-right hidden sm:block">
                <div className="text-sm font-medium text-text-secondary mb-1 uppercase tracking-wide">{t('yieldCalc.currentApy')}</div>
                <div className="text-3xl font-bold text-success glow-accent">{apy}%</div>
              </div>
            </div>

            <input
              type="range"
              min="1000"
              max="1000000"
              step="1000"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full h-2 bg-surface-light rounded-lg appearance-none cursor-pointer accent-primary"
            />
             <div className="flex justify-between text-xs text-text-muted mt-2 font-mono">
               <span>{t('yieldCalc.rangeMin')}</span>
               <span>{t('yieldCalc.rangeMid')}</span>
               <span>{t('yieldCalc.rangeMax')}</span>
             </div>
          </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
             {[
               { label: t('yieldCalc.7day'), value: day7Yield },
               { label: t('yieldCalc.30day'), value: day30Yield },
               { label: t('yieldCalc.1year'), value: day365Yield, highlight: true }
             ].map((period, i) => (
              <motion.div 
                key={period.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "p-6 rounded-2xl border transition-colors duration-300",
                  period.highlight 
                    ? "bg-surface border-success/40 shadow-[0_0_40px_rgba(34,197,94,0.2)]" 
                    : "bg-surface-light/50 border-border/50"
                )}
              >
                <div className="text-sm text-text-secondary mb-2 font-medium">{period.label}</div>
                <div className={cn(
                  "text-3xl font-mono font-bold",
                  period.highlight ? "text-success" : "text-text"
                )}>
                  $<AnimatedCounter end={period.value} decimals={2} duration={0.8} />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-success/10 rounded-2xl p-6 text-center border border-success/30 shadow-[0_0_40px_rgba(34,197,94,0.15)] relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-success/0 via-success/10 to-success/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            <p className="text-lg flex flex-col sm:flex-row items-center justify-center gap-3 relative z-10">
              <span className="text-success text-3xl font-bold font-mono tracking-tight flex items-center gap-1 glow-accent">
                +<AnimatedCounter end={diff} prefix="$" decimals={2} duration={1} /> 
              </span>
               <span className="text-text-secondary font-medium mt-1">
                 {t('yieldCalc.vsBankSavings')}
               </span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
