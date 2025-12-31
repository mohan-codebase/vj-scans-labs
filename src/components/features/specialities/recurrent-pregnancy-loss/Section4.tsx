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
                            Diagnostic <br /> <span className="text-[#FF9D00]">Evaluation</span>
                        </h2>
                        <p className="text-gray-700 leading-relaxed font-medium font-sans">
                            We offer a complete panel of tests to evaluate RPL, starting with karyotyping (chromosomal analysis) of both parents to rule out translocations. Further testing may include thrombophilia screening, hormonal profiles, and uterine imaging.
                        </p>

                        <h3 className="text-lg font-bold text-[#393939]">Our Approach</h3>
                        <ul className="space-y-3 font-sans font-medium">
                            <li className="flex items-start gap-2">
                                <Image src="/images/specialities/male-infertility/section3/hand-icon.svg" className='mt-1' alt="Hand Icon" width={20} height={20} />
                                <p className="text-gray-600">Comprehensive Karyotyping (Both Partners)</p>
                            </li>
                            <li className="flex items-start gap-2">
                                <Image src="/images/specialities/male-infertility/section3/hand-icon.svg" className='mt-1' alt="Hand Icon" width={20} height={20} />
                                <p className="text-gray-600">Thrombophilia Screening (APS Panel)</p>
                            </li>
                            <li className="flex items-start gap-2">
                                <Image src="/images/specialities/male-infertility/section3/hand-icon.svg" className='mt-1' alt="Hand Icon" width={20} height={20} />
                                <p className="text-gray-600">Hormonal Assays (Thyroid, Prolactin, etc)</p>
                            </li>
                            <li className="flex items-start gap-2">
                                <Image src="/images/specialities/male-infertility/section3/hand-icon.svg" className='mt-1' alt="Hand Icon" width={20} height={20} />
                                <p className="text-gray-600">Uterine Imaging (3D Ultrasound / Hysteroscopy)</p>
                            </li>
                            <li className="flex items-start gap-2">
                                <Image src="/images/specialities/male-infertility/section3/hand-icon.svg" className='mt-1' alt="Hand Icon" width={20} height={20} />
                                <p className="text-gray-600">Product of Conception (POC) Testing via NGS</p>
                            </li>
                        </ul>
                    </div>

                    {/* Image Side */}
                    <div className="relative h-[300px] md:h-[457px] md:w-[574px] rounded-2xl overflow-hidden shadow-lg bg-gray-100">
                        <div className="relative h-full w-full">
                            <Image
                                src="https://image.pollinations.ai/prompt/karyotype%20chromosomes%20analysis%20chart%20medical%20illustration?width=600&height=500&nologo=true"
                                alt="RPL Diagnostics"
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section4
