'use client';

import React from 'react';
import Image from 'next/image';

const Section2 = () => {
    const points = [
        "Identifies metabolic, hormonal, and genetic disorders early upon birth",
        "Prevents severe developmental delays and health complications",
        "Early treatment ensures a healthier, normal life",
        "Simple, safe, and quick heel-prick test",
        "Recommended for every newborn baby",
        "Peace of mind for parents regarding hidden conditions"
    ];

    return (
        <section className="w-full max-w-[1400px] font-sans mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-20 overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                {/* Left Side: Image */}
                <div className="w-full lg:w-1/2">
                    <div className="relative rounded-[32px] md:rounded-[48px] overflow-hidden aspect-4/3 lg:aspect-square">
                        <Image
                            src="/images/specialities/newborn-screening/section2/section-2.avif"
                            alt="Rising Cancer Mortality Illustration"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0961A1] leading-tight mb-6">
                        Why Newborn Screening: <br />
                        <span className="text-[#F98D1B]">A Vital Step for Your Baby</span>
                    </h2>

                    <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 font-medium">
                        Newborn screening identifies conditions that can affect a childs long-term health or survival.
                        Early detection, diagnosis, and intervention can prevent death or disability and enable children
                        to reach their full potential.

                    </p>

                    <ul className="space-y-4">
                        {points.map((point, index) => (
                            <li
                                key={index}
                                className="flex items-start gap-3 group"
                            >
                                <span className="mt-1.5 min-w-[8px] h-[8px] rounded-full bg-[#F98D1B] shrink-0" />
                                <span className="text-gray-700 text-sm md:text-base font-medium group-hover:text-[#0961A1] transition-colors duration-300">
                                    {point}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Section2;
