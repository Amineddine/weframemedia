'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const capabilities = [
    { name: 'Creative', image: '/creativity.jpg' },
    { name: 'Production', image: '/production.jpg' },
    { name: 'Post', image: '/post.jpg' },
    { name: 'Podcasts', image: '/podcast.jpg' },
    { name: 'Motion', image: '/motion.jpg' },
];

export default function Capabilities() {
    const [activeCapability, setActiveCapability] = useState(0);

    return (
        <section className="relative h-screen min-h-[800px] w-full bg-black overflow-hidden flex flex-col justify-center mt-80 md:mt-96">
            {/* Background Images */}
            <div className="absolute inset-0 w-full h-full">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={capabilities[activeCapability].image}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <div
                            className="absolute inset-0 w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: `url(${capabilities[activeCapability].image})` }}
                        />
                        <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay */}
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="container-custom relative z-10 w-full h-full flex flex-col justify-center">
                <div className="w-full">
                    {/* Absolutely positioned label relative to container */}
                    <h2 className="absolute top-17 left-6 md:left-12 text-sm font-medium text-white mb-0 uppercase tracking-wide">
                        Capabilities
                    </h2>

                    <div className="flex flex-col items-start pl-6 md:pl-12">
                        {capabilities.map((item, index) => (
                            <Link href="/services" key={item.name} className="block w-fit">
                                <motion.h3
                                    className={`text-2xl md:text-2xl lg:text-[6rem] font-bold tracking-tighter leading-[1] transition-colors duration-300 cursor-pointer ${index === activeCapability ? 'text-white' : 'text-white/40 hover:text-white/60'
                                        }`}
                                    onMouseEnter={() => setActiveCapability(index)}
                                >
                                    {item.name}
                                </motion.h3>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
