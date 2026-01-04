'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const team = [
    { name: 'Creative Director', role: 'Founder & Creative Director' },
    { name: 'Operations Lead', role: 'VP of Operations' },
    { name: 'Head of Production', role: 'Head of Production' },
    { name: 'Director', role: 'Director & Editor' },
    { name: 'Producer', role: 'Executive Producer' },
    { name: 'Cinematographer', role: 'DP & Editor' },
    { name: 'Writer', role: 'Writer' },
    { name: 'Project Manager', role: 'Project Manager' },
    { name: 'Editor', role: 'Editor' },
    { name: 'Podcast Director', role: 'Podcast Director' },
    { name: 'Motion Designer', role: 'Motion Designer/Animator' },
    { name: '3D Artist', role: '3D Artist' },
];

const introWords = [
    'We',
    'are',
    'a',
    'creative',
    'film',
    'production',
    'company',
    'that',
    'partners',
    'with',
    'forward-thinking',
    'brands',
    'and',
    'creatives',
    'to',
    'produce',
    'high-quality',
    'content',
    'and',
    'meaningful',
    'experiences',
    'through',
    'film',
    'and',
    'other',
    'creative',
    'outlets.',
];

export default function AboutPage() {
    const introRef = useRef(null);
    const teamRef = useRef(null);
    const introInView = useInView(introRef, { once: true, margin: '-100px' });
    const teamInView = useInView(teamRef, { once: true, margin: '-50px' });

    return (
        <div className="min-h-screen pt-32 pb-20">
            {/* Hero Section */}
            <div className="container-custom mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-display font-serif mb-6">About</h1>
                </motion.div>
            </div>

            {/* Intro Section */}
            <section ref={introRef} className="container-custom mb-32">
                <motion.p className="text-headline font-serif leading-relaxed max-w-5xl">
                    {introWords.map((word, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={introInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: index * 0.03, duration: 0.5 }}
                            className={`inline-block mr-3 ${['creative', 'film', 'high-quality', 'meaningful'].includes(word)
                                    ? 'italic text-accent'
                                    : ''
                                }`}
                        >
                            {word}
                        </motion.span>
                    ))}
                </motion.p>
            </section>

            {/* Team Section */}
            <section ref={teamRef} className="bg-card py-24">
                <div className="container-custom">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5 }}
                        className="text-headline font-serif mb-16"
                    >
                        Team
                    </motion.h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ delay: index * 0.05, duration: 0.5 }}
                                className="group"
                            >
                                {/* Photo placeholder */}
                                <div className="aspect-[3/4] rounded-lg bg-background mb-4 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-border" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full border border-border/50 flex items-center justify-center text-muted text-2xl font-serif">
                                            {member.name.charAt(0)}
                                        </div>
                                    </div>
                                    {/* Hover overlay */}
                                    <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <h3 className="font-semibold mb-1 group-hover:text-accent transition-colors">
                                    {member.name}
                                </h3>
                                <p className="text-sm text-muted">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="container-custom py-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-serif mb-4 text-accent">Vision</h3>
                        <p className="text-muted">
                            To be the creative partner that transforms brands into cultural movements
                            through the power of visual storytelling.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-serif mb-4 text-accent">Mission</h3>
                        <p className="text-muted">
                            We create content that doesn&apos;t just capture attention—it captures hearts
                            and minds, building lasting connections between brands and their audiences.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-serif mb-4 text-accent">Values</h3>
                        <p className="text-muted">
                            Creativity without boundaries. Quality without compromise. Collaboration
                            without ego. These are the principles that guide every project we touch.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center py-24 border-t border-border"
                >
                    <h2 className="text-headline font-serif mb-8">Want to join the team?</h2>
                    <Link href="/contact" className="btn-primary">
                        Get in touch
                    </Link>
                </motion.div>
            </section>
        </div>
    );
}
