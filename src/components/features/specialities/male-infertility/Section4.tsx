import React from 'react'
import Image from 'next/image'

const Section4 = () => {
    return (
        <section className="py-12 bg-white">
            <div className="max-w-[1400px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Text Side */}
                    <div className='flex flex-col gap-6 font-sans'>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0961A1]">
                            Sperm DNA <br /> <span className="text-[#FF9D00]">Fragmentation Index </span>(DFI)
                        </h2>
                        <p className="text-gray-700 leading-relaxed font-medium font-secondary">
                            DFI is the percentage of sperm that have broken or damaged DNA. A high DFI suggests poor sperm quality and may lead to infertility or unsuccessful pregnancy outcomes.
                        </p>

                        <h3 className="text-lg font-bold text-[#393939]">Tests Used to Measure DFI</h3>
                        <ul className="space-y-3 font-secondary font-medium">
                            <li className="flex items-start gap-2">
                                <Image src="/images/specialities/male-infertility/section3/hand-icon.svg" className='mt-1' alt="Hand Icon" width={20} height={20} />
                                <p className="text-gray-600">
                                    TUNEL Test: Uses fluorescent labeling to detect breaks in sperm DNA.
                                </p>
                            </li>
                            <li className="flex items-start gap-2">
                                <Image src="/images/specialities/male-infertility/section3/hand-icon.svg" className='mt-1' alt="Hand Icon" width={20} height={20} />
                                <p className="text-gray-600"> Comet Assay: Measures DNA damage based on the migration of DNA fragments during electrophoresis.</p>
                            </li>
                            <li className="flex items-start gap-2">
                                <Image src="/images/specialities/male-infertility/section3/hand-icon.svg" className='mt-1' alt="Hand Icon" width={20} height={20} />
                                <p className="text-gray-600"> Fluorescence In Situ Hybridization (FISH): Detects chromosomal abnormalities associated with sperm DNA fragmentation.</p>
                            </li>
                        </ul>
                    </div>

                    {/* Image Side */}
                    <div className="relative h-[300px] md:h-[457px] md:w-[574px] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/images/specialities/male-infertility/section4/about-2.avif"
                            alt="Sperm DNA Fragmentation Index"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-l from-blue-900 via-transparent to-transparent opacity-20"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section4
