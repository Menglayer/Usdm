import React, { useState } from 'react';
import { PageWrapper } from '@/components/ui/PageWrapper';
import { ArrowDown, Coins, AlertCircle, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';

export const MintRedeem: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'mint' | 'redeem'>('mint');
  const [asset, setAsset] = useState('USDC');
  const [amount, setAmount] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [slippage, setSlippage] = useState('Auto');
  const [deadline, setDeadline] = useState('20');

  const isStable = ['USDC', 'USDT'].includes(asset);
  
  const handleAction = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <PageWrapper className="max-w-xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-text">{t('app.mintRedeem')}</h1>

      <div className="glass-strong hover:scale-[1.01] transition-transform duration-300 rounded-2xl p-6 border border-border">
        {/* Tabs and Settings */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex p-1 bg-surface-light rounded-xl flex-1">
            <button
              type="button"
              className={cn(
                "flex-1 py-2 text-sm font-medium rounded-lg transition-all",
                activeTab === 'mint' ? "bg-primary text-white shadow-lg" : "text-text-muted hover:text-text"
              )}
              onClick={() => setActiveTab('mint')}
            >
              {t('app.mintRedeem.mint')}
            </button>
            <button
              type="button"
              className={cn(
                "flex-1 py-2 text-sm font-medium rounded-lg transition-all",
                activeTab === 'redeem' ? "bg-primary text-white shadow-lg" : "text-text-muted hover:text-text"
              )}
              onClick={() => setActiveTab('redeem')}
            >
              {t('app.mintRedeem.redeem')}
            </button>
          </div>
          <button
            type="button"
            onClick={() => setShowSettings(!showSettings)}
            className={cn(
              "p-2.5 rounded-xl border border-border transition-all duration-300 glass hover:scale-105 active:scale-95",
              showSettings ? "bg-primary/20 text-primary border-primary/50" : "bg-surface-light text-text-muted hover:text-text hover:bg-surface"
            )}
            title={t('advancedSettings')}
          >
            <Settings size={20} className={cn("transition-transform duration-500", showSettings && "rotate-90")} />
          </button>
        </div>

        <AnimatePresence>
          {showSettings && (
            <motion.div
              initial={{ height: 0, opacity: 0, marginBottom: 0 }}
              animate={{ height: 'auto', opacity: 1, marginBottom: 24 }}
              exit={{ height: 0, opacity: 0, marginBottom: 0 }}
              className="overflow-hidden"
            >
              <div className="glass-panel p-5 rounded-xl border border-border space-y-4">
                <h3 className="text-sm font-semibold text-text flex items-center gap-2 mb-2">
                  <Settings size={16} className="text-primary" />
                  {t('advancedSettings')}
                </h3>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <span className="text-sm font-medium text-text-muted">{t('slippage')}</span>
                  <div className="flex items-center gap-2 bg-surface-light p-1 rounded-lg border border-border">
                    {['0.1%', '0.5%', '1.0%', 'Auto'].map((val) => (
                      <button
                        key={val}
                        type="button"
                        onClick={() => setSlippage(val)}
                        className={cn(
                          "px-3 py-1.5 text-xs font-medium rounded-md transition-all glass hover:scale-105 active:scale-95",
                          slippage === val 
                            ? "bg-primary text-white shadow-md shadow-primary/20 glow-primary" 
                            : "text-text-muted hover:text-text hover:bg-surface"
                        )}
                      >
                        {val}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-medium text-text-muted">{t('txDeadline')}</span>
                  <div className="flex items-center gap-2">
                    <input 
                      type="number" 
                      value={deadline}
                      onChange={(e) => setDeadline(e.target.value)}
                      className="w-20 bg-surface-light border border-border rounded-lg px-3 py-1.5 text-sm text-right text-text focus:outline-none focus:border-primary transition-colors glass focus:ring-1 focus:ring-primary/50"
                    />
                    <span className="text-sm text-text-muted">{t('txDeadlineUnit')}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {activeTab === 'mint' ? (
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="mint-from" className="text-sm font-medium text-text-muted">{t('app.mintRedeem.fromAsset')}</label>
              <div className="flex gap-2">
                <select 
                  id="mint-from"
                  className="bg-surface border border-border rounded-xl px-4 py-3 text-text focus:outline-none focus:border-primary transition-colors w-1/3"
                  value={asset}
                  onChange={(e) => setAsset(e.target.value)}
                >
                  <option value="USDC">USDC</option>
                  <option value="USDT">USDT</option>
                  <option value="BTC">BTC</option>
                  <option value="ETH">ETH</option>
                  <option value="SOL">SOL</option>
                </select>
                <input 
                  type="number"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="flex-1 bg-surface border border-border rounded-xl px-4 py-3 text-text font-mono text-xl focus:outline-none focus:border-primary transition-colors text-right"
                />
              </div>
            </div>

            <div className="flex justify-center -my-2 relative z-10">
              <div className="bg-surface-light p-2 rounded-full border border-border text-primary">
                <ArrowDown size={20} />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="mint-to" className="text-sm font-medium text-text-muted">{t('app.mintRedeem.toAsset')}</label>
              <div className="flex gap-2 bg-surface-light border border-border rounded-xl px-4 py-3 opacity-80">
                <div className="flex items-center gap-2 w-1/3">
                  <Coins className="text-primary" size={20} />
                  <span className="font-medium text-text">USD.萌</span>
                </div>
                <div className="flex-1 text-right font-mono text-xl text-text">
                  {amount || '0.00'}
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-surface-light border border-border flex items-start gap-3 mt-4">
              <AlertCircle className="text-accent mt-0.5 shrink-0" size={18} />
              <div className="text-sm text-text-muted">
                {isStable 
                  ? t('app.mintRedeem.stableNote')
                  : t('app.mintRedeem.volatileNote')}
              </div>
            </div>

            <button
              type="button"
              onClick={handleAction}
              className="w-full py-4 mt-6 bg-primary hover:bg-primary-light text-white font-semibold rounded-xl transition-colors text-lg shadow-lg shadow-primary/20 glow-primary hover:scale-105 active:scale-95 transition-all"
            >
              {t('app.mintRedeem.mintMusd')}
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="redeem-from" className="text-sm font-medium text-text-muted">{t('app.mintRedeem.fromMusd')}</label>
              <div className="flex gap-2">
                <div className="flex items-center gap-2 w-1/3 bg-surface border border-border rounded-xl px-4 py-3">
                  <Coins className="text-primary" size={20} />
                  <span className="font-medium text-text">USD.萌</span>
                </div>
                <input 
                  type="number"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="flex-1 bg-surface border border-border rounded-xl px-4 py-3 text-text font-mono text-xl focus:outline-none focus:border-primary transition-colors text-right"
                />
              </div>
            </div>

            <div className="flex justify-center -my-2 relative z-10">
              <div className="bg-surface-light p-2 rounded-full border border-border text-primary">
                <ArrowDown size={20} />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="redeem-to" className="text-sm font-medium text-text-muted">{t('app.mintRedeem.toAsset')}</label>
              <div className="flex gap-2">
                <select 
                  id="redeem-to"
                  className="bg-surface border border-border rounded-xl px-4 py-3 text-text focus:outline-none focus:border-primary transition-colors w-1/3"
                  value={asset}
                  onChange={(e) => setAsset(e.target.value)}
                >
                  <option value="USDC">USDC</option>
                  <option value="USDT">USDT</option>
                </select>
                <div className="flex-1 bg-surface-light border border-border rounded-xl px-4 py-3 text-right font-mono text-xl text-text opacity-80">
                  {amount || '0.00'}
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-surface-light border border-border space-y-3 mt-4">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="radio" name="redeem-type" className="text-primary focus:ring-primary h-4 w-4 bg-surface border-border" defaultChecked />
                <span className="text-sm font-medium text-text group-hover:text-primary transition-colors">{t('app.mintRedeem.instantRedeem')}</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer group">
                <input type="radio" name="redeem-type" className="text-primary focus:ring-primary h-4 w-4 bg-surface border-border" />
                <span className="text-sm font-medium text-text group-hover:text-primary transition-colors">{t('app.mintRedeem.slowRedeem')}</span>
              </label>
            </div>

            <button
              type="button"
              onClick={handleAction}
              className="w-full py-4 mt-6 bg-primary hover:bg-primary-light text-white font-semibold rounded-xl transition-colors text-lg shadow-lg shadow-primary/20 glow-primary hover:scale-105 active:scale-95 transition-all"
            >
              {t('app.mintRedeem.redeemMusd')}
            </button>
          </div>
        )}
      </div>

      {showToast && (
        <div className="fixed bottom-6 right-6 bg-surface border border-primary p-4 rounded-xl shadow-lg shadow-primary/10 animate-in fade-in slide-in-from-bottom-5">
          <p className="font-medium text-text">{t('app.mintRedeem.connectWalletTitle')}</p>
          <p className="text-sm text-text-muted">{t('app.mintRedeem.connectWalletDesc')}</p>
        </div>
      )}
    </PageWrapper>
  );
};
