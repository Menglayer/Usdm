import { ContentLayout } from '@/components/layout/ContentLayout';
import { AlertTriangle, TrendingDown, Clock, ShieldAlert } from 'lucide-react';

export const RiskPage = () => {
  return (
    <ContentLayout 
      title="Risk Framework" 
      subtitle="Comprehensive risk analysis, mitigation techniques, and parameters for USDM."
    >
      <div className="space-y-12">
        <section>
          <h2>Introduction to Protocol Risks</h2>
          <p>
            Decentralized finance (DeFi) protocols involve inherent risks. At USDM, transparency is 
            our highest priority. We want all users, whether retail or institutional, to understand 
            exactly how the protocol behaves under extreme market conditions, including black swan 
            events.
          </p>
          <div className="p-6 bg-red-500/10 border border-red-500/20 rounded-xl mt-6 flex items-start gap-4">
            <AlertTriangle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold text-red-500 m-0 mb-2">Notice</h3>
              <p className="m-0 text-text-secondary text-sm">
                No DeFi protocol is entirely risk-free. Please do not supply capital you cannot 
                afford to lose. Always perform your own research and review our smart contracts.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2>Key Risk Vectors</h2>
          
          <div className="grid gap-6 mt-8">
            <div className="p-6 bg-surface border border-border rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <TrendingDown className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold m-0">Funding Rate Risk</h3>
              </div>
              <p className="text-text-muted text-sm m-0">
                USDM relies on delta-neutral positions to maintain its peg. If funding rates on perpetual 
                exchanges turn deeply negative and remain there for extended periods, the yield generated 
                by USDM may decrease, potentially requiring the protocol to utilize its insurance fund to 
                maintain the peg.
              </p>
            </div>

            <div className="p-6 bg-surface border border-border rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <ShieldAlert className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold m-0">Smart Contract Risk</h3>
              </div>
              <p className="text-text-muted text-sm m-0">
                While our contracts are heavily audited and monitored 24/7, there is always a non-zero 
                chance of an exploit or vulnerability in the core logic, or in the decentralized 
                exchanges (like Uniswap or GMX) where USDM deploys capital.
              </p>
            </div>

            <div className="p-6 bg-surface border border-border rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold m-0">Liquidity & Redemption Risk</h3>
              </div>
              <p className="text-text-muted text-sm m-0">
                During times of extreme market volatility, withdrawal queues might experience delays if 
                on-chain liquidity is constrained. The protocol mitigates this by maintaining a robust 
                buffer of idle stablecoins (USDC/USDT) to handle immediate redemptions.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2>Mitigation Strategies</h2>
          <p>
            To address these vectors, USDM implements several layers of defense:
          </p>
          <ul className="space-y-4">
            <li>
              <strong>Insurance Fund:</strong> A dedicated pool of protocol-owned liquidity explicitly 
              designed to cover negative funding rate periods.
            </li>
            <li>
              <strong>Circuit Breakers:</strong> Automated pauses on minting and burning if oracle 
              deviations exceed 2% or if anomalous transaction patterns are detected.
            </li>
            <li>
              <strong>Diversified Venues:</strong> Protocol capital is spread across multiple top-tier 
              exchanges to prevent a single point of failure.
            </li>
          </ul>
        </section>
      </div>
    </ContentLayout>
  );
};
