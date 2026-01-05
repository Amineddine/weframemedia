'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
    {
        number: '01',
        title: 'Strategy & R&D',
        description: 'We dive deep into your brand\'s core to understand your goals and audience. Our research-driven approach ensures that every creative decision is backed by data and insight, laying a solid foundation for a narrative that resonates and converts.'
    },
    {
        number: '02',
        title: 'Brainstorming & Creative Pitches',
        description: 'Ideas are the currency of impact. We gather our best minds to brainstorm concepts that push boundaries. We present you with distinct creative routes, each designed to capture attention and communicate your message in a unique and memorable way.'
    },
    {
        number: '03',
        title: 'Pre-Production',
        description: 'The blueprint for success. We meticulously plan every detail, from casting and location scouting to storyboarding and scheduling. This stage allows us to anticipate challenges and ensure a smooth, efficient, and high-quality production process.'
    },
    {
        number: '04',
        title: 'Production',
        description: 'Lights, camera, action. Our experienced crews bring the vision to life using state-of-the-art equipment and techniques. Whether on location or in-studio, we execute with precision, capturing the stunning visuals and authentic moments that define your film.'
    },
    {
        number: '05',
        title: 'Post-Production & Delivery',
        description: 'Where the magic happens. Our editors, colorists, and sound designers craft the raw footage into a polished masterpiece. We refine the rhythm, tone, and visual aesthetic to deliver a final product that exceeds expectations and is ready for the world to see.'
    }
];

export default function ProcessScroll() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    // Transform scroll progress to active step index (0 to 4)
    const currentStep = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0, 0, 1, 2, 3, 4]);

    return (
        <section ref={containerRef} className="h-[400vh] relative bg-black">
            <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
                <div className="container-custom w-full h-full flex flex-col md:flex-row">
                    {/* Left Column - Title */}
                    <div className="w-full md:w-1/3 h-full flex items-center justify-start md:border-r border-white/10 pt-20 md:pt-0">
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white">
                            Our<br />Process
                        </h2>
                    </div>

                    {/* Right Column - Dynamic Content */}
                    <div className="w-full md:w-2/3 h-full relative flex items-center justify-center p-6 md:p-20">
                        {steps.map((step, index) => {
                            // Determine opacity based on scroll progress for each step
                            // For step 0: active 0.0-0.2
                            // For step 1: active 0.2-0.4, etc.
                            const start = index * 0.2;
                            const end = start + 0.2;

                            // Using a simplified transform logic in the map usually doesn't work well 
                            // because we need hook calls outside loops or fixed hook calls. 
                            // Instead, we can use a simpler conditional render or opacity animation based on a single transform value.

                            return (
                                <StepContent
                                    key={index}
                                    step={step}
                                    index={index}
                                    progress={scrollYProgress}
                                    range={[start, end]}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

function StepContent({ step, index, progress, range }: { step: any, index: number, progress: any, range: number[] }) {
    const opacity = useTransform(progress,
        [range[0], range[0] + 0.05, range[1] - 0.05, range[1]],
        [0, 1, 1, 0]
    );

    const y = useTransform(progress,
        [range[0], range[0] + 0.05, range[1] - 0.05, range[1]],
        [50, 0, 0, -50]
    );

    return (
        <motion.div
            style={{ opacity, y }}
            className="absolute inset-0 flex flex-col justify-center px-6 md:px-20 pointer-events-none"
        >
            <span className="text-8xl md:text-9xl font-bold text-white/10 absolute top-1/4 -z-10 select-none">
                {step.number}
            </span>
            <div className="relative z-10">
                <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    {step.title}
                </h3>
                <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed">
                    {step.description}
                </p>
            </div>
        </motion.div>
    );
}
