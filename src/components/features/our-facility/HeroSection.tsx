"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <motion.div
                className="absolute inset-0 z-0"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
            >
                <Image
                    src="/images/our-fecility/facility-landscape-01.avif"
                    alt="VJ Scans Facility"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/40" />
            </motion.div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-md"
                >
                    World-Class Medical Facility
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-lg md:text-xl text-white/90 font-medium max-w-2xl mx-auto drop-shadow-sm"
                >
                    Experience healthcare excellence in a comfortable environment designed for your well-being.
                </motion.p>
            </div>
        </section>
    );
};

export default HeroSection;
