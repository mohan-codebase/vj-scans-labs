"use client"
import React from 'react'
import Image from 'next/image'
import { IconDeviceMobile, IconMicroscope, IconFileCheck } from '@tabler/icons-react'

const steps = [
    {
        id: 1,
        title: "Book a Test",
        iconSrc: "/images/packages/section4/book-a-test.svg",
    },
    {
        id: 2,
        title: "Arrive for Test",
        iconSrc: "/images/packages/section4/arrive-for-test.svg",
    },
    {
        id: 3,
        title: "Detailed Reporting",
        iconSrc: "/images/packages/section4/detailed-reporting.svg",
    }
]

const Section4 = () => {
    return (
        <section className="py-16 bg-[#F4FAFF] font-sans">
            <div className="max-w-[900px] mx-auto px-4 text-center">
                <h2 className="text-[28px] md:text-[40px] font-bold text-[#0961A1] mb-16">
                    How it works?
                </h2>

                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-0">
                    {steps.map((step, index) => (
                        <React.Fragment key={step.id}>
                            <div className="flex flex-col md:flex-row items-center gap-4">
                                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#0961A1] rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
                                    <Image src={step.iconSrc} alt={step.title} width={32} height={32} className="w-20 h-20" />
                                </div>
                                <span className="text-lg md:text-xl font-bold text-[#1E1E1E] whitespace-nowrap">
                                    {step.title}
                                </span>
                            </div>

                            {/* Dotted Line Connector */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:flex items-center mx-4 md:mx-10 flex-1 min-w-[50px] lg:min-w-[100px]">
                                    <div className="w-full border-b-2 border-dotted border-[#0961A1]"></div>
                                </div>
                            )}

                            {/* Vertical Line for Mobile */}
                            {index < steps.length - 1 && (
                                <div className="md:hidden h-12 border-l-2 border-dotted border-[#0961A1]"></div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Section4
