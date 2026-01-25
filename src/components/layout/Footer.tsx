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
        <footer className="bg-black border-t border-white/10 text-white min-h-[40vh] flex flex-col justify-center">
            <div className="w-full px-8 md:px-24 py-12 flex flex-col justify-between h-full flex-grow">
                {/* Top Section */}
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-4 mb-auto pt-12 items-start">
                    {/* Brand - Left */}
                    <div className="flex justify-start">
                        <Link href="/" className="text-xl md:text-2xl font-light tracking-wide">
                            WeFrameMedia
                        </Link>
                    </div>

                    {/* Email - Center */}
                    <div className="flex justify-center w-full">
                        <a
                            href="mailto:hello@weframemedia.com"
                            className="text-sm md:text-base hover:text-white/70 transition-colors text-center"
                        >
                            hello@weframemedia.com
                        </a>
                    </div>

                    {/* Navigation - Right */}
                    <div className="flex justify-center md:justify-start md:pl-16">
                        <nav className="flex flex-col gap-2 text-left">
                            {footerLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm md:text-base hover:text-white/70 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-end pb-12">
                    {/* Copyright - Left */}
                    <div className="text-xs text-white/50 flex justify-start">
                        <p>©WeFrameMedia {new Date().getFullYear()}</p>
                    </div>

                    {/* Socials - Center */}
                    <div className="flex justify-center gap-6 w-full">
                        <a
                            href="https://www.instagram.com/weframe_media?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-white/50 hover:text-white transition-colors"
                        >
                            Instagram
                        </a>
                        <a
                            href="https://vimeo.com/user181550114?fl=pp&fe=sh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-white/50 hover:text-white transition-colors"
                        >
                            Vimeo
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-white/50 hover:text-white transition-colors"
                        >
                            LinkedIn
                        </a>
                    </div>

                    {/* Rights - Right */}
                    <div className="text-xs text-white/50 flex justify-end">
                        <p>All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
