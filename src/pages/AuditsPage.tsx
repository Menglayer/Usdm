import { ContentLayout } from '@/components/layout/ContentLayout';
import { ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const AuditsPage = () => {
  const { locale } = useLanguage();
  return (
    <ContentLayout 
      title={locale === 'zh' ? '安全与审计' : 'Security & Audits'} 
      subtitle={locale === 'zh' ? '透明度与安全性是 USD.萌 协议的基石。' : 'Transparency and security are foundational to the USDM Protocol.'}
    >
      <div className="space-y-12">
        <section>
          <h2>{locale === 'zh' ? '我们对安全的承诺' : 'Our Commitment to Security'}</h2>
          <p>
            {locale === 'zh' ? '在 USD.萌，安全不仅仅是事后补充——它融入了我们交付的每一行代码中。在进行任何重大升级或部署新合约之前，我们的代码都会经过顶级智能合约审计公司的严格审查。此外，我们还维护着一个强大的漏洞赏金计划。' : 'At USDM, security is not just an afterthought—it\'s woven into every line of code we ship. Before any major upgrade or new contract deployment, our code undergoes rigorous review by top-tier smart contract auditing firms. Furthermore, we maintain a robust bug bounty program.'}
          </p>
          <div className="flex items-center gap-4 mt-8 p-6 bg-green-500/10 border border-green-500/20 rounded-xl">
            <ShieldCheck className="w-12 h-12 text-green-500 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-green-500 m-0 mb-1">{locale === 'zh' ? '总资产安全保障: $2.5亿+' : 'Total Value Secured: $250M+'}</h3>
              <p className="m-0 text-text-muted">{locale === 'zh' ? '生产环境中未发现任何严重漏洞。' : 'Zero critical vulnerabilities found in production.'}</p>
            </div>
          </div>
        </section>

        <section>
          <h2>{locale === 'zh' ? '最新审计报告' : 'Recent Audit Reports'}</h2>
          <div className="grid gap-6 mt-8">
            <div className="group relative flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 bg-surface border border-border hover:border-primary/50 rounded-xl transition-colors">
              <div className="flex items-start gap-4 mb-4 sm:mb-0">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="text-lg font-bold m-0 mb-1 group-hover:text-primary transition-colors">Zellic Security</h4>
                  <p className="text-sm text-text-muted m-0">{locale === 'zh' ? '核心协议 v2.0 • 2025年11月' : 'Core Protocol v2.0 • Nov 2025'}</p>
                </div>
              </div>
              <a 
                href="https://zellic.io" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary hover:bg-primary hover:text-bg rounded-lg text-sm font-semibold transition-colors no-underline"
              >
                {locale === 'zh' ? '查看 PDF' : 'View PDF'} <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="group relative flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 bg-surface border border-border hover:border-primary/50 rounded-xl transition-colors">
              <div className="flex items-start gap-4 mb-4 sm:mb-0">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="text-lg font-bold m-0 mb-1 group-hover:text-primary transition-colors">Trail of Bits</h4>
                  <p className="text-sm text-text-muted m-0">{locale === 'zh' ? '收益聚合器模块 (Yield Aggregator Module) • 2025年8月' : 'Yield Aggregator Module • Aug 2025'}</p>
                </div>
              </div>
              <a 
                href="https://trailofbits.com" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary hover:bg-primary hover:text-bg rounded-lg text-sm font-semibold transition-colors no-underline"
              >
                {locale === 'zh' ? '查看 PDF' : 'View PDF'} <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="group relative flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 bg-surface border border-border hover:border-primary/50 rounded-xl transition-colors">
              <div className="flex items-start gap-4 mb-4 sm:mb-0">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="text-lg font-bold m-0 mb-1 group-hover:text-primary transition-colors">OpenZeppelin</h4>
                  <p className="text-sm text-text-muted m-0">{locale === 'zh' ? '核心协议 v1.0 • 2025年1月' : 'Core Protocol v1.0 • Jan 2025'}</p>
                </div>
              </div>
              <a 
                href="https://openzeppelin.com" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary hover:bg-primary hover:text-bg rounded-lg text-sm font-semibold transition-colors no-underline"
              >
                {locale === 'zh' ? '查看 PDF' : 'View PDF'} <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        <section>
          <h2>{locale === 'zh' ? '漏洞赏金计划' : 'Bug Bounty Program'}</h2>
          <p>
            {locale === 'zh' ? '通过我们的 Immunefi 漏洞赏金计划，针对关键的智能合约漏洞，我们提供最高达 1,000,000 美元的奖励。' : 'We offer up to $1,000,000 for critical smart contract vulnerabilities through our Immunefi bug bounty program.'}
          </p>
          <a 
            href="https://immunefi.com" 
            target="_blank" 
            rel="noreferrer"
            className="inline-block mt-4 text-primary font-bold hover:text-secondary transition-colors no-underline"
          >
            {locale === 'zh' ? '提交漏洞报告 →' : 'Submit a Vulnerability Report →'}
          </a>
        </section>
      </div>
    </ContentLayout>
  );
};