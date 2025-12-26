'use client';

import React, { useState } from 'react';

const Section6 = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What is an MRI scan?",
            answer: "MRI (Magnetic Resonance Imaging) is a non-invasive imaging technique that uses powerful magnets and radio waves to create detailed images of organs, tissues, and bones inside your body. Unlike CT scans, MRI does not use radiation."
        },
        {
            question: "Is MRI safe? Does it use radiation?",
            answer: "Yes, MRI is very safe and does not use any ionizing radiation. It uses magnetic fields and radio waves. However, you should inform us if you have any metal implants, pacemakers, or are pregnant."
        },
        {
            question: "How long does an MRI scan take?",
            answer: "Most MRI scans take between 30 to 60 minutes, depending on the area being examined. Some specialized scans may take longer. You'll need to lie still during the scan for the best image quality."
        },
        {
            question: "Will I need contrast dye for my MRI?",
            answer: "Some MRI scans require a contrast agent (usually gadolinium-based) to be injected into your vein to enhance the images. Your doctor will inform you if contrast is needed for your specific scan."
        },
        {
            question: "What should I do to prepare for my MRI?",
            answer: "Remove all metal objects including jewelry, watches, and hairpins. Wear comfortable, loose-fitting clothing without metal fasteners. Inform us about any implants, claustrophobia, or pregnancy. Specific preparation depends on the scan type."
        },
        {
            question: "What if I'm claustrophobic?",
            answer: "If you have claustrophobia, please inform us when booking. We can provide relaxation techniques, and in some cases, mild sedation may be arranged. Our modern MRI machines are more open and less confining than older models."
        },
        {
            question: "Can I have an MRI if I have metal in my body?",
            answer: "It depends on the type of metal. Most surgical implants are MRI-safe, but pacemakers, certain metal implants, or metallic foreign bodies may be contraindications. Please provide a complete list of any implants or previous surgeries."
        },
        {
            question: "How much does an MRI scan cost?",
            answer: "The cost varies depending on the type of MRI scan and whether contrast is used. Please contact our reception for specific pricing information. We accept various insurance plans and offer competitive rates."
        }
    ];

    return (
        <section className="bg-[#F0F8FF] py-16 px-4 md:px-8 md:my-18 lg:px-16 font-sans">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-[40px] font-bold text-[#0961A1] text-center mb-12">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-300 pb-4">
                            <button
                                className="w-full flex justify-between items-center text-left py-2 focus:outline-none group"
                                onClick={() => toggleAccordion(index)}
                            >
                                <span className="text-lg md:text-xl font-semibold text-gray-800">
                                    {faq.question}
                                </span>
                                <span className="ml-4 shrink-0 text-gray-500">
                                    {openIndex === index ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    )}
                                </span>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <p className="text-gray-600 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Section6;
