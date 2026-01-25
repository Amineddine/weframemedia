'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import Noise from '@/components/ui/noise';

const text = "WeFrame Media : is a creative videography and digital marketing agency that helps brands tell compelling stories through high-quality visuals, strategic content, and data-driven marketing. We specialize in producing engaging video content and building digital campaigns that elevate brand presence, drive engagement, and deliver measurable growth.";

export default function AgencyIntro() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section ref={ref} className="section-padding bg-black relative overflow-hidden">
            {/* Dynamic Noise Overlay */}
            <Noise patternAlpha={20} />

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-5xl"
                >
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8 }}
                        className="text-left text-3xl md:text-5xl font-bold tracking-tighter leading-tight text-white"
                    >
                        {text.split(' ').map((word, index) => (
                            <span key={index}>
                                <span className="inline-block transition-all duration-300 hover:blur-[2px] cursor-default">
                                    {word}
                                </span>
                                {' '}
                            </span>
                        ))}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ delay: 1, duration: 0.5 }}
                        className="mt-12"
                    >
                        <Link
                            href="/about"
                            className="group inline-flex items-center gap-2 text-lg text-muted hover:text-foreground transition-colors"
                        >
                            <span className="link-underline">Learn more</span>
                            <motion.span
                                className="inline-block"
                                animate={{ x: [0, 5, 0] }}
                                transition={{ repeat: Infinity, duration: 1.5 }}
                            >
                                →
                            </motion.span>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
