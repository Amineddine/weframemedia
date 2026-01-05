'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { projects } from '@/data/projects';

export default function WorksGridPage() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });
    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

    return (
        <div className="min-h-screen bg-black text-white">
            <div className="container-custom">
                {/* Header Filter Section - Centered */}
                <div className="h-[50vh] flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col md:flex-row justify-between items-end gap-8 w-full"
                    >
                        <div className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight text-white mb-4">
                            All
                        </div>

                        {/* Grid/List Toggle (Visual) */}
                        <div className="flex items-center gap-4 text-sm font-medium text-gray-500 mb-6">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`hover:text-white transition-colors flex items-center gap-2 ${viewMode === 'grid' ? 'text-white' : ''}`}
                            >
                                Grid
                            </button>
                            <span>/</span>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`hover:text-white transition-colors flex items-center gap-2 ${viewMode === 'list' ? 'text-white' : ''}`}
                            >
                                List
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Projects Grid */}
                <div
                    ref={ref}
                    className={`pb-20 gap-6 ${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'flex flex-col space-y-12'}`}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="w-full"
                        >
                            <Link
                                href={project.href}
                                className="group block w-full"
                            >
                                <div className={`relative overflow-hidden rounded-2xl bg-[#111] hover-lift ${viewMode === 'grid' ? 'aspect-video' : 'aspect-[21/9]'}`}>
                                    {/* Video Background */}
                                    <div className="absolute inset-0">
                                        <video
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                                        >
                                            <source src={project.video} type="video/mp4" />
                                        </video>
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                                    </div>

                                    {/* Content Overlay */}
                                    <div className="absolute bottom-6 left-6 z-10">
                                        <div className="overflow-hidden">
                                            <h3 className="text-xl md:text-2xl font-bold text-white transform translate-y-0 transition-transform duration-300">
                                                {project.name}
                                            </h3>
                                        </div>
                                        <div className="overflow-hidden">
                                            <p className="text-sm md:text-base text-gray-400 mt-1">
                                                {project.tagline}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Hover Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* EXTRA BREATHING ROOM BEFORE FOOTER */}
                <div style={{ height: '20vh' }} />
            </div>
        </div>
    );
}
