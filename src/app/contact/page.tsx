'use client';

import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-black text-white pb-48 md:pb-64">
            <div className="px-6 md:px-12 lg:px-20 w-full">

                {/* 🔒 NAVBAR OFFSET — DO NOT REMOVE */}
                {/* This guarantees content starts BELOW the fixed navbar */}
                <div className="h-[140px] md:h-[160px] lg:h-[180px]" />

                {/* 1) INTRO TEXT — now safely beneath navbar */}
                <div className="mb-24 md:mb-32 max-w-6xl">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.02] text-white/55 tracking-tight">
                        No matter where you are in the creative and production journey, we are ready to dive in and get to work
                    </h1>
                </div>

                {/* 2) LARGE GAP before form header (matches reference rhythm) */}
                <div className="h-24 md:h-32 lg:h-40" />

                {/* 3) FORM HEADER */}
                <div className="mb-10 md:mb-12">
                    <p className="text-white text-2xl md:text-4xl font-bold tracking-tight leading-tight">
                        Fill out our form, or just schedule a call{' '}
                        <Link
                            href="#"
                            className="underline underline-offset-4 decoration-white/40 hover:decoration-white transition-all"
                        >
                            HERE
                        </Link>
                    </p>
                </div>

                {/* 4) FORM */}
                <form className="w-full space-y-8">
                    {/* Brand Name */}
                    <div className="space-y-3">
                        <label className="block text-xs uppercase tracking-wider text-[#666] font-semibold">
                            Brand Name
                        </label>
                        <input
                            type="text"
                            placeholder="Nike"
                            className="w-full h-16 md:h-20 rounded-full bg-[#111] border border-white/10 px-8 text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all text-lg font-medium"
                        />
                    </div>

                    {/* Contact Name */}
                    <div className="space-y-3">
                        <label className="block text-xs uppercase tracking-wider text-[#666] font-semibold">
                            Contact Name
                        </label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            className="w-full h-16 md:h-20 rounded-full bg-[#111] border border-white/10 px-8 text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all text-lg font-medium"
                        />
                    </div>

                    {/* Email */}
                    <div className="space-y-3">
                        <label className="block text-xs uppercase tracking-wider text-[#666] font-semibold">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="jane@nike.com"
                            className="w-full h-16 md:h-20 rounded-full bg-[#111] border border-white/10 px-8 text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all text-lg font-medium"
                        />
                    </div>

                    {/* Phone */}
                    <div className="space-y-3">
                        <label className="block text-xs uppercase tracking-wider text-[#666] font-semibold">
                            Phone
                        </label>
                        <input
                            type="tel"
                            placeholder="1234567980"
                            className="w-full h-16 md:h-20 rounded-full bg-[#111] border border-white/10 px-8 text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all text-lg font-medium"
                        />
                    </div>

                    {/* Web / Social */}
                    <div className="space-y-3">
                        <label className="block text-xs uppercase tracking-wider text-[#666] font-semibold">
                            Web / Social
                        </label>
                        <input
                            type="text"
                            placeholder="nike.com"
                            className="w-full h-16 md:h-20 rounded-full bg-[#111] border border-white/10 px-8 text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-white/20 transition-all text-lg font-medium"
                        />
                    </div>

                    {/* Estimated Budget */}
                    <div className="space-y-3">
                        <label className="block text-xs uppercase tracking-wider text-[#666] font-semibold">
                            Estimated Budget Range
                        </label>
                        <div className="relative">
                            <select
                                className="w-full h-16 md:h-20 rounded-full bg-[#111] border border-white/10 px-8 pr-14 text-gray-400 appearance-none focus:outline-none focus:ring-1 focus:ring-white/20 transition-all cursor-pointer text-lg font-medium"
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    Select...
                                </option>
                                <option value="1">Under $10k</option>
                                <option value="2">$10k - $50k</option>
                                <option value="3">$50k - $100k</option>
                                <option value="4">$100k+</option>
                            </select>

                            <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                                <ChevronDown className="w-5 h-5" />
                            </div>
                        </div>
                    </div>

                    {/* Submit */}
                    <div className="pt-12 md:pt-14">
                        <button
                            type="submit"
                            className="w-full h-16 md:h-20 rounded-full bg-white/15 text-white text-lg font-semibold hover:bg-white/20 transition-all"
                        >
                            Submit
                        </button>
                    </div>

                    {/* EXTRA FOOTER BREATHING ROOM */}
                    <div className="h-24 md:h-32 lg:h-40" />
                </form>
            </div>
        </div>
    );
}
