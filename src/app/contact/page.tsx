'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const introWords = [
    'No',
    'matter',
    'where',
    'you',
    'are',
    'in',
    'the',
    'creative',
    'and',
    'production',
    'journey,',
    'we',
    'are',
    'ready',
    'to',
    'dive',
    'in',
    'and',
    'get',
    'to',
    'work',
];

export default function ContactPage() {
    const introRef = useRef(null);
    const formRef = useRef(null);
    const introInView = useInView(introRef, { once: true, margin: '-100px' });
    const formInView = useInView(formRef, { once: true, margin: '-50px' });

    const [formData, setFormData] = useState({
        brandName: '',
        contactName: '',
        email: '',
        phone: '',
        webSocial: '',
        budget: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
    };

    return (
        <div className="min-h-screen pt-32 pb-20">
            {/* Hero Section */}
            <div className="container-custom mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-display font-serif mb-6">Contact</h1>
                </motion.div>
            </div>

            {/* Intro Text */}
            <section ref={introRef} className="container-custom mb-24">
                <motion.p className="text-headline font-serif leading-relaxed max-w-4xl">
                    {introWords.map((word, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={introInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: index * 0.04, duration: 0.5 }}
                            className={`inline-block mr-3 ${['creative', 'production', 'dive', 'work'].includes(word)
                                    ? 'italic text-accent'
                                    : ''
                                }`}
                        >
                            {word}
                        </motion.span>
                    ))}
                </motion.p>
            </section>

            {/* Form Section */}
            <section ref={formRef} className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-2xl font-serif mb-8">
                            Fill out our form, or just schedule a call{' '}
                            <a href="#" className="text-accent hover:underline">
                                HERE
                            </a>
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div>
                                <input
                                    type="text"
                                    name="brandName"
                                    placeholder="Brand Name"
                                    value={formData.brandName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div>
                                <input
                                    type="text"
                                    name="contactName"
                                    placeholder="Contact Name"
                                    value={formData.contactName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <input
                                    type="text"
                                    name="webSocial"
                                    placeholder="Web/Social"
                                    value={formData.webSocial}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <select
                                    name="budget"
                                    value={formData.budget}
                                    onChange={handleChange}
                                    className="cursor-pointer"
                                >
                                    <option value="">Estimated Budget Range</option>
                                    <option value="under-10k">Under $10,000</option>
                                    <option value="10k-25k">$10,000 - $25,000</option>
                                    <option value="25k-50k">$25,000 - $50,000</option>
                                    <option value="50k-100k">$50,000 - $100,000</option>
                                    <option value="100k-plus">$100,000+</option>
                                </select>
                            </div>

                            <div>
                                <textarea
                                    name="message"
                                    placeholder="Tell us about your project..."
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                />
                            </div>

                            <button type="submit" className="btn-primary w-full justify-center">
                                Submit
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="space-y-12"
                    >
                        {/* New Business */}
                        <div>
                            <h3 className="text-sm text-muted mb-4">New Business</h3>
                            <a
                                href="mailto:hello@weframemedia.com"
                                className="text-xl hover:text-accent transition-colors link-underline block mb-2"
                            >
                                hello@weframemedia.com
                            </a>
                            <a
                                href="tel:+1234567890"
                                className="text-xl hover:text-accent transition-colors"
                            >
                                +1 (234) 567-890
                            </a>
                        </div>

                        {/* Headquarters */}
                        <div>
                            <h3 className="text-sm text-muted mb-4">Headquarters</h3>
                            <p className="text-lg">123 Creative Street</p>
                            <p className="text-lg">Suite #100</p>
                            <p className="text-lg">Creative City, ST 12345</p>
                        </div>

                        {/* Follow Us */}
                        <div>
                            <h3 className="text-sm text-muted mb-4">Follow Us</h3>
                            <div className="flex flex-col gap-2">
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-lg hover:text-accent transition-colors"
                                >
                                    Instagram
                                </a>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-lg hover:text-accent transition-colors"
                                >
                                    LinkedIn
                                </a>
                                <a
                                    href="https://vimeo.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-lg hover:text-accent transition-colors"
                                >
                                    Vimeo
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
