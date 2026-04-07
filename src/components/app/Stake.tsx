import React, { useState } from 'react';
import { Coins, ArrowRight, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Stake: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'stake' | 'unstake'>('stake');
  const [amount, setAmount] = useState('');

  const numericAmount = parseFloat(amount) || 0;
  const receiveAmount = activeTab === 'stake' ? numericAmount / 1.05 : numericAmount * 1.05;

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-text">Stake mUSD</h1>

      <div className="glass rounded-2xl p-6 border border-border">
        {/* Tabs */}
        <div className="flex p-1 bg-surface-light rounded-xl mb-6">
          <button
            type="button"
            className={cn(
              "flex-1 py-2 text-sm font-medium rounded-lg transition-all",
              activeTab === 'stake' ? "bg-secondary text-white shadow-lg shadow-secondary/20" : "text-text-muted hover:text-text"
            )}
            onClick={() => setActiveTab('stake')}
          >
            Stake
          </button>
          <button
            type="button"
            className={cn(
              "flex-1 py-2 text-sm font-medium rounded-lg transition-all",
              activeTab === 'unstake' ? "bg-secondary text-white shadow-lg shadow-secondary/20" : "text-text-muted hover:text-text"
            )}
            onClick={() => setActiveTab('unstake')}
          >
            Unstake
          </button>
        </div>

        {activeTab === 'stake' ? (
          <div className="space-y-6">
            <div className="flex justify-between items-center bg-surface-light px-4 py-2 rounded-lg border border-border/50">
              <span className="text-sm text-text-muted">Current Exchange Rate</span>
              <span className="text-sm font-medium text-text">1 smUSD = 1.05 mUSD</span>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-sm font-medium text-text-muted">Amount to Stake</label>
                <span className="text-sm text-text-muted">Balance: 10,000.00 mUSD</span>
              </div>
              <div className="flex gap-2 bg-surface border border-border rounded-xl px-4 py-3 focus-within:border-secondary transition-colors">
                <input 
                  type="number"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="flex-1 bg-transparent text-text font-mono text-xl focus:outline-none"
                />
                <div className="flex items-center gap-2 pl-4 border-l border-border">
                  <Coins className="text-primary" size={20} />
                  <span className="font-medium text-text">mUSD</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-surface-light border border-border flex justify-between items-center">
              <div>
                <p className="text-sm text-text-muted mb-1">You will receive</p>
                <p className="text-xl font-mono font-medium text-secondary">
                  {receiveAmount.toFixed(4)} smUSD
                </p>
              </div>
              <ArrowRight className="text-secondary opacity-50" size={24} />
            </div>

            <div className="flex justify-between items-center bg-secondary/10 border border-secondary/20 px-4 py-3 rounded-xl">
              <span className="text-sm font-medium text-secondary">Current APY</span>
              <span className="text-lg font-bold text-secondary">8.42%</span>
            </div>

            <button className="w-full py-4 bg-secondary hover:bg-[#7C3AED] text-white font-semibold rounded-xl transition-colors text-lg shadow-lg shadow-secondary/20">
              Stake mUSD
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex justify-between items-center bg-surface-light px-4 py-2 rounded-lg border border-border/50">
              <span className="text-sm text-text-muted">Current Exchange Rate</span>
              <span className="text-sm font-medium text-text">1 smUSD = 1.05 mUSD</span>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-sm font-medium text-text-muted">Amount to Unstake</label>
                <span className="text-sm text-text-muted">Balance: 6,830.00 smUSD</span>
              </div>
              <div className="flex gap-2 bg-surface border border-border rounded-xl px-4 py-3 focus-within:border-secondary transition-colors">
                <input 
                  type="number"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="flex-1 bg-transparent text-text font-mono text-xl focus:outline-none"
                />
                <div className="flex items-center gap-2 pl-4 border-l border-border">
                  <Coins className="text-secondary" size={20} />
                  <span className="font-medium text-text">smUSD</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-surface-light border border-border flex justify-between items-center">
              <div>
                <p className="text-sm text-text-muted mb-1">You will receive</p>
                <p className="text-xl font-mono font-medium text-primary">
                  {receiveAmount.toFixed(2)} mUSD
                </p>
              </div>
              <ArrowRight className="text-primary opacity-50" size={24} />
            </div>

            <div className="flex items-start gap-3 p-4 bg-warning/10 border border-warning/20 rounded-xl">
              <Info className="text-warning shrink-0 mt-0.5" size={18} />
              <p className="text-sm text-warning-light">
                <strong>7-day cooldown period applies.</strong> Unstaked mUSD will be available to claim after the cooldown period ends.
              </p>
            </div>

            <button className="w-full py-4 bg-surface border border-border hover:bg-surface-light text-text font-semibold rounded-xl transition-colors text-lg">
              Unstake smUSD
            </button>
          </div>
        )}
      </div>

      <div className="glass rounded-xl p-5 border border-border space-y-3">
        <h3 className="font-semibold text-text flex items-center gap-2">
          <Info size={18} className="text-accent" /> How smUSD works
        </h3>
        <p className="text-sm text-text-muted leading-relaxed">
          smUSD is a yield-bearing token that represents your staked mUSD. The exchange rate between smUSD and mUSD grows over time as the protocol earns yield from its multi-layered strategies. You don't need to claim yield manually — holding smUSD is all you need to do.
        </p>
      </div>
    </div>
  );
};
