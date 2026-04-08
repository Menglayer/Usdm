import React, { useState } from 'react';
import { PageWrapper } from '@/components/ui/PageWrapper';
import { Coins, ArrowRight, Info, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/contexts/ToastContext';

export const Stake: React.FC = () => {
  const { t } = useLanguage();
  const toast = useToast();
  const [activeTab, setActiveTab] = useState<'stake' | 'unstake'>('stake');
  const [amount, setAmount] = useState('');
  const [isLoopMode, setIsLoopMode] = useState(false);

  const numericAmount = parseFloat(amount) || 0;
  const receiveAmount = activeTab === 'stake' ? numericAmount / 1.05 : numericAmount * 1.05;

  return (
    <PageWrapper className="max-w-xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-text">{t('app.stake.title')}</h1>

      <div className="glass-strong hover:scale-[1.01] transition-transform duration-300 rounded-2xl p-6 border border-border">
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
            {t('app.stake.stake')}
          </button>
          <button
            type="button"
            className={cn(
              "flex-1 py-2 text-sm font-medium rounded-lg transition-all",
              activeTab === 'unstake' ? "bg-secondary text-white shadow-lg shadow-secondary/20" : "text-text-muted hover:text-text"
            )}
            onClick={() => setActiveTab('unstake')}
          >
            {t('app.stake.unstake')}
          </button>
        </div>

        {activeTab === 'stake' ? (
          <div className="space-y-6">
            <div className="flex justify-between items-center bg-surface-light px-4 py-2 rounded-lg border border-border/50">
              <span className="text-sm text-text-muted">{t('app.stake.exchangeRate')}</span>
              <span className="text-sm font-medium text-text">1 sUSD.萌 = 1.05 USD.萌</span>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="stake-amount" className="text-sm font-medium text-text-muted">{t('app.stake.amountToStake')}</label>
                <span className="text-sm text-text-muted">{t('app.stake.balance')}: 10,000.00 USD.萌</span>
              </div>
              <div className="flex gap-2 bg-surface border border-border rounded-xl px-4 py-3 focus-within:border-secondary transition-colors">
                <input 
                  id="stake-amount"
                  type="number"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="flex-1 bg-transparent text-text font-mono text-xl focus:outline-none"
                />
                <div className="flex items-center gap-2 pl-4 border-l border-border">
                  <Coins className="text-primary" size={20} />
                  <span className="font-medium text-text">USD.萌</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-surface-light border border-border flex justify-between items-center">
              <div>
                <p className="text-sm text-text-muted mb-1">{t('app.stake.youWillReceive')}</p>
                <p className="text-xl font-mono font-medium text-secondary">
                  {receiveAmount.toFixed(4)} sUSD.萌
                </p>
              </div>
              <ArrowRight className="text-secondary opacity-50" size={24} />
            </div>

            <div className={cn(
              "flex justify-between items-center px-4 py-3 rounded-xl border transition-all",
              isLoopMode 
                ? "bg-violet-500/10 border-violet-500/30" 
                : "bg-secondary/10 border-secondary/20"
            )}>
              <span className={cn("text-sm font-medium", isLoopMode ? "text-violet-400" : "text-secondary")}>
                {t('app.stake.currentApy')} {isLoopMode && `(${t('app.stake.loopMode')})`}
              </span>
              <span className={cn("text-lg font-bold", isLoopMode ? "text-violet-400" : "text-secondary")}>
                {isLoopMode ? "252%+" : "28.4%"}
              </span>
            </div>

            <button
              type="button"
              onClick={() => {
                const amountText = amount || numericAmount || '0'
                // Try to use i18n key 'notification_staked' safely
                let msg = t('notification_staked')
                if (msg === 'notification_staked') {
                  // key missing, fallback
                  msg = `Staked ${amountText}`
                } else {
                  msg = msg.includes('{amount}') ? msg.replace('{amount}', amountText.toString()) : `${msg} ${amountText}`
                }
                toast.success(msg, t('notification_success') ?? '')
              }}
              className="w-full py-4 bg-secondary hover:bg-[#7C3AED] text-white font-semibold rounded-xl transition-colors text-lg shadow-lg shadow-secondary/20"
            >
              {t('app.stake.stakeMusd')}
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex justify-between items-center bg-surface-light px-4 py-2 rounded-lg border border-border/50">
              <span className="text-sm text-text-muted">{t('app.stake.exchangeRate')}</span>
              <span className="text-sm font-medium text-text">1 sUSD.萌 = 1.05 USD.萌</span>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="unstake-amount" className="text-sm font-medium text-text-muted">{t('app.stake.amountToUnstake')}</label>
                <span className="text-sm text-text-muted">{t('app.stake.balance')}: 6,830.00 sUSD.萌</span>
              </div>
              <div className="flex gap-2 bg-surface border border-border rounded-xl px-4 py-3 focus-within:border-secondary transition-colors">
                <input 
                  id="unstake-amount"
                  type="number"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="flex-1 bg-transparent text-text font-mono text-xl focus:outline-none"
                />
                <div className="flex items-center gap-2 pl-4 border-l border-border">
                  <Coins className="text-secondary" size={20} />
                  <span className="font-medium text-text">sUSD.萌</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-surface-light border border-border flex justify-between items-center">
              <div>
                <p className="text-sm text-text-muted mb-1">{t('app.stake.youWillReceive')}</p>
                <p className="text-xl font-mono font-medium text-primary">
                  {receiveAmount.toFixed(2)} USD.萌
                </p>
              </div>
              <ArrowRight className="text-primary opacity-50" size={24} />
            </div>

            <div className="flex items-start gap-3 p-4 bg-warning/10 border border-warning/20 rounded-xl">
              <Info className="text-warning shrink-0 mt-0.5" size={18} />
              <p className="text-sm text-warning-light">
                <strong>{t('app.stake.cooldownWarning')}</strong> {t('app.stake.cooldownDesc')}
              </p>
            </div>

            <button type="button" className="w-full py-4 bg-surface border border-border hover:bg-surface-light text-text font-semibold rounded-xl transition-colors text-lg">
              {t('app.stake.unstakeSmusd')}
            </button>
          </div>
        )}
      </div>

      {/* Premium 1-Click Loop Feature */}
      <div className="relative overflow-hidden rounded-2xl p-6 border-2 bg-gradient-to-br from-violet-500/10 via-surface to-indigo-500/10 border-transparent">
        {/* Animated glow background */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-violet-500 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-indigo-500 rounded-full blur-3xl opacity-30 animate-pulse" />
        
        {/* Gradient border effect */}
        <div className="absolute inset-0 rounded-2xl p-0.5 bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-500 -z-10" style={{
          backgroundClip: 'padding-box',
          WebkitBackgroundClip: 'padding-box'
        }} />
        
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <Zap size={24} className="text-violet-400 animate-bounce" />
            <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              {t('app.stake.loopTitle')}
            </h3>
          </div>
          <p className="text-sm text-text-muted mb-4">
            {t('app.stake.loopDesc')}
          </p>
          
          <div className="bg-surface/50 backdrop-blur rounded-xl p-4 border border-violet-500/20 mb-4">
            <div className="text-center">
              <p className="text-xs font-medium text-violet-400 uppercase tracking-wider mb-1">{t('app.stake.loopApyLabel')}</p>
              <p className="text-3xl font-mono font-bold text-transparent bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text">
                {t('app.stake.loopApy')}
              </p>
            </div>
          </div>
          
           <button 
             type="button"
             onClick={() => {
               setIsLoopMode(!isLoopMode)
               const amountText = amount || numericAmount || ''
               const action = !isLoopMode ? 'enabled' : 'disabled'
               let msg = t('notification_loop_' + action) // e.g. 'notification_loop_enabled'
               if (msg === `notification_loop_${action}`) {
                 msg = `Loop ${action}${amountText ? ' — ' + amountText : ''}`
               }
               toast.success(msg)
             }}
             className={cn(
               "w-full py-3 px-4 font-semibold rounded-xl transition-all shadow-xl flex items-center justify-center gap-2 group",
               isLoopMode
                 ? "bg-violet-600 hover:bg-violet-700 text-white shadow-violet-500/30 hover:shadow-2xl hover:shadow-violet-500/50"
                 : "bg-gradient-to-r from-violet-500 to-indigo-500 hover:from-violet-600 hover:to-indigo-600 text-white shadow-violet-500/30 hover:shadow-2xl hover:shadow-violet-500/50"
             )}
           >
             <Zap size={18} className={cn("transition-transform", isLoopMode ? "animate-spin" : "group-hover:animate-spin")} />
              {isLoopMode ? t('app.stake.loopActive') : t('app.stake.loopEnable')}
           </button>
        </div>
      </div>

      <div className="glass-strong hover:scale-[1.01] transition-transform duration-300 rounded-xl p-5 border border-border space-y-3">
        <h3 className="font-semibold text-text flex items-center gap-2">
          <Info size={18} className="text-accent" /> {t('app.stake.howSmusdWorks')}
        </h3>
        <p className="text-sm text-text-muted leading-relaxed">
          {t('app.stake.howSmusdWorksDesc')}
        </p>
      </div>
    </PageWrapper>
  );
};
