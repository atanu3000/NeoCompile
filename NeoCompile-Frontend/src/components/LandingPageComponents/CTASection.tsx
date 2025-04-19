import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, buttonHover } from '@/lib/animations';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const CTASection: React.FC = () => {
  const navigate = useNavigate();

  const gotoEditor = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate('code-editor');
  }
  return (
    <section className="relative py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="rounded-2xl overflow-hidden relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-animation"></div>

          {/* Content with backdrop filter */}
          <div className="relative bg-secondary/50 backdrop-blur-xl p-8 md:p-16 text-center">
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Ready to Transform Your Coding Experience?
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Start coding smarter, not harder. Join thousands of developers who have already improved their workflow with our AI-powered code compiler.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <motion.div whileHover="hover" whileTap="tap" variants={buttonHover}>
                <Button onClick={gotoEditor} className="text-lg px-8 py-6" size="lg">
                  Get Started for Free
                </Button>
              </motion.div>

              <motion.div whileHover="hover" whileTap="tap" variants={buttonHover}>
                <Button onClick={gotoEditor} variant="outline" className="text-lg px-8 py-6" size="lg">
                  Try a Demo
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;