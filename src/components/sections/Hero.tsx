'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/moving-border';

export default function Hero() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const router = useRouter();

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.75;
        }
    }, []);

    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" /> {/* Overlay for text readability */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/skodauk.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 h-full flex flex-col justify-between container-custom pt-24 pb-12">

                {/* Center Content */}
                <div className="flex-1 flex items-center justify-start max-w-[90%] md:max-w-[80%] mx-auto w-full">
                    <div className="flex flex-col items-start gap-8">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-left text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.9] text-white"
                        >
                            <span className="block">We Frame</span>
                            <span className="block">The Future.</span>
                        </motion.h1>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            <Button
                                borderRadius="1.75rem"
                                className="bg-black text-white border-white/20 font-semibold"
                                onClick={() => router.push('/contact')}
                            >
                                Work with us
                            </Button>
                        </motion.div>
                    </div>
                </div>

            </div>
        </section>
    );
}
