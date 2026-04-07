import React from 'react';
import { AnimatedCounter } from '@/components/shared/AnimatedCounter';
import { Star, Gift, Crown, Trophy, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Points: React.FC = () => {
  const currentPoints = 12580;
  const rank = 847;
  const points = { total: 12580, daily: 28, multiplier: 2.0 };
  
  const rewards = [
    { title: 'Token Airdrop', threshold: 10000, description: 'Guaranteed allocation of protocol token', icon: Gift },
    { title: 'APY Boost +1%', threshold: 25000, description: 'Earn an extra 1% APY on all staked assets', icon: Zap },
    { title: 'VIP Strategy Access', threshold: 100000, description: 'Exclusive access to high-yield Layer 3 vaults', icon: Crown },
    { title: 'Governance Vote', threshold: 50000, description: '1.5x voting power in protocol decisions', icon: ShieldCheck },
  ].sort((a, b) => a.threshold - b.threshold);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-text mb-2">Matryoshka Points</h1>
        <p className="text-text-muted max-w-2xl">
          Earn points for participating in the Matryo ecosystem. Points determine your rank, unlock exclusive rewards, and convert to future protocol tokens.
        </p>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="glass rounded-2xl p-8 border border-warning/30 bg-warning/5 lg:col-span-2 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <Star size={120} className="text-warning" />
          </div>
          
          <h2 className="text-xl font-bold text-text mb-2 relative z-10">Your Points Balance</h2>
          <div className="text-5xl md:text-7xl font-mono font-bold text-warning mb-6 relative z-10 flex items-center gap-4">
            <AnimatedCounter end={currentPoints} duration={2} separator="," /> 
            <span className="text-2xl text-warning-light mt-4">MP</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 relative z-10">
            <div className="bg-surface/80 border border-warning/20 rounded-xl p-4 backdrop-blur-sm">
              <p className="text-sm text-text-muted mb-1">Current Rank</p>
              <p className="text-2xl font-bold text-text">#{rank}</p>
            </div>
            <div className="bg-surface/80 border border-warning/20 rounded-xl p-4 backdrop-blur-sm">
              <p className="text-sm text-text-muted mb-1">Daily Earning</p>
              <p className="text-2xl font-bold text-success">+{points.daily} MP</p>
            </div>
            <div className="bg-surface/80 border border-warning/20 rounded-xl p-4 backdrop-blur-sm">
              <p className="text-sm text-text-muted mb-1">Multiplier</p>
              <p className="text-2xl font-bold text-primary">{points.multiplier}x</p>
            </div>
          </div>
        </div>

        <div className="glass rounded-2xl p-6 border border-border flex flex-col">
          <h2 className="text-xl font-bold text-text mb-4">How to Earn</h2>
          <div className="space-y-4 flex-1">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Coins size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-text text-sm">Hold mUSD/smUSD</h4>
                <p className="text-xs text-text-muted">1 MP per $1 value per day</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                <Layers size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-text text-sm">LP Provision</h4>
                <p className="text-xs text-text-muted">3x multiplier on DEX pools</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0">
                <Users size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-text text-sm">Referrals</h4>
                <p className="text-xs text-text-muted">10% of referee earnings</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-warning/10 text-warning flex items-center justify-center shrink-0">
                <Clock size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-text text-sm">Early Adopter</h4>
                <p className="text-xs text-text-muted">2x multiplier first 90 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="glass rounded-2xl p-8 border border-border">
        <h2 className="text-2xl font-bold text-text mb-8 flex items-center gap-3">
          <Trophy className="text-warning" /> Rewards Track
        </h2>

        <div className="space-y-8">
          {rewards.map((reward, index) => {
            const isUnlocked = currentPoints >= reward.threshold;
            const progress = isUnlocked ? 100 : Math.min(100, (currentPoints / reward.threshold) * 100);
            
            return (
              <div key={reward.title} className="relative">
                {/* Connector Line */}
                {index < rewards.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-[-2rem] w-px bg-border z-0" />
                )}
                
                <div className="flex gap-6 relative z-10">
                  <div className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-lg",
                    isUnlocked ? "bg-warning text-surface" : "bg-surface-light border-2 border-border text-text-muted"
                  )}>
                    {isUnlocked ? <CheckCircle2 size={24} /> : <reward.icon size={20} />}
                  </div>
                  
                  <div className="flex-1 pt-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className={cn("text-lg font-bold", isUnlocked ? "text-text" : "text-text-muted")}>
                          {reward.title}
                        </h3>
                        <p className="text-sm text-text-muted">{reward.description}</p>
                      </div>
                      <div className="text-right">
                        <span className="font-mono font-medium text-warning">
                          {reward.threshold.toLocaleString()} MP
                        </span>
                      </div>
                    </div>
                    
                    <div className="h-2 w-full bg-surface-light rounded-full overflow-hidden mt-3">
                      <div 
                        className={cn(
                          "h-full transition-all duration-1000",
                          isUnlocked ? "bg-warning" : "bg-primary"
                        )}
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Missing icons for the file
import { Zap, ShieldCheck, Coins, Layers, Users, Clock } from 'lucide-react';
