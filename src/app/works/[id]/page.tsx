'use client';

import { useParams } from 'next/navigation';
import { projects } from '@/data/projects';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ProjectPage() {
    const params = useParams();
    const id = Number(params.id);
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                    <Link href="/works-grid" className="text-gray-400 hover:text-white underline">
                        Back to Works
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div style={{ paddingBottom: '30vh', minHeight: '100vh', backgroundColor: 'black', color: 'white' }}>
            {/* Top Navigation / Spacing */}
            <div style={{ paddingTop: '35vh' }} className="px-6 md:px-12 lg:px-20 max-w-[1920px] mx-auto">
                <Link href="/works-grid" className="inline-flex items-center text-gray-500 hover:text-white mb-12 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Works
                </Link>

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight mb-8">
                        {project.name}
                    </h1>
                    <p className="text-base md:text-xl text-gray-500 font-medium mb-16">
                        {project.tagline}
                    </p>

                    {/* Metadata Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-white/10 pt-8">
                        <div>
                            <span className="block text-xs uppercase tracking-wider text-gray-600 mb-1">Client:</span>
                            <span className="block text-base font-medium text-gray-300">{project.client}</span>
                        </div>
                        <div>
                            <span className="block text-xs uppercase tracking-wider text-gray-600 mb-1">Year:</span>
                            <span className="block text-base font-medium text-gray-300">{project.year}</span>
                        </div>
                        <div>
                            <span className="block text-xs uppercase tracking-wider text-gray-600 mb-1">Type:</span>
                            <span className="block text-base font-medium text-gray-300">{project.type}</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* SPACER */}
            <div style={{ height: '15vh' }} />

            {/* Video Section */}
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full bg-[#050505]"
            >
                <div className="aspect-video w-full max-h-[85vh] relative">
                    {project.video.includes('vimeo') ? (
                        <iframe
                            src={`${project.video}&autoplay=1&title=0&byline=0&portrait=0&badge=0`}
                            className="w-full h-full object-contain"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                            style={{ border: 'none' }}
                            title={project.name}
                        />
                    ) : (
                        <video
                            controls
                            autoPlay
                            className="w-full h-full object-contain"
                        >
                            <source src={project.video} type="video/mp4" />
                        </video>
                    )}
                </div>
            </motion.div>

            {/* SPACER */}
            <div style={{ height: '15vh' }} />

            {/* Description & Credits Section */}
            <div className="container-custom px-6 md:px-12 lg:px-20 max-w-[1920px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                    {/* Left Empty Column (or Additional Media placeholder) */}
                    <div className="lg:col-span-4 hidden lg:block"></div>

                    {/* Right Content Column */}
                    <div className="lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-20"
                        >
                            <h3 className="text-xs font-bold text-gray-600 uppercase tracking-widest mb-6">
                                Project Description
                            </h3>
                            <p className="text-sm md:text-base leading-relaxed text-gray-400">
                                {project.description}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <h3 className="text-xs font-bold text-gray-600 uppercase tracking-widest mb-6">
                                Credits
                            </h3>
                            <div className="space-y-4 text-sm">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-b border-white/5 pb-4">
                                    <span className="text-gray-500">Agency:</span>
                                    <span className="font-medium text-gray-300 text-right md:text-left">{project.credits.agency}</span>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-b border-white/5 pb-4">
                                    <span className="text-gray-500">Director & DP:</span>
                                    <span className="font-medium text-gray-300 text-right md:text-left">{project.credits.director}</span>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-b border-white/5 pb-4">
                                    <span className="text-gray-500">Editor:</span>
                                    <span className="font-medium text-gray-300 text-right md:text-left">{project.credits.editor}</span>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-b border-white/5 pb-4">
                                    <span className="text-gray-500">Photographer:</span>
                                    <span className="font-medium text-gray-300 text-right md:text-left">{project.credits.photographer}</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            {/* GALLERY VIDEOS (If any) */}
            {project.gallery && project.gallery.length > 0 && (
                <div className="container-custom pb-20">
                    <h3 className="text-2xl font-bold mb-8">Related Videos</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {project.gallery.map((videoSrc, idx) => (
                            <div key={idx} className="aspect-video w-full bg-[#050505] rounded-xl overflow-hidden relative">
                                <video
                                    controls
                                    playsInline
                                    className="w-full h-full object-cover"
                                >
                                    <source src={videoSrc} type="video/mp4" />
                                </video>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* EXTRA BREATHING ROOM BEFORE FOOTER */}
            <div style={{ height: '80vh' }} />
        </div>
    );
}
