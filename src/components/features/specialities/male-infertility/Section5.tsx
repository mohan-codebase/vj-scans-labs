import React from 'react'
import Image from 'next/image'

const Section5 = () => {
    return (
        <section className="py-12 bg-white">
            <div className="max-w-[1400px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Image Side - Left on Desktop to alternate */}
                    <div className="order-2 md:order-1 relative h-[300px] md:h-[457px] md:w-[574px] rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/images/specialities/male-infertility/section4/banner-3.avif"
                            alt="Sperm Aneuploidy"
                            fill
                            className="object-cover"
                        />

                    </div>

                    {/* Text Side */}
                    <div className='flex flex-col gap-6 font-sans order-1 md:order-2'>
                        <div>
                            <h2 className="text-2xl md:text-4xl font-extrabold text-[#0961A1] mb-2">
                                What Is Sperm <span className="text-[#FF9D00] "> <br />Aneuploidy Testing?</span>
                            </h2>
                            <p className="text-gray-700 font-sans font-medium leading-relaxed text-sm md:text-base">
                                Sperm aneuploidy testing analyzes the chromosomal makeup of sperm. Normal sperm should have 23 chromosomes. Aneuploidy occurs when there are too many or too few chromosomes, which can lead to infertility or genetic conditions in offspring.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl md:text-4xl font-extrabold text-[#0961A1] mb-2">
                                Why Is This <span className="text-[#FF9D00]">Test Important?</span>
                            </h2>
                            <p className="text-gray-700 font-sans font-medium leading-relaxed text-sm md:text-base">
                                This test helps doctors understand male fertility problems and genetic risks. Chromosomal abnormalities in sperm may be linked to age, environmental exposure, or inherited conditions. The results can help couples choose the best fertility treatment and decide if genetic counseling is needed.                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Section5
