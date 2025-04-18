import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { fadeIn } from '@/lib/animations';
import Navbar from '@/components/LandingPageComponents/Navbar';
import HeroSection from '@/components/LandingPageComponents/HeroSection';
import FeatureSection from '@/components/LandingPageComponents/FeatureSection';
import CTASection from '@/components/LandingPageComponents/CTASection';
import Footer from '@/components/LandingPageComponents/Footer';
import AnimatedBackground from '@/components/LandingPageComponents/AnimatedBackground';

const Page: React.FC = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start('visible');

    // Scroll restoration for navigation
    window.scrollTo(0, 0);

    // Add smooth scrolling for anchor links
    const handleAnchorClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const anchor = target.closest('a');

      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        event.preventDefault();
        const targetId = anchor.hash.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Account for fixed header
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, [controls]);

  return (
    <motion.div
      className="relative min-h-screen"
      initial="hidden"
      animate={controls}
      variants={fadeIn}
    >
      <AnimatedBackground />
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <CTASection />
      <Footer />
    </motion.div>
  );
}

export default Page;