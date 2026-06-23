'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const socialMediaItems = [
    { type: 'video', src: '/Gims Video 2.mp4' },
    { type: 'image', src: '/creativity.jpg' },
    { type: 'video', src: '/Raddison Blu - Gastronomic Night.mp4' },
    { type: 'image', src: '/production.jpg' },
    { type: 'video', src: '/Seven Saints.mp4' },
    { type: 'image', src: '/post.jpg' },
    { type: 'video', src: '/Mamounia Reception Video V4.mp4' },
    { type: 'image', src: '/podcast.jpg' },
    { type: 'video', src: '/Maison Dartisant Mdf.mp4' },
    { type: 'image', src: '/motion.jpg' },
    { type: 'video', src: '/Gym Tour.mp4' },
    { type: 'video', src: '/Reel 2.mp4' },
];

export default function FollowUs() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    // Duplicate items for seamless loop
    const loopedItems = [...socialMediaItems, ...socialMediaItems];

    return (
        <section ref={ref} className="py-20 mt-80 md:mt-96 overflow-hidden relative">
            <div className="container-custom relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-between items-end mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight text-white gap-2">Follow us</h2>
                    <Link
                        href="https://instagram.com"
                        target="_blank"
                        className="text-white font-medium hover:text-white/70 transition-colors"
                    >
                        Instagram
                    </Link>
                </motion.div>
            </div>

            {/* Carousel Container */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full relative"
            >
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

                <div className="flex animate-marquee gap-4 w-max hover:[animation-play-state:paused] items-center">
                    {loopedItems.map((item, index) => (
                        <div
                            key={`${index}-${item.src}`}
                            className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden bg-gray-900 group cursor-pointer flex-shrink-0"
                        >
                            {item.type === 'video' ? (
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    preload="metadata"
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                >
                                    <source src={item.src} type="video/mp4" />
                                </video>
                            ) : (
                                <div
                                    className="w-full h-full bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                    style={{ backgroundImage: `url(${item.src})` }}
                                />
                            )}
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
