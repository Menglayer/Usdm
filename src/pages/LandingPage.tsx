import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/landing/Hero';
import { ProblemStatement } from '@/components/landing/ProblemStatement';
import { MatryoshkaModel } from '@/components/landing/MatryoshkaModel';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { YieldBreakdown } from '@/components/landing/YieldBreakdown';
import { YieldCalculator } from '@/components/landing/YieldCalculator';
import { Security } from '@/components/landing/Security';
import { PointsSystem } from '@/components/landing/PointsSystem';
import { Ecosystem } from '@/components/landing/Ecosystem';
import { Redemption } from '@/components/landing/Redemption';
import { FAQ } from '@/components/landing/FAQ';
import { CTAFooter } from '@/components/landing/CTAFooter';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-bg text-text selection:bg-indigo-500/30 font-sans">
      <Header />
      <main>
        <Hero />
        <ProblemStatement />
        <MatryoshkaModel />
        <HowItWorks />
        <YieldBreakdown />
        <YieldCalculator />
        <Security />
        <PointsSystem />
        <Ecosystem />
        <Redemption />
        <FAQ />
        <CTAFooter />
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;
