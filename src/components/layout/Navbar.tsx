'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { name: 'Work', href: '/works-grid' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Studio', href: '/studio' },
    { name: 'Store', href: '/store' },
    { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <>
            <nav
                className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 pt-12 pb-6`}
            >
                <div className="w-full px-6 md:px-12 flex items-center justify-between">
                    {/* Logo */}
                    {/* Logo */}
                    <Link href="/" className="relative z-50 translate-x-2 translate-y-1">
                        <span className="text-xl md:text-2xl font-light tracking-wide text-white">WeFrameMedia</span>
                    </Link>

                    {/* Desktop Navigation */}
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center">
                        {navLinks.map((link, index) => (
                            <span key={link.name} className="flex items-center">
                                <Link
                                    href={link.href}
                                    className="text-xl md:text-2xl font-medium tracking-tight text-white hover:text-white/80 transition-colors"
                                >
                                    {link.name}
                                </Link>
                                {index < navLinks.length - 1 && (
                                    <span className="text-white mx-1 text-xl md:text-2xl">,</span>
                                )}
                            </span>
                        ))}
                    </div>

                    {/* Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="relative z-50 flex flex-col items-center justify-center w-12 h-12 gap-1.5 md:hidden"
                        aria-label="Toggle menu"
                    >
                        <motion.span
                            animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                            className="w-6 h-0.5 bg-foreground block"
                        />
                        <motion.span
                            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="w-6 h-0.5 bg-foreground block"
                        />
                        <motion.span
                            animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                            className="w-6 h-0.5 bg-foreground block"
                        />
                    </button>


                </div>
            </nav>

            {/* Full Screen Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-background"
                    >
                        <div className="container-custom h-full flex flex-col justify-center">
                            <nav className="flex flex-col gap-4">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -50 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="text-display font-serif hover:text-muted transition-colors block"
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            {/* Menu Footer */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="mt-16 flex flex-col gap-4 text-muted"
                            >
                                <p className="text-sm">Get in touch</p>
                                <a
                                    href="mailto:hello@weframemedia.com"
                                    className="text-lg hover:text-foreground transition-colors"
                                >
                                    hello@weframemedia.com
                                </a>
                                <div className="flex gap-6 mt-4">
                                    <a
                                        href="https://instagram.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-foreground transition-colors"
                                    >
                                        Instagram
                                    </a>
                                    <a
                                        href="https://vimeo.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-foreground transition-colors"
                                    >
                                        Vimeo
                                    </a>
                                    <a
                                        href="https://linkedin.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-foreground transition-colors"
                                    >
                                        LinkedIn
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
