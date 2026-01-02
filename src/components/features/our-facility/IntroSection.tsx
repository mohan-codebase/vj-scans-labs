"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const IntroSection = () => {
    return (
        <section className="py-16 md:py-24 bg-white overflow-hidden font-sans">
            <div className="max-w-[1400px] mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-1/2"
                    >
                        <h4 className="text-[#F98D1B] font-bold uppercase tracking-wider mb-2">Our Infrastructure</h4>
                        <h2 className="text-3xl md:text-5xl font-bold text-[#0961A1] mb-6 leading-tight">
                            Designed for Comfort, <br /> Built for <span className="text-[#F98D1B]">Precision</span>
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            At VJ Scans & Labs, we believe that a healing environment is just as important as accurate diagnostics. Our facility spans over 5,000 sq. ft., meticulously designed to provide a calm and stress-free experience for our patients.
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            From spacious waiting lounges to private consultation suites, every corner of our center reflects our commitment to patient care. We employ the latest medical technology housed in state-of-the-art scan rooms to ensure the highest quality of diagnostic imaging.
                        </p>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-1/2 relative h-[500px] rounded-3xl overflow-hidden shadow-2xl"
                    >
                        <Image
                            src="/images/our-fecility/facility-portrait-01.avif"
                            alt="Interior of VJ Scans"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default IntroSection;
