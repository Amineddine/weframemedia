'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="bg-black text-white">
            {/* 1. HERO SECTION */}
            <section className="relative h-screen w-full overflow-hidden">
                {/* Background Video */}
                <div className="absolute inset-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover scale-150"
                    >
                        <source src="/Raddison Blu - Gastronomic Night.mp4" type="video/mp4" />
                    </video>
                    {/* Dark Overlay */}
                    <span className="absolute inset-0 bg-black/35" />
                </div>

                {/* Content Overlay - BOTTOM LEFT ALIGNED */}
                <div className="absolute inset-0 container-custom flex flex-col justify-end pb-20 md:pb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col items-start gap-8"
                    >
                        {/* Title positioned at bottom-left */}
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none">
                            About us
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* SPACER 1: Hero -> Intro */}
            {/* Explicit heavy spacing to enforce 'pause' */}
            <div className="w-full h-[20vh] min-h-[150px]" />

            {/* 2. INTRO SECTION */}
            <section className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                    {/* Left Column - Bold Statement */}
                    <div className="md:col-span-4">
                        <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                            We are visuals storytellers.
                        </h2>
                    </div>

                    {/* Right Column - Detailed Description */}
                    <div className="md:col-span-8 lg:col-span-7 lg:col-start-6">
                        <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-medium">
                            WeFrame Media is a collective of directors, producers, and artists united by a shared passion for cinematic excellence. We believe that every brand has a story that deserves to be told with depth, emotion, and visual magnitude. Our approach combines rigorous strategy with unbridled creativity, resulting in films that do more than just sell—they make you feel.
                        </p>
                    </div>
                </div>
            </section>

            {/* SPACER 2: Intro -> Team */}
            {/* Explicit heavy spacing to enforce 'pause' */}
            <div className="w-full h-[20vh] min-h-[150px]" />

            {/* 3. TEAM SECTION */}
            <section className="container-custom pb-20 md:pb-32">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold tracking-tighter mb-20 md:mb-32"
                >
                    Team
                </motion.h2>

                <div className="flex flex-col md:flex-row gap-10">
                    {/* Single Team Member Card - CEO */}
                    <div className="w-full md:w-1/2 lg:w-1/3 group">
                        <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-[#111] mb-6">
                            <Image
                                src="/must.jpg"
                                alt="Mustapha Achraoui"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                            />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-1">Mustapha Achraoui</h3>
                            <p className="text-gray-500 font-medium">CEO</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SPACER FOR FOOTER */}
            <div className="h-[20vh] bg-black" />
        </div>
    );
}
