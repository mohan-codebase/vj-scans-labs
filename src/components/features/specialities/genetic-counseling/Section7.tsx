import React from 'react'
import Image from 'next/image'

const processSteps = [
    {
        title: "Initial Consultation",
        description: "We review your medical and family history to understand your specific concerns and needs."
    },
    {
        title: "Risk Assessment",
        description: "Analyzing inheritance patterns to estimate the likelihood of genetic conditions in you or your family."
    },
    {
        title: "Testing Options",
        description: "Discussing available tests, their benefits, limitations, and costs to help you decide."
    },
    {
        title: "Results Discussion",
        description: "Explaining complex results in simple terms and discussing their implications."
    },
    {
        title: "Support & Planning",
        description: "Providing emotional support and helping you plan next steps for management or future pregnancies."
    }
]

const Section7 = () => {
    return (
        <section className="py-16 md:py-20 bg-[#F8FAFC]">
            <div className="container mx-auto px-4 max-w-[1400px]">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#0961A1] mb-6">
                        The Counseling <span className="text-[#FF9D00]">Process</span>
                    </h2>
                    <p className="text-gray-600 font-medium max-w-2xl mx-auto">
                        A structured, supportive journey to help you find answers.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FF9D00] to-transparent opacity-30"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                        {processSteps.map((step, idx) => (
                            <div key={idx} className="relative bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
                                <div className="w-16 h-16 bg-[#FFF4E6] rounded-full flex items-center justify-center mb-6 z-10 border-4 border-white shadow-sm font-bold text-[#FF9D00] text-xl">
                                    {idx + 1}
                                </div>
                                <h3 className="text-lg font-bold text-[#0961A1] mb-3">{step.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed font-medium">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-20">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#0961A1] text-center mb-10">Why It Matters</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-[#F1F9FF] p-8 rounded-2xl border border-[#0961A1]/10">
                            <h4 className="text-xl font-bold text-[#0961A1] mb-2">Informed Choices</h4>
                            <p className="text-gray-600 font-medium">Empowers you to make decisions about pregnancy, testing, and health management based on facts, not fear.</p>
                        </div>
                        <div className="bg-[#FFF8F0] p-8 rounded-2xl border border-[#FF9D00]/10">
                            <h4 className="text-xl font-bold text-[#F98D1B]">Risk Management</h4>
                            <p className="text-gray-600 font-medium">Helps identify risks early, allowing for personalized screening and prevention strategies.</p>
                        </div>
                        <div className="bg-[#F1F9FF] p-8 rounded-2xl border border-[#0961A1]/10">
                            <h4 className="text-xl font-bold text-[#0961A1]">Psychological Support</h4>
                            <p className="text-gray-600 font-medium">Provides a safe space to process the emotional impact of genetic information on you and your family.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section7
