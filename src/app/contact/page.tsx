import React from 'react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import HeroSection from '@/components/features/shared/HeroSection'
import AppointmentSection from '@/components/common/AppointmentSection'
import { Phone, Mail, Clock } from 'lucide-react'
import { Metadata } from 'next'
import { seoDatas, SITE_NAME } from '@/lib/seo'

const seo = seoDatas.contact;

export const metadata: Metadata = {
    title: seo.title,
    description: seo.description,
    openGraph: {
        title: seo.title,
        description: seo.description,
        url: seo.url,
        siteName: SITE_NAME,
        images: [
            {
                url: seo.image,
                width: 1200,
                height: 630,
                alt: seo.title
            },
        ],
        type: "website"
    }
}

const slides = [
    {
        id: 1,
        title: <span className='font-sans text-[#0961A1]'>Contact <span className='text-[#F98D1B]'>Us</span></span>,
        subtitle: <span className='font-sans text-[#1E1E1E]'>We are here to help. Reach out to us for any queries or assistance.</span>,
        image: '/images/specialities/male-infertility/section1/banner.avif',
        mobileImage: '/images/Section1/mobileBanner-img-1-by-vj.avif',
        bgColor: 'bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]'
    }
]

const ContactPage = () => {
    return (
        <main className="overflow-hidden">
            <ScrollReveal direction="down">
                <HeroSection slides={slides} formSource='Contact Page' />
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
                <section className="py-20 bg-white font-sans">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Phone */}
                            <div className="bg-[#F1F9FF] p-8 rounded-3xl border border-blue-50 flex flex-col items-center text-center gap-4  transition-shadow">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-[#0961A1]">
                                    <Phone className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-[#0961A1]">Phone</h3>
                                <p className="text-gray-600 font-medium">
                                    <a href="tel:+919585335552" className=" transition-colors">+91 95853 35552</a>
                                </p>
                                <p className="text-gray-500 text-sm">Mon-Sun 24/7 Support</p>
                            </div>

                            {/* Email */}
                            <div className="bg-[#FFF8F0] p-8 rounded-3xl border border-orange-50 flex flex-col items-center text-center gap-4 transition-shadow">
                                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-[#F98D1B]">
                                    <Mail className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-[#0961A1]">Email</h3>

                                <p className="text-gray-600 font-medium">
                                    <a href="mailto:vjscansandlabs@gmail.com" className=" transition-colors">vjscansandlabs@gmail.com</a>
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 flex flex-col items-center text-center transition-shadow">
                                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6 text-green-600">
                                    <Clock className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-3">Working Hours</h3>
                                <p className="text-gray-600">Open 24 Hours</p>
                                <p className="text-gray-500 text-sm mt-2">Emergency Services Available</p>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <ScrollReveal direction="up"><AppointmentSection className='mb-10' /></ScrollReveal>
        </main >
    )
}

export default ContactPage
