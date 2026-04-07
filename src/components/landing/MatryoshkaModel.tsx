import { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, CandlestickChart, Building2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

type LayerType = 'outer' | 'middle' | 'inner' | null;

export function MatryoshkaModel() {
  const { t } = useLanguage();

  const [hoveredLayer, setHoveredLayer] = useState<LayerType>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const modelVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" as const }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-bg">
      {/* Background gradients that change based on hover state */}
      <div className="absolute inset-0 transition-opacity duration-700 pointer-events-none">
        <div className={cn("absolute inset-0 bg-violet-600/5 blur-[120px] transition-opacity duration-500", hoveredLayer === 'outer' ? 'opacity-100' : 'opacity-20')} />
        <div className={cn("absolute inset-0 bg-indigo-600/5 blur-[120px] transition-opacity duration-500", hoveredLayer === 'middle' ? 'opacity-100' : 'opacity-20')} />
        <div className={cn("absolute inset-0 bg-cyan-600/5 blur-[120px] transition-opacity duration-500", hoveredLayer === 'inner' ? 'opacity-100' : 'opacity-20')} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6 tracking-tight">
            Three layers. One dollar. <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">{t('matryoshka.titleHighlight')}</span>
          </h2>
          <p className="text-lg text-text-muted">
            Hover over the layers to see how Matryo stacks yields from different sources into a single, cohesive stablecoin.
          </p>
        </motion.div>

        {/* The Matryoshka Visual Diagram */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center mb-24"
        >
          <motion.div variants={modelVariants} className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
            {/* Outer Layer: DeFi Shell */}
            <button 
              type="button"
              className={cn(
                "absolute inset-0 rounded-[40px] md:rounded-[60px] border-2 flex flex-col items-center justify-start pt-6 md:pt-10 transition-all duration-500 cursor-crosshair z-10",
                hoveredLayer === 'outer' || !hoveredLayer 
                  ? "border-violet-500/50 bg-violet-500/10 shadow-[0_0_50px_rgba(139,92,246,0.2)]" 
                  : "border-border bg-bg/20"
              )}
              onMouseEnter={() => setHoveredLayer('outer')}
              onMouseLeave={() => setHoveredLayer(null)}
            >
              <h3 className={cn("font-bold tracking-widest uppercase transition-colors text-sm md:text-base", hoveredLayer === 'outer' || !hoveredLayer ? "text-violet-300" : "text-text-muted")}>{t('matryoshka.defiShell')}</h3>
            </button>

            {/* Middle Layer: CeFi Core */}
            <button 
              type="button"
              className={cn(
                "absolute inset-[15%] md:inset-[18%] rounded-[30px] md:rounded-[45px] border-2 flex flex-col items-center justify-start pt-6 md:pt-8 transition-all duration-500 cursor-crosshair z-20",
                hoveredLayer === 'middle' || !hoveredLayer
                  ? "border-indigo-500/60 bg-indigo-500/15 shadow-[0_0_40px_rgba(99,102,241,0.2)]"
                  : "border-border bg-bg/40"
              )}
              onMouseEnter={() => setHoveredLayer('middle')}
              onMouseLeave={() => setHoveredLayer(null)}
            >
              <h3 className={cn("font-bold tracking-widest uppercase transition-colors text-xs md:text-sm", hoveredLayer === 'middle' || !hoveredLayer ? "text-indigo-300" : "text-text-muted")}>{t('matryoshka.cefiCore')}</h3>
            </button>

            {/* Inner Layer: RWA Foundation */}
            <button 
              type="button"
              className={cn(
                "absolute inset-[30%] md:inset-[36%] rounded-[20px] md:rounded-[30px] border-2 flex flex-col items-center justify-center transition-all duration-500 cursor-crosshair z-30",
                hoveredLayer === 'inner' || !hoveredLayer
                  ? "border-cyan-400/80 bg-cyan-400/20 shadow-[0_0_30px_rgba(6,182,212,0.3)] glow-accent"
                  : "border-border bg-bg/60"
              )}
              onMouseEnter={() => setHoveredLayer('inner')}
              onMouseLeave={() => setHoveredLayer(null)}
            >
              <h3 className={cn("font-bold tracking-widest uppercase text-center transition-colors text-[10px] md:text-xs", hoveredLayer === 'inner' || !hoveredLayer ? "text-cyan-200" : "text-text-muted")}>
                RWA
                <br />
                Foundation
              </h3>
              
              {/* Core energy dot */}
              <div className="absolute center-absolute w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_15px_#67e8f9] animate-pulse" />
            </button>
          </motion.div>
        </motion.div>

        {/* 3 Info Cards side by side */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {/* Card 1: Outer Layer */}
          <motion.div 
            variants={cardVariants}
            className={cn(
              "glass p-8 rounded-3xl border transition-all duration-500 relative overflow-hidden",
              hoveredLayer === 'outer' ? "border-violet-500/50 bg-violet-950/20 shadow-[0_0_30px_rgba(139,92,246,0.15)]" : "border-border/50 hover:border-border"
            )}
            onMouseEnter={() => setHoveredLayer('outer')}
            onMouseLeave={() => setHoveredLayer(null)}
          >
            <div className="w-12 h-12 rounded-xl bg-violet-500/20 text-violet-400 flex items-center justify-center mb-6">
              <Layers size={24} />
            </div>
            <h3 className="text-xl font-bold text-text mb-2">{t('matryoshka.defiShell')}</h3>
            <p className="text-text-muted mb-6 min-h-[60px]">
              Pendle YT/PT positions, Curve LPs, and Morpho Vaults. The high-yield compounding layer.
            </p>
            <div className="flex justify-between items-center pt-6 border-t border-border/50">
              <div>
                <span className="text-xs text-text-muted uppercase block mb-1">{t('matryoshka.apyRange')}</span>
                <span className="text-violet-400 font-mono font-bold">8% - 15%</span>
              </div>
              <div>
                <span className="text-xs text-text-muted uppercase block mb-1 text-right">{t('matryoshka.riskLevel')}</span>
                <span className="text-text-secondary font-medium text-right block">{t('matryoshka.riskMedium')}</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Middle Layer */}
          <motion.div 
            variants={cardVariants}
            className={cn(
              "glass p-8 rounded-3xl border transition-all duration-500 relative overflow-hidden",
              hoveredLayer === 'middle' ? "border-indigo-500/50 bg-indigo-950/20 shadow-[0_0_30px_rgba(99,102,241,0.15)]" : "border-border/50 hover:border-border"
            )}
            onMouseEnter={() => setHoveredLayer('middle')}
            onMouseLeave={() => setHoveredLayer(null)}
          >
            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-6">
              <CandlestickChart size={24} />
            </div>
            <h3 className="text-xl font-bold text-text mb-2">{t('matryoshka.cefiCore')}</h3>
            <p className="text-text-muted mb-6 min-h-[60px]">
              Delta-neutral basis trading and funding rate arbitrage on top centralized exchanges.
            </p>
            <div className="flex justify-between items-center pt-6 border-t border-border/50">
              <div>
                <span className="text-xs text-text-muted uppercase block mb-1">{t('matryoshka.apyRange')}</span>
                <span className="text-indigo-400 font-mono font-bold">12% - 25%</span>
              </div>
              <div>
                <span className="text-xs text-text-muted uppercase block mb-1 text-right">{t('matryoshka.riskLevel')}</span>
                <span className="text-text-secondary font-medium text-right block">{t('matryoshka.riskLowMed')}</span>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Inner Layer */}
          <motion.div 
            variants={cardVariants}
            className={cn(
              "glass p-8 rounded-3xl border transition-all duration-500 relative overflow-hidden",
              hoveredLayer === 'inner' ? "border-cyan-500/50 bg-cyan-950/20 shadow-[0_0_30px_rgba(6,182,212,0.15)]" : "border-border/50 hover:border-border"
            )}
            onMouseEnter={() => setHoveredLayer('inner')}
            onMouseLeave={() => setHoveredLayer(null)}
          >
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-6">
              <Building2 size={24} />
            </div>
            <h3 className="text-xl font-bold text-text mb-2">{t('matryoshka.rwaFoundation')}</h3>
            <p className="text-text-muted mb-6 min-h-[60px]">
              US T-Bills, overcollateralized money markets, and AA-Grade corporate bonds.
            </p>
            <div className="flex justify-between items-center pt-6 border-t border-border/50">
              <div>
                <span className="text-xs text-text-muted uppercase block mb-1">{t('matryoshka.apyRange')}</span>
                <span className="text-cyan-400 font-mono font-bold">4.5% - 5.5%</span>
              </div>
              <div>
                <span className="text-xs text-text-muted uppercase block mb-1 text-right">{t('matryoshka.riskLevel')}</span>
                <span className="text-text-secondary font-medium text-right block">{t('matryoshka.riskLowest')}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
