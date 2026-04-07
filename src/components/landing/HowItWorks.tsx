import { motion } from 'framer-motion';
import { ArrowRight, Wallet, Layers, LineChart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

export function HowItWorks() {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, x: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  const steps = [
    {
      num: "01",
      title: "Deposit",
      desc: "Deposit USDT, USDC, or overcollateralize with BTC/ETH/SOL to mint mUSD",
      icon: Wallet,
      color: "cyan"
    },
    {
      num: "02",
      title: "Stake",
      desc: "Stake mUSD to receive smUSD — your yield-bearing position",
      icon: Layers,
      color: "indigo"
    },
    {
      num: "03",
      title: "Earn",
      desc: "Auto-compounding daily. 80% of yield flows directly to you.",
      icon: LineChart,
      color: "violet"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-bg relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6 tracking-tight">
            Get started in <span className="text-gradient">{t('howItWorks.titleHighlight')}</span>
          </h2>
          <p className="text-lg text-text-muted">
            From stablecoins to stacked yields in minutes. We handle the complexity, you keep the returns.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 relative"
        >
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-24 left-[15%] right-[15%] h-px bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-violet-500/20 z-0" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div 
                key={step.num}
                variants={itemVariants}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                {/* Number Circle */}
                <div className={cn(
                  "w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold font-mono mb-8 relative border-2 transition-transform duration-500 group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]",
                  step.color === 'cyan' && "bg-cyan-950/50 border-cyan-500/50 text-cyan-400",
                  step.color === 'indigo' && "bg-indigo-950/50 border-indigo-500/50 text-indigo-400",
                  step.color === 'violet' && "bg-violet-950/50 border-violet-500/50 text-violet-400"
                )}>
                  {step.num}
                  {/* Inner glow dot */}
                  <div className={cn(
                    "absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-bg bg-current opacity-0 group-hover:opacity-100 transition-opacity"
                  )} />
                </div>

                {/* Card Content */}
                <div className="glass p-8 rounded-3xl border border-border/50 w-full h-full hover:border-border transition-colors relative overflow-hidden">
                  <div className={cn(
                    "absolute top-0 right-0 w-32 h-32 blur-[60px] opacity-20 pointer-events-none transition-opacity group-hover:opacity-40",
                    step.color === 'cyan' && "bg-cyan-500",
                    step.color === 'indigo' && "bg-indigo-500",
                    step.color === 'violet' && "bg-violet-500"
                  )} />
                  
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Icon className={cn(
                      "w-6 h-6",
                      step.color === 'cyan' && "text-cyan-400",
                      step.color === 'indigo' && "text-indigo-400",
                      step.color === 'violet' && "text-violet-400"
                    )} />
                    <h3 className="text-2xl font-bold text-text">{step.title}</h3>
                  </div>
                  
                  <p className="text-text-muted leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Arrow (Mobile Only) */}
                {index < steps.length - 1 && (
                  <div className="md:hidden text-white/20 my-6">
                    <ArrowRight className="w-8 h-8 rotate-90" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
