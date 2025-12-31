'use client';

import React from 'react';
import Image from 'next/image';
import KnowMoreButton from '@/components/ui/KnowMoreButton';

const Section3 = () => {
    return (
        <section className="w-full max-w-[1400px] mx-auto px-4 md:px-6 py-12 md:py-20">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
                {/* Left Side - Image */}
                <div className="w-full lg:w-1/2 relative">
                    <div className="relative w-full aspect-4/3 lg:aspect-square max-w-[600px] mx-auto">
                        {/* Background blobs or shapes could be added here if needed, 
                 but the image seems to have them integrated or we can add simple ones */}
                        <Image
                            src="/images/section-3/leftsideImage.png"
                            alt="Home Sample Collection Delivery Boy"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>

                {/* Right Side - Content */}
                <div className="w-full lg:w-1/2 flex flex-col items-start text-left font-sans">
                    <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#0961A1] leading-tight">
                        Stay Stress-Free
                    </h2>
                    <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#0961A1] leading-tight mb-4">
                        Get Yourself Tested at Home
                    </h2>

                    <h3 className="text-3xl md:text-4xl text-[#F98D1B] mb-6 font-dancing-script font-sans">
                        At-Home Tests
                    </h3>

                    <p className="text-gray-600 text-base md:text-lg font-sans font-medium leading-relaxed mb-8 max-w-xl">
                        We know it&apos;s not always easy to visit a diagnostic centre — especially if you&apos;re unwell, elderly, or have mobility issues. That&apos;s why VJ Scans & Labs brings our testing services to you! Our friendly, trained professionals will collect your samples right from your doorstep, so you can stay comfortable at home and still get accurate, on-time results you can trust.
                    </p>

                    <KnowMoreButton 
                        text='Read More' 
                        content={{
                            title: 'At-Home Sample Collection Services',
                            description: 'We know it\'s not always easy to visit a diagnostic centre — especially if you\'re unwell, elderly, or have mobility issues. That\'s why VJ Scans & Labs brings our testing services to you! Our friendly, trained professionals will collect your samples right from your doorstep, so you can stay comfortable at home and still get accurate, on-time results you can trust.',
                            additionalInfo: 'Our home sample collection service is available across Chennai and surrounding areas. Simply book an appointment, and our certified phlebotomists will arrive at your preferred time with all necessary equipment. We maintain the same high standards of sample collection and handling as our facility, ensuring reliable results every time.'
                        }}
                    />

                </div>
            </div>
        </section>
    );
};

export default Section3;