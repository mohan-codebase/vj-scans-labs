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
                            Who Should <br /> <span className="text-[#FF9D00]">Seek Counseling?</span>
                        </h2>
                        <p className="text-gray-700 leading-relaxed font-medium font-sans">
                            Genetic counseling is recommended for anyone with a family history of genetic disorders, couples planning a pregnancy (especially those with a history of infertility or RPL), or individuals concerned about their risk for hereditary cancers.
                        </p>

                        <h3 className="text-lg font-bold text-[#393939]">Key Indications</h3>
                        <ul className="space-y-3 font-sans font-medium">
                            <li className="flex items-start gap-2">
                                <Image src="/images/specialities/male-infertility/section3/hand-icon.svg" className='mt-1' alt="Hand Icon" width={20} height={20} />
                                <p className="text-gray-600"><strong className="text-gray-800">Advanced Maternal Age:</strong> Pregnancy at age 35 or older.</p>
                            </li>
                            <li className="flex items-start gap-2">
                                <Image src="/images/specialities/male-infertility/section3/hand-icon.svg" className='mt-1' alt="Hand Icon" width={20} height={20} />
                                <p className="text-gray-600"><strong className="text-gray-800">Abnormal Screening:</strong> Concerning results from prenatal ultrasound or blood tests.</p>
                            </li>
                            <li className="flex items-start gap-2">
                                <Image src="/images/specialities/male-infertility/section3/hand-icon.svg" className='mt-1' alt="Hand Icon" width={20} height={20} />
                                <p className="text-gray-600"><strong className="text-gray-800">Family History:</strong> Known genetic conditions (Cystic Fibrosis, Thalassemia, etc.) or hereditary cancers (BRCA).</p>
                            </li>
                            <li className="flex items-start gap-2">
                                <Image src="/images/specialities/male-infertility/section3/hand-icon.svg" className='mt-1' alt="Hand Icon" width={20} height={20} />
                                <p className="text-gray-600"><strong className="text-gray-800">Recurrent Pregnancy Loss:</strong> History of multiple miscarriages or stillbirths.</p>
                            </li>
                            <li className="flex items-start gap-2">
                                <Image src="/images/specialities/male-infertility/section3/hand-icon.svg" className='mt-1' alt="Hand Icon" width={20} height={20} />
                                <p className="text-gray-600"><strong className="text-gray-800">Consanguinity:</strong> Marriage between blood relatives.</p>
                            </li>
                        </ul>
                    </div>

                    {/* Image Side */}
                    <div className="relative h-[300px] md:h-[457px] md:w-[574px] rounded-2xl overflow-hidden shadow-lg bg-gray-100">
                        <div className="relative h-full w-full">
                            <Image
                                src="https://image.pollinations.ai/prompt/medical%20consultation%20doctor%20patient%20talking%20illustration?width=600&height=500&nologo=true"
                                alt="Consultation Illustration"
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
