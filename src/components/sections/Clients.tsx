'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const clients = [
    { name: 'Boutique de la terasse', logo: '/boutique.png' },
    { name: 'Le Bedouin agafay', logo: '/lebedouin.png' },
    { name: 'Ksar El Hamra', logo: '/ksarelhamra.png' },
    { name: 'M avenue Marrakech', logo: '/Mavenue.png' },
    { name: 'SRM Marrakech', logo: '/SRM.png' },
    { name: 'Oberoi', logo: '/oberoi.png' },
];

export default function Clients() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    // Triple the array for smoother seamless loop with fewer items
    const loopedClients = [...clients, ...clients, ...clients];

    return (
        <section ref={ref} className="pt-24 md:pt-32 pb-24 md:pb-32 bg-black overflow-hidden relative z-20">
            <div className="container-custom mb-20 md:mb-32">
                <div className="relative">
                    {/* Section Label */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5 }}
                        className="text-sm font-medium text-white mb-8 uppercase tracking-wide"
                    >
                        Selected Clients
                    </motion.h2>

                    {/* Client Names Block */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight text-white/50 max-w-6xl"
                    >
                        {/* Boutique de la terasse (White) */}
                        {"Boutique de la terasse".split(' ').map((word, i) => (
                            <span key={`b-${i}`}><span className="text-white inline-block transition-all duration-300 hover:blur-[2px] cursor-default">{word}</span>{' '}</span>
                        ))}
                        <span className="inline-block transition-all duration-300 hover:blur-[2px] cursor-default">,</span>{' '}

                        {/* Le Bedouin agafay (Default/Grey) */}
                        {"Le Bedouin agafay".split(' ').map((word, i) => (
                            <span key={`l-${i}`}><span className="inline-block transition-all duration-300 hover:blur-[2px] cursor-default">{word}</span>{' '}</span>
                        ))}
                        <span className="inline-block transition-all duration-300 hover:blur-[2px] cursor-default">,</span>{' '}

                        {/* Ksar El Hamra (White) */}
                        {"Ksar El Hamra".split(' ').map((word, i) => (
                            <span key={`k-${i}`}><span className="text-white inline-block transition-all duration-300 hover:blur-[2px] cursor-default">{word}</span>{' '}</span>
                        ))}
                        <span className="inline-block transition-all duration-300 hover:blur-[2px] cursor-default">,</span>{' '}

                        {/* M avenue Marrakech (Default/Grey) */}
                        {"M avenue Marrakech".split(' ').map((word, i) => (
                            <span key={`m-${i}`}><span className="inline-block transition-all duration-300 hover:blur-[2px] cursor-default">{word}</span>{' '}</span>
                        ))}
                        <span className="inline-block transition-all duration-300 hover:blur-[2px] cursor-default">,</span>{' '}

                        {/* SRM Marrakech (White) */}
                        {"SRM Marrakech".split(' ').map((word, i) => (
                            <span key={`s-${i}`}><span className="text-white inline-block transition-all duration-300 hover:blur-[2px] cursor-default">{word}</span>{' '}</span>
                        ))}
                    </motion.p>
                </div>
            </div>

            {/* Marquee Container */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="relative w-full mb-20 md:mb-32"
            >
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                {/* Scrolling Content */}
                <div className="flex animate-marquee items-center">
                    {loopedClients.map((client, index) => (
                        <div
                            key={`${client.name}-${index}`}
                            className="flex-shrink-0 mx-8 md:mx-16 relative h-16 w-32 md:h-24 md:w-48 grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100"
                        >
                            <Image
                                src={client.logo}
                                alt={client.name}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
