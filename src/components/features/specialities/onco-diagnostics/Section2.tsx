'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Section2 = () => {
    const points = [
        "Unhealthy eating habits and increased consumption of processed foods",
        "Lack of regular physical activity and sedentary lifestyle",
        "High stress levels due to work pressure and fast-paced living",
        "Poor sleep quality and irregular daily routines",
        "Increased exposure to environmental pollution and toxins",
        "Delayed diagnosis and lack of preventive health check-ups"
    ];

    return (
        <section className="w-full max-w-[1400px] font-sans mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-20 overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                {/* Left Side: Image */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full lg:w-1/2"
                >
                    <div className="relative rounded-[32px] md:rounded-[48px] overflow-hidden aspect-4/3 lg:aspect-square">
                        <Image
                            src="/images/specialities/onco-diagnostics/section2/about.avif"
                            alt="Rising Cancer Mortality Illustration"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </motion.div>

                {/* Right Side: Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="w-full lg:w-1/2 flex flex-col justify-center"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0961A1] leading-tight mb-6">
                        Rising Cancer Mortality: <br />
                        <span className="text-[#F98D1B]">A Lifestyle-Driven Concern</span>
                    </h2>

                    <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 font-medium">
                        Cancer-related deaths are increasing every year, making it a major global health concern.
                        One of the key reasons behind this rise is the significant change in modern lifestyles.
                        Rapid urbanization and technological advancement have altered the way people eat, work,
                        and live, often at the cost of their health.
                    </p>

                    <ul className="space-y-4">
                        {points.map((point, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                                className="flex items-start gap-3 group"
                            >
                                <span className="mt-1.5 min-w-[8px] h-[8px] rounded-full bg-[#F98D1B] shrink-0" />
                                <span className="text-gray-700 text-sm md:text-base font-medium group-hover:text-[#0961A1] transition-colors duration-300">
                                    {point}
                                </span>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </div>
        </section>
    );
};

export default Section2;
