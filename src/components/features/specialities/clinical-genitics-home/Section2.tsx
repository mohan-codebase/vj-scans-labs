'use client';

import React from 'react';
import Image from 'next/image';

const Section2 = () => {

    return (
        <section className="w-full max-w-[1400px] font-sans mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-16 lg:py-20 overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-10 lg:gap-16">


                {/* Right Side: Content */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center order-2 lg:order-1">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0961A1] leading-tight mb-4 md:mb-6">
                        About:
                        <span className="text-[#F98D1B]">VJ Scans & Labs</span>
                    </h2>

                    <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-8 font-medium">
                        VJ Scans and Lab is a premier diagnostic institution delivering high-throughput and integrated genetic testing solutions. Strategically headquartered in Chennai, our advanced processing and referral laboratories support diagnostic excellence across India. <br /><br />

                        We specialize in Oncology Diagnostics, Reproductive and Fertility Genetics, and Neurogenetics, complemented by advanced laboratory services such as Automated Immunohistochemistry, Prenatal Diagnostics, Neonatal Screening, Specialized Chemistry, and comprehensive pathology services. <br /><br />

                        Our multidisciplinary team of clinicians, researchers, geneticists, and laboratory professionals ensures scientific rigor, diagnostic accuracy, and superior patient outcomes.
                    </p>

                </div>

                {/* Left Side: Image */}
                <div className="w-full lg:w-1/2 order-1 lg:order-2">
                    <div className="relative rounded-[32px] md:rounded-[48px] overflow-hidden aspect-4/3 lg:aspect-square">
                        <Image
                            src="/images/specialities/clinical-genitics-home/about.png"
                            alt="Rising Cancer Mortality Illustration"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section2;
