import { ContentLayout } from '@/components/layout/ContentLayout';
import { motion } from 'framer-motion';

export const DocsPage = () => {
  return (
    <ContentLayout 
      title="Documentation" 
      subtitle="Comprehensive guides and technical documentation for the USDM Protocol."
    >
      <div className="space-y-12">
        <section>
          <h2>Introduction</h2>
          <p>
            USDM is a decentralized, yield-bearing stablecoin built on robust cryptographic principles 
            and overcollateralized assets. Our protocol ensures 1:1 parity with the US Dollar while 
            passively generating yield for holders through deep liquidity provision and secured 
            lending markets.
          </p>
          <div className="bg-surface border border-border p-6 rounded-lg mt-6">
            <h3 className="text-xl font-bold mb-2">Key Features</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>Delta-Neutral Yield:</strong> Sustainable APY derived from market-neutral strategies.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>Instant Minting:</strong> Zero-slippage conversions between approved collaterals.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>Censorship Resistant:</strong> Fully decentralized smart contracts with no admin keys.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>Real-Time Audits:</strong> On-chain proof of reserves updated block-by-block.</span>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2>Architecture Overview</h2>
          <p>
            The protocol operates through a series of interconnected smart contracts that manage 
            collateral vaults, minting logic, and yield distribution. The Core Engine interacts 
            with decentralized price oracles (Chainlink) to ensure accurate collateral valuation.
          </p>
          <pre><code>{`// Example integration snippet
import { USDM } from '@usdm/sdk';

const protocol = new USDM(provider);
const balance = await protocol.getBalance(userAddress);
const yieldEarned = await protocol.getClaimableYield(userAddress);

console.log(\`Balance: \${balance} USDM\`);
console.log(\`Unclaimed Yield: \${yieldEarned} USDM\`);`}</code></pre>
        </section>

        <section>
          <h2>Getting Started</h2>
          <p>
            Developers can easily integrate USDM into their decentralized applications using our 
            TypeScript SDK or by interacting directly with the smart contracts on Ethereum, 
            Arbitrum, and Optimism.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <a href="#" className="block p-6 bg-surface/50 border border-border hover:border-primary/50 rounded-xl transition-colors no-underline group">
              <h4 className="text-primary group-hover:text-secondary transition-colors mb-2 mt-0">Smart Contracts →</h4>
              <p className="text-sm text-text-muted mb-0">Contract addresses and ABIs for all supported networks.</p>
            </a>
            <a href="#" className="block p-6 bg-surface/50 border border-border hover:border-primary/50 rounded-xl transition-colors no-underline group">
              <h4 className="text-primary group-hover:text-secondary transition-colors mb-2 mt-0">API Reference →</h4>
              <p className="text-sm text-text-muted mb-0">REST and GraphQL endpoints for historical data.</p>
            </a>
          </div>
        </section>
      </div>
    </ContentLayout>
  );
};
