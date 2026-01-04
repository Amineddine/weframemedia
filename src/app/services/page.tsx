'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

const services = [
    {
        id: 1,
        number: '01',
        title: 'Brand Creation',
        description: "It's not all about bright, shiny objects. It's about building something that lasts. We build brands that your consumers will not only fall in love with, but feel a dedicated sense of loyalty to. You'll stand out from your competitors with your look and feel, and stand tall with your vision, mission, and ethos.",
    },
    {
        id: 2,
        number: '02',
        title: 'Production',
        description: "Where the rubber of creative meets the road of creation. It's time to film. We establish your vision to life with a robust pre-production process, ensuring that every shot and cut are crafted perfectly. Then, we bring that vision to life with seamless on-set execution. Oh, and being on set with us is an absolute blast.",
    },
    {
        id: 3,
        number: '03',
        title: 'Post Production',
        description: 'The finishing touches where you polish your end-product to tedious perfection. Our editors, colorists, sound designers and composers, and visual effects artists turn raw footage into ready-to-convert content.',
    },
    {
        id: 4,
        number: '01',
        title: 'Podcasts',
        description: 'We simplify podcasting with end-to-end services. From recording and editing to publishing and back-end management, we ensure your podcasts shine and perform.',
    },
    {
        id: 5,
        number: '02',
        title: 'Web Design',
        description: "A place you're proud to send your consumers. We build websites that tell your brand's story, share your visual identity, educate efficiently, and, most importantly, CONVERT. Our expert team can spin up a site from scratch, or give your current website a performance lift.",
    },
    {
        id: 6,
        number: '03',
        title: 'Motion',
        description: '2D and 3D and everything in between. Our animation team brings your brand\'s stories to life with vibrant motion graphics, supportive visuals, and product-focused explainer videos.',
    },
];

const process = [
    {
        step: '01',
        title: 'Strategy & R&D',
        description: 'Creative is only as good as the research, insights, and meaningful discoveries that inform it. Our team dives deeply into your brand, your brand\'s competitive landscape, and your target audience, laying the foundation for impactful storytelling.',
    },
    {
        step: '02',
        title: 'Brainstorming & Creative Pitches',
        description: 'The epicenter of our "big ideas." We develop never-been-done creative concepts that embody and embolden your brand, then pitch those concepts to you. Big, bold, and outrageous, we\'ll make sure your brand stands out like it never has before.',
    },
    {
        step: '03',
        title: 'Pre-Production',
        description: 'Once creative has been established, we get into the weeds. From scripts to shot lists, we ensure every single detail of your production has been thoughtfully appointed and prepared.',
    },
    {
        step: '04',
        title: 'Production',
        description: 'Where the creative becomes a visual reality. We bring precision and perfection to every single shot, so your story is told as it should be.',
    },
    {
        step: '05',
        title: 'Post-Production & Delivery',
        description: 'The final stage where everything comes together. Editing, color grading, sound design, and visual effects transform raw footage into polished, ready-to-deploy content.',
    },
];

export default function ServicesPage() {
    const servicesRef = useRef(null);
    const processRef = useRef(null);
    const servicesInView = useInView(servicesRef, { once: true, margin: '-50px' });
    const processInView = useInView(processRef, { once: true, margin: '-50px' });

    return (
        <div className="min-h-screen pt-32 pb-20">
            {/* Hero Section */}
            <div className="container-custom mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-display font-serif mb-6">Services</h1>
                    <p className="text-body-large text-muted max-w-2xl">
                        From concept to completion, we offer comprehensive creative and production
                        services that bring your brand&apos;s story to life.
                    </p>
                </motion.div>
            </div>

            {/* Services Section */}
            <section ref={servicesRef} className="container-custom mb-32">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                    className="text-headline font-serif mb-16"
                >
                    We have you covered
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={servicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group p-8 rounded-2xl bg-card hover:bg-border/50 transition-colors duration-300"
                        >
                            <span className="text-sm text-accent font-medium">{service.number}</span>
                            <h3 className="text-2xl font-serif mt-2 mb-4 group-hover:text-accent transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-muted text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Process Section */}
            <section ref={processRef} className="bg-card py-24">
                <div className="container-custom">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={processInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5 }}
                        className="text-headline font-serif mb-16"
                    >
                        Our Process
                    </motion.h2>

                    <div className="space-y-12">
                        {process.map((step, index) => (
                            <motion.div
                                key={step.step}
                                initial={{ opacity: 0, x: -30 }}
                                animate={processInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                                transition={{ delay: index * 0.15, duration: 0.5 }}
                                className="flex gap-8 items-start border-b border-border pb-12 last:border-0"
                            >
                                <span className="text-5xl font-serif text-accent/50">{step.step}</span>
                                <div>
                                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                                    <p className="text-muted max-w-2xl">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="container-custom py-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="text-headline font-serif mb-8">Ready to get started?</h2>
                    <Link href="/contact" className="btn-primary">
                        Work with us
                    </Link>
                </motion.div>
            </section>
        </div>
    );
}
