'use client';

import Link from 'next/link';
import Image from 'next/image';

const footerLinks = [
    { name: 'Work', href: '/works-grid' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
];

const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com' },
    { name: 'Vimeo', href: 'https://vimeo.com' },
    { name: 'LinkedIn', href: 'https://linkedin.com' },
];

export default function Footer() {
    return (
        <footer className="bg-background border-t border-border">
            <div className="container-custom py-16">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    {/* Email Section */}
                    <div className="md:col-span-4">
                        <p className="text-sm text-muted mb-2">E:</p>
                        <a
                            href="mailto:hello@weframemedia.com"
                            className="text-lg hover:text-muted transition-colors link-underline"
                        >
                            hello@weframemedia.com
                        </a>
                    </div>

                    {/* Navigation Links */}
                    <div className="md:col-span-4">
                        <nav className="flex flex-col gap-3">
                            {footerLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-foreground hover:text-muted transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Logo and Copyright */}
                    <div className="md:col-span-4 flex flex-col items-start md:items-end justify-between">
                        <Image
                            src="/WFM.png"
                            alt="WeFrame Media"
                            width={100}
                            height={33}
                            className="h-8 w-auto mb-8"
                        />
                        <div className="text-sm text-muted">
                            <p>©WeFrame Media {new Date().getFullYear()}</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    {/* Social Links */}
                    <div className="flex gap-6">
                        {socialLinks.map((link, index) => (
                            <span key={link.name}>
                                <a
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-muted hover:text-foreground transition-colors"
                                >
                                    {link.name}
                                </a>
                                {index < socialLinks.length - 1 && (
                                    <span className="text-muted">,</span>
                                )}
                            </span>
                        ))}
                    </div>

                    {/* Rights */}
                    <p className="text-sm text-muted">All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
