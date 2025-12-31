import React from 'react'
import Image from 'next/image'

const Section5 = () => {
    return (
        <section className="py-12 bg-white">
            <div className="max-w-[1400px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Image Side - Left on Desktop to alternate */}
                    <div className="order-2 md:order-1 relative h-[300px] md:h-[457px] md:w-[574px] rounded-2xl overflow-hidden shadow-lg bg-gray-100">
                        {/* Placeholder image */}
                        <div className="relative h-full w-full">
                            <Image
                                src="https://image.pollinations.ai/prompt/dna%20double%20helix%20gene%20mutation%20medical%20illustration%20blue%20tone?width=600&height=500&nologo=true"
                                alt="PGT-M Illustration"
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        </div>

                    </div>

                    {/* Text Side */}
                    <div className='flex flex-col gap-6 font-sans order-1 md:order-2'>
                        <div>
                            <h2 className="text-2xl md:text-5xl font-extrabold text-[#0961A1] mb-2">
                                PGT-M & <span className="text-[#FF9D00] "> PGT-SR</span>
                            </h2>
                            <p className="text-gray-700 font-sans font-medium leading-relaxed text-sm md:text-base">
                                <strong>PGT-M (Monogenic):</strong> Tests for specific single-gene disorders (like Cystic Fibrosis or Thalassemia) when there is a known family history. <br />
                                <strong>PGT-SR (Structural Rearrangements):</strong> Screens for chromosomal structural abnormalities (translocations) in parents that can cause unbalanced embryos.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl md:text-5xl font-extrabold text-[#0961A1] mb-2">
                                Why Choose <span className="text-[#FF9D00]">Us?</span>
                            </h2>
                            <p className="text-gray-700 font-sans font-medium leading-relaxed text-sm md:text-base">
                                VJ Scans & Labs utilizes state-of-the-art sequencing technology and expert genetic analysis to provide the most accurate PGT results. Our integrated approach ensures you receive comprehensive support from counseling to results.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Section5
