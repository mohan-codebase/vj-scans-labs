"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
    { src: "/images/our-fecility/facility-landscape-02.avif", alt: "Reception Area", cols: "col-span-1 md:col-span-2", height: "h-64 md:h-80" },
    { src: "/images/our-fecility/facility-portrait-02.avif", alt: "Corridor", cols: "col-span-1", height: "h-64 md:h-80" },
    { src: "/images/our-fecility/facility-portrait-03.avif", alt: "Waiting Area", cols: "col-span-1", height: "h-64 md:h-80" },
    { src: "/images/our-fecility/facility-landscape-08.avif", alt: "MRI Room", cols: "col-span-1 md:col-span-2", height: "h-64 md:h-80" },
    { src: "/images/our-fecility/facility-landscape-05.avif", alt: "CT Scan", cols: "col-span-1 md:col-span-2", height: "h-64 md:h-80" },
    { src: "/images/our-fecility/facility-portrait-05.avif", alt: "Consultation Room", cols: "col-span-1", height: "h-64 md:h-80" },
];

const GallerySection = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-[1400px] mx-auto px-4 md:px-8">
                <div className="text-center mb-12">
                    <h4 className="text-[#F98D1B] font-bold uppercase tracking-wider mb-2">Gallery</h4>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#0961A1]">A Glimpse Inside</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {images.map((img, idx) => (
                        <motion.div
                            key={idx}
                            className={`relative rounded-2xl overflow-hidden ${img.cols} ${img.height} group`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-500 italic">Visit us to experience our facility in person.</p>
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
