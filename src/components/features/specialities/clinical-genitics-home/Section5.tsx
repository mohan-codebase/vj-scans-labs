import React from 'react';
import Image from 'next/image';

const icon1 = '/images/specialities/clinical-genitics-home/section5/icon1.svg';
const icon2 = '/images/specialities/clinical-genitics-home/section5/icon2.svg';
const icon3 = '/images/specialities/clinical-genitics-home/section5/icon3.svg';
const icon4 = '/images/specialities/clinical-genitics-home/section5/icon4.svg';
const icon5 = '/images/specialities/clinical-genitics-home/section5/icon5.svg';
const icon6 = '/images/specialities/clinical-genitics-home/section5/icon6.svg';


const Section5 = () => {
    return (
        <div>
            <section className="w-full max-w-[1400px] mx-auto py-8 md:py-1 px-4 md:px-6 lg:px-8 font-sans">
                <h1 className="text-center font-sans font-extrabold text-[28px] sm:text-[36px] md:text-[42px] lg:text-[46px] leading-tight text-[#0961A1] mb-6 md:mb-10">
                    Why Early <span className="text-[#F98D1B]"> Screening Matters</span>
                </h1>
                <p className="font-sans text-sm sm:text-base md:text-lg leading-relaxed text-center mb-8 md:mb-12 max-w-[1000px] mx-auto px-2">
                    We provide a complete range of diagnostic ultrasound scans using advanced 2D, 3D, and Doppler technology for accurate and safe results.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 justify-items-center max-w-[1000px] mx-auto mt-8 md:mt-12">
                    <div className="flex flex-col justify-center items-center">
                        <Image className="w-[80px] md:w-[200px]" src={icon1} alt="Brain Scan" width={908} height={816} />
                        <h4 className="font-secondary font-semibold text-sm sm:text-base md:text-lg lg:text-xl leading-snug text-center mt-3 md:mt-4 px-2">BGCI certified professional Genetic counsellors</h4>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <Image className="w-[80px] md:w-[200px]" src={icon2} alt="Chest Scan" width={908} height={816} />
                        <h4 className="font-secondary font-semibold text-sm sm:text-base md:text-lg lg:text-xl leading-snug text-center mt-3 md:mt-4 px-2">Portable laser - Lykos Hatching & Embryo Biopsy</h4>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <Image className="w-[80px] md:w-[200px]" src={icon3} alt="Cardiac Scan" width={908} height={816} />
                        <h4 className="font-secondary font-semibold text-sm sm:text-base md:text-lg lg:text-xl leading-snug text-center mt-3 md:mt-4 px-2">Dedicated scientific team for clinical enquiries</h4>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <Image className="w-[80px] md:w-[200px]" src={icon4} alt="Spinal Scan" width={908} height={816} />
                        <h4 className="font-secondary font-semibold text-sm sm:text-base md:text-lg lg:text-xl leading-snug text-center mt-3 md:mt-4 px-2">Dedicated and flexible logistic support for time-sensitive samples</h4>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <Image className="w-[80px] md:w-[200px]" src={icon5} alt="Abdomen Scan" width={908} height={816} />
                        <h4 className="font-secondary font-semibold text-sm sm:text-base md:text-lg lg:text-xl leading-snug text-center mt-3 md:mt-4 px-2">State-of-the-Art Diagnostic Equipment (with Cutting-Edge Genetic Analyzers)</h4>
                    </div>

                    <div className="flex flex-col justify-center items-center">
                        <Image className="w-[80px] md:w-[200px]" src={icon6} alt="Spine Scan" width={908} height={816} />
                        <h4 className="font-secondary font-semibold text-sm sm:text-base md:text-lg lg:text-xl leading-snug text-center mt-3 md:mt-4 px-2">Embryo Biopsy Training /Validation</h4>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Section5