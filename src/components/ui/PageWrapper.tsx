import React from 'react';
import { motion } from 'framer-motion';
import { routeVariants, containerVariants } from './animations';

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({ children, className = "space-y-6" }) => {
  return (
    <motion.div
      variants={routeVariants}
      initial="initial"
      animate="enter"
      exit="exit"
      className={className}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};
