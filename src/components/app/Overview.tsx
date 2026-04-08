import React from 'react';
import { PageWrapper } from '@/components/ui/PageWrapper';
import { StatCard } from '@/components/shared/StatCard';
import { Wallet, Coins, TrendingUp, Star, ArrowUpRight, Activity } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const chartData = [
  { name: 'Jan', value: 4000, apy: 22.4 },
  { name: 'Feb', value: 5000, apy: 23.1 },
  { name: 'Mar', value: 4800, apy: 24.5 },
  { name: 'Apr', value: 6200, apy: 25.2 },
  { name: 'May', value: 7500, apy: 26.8 },
  { name: 'Jun', value: 8500, apy: 27.5 },
  { name: 'Jul', value: 10450.12, apy: 28.4 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } }
};

export const Overview: React.FC = () => {
  const { t } = useLanguage();

  return (
    <PageWrapper className="space-y-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        <motion.h1 variants={itemVariants} className="text-3xl font-bold tracking-tight text-text">
          {t('app.overview')}
        </motion.h1>

        {/* Stats Grid */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
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
        </motion.div>

        {/* Middle Row: Chart & Recent Activity */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Portfolio Performance Chart */}
          <motion.div variants={itemVariants} className="xl:col-span-2 glass-strong hover:scale-[1.01] transition-transform duration-300 rounded-2xl p-6 border border-border flex flex-col min-h-[400px]">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-text">{t('app.overview.portfolioPerformance')}</h2>
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1 text-sm text-success bg-success/10 px-3 py-1 rounded-full border border-success/20">
                  <TrendingUp size={14} /> +28.4% APY
                </span>
              </div>
            </div>
            
            <div className="flex-1 w-full h-full min-h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                  <XAxis dataKey="name" stroke="rgba(255,255,255,0.4)" tick={{fill: 'rgba(255,255,255,0.4)', fontSize: 12}} tickLine={false} axisLine={false} dy={10} />
                  <YAxis stroke="rgba(255,255,255,0.4)" tick={{fill: 'rgba(255,255,255,0.4)', fontSize: 12}} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} dx={-10} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'rgba(15, 23, 42, 0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', backdropFilter: 'blur(10px)' }}
                    itemStyle={{ color: '#fff', fontWeight: 500 }}
                    formatter={(value: any) => [`$${value.toLocaleString()}`, t('app.overview.tooltipValue')]}
                  />
                  <Area type="monotone" dataKey="value" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div variants={itemVariants} className="glass-strong hover:scale-[1.01] transition-transform duration-300 rounded-2xl p-6 border border-border flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-text">{t('app.overview.recentActivity') || 'Recent Activity'}</h2>
            </div>
            <div className="space-y-3 flex-1 overflow-y-auto">
              <div className="flex items-center justify-between p-3 rounded-xl bg-surface-light/30 border border-transparent hover:border-border transition-colors">
                <div className="flex items-center gap-4">
                  <div className="p-2.5 bg-primary/10 rounded-full text-primary glow-primary">
                    <ArrowUpRight size={18} />
                  </div>
                  <div>
                    <p className="font-medium text-text text-sm">{t('app.overview.stakedAmount')}</p>
                    <p className="text-xs text-text-muted mt-0.5">{t('app.overview.justNow')}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 rounded-xl bg-surface-light/30 border border-transparent hover:border-border transition-colors">
                <div className="flex items-center gap-4">
                  <div className="p-2.5 bg-accent/10 rounded-full text-accent glow-accent">
                    <Activity size={18} />
                  </div>
                  <div>
                    <p className="font-medium text-text text-sm">{t('app.overview.activatedLoop')}</p>
                    <p className="text-xs text-text-muted mt-0.5">{t('app.overview.hoursAgo')}</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-surface-light/30 border border-transparent hover:border-border transition-colors">
                <div className="flex items-center gap-4">
                  <div className="p-2.5 bg-success/10 rounded-full text-success glow-success">
                    <TrendingUp size={18} />
                  </div>
                  <div>
                    <p className="font-medium text-text text-sm">{t('app.overview.yieldEarned')}</p>
                    <p className="text-xs text-text-muted mt-0.5">{t('app.overview.yesterday')}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-mono font-medium text-success text-sm">+12.50 USD.萌</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-surface-light/30 border border-transparent hover:border-border transition-colors">
                <div className="flex items-center gap-4">
                  <div className="p-2.5 bg-warning/10 rounded-full text-warning glow-warning">
                    <Star size={18} />
                  </div>
                  <div>
                    <p className="font-medium text-text text-sm">{t('app.overview.pointsEarned')}</p>
                    <p className="text-xs text-text-muted mt-0.5">{t('app.overview.yesterday')}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-mono font-medium text-warning text-sm">+580 MP</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Your Position (moved to bottom) */}
        <motion.div variants={itemVariants} className="glass-strong hover:scale-[1.01] transition-transform duration-300 rounded-2xl p-6 border border-border">
          <h2 className="text-xl font-semibold mb-6 text-text">{t('app.overview.yourPosition')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div>
              <p className="text-sm text-text-muted mb-1">{t('app.overview.unstakedMusd')}</p>
              <p className="text-2xl font-mono font-medium text-text">3,170.00 <span className="text-sm text-text-muted">USD.萌</span></p>
            </div>
            <div>
              <p className="text-sm text-text-muted mb-1">{t('app.overview.stakedSmusd')}</p>
              <p className="text-2xl font-mono font-medium text-text">6,830.00 <span className="text-sm text-text-muted">{t('app.overview.unitSmusd')}</span></p>
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
            <div className="w-full bg-surface-light rounded-full h-2 overflow-hidden">
              <motion.div 
                className="bg-gradient-to-r from-primary to-secondary h-full rounded-full" 
                initial={{ width: 0 }}
                animate={{ width: '68.3%' }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </PageWrapper>
  );
};
