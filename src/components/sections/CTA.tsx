'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const text = "Creative mind control. It's not coercion - it's cool. Let's do it together.";

export default function CTA() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none" /> {/* Dark overlay */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/Seven Saints.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="container-custom relative z-10 w-full">
                <div className="max-w-4xl mx-auto text-left flex flex-col items-start justify-center">
                    {/* Animated Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.8 }}
                        className="mb-12 md:mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight text-white text-left">
                            {text}
                        </h2>
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 1.2, duration: 0.5 }}
                    >
                        <Link href="/contact" className="btn-primary text-xl px-12 py-4 border border-white/20 backdrop-blur-sm bg-black/40 hover:bg-black/60 text-white rounded-full">
                            Get started
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
