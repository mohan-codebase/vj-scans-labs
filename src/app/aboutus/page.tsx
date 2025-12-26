import React from 'react'
import AboutSection from '@/components/common/AboutSection'
import WhyChooseUsSection from '@/components/common/WhyChooseUsSection'
import TestimonialSection from '@/components/common/TestimonialSection'
import AppointmentSection from '@/components/common/AppointmentSection'
import { seoDatas, SITE_NAME } from '@/lib/seo'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "About Us - VJ Scans & Labs",
    description: "Learn more about VJ Scans & Labs, our commitment to precision, compassion, and dedication in diagnostic services.",
    openGraph: {
        title: "About Us - VJ Scans & Labs",
        description: "Learn more about VJ Scans & Labs, our commitment to precision, compassion, and dedication in diagnostic services.",
        url: `${SITE_NAME}/aboutus`,
        siteName: SITE_NAME,
        type: "website"
    }
}

const page = () => {
    return (
        <main>
            <div className="py-20 px-4 text-center bg-linear-to-b from-blue-50 to-white">
                <h1 className="text-4xl md:text-6xl font-extrabold text-[#0961A1] mb-6">About <span className='text-[#f98d1b]'>Us</span> </h1>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                    Precision. Compassion. Dedication.
                </p>
            </div>
            <AboutSection />

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-[#EBF7FF] p-8 md:p-12 rounded-[30px] border border-blue-100">
                            <h3 className="text-3xl font-extrabold text-[#0961A1] mb-4">Our Vision</h3>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                To be the most trusted and advanced diagnostic care provider, ensuring accessible, accurate, and timely healthcare solutions for everyone. We aim to set the gold standard in diagnostic excellence through cutting-edge technology and compassionate care.
                            </p>
                        </div>
                        <div className="bg-[#FFF8F0] p-8 md:p-12 rounded-[30px] border border-orange-100">
                            <h3 className="text-3xl font-extrabold text-[#F98D1B] mb-4">Our Mission</h3>
                            <ul className="space-y-4 text-lg text-gray-700">
                                <li className="flex gap-3">
                                    <span className="text-[#F98D1B] font-bold">•</span>
                                    To provide precise diagnostic results that empower medical decisions.
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-[#F98D1B] font-bold">•</span>
                                    To continuously upgrade our technology and expertise to serve patients better.
                                </li>
                                <li className="flex gap-3">
                                    <span className="text-[#F98D1B] font-bold">•</span>
                                    To create a patient-friendly environment where care comes first.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <WhyChooseUsSection />
            <TestimonialSection />
            <AppointmentSection className='mb-14' />
        </main>
    )
}

export default page
