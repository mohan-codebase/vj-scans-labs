"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Full list of landscape images from original Section1
const landscapeImages = Array.from({ length: 26 }, (_, i) => ({
    id: i + 1,
    src: `/images/our-fecility/facility-landscape-${String(i + 1).padStart(2, '0')}.avif`,
    alt: `Facility Landscape ${i + 1}`
}));

// Full list of portrait images from original Section1
const portraitImages = Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    src: `/images/our-fecility/facility-portrait-${String(i + 1).padStart(2, '0')}.avif`,
    alt: `Facility Portrait ${i + 1}`
}));

interface ImageProps {
    id: number;
    src: string;
    alt: string;
}

interface CarouselProps {
    images: ImageProps[];
    title: string;
    portrait?: boolean;
}

const Carousel = ({ images, title, portrait = false }: CarouselProps) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = direction === 'left' ? -400 : 400;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="mb-12">
            <div className="flex justify-between items-end mb-6 px-4 md:px-8">
                <h3 className="text-2xl font-bold text-[#0961A1]">{title}</h3>
                <div className="flex gap-2">
                    <button
                        onClick={() => scroll('left')}
                        className="p-2 rounded-full border border-gray-200 hover:bg-[#F98D1B] hover:border-[#F98D1B] hover:text-white transition-colors text-gray-600"
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="p-2 rounded-full border border-gray-200 hover:bg-[#F98D1B] hover:border-[#F98D1B] hover:text-white transition-colors text-gray-600"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>

            <div
                ref={scrollRef}
                className="flex gap-4 overflow-x-auto pb-8 px-4 md:px-8 snap-x scrollbar-hide"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {images.map((img) => (
                    <motion.div
                        key={img.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.4 }}
                        className={`relative flex-shrink-0 snap-center rounded-2xl overflow-hidden shadow-md group ${portrait ? 'w-[280px] h-[400px]' : 'w-[320px] md:w-[450px] h-[250px] md:h-[300px]'}`}
                    >
                        <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            draggable={false}
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

const FacilityCarousels = () => {
    return (
        <section className="py-16 md:py-24 bg-white border-t border-gray-100">
            <div className="max-w-[1400px] mx-auto">
                <div className="text-center mb-16 px-4">
                    <h4 className="text-[#F98D1B] font-bold uppercase tracking-wider mb-2">Our Gallery</h4>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#0961A1]">Tour Our Facility</h2>
                    <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Explore our extensive gallery of treatment rooms, waiting areas, and advanced equipment.</p>
                </div>

                <Carousel images={landscapeImages} title="Facility Overview" />
                <Carousel images={portraitImages} title="Interior Details" portrait={true} />
            </div>
        </section>
    );
};

export default FacilityCarousels;
