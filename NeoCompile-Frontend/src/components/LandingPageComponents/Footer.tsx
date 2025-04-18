import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    const footerLinks = [
        {
            title: 'Product',
            links: [
                { name: 'Features', url: '#features' },
                { name: 'Documentation', url: '#' },
            ],
        },
        {
            title: 'Company',
            links: [
                { name: 'About', url: '#' },
                { name: 'Contact', url: '#' },
            ],
        },
        {
            title: 'Legal',
            links: [
                { name: 'Privacy', url: '#' },
                { name: 'Terms', url: '#' },
            ],
        },
    ];

    const socialLinks = [
        { name: 'Github', icon: Github, url: '#' },
        { name: 'Twitter', icon: Twitter, url: '#' },
        { name: 'LinkedIn', icon: Linkedin, url: '#' },
        { name: 'Facebook', icon: Facebook, url: '#' },
    ];

    return (
        <footer className="bg-secondary/20 pt-16 pb-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-6 gap-8 pb-12">
                    {/* Logo and description */}
                    <div className="col-span-2">
                        <motion.div
                            className="mb-4"
                            whileHover={{ scale: 1.05 }}
                        >
                            <Link to={'/'} className="flex items-center">
                                <span className="text-2xl font-bold text-gradient">
                                    NeoCompile
                                </span>
                            </Link>
                        </motion.div>
                        <p className="text-muted-foreground mb-4">
                            The next-generation AI-powered code compiler that helps developers write better code, faster.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((link) => (
                                <motion.a
                                    key={link.name}
                                    href={link.url}
                                    className="text-muted-foreground hover:text-accent transition-colors"
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    <link.icon size={20} />
                                    <span className="sr-only">{link.name}</span>
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Footer links */}
                    {footerLinks.map((section) => (
                        <div key={section.title} className="col-span-1">
                            <h3 className="font-medium text-lg mb-4">{section.title}</h3>
                            <ul className="space-y-2">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        <motion.a
                                            href={link.url}
                                            className="text-muted-foreground hover:text-accent transition-colors"
                                            whileHover={{ x: 3 }}
                                        >
                                            {link.name}
                                        </motion.a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-secondary/50 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-muted-foreground text-sm">
                        &copy; {new Date().getFullYear()} NeoCompile. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="text-muted-foreground hover:text-accent text-sm">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-muted-foreground hover:text-accent text-sm">
                            Terms of Service
                        </a>
                        <a href="#" className="text-muted-foreground hover:text-accent text-sm">
                            Cookies
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;