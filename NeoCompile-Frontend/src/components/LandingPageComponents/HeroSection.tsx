import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { fadeIn, fadeInUp, staggerContainer, typingContainer, typingText } from '@/lib/animations';
import CodeDemo from './CodeDemo';
import { useNavigate } from 'react-router-dom';

const HeroSection: React.FC = () => {
    const navigate = useNavigate();

    const gotoEditor = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        navigate('code-editor');
    }
    return (
        <section className="relative min-h-screen flex items-center pt-16">
            <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Left column: Text content */}
                    <motion.div
                        className="text-center lg:text-left"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeInUp}>
                            <span className="inline-block px-3 py-1 rounded-full bg-violet-500/10 text-violet-600 text-sm font-medium mb-4">
                                Revolutionize Your Coding Experience
                            </span>
                        </motion.div>

                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 glow"
                            variants={fadeInUp}
                        >
                            <span className="text-gradient">AI-Powered</span> Code Compilation in Seconds
                        </motion.h1>

                        <motion.div
                            className="overflow-hidden mb-8"
                            variants={fadeInUp}
                        >
                            <motion.p
                                className="text-lg text-muted-foreground"
                                variants={typingContainer}
                                initial="hidden"
                                animate="visible"
                            >
                                {Array.from(
                                    "Experience lightning-fast compilation with multi-language support and real-time error detection."
                                ).map((char, index) => (
                                    <motion.span key={index} variants={typingText}>
                                        {char}
                                    </motion.span>
                                ))}
                            </motion.p>
                        </motion.div>

                        <motion.div
                            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-8"
                            variants={fadeInUp}
                        >
                            <Button onClick={gotoEditor} className="text-lg px-8 py-6 cursor-pointer" size="lg">
                                Get Started
                            </Button>
                            <Button onClick={gotoEditor} variant="outline" className="text-lg px-8 py-6 cursor-pointer" size="lg">
                                Watch Demo
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Right column: Code demo */}
                    <motion.div
                        className="relative"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                    >
                        <div className="relative">
                            <motion.div
                                className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-accent/50 rounded-lg blur-lg opacity-75"
                                animate={{
                                    opacity: [0.5, 0.8, 0.5],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }}
                            />
                            <CodeDemo />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;