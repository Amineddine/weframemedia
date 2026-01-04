'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const projects = [
    { id: 1, name: 'Brand Campaign', tagline: 'Elevating Visual Stories', category: 'Commercial' },
    { id: 2, name: 'Commercial Shoot', tagline: 'Cinematic Excellence', category: 'Commercial' },
    { id: 3, name: 'Documentary', tagline: 'Authentic Narratives', category: 'Documentary' },
    { id: 4, name: 'Music Video', tagline: 'Creative Expression', category: 'Music' },
    { id: 5, name: 'Corporate Film', tagline: 'Professional Vision', category: 'Corporate' },
    { id: 6, name: 'Short Film', tagline: 'Storytelling Mastery', category: 'Film' },
    { id: 7, name: 'Product Launch', tagline: 'Impactful Reveals', category: 'Commercial' },
    { id: 8, name: 'Event Coverage', tagline: 'Capturing Moments', category: 'Events' },
    { id: 9, name: 'Brand Identity', tagline: 'Visual Systems', category: 'Branding' },
    { id: 10, name: 'Social Content', tagline: 'Engaging Audiences', category: 'Digital' },
    { id: 11, name: 'Animation', tagline: 'Motion Graphics', category: 'Animation' },
    { id: 12, name: 'Podcast Production', tagline: 'Audio Excellence', category: 'Podcast' },
];

export default function WorksGridPage() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <div className="min-h-screen pt-32 pb-20">
            <div className="container-custom">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h1 className="text-display font-serif mb-6">Our Work</h1>
                    <p className="text-body-large text-muted max-w-2xl">
                        A collection of our finest projects. Each one crafted with passion,
                        precision, and a deep understanding of our clients&apos; vision.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                        >
                            <Link
                                href={`/works/${project.id}`}
                                className="group block"
                            >
                                <div className="project-card relative aspect-[4/5] overflow-hidden rounded-lg bg-card hover-lift">
                                    {/* Gradient Background */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-card via-background to-border" />

                                    {/* Category Badge */}
                                    <div className="absolute top-4 right-4 px-3 py-1 bg-background/80 rounded-full text-xs text-muted">
                                        {project.category}
                                    </div>

                                    {/* Decorative Element */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-24 h-24 border border-border/50 rounded-full opacity-30 group-hover:scale-110 transition-transform duration-500" />
                                    </div>

                                    {/* Hover Overlay */}
                                    <div className="project-card-overlay" />

                                    {/* Content */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <h3 className="text-xl font-semibold mb-1 transform group-hover:-translate-y-2 transition-transform duration-300">
                                            {project.name}
                                        </h3>
                                        <p className="text-sm text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            {project.tagline}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
