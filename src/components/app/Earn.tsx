import React from 'react';
import { EARN_STRATEGIES } from '@/data/stats';
import { ShieldAlert, ArrowRight, Zap, Target, Layers } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Earn: React.FC = () => {
  const getRiskBadge = (risk: string) => {
    switch (risk.toLowerCase()) {
      case 'low': return 'bg-success/20 text-success border-success/30';
      case 'medium': return 'bg-warning/20 text-warning border-warning/30';
      case 'medium-high': return 'bg-orange-500/20 text-orange-500 border-orange-500/30';
      default: return 'bg-surface-light text-text-muted border-border';
    }
  };

  const getAccentColor = (layer: string) => {
    if (layer.includes('1')) return 'cyan';
    if (layer.includes('2')) return 'indigo';
    if (layer.includes('3')) return 'violet';
    return 'primary';
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-text mb-2">Earn Strategies</h1>
        <p className="text-text-muted max-w-2xl">
          Matryo Finance aggregates yield across multiple layers of risk and complexity to deliver a sustainable blended APY for smUSD holders.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {EARN_STRATEGIES.map((strategy, index) => {
          const accentColor = getAccentColor(strategy.layer);
          
          return (
            <div key={strategy.name} className="glass rounded-2xl p-6 border border-border flex flex-col relative overflow-hidden group hover:border-border/80 transition-colors">
              {/* Accents */}
              <div className={cn(
                "absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-20 pointer-events-none transition-opacity group-hover:opacity-40",
                accentColor === 'cyan' && "bg-cyan-500",
                accentColor === 'indigo' && "bg-indigo-500",
                accentColor === 'violet' && "bg-violet-500",
              )} />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-border to-transparent" />

              <div className="flex justify-between items-start mb-6 relative z-10">
                <div>
                  <p className="text-xs font-bold tracking-wider text-text-muted uppercase mb-1">{strategy.layer}</p>
                  <h3 className="text-xl font-bold text-text flex items-center gap-2">
                    {index === 0 && <ShieldAlert size={18} className="text-cyan-400" />}
                    {index === 1 && <Target size={18} className="text-indigo-400" />}
                    {index === 2 && <Zap size={18} className="text-violet-400" />}
                    {strategy.name}
                  </h3>
                </div>
                <div className={cn("px-2 py-1 rounded-md text-xs font-medium border", getRiskBadge(strategy.risk))}>
                  {strategy.risk} Risk
                </div>
              </div>

              <div className="mb-6 relative z-10">
                <p className="text-sm text-text-muted mb-4 line-clamp-2">
                  {strategy.description}
                </p>
                <div className="bg-surface-light rounded-xl p-4 border border-border">
                  <div className="text-sm text-text-muted mb-1">Target APY</div>
                  <div className="text-2xl font-mono font-bold text-text">
                    {strategy.apy}
                  </div>
                </div>
              </div>

              <div className="flex-1 mb-6 relative z-10">
                <h4 className="text-sm font-semibold text-text mb-3">Core Strategies:</h4>
                <ul className="space-y-2">
                  {strategy.strategies.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-text-muted">
                      <Layers size={16} className="text-primary/50 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full mt-auto py-3 px-4 border border-border hover:bg-surface-light text-text font-medium rounded-xl transition-colors flex items-center justify-center gap-2 relative z-10">
                Learn More <ArrowRight size={16} />
              </button>
            </div>
          );
        })}
      </div>

      <div className="glass rounded-2xl p-6 border border-primary/20 bg-primary/5 flex flex-col sm:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="text-xl font-bold text-text mb-1 flex items-center gap-2">
            <Zap size={20} className="text-primary" /> Maximize Your Yield
          </h3>
          <p className="text-sm text-text-muted">
            By staking your mUSD, you gain exposure to all three layers of yield simultaneously.
          </p>
        </div>
        <div className="bg-surface border border-primary/30 px-6 py-4 rounded-xl text-center shrink-0 w-full sm:w-auto">
          <p className="text-xs font-medium text-primary uppercase tracking-wider mb-1">Combined APY</p>
          <p className="text-3xl font-mono font-bold text-text">up to 15%</p>
        </div>
      </div>
    </div>
  );
};
