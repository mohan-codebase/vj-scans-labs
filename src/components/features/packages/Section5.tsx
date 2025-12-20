"use client"
import React from 'react'
import { IconShieldHeart, IconCpu, IconUsers, IconHeartHandshake } from '@tabler/icons-react'
import Image from 'next/image'

const reasons = [
    {
        id: 1,
        title: "Extensive Coverage",
        description: "Our package offers comprehensive testing from routine blood panels to sophisticated imaging to provide a complete overview of your health.",
        icon: '/images/packages/section5/extensive-coverage.svg'
    },
    {
        id: 2,
        title: "High-Tech Facilities",
        description: "At VJ Scans, we are committed to using advanced technology and state-of-the-art equipment to deliver accurate and dependable results.",
        icon: '/images/packages/section5/high-tech facilities.svg'
        },
    {
        id: 3,
        title: "Professional Medical Staff",
        description: "Our skilled healthcare professionals are committed to providing personalized care and offering clear, in-depth analysis of your test results.",
        icon: '/images/packages/section5/professional-medical-staff.svg'
    },
    {
        id: 4,
        title: "Ease and Comfort",
        description: "Recognizing the value of your time, we've designed a streamlined process to make your checkup efficient, smooth, and comfortable.",
        icon: '/images/packages/section5/ease-and-comfort.svg'
    }
]

const Section5 = () => {
    return (
        <section className="py-20 bg-white font-sans">
            <div className="max-w-[1400px] mx-auto px-4">
                <h2 className="text-[28px] md:text-[40px] font-bold text-[#0961A1] text-center mb-16">
                    Why Choose Our Health Checkup Package?
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                    {reasons.map((reason) => (
                        <div key={reason.id} className="flex flex-col items-center group">
                            <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                                <Image src={reason.icon} alt={reason.title} width={58} height={58} className="w-36 h-36" />
                            </div>
                            <h3 className="text-xl font-bold text-[#0961A1] mb-3">
                                {reason.title}
                            </h3>
                            <p className="text-gray-600 font-bold text-sm leading-relaxed max-w-[280px]">
                                {reason.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            
        </section>
    )
}

export default Section5
