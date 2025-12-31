'use client';

import React from 'react';
import Image from 'next/image';
import KnowMoreButton from '@/components/ui/KnowMoreButton';

const Section7 = () => {
    return (
        <div className='mx-2 md:mx-0'>
            <section className="relative max-w-[1400px] mx-auto w-full md:my-14 bg-[linear-gradient(86.21deg,#0B62A1_33.3%,#42A5ED_100.16%)] lg:bg-[url('/images/section-7/section7.avif')] lg:bg-cover lg:bg-center lg:bg-no-repeat rounded-[50px] overflow-hidden flex items-center p-16 text-white max-lg:p-10 max-lg:rounded-[29px]" >
                <div className=" w-full grid grid-cols-2 gap-16 items-center max-lg:grid-cols-1 max-lg:gap-12">
                    <div className="max-w-[600px]">
                        <h2 className="text-4xl md:text-[46px] font-extrabold mb-4 font-sans">About Us</h2>
                        <p className="text-lg md:text-xl font-semibold italic mb-6 opacity-90">VJ Scans & Labs: Precision. Compassion. Dedication.</p>
                        <div className="text-sm md:text-base leading-relaxed mb-6 opacity-90 font-sans">
                            <p>
                                At VJ Scans & Labs in Chennai, we understand the critical role diagnostic sciences play in shaping medical decisions and patient outcomes. Our state-of-the-art facility brings together advanced imaging systems, genetic testing capabilities, and an experienced team committed to accuracy and compassionate care.
                            </p>
                            <br />
                            <p>
                                Through continuous training, rigorous quality checks, and a patient-first approach, we ensure every individual receives a smooth, reliable, and reassuring diagnostic experience.
                            </p>
                        </div>
                        <KnowMoreButton
                            text="Read More"
                            iconVariant="up-right"
                            content={{
                                title: 'About VJ Scans & Labs',
                                description: (
                                    <>
                                        <p className="mb-4">
                                            At VJ Scans & Labs in Chennai, we understand the critical role diagnostic sciences play in shaping medical decisions and patient outcomes. Our state-of-the-art facility brings together advanced imaging systems, genetic testing capabilities, and an experienced team committed to accuracy and compassionate care.
                                        </p>
                                        <p>
                                            Through continuous training, rigorous quality checks, and a patient-first approach, we ensure every individual receives a smooth, reliable, and reassuring diagnostic experience. Our multidisciplinary team of radiologists, pathologists, and genetic counselors work together to provide comprehensive diagnostic solutions for patients across Tamil Nadu.
                                        </p>
                                    </>
                                ),
                                additionalInfo: 'VJ Scans & Labs: Precision. Compassion. Dedication. We are committed to providing world-class diagnostic services that help you make informed healthcare decisions.'
                            }}
                        />
                    </div>

                    <div className="relative w-full lg:hidden flex justify-center">
                        <Image
                            src="/images/section-7/mobile.avif"
                            alt="About VJ Scans"
                            width={600}
                            height={400}
                            className="w-full h-auto rounded-2xl shadow-xl"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Section7;