import { useState } from 'react';
import { ArrowLeft, BookOpen, Layers, Zap, Code, ShieldAlert, HelpCircle, ChevronRight, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export const DocsPage = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sections = [
    { id: 'overview', title: 'Overview', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'architecture', title: 'Architecture', icon: <Layers className="w-4 h-4" /> },
    { id: 'yield', title: 'Yield Sources', icon: <Zap className="w-4 h-4" /> },
    { id: 'contracts', title: 'Smart Contracts', icon: <Code className="w-4 h-4" /> },
    { id: 'risks', title: 'Risks', icon: <ShieldAlert className="w-4 h-4" /> },
    { id: 'faq', title: 'FAQ', icon: <HelpCircle className="w-4 h-4" /> },
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
          <span className="text-primary text-xl">萌</span> Matryo Docs
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
              Back to Home
            </Link>
            
            <div className="flex items-center gap-3 mt-4 mb-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                <span className="text-primary font-bold">萌</span>
              </div>
              <div>
                <h1 className="text-base font-bold text-text">Matryo Finance</h1>
                <p className="text-xs text-text-secondary">Documentation</p>
              </div>
            </div>

            <nav className="flex-1 overflow-y-auto pr-2 -mr-2 space-y-1 mt-4">
              <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-3 px-3">Sections</p>
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
                Back to Home
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
                <span>V2.0 Documentation</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-text mb-6">
                Matryo Finance
              </h1>
              <p className="text-xl text-text-secondary leading-relaxed mb-8">
                The ultimate nested yield architecture. Introducing <strong className="text-text">USD.萌</strong> and its yield-bearing counterpart <strong className="text-text">sUSD.萌</strong>.
              </p>
              
              <div className="prose prose-invert max-w-none text-text-secondary">
                <p className="leading-relaxed">
                  Matryo Finance operates on a revolutionary "nested doll" principle, layering distinct yield primitives to create an aggregated, risk-adjusted, and highly efficient stablecoin ecosystem. By abstracting the complexity of yield generation, USD.萌 provides a stable unit of account while sUSD.萌 accrues real-world and on-chain value autonomously.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  <div className="p-6 rounded-xl bg-surface border border-border hover:border-primary/50 transition-colors">
                    <h3 className="text-lg font-bold text-text mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                      USD.萌
                    </h3>
                    <p className="text-sm">The base layer stablecoin, pegged 1:1 to the US Dollar, optimized for deep liquidity and seamless integration.</p>
                  </div>
                  <div className="p-6 rounded-xl bg-surface border border-border hover:border-primary/50 transition-colors">
                    <h3 className="text-lg font-bold text-text mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500"></span>
                      sUSD.萌
                    </h3>
                    <p className="text-sm">The yield-bearing receipt token. Holds auto-compounding yields derived from our three-layer architecture.</p>
                  </div>
                </div>
              </div>
            </section>

            <div className="w-full h-px bg-border my-12" />

            <section id="architecture" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-text mb-6 flex items-center gap-3">
                <Layers className="w-7 h-7 text-primary" />
                Three-Layer Architecture
              </h2>
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                sUSD.萌 derives its yield from a diversified, battle-tested stack that bridges traditional finance with decentralized protocols.
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
                      <h3 className="text-xl font-bold text-text mb-3">RWA Foundation (Base Layer)</h3>
                      <p className="text-text-secondary mb-4 leading-relaxed">
                        The bedrock of the protocol consists of tokenized US Treasuries and highly rated institutional credit. This layer ensures a consistent, low-risk baseline yield that functions independently of crypto market volatility.
                      </p>
                      <ul className="space-y-2 text-sm text-text-secondary">
                        <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary" /> Integration with major RWA providers</li>
                        <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-primary" /> Bankruptcy-remote SPV structures</li>
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
                      <h3 className="text-xl font-bold text-text mb-3">CeFi Core (Middle Layer)</h3>
                      <p className="text-text-secondary mb-4 leading-relaxed">
                        Capitalizes on the perpetual futures funding rate disparities and basis trades across top-tier centralized exchanges. By employing delta-neutral strategies, we capture high yields while maintaining zero directional exposure.
                      </p>
                      <ul className="space-y-2 text-sm text-text-secondary">
                        <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-blue-500" /> Automated cash-and-carry execution</li>
                        <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-blue-500" /> Real-time hedging algorithms</li>
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
                      <h3 className="text-xl font-bold text-text mb-3">DeFi Shell (Outer Layer)</h3>
                      <p className="text-text-secondary mb-4 leading-relaxed">
                        The outer layer optimizes capital efficiency by deploying liquidity into blue-chip decentralized protocols (Aave, Curve, Uniswap) for lending APY and trading fees, acting as a dynamic yield booster.
                      </p>
                      <ul className="space-y-2 text-sm text-text-secondary">
                        <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-purple-500" /> Over-collateralized lending markets</li>
                        <li className="flex items-center gap-2"><ChevronRight className="w-4 h-4 text-purple-500" /> Concentrated liquidity provision</li>
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
                Yield Sources
              </h2>
              <div className="bg-surface rounded-2xl p-1 border border-border">
                <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
                  <div className="p-6 text-center">
                    <div className="text-3xl font-extrabold text-text mb-1">~5.2%</div>
                    <div className="text-sm font-medium text-text-secondary uppercase tracking-wide">RWA Baseline</div>
                  </div>
                  <div className="p-6 text-center">
                    <div className="text-3xl font-extrabold text-text mb-1">8-12%</div>
                    <div className="text-sm font-medium text-text-secondary uppercase tracking-wide">CeFi Basis</div>
                  </div>
                  <div className="p-6 text-center">
                    <div className="text-3xl font-extrabold text-text mb-1">3-7%</div>
                    <div className="text-sm font-medium text-text-secondary uppercase tracking-wide">DeFi Boosting</div>
                  </div>
                </div>
                <div className="p-4 bg-bg/50 border-t border-border rounded-b-2xl text-center text-sm text-text-secondary">
                  * Historical yields are not indicative of future performance. APY fluctuates based on market conditions.
                </div>
              </div>
            </section>

            <div className="w-full h-px bg-border my-12" />

            <section id="contracts" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-text mb-6 flex items-center gap-3">
                <Code className="w-7 h-7 text-primary" />
                Smart Contracts
              </h2>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Our smart contracts are immutable, verified, and heavily audited by leading security firms. Find the deployed addresses below for Ethereum Mainnet.
              </p>
              
              <div className="bg-[#0d1117] rounded-xl overflow-hidden border border-border">
                <div className="flex items-center justify-between px-4 py-3 border-b border-border/50 bg-[#161b22]">
                  <span className="text-xs font-mono text-[#8b949e]">Addresses (Ethereum)</span>
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
                Risks & Mitigations
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { title: "Smart Contract Risk", desc: "Bugs or exploits in the protocol code.", mitigation: "Multiple audits by Tier-1 firms (Zellic, Trail of Bits), $1M+ Immunefi Bug Bounty, and formal verification of core logic." },
                  { title: "Counterparty Risk (CeFi)", desc: "Exchange insolvency during basis trading.", mitigation: "Strict exposure limits per exchange, real-time proof of reserves, and usage of MPC wallets (Fireblocks) to custody funds." },
                  { title: "De-peg Risk", desc: "USDM falling below $1.00 on secondary markets.", mitigation: "Guaranteed 1:1 redemption through the protocol, flash-mint arbitrageurs, and robust PCV (Protocol Controlled Value)." }
                ].map((risk) => (
                  <div key={risk.title} className="p-5 bg-surface border border-border rounded-xl">
                    <h4 className="text-text font-bold mb-2 text-lg">{risk.title}</h4>
                    <p className="text-text-secondary text-sm mb-4">{risk.desc}</p>
                    <div className="flex items-start gap-2 text-sm bg-primary/5 p-3 rounded-lg border border-primary/10">
                      <span className="text-primary font-bold mt-0.5">↳</span>
                      <span className="text-text-secondary"><strong className="text-text font-semibold">Mitigation:</strong> {risk.mitigation}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <div className="w-full h-px bg-border my-12" />

            <section id="faq" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-text mb-6 flex items-center gap-3">
                <HelpCircle className="w-7 h-7 text-primary" />
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {[
                  { q: "How is USD.萌 different from USDC or USDT?", a: "USD.萌 is fully backed by real-world and delta-neutral crypto assets but is designed natively to route its generated yield to sUSD.萌 holders, creating a highly efficient capital loop." },
                  { q: "Is there a lock-up period for sUSD.萌?", a: "No. sUSD.萌 can be un-staked and redeemed for USD.萌 at any time, subject to standard protocol withdrawal liquidity buffers." },
                  { q: "How often is the yield compounded?", a: "Yield is auto-compounded continuously block-by-block through the exchange rate between USD.萌 and sUSD.萌." }
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
