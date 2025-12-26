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
                            src="https://image.pollinations.ai/prompt/compassionate%20doctor%20consulting%20sad%20couple%20medical%20illustration%20blue%20tone?width=1024&height=1024&nologo=true"
                            alt="RPL Illustration"
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
                        Understanding
                        <span className="text-[#F98D1B]"> RPL </span>
                    </h2>

                    <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 font-medium">
                        Recurrent Pregnancy Loss (RPL) is a challenging condition defined as the loss of two or more clinical pregnancies. <br /><br />
                        While common, the emotional toll is significant. Our comprehensive genetic evaluation aims to identify underlying causes—such as chromosomal translocations in parents or aneuploidy in embryos—to provide a clear path forward.
                    </p>

                </div>
            </div>
        </section>
    );
};

export default Section2;
