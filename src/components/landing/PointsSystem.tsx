import { motion } from 'framer-motion';
import { AnimatedCounter } from '@/components/shared/AnimatedCounter';
import { CheckCircle2, ChevronRight, Zap } from 'lucide-react';

export const PointsSystem = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-surface-light/30">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute -bottom-96 -right-96 w-[800px] h-[800px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 text-primary mb-6 text-sm font-semibold tracking-wide uppercase"
          >
            <Zap className="w-4 h-4 fill-primary" />
            Matryoshka Points
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Stack points. Unlock rewards.
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-lg">
            Matryoshka Points (MP) reward every interaction. The earlier you participate, the more you earn.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-strong rounded-3xl p-8 border border-border/50"
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm">1</span>
              How to earn points
            </h3>
            <ul className="space-y-6">
              {[
                { title: 'Hold mUSD/smUSD', desc: '1 MP per $1 per day' },
                { title: 'Provide LP', desc: '3x multiplier on your base points' },
                { title: 'Referrals', desc: "10% of your referee's points" },
                { title: 'Early adopter', desc: '2x bonus for the first 90 days', highlight: true }
              ].map((item) => (
                <li key={item.title} className="flex items-start gap-4 group">
                  <div className="mt-1">
                    <CheckCircle2 className="w-6 h-6 text-success opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text group-hover:text-white transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-text-muted text-sm mt-1">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-strong rounded-3xl p-8 border border-border/50 bg-surface/80"
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary text-sm">2</span>
              What points unlock
            </h3>
            <ul className="space-y-4">
              {[
                'Future token airdrops',
                'APY boosts (up to +2%)',
                'Governance voting power',
                'VIP strategy access',
                'Exclusive NFT badges'
              ].map((item) => (
                <li key={item} className="flex items-center gap-4 glass px-4 py-3 rounded-xl border border-border/30 hover:border-secondary/30 transition-colors cursor-default group">
                  <ChevronRight className="w-5 h-5 text-secondary opacity-50 group-hover:opacity-100 transition-all group-hover:translate-x-1" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 text-center">
              <div className="text-sm font-medium text-text-secondary uppercase tracking-wider mb-2">
                Total MP Distributed
              </div>
              <div className="text-4xl md:text-5xl font-mono font-bold text-gradient">
                <AnimatedCounter end={24500000} duration={2} separator="," />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
