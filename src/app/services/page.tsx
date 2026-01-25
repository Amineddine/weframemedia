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
        title: 'Post Production',
        description: 'Our state-of-the-art post-production facility is where stories truly come alive. We offer comprehensive editing, color grading, sound design, and VFX services to polish your project to perfection.',
        image: '/post.jpg',
    },
    {
        id: '03',
        title: 'Podcasts',
        description: 'We produce engaging audio and video podcasts that connect with audiences. Whether it\'s a branded series or a narrative audio drama, we provide end-to-end production support to help you find your voice.',
        image: '/podcast.jpg',
    },
    {
        id: '04',
        title: 'Motion',
        description: 'We blend art and technology to create stunning motion graphics and animations. From title sequences to full 3D environments, our motion team adds a layer of depth and visual sophistication to any project.',
        image: '/motion.jpg',
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
            <section className="container-custom">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold tracking-tighter mb-20 md:mb-32"
                >
                    We have you covered
                </motion.h2>

                <div className="flex flex-col gap-10 md:gap-16 pb-20 md:pb-32">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 border-t border-white/10 pt-10 md:pt-16"
                        >
                            {/* Number & Info */}
                            <div className="md:col-span-5 lg:col-span-4 flex flex-col justify-between">
                                <div>
                                    <span className="text-sm font-mono text-gray-500 mb-4 block">
                                        {service.id}
                                    </span>
                                    <h3 className="text-3xl md:text-4xl font-bold mb-6">
                                        {service.title}
                                    </h3>
                                </div>
                                <p className="text-gray-400 leading-relaxed max-w-[60ch] mb-8 md:mb-0">
                                    {service.description}
                                </p>
                            </div>

                            {/* Image */}
                            <div className="md:col-span-7 lg:col-span-8">
                                <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-lg bg-[#111]">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                                    />
                                </div>
                            </div>
                        </div>
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
