'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Section2 = () => {

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
                            src="/images/specialities/male-infertility/section2/about.avif"
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
                        Sperm
                        <span className="text-[#F98D1B]"> DNA </span> <br />
                        Fragmentation
                    </h2>

                    <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 font-medium">
                        Sperm DNA fragmentation plays a significant role in male fertility and can directly affect pregnancy outcomes. <br /><br />
                        Understanding its causes and proper diagnosis is essential for effective treatment and for improving the chances of successful conception.
                        Sperm DNA fragmentation refers to breaks or damage within the DNA strands of a sperm cell. <br /><br /> Elevated levels of DNA fragmentation may lead to reduced fertility,
                        lower success rates with assisted reproductive techniques, and an increased risk of miscarriage or adverse pregnancy outcomes. Assessing sperm DNA integrity is therefore a critical component in the evaluation and management of male infertility.
                    </p>

                </motion.div>
            </div>
        </section>
    );
};

export default Section2;
