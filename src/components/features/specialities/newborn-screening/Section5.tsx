'use client';

import React from 'react';
import Image from 'next/image';

const column1 = [
    "Tandem Mass Spectrometry (MS/MS) for metabolic profile",
    "Enzyme-linked Immunosorbent Assay (ELISA)",
    "High-Performance Liquid Chromatography (HPLC)",
    "Molecular Genetic Testing (DNA Analysis)",
    "Automated Fluorometric Assays"
];

const column2 = [
    "Rapid turnaround time for critical conditions",
    "High sensitivity and specificity",
    "Comprehensive panel covering 50+ disorders",
    "Expert interpretation by biochemical geneticists",
    " confirmatory testing for positive screens"
];

const Section5 = () => {
    return (
        <section className="w-full max-w-[1400px] mx-auto py-1 md:py-20 px-4 md:px-6 font-sans">
            <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold text-[#0961A1] mb-12 lg:mb-16">
                Expert Detection <span className="text-[#F98D1B]">Methodologies</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
                {/* Column 1 Card */}
                <div className=" rounded-[32px] p-8 md:p-12 relative overflow-hidden group">
                    <Image
                        src="/images/specialities/onco-diagnostics/section5/bg-overlay.png"
                        alt="Background Decoration"
                        fill
                        className="object-cover opacity-100 pointer-events-none"
                    />
                    <div className="relative z-10 flex flex-col gap-6">
                        {column1.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4"
                            >
                                <div className="mt-1 min-w-[24px] h-[24px] flex items-center justify-center shrink-0 relative">
                                    <Image
                                        src="/images/specialities/onco-diagnostics/section5/hand-icon.svg"
                                        alt="Hand Icon"
                                        width={24}
                                        height={24}
                                        className="object-contain"
                                    />
                                </div>
                                <p className="text-gray-700 font-medium text-[15px] md:text-base leading-relaxed">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Column 2 Card */}
                <div className=" rounded-[32px] p-8 md:p-12 relative overflow-hidden group ">
                    <Image
                        src="/images/specialities/onco-diagnostics/section5/bg-overlay.png"
                        alt="Background Decoration"
                        fill
                        className="object-cover opacity-100 pointer-events-none"
                    />
                    <div className="relative z-10 flex flex-col gap-6">
                        {column2.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4"
                            >
                                <div className="mt-1 min-w-[24px] h-[24px] flex items-center justify-center shrink-0 relative">
                                    <Image
                                        src="/images/specialities/onco-diagnostics/section5/hand-icon.svg"
                                        alt="Hand Icon"
                                        width={24}
                                        height={24}
                                        className="object-contain"
                                    />
                                </div>
                                <p className="text-gray-700 font-medium text-[15px] md:text-base leading-relaxed">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section5;
