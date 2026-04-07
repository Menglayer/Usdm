import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ContentLayoutProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export const ContentLayout = ({ title, subtitle, children }: ContentLayoutProps) => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-bg text-text pt-24 pb-20 selection:bg-primary/30 selection:text-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link to="/" className="inline-flex items-center gap-2 text-text-muted hover:text-primary transition-colors mb-12 group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          {t('nav.home') || 'Back to Home'}
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-text-muted">
              {subtitle}
            </p>
          )}
          <div className="h-px w-full bg-gradient-to-r from-border via-border/50 to-transparent mt-12" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="prose prose-invert prose-lg max-w-none 
            prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-text 
            prose-p:text-text-secondary prose-p:leading-relaxed
            prose-a:text-primary prose-a:no-underline hover:prose-a:text-secondary prose-a:transition-colors
            prose-strong:text-text prose-strong:font-semibold
            prose-ul:text-text-secondary prose-li:marker:text-primary
            prose-code:text-primary prose-code:bg-primary/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};
