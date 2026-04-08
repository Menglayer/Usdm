import React from 'react';
import { PageWrapper } from '@/components/ui/PageWrapper';
import { StatCard } from '@/components/shared/StatCard';
import { Wallet, Coins, TrendingUp, Star, ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Overview: React.FC = () => {
  const { t } = useLanguage();

  return (
    <PageWrapper className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-text">{t('app.overview')}</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard 
          title={t('app.overview.musdBalance')} 
          value={10000.00} 
          prefix="$" 
          decimals={2} 
          icon={<Wallet className="text-primary" />} 
          className="glass-strong hover:scale-[1.01] transition-transform duration-300 border-primary/20"
        />
        <StatCard 
          title={t('app.overview.smusdValue')} 
          value={10450.12} 
          prefix="$" 
          decimals={2} 
          icon={<Coins className="text-secondary" />} 
          className="glass-strong hover:scale-[1.01] transition-transform duration-300 border-secondary/20"
        />
        <StatCard 
          title={t('app.overview.earnedYield')} 
          value={450.12} 
          prefix="$" 
          decimals={2} 
          icon={<TrendingUp className="text-success" />} 
          className="glass-strong hover:scale-[1.01] transition-transform duration-300 border-success/20"
        />
        <StatCard 
          title={t('app.overview.currentApy')} 
          value={28.4} 
          suffix="%" 
          decimals={2} 
          icon={<Star className="text-accent" />} 
          className="glass-strong hover:scale-[1.01] transition-transform duration-300 border-accent/20"
        />
      </div>

      {/* Your Position */}
      <div className="glass-strong hover:scale-[1.01] transition-transform duration-300 rounded-2xl p-6 border border-border">
        <h2 className="text-xl font-semibold mb-6 text-text">{t('app.overview.yourPosition')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div>
            <p className="text-sm text-text-muted mb-1">{t('app.overview.unstakedMusd')}</p>
            <p className="text-2xl font-mono font-medium text-text">3,170.00 <span className="text-sm text-text-muted">USD.萌</span></p>
          </div>
          <div>
            <p className="text-sm text-text-muted mb-1">{t('app.overview.stakedSmusd')}</p>
            <p className="text-2xl font-mono font-medium text-text">6,830.00 <span className="text-sm text-text-muted">smUSD</span></p>
          </div>
          <div>
            <p className="text-sm text-text-muted mb-1">{t('app.overview.stakedValue')}</p>
            <p className="text-2xl font-mono font-medium text-success">$7,137.46</p>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-text-muted">{t('app.overview.stakeRatio')}</span>
            <span className="text-primary font-medium">68.3% {t('app.overview.staked')}</span>
          </div>
          <div className="w-full bg-surface-light rounded-full h-2">
            <div className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full" style={{ width: '68.3%' }}></div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="glass-strong hover:scale-[1.01] transition-transform duration-300 rounded-2xl p-6 border border-border">
        <h2 className="text-xl font-semibold mb-4 text-text">{t('app.overview.recentActivity')}</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-light transition-colors">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-success/10 rounded-full text-success">
                <ArrowDownRight size={20} />
              </div>
              <div>
                <p className="font-medium text-text">{t('app.overview.depositedUsdc')}</p>
                <p className="text-sm text-text-muted">{t('app.overview.daysAgo2')}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-mono font-medium text-text">5,000.00 USDC</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-light transition-colors">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-primary/10 rounded-full text-primary glow-primary hover:scale-105 active:scale-95 transition-all">
                <ArrowUpRight size={20} />
              </div>
              <div>
                <p className="font-medium text-text">{t('app.overview.stakedMusd')}</p>
                <p className="text-sm text-text-muted">{t('app.overview.daysAgo2')}</p>
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
                <p className="font-medium text-text">{t('app.overview.yieldEarned')}</p>
                <p className="text-sm text-text-muted">{t('app.overview.daysAgo1')}</p>
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
                <p className="font-medium text-text">{t('app.overview.pointsEarned')}</p>
                <p className="text-sm text-text-muted">{t('app.overview.daysAgo1')}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-mono font-medium text-warning">+580 MP</p>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};
