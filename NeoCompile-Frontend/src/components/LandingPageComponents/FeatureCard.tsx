import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cardHover } from '@/lib/animations';

interface FeatureCardProps {
    title: string;
    description: string;
    Icon: LucideIcon;
    index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, Icon, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut"
            }}
            whileHover="hover"
            variants={cardHover}
        >
            <Card className="border border-accent/50 bg-violet-500/5 backdrop-blur-sm h-full overflow-hidden group">
                <CardHeader className="pb-2">
                    <div className="mb-4 bg-violet-500/10 p-3 rounded-lg w-fit transition-all duration-300 group-hover:bg-violet-500/20">
                        <Icon className="h-6 w-6 text-violet-500" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-gradient transition-all duration-300">{title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription className="text-muted-foreground">{description}</CardDescription>
                </CardContent>
                <div className="h-1 w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></div>
            </Card>
        </motion.div>
    );
};

export default FeatureCard;