'use client';

import React from 'react';
import KnowMoreButton from '@/components/ui/KnowMoreButton';

const Section4 = () => {
    return (
        <section
            className="relative w-full bg-cover bg-center bg-no-repeat py-12 md:py-16 lg:py-20 mb-5 overflow-hidden"
            style={{
                backgroundImage: "url('/images/specialities/clinical-genitics-home/section4/bg-banner.png')",
            }}
        >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0"></div>

            {/* Content Container */}
            <div className="relative z-10 max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
                <div className="max-w-[700px] text-start">
                    {/* Heading */}
                    <h2 className="font-sans font-bold text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight mb-4 md:mb-6">
                        Step into the future of healthcare with confidence
                    </h2>

                    {/* Description */}
                    <p className="font-sans text-white text-sm md:text-base lg:text-lg leading-relaxed mb-6 md:mb-8 opacity-95">
                        Our advanced genetic testing services at Anderson Diagnostics help you access personalized treatment solutions tailored to your unique genetic profile.
                    </p>

                    {/* CTA Button */}
                    <KnowMoreButton
                        iconVariant="up-right"
                        className="mb-4 md:mb-6"
                    />
                </div>
            </div>

            {/* Decorative Circle Element (matching the design) */}
            {/* <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full bg-white/10 blur-3xl z-0"></div> */}
        </section>
    );
};

export default Section4;