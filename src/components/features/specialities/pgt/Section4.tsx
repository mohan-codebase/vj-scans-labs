import React from 'react'
import Image from 'next/image'

const Section4 = () => {
    return (
        <section className="py-12 bg-white">
            <div className="max-w-[1400px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Text Side */}
                    <div className='flex flex-col gap-6 font-sans'>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-[#0961A1]">
                            PGT-A <br /> <span className="text-[#FF9D00]">(Aneuploidy)</span>
                        </h2>
                        <p className="text-gray-700 leading-relaxed font-medium font-sans">
                            PGT-A screens for embryos with the correct number of chromosomes (euploid). Embryos with missing or extra chromosomes (aneuploidy) often fail to implant or result in miscarriage. PGT-A is particularly beneficial for women over 35 or those with a history of pregnancy loss.
                        </p>

                        <h3 className="text-lg font-bold text-[#393939]">Who should consider PGT-A?</h3>
                        <ul className="space-y-3 font-sans font-medium">
                            <li className="flex items-start gap-2">
                                <Image src="/images/specialities/male-infertility/section3/hand-icon.svg" className='mt-1' alt="Hand Icon" width={20} height={20} />
                                <p className="text-gray-600">
                                    Advanced Maternal Age (35+)
                                </p>
                            </li>
                            <li className="flex items-start gap-2">
                                <Image src="/images/specialities/male-infertility/section3/hand-icon.svg" className='mt-1' alt="Hand Icon" width={20} height={20} />
                                <p className="text-gray-600">
                                    Recurrent Implantation Failure
                                </p>
                            </li>
                            <li className="flex items-start gap-2">
                                <Image src="/images/specialities/male-infertility/section3/hand-icon.svg" className='mt-1' alt="Hand Icon" width={20} height={20} />
                                <p className="text-gray-600">
                                    Recurrent Pregnancy Loss
                                </p>
                            </li>
                        </ul>
                    </div>

                    {/* Image Side */}
                    <div className="relative h-[300px] md:h-[457px] md:w-[574px] rounded-2xl overflow-hidden shadow-lg bg-gray-100">
                        {/* Placeholder image */}
                        <div className="relative h-full w-full">
                            <Image
                                src="https://image.pollinations.ai/prompt/chromosomes%20dna%20analysis%20medical%20illustration%20blue%20orange?width=600&height=500&nologo=true"
                                alt="PGT-A Illustration"
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
