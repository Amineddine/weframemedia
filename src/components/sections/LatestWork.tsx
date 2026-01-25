'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { projects } from '@/data/projects';
import Noise from '@/components/ui/noise';

export default function LatestWork() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <section ref={ref} className="px-[clamp(1.5rem,5vw,4rem)] pt-12 pb-40 md:pt-20 md:pb-64 bg-black relative overflow-hidden">
            <Noise patternAlpha={15} />
            <div className="container-custom relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-between items-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight text-white">Latest work</h2>
                    <Link
                        href="/works-grid"
                        className="text-muted hover:text-foreground transition-colors link-underline"
                    >
                        View All
                    </Link>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.filter(p => [5, 11, 8, 6, 12, 10].includes(p.id))
                        .sort((a, b) => [5, 11, 8, 6, 12, 10].indexOf(a.id) - [5, 11, 8, 6, 12, 10].indexOf(b.id))
                        .map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <Link href={project.href} className="group block">
                                    <div className="project-card relative aspect-[4/5] overflow-hidden rounded-lg bg-card hover-lift">
                                        {/* Video Background */}
                                        <div className="absolute inset-0">
                                            {project.video.includes('vimeo') ? (
                                                <iframe
                                                    src={`${project.video}&background=1&autoplay=1&loop=1&byline=0&title=0&dnt=1&badge=0`}
                                                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover grayscale group-hover:grayscale-0 transition-all duration-500 pointer-events-none ${project.id === 8 ? 'w-[300%] h-[300%]' : 'w-[160%] h-[160%]'
                                                        }`}
                                                    allow="autoplay; fullscreen; picture-in-picture"
                                                    allowFullScreen
                                                    loading="lazy"
                                                    style={{ border: 'none' }}
                                                    title={project.name}
                                                />
                                            ) : (
                                                <video
                                                    autoPlay
                                                    loop
                                                    muted
                                                    playsInline
                                                    className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2 object-cover grayscale group-hover:grayscale-0 transition-all duration-500 pointer-events-none"
                                                >
                                                    <source src={project.video} type="video/mp4" />
                                                </video>
                                            )}
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                                        </div>

                                        {/* Hover Overlay */}
                                        <div className="project-card-overlay" />

                                        {/* Content */}
                                        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                                            <h3 className="text-xl font-semibold mb-1 text-white">{project.name}</h3>
                                            <p className="text-sm text-gray-200">{project.tagline}</p>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                </div>
            </div>
        </section>
    );
}
