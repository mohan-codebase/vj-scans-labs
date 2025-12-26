'use client';

import React from 'react';
import Image from 'next/image';

const benefits = [
    {
        image: "/images/specialities/onco-diagnostics/section6/icon1.svg",
        text: "Screening helps you stay healthy and feel reassured"
    },
    {
        image: "/images/specialities/onco-diagnostics/section6/icon2.svg",
        text: "Finds warning signs before cancer develops."
    },
    {
        image: "/images/specialities/onco-diagnostics/section6/icon3.svg",
        text: "Detects cancer early—often before you feel any symptoms."
    },
    {
        image: "/images/specialities/onco-diagnostics/section6/icon4.svg",
        text: "Makes treatment easier by catching cancer before it spreads."
    },
    {
        image: "/images/specialities/onco-diagnostics/section6/icon5.svg",
        text: "Early detection means quicker treatment and recovery."
    },
    {
        image: "/images/specialities/onco-diagnostics/section6/icon6.svg",
        text: "Early screening greatly improves survival rates."
    }
];

const Section6 = () => {
    return (
        <section className="w-full mx-auto py-12 md:py-20 md:my-20 px-4 md:px-6 font-sans bg-[#F1F9FF]">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0961A1] mb-6">
                    Why Early <span className="text-[#F98D1B]">Screening Matters</span>
                </h2>
                <p className="text-gray-600 md:text-lg max-w-3xl mx-auto font-bold">
                    We provide a complete range of diagnostic ultrasound scans using advanced 2D, 3D, and Doppler technology for accurate and safe results.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1000px] mx-auto">
                {benefits.map((benefit, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center group"
                    >
                        <div className="w-[180px] h-[180px] mb-6 rounded-2xl flex items-center justify-center ">
                            <Image
                                src={benefit.image}
                                alt="Benefit Icon"
                                width={180}
                                height={180}
                                className="object-contain"
                            />
                        </div>
                        <p className="text-gray-700 font-bold text-lg leading-relaxed max-w-xs">
                            {benefit.text}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Section6;
