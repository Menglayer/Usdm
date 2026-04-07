import React from 'react';
import { StatCard } from '@/components/shared/StatCard';
import { Wallet, Coins, TrendingUp, Star, ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { USER_MOCK_DATA, MOCK_STATS } from '@/data/stats';

export const Overview: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-text">Overview</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard 
          title="mUSD Balance" 
          value={10000.00} 
          prefix="$" 
          decimals={2} 
          icon={<Wallet className="text-primary" />} 
          className="glass border-primary/20"
        />
        <StatCard 
          title="smUSD Value" 
          value={10450.12} 
          prefix="$" 
          decimals={2} 
          icon={<Coins className="text-secondary" />} 
          className="glass border-secondary/20"
        />
        <StatCard 
          title="Earned Yield" 
          value={450.12} 
          prefix="$" 
          decimals={2} 
          icon={<TrendingUp className="text-success" />} 
          className="glass border-success/20"
        />
        <StatCard 
          title="Current APY" 
          value={8.42} 
          suffix="%" 
          decimals={2} 
          icon={<Star className="text-accent" />} 
          className="glass border-accent/20"
        />
      </div>

      {/* Your Position */}
      <div className="glass rounded-2xl p-6 border border-border">
        <h2 className="text-xl font-semibold mb-6 text-text">Your Position</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div>
            <p className="text-sm text-text-muted mb-1">Unstaked mUSD</p>
            <p className="text-2xl font-mono font-medium text-text">3,170.00 <span className="text-sm text-text-muted">mUSD</span></p>
          </div>
          <div>
            <p className="text-sm text-text-muted mb-1">Staked smUSD</p>
            <p className="text-2xl font-mono font-medium text-text">6,830.00 <span className="text-sm text-text-muted">smUSD</span></p>
          </div>
          <div>
            <p className="text-sm text-text-muted mb-1">Staked Value</p>
            <p className="text-2xl font-mono font-medium text-success">$7,137.46</p>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-text-muted">Stake Ratio</span>
            <span className="text-primary font-medium">68.3% staked</span>
          </div>
          <div className="w-full bg-surface-light rounded-full h-2">
            <div className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full" style={{ width: '68.3%' }}></div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="glass rounded-2xl p-6 border border-border">
        <h2 className="text-xl font-semibold mb-4 text-text">Recent Activity</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-light transition-colors">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-success/10 rounded-full text-success">
                <ArrowDownRight size={20} />
              </div>
              <div>
                <p className="font-medium text-text">Deposited USDC</p>
                <p className="text-sm text-text-muted">2 days ago</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-mono font-medium text-text">5,000.00 USDC</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-light transition-colors">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-primary/10 rounded-full text-primary">
                <ArrowUpRight size={20} />
              </div>
              <div>
                <p className="font-medium text-text">Staked mUSD</p>
                <p className="text-sm text-text-muted">2 days ago</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-mono font-medium text-text">5,000.00 mUSD</p>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-light transition-colors">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-success/10 rounded-full text-success">
                <TrendingUp size={20} />
              </div>
              <div>
                <p className="font-medium text-text">Yield Earned</p>
                <p className="text-sm text-text-muted">1 day ago</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-mono font-medium text-success">+12.50 mUSD</p>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-light transition-colors">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-warning/10 rounded-full text-warning">
                <Star size={20} />
              </div>
              <div>
                <p className="font-medium text-text">Points Earned</p>
                <p className="text-sm text-text-muted">1 day ago</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-mono font-medium text-warning">+580 MP</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
