import React from 'react';
import { AnimatedCounter } from '@/components/shared/AnimatedCounter';
import { Star, Gift, Crown, Trophy, CheckCircle2, Zap, ShieldCheck, Coins, Layers, Users, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

export const Points: React.FC = () => {
  const { t } = useLanguage();
  const currentPoints = 12580;
  const rank = 847;
  const points = { total: 12580, daily: 28, multiplier: 2.0 };
  
  const rewards = [
    { title: t('app.points.tokenAirdrop'), threshold: 10000, description: t('app.points.tokenAirdropDesc'), icon: Gift },
    { title: t('app.points.apyBoost'), threshold: 25000, description: t('app.points.apyBoostDesc'), icon: Zap },
    { title: t('app.points.vipAccess'), threshold: 100000, description: t('app.points.vipAccessDesc'), icon: Crown },
    { title: t('app.points.governanceVote'), threshold: 50000, description: t('app.points.governanceVoteDesc'), icon: ShieldCheck },
  ].sort((a, b) => a.threshold - b.threshold);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-text mb-2">{t('app.points.title')}</h1>
        <p className="text-text-muted max-w-2xl">
          {t('app.points.subtitle')}
        </p>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="glass rounded-2xl p-8 border border-warning/30 bg-warning/5 lg:col-span-2 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
            <Star size={120} className="text-warning" />
          </div>
          
          <h2 className="text-xl font-bold text-text mb-2 relative z-10">{t('app.points.yourBalance')}</h2>
          <div className="text-5xl md:text-7xl font-mono font-bold text-warning mb-6 relative z-10 flex items-center gap-4">
            <AnimatedCounter end={currentPoints} duration={2} separator="," /> 
            <span className="text-2xl text-warning-light mt-4">MP</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 relative z-10">
            <div className="bg-surface/80 border border-warning/20 rounded-xl p-4 backdrop-blur-sm">
              <p className="text-sm text-text-muted mb-1">{t('app.points.currentRank')}</p>
              <p className="text-2xl font-bold text-text">#{rank}</p>
            </div>
            <div className="bg-surface/80 border border-warning/20 rounded-xl p-4 backdrop-blur-sm">
              <p className="text-sm text-text-muted mb-1">{t('app.points.dailyEarning')}</p>
              <p className="text-2xl font-bold text-success">+{points.daily} MP</p>
            </div>
            <div className="bg-surface/80 border border-warning/20 rounded-xl p-4 backdrop-blur-sm">
              <p className="text-sm text-text-muted mb-1">{t('app.points.multiplier')}</p>
              <p className="text-2xl font-bold text-primary">{points.multiplier}x</p>
            </div>
          </div>
        </div>

        <div className="glass rounded-2xl p-6 border border-border flex flex-col">
          <h2 className="text-xl font-bold text-text mb-4">{t('app.points.howToEarn')}</h2>
          <div className="space-y-4 flex-1">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Coins size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-text text-sm">{t('app.points.holdMusd')}</h4>
                <p className="text-xs text-text-muted">{t('app.points.holdMusdDesc')}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                <Layers size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-text text-sm">{t('app.points.lpProvision')}</h4>
                <p className="text-xs text-text-muted">{t('app.points.lpProvisionDesc')}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0">
                <Users size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-text text-sm">{t('app.points.referrals')}</h4>
                <p className="text-xs text-text-muted">{t('app.points.referralsDesc')}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-warning/10 text-warning flex items-center justify-center shrink-0">
                <Clock size={20} />
              </div>
              <div>
                <h4 className="font-semibold text-text text-sm">{t('app.points.earlyAdopter')}</h4>
                <p className="text-xs text-text-muted">{t('app.points.earlyAdopterDesc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="glass rounded-2xl p-8 border border-border">
        <h2 className="text-2xl font-bold text-text mb-8 flex items-center gap-3">
          <Trophy className="text-warning" /> {t('app.points.rewardsTrack')}
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
