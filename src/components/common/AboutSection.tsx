import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const AboutSection = () => {
    return (
        <div className='mx-2 md:mx-0'>
            <section className="relative max-w-[1400px] mx-auto w-full md:my-14 bg-[linear-gradient(86.21deg,#0B62A1_33.3%,#42A5ED_100.16%)] lg:bg-[url('/images/section-7/section7.avif')] lg:bg-cover lg:bg-center lg:bg-no-repeat rounded-[50px] overflow-hidden flex items-center p-16 text-white max-lg:p-10 max-lg:rounded-[29px]" >
                <div className=" w-full grid grid-cols-2 gap-16 items-center max-lg:grid-cols-1 max-lg:gap-12">
                    <div className="max-w-[600px]">
                        <h2 className="text-3xl md:text-[46px] font-extrabold mb-4">About Us</h2>
                        <p className="text-lg md:text-xl font-semibold italic mb-6 opacity-90">VJ SCANS: Precision. Compassion. Dedication.</p>
                        <div className="text-sm md:text-base leading-relaxed mb-6 opacity-90">
                            <p>
                                At VJ Scans, we understand the critical role diagnostic sciences play in shaping medical decisions and patient outcomes. Our state-of-the-art centre brings together advanced imaging systems and an experienced team committed to accuracy and care.
                            </p>
                            <br />
                            <p>
                                Through continuous training, rigorous quality checks, and a patient-first approach, we ensure every individual receives a smooth, reliable, and reassuring diagnostic experience.
                            </p>
                        </div>
                        <Link href="/aboutus" className="inline-flex items-center gap-2 bg-[linear-gradient(84.92deg,#F98D1B_34.11%,#FFC180_105.58%)] text-white py-3 px-6 rounded-full font-semibold no-underline hover:shadow-lg hover:scale-105 transition-all duration-300">
                            Read More
                            <span className="bg-white text-orange-500 rounded-full p-1">
                                <ArrowUpRight size={16} />
                            </span>
                        </Link>
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

export default AboutSection;
