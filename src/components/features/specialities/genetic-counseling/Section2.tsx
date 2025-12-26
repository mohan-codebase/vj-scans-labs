'use client';

import React from 'react';
import Image from 'next/image';

const Section2 = () => {

    return (
        <section className="w-full max-w-[1400px] font-sans mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-20 overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                {/* Left Side: Image */}
                <div className="w-full lg:w-1/2">
                    <div className="relative rounded-[32px] md:rounded-[48px] overflow-hidden aspect-4/3 lg:aspect-square">
                        <Image
                            src="https://image.pollinations.ai/prompt/genetic%20counseling%20dna%20family%20health%20illustration%20blue?width=1024&height=1024&nologo=true"
                            alt="Genetic Counseling Illustration"
                            fill
                            className="object-cover"
                            priority
                            unoptimized
                        />
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0961A1] leading-tight mb-6">
                        Why Genetic
                        <span className="text-[#F98D1B]"> Counseling? </span>
                    </h2>

                    <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 font-medium">
                        Genetic counseling is a vital service for individuals and families who may be at risk for inherited conditions. <br /><br />
                        Our certified counselors help you understand complex genetic information, assess your risks, and guide you through testing options. We aim to empower you to make informed healthcare and reproductive decisions in a supportive environment.
                    </p>

                </div>
            </div>
        </section>
    );
};

export default Section2;
