import React from 'react';
import { COLLATERAL_ASSETS } from '@/data/stats';
import { ExternalLink, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Transparency: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-text mb-2">Transparency Dashboard</h1>
        <p className="text-text-muted max-w-2xl">
          Real-time visibility into Matryo Finance's collateralization, yield sources, and protocol health.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="glass rounded-2xl p-8 border border-border flex flex-col items-center justify-center text-center">
          <div className="w-48 h-48 rounded-full border-8 border-surface-light flex flex-col items-center justify-center relative mb-4">
            <div className="absolute inset-0 rounded-full border-8 border-success border-t-transparent border-r-transparent rotate-45"></div>
            <div className="absolute inset-0 rounded-full border-8 border-success opacity-20"></div>
            <ShieldCheck size={32} className="text-success mb-2" />
            <span className="text-4xl font-mono font-bold text-text">103.5%</span>
          </div>
          <h2 className="text-xl font-bold text-text mb-1">Over-collateralized</h2>
          <p className="text-sm text-text-muted">Total protocol collateral ratio</p>
        </div>

        <div className="glass rounded-2xl p-6 border border-border lg:col-span-2 flex flex-col">
          <h2 className="text-xl font-bold text-text mb-6">Protocol Allocation</h2>
          
          <div className="flex-1 flex flex-col justify-center">
            <div className="w-full h-8 bg-surface-light rounded-full overflow-hidden flex mb-6 shadow-inner">
              <div className="h-full bg-cyan-500" style={{ width: '50%' }}></div>
              <div className="h-full bg-indigo-500" style={{ width: '30%' }}></div>
              <div className="h-full bg-violet-500" style={{ width: '20%' }}></div>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="flex items-center justify-center gap-2 mb-1">
                  <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
                  <span className="font-semibold text-text">Layer 1 (RWA)</span>
                </div>
                <p className="text-2xl font-mono font-bold text-text">50%</p>
                <p className="text-xs text-text-muted">Foundation</p>
              </div>
              <div>
                <div className="flex items-center justify-center gap-2 mb-1">
                  <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                  <span className="font-semibold text-text">Layer 2 (CeFi)</span>
                </div>
                <p className="text-2xl font-mono font-bold text-text">30%</p>
                <p className="text-xs text-text-muted">Core</p>
              </div>
              <div>
                <div className="flex items-center justify-center gap-2 mb-1">
                  <div className="w-3 h-3 rounded-full bg-violet-500"></div>
                  <span className="font-semibold text-text">Layer 3 (DeFi)</span>
                </div>
                <p className="text-2xl font-mono font-bold text-text">20%</p>
                <p className="text-xs text-text-muted">Shell</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="glass rounded-2xl p-6 border border-border overflow-hidden">
        <h2 className="text-xl font-bold text-text mb-6">Collateral Breakdown</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-border/50">
                <th className="pb-4 font-semibold text-text-muted text-sm px-4">Asset</th>
                <th className="pb-4 font-semibold text-text-muted text-sm px-4">Issuer/Protocol</th>
                <th className="pb-4 font-semibold text-text-muted text-sm px-4 text-right">TVL Allocation</th>
                <th className="pb-4 font-semibold text-text-muted text-sm px-4 text-right">Current APY</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/30">
              {COLLATERAL_ASSETS.map((asset) => (
                <tr key={asset.name} className="hover:bg-surface-light/50 transition-colors group">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div className={cn("w-1.5 h-8 rounded-full", asset.color)} />
                      <span className="font-semibold text-text group-hover:text-primary transition-colors">{asset.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-text-muted">{asset.issuer}</td>
                  <td className="py-4 px-4 text-right font-mono text-text">${(asset.tvl / 1_000_000).toFixed(1)}M</td>
                  <td className="py-4 px-4 text-right font-mono text-success">{asset.apy}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
        <a href="#dune" className="flex items-center justify-center gap-2 py-3 px-6 rounded-xl border border-border bg-surface hover:bg-surface-light transition-colors text-sm font-medium text-text">
          View on Dune Analytics <ExternalLink size={16} className="text-text-muted" />
        </a>
        <a href="#defillama" className="flex items-center justify-center gap-2 py-3 px-6 rounded-xl border border-border bg-surface hover:bg-surface-light transition-colors text-sm font-medium text-text">
          View on DefiLlama <ExternalLink size={16} className="text-text-muted" />
        </a>
      </div>
    </div>
  );
};
