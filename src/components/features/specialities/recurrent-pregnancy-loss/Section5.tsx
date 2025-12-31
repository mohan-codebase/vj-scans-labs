import React from 'react'
import Image from 'next/image'

const Section5 = () => {
    return (
        <section className="py-12 bg-white">
            <div className="max-w-[1400px] mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Image Side - Left on Desktop to alternate */}
                    <div className="order-2 md:order-1 relative h-[300px] md:h-[457px] md:w-[574px] rounded-2xl overflow-hidden shadow-lg bg-gray-100">
                        <div className="relative h-full w-full">
                            <Image
                                src="https://image.pollinations.ai/prompt/supportive%20medical%20counseling%20session%20illustration%20blue%20orange?width=600&height=500&nologo=true"
                                alt="Counseling Illustration"
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className='flex flex-col gap-6 font-sans order-1 md:order-2'>
                        <div>
                            <h2 className="text-2xl md:text-4xl font-extrabold text-[#0961A1] mb-2">
                                Personalized <span className="text-[#FF9D00] "> <br />Care & Support</span>
                            </h2>
                            <p className="text-gray-700 font-sans font-medium leading-relaxed text-sm md:text-base">
                                Dealing with RPL is emotionally taxing. Our team provides not just diagnostic answers but also compassionate genetic counseling to explain risks and discuss options like IVF with PGT-A or PGT-SR, which can significantly improve outcomes.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Section5
