import type { Variants } from 'framer-motion';

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
    },
  },
};

export const routeVariants: Variants = {
  initial: { opacity: 0, y: 10 },
  enter: { 
    opacity: 1, 
    y: 0, 
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    } 
  },
  exit: { 
    opacity: 0, 
    y: -10, 
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
    } 
  },
};
