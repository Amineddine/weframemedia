'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ProcessScroll from '@/components/sections/ProcessScroll';
import { ArrowDown } from 'lucide-react';

const services = [
    {
        id: '01',
        title: 'Production',
        description: 'From concept to execution, we handle every aspect of physical production. Our global network of talent and resources ensures that your project is executed with the highest standards of quality and efficiency.',
        image: '/production.jpg',
    },
    {
        id: '02',
        title: 'Photography',
        description: 'Capturing moments that define your brand. From high-end product photography to corporate events and lifestyle shoots, we deliver visuals that tell a compelling story.',
        image: '/photography.jpg',
    },
    {
        id: '03',
        title: 'Drone Filming',
        description: 'Elevate your perspective with breathtaking aerial cinematography. Our licensed drone pilots capture stunning 4K footage that adds cinematic scale to your productions.',
        image: '/drone.jpg',
    },
    {
        id: '04',
        title: 'Digital Branding',
        description: 'Building identities that resonate. We weave strategy and design to create cohesive brand experiences across all platforms, ensuring your visual presence is as powerful as your message.',
        image: '/digitalbranding2.jpg',
    },
];

export default function ServicesPage() {
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
                    className="text-4xl md:text-6xl font-bold tracking-tighter mb-24 md:mb-32 px-12 md:px-24"
                >
                    We have you covered
                </motion.h2>

                {/* Explicit Spacer Block */}
                <div className="w-full h-24 md:h-40" />

                {/* Full-Width Card Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-12 md:px-24">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-[#111]"
                        >
                            {/* Background Image */}
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                            {/* Number Badge */}
                            <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                                <span className="text-sm font-mono text-white">{service.id}</span>
                            </div>

                            {/* Content (Bottom) */}
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">
                                    {service.title}
                                </h3>
                                <p className="text-sm text-gray-300 leading-relaxed line-clamp-4">
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
            <div className="h-[20vh] bg-black" />
        </div>
    );
}
