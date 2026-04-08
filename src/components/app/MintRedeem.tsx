import React, { useState } from 'react';
import { PageWrapper } from '@/components/ui/PageWrapper';
import { ArrowDown, Coins, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

export const MintRedeem: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'mint' | 'redeem'>('mint');
  const [asset, setAsset] = useState('USDC');
  const [amount, setAmount] = useState('');
  const [showToast, setShowToast] = useState(false);

  const isStable = ['USDC', 'USDT'].includes(asset);
  
  const handleAction = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <PageWrapper className="max-w-xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-text">{t('app.mintRedeem')}</h1>

      <div className="glass-strong hover:scale-[1.01] transition-transform duration-300 rounded-2xl p-6 border border-border">
        {/* Tabs */}
        <div className="flex p-1 bg-surface-light rounded-xl mb-6">
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
