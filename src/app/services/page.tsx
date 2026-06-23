'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ProcessScroll from '@/components/sections/ProcessScroll';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

const services = [
    {
        id: '01',
        title: 'Production',
        description: 'Concept to final cut, handled end to end — crew, kit, and logistics built around your story.',
        image: '/production.jpg',
    },
    {
        id: '02',
        title: 'Photography',
        description: 'Stills that carry your brand — product, lifestyle, and event work shot with a cinematic eye.',
        image: '/photography.jpg',
    },
    {
        id: '03',
        title: 'Drone Filming',
        description: 'Licensed aerial cinematography in crisp 4K, adding scale and motion from above.',
        image: '/drone.jpg',
    },
    {
        id: '04',
        title: 'Digital Branding',
        description: 'Identity and content that hold together across every platform — on message, on screen.',
        image: '/digitalbranding2.jpg',
    },
];

export default function ServicesPage() {
    return (
        <div className="text-white">
            {/* 1. HERO SECTION */}
            <section className="relative h-screen w-full overflow-hidden">
                {/* Background Video */}
                <div className="absolute inset-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="/M Avenue.mp4" type="video/mp4" />
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
                        {/* Title scaled down, bottom aligned */}
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none">
                            Services
                        </h1>

                        <div className="flex items-center gap-4 text-sm md:text-base font-medium text-white/80">
                            <ArrowDown className="animate-bounce w-5 h-5" />
                            <span>Scroll to view more</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* SPACER 1: Hero -> Intro */}
            {/* Explicit heavy spacing (approx 20vh) to enforce gap */}
            <div className="w-full h-[20vh] min-h-[150px]" />

            {/* 2. INTRO SECTION */}
            <section className="container-custom">
                <div className="max-w-4xl">
                    <h2 className="text-2xl md:text-4xl leading-tight font-medium">
                        <span className="text-white">We help ambitious brands tell their stories.</span>{' '}
                        <span className="text-gray-400">
                            We Frame Media is a full-service creative agency that bridges the gap between strategy and execution. We don't just make videos; we craft visual experiences that resonate, engage, and drive results.
                        </span>
                    </h2>
                </div>
            </section>

            {/* SPACER 2: Intro -> Services */}
            {/* Explicit heavy spacing (approx 20vh) to enforce gap */}
            <div className="w-full h-[20vh] min-h-[150px]" />

            {/* 3. "WE HAVE YOU COVERED" SECTION */}
            <section className="w-full">

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold tracking-tighter mb-24 md:mb-32 px-12 md:px-24 px-mobile"
                >
                    We have you covered
                </motion.h2>

                {/* Explicit Spacer Block */}
                <div className="w-full h-24 md:h-40" />

                {/* Full-Width Card Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-12 md:px-24 px-mobile">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08, duration: 0.5 }}
                            className="group relative aspect-[4/5] overflow-hidden rounded-lg border border-white/10 bg-[#0d0d0d] transition-colors duration-500 hover:border-white/25"
                        >
                            {/* Image — full colour, gentle zoom + lift in brightness on hover */}
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                className="object-cover brightness-[0.7] transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:brightness-100"
                            />

                            {/* Legibility gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/5" />

                            {/* Catalog index + arrow (insets, not padding — survives the global reset) */}
                            <div className="absolute inset-x-6 top-5 flex items-start justify-between">
                                <span className="font-mono text-xs tracking-[0.2em] text-white/50">
                                    {service.id}
                                </span>
                                <ArrowUpRight className="h-5 w-5 text-white/40 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                            </div>

                            {/* Title + gold accent rule + description (flex gap, not margins) */}
                            <div className="absolute inset-x-6 bottom-6 flex flex-col gap-3">
                                <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white">
                                    {service.title}
                                </h3>
                                <span className="block h-px w-8 bg-accent transition-all duration-500 group-hover:w-16" />
                                <p className="text-sm leading-relaxed text-white/60 transition-colors duration-500 group-hover:text-white/85">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 4. "OUR PROCESS" SECTION (Scroll-driven) */}
            <ProcessScroll />

            {/* SPACER FOR FOOTER VISIBILITY */}
            <div className="h-[20vh]" />
        </div>
    );
}
