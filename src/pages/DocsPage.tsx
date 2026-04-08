import { useState } from 'react';
import { ArrowLeft, BookOpen, Layers, Zap, Code, ShieldAlert, HelpCircle, ChevronRight, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

export const DocsPage = () => {
  const { locale } = useLanguage();
  const [activeSection, setActiveSection] = useState('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sections = [
    { id: 'overview', title: locale === 'zh' ? '协议概览' : 'Overview', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'architecture', title: locale === 'zh' ? '三层架构' : 'Architecture', icon: <Layers className="w-4 h-4" /> },
    { id: 'yield', title: locale === 'zh' ? '收益来源' : 'Yield Sources', icon: <Zap className="w-4 h-4" /> },
    { id: 'contracts', title: locale === 'zh' ? '智能合约' : 'Smart Contracts', icon: <Code className="w-4 h-4" /> },
    { id: 'risks', title: locale === 'zh' ? '风险管理' : 'Risks', icon: <ShieldAlert className="w-4 h-4" /> },
    { id: 'faq', title: locale === 'zh' ? '常见问题 (FAQ)' : 'FAQ', icon: <HelpCircle className="w-4 h-4" /> },
  ];

  // Close sidebar on section click (mobile)
  const handleSectionClick = (id: string) => {
    setActiveSection(id);
    setIsSidebarOpen(false);
    // Scroll to section
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-bg text-text font-sans selection:bg-primary/20">
      {/* Mobile Header */}
      <div className="lg:hidden sticky top-0 z-50 flex items-center justify-between p-4 bg-surface/80 backdrop-blur-md border-b border-border">
        <Link to="/" className="flex items-center gap-2 text-text font-bold">
          <span className="text-primary text-xl">萌</span> Matryo {locale === 'zh' ? '文档' : 'Docs'}
        </Link>
        <button 
          type="button"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 text-text-secondary hover:text-text rounded-md bg-bg border border-border"
        >
          {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <div className="flex max-w-[1400px] mx-auto">
        {/* Sidebar */}
        <aside className={`
          fixed lg:sticky top-0 lg:top-0 h-screen lg:h-screen w-[280px] shrink-0
          bg-surface border-r border-border z-40
          transition-transform duration-300 ease-in-out lg:translate-x-0
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          flex flex-col
        `}>
          <div className="p-6 hidden lg:flex flex-col gap-6 h-full">
            <Link to="/" className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors group text-sm font-medium w-fit">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              {locale === 'zh' ? '返回主页' : 'Back to Home'}
            </Link>
            
            <div className="flex items-center gap-3 mt-4 mb-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                <span className="text-primary font-bold">萌</span>
              </div>
              <div>
                <h1 className="text-base font-bold text-text">Matryo Finance</h1>
                <p className="text-xs text-text-secondary">{locale === 'zh' ? '官方文档' : 'Documentation'}</p>
              </div>
            </div>

            <nav className="flex-1 overflow-y-auto pr-2 -mr-2 space-y-1 mt-4">
              <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-3 px-3">
                {locale === 'zh' ? '目录章节' : 'Sections'}
              </p>
              {sections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => handleSectionClick(section.id)}
                  className={`
                    w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200
                    ${activeSection === section.id 
                      ? 'bg-primary/10 text-primary' 
                      : 'text-text-secondary hover:bg-surface-hover hover:text-text'
                    }
                  `}
                >
                  <span className={`${activeSection === section.id ? 'text-primary' : 'text-text-secondary'}`}>
                    {section.icon}
                  </span>
                  {section.title}
                </button>
              ))}
            </nav>
          </div>
          
          {/* Mobile Sidebar Content */}
          <div className="lg:hidden p-4 h-full flex flex-col pt-20">
            <nav className="flex-1 overflow-y-auto space-y-1">
              {sections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => handleSectionClick(section.id)}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all
                    ${activeSection === section.id 
                      ? 'bg-primary/10 text-primary' 
                      : 'text-text-secondary hover:bg-surface-hover hover:text-text'
                    }
                  `}
                >
                  <span className={`${activeSection === section.id ? 'text-primary' : 'text-text-secondary'}`}>
                    {section.icon}
                  </span>
                  {section.title}
                </button>
              ))}
            </nav>
            <div className="p-4 mt-auto border-t border-border">
              <Link to="/" className="flex items-center justify-center gap-2 text-text-secondary hover:text-text w-full py-2 bg-bg rounded-lg border border-border">
                <ArrowLeft className="w-4 h-4" />
                {locale === 'zh' ? '返回主页' : 'Back to Home'}
              </Link>
            </div>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-30 lg:hidden backdrop-blur-sm"
            onClick={() => setIsSidebarOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Main Content */}
        <main className="flex-1 min-w-0 bg-bg pb-24 lg:py-12 px-6 sm:px-10 lg:px-16 overflow-y-auto">
          <div className="max-w-3xl mx-auto space-y-24 pt-10 lg:pt-0">
            
            <section id="overview" className="scroll-mt-24">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-6">
                <span>{locale === 'zh' ? 'V2.0 文档' : 'V2.0 Documentation'}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-text mb-6">
                Matryo Finance
              </h1>
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                {locale === 'zh' ? '终极嵌套收益架构。隆重推出基础层美元稳定币' : 'The ultimate nested yield architecture. Introducing'} <strong className="text-text">USD.萌</strong> {locale === 'zh' ? '及其自动复利的生息代币对应物' : 'and its yield-bearing counterpart'} <strong className="text-text">sUSD.萌</strong>.
              </p>
              
              <div className="prose prose-invert max-w-none text-text-secondary">
                <p className="leading-relaxed">
                  {locale === 'zh' 
                    ? 'Matryo Finance 采用革命性的“俄罗斯套娃 (Nested Doll)”原则运作，通过对不同层级的收益原语进行分层，构建了一个高度聚合、经过风险调整且资本效率极高的稳定币生态系统。通过抽象化收益生成的复杂性，USD.萌 提供了稳定的计价单位，而 sUSD.萌 则能够自主捕获并积累现实世界资产 (RWA) 与链上 Delta 中性策略的价值。'
                    : 'Matryo Finance operates on a revolutionary "nested doll" principle, layering distinct yield primitives to create an aggregated, risk-adjusted, and highly efficient stablecoin ecosystem. By abstracting the complexity of yield generation, USD.萌 provides a stable unit of account while sUSD.萌 accrues real-world and on-chain value autonomously.'}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  <div className="p-6 rounded-xl bg-surface border border-border hover:border-primary/50 transition-colors">
                    <h3 className="text-lg font-bold text-text mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                      USD.萌
                    </h3>
                    <p className="text-sm">{locale === 'zh' ? '基础层稳定币，与美元 1:1 锚定，专为提供深度的市场流动性和无缝的跨协议集成而优化。' : 'The base layer stablecoin, pegged 1:1 to the US Dollar, optimized for deep liquidity and seamless integration.'}</p>
                  </div>
                  <div className="p-6 rounded-xl bg-surface border border-border hover:border-primary/50 transition-colors">
                    <h3 className="text-lg font-bold text-text mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500"></span>
                      sUSD.萌
                    </h3>
                    <p className="text-sm">{locale === 'zh' ? '收益凭证代币 (Yield-bearing receipt token)。它承载着源自我们三层架构的自动复利收益 (Auto-compounding yield)。' : 'The yield-bearing receipt token. Holds auto-compounding yields derived from our three-layer architecture.'}</p>
                  </div>
                </div>
              </div>
            </section>

            <div className="w-full h-px bg-border my-12" />

            <section id="architecture" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-text mb-6 flex items-center gap-3">
                <Layers className="w-7 h-7 text-primary" />
                {locale === 'zh' ? '三层架构 (Three-Layer Architecture)' : 'Three-Layer Architecture'}
              </h2>
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                {locale === 'zh' ? 'sUSD.萌 的收益源自一个高度分散、经过实战检验的技术栈，完美桥接了传统金融 (TradFi) 与去中心化协议的红利。' : 'sUSD.萌 derives its yield from a diversified, battle-tested stack that bridges traditional finance with decentralized protocols.'}
              </p>

              <div className="space-y-6">
                {/* Layer 1 */}
                <div className="relative pl-8 md:pl-0">
                  <div className="hidden md:block absolute left-4 top-0 bottom-0 w-px bg-border z-0"></div>
                  <div className="relative z-10 md:pl-12">
                    <div className="hidden md:flex absolute left-0 top-6 w-8 h-8 -ml-4 bg-surface border-2 border-primary rounded-full items-center justify-center font-bold text-primary text-sm">
                      1
                    </div>
                    <div className="bg-surface rounded-2xl p-6 md:p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-text mb-3">{locale === 'zh' ? 'RWA 基础层 (RWA Base Layer)' : 'RWA Foundation (Base Layer)'}</h3>
                      <p className="text-text-secondary mb-4 leading-relaxed">
                        {locale === 'zh' ? '协议的基石由代币化的美国国债 (Tokenized US Treasuries) 和高评级的机构信贷组成。该层确保了一致且低风险的基准收益 (Base yield)，使其完全独立于加密市场的剧烈波动。' : 'The bedrock of the protocol consists of tokenized US Treasuries and highly rated institutional credit. This layer ensures a consistent, low-risk baseline yield that functions independently of crypto market volatility.'}
                      </p>
                      <ul className="space-y-2 text-sm text-text-secondary">
                        <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary" /> {locale === 'zh' ? '与主要 RWA 供应商深度集成' : 'Integration with major RWA providers'}</li>
                        <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary" /> {locale === 'zh' ? '破产隔离的特殊目的机构 (SPV) 结构' : 'Bankruptcy-remote SPV structures'}</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Layer 2 */}
                <div className="relative pl-8 md:pl-0">
                  <div className="hidden md:block absolute left-4 top-0 bottom-0 w-px bg-border z-0"></div>
                  <div className="relative z-10 md:pl-12">
                    <div className="hidden md:flex absolute left-0 top-6 w-8 h-8 -ml-4 bg-surface border-2 border-blue-500 rounded-full items-center justify-center font-bold text-blue-500 text-sm">
                      2
                    </div>
                    <div className="bg-surface rounded-2xl p-6 md:p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-text mb-3">{locale === 'zh' ? 'CeFi 中间层 (CeFi Core Middle Layer)' : 'CeFi Core (Middle Layer)'}</h3>
                      <p className="text-text-secondary mb-4 leading-relaxed">
                        {locale === 'zh' ? '充分利用顶级中心化交易所 (CEX) 中永续合约的资金费率差异以及期现套利 (Basis Trades) 机会。通过采用 Delta 中性策略，我们在保持零方向性敞口的同时捕获高额的利差收益。' : 'Capitalizes on the perpetual futures funding rate disparities and basis trades across top-tier centralized exchanges. By employing delta-neutral strategies, we capture high yields while maintaining zero directional exposure.'}
                      </p>
                      <ul className="space-y-2 text-sm text-text-secondary">
                        <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-blue-500" /> {locale === 'zh' ? '自动化的期现套利执行 (Cash-and-carry)' : 'Automated cash-and-carry execution'}</li>
                        <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-blue-500" /> {locale === 'zh' ? '实时动态对冲算法' : 'Real-time hedging algorithms'}</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Layer 3 */}
                <div className="relative pl-8 md:pl-0">
                  <div className="relative z-10 md:pl-12">
                    <div className="hidden md:flex absolute left-0 top-6 w-8 h-8 -ml-4 bg-surface border-2 border-purple-500 rounded-full items-center justify-center font-bold text-purple-500 text-sm">
                      3
                    </div>
                    <div className="bg-surface rounded-2xl p-6 md:p-8 border border-border shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-text mb-3">{locale === 'zh' ? 'DeFi 外壳层 (DeFi Shell Outer Layer)' : 'DeFi Shell (Outer Layer)'}</h3>
                      <p className="text-text-secondary mb-4 leading-relaxed">
                        {locale === 'zh' ? '最外层通过将流动性部署到蓝筹去中心化协议（如 Aave、Curve、Uniswap）中，以赚取借贷 APY 和交易手续费。它作为一个动态的收益助推器 (Yield booster)，极大优化了资本效率。' : 'The outer layer optimizes capital efficiency by deploying liquidity into blue-chip decentralized protocols (Aave, Curve, Uniswap) for lending APY and trading fees, acting as a dynamic yield booster.'}
                      </p>
                      <ul className="space-y-2 text-sm text-text-secondary">
                        <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-purple-500" /> {locale === 'zh' ? '超额抵押的借贷市场 (Over-collateralized lending)' : 'Over-collateralized lending markets'}</li>
                        <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-purple-500" /> {locale === 'zh' ? '集中流动性提供 (Concentrated liquidity provision)' : 'Concentrated liquidity provision'}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="w-full h-px bg-border my-12" />

            <section id="yield" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-text mb-6 flex items-center gap-3">
                <Zap className="w-7 h-7 text-primary" />
                {locale === 'zh' ? '收益来源 (Yield Sources)' : 'Yield Sources'}
              </h2>
              <div className="bg-surface rounded-2xl p-1 border border-border">
                <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
                  <div className="p-6 text-center">
                    <div className="text-3xl font-extrabold text-text mb-1">~5.2%</div>
                    <div className="text-sm font-medium text-text-secondary uppercase tracking-wide">{locale === 'zh' ? 'RWA 基准收益' : 'RWA Baseline'}</div>
                  </div>
                  <div className="p-6 text-center">
                    <div className="text-3xl font-extrabold text-text mb-1">8-12%</div>
                    <div className="text-sm font-medium text-text-secondary uppercase tracking-wide">{locale === 'zh' ? 'CeFi 期现套利' : 'CeFi Basis'}</div>
                  </div>
                  <div className="p-6 text-center">
                    <div className="text-3xl font-extrabold text-text mb-1">3-7%</div>
                    <div className="text-sm font-medium text-text-secondary uppercase tracking-wide">{locale === 'zh' ? 'DeFi 助推收益' : 'DeFi Boosting'}</div>
                  </div>
                </div>
                <div className="p-4 bg-bg/50 border-t border-border rounded-b-2xl text-center text-sm text-text-secondary">
                  {locale === 'zh' ? '* 历史收益不代表未来表现。APY 会根据市场状况发生波动。' : '* Historical yields are not indicative of future performance. APY fluctuates based on market conditions.'}
                </div>
              </div>
            </section>

            <div className="w-full h-px bg-border my-12" />

            <section id="contracts" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-text mb-6 flex items-center gap-3">
                <Code className="w-7 h-7 text-primary" />
                {locale === 'zh' ? '智能合约 (Smart Contracts)' : 'Smart Contracts'}
              </h2>
              <p className="text-text-secondary mb-6 leading-relaxed">
                {locale === 'zh' ? '我们的智能合约是不可篡改的、已开源验证的，并由领先的安全公司进行了深度审计。您可以在下方找到以太坊主网上已部署的合约地址。' : 'Our smart contracts are immutable, verified, and heavily audited by leading security firms. Find the deployed addresses below for Ethereum Mainnet.'}
              </p>
              
              <div className="bg-[#0d1117] rounded-xl overflow-hidden border border-border">
                <div className="flex items-center justify-between px-4 py-3 border-b border-border/50 bg-[#161b22]">
                  <span className="text-xs font-mono text-[#8b949e]">{locale === 'zh' ? '以太坊主网地址' : 'Addresses (Ethereum)'}</span>
                </div>
                <div className="p-4 overflow-x-auto">
                  <pre className="text-sm font-mono text-[#c9d1d9] leading-relaxed">
<span className="text-[#ff7b72]">const</span> <span className="text-[#79c0ff]">CONTRACTS</span> = {'{'}
  <span className="text-[#a5d6ff]">USDM_TOKEN</span>:      <span className="text-[#a5d6ff]">'0x1234...5678'</span>,
  <span className="text-[#a5d6ff]">S_USDM_TOKEN</span>:    <span className="text-[#a5d6ff]">'0xabcd...ef01'</span>,
  <span className="text-[#a5d6ff]">VAULT_MANAGER</span>:   <span className="text-[#a5d6ff]">'0x9876...5432'</span>,
  <span className="text-[#a5d6ff]">ORACLE_ROUTER</span>:   <span className="text-[#a5d6ff]">'0xbeef...dead'</span>
{'}'};
                  </pre>
                </div>
              </div>
            </section>

            <div className="w-full h-px bg-border my-12" />

            <section id="risks" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-text mb-6 flex items-center gap-3">
                <ShieldAlert className="w-7 h-7 text-primary" />
                {locale === 'zh' ? '风险与缓解措施 (Risks & Mitigations)' : 'Risks & Mitigations'}
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { 
                    title: locale === 'zh' ? "智能合约风险" : "Smart Contract Risk", 
                    desc: locale === 'zh' ? "协议代码中潜在的漏洞或黑客攻击面。" : "Bugs or exploits in the protocol code.", 
                    mitigation: locale === 'zh' ? "由 Tier-1 安全公司（Zellic, Trail of Bits）进行多重审计，设立 $1M+ Immunefi 漏洞赏金，并对核心逻辑进行形式化验证。" : "Multiple audits by Tier-1 firms (Zellic, Trail of Bits), $1M+ Immunefi Bug Bounty, and formal verification of core logic." 
                  },
                  { 
                    title: locale === 'zh' ? "对手方风险 (CeFi 机构)" : "Counterparty Risk (CeFi)", 
                    desc: locale === 'zh' ? "在执行期现套利策略时，交易所可能会发生资不抵债（Insolvency）或破产。" : "Exchange insolvency during basis trading.", 
                    mitigation: locale === 'zh' ? "对每家交易所设定严格的敞口上限，引入实时储备证明 (Proof of Reserves)，并使用 MPC 钱包 (如 Fireblocks) 托管资金。" : "Strict exposure limits per exchange, real-time proof of reserves, and usage of MPC wallets (Fireblocks) to custody funds." 
                  },
                  { 
                    title: locale === 'zh' ? "脱锚风险 (De-peg Risk)" : "De-peg Risk", 
                    desc: locale === 'zh' ? "USD.萌 在二级市场的交易价格可能跌破 $1.00。" : "USDM falling below $1.00 on secondary markets.", 
                    mitigation: locale === 'zh' ? "通过协议保证 1:1 的赎回机制，引入闪电铸造 (Flash-mint) 套利者，并维护稳健的协议控制价值 (PCV) 资金池。" : "Guaranteed 1:1 redemption through the protocol, flash-mint arbitrageurs, and robust PCV (Protocol Controlled Value)." 
                  }
                ].map((risk) => (
                  <div key={risk.title} className="p-5 bg-surface border border-border rounded-xl">
                    <h4 className="text-text font-bold mb-2 text-lg">{risk.title}</h4>
                    <p className="text-text-secondary text-sm mb-4">{risk.desc}</p>
                    <div className="flex items-start gap-2 text-sm bg-primary/5 p-3 rounded-lg border border-primary/10">
                      <span className="text-primary font-bold mt-0.5">↳</span>
                      <span className="text-text-secondary"><strong className="text-text font-semibold">{locale === 'zh' ? '缓解措施：' : 'Mitigation:'}</strong> {risk.mitigation}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <div className="w-full h-px bg-border my-12" />

            <section id="faq" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-text mb-6 flex items-center gap-3">
                <HelpCircle className="w-7 h-7 text-primary" />
                {locale === 'zh' ? '常见问题 (FAQ)' : 'Frequently Asked Questions'}
              </h2>
              <div className="space-y-4">
                {[
                  { 
                    q: locale === 'zh' ? "USD.萌 与 USDC 或 USDT 有什么不同？" : "How is USD.萌 different from USDC or USDT?", 
                    a: locale === 'zh' ? "USD.萌 完全由现实世界资产 (RWA) 和 Delta 中性加密资产作为储备支持，但其原生设计旨在将产生的收益直接路由给 sUSD.萌 持有者，从而形成一个极高资本效率的收益循环。" : "USD.萌 is fully backed by real-world and delta-neutral crypto assets but is designed natively to route its generated yield to sUSD.萌 holders, creating a highly efficient capital loop." 
                  },
                  { 
                    q: locale === 'zh' ? "sUSD.萌 有锁定期吗？" : "Is there a lock-up period for sUSD.萌?", 
                    a: locale === 'zh' ? "没有。您可以随时解除质押并将 sUSD.萌 兑换为 USD.萌，仅受标准协议提款流动性缓冲的限制。" : "No. sUSD.萌 can be un-staked and redeemed for USD.萌 at any time, subject to standard protocol withdrawal liquidity buffers." 
                  },
                  { 
                    q: locale === 'zh' ? "收益多久复利一次？" : "How often is the yield compounded?", 
                    a: locale === 'zh' ? "收益通过 USD.萌 和 sUSD.萌 之间的汇率变化，逐个区块 (Block-by-block) 连续且自动地进行复利。" : "Yield is auto-compounded continuously block-by-block through the exchange rate between USD.萌 and sUSD.萌." 
                  }
                ].map((faq) => (
                  <div key={faq.q} className="group">
                    <div className="p-6 bg-surface border border-border rounded-xl transition-colors hover:border-text-secondary">
                      <h4 className="text-text font-bold mb-2">{faq.q}</h4>
                      <p className="text-text-secondary text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </main>
      </div>
    </div>
  );
};