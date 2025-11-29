import React from 'react'
import Image from 'next/image' // Assuming Next.js for image optimization

const specialisations = [
    { label: 'PET/CT Scan', image: '/images/section-6/PET:CT Scan.svg' },
    { label: 'Genetics', image: '/images/section-6/Genetics.svg' },
    { label: 'X-ray', image: '/images/section-6/X-ray.svg' },
    { label: 'Mammogram', image: '/images/section-6/Mammogram.svg' },
    { label: 'MRI', image: '/images/section-6/MRI.svg' },
    { label: 'Pathology', image: '/images/section-6/Pathology.svg' },
    { label: 'Laboratory', image: '/images/section-6/laboratory.svg' },
    { label: 'Health Check', image: '/images/section-6/health_check.svg' },
    { label: 'Pathology', image: '/images/section-6/pathology2.svg' },
]

const Section6 = () => {
    const firstRowSpecialisations = specialisations.slice(0, 5);
    const secondRowSpecialisations = specialisations.slice(5);

    return (
        <section className="bg-[linear-gradient(180deg,_#FFEDDA_0%,_rgba(255,_227,_198,_0)_100%)] border border-[1px solid #CCCCCC] py-16 px-4 md:px-8 rounded-4xl text-center max-w-7xl mx-auto">
            <h2 className="text-[#0961A1] text-[36px] md:text-[40px] font-[800] mb-8 md:mb-12">
                Our Specialisations
            </h2>

            {/* Mobile layout: original flex-wrap behavior */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12 md:hidden">
                {specialisations.map((item, index) => (
                    <div key={index} className="flex flex-col items-center w-[100px]">
                        <div className="rounded-[20px] flex items-center justify-center">
                            <Image
                                src={item.image}
                                alt={item.label}
                                width={100}
                                height={100}
                                className="w-30 h-30 object-contain"
                            />
                        </div>
                        <span className="text-[#595959] md:font-[900] md:mt-3 text-[16px]">
                            {item.label}
                        </span>
                    </div>
                ))}
            </div>

            {/* Desktop layout: 5 then 4 images */}
            <div className="hidden md:block mb-12">
                <div className="flex justify-center gap-8 mb-8">
                    {firstRowSpecialisations.map((item, index) => (
                        <div key={index} className="flex flex-col items-center w-[150px]">
                            <div className="rounded-[20px] flex items-center justify-center">
                                <Image
                                    src={item.image}
                                    alt={item.label}
                                    width={48}
                                    height={48}
                                    className="md:w-30 md:h-30 object-contain"
                                />
                            </div>
                            <span className="text-[#555] mt-3 text-[16px] font-[600]">
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center gap-8">
                    {secondRowSpecialisations.map((item, index) => (
                        <div key={index} className="flex flex-col items-center w-[150px]">
                            <div className="rounded-[20px] flex items-center justify-center">
                                <Image
                                    src={item.image}
                                    alt={item.label}
                                    width={48}
                                    height={48}
                                    className="md:w-30 md:h-30 object-contain"
                                />
                            </div>
                            <span className="text-[#555] mt-3 text-[16px] font-[600]">
                                {item.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <button className="bg-[#005698] text-white py-3 px-10 text-base font-semibold rounded-[14px]  transition-colors duration-300">
                View All
            </button>
        </section>
    )
}

export default Section6