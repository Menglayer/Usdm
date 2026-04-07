export const MOCK_STATS = {
  tvl: 847_520_000,
  musdSupply: 623_100_000,
  smusdApy: 28.4,
  protocolRevenue: 4_230_000,
  collateralizationRatio: 103.5,
  totalUsers: 12_847,
  stakingRatio: 68.3,
  pointsDistributed: 24_500_000,
}

export const COLLATERAL_ASSETS = [
  { name: 'USYC', issuer: 'Hashnote', apy: 4.2, tvl: 180_000_000, color: '#3B82F6' },
  { name: 'USDtb', issuer: 'Ethena', apy: 3.8, tvl: 150_000_000, color: '#8B5CF6' },
  { name: 'USDC', issuer: 'Circle', apy: 0, tvl: 120_000_000, color: '#2775CA' },
  { name: 'wM', issuer: 'M0 Foundation', apy: 3.6, tvl: 95_000_000, color: '#10B981' },
  { name: 'sDAI', issuer: 'MakerDAO', apy: 5.1, tvl: 78_100_000, color: '#F59E0B' },
]

export const ECOSYSTEM_PARTNERS = {
  defi: [
    { name: 'Aave', logo: 'aave', url: 'https://aave.com', description: 'Leading decentralized lending protocol' },
    { name: 'Compound', logo: 'compound', url: 'https://compound.finance', description: 'Autonomous interest rate protocol' },
    { name: 'Morpho', logo: 'morpho', url: 'https://morpho.org', description: 'Permissionless lending infrastructure' },
    { name: 'Pendle', logo: 'pendle', url: 'https://pendle.finance', description: 'Yield trading and fixed income DeFi' },
    { name: 'Curve', logo: 'curve', url: 'https://curve.fi', description: 'Deep on-chain liquidity with advanced bonding curves' },
  ],
  rwa: [
    { name: 'Ondo Finance', logo: 'ondo', url: 'https://ondo.finance', description: 'Institutional-grade tokenized securities' },
    { name: 'Maple Finance', logo: 'maple', url: 'https://maple.finance', description: 'Institutional capital markets on-chain' },
    { name: 'Hashnote', logo: 'hashnote', url: 'https://hashnote.com', description: 'Regulated digital asset management' },
  ],
  infra: [
    { name: 'Chainlink', logo: 'chainlink', url: 'https://chain.link', description: 'Decentralized oracle network' },
    { name: 'LayerZero', logo: 'layerzero', url: 'https://layerzero.network', description: 'Omnichain interoperability protocol' },
  ],
}

export const FAQ_DATA = [
  {
    q: 'What is Matryo Finance?',
    a: 'Matryo Finance is a tri-layer stablecoin protocol that combines RWA yields, CeFi strategies, and DeFi composability into a single yield-bearing stablecoin (mUSD). Like a Matryoshka doll, each layer nests within the next, compounding returns at every level.',
  },
  {
    q: 'What is mUSD?',
    a: 'mUSD is a stablecoin pegged 1:1 to USD, minted by depositing USDT, USDC, or other supported assets. It represents your position in the Matryo protocol. When staked as smUSD, it automatically earns yield from the tri-layer strategy.',
  },
  {
    q: 'What is smUSD?',
    a: 'smUSD (staked mUSD) is the yield-bearing version of mUSD. When you stake mUSD, you receive smUSD which appreciates in value over time as the protocol generates yield across all three layers. The smUSD/mUSD exchange rate continuously increases.',
  },
  {
    q: 'How does the tri-layer yield work?',
    a: 'Layer 1 (RWA Foundation): US Treasury Bills and money market funds provide a stable base yield of 3-5%. Layer 2 (CeFi Core): Delta-neutral strategies like basis trading and funding rate arbitrage add 2-4%. Layer 3 (DeFi Shell): LP positions, yield farming, and Pendle integrations can add another 2-5%. Combined, users typically see 8-12% APY.',
  },
  {
    q: 'How is the yield distributed?',
    a: '80% of all protocol revenue goes directly to smUSD holders through daily auto-compounding. 10% goes to the protocol treasury as a risk reserve and insurance fund. The remaining 10% supports development, operations, and governance incentives.',
  },
  {
    q: 'Can I redeem mUSD at any time?',
    a: 'mUSD can be redeemed 1:1 for USDC/USDT at any time. smUSD requires a 7-day cooldown period for unstaking. We also offer a "slow redemption" option: if you choose to wait 30 days, you receive bonus interest on top of your normal yield.',
  },
  {
    q: 'What are Matryoshka Points?',
    a: 'Matryoshka Points are earned by holding mUSD/smUSD, providing liquidity, and engaging with the protocol. Points can be used for future airdrops, yield boosts, governance voting, VIP strategy access, and exclusive NFT badges. Points are updated weekly.',
  },
  {
    q: 'Is my deposit safe?',
    a: 'Assets are distributed across multiple protocols with multi-sig control and full on-chain transparency. The 10% treasury reserve acts as an insurance fund against extreme scenarios. All collateral is verifiable on-chain, and the protocol undergoes regular security audits.',
  },
]

export const EARN_STRATEGIES = [
  {
    name: 'Foundation',
    tier: 'Layer 1',
    label: 'RWA Base Yield',
    apy: { min: 3, max: 5 },
    risk: 'Low',
    color: '#06B6D4',
    description: 'US Treasury Bills, money market funds, and AA-grade sovereign bonds provide the stable base layer of returns.',
    strategies: ['US T-Bills (Hashnote USYC)', 'Money Market (M0 $M)', 'Short-term Bonds (Ondo OUSG)'],
  },
  {
    name: 'Core',
    tier: 'Layer 2',
    label: 'CeFi Enhanced',
    apy: { min: 5, max: 8 },
    risk: 'Medium',
    color: '#6366F1',
    description: 'Delta-neutral strategies including basis trading and funding rate arbitrage generate additional yield without directional risk.',
    strategies: ['Basis Spread Arbitrage', 'Funding Rate Capture', 'Cross-exchange Arbitrage'],
  },
  {
    name: 'Shell',
    tier: 'Layer 3',
    label: 'DeFi Composable',
    apy: { min: 8, max: 15 },
    risk: 'Medium-High',
    color: '#8B5CF6',
    description: 'Stablecoin LPs, yield farming, and Pendle yield tokenization unlock the highest returns through DeFi composability.',
    strategies: ['Curve/Uniswap LP Positions', 'Morpho/Aave Lending', 'Pendle YT/PT Trading'],
  },
]

export const USER_MOCK_DATA = {
  musdBalance: 10_000,
  smusdBalance: 9_523.81,
  smusdValue: 10_450.12,
  earnedYield: 450.12,
  currentApy: 28.4,
  pointsBalance: 12_580,
  stakingDays: 45,
}
