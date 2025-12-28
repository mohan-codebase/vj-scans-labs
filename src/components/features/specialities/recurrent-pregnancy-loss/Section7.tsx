import React from 'react'
import Image from 'next/image'

const treatments = [
    {
        title: "Hormonal Therapy",
        description: "Addressing progesterone deficiencies, thyroid disorders, or other endocrine imbalances to support pregnancy maintenance.",
        icon: "/images/specialities/male-infertility/section3/hand-icon.svg"
    },
    {
        title: "Anticoagulation Therapy",
        description: "Low-dose aspirin or heparin for women diagnosed with Antiphospholipid Antibody Syndrome (APS) or other clotting disorders.",
        icon: "/images/specialities/male-infertility/section3/hand-icon.svg"
    },
    {
        title: "Surgical Intervention",
        description: "Correction of uterine anomalies such as septums, fibroids, or polyps through hysteroscopic procedures.",
        icon: "/images/specialities/male-infertility/section3/hand-icon.svg"
    },
    {
        title: "Genetic Counseling",
        description: "Guidance for couples with chromosomal translocations, including options like IVF with PGT-A for embryo selection.",
        icon: "/images/specialities/male-infertility/section3/hand-icon.svg"
    },
    {
        title: "Lifestyle Modifications",
        description: "Optimizing health through weight management, smoking cessation, and stress reduction to improve reproductive outcomes.",
        icon: "/images/specialities/male-infertility/section3/hand-icon.svg"
    }
]

const Section7 = () => {
    return (
        <section className="py-16 md:py-20 bg-[#F8FAFC]">
            <div className="container mx-auto px-4 max-w-[1400px]">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#0961A1] mb-4">
                        Treatment <span className="text-[#FF9D00]">Options</span>
                    </h2>
                    <p className="text-gray-600 font-medium max-w-2xl mx-auto">
                        Personalized care plans tailored to your specific diagnostic findings.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {treatments.map((item, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
                            <div className="w-12 h-12 bg-[#FFF4E6] rounded-full flex items-center justify-center mb-6">
                                <span className="text-2xl font-bold text-[#FF9D00]">{idx + 1}</span>
                            </div>
                            <h3 className="text-xl font-bold text-[#0961A1] mb-3">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed font-medium">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Section7
