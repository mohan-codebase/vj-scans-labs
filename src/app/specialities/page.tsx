import React from 'react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import Link from 'next/link'
import {
    Stethoscope,
    Activity,
    Microscope,
    HeartPlus
} from 'lucide-react'
import { Metadata } from 'next'
import { seoDatas, SITE_NAME } from '@/lib/seo'

const seo = seoDatas.specialitiesIndex;

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

const specialities = [
    {
        name: "Onco Diagnostics",
        description: "Specialized diagnostic services for oncology and cancer screening.",
        link: "/specialities/onco-diagnostics",
        icon: <Microscope className="w-8 h-8 text-[#0961A1]" />
    },
    {
        name: "Radiology",
        description: "Expert radiological imaging and interpretation services.",
        link: "/scans",
        icon: <Activity className="w-8 h-8 text-[#0961A1]" />
    },
    {
        name: "Cardiology",
        description: "Advanced heart health diagnostics including ECHO and ECG.",
        link: "/scans",
        icon: <HeartPlus className="w-8 h-8 text-[#0961A1]" />
    },
    {
        name: "Pathology",
        description: "Precise laboratory analysis and diagnostic testing.",
        link: "/scans",
        icon: <Stethoscope className="w-8 h-8 text-[#0961A1]" />
    }
]

const SpecialitiesPage = () => {
    return (
        <main className="min-h-screen bg-linear-to-b from-white to-[#FFFAF0] py-20 px-4 md:px-10 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <ScrollReveal direction="down">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-[#0961A1] mb-6">
                            Our Medical <span className="text-[#F98D1B]">Specialities</span>
                        </h1>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto font-medium">
                            Dedicated expertise across various medical fields to provide accurate and timely diagnostics.
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal direction="up" delay={0.3}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {specialities.map((specialty) => (
                            <div
                                key={specialty.name}
                                className="bg-white rounded-3xl p-8 shadow-xl shadow-orange-100/30 border border-orange-50 group hover:border-[#F98D1B]/30 transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#F98D1B]/10 transition-colors">
                                    {specialty.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-[#0961A1] mb-4">{specialty.name}</h3>
                                <p className="text-gray-600 mb-8 font-medium leading-relaxed">
                                    {specialty.description}
                                </p>
                                <Link
                                    href={specialty.link}
                                    className="inline-flex items-center text-[#F98D1B] font-bold hover:gap-2 transition-all"
                                >
                                    View Details
                                    <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </Link>
                            </div>
                        ))}
                    </div>
                </ScrollReveal>
            </div>
        </main>
    )
}

export default SpecialitiesPage
