import React from 'react'
import Image from 'next/image' // Assuming Next.js for image optimization

const specialisations = [
    { label: 'MRI', image: '/images/section-6/MRI.svg' },
    { label: 'CT Scan', image: '/images/section-6/ct-scan.svg' },
    { label: 'X-ray', image: '/images/section-6/X-ray.svg' },
    { label: 'Mammogram', image: '/images/section-6/Mammogram.svg' },
    { label: 'Pathology', image: '/images/section-6/Pathology.svg' },
    { label: 'Laboratory', image: '/images/section-6/laboratory.svg' },
    { label: 'Health Check', image: '/images/section-6/health_check.svg' },
    { label: 'USG', image: '/images/section-6/ct-scan.svg' },
]

const Section6 = () => {
    // const firstRowSpecialisations = specialisations.slice(0, 5);
    // const secondRowSpecialisations = specialisations.slice(5);

    return (
        <section className="bg-[linear-gradient(180deg,_#FFEDDA_0%,_rgba(255,_227,_198,_0)_100%)] border border-[1px solid #CCCCCC] py-16 px-4 md:px-8 rounded-4xl text-center max-w-[1400px] mx-2 mb-5 md:mb-0 md:mx-auto">
            <h2 className="text-[#0961A1] text-[36px] md:text-[40px] font-[800] mb-8 md:mb-12 font-sans">
                Our Specialisations
            </h2>

            {/* Unified Responsive Layout */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-12 max-w-4xl mx-auto">
                {specialisations.map((item, index) => (
                    <div key={index} className="flex flex-col items-center w-[120px] md:w-[150px]">
                        <div className="rounded-[20px] flex items-center justify-center md:p-2 transition-transform hover:scale-110 duration-300">
                            <Image
                                src={item.image}
                                alt={item.label}
                                width={100}
                                height={100}
                                className="w-24 h-24 md:w-30 md:h-30 object-contain"
                            />
                        </div>
                        <span className="text-[#555] mt-3 text-[14px] md:text-[16px] font-[600] font-sans">
                            {item.label}
                        </span>
                    </div>
                ))}
            </div>


        </section>
    )
}

export default Section6