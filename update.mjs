import fs from 'fs';
import path from 'path';

function replaceClasses(content) {
  let s = content;
  // Light mode adaptations
  // Except text-white inside colored backgrounds, but since we just have typical replacements, 
  // we can use regex that targets classes.
  // We'll replace exact class names.
  
  const replacements = [
    // We only replace exact words inside quotes or class strings
    [/\btext-white\/90\b/g, 'text-text'],
    [/\btext-white\/80\b/g, 'text-text-secondary'],
    [/\btext-white\/70\b/g, 'text-text-secondary'],
    [/\btext-white\/60\b/g, 'text-text-muted'],
    [/\btext-white\/50\b/g, 'text-text-muted'],
    [/\btext-white\/40\b/g, 'text-text-muted'],
    [/\btext-white\/30\b/g, 'text-text-muted'],
    [/\bborder-white\/10\b/g, 'border-border'],
    [/\bborder-white\/5\b/g, 'border-border/50'],
  ];
  
  for (const [pattern, replacement] of replacements) {
    s = s.replace(pattern, replacement);
  }
  
  // Specific handling for bg-black
  s = s.replace(/\bbg-black\/40\b/g, 'bg-bg/40');
  s = s.replace(/\bbg-black\/20\b/g, 'bg-bg/20');
  s = s.replace(/\bbg-black\/10\b/g, 'bg-bg/10');
  s = s.replace(/\bbg-black\/5\b/g, 'bg-bg/5');
  s = s.replace(/\bbg-black\b/g, 'bg-bg');
  
  // Replace text-white that are NOT inside button colored backgrounds.
  // E.g., not following `bg-indigo-600 text-white`.
  // We'll just replace \btext-white\b, but with a complex regex or a callback
  s = s.replace(/className="([^"]+)"/g, (match, classes) => {
    let clsArr = classes.split(/\s+/);
    if (clsArr.includes('text-white')) {
      const isColoredBg = clsArr.some(c => 
        c.startsWith('bg-') && !c.startsWith('bg-black') && !c.startsWith('bg-white') && !c.startsWith('bg-transparent') && !c.startsWith('bg-white/') && !c.startsWith('bg-black/') && !c.startsWith('bg-gray-') && !c.startsWith('bg-surface') && !c.startsWith('bg-bg')
      );
      if (!isColoredBg) {
        clsArr = clsArr.map(c => c === 'text-white' ? 'text-text' : c);
      }
    }
    return `className="${clsArr.join(' ')}"`;
  });
  
  s = s.replace(/className=\{`([^`]+)`\}/g, (match, classes) => {
    let clsArr = classes.split(/\s+/);
    if (clsArr.includes('text-white')) {
      const isColoredBg = clsArr.some(c => 
        c.startsWith('bg-') && !c.startsWith('bg-black') && !c.startsWith('bg-white') && !c.startsWith('bg-transparent') && !c.startsWith('bg-white/') && !c.startsWith('bg-black/') && !c.startsWith('bg-gray-') && !c.startsWith('bg-surface') && !c.startsWith('bg-bg')
      );
      if (!isColoredBg) {
        clsArr = clsArr.map(c => c === 'text-white' ? 'text-text' : c);
      }
    }
    return `className={\`${clsArr.join(' ')}\`}`;
  });

  return s;
}

function addImportAndHook(content) {
  if (!content.includes('useLanguage')) {
    const importMatch = content.match(/import .* from ['"].*['"];\n/g);
    const lastImportMatch = importMatch ? importMatch[importMatch.length - 1] : '';
    const lastImportIndex = content.lastIndexOf(lastImportMatch) + lastImportMatch.length;
    
    content = content.slice(0, lastImportIndex) + 
      `import { useLanguage } from '@/contexts/LanguageContext';\n` + 
      content.slice(lastImportIndex);
  }
  
  if (!content.includes('const { t } = useLanguage()')) {
    content = content.replace(/(export default function \w+\([^)]*\)\s*\{|export const \w+\s*=\s*\([^)]*\)\s*=>\s*\{|export function \w+\([^)]*\)\s*\{)/, `$1\n  const { t } = useLanguage();\n`);
  }
  
  return content;
}

const files = {
  'Hero.tsx': (content) => {
    content = content.replace(/"Every Layer"/g, `{t('hero.title.line1')}`);
    content = content.replace(/<span className="text-white"> Compounds<\/span>/g, `<span className="text-text">{t('hero.title.line2')}</span>`);
    content = content.replace(/" Compounds"/g, `{t('hero.title.line2')}`);
    // Replace the subtitle paragraph: The Matryoshka model maximizes capital efficiency...
    content = content.replace(/<p className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto leading-relaxed">\s*The Matryoshka model maximizes capital efficiency by layering DeFi yields, CeFi basis trades, and US Treasury returns into a single, highly liquid stablecoin.\s*<\/p>/g, `<p className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto leading-relaxed">\n          {t('hero.subtitle')}\n        </p>`);
    content = content.replace(/>Launch App</g, `>{t('hero.launchApp')}<`);
    content = content.replace(/>Read Docs</g, `>{t('hero.readDocs')}<`);
    content = content.replace(/"Total Value Locked"/g, `{t('hero.stat.tvl')}`);
    content = content.replace(/"mUSD Supply"/g, `{t('hero.stat.supply')}`);
    content = content.replace(/"smUSD APY"/g, `{t('hero.stat.apy')}`);
    content = content.replace(/"Protocol Revenue"/g, `{t('hero.stat.revenue')}`);
    return content;
  },
  'ProblemStatement.tsx': (content) => {
    content = content.replace(/>Stablecoins were never meant to </g, `>{t('problem.title')} <`);
    content = content.replace(/>sit idle\.<\/span>/g, `>{t('problem.titleHighlight')}</span>`);
    content = content.replace(/>The Broken Model</g, `>{t('problem.brokenModel')}<`);
    content = content.replace(/Today, fiat-backed stablecoins capture <span className="text-white">\$6B\+ annually<\/span> in risk-free yield from user deposits, keeping 100% of the profits while users get nothing but the convenience of a digital dollar./g, `{t('problem.brokenModelDesc')}`);
    content = content.replace(/>The Matryo Solution</g, `>{t('problem.solution')}<`);
    content = content.replace(/We believe yield belongs to the users who create the liquidity. By tokenizing the underlying yield generated from the collateral, we transform the stablecoin from a static asset into a <strong>dynamic wealth-building tool<\/strong>./g, `{t('problem.solutionDesc')}`);
    return content;
  },
  'MatryoshkaModel.tsx': (content) => {
    content = content.replace(/>Three layers\. One dollar\.</g, `>{t('matryoshka.title')}<`);
    content = content.replace(/>Infinite potential\.<\/span>/g, `>{t('matryoshka.titleHighlight')}</span>`);
    content = content.replace(/<p className="text-xl text-text-secondary max-w-2xl mx-auto">\s*Like a Russian nesting doll, every mUSD holds multiple layers of yield generation underneath its 1:1 USD peg.\s*<\/p>/g, `<p className="text-xl text-text-secondary max-w-2xl mx-auto">\n          {t('matryoshka.subtitle')}\n        </p>`);
    content = content.replace(/>DeFi Shell</g, `>{t('matryoshka.defiShell')}<`);
    content = content.replace(/>CeFi Core</g, `>{t('matryoshka.cefiCore')}<`);
    content = content.replace(/>RWA Foundation</g, `>{t('matryoshka.rwaFoundation')}<`);
    content = content.replace(/>RWA<br \/>Foundation</g, `>{t('matryoshka.rwaFoundation')}<`);
    content = content.replace(/<p className="text-text-muted">Over-collateralized lending and liquidity provisioning across blue-chip DeFi protocols\.<\/p>/g, `<p className="text-text-muted">{t('matryoshka.defiDesc')}</p>`);
    content = content.replace(/<p className="text-text-muted">Market-neutral funding rate arbitrage and basis trades on major centralized exchanges\.<\/p>/g, `<p className="text-text-muted">{t('matryoshka.cefiDesc')}</p>`);
    content = content.replace(/<p className="text-text-muted">Direct allocation into short-term US Treasuries and cash equivalents for baseline yield\.<\/p>/g, `<p className="text-text-muted">{t('matryoshka.rwaDesc')}</p>`);
    content = content.replace(/>APY Range</g, `>{t('matryoshka.apyRange')}<`);
    content = content.replace(/>Risk Level</g, `>{t('matryoshka.riskLevel')}<`);
    content = content.replace(/>Medium</g, `>{t('matryoshka.riskMedium')}<`);
    content = content.replace(/>Low\/Med</g, `>{t('matryoshka.riskLowMed')}<`);
    content = content.replace(/>Lowest</g, `>{t('matryoshka.riskLowest')}<`);
    return content;
  },
  'HowItWorks.tsx': (content) => {
    content = content.replace(/>Get started in </g, `>{t('howItWorks.title')} <`);
    content = content.replace(/>three steps<\/span>/g, `>{t('howItWorks.titleHighlight')}</span>`);
    content = content.replace(/<p className="text-xl text-text-secondary max-w-2xl mx-auto">\s*From fiat to full yield-bearing potential in minutes.\s*<\/p>/g, `<p className="text-xl text-text-secondary max-w-2xl mx-auto">\n          {t('howItWorks.subtitle')}\n        </p>`);
    content = content.replace(/>Mint mUSD</g, `>{t('howItWorks.step1.title')}<`);
    content = content.replace(/>Deposit USDC or USDT to mint mUSD at a 1:1 ratio. No fees, no slippage.</g, `>{t('howItWorks.step1.desc')}<`);
    content = content.replace(/>Stake for smUSD</g, `>{t('howItWorks.step2.title')}<`);
    content = content.replace(/>Stake your mUSD to receive smUSD, the yield-bearing token that captures all protocol earnings.</g, `>{t('howItWorks.step2.desc')}<`);
    content = content.replace(/>Watch Yield Grow</g, `>{t('howItWorks.step3.title')}<`);
    content = content.replace(/>Your smUSD balance automatically increases as the protocol generates yield from all three layers.</g, `>{t('howItWorks.step3.desc')}<`);
    return content;
  },
  'YieldBreakdown.tsx': (content) => {
    content = content.replace(/>Where your yield comes from</g, `>{t('yieldBreakdown.title')}<`);
    content = content.replace(/<p className="text-xl text-text-secondary max-w-2xl mx-auto">\s*Transparent distribution of all protocol revenues. The majority goes directly to you.\s*<\/p>/g, `<p className="text-xl text-text-secondary max-w-2xl mx-auto">\n          {t('yieldBreakdown.subtitle')}\n        </p>`);
    content = content.replace(/"Users"/g, `t('yieldBreakdown.users')`);
    content = content.replace(/"80% of total yield goes directly to smUSD holders"/g, `t('yieldBreakdown.usersDesc')`);
    content = content.replace(/"Protocol"/g, `t('yieldBreakdown.protocol')`);
    content = content.replace(/"10% funds protocol operations and development"/g, `t('yieldBreakdown.protocolDesc')`);
    content = content.replace(/"Treasury"/g, `t('yieldBreakdown.treasury')`);
    content = content.replace(/"10% goes to the insurance and backing reserve"/g, `t('yieldBreakdown.treasuryDesc')`);
    content = content.replace(/>to holders<\/div>/g, `>{t('yieldBreakdown.toHolders')}</div>`);
    return content;
  },
  'YieldCalculator.tsx': (content) => {
    content = content.replace(/>Calculate your earnings</g, `>{t('yieldCalc.title')}<`);
    content = content.replace(/<p className="text-xl text-text-secondary max-w-2xl mx-auto">\s*See how much you could earn compared to traditional stablecoins.\s*<\/p>/g, `<p className="text-xl text-text-secondary max-w-2xl mx-auto">\n          {t('yieldCalc.subtitle')}\n        </p>`);
    content = content.replace(/>Deposit Amount</g, `>{t('yieldCalc.depositAmount')}<`);
    content = content.replace(/>Current APY</g, `>{t('yieldCalc.currentApy')}<`);
    content = content.replace(/>7-Day Earnings</g, `>{t('yieldCalc.7day')}<`);
    content = content.replace(/>30-Day Earnings</g, `>{t('yieldCalc.30day')}<`);
    content = content.replace(/>1-Year Earnings</g, `>{t('yieldCalc.1year')}<`);
    content = content.replace(/>\+([^<]+) more<\/div>/g, `>+$1 {t('yieldCalc.more')}</div>`);
    content = content.replace(/>vs Bank Savings \(0\.5% APY\)<\/span>/g, `>{t('yieldCalc.vsBankSavings')}</span>`);
    return content;
  },
  'Security.tsx': (content) => {
    content = content.replace(/>Security is not a feature\. </g, `>{t('security.title')} <`);
    content = content.replace(/>It's the foundation\.<\/span>/g, `>{t('security.titleHighlight')}</span>`);
    content = content.replace(/<p className="text-xl text-text-secondary max-w-2xl mx-auto">\s*Institutional-grade risk management protecting your assets at every layer.\s*<\/p>/g, `<p className="text-xl text-text-secondary max-w-2xl mx-auto">\n          {t('security.subtitle')}\n        </p>`);
    content = content.replace(/"Multi-Sig Control"/g, `t('security.multiSig')`);
    content = content.replace(/"All smart contracts and treasury operations require 5\/8 multi-sig approval from distributed keyholders\."/g, `t('security.multiSigDesc')`);
    content = content.replace(/"On-Chain Transparency"/g, `t('security.onChain')`);
    content = content.replace(/"Real-time proof of reserves for both on-chain and off-chain assets, verifiable 24\/7\."/g, `t('security.onChainDesc')`);
    content = content.replace(/"Insurance Reserve"/g, `t('security.insurance')`);
    content = content.replace(/"10% of protocol revenue automatically funds a decentralized insurance pool to cover tail risks\."/g, `t('security.insuranceDesc')`);
    content = content.replace(/>Audited By</g, `>{t('security.auditedBy')}<`);
    return content;
  },
  'PointsSystem.tsx': (content) => {
    content = content.replace(/>Matryoshka Points</g, `>{t('points.badge')}<`);
    content = content.replace(/>Stack points\. Unlock rewards\.</g, `>{t('points.title')}<`);
    content = content.replace(/<p className="text-xl text-text-secondary max-w-2xl mx-auto">\s*Early adopters and active participants are rewarded through our comprehensive points system.\s*<\/p>/g, `<p className="text-xl text-text-secondary max-w-2xl mx-auto">\n          {t('points.subtitle')}\n        </p>`);
    content = content.replace(/>How to earn points</g, `>{t('points.howToEarn')}<`);
    content = content.replace(/"Hold mUSD"/g, `t('points.holdMusd')`);
    content = content.replace(/"Earn 1 pt per day for every 100 mUSD held in your wallet"/g, `t('points.holdMusdDesc')`);
    content = content.replace(/"Provide Liquidity"/g, `t('points.provideLiquidity')`);
    content = content.replace(/"Earn 3 pts per day for providing mUSD liquidity on approved DEXs"/g, `t('points.provideLiquidityDesc')`);
    content = content.replace(/"Stake for smUSD"/g, `t('points.stakeSmusd')`);
    content = content.replace(/"Earn a 2x points multiplier on all staked mUSD amounts"/g, `t('points.stakeSmusdDesc')`);
    content = content.replace(/>What points unlock</g, `>{t('points.whatUnlock')}<`);
    content = content.replace(/"Future governance token airdrop eligibility"/g, `t('points.airdrop')`);
    content = content.replace(/"Exclusive access to higher-yield strategy layers"/g, `t('points.apyBoost')`);
    content = content.replace(/"Fee discounts on protocol interactions"/g, `t('points.feeDiscount')`);
    content = content.replace(/>Total MP Distributed<\/div>/g, `>{t('points.totalDistributed')}</div>`);
    return content;
  },
  'Ecosystem.tsx': (content) => {
    content = content.replace(/>Matryo Everywhere</g, `>{t('ecosystem.title')}<`);
    content = content.replace(/<p className="text-xl text-text-secondary max-w-2xl mx-auto">\s*Integrated across the entire DeFi and CeFi landscape for maximum utility and yield.\s*<\/p>/g, `<p className="text-xl text-text-secondary max-w-2xl mx-auto">\n          {t('ecosystem.subtitle')}\n        </p>`);
    content = content.replace(/>Integrated Protocols</g, `>{t('ecosystem.integratedProtocols')}<`);
    content = content.replace(/>Chains</g, `>{t('ecosystem.chains')}<`);
    content = content.replace(/>Yield Strategies</g, `>{t('ecosystem.yieldStrategies')}<`);
    content = content.replace(/>\{partner\.category\}<\/span>/g, `>{t(\`ecosystem.category.\${partner.category}\`)}</span>`);
    return content;
  },
  'Redemption.tsx': (content) => {
    content = content.replace(/>Exit any time, on your terms\.</g, `>{t('redemption.title')}<`);
    content = content.replace(/<p className="text-xl text-text-secondary max-w-2xl mx-auto">\s*Multiple redemption paths ensure you always have access to your liquidity when you need it.\s*<\/p>/g, `<p className="text-xl text-text-secondary max-w-2xl mx-auto">\n          {t('redemption.subtitle')}\n        </p>`);
    content = content.replace(/"Instant"/g, `t('redemption.instant')`);
    content = content.replace(/"Via AMM pools"/g, `t('redemption.instantBadge')`);
    content = content.replace(/"Swap directly on DEXs for instant liquidity\. Subject to market slippage\."/g, `t('redemption.instantDesc')`);
    content = content.replace(/"Standard"/g, `t('redemption.standard')`);
    content = content.replace(/"Protocol redeem"/g, `t('redemption.standardBadge')`);
    content = content.replace(/"Redeem directly through the protocol at 1:1\. Takes 1-3 business days\."/g, `t('redemption.standardDesc')`);
    content = content.replace(/"Slow Redeem"/g, `t('redemption.slow')`);
    content = content.replace(/"High volume"/g, `t('redemption.slowBadge')`);
    content = content.replace(/"For large redemptions >\$1M\. Unwinds RWA positions over 7-14 days\."/g, `t('redemption.slowDesc')`);
    content = content.replace(/>Emergency Protocol Guard:<\/strong>/g, `>{t('redemption.emergencyGuard')}</strong>`);
    content = content.replace(/In extreme market conditions, redemption queues ensure orderly unwinding of positions to protect the peg and all holders\./g, `{t('redemption.emergencyGuardDesc')}`);
    return content;
  },
  'FAQ.tsx': (content) => {
    content = content.replace(/import \{ FAQ_DATA \} from ['"]@\/data\/stats['"];\n/g, '');
    content = content.replace(/>Frequently Asked Questions</g, `>{t('faq.title')}<`);
    content = content.replace(/<p className="text-xl text-text-secondary max-w-2xl mx-auto">\s*Everything you need to know about the Matryoshka stablecoin model.\s*<\/p>/g, `<p className="text-xl text-text-secondary max-w-2xl mx-auto">\n          {t('faq.subtitle')}\n        </p>`);
    
    if (!content.includes('const faqItems')) {
      content = content.replace(/(export function FAQ\(\) \{\n\s*const \{ t \} = useLanguage\(\);\n)/, `$1\n  const faqItems = Array.from({ length: 8 }, (_, i) => ({\n    q: t(\`faq.q\${i + 1}\`),\n    a: t(\`faq.a\${i + 1}\`),\n  }));\n`);
    }
    
    content = content.replace(/FAQ_DATA/g, 'faqItems');
    return content;
  },
  'CTAFooter.tsx': (content) => {
    content = content.replace(/>Start earning with </g, `>{t('cta.title')} <`);
    content = content.replace(/>every layer\.<\/span>/g, `>{t('cta.titleHighlight')}</span>`);
    content = content.replace(/<p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">\s*Mint mUSD today and unlock the full potential of your stablecoin holdings.\s*<\/p>/g, `<p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">\n          {t('cta.subtitle')}\n        </p>`);
    content = content.replace(/>Launch App</g, `>{t('cta.launchApp')}<`);
    content = content.replace(/© 2024 Matryo Protocol\. All rights reserved\./g, `{t('cta.copyright')}`);
    return content;
  }
};

const dir = 'E:/Project/Usdm/src/components/landing';

for (const [filename, fileFunc] of Object.entries(files)) {
  const filePath = path.join(dir, filename);
  if (!fs.existsSync(filePath)) {
    console.log("Not found:", filePath);
    continue;
  }
  let content = fs.readFileSync(filePath, 'utf8');
  content = addImportAndHook(content);
  content = replaceClasses(content);
  content = fileFunc(content);
  fs.writeFileSync(filePath, content);
  console.log("Updated", filename);
}
