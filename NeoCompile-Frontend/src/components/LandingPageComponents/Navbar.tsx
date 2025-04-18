import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/Theme/mode-toggle';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-blue-500/5 backdrop-blur-md shadow-md' : 'bg-transparent'
                }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <motion.div
                        className="flex items-center"
                        whileHover={{ scale: 1.05 }}
                    >
                        <NavLink to={'/'} className="flex items-center">
                            <motion.span className="text-2xl font-bold text-gradient">
                                NeoCompile
                            </motion.span>
                        </NavLink>
                    </motion.div>

                    {/* Desktop navigation */}
                    <div className="hidden md:block">
                        <div className="flex items-center space-x-8">
                            <NavLinks />
                            <ModeToggle />
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <ModeToggle />
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-foreground"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <motion.div
                    className="md:hidden bg-card shadow-lg rounded-b-lg mx-4"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <NavLinks mobile setIsMobileMenuOpen={setIsMobileMenuOpen} />
                    </div>
                </motion.div>
            )}
        </motion.header>
    );
};

interface NavLinksProps {
    mobile?: boolean;
    setIsMobileMenuOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavLinks: React.FC<NavLinksProps> = ({ mobile, setIsMobileMenuOpen }) => {

    const handleClick = () => {
        if (mobile && setIsMobileMenuOpen) {
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <>
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <Button
                    className={mobile ? "w-full cursor-pointer" : "cursor-pointer"}
                    onClick={handleClick}
                >
                    Try It Free
                </Button>
            </motion.div>
        </>
    );
};

export default Navbar;