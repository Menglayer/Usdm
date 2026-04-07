import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/landing/Hero';
import { ProblemStatement } from '@/components/landing/ProblemStatement';
import { MatryoshkaModel } from '@/components/landing/MatryoshkaModel';
import { HowItWorks } from '@/components/landing/HowItWorks';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-bg text-text selection:bg-indigo-500/30 font-sans">
      <Header />
      <main>
        <Hero />
        <ProblemStatement />
        <MatryoshkaModel />
        <HowItWorks />
        
        {/* Placeholder sections as requested */}
        <div id="YieldBreakdown" />
        <div id="YieldCalculator" />
        <div id="Security" />
        <div id="PointsSystem" />
        <div id="Ecosystem" />
        <div id="Redemption" />
        <div id="FAQ" />
        <div id="CTAFooter" />
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;
