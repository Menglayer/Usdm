import { ContentLayout } from '@/components/layout/ContentLayout';
import { ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const AuditsPage = () => {
  return (
    <ContentLayout 
      title="Security & Audits" 
      subtitle="Transparency and security are foundational to the USDM Protocol."
    >
      <div className="space-y-12">
        <section>
          <h2>Our Commitment to Security</h2>
          <p>
            At USDM, security is not just an afterthought—it's woven into every line of code we ship. 
            Before any major upgrade or new contract deployment, our code undergoes rigorous review 
            by top-tier smart contract auditing firms. Furthermore, we maintain a robust bug bounty 
            program.
          </p>
          <div className="flex items-center gap-4 mt-8 p-6 bg-green-500/10 border border-green-500/20 rounded-xl">
            <ShieldCheck className="w-12 h-12 text-green-500 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-green-500 m-0 mb-1">Total Value Secured: $250M+</h3>
              <p className="m-0 text-text-muted">Zero critical vulnerabilities found in production.</p>
            </div>
          </div>
        </section>

        <section>
          <h2>Recent Audit Reports</h2>
          <div className="grid gap-6 mt-8">
            <div className="group relative flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 bg-surface border border-border hover:border-primary/50 rounded-xl transition-colors">
              <div className="flex items-start gap-4 mb-4 sm:mb-0">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="text-lg font-bold m-0 mb-1 group-hover:text-primary transition-colors">Zellic Security</h4>
                  <p className="text-sm text-text-muted m-0">Core Protocol v2.0 • Nov 2025</p>
                </div>
              </div>
              <a 
                href="https://zellic.io" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary hover:bg-primary hover:text-bg rounded-lg text-sm font-semibold transition-colors no-underline"
              >
                View PDF <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="group relative flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 bg-surface border border-border hover:border-primary/50 rounded-xl transition-colors">
              <div className="flex items-start gap-4 mb-4 sm:mb-0">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="text-lg font-bold m-0 mb-1 group-hover:text-primary transition-colors">Trail of Bits</h4>
                  <p className="text-sm text-text-muted m-0">Yield Aggregator Module • Aug 2025</p>
                </div>
              </div>
              <a 
                href="https://trailofbits.com" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary hover:bg-primary hover:text-bg rounded-lg text-sm font-semibold transition-colors no-underline"
              >
                View PDF <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="group relative flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 bg-surface border border-border hover:border-primary/50 rounded-xl transition-colors">
              <div className="flex items-start gap-4 mb-4 sm:mb-0">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h4 className="text-lg font-bold m-0 mb-1 group-hover:text-primary transition-colors">OpenZeppelin</h4>
                  <p className="text-sm text-text-muted m-0">Core Protocol v1.0 • Jan 2025</p>
                </div>
              </div>
              <a 
                href="https://openzeppelin.com" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary hover:bg-primary hover:text-bg rounded-lg text-sm font-semibold transition-colors no-underline"
              >
                View PDF <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        <section>
          <h2>Bug Bounty Program</h2>
          <p>
            We offer up to $1,000,000 for critical smart contract vulnerabilities through our 
            Immunefi bug bounty program.
          </p>
          <a 
            href="https://immunefi.com" 
            target="_blank" 
            rel="noreferrer"
            className="inline-block mt-4 text-primary font-bold hover:text-secondary transition-colors no-underline"
          >
            Submit a Vulnerability Report →
          </a>
        </section>
      </div>
    </ContentLayout>
  );
};
