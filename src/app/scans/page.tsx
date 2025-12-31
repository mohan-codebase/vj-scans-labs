import React from 'react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import Link from 'next/link'
import { Activity, Brain, Heart, Zap, FileText } from 'lucide-react'

import WhyChooseUsSection from '@/components/common/WhyChooseUsSection'
import TestimonialSection from '@/components/common/TestimonialSection'
import AppointmentSection from '@/components/common/AppointmentSection'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Diagnostic Scans - VJ Scans & Labs",
    description: "Comprehensive diagnostic scanning services strictly adhering to quality protocols.",
}

const scans = [
    {
        name: "MRI Scan",
        link: "/scans/mriscan",
        icon: <Brain className="w-8 h-8" />,
        description: "High-field 1.5 Tesla MRI for detailed musculoskeletal and neurological imaging."
    },
    {
        name: "CT Scan",
        link: "/scans/ctscan",
        icon: <Zap className="w-8 h-8" />,
        description: "Multislice CT technology for rapid and high-resolution body imaging."
    },
    {
        name: "Ultrasound (2D/3D)",
        link: "/scans/2d-3d-ultrasound",
        icon: <Activity className="w-8 h-8" />,
        description: "Advanced pregnancy, abdominal, and soft tissue ultrasound diagnostics."
    },
    {
        name: "Digital Mammography",
        link: "/scans/mammograms",
        icon: <FileText className="w-8 h-8" />,
        description: "Low-dose digital mammograms for early and accurate breast cancer screening."
    },
    {
        name: "Echocardiography (ECHO)",
        link: "/scans/echo",
        icon: <Heart className="w-8 h-8" />,
        description: "Comprehensive heart function assessment with color doppler studies."
    },
    {
        name: "X-Ray",
        link: "/scans/x-ray",
        icon: <FileText className="w-8 h-8" />,
        description: "Digital radiography for clear bone and chest imaging with minimal radiation."
    },
    {
        name: "ECG",
        link: "/scans/ecg",
        icon: <Activity className="w-8 h-8" />,
        description: "Electrocardiogram services for quick cardiac rhythm monitoring."
    },
    {
        name: "TMT",
        link: "/scans/tmt",
        icon: <Activity className="w-8 h-8" />,
        description: "Treadmill stress test to evaluate heart function under exertion."
    }
]

const page = () => {
    return (
        <main className="overflow-hidden">
            <ScrollReveal direction="down">
                <div className="py-20 px-4 text-center bg-linear-to-b from-blue-50 to-white">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#0961A1] mb-6">Our Scans</h1>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-12">
                        We offer a wide range of advanced diagnostic imaging services to ensure you get accurate and timely results.
                    </p>

                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                        {scans.map((scan) => (
                            <Link key={scan.name} href={scan.link} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-100 transition-all flex flex-col items-center gap-4 group text-center h-full">
                                <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center text-[#0961A1] group-hover:bg-[#0961A1] group-hover:text-white transition-colors duration-300">
                                    {scan.icon}
                                </div>
                                <h3 className="font-bold text-xl text-gray-800">{scan.name}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{scan.description}</p>
                                <div className="mt-auto pt-4 text-[#F98D1B] font-bold text-sm uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity">View Details</div>
                            </Link>
                        ))}
                    </div>
                </div>
            </ScrollReveal>
            <ScrollReveal direction="left"><WhyChooseUsSection /></ScrollReveal>
            <ScrollReveal direction="right"><TestimonialSection /></ScrollReveal>
            <ScrollReveal><AppointmentSection /></ScrollReveal>
        </main>
    )
}

export default page
