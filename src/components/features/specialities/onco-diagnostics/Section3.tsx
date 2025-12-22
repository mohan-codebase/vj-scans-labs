'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const cards = [
    {
        title: "Cancer in Men",
        image: "/images/specialities/onco-diagnostics/section3/icon1.svg",
        items: [
            "Prostate Cancer",
            "Lung Cancer",
            "Colorectal (Colon) Cancer",
            "Oral Cavity Cancer"
        ]
    },
    {
        title: "Cancer in Women",
        image: "/images/specialities/onco-diagnostics/section3/icon2.svg",
        items: [
            "Breast Cancer",
            "Cervical Cancer",
            "Colorectal (Colon) Cancer",
            "Ovarian Cancer"
        ]
    },
    {
        title: "Cancer in Children",
        image: "/images/specialities/onco-diagnostics/section3/icon3.svg",
        items: [
            "Leukemia",
            "Brain & Spinal Cord Tumors",
            "Neuroblastoma",
            "Lymphoma",
            "Bone Cancer"
        ]
    }
];

const Section3 = () => {
    return (
        <section className="w-full max-w-[1400px] mx-auto py-12 md:py-20 px-4 md:px-6 font-sans">
            <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-[#0961A1] mb-12 lg:mb-16">
                Common <span className="text-[#F98D1B]">Types of Cancer</span> In Men, Women, & Children
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center max-w-[1000px] mx-auto">
                {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-[linear-gradient(135deg,#F5F5F5_12.57%,#E5E5E5_86.98%)] w-[280px] h-[390px] rounded-[24px] p-3 flex flex-col items-center justify-center transition-shadow duration-300"
                    >
                        <div className="mb-6   w-[100px] h-[100px] flex items-center justify-center relative">
                            <Image
                                src={card.image}
                                alt={card.title}
                                width={160}
                                height={160}
                                className="object-contain"
                            />
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold text-[#0961A1] mb-6 text-center">
                            {card.title}
                        </h3>

                        <ul className="space-y-3 w-full max-w-[80%]">
                            {card.items.map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="mt-2 min-w-[6px] h-[6px] rounded-full bg-[#757575] shrink-0" />
                                    <span className="text-gray-600 text-[15px] md:text-base font-medium leading-tight">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Section3;

