import * as Accordion from '@radix-ui/react-accordion';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { FAQ_DATA } from '@/data/stats';

export const FAQ = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-surface-light/30">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-lg">
            Everything you need to know about the Matryo Finance protocol and how it works.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <Accordion.Root type="single" collapsible className="w-full">
            {FAQ_DATA.map((item, i) => (
              <Accordion.Item
                key={`faq-${i}`}
                value={`item-${i}`}
                className="mb-4 glass border border-border/50 rounded-2xl overflow-hidden data-[state=open]:border-primary/50 data-[state=open]:shadow-lg transition-all duration-300"
              >
                <Accordion.Header className="flex">
                  <Accordion.Trigger className="flex flex-1 items-center justify-between py-6 px-6 text-left text-lg font-bold hover:text-primary transition-colors group [&[data-state=open]_.icon]:rotate-45">
                    {item.q}
                    <div className="icon shrink-0 ml-4 p-2 rounded-full bg-surface border border-border/50 group-hover:border-primary/30 transition-transform duration-300">
                      <Plus className="w-5 h-5" />
                    </div>
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden text-text-muted text-base leading-relaxed data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <div className="px-6 pb-6 pt-0 relative">
                    {/* Indigo left border accent on open state */}
                    <div className="absolute left-0 top-0 bottom-6 w-1 bg-gradient-to-b from-primary to-secondary rounded-r-full" />
                    <div className="pl-4">
                      {item.a}
                    </div>
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </motion.div>
      </div>
    </section>
  );
};
