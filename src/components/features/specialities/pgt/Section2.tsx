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
                            src="https://image.pollinations.ai/prompt/medical%20illustration%20embryo%20biopsy%20pgt%20blue%20orange%20clean?width=1024&height=1024&nologo=true"
                            alt="PGT Illustration"
                            fill
                            className="object-cover"
                            priority
                            unoptimized
                        />
                        {/* Placeholder image used, similar to male infertility structure */}
                    </div>
                </div>

                {/* Right Side: Content */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0961A1] leading-tight mb-6">
                        What is
                        <span className="text-[#F98D1B]"> PGT? </span>
                    </h2>

                    <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8 font-medium">
                        Preimplantation Genetic Testing (PGT) describes a range of genetic tests performed on embryos created via IVF prior to transfer. <br /><br />
                        PGT helps identifying embryos with genetic abnormalities, thereby increasing the chance of pregnancy, reducing the risk of miscarriage, and preventing the transmission of inherited genetic disorders.
                        This advanced screening ensures that only genetically healthy embryos are selected for implantation.
                    </p>

                </div>
            </div>
        </section>
    );
};

export default Section2;
