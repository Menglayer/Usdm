import fs from 'fs';
import path from 'path';

const dir = 'E:/Project/Usdm/src/components/landing';

function processFiles() {
  // Hero
  const heroPath = path.join(dir, 'Hero.tsx');
  let hero = fs.readFileSync(heroPath, 'utf8');
  hero = hero.replace(/>Every Layer<\/span>/, `>{t('hero.title.line1')}</span>`);
  hero = hero.replace(/<br className="hidden sm:block" \/> Compounds/, `<br className="hidden sm:block" /> {t('hero.title.line2')}`);
  hero = hero.replace(/>\s*The tri-layer stablecoin protocol\. RWA yields &times; CeFi strategies &times; DeFi composability — nested like a Matryoshka\.\s*<\/p>/, `>\n            {t('hero.subtitle')}\n          </p>`);
  hero = hero.replace(/>\s*Launch App\s*<\/a>/, `>{t('hero.launchApp')}</a>`);
  hero = hero.replace(/>\s*Read Docs\s*<\/a>/, `>{t('hero.readDocs')}</a>`);
  hero = hero.replace(/>Total Value Locked<\/h3>/, `>{t('hero.stat.tvl')}</h3>`);
  hero = hero.replace(/>mUSD Supply<\/h3>/, `>{t('hero.stat.supply')}</h3>`);
  hero = hero.replace(/>smUSD APY<\/h3>/, `>{t('hero.stat.apy')}</h3>`);
  hero = hero.replace(/>Protocol Revenue<\/h3>/, `>{t('hero.stat.revenue')}</h3>`);
  fs.writeFileSync(heroPath, hero);

  // ProblemStatement
  const probPath = path.join(dir, 'ProblemStatement.tsx');
  let prob = fs.readFileSync(probPath, 'utf8');
  prob = prob.replace(/>\s*Stablecoins were never meant to\s*<\/span>/, `>{t('problem.title')}</span>`);
  prob = prob.replace(/>\s*sit idle\.\s*<\/span>/, `>{t('problem.titleHighlight')}</span>`);
  prob = prob.replace(/>\s*The Broken Model\s*<\/h3>/, `>{t('problem.brokenModel')}</h3>`);
  prob = prob.replace(/<p className="text-text-muted leading-relaxed">\s*Today, fiat-backed stablecoins capture <span className="text-text">\$6B\+ annually<\/span> in risk-free yield from user deposits, keeping 100% of the profits while users get nothing but the convenience of a digital dollar\.\s*<\/p>/, `<p className="text-text-muted leading-relaxed">\n                {t('problem.brokenModelDesc')}\n              </p>`);
  prob = prob.replace(/>\s*The Matryo Solution\s*<\/h3>/, `>{t('problem.solution')}</h3>`);
  prob = prob.replace(/<p className="text-text-muted leading-relaxed">\s*We believe yield belongs to the users who create the liquidity\. By tokenizing the underlying yield generated from the collateral, we transform the stablecoin from a static asset into a <strong>dynamic wealth-building tool<\/strong>\.\s*<\/p>/, `<p className="text-text-muted leading-relaxed">\n                {t('problem.solutionDesc')}\n              </p>`);
  fs.writeFileSync(probPath, prob);

  // MatryoshkaModel
  const matPath = path.join(dir, 'MatryoshkaModel.tsx');
  let mat = fs.readFileSync(matPath, 'utf8');
  mat = mat.replace(/>\s*Three layers\. One dollar\.\s*<\/h2>/, `>{t('matryoshka.title')}</h2>`);
  mat = mat.replace(/>\s*Infinite potential\.\s*<\/span>/, `>{t('matryoshka.titleHighlight')}</span>`);
  mat = mat.replace(/>\s*Like a Russian nesting doll, every mUSD holds multiple layers of yield generation underneath its 1:1 USD peg\.\s*<\/p>/, `>\n          {t('matryoshka.subtitle')}\n        </p>`);
  mat = mat.replace(/>\s*DeFi Shell\s*<\/h3>/g, `>{t('matryoshka.defiShell')}</h3>`);
  mat = mat.replace(/>\s*DeFi Shell\s*<\/span>/g, `>{t('matryoshka.defiShell')}</span>`);
  mat = mat.replace(/>\s*CeFi Core\s*<\/h3>/g, `>{t('matryoshka.cefiCore')}</h3>`);
  mat = mat.replace(/>\s*CeFi Core\s*<\/span>/g, `>{t('matryoshka.cefiCore')}</span>`);
  mat = mat.replace(/>\s*RWA Foundation\s*<\/h3>/g, `>{t('matryoshka.rwaFoundation')}</h3>`);
  mat = mat.replace(/>\s*RWA<br \/>Foundation\s*<\/span>/g, `>{t('matryoshka.rwaFoundation')}</span>`);
  mat = mat.replace(/>\s*Over-collateralized lending and liquidity provisioning across blue-chip DeFi protocols\.\s*<\/p>/, `>{t('matryoshka.defiDesc')}</p>`);
  mat = mat.replace(/>\s*Market-neutral funding rate arbitrage and basis trades on major centralized exchanges\.\s*<\/p>/, `>{t('matryoshka.cefiDesc')}</p>`);
  mat = mat.replace(/>\s*Direct allocation into short-term US Treasuries and cash equivalents for baseline yield\.\s*<\/p>/, `>{t('matryoshka.rwaDesc')}</p>`);
  mat = mat.replace(/>\s*APY Range\s*<\/div>/g, `>{t('matryoshka.apyRange')}</div>`);
  mat = mat.replace(/>\s*Risk Level\s*<\/div>/g, `>{t('matryoshka.riskLevel')}</div>`);
  mat = mat.replace(/>\s*Medium\s*<\/div>/, `>{t('matryoshka.riskMedium')}</div>`);
  mat = mat.replace(/>\s*Low\/Med\s*<\/div>/, `>{t('matryoshka.riskLowMed')}</div>`);
  mat = mat.replace(/>\s*Lowest\s*<\/div>/, `>{t('matryoshka.riskLowest')}</div>`);
  fs.writeFileSync(matPath, mat);

  // HowItWorks
  const howPath = path.join(dir, 'HowItWorks.tsx');
  let how = fs.readFileSync(howPath, 'utf8');
  how = how.replace(/>\s*Get started in\s*<\/span>/, `>{t('howItWorks.title')}</span>`);
  how = how.replace(/>\s*three steps\s*<\/span>/, `>{t('howItWorks.titleHighlight')}</span>`);
  how = how.replace(/>\s*From fiat to full yield-bearing potential in minutes\.\s*<\/p>/, `>\n          {t('howItWorks.subtitle')}\n        </p>`);
  how = how.replace(/>\s*Mint mUSD\s*<\/h3>/, `>{t('howItWorks.step1.title')}</h3>`);
  how = how.replace(/>\s*Deposit USDC or USDT to mint mUSD at a 1:1 ratio\. No fees, no slippage\.\s*<\/p>/, `>{t('howItWorks.step1.desc')}</p>`);
  how = how.replace(/>\s*Stake for smUSD\s*<\/h3>/, `>{t('howItWorks.step2.title')}</h3>`);
  how = how.replace(/>\s*Stake your mUSD to receive smUSD, the yield-bearing token that captures all protocol earnings\.\s*<\/p>/, `>{t('howItWorks.step2.desc')}</p>`);
  how = how.replace(/>\s*Watch Yield Grow\s*<\/h3>/, `>{t('howItWorks.step3.title')}</h3>`);
  how = how.replace(/>\s*Your smUSD balance automatically increases as the protocol generates yield from all three layers\.\s*<\/p>/, `>{t('howItWorks.step3.desc')}</p>`);
  fs.writeFileSync(howPath, how);

  // YieldBreakdown
  const ybPath = path.join(dir, 'YieldBreakdown.tsx');
  let yb = fs.readFileSync(ybPath, 'utf8');
  yb = yb.replace(/>\s*Where your yield comes from\s*<\/h2>/, `>{t('yieldBreakdown.title')}</h2>`);
  yb = yb.replace(/>\s*Transparent distribution of all protocol revenues\. The majority goes directly to you\.\s*<\/p>/, `>\n          {t('yieldBreakdown.subtitle')}\n        </p>`);
  yb = yb.replace(/>\s*Users\s*<\/h3>/, `>{t('yieldBreakdown.users')}</h3>`);
  yb = yb.replace(/>\s*80% of total yield goes directly to smUSD holders\s*<\/p>/, `>{t('yieldBreakdown.usersDesc')}</p>`);
  yb = yb.replace(/>\s*Protocol\s*<\/h3>/, `>{t('yieldBreakdown.protocol')}</h3>`);
  yb = yb.replace(/>\s*10% funds protocol operations and development\s*<\/p>/, `>{t('yieldBreakdown.protocolDesc')}</p>`);
  yb = yb.replace(/>\s*Treasury\s*<\/h3>/, `>{t('yieldBreakdown.treasury')}</h3>`);
  yb = yb.replace(/>\s*10% goes to the insurance and backing reserve\s*<\/p>/, `>{t('yieldBreakdown.treasuryDesc')}</p>`);
  yb = yb.replace(/>\s*to holders\s*<\/div>/, `>{t('yieldBreakdown.toHolders')}</div>`);
  fs.writeFileSync(ybPath, yb);

  // YieldCalculator
  const ycPath = path.join(dir, 'YieldCalculator.tsx');
  let yc = fs.readFileSync(ycPath, 'utf8');
  yc = yc.replace(/>\s*Calculate your earnings\s*<\/h2>/, `>{t('yieldCalc.title')}</h2>`);
  yc = yc.replace(/>\s*See how much you could earn compared to traditional stablecoins\.\s*<\/p>/, `>\n          {t('yieldCalc.subtitle')}\n        </p>`);
  yc = yc.replace(/>\s*Deposit Amount\s*<\/label>/, `>{t('yieldCalc.depositAmount')}</label>`);
  yc = yc.replace(/>\s*Current APY\s*<\/div>/, `>{t('yieldCalc.currentApy')}</div>`);
  yc = yc.replace(/>\s*7-Day Earnings\s*<\/div>/, `>{t('yieldCalc.7day')}</div>`);
  yc = yc.replace(/>\s*30-Day Earnings\s*<\/div>/, `>{t('yieldCalc.30day')}</div>`);
  yc = yc.replace(/>\s*1-Year Earnings\s*<\/div>/, `>{t('yieldCalc.1year')}</div>`);
  yc = yc.replace(/>\+([^<]+) more\s*<\/div>/g, `>+$1 {t('yieldCalc.more')}</div>`);
  yc = yc.replace(/>\s*vs Bank Savings \(0\.5% APY\)\s*<\/span>/, `>{t('yieldCalc.vsBankSavings')}</span>`);
  fs.writeFileSync(ycPath, yc);

  // Security
  const secPath = path.join(dir, 'Security.tsx');
  let sec = fs.readFileSync(secPath, 'utf8');
  sec = sec.replace(/>\s*Security is not a feature\.\s*<\/span>/, `>{t('security.title')}</span>`);
  sec = sec.replace(/>\s*It's the foundation\.\s*<\/span>/, `>{t('security.titleHighlight')}</span>`);
  sec = sec.replace(/>\s*Institutional-grade risk management protecting your assets at every layer\.\s*<\/p>/, `>\n          {t('security.subtitle')}\n        </p>`);
  sec = sec.replace(/>\s*Multi-Sig Control\s*<\/h3>/, `>{t('security.multiSig')}</h3>`);
  sec = sec.replace(/>\s*All smart contracts and treasury operations require 5\/8 multi-sig approval from distributed keyholders\.\s*<\/p>/, `>{t('security.multiSigDesc')}</p>`);
  sec = sec.replace(/>\s*On-Chain Transparency\s*<\/h3>/, `>{t('security.onChain')}</h3>`);
  sec = sec.replace(/>\s*Real-time proof of reserves for both on-chain and off-chain assets, verifiable 24\/7\.\s*<\/p>/, `>{t('security.onChainDesc')}</p>`);
  sec = sec.replace(/>\s*Insurance Reserve\s*<\/h3>/, `>{t('security.insurance')}</h3>`);
  sec = sec.replace(/>\s*10% of protocol revenue automatically funds a decentralized insurance pool to cover tail risks\.\s*<\/p>/, `>{t('security.insuranceDesc')}</p>`);
  sec = sec.replace(/>\s*Audited By\s*<\/div>/, `>{t('security.auditedBy')}</div>`);
  fs.writeFileSync(secPath, sec);

  // PointsSystem
  const ptsPath = path.join(dir, 'PointsSystem.tsx');
  let pts = fs.readFileSync(ptsPath, 'utf8');
  pts = pts.replace(/>\s*Matryoshka Points\s*<\/span>/, `>{t('points.badge')}</span>`);
  pts = pts.replace(/>\s*Stack points\. Unlock rewards\.\s*<\/h2>/, `>{t('points.title')}</h2>`);
  pts = pts.replace(/>\s*Early adopters and active participants are rewarded through our comprehensive points system\.\s*<\/p>/, `>\n          {t('points.subtitle')}\n        </p>`);
  pts = pts.replace(/>\s*How to earn points\s*<\/h3>/, `>{t('points.howToEarn')}</h3>`);
  pts = pts.replace(/>\s*Hold mUSD\s*<\/h4>/, `>{t('points.holdMusd')}</h4>`);
  pts = pts.replace(/>\s*Earn 1 pt per day for every 100 mUSD held in your wallet\s*<\/p>/, `>{t('points.holdMusdDesc')}</p>`);
  pts = pts.replace(/>\s*Provide Liquidity\s*<\/h4>/, `>{t('points.provideLiquidity')}</h4>`);
  pts = pts.replace(/>\s*Earn 3 pts per day for providing mUSD liquidity on approved DEXs\s*<\/p>/, `>{t('points.provideLiquidityDesc')}</p>`);
  pts = pts.replace(/>\s*Stake for smUSD\s*<\/h4>/, `>{t('points.stakeSmusd')}</h4>`);
  pts = pts.replace(/>\s*Earn a 2x points multiplier on all staked mUSD amounts\s*<\/p>/, `>{t('points.stakeSmusdDesc')}</p>`);
  pts = pts.replace(/>\s*What points unlock\s*<\/h3>/, `>{t('points.whatUnlock')}</h3>`);
  pts = pts.replace(/>\s*Future governance token airdrop eligibility\s*<\/span>/, `>{t('points.airdrop')}</span>`);
  pts = pts.replace(/>\s*Exclusive access to higher-yield strategy layers\s*<\/span>/, `>{t('points.apyBoost')}</span>`);
  pts = pts.replace(/>\s*Fee discounts on protocol interactions\s*<\/span>/, `>{t('points.feeDiscount')}</span>`);
  pts = pts.replace(/>\s*Total MP Distributed\s*<\/div>/, `>{t('points.totalDistributed')}</div>`);
  fs.writeFileSync(ptsPath, pts);

  // Ecosystem
  const ecoPath = path.join(dir, 'Ecosystem.tsx');
  let eco = fs.readFileSync(ecoPath, 'utf8');
  eco = eco.replace(/>\s*Matryo Everywhere\s*<\/h2>/, `>{t('ecosystem.title')}</h2>`);
  eco = eco.replace(/>\s*Integrated across the entire DeFi and CeFi landscape for maximum utility and yield\.\s*<\/p>/, `>\n          {t('ecosystem.subtitle')}\n        </p>`);
  eco = eco.replace(/>\s*Integrated Protocols\s*<\/h3>/, `>{t('ecosystem.integratedProtocols')}</h3>`);
  eco = eco.replace(/>\s*Chains\s*<\/h3>/, `>{t('ecosystem.chains')}</h3>`);
  eco = eco.replace(/>\s*Yield Strategies\s*<\/h3>/, `>{t('ecosystem.yieldStrategies')}</h3>`);
  fs.writeFileSync(ecoPath, eco);

  // Redemption
  const rdmPath = path.join(dir, 'Redemption.tsx');
  let rdm = fs.readFileSync(rdmPath, 'utf8');
  rdm = rdm.replace(/>\s*Exit any time, on your terms\.\s*<\/h2>/, `>{t('redemption.title')}</h2>`);
  rdm = rdm.replace(/>\s*Multiple redemption paths ensure you always have access to your liquidity when you need it\.\s*<\/p>/, `>\n          {t('redemption.subtitle')}\n        </p>`);
  rdm = rdm.replace(/>\s*Instant\s*<\/h3>/, `>{t('redemption.instant')}</h3>`);
  rdm = rdm.replace(/>\s*Via AMM pools\s*<\/span>/, `>{t('redemption.instantBadge')}</span>`);
  rdm = rdm.replace(/>\s*Swap directly on DEXs for instant liquidity\. Subject to market slippage\.\s*<\/p>/, `>{t('redemption.instantDesc')}</p>`);
  rdm = rdm.replace(/>\s*Standard\s*<\/h3>/, `>{t('redemption.standard')}</h3>`);
  rdm = rdm.replace(/>\s*Protocol redeem\s*<\/span>/, `>{t('redemption.standardBadge')}</span>`);
  rdm = rdm.replace(/>\s*Redeem directly through the protocol at 1:1\. Takes 1-3 business days\.\s*<\/p>/, `>{t('redemption.standardDesc')}</p>`);
  rdm = rdm.replace(/>\s*Slow Redeem\s*<\/h3>/, `>{t('redemption.slow')}</h3>`);
  rdm = rdm.replace(/>\s*High volume\s*<\/span>/, `>{t('redemption.slowBadge')}</span>`);
  rdm = rdm.replace(/>\s*For large redemptions >\$1M\. Unwinds RWA positions over 7-14 days\.\s*<\/p>/, `>{t('redemption.slowDesc')}</p>`);
  rdm = rdm.replace(/>\s*Emergency Protocol Guard:\s*<\/strong>\s*In extreme market conditions, redemption queues ensure orderly unwinding of positions to protect the peg and all holders\.\s*<\/p>/, `>\n            <strong>{t('redemption.emergencyGuard')}</strong> {t('redemption.emergencyGuardDesc')}\n          </p>`);
  fs.writeFileSync(rdmPath, rdm);

  // FAQ
  const faqPath = path.join(dir, 'FAQ.tsx');
  let faq = fs.readFileSync(faqPath, 'utf8');
  faq = faq.replace(/>\s*Frequently Asked Questions\s*<\/h2>/, `>{t('faq.title')}</h2>`);
  faq = faq.replace(/>\s*Everything you need to know about the Matryoshka stablecoin model\.\s*<\/p>/, `>\n          {t('faq.subtitle')}\n        </p>`);
  fs.writeFileSync(faqPath, faq);

  // CTAFooter
  const ctaPath = path.join(dir, 'CTAFooter.tsx');
  let cta = fs.readFileSync(ctaPath, 'utf8');
  cta = cta.replace(/>\s*Start earning with\s*<\/span>/, `>{t('cta.title')}</span>`);
  cta = cta.replace(/>\s*every layer\.\s*<\/span>/, `>{t('cta.titleHighlight')}</span>`);
  cta = cta.replace(/>\s*Mint mUSD today and unlock the full potential of your stablecoin holdings\.\s*<\/p>/, `>\n          {t('cta.subtitle')}\n        </p>`);
  cta = cta.replace(/>\s*Launch App\s*<\/a>/, `>{t('cta.launchApp')}</a>`);
  cta = cta.replace(/>\s*© 2024 Matryo Protocol\. All rights reserved\.\s*<\/div>/, `>{t('cta.copyright')}</div>`);
  fs.writeFileSync(ctaPath, cta);

}
processFiles();
