'use client';

import React from 'react';
import Image from 'next/image';

const technologies = [
    {
        title: "Skyra 3T MRI Scanner",
        image: "/images/specialities/onco-diagnostics/section4/icon1.svg",
    },
    {
        title: "Automated Breast Volume Scanner (ABVS)",
        image: "/images/specialities/onco-diagnostics/section4/icon2.svg",
    },
    {
        title: "Digital Mammography",
        image: "/images/specialities/onco-diagnostics/section4/icon3.svg",
    },
    {
        title: "PET-CT Imaging Scan",
        image: "/images/specialities/onco-diagnostics/section4/icon4.svg",
    }
];

const Section4 = () => {
    return (
        <section className="w-full max-w-[1400px] mx-auto py-5 md:py-5 px-4 md:px-6 font-sans">
            <div className="text-center mb-12 md:mb-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0961A1] mb-4">
                    Advanced Imaging Technologies for <span className="text-[#F98D1B]">Accurate Cancer Detection</span>
                </h2>
                <p className="text-gray-600 md:text-lg max-w-3xl mx-auto">
                    Combining advanced technology with clinical expertise for reliable and precise cancer diagnosis.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-[1000px] mx-auto">
                {technologies.map((tech, index) => (
                    <div
                        key={index}
                        className=" rounded-[24px] p-8 flex flex-col items-center text-center "
                    >
                        <div className=" rounded-2xl mb-6 w-[200px] h-[200px] flex items-center justify-center relative">
                            <Image
                                src={tech.image}
                                alt={tech.title}
                                width={200}
                                height={200}
                                className="object-contain"
                            />
                        </div>
                        <h3 className="text-xl font-bold text-[#4A4A4A] mb-3 leading-tight">
                            {tech.title}
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Section4;
