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

    const clients = [
        { name: 'Skoda', logo: '/SKODA.png' },
        { name: 'Fitlab', logo: '/FITLAB.png' },
        { name: 'M Avenue', logo: '/Mavenue.png' },
        { name: 'Managem Group', logo: '/MANAGEM.png' },
        { name: 'ABHT', logo: '/ABHT.png' },
        { name: 'SRM', logo: '/SRM.png' },
        { name: 'ARWM', logo: '/ARWM.png' },
        { name: 'Nasli Holding', logo: '/NASLI HOLDING.png' },
        { name: 'Gims / Horizon Morocco', logo: '/HORIZON MOROCCO.png' },
        { name: 'EBF', logo: '/EMERGINGBUSINESSFACTORY.png' },
        { name: 'UM6P', logo: '/UM6P.png' },
    ];

    // Triple the array for smoother seamless loop
    const loopedClients = [...clients, ...clients, ...clients];

    return (
        <section ref={ref} className="pt-24 md:pt-32 pb-24 md:pb-32 bg-black overflow-hidden relative z-20">
            {/* Client Names Block */}
            <div className="w-full px-4 md:px-6 mb-12 relative z-10">
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
                        className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight text-white/50 w-full text-left"
                    >
                        {clients.map((client, index) => (
                            <span key={index}>
                                <span className={`${index % 2 === 0 ? 'text-white' : ''} inline-block transition-all duration-300 hover:blur-[2px] cursor-default`}>
                                    {client.name}
                                </span>
                                {index < clients.length - 1 && (
                                    <>
                                        <span className="inline-block transition-all duration-300 hover:blur-[2px] cursor-default">,</span>{' '}
                                    </>
                                )}
                            </span>
                        ))}
                    </motion.p>
                </div>
            </div>

            {/* Spacer Block */}
            <div className="h-32 md:h-48 w-full" />

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
                            className="flex-shrink-0 mx-12 md:mx-24 relative h-24 w-48 md:h-40 md:w-80 grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100"
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
