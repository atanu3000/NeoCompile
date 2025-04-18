import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, ZapIcon, Diff, Sparkles, Terminal, GitCompare, Clock } from 'lucide-react';
import { fadeIn } from '@/lib/animations';
import FeatureCard from './FeatureCard';

const features = [
    {
        title: 'AI Code Optimization',
        description: 'Our advanced AI analyzes your code and optimizes it for performance and readability.',
        Icon: Brain
    },
    {
        title: 'Real-time Compilation',
        description: 'See instant results with our lightning-fast compiler that processes code on-the-fly.',
        Icon: ZapIcon
    },
    {
        title: 'Multi-language Support',
        description: 'Code in JavaScript, Python, Go, Rust, C++, and many more programming languages.',
        Icon: Terminal
    },
    {
        title: 'Smart Error Detection',
        description: 'Intelligent error analysis that not only identifies bugs but suggests fixes.',
        Icon: Diff
    },
    {
        title: 'Auto-Completion',
        description: 'Context-aware code suggestions that help you write code faster and with fewer errors.',
        Icon: Sparkles
    },
    {
        title: 'Version Control',
        description: 'Seamlessly integrate with your preferred version control system to track changes.',
        Icon: GitCompare
    },
    {
        title: 'Speed Benchmarking',
        description: 'Analyze code performance and optimize for speed with detailed metrics.',
        Icon: Clock
    },
    {
        title: 'Serverless Execution',
        description: 'Run your code in a secure cloud environment without managing infrastructure.',
        Icon: Cpu
    }
];

const FeatureSection: React.FC = () => {
    return (
        <section id="features" className="relative py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Powerful Features for Modern Developers</h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Our platform combines cutting-edge AI technology with lightning-fast compilation to elevate your coding experience.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={feature.title}
                            title={feature.title}
                            description={feature.description}
                            Icon={feature.Icon}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeatureSection;