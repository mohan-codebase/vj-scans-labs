import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { div } from 'motion/react-client';

const Section7 = () => {
    return (
        <div className='mx-2 md:mx-0'>
        < section className = "relative max-w-7xl mx-auto w-full min-h-[600px] bg-[linear-gradient(86.21deg,_#0B62A1_33.3%,_#42A5ED_100.16%)] lg:bg-[url('/images/section-7/section7.avif')] lg:bg-contain lg:bg-center lg:bg-no-repeat rounded-[40px] overflow-hidden flex items-center p-16 text-white max-lg:p-10 max-lg:rounded-[29px]" >
            <div className=" w-full grid grid-cols-2 gap-16 items-center max-lg:grid-cols-1 max-lg:gap-12">
                <div className="max-w-[600px]">
                    <h2 className="text-[46px] font-[800] mb-4">About Us</h2>
                    <p className="text-xl font-semibold italic mb-6 opacity-90">VJ SCANS: Precision. Compassion. Dedication.</p>
                    <div className="text-base leading-relaxed mb-6 opacity-90">
                        <p>
                            At VJ Scans, we understand the critical role diagnostic sciences play in shaping medical decisions and patient outcomes. Our state-of-the-art centre brings together advanced imaging systems and an experienced team committed to accuracy and care.
                        </p>
                        <br />
                        <p>
                            Through continuous training, rigorous quality checks, and a patient-first approach, we ensure every individual receives a smooth, reliable, and reassuring diagnostic experience.
                        </p>
                    </div>
                    <Link href="/about" className="inline-flex items-center gap-2 bg-[linear-gradient(84.92deg,#F98D1B_34.11%,#FFC180_105.58%)] text-white py-3 px-6 rounded-full font-semibold no-underline">
                        Read More
                        <span className="bg-white text-orange-500 rounded-full p-1">
                            <ArrowUpRight size={16} />
                        </span>
                    </Link>
                </div>

                <div className="relative h-[400px] w-full max-lg:h-auto max-lg:flex max-lg:flex-col max-lg:gap-4 max-lg:items-center">
                    <img
                        src="/images/section-7/mobile.avif"
                        alt="About VJ Scans"
                        className="w-full h-auto rounded-2xl "
                    />
                </div>
            </div>
        </section >
    </div>
    );
};

        export default Section7;