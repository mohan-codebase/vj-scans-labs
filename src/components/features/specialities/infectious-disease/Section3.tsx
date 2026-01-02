'use client';

import React from 'react';
import Image from 'next/image';

const cards = [
    {
        title: "Viral Infections",
        // image: "/images/specialities/onco-diagnostics/section3/icon1.svg",
        items: [
            "Influenza (Flu)",
            "Dengue & Chikungunya",
            "Hepatitis A, B, C",
            "COVID-19 & Variants"
        ]
    },
    {
        title: "Bacterial Infections",
        // image: "/images/specialities/onco-diagnostics/section3/icon2.svg",
        items: [
            "Tuberculosis (TB)",
            "Typhoid Fever",
            "Urinary Tract Infections",
            "Respiratory Infections"
        ]
    },
    {
        title: "Vector-Borne Diseases",
        // image: "/images/specialities/onco-diagnostics/section3/icon3.svg",
        items: [
            "Malaria",
            "Dengue",
            "Zika Virus",
            "Japanese Encephalitis"
        ]
    }
];

const Section3 = () => {
    return (
        <section className="w-full max-w-[1400px] mx-auto py-12 md:py-20 px-4 md:px-6 font-sans">
            <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-[#0961A1] mb-12 lg:mb-16">
                Common <span className="text-[#F98D1B]">Infectious Diseases</span> We Test For
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-items-center max-w-[1000px] mx-auto">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="bg-[linear-gradient(135deg,#F5F5F5_12.57%,#E5E5E5_86.98%)] w-[280px] h-[300px] rounded-[24px] p-3 flex flex-col items-center justify-center transition-shadow duration-300"
                    >
                        {/* <div className="mb-6   w-[100px] h-[100px] flex items-center justify-center relative">
                            <Image
                                src={card.image}
                                alt={card.title}
                                width={160}
                                height={160}
                                className="object-contain"
                            />
                        </div> */}

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
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Section3;

