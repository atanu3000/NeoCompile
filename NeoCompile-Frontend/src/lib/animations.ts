import { Variants } from "framer-motion";

// Animation variants for elements
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: 0.6 } 
  }
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6 } 
  }
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6 } 
  }
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6 } 
  }
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6 } 
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    } 
  }
};

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.6 } 
  }
};

export const codeBlockReveal: Variants = {
  hidden: { opacity: 0, height: 0 },
  visible: { 
    opacity: 1, 
    height: "auto", 
    transition: { duration: 0.8, ease: "easeInOut" } 
  }
};

export const typingContainer: Variants = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
  }),
};

export const typingText: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

export const buttonHover = {
  hover: { 
    scale: 1.05, 
    transition: { duration: 0.2 } 
  },
  tap: { 
    scale: 0.98, 
    transition: { duration: 0.2 } 
  }
};

export const cardHover = {
  hover: { 
    y: -10, 
    transition: { duration: 0.3 } 
  }
};

export const rotateInOut: Variants = {
  hidden: { opacity: 0, rotate: -10 },
  visible: { 
    opacity: 1, 
    rotate: 0, 
    transition: { duration: 0.6 } 
  }
};