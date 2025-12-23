'use client';

import React, { useState } from 'react';

const Section9 = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "How reliable is it to collect blood samples for diagnostic tests?",
            answer: "Our home diagnostic services are completely reliable since we follow all strict protocols and regulations. You can be confident that our lab professionals will preserve the integrity of your sample so that the test results will be accurate. Furthermore, all our lab professionals are skilled in using safe and error-free methods to draw blood samples. With Anderson, you are in safe hands."
        },
        {
            question: "How long will it take to receive my test results?",
            answer: "Most test results are available within 24-48 hours after sample collection. You will receive a notification via email or SMS once your report is ready to be downloaded from our secure portal."
        },
        {
            question: "Will my medical information be kept confidential?",
            answer: "Yes, we adhere to strict data privacy policies and HIPAA guidelines to ensure your medical information remains confidential and secure at all times."
        },
        {
            question: "Do I need to schedule an appointment, or can I get tested on the go?",
            answer: "We recommend scheduling an appointment to ensure minimal waiting time and to guarantee that a phlebotomist is available to attend to you promptly."
        }
    ];

    return (
        <section className="bg-[#F0F8FF] font-sans py-16 px-4 md:px-8 lg:px-16">
            <div className="max-w-4xl mx-auto">
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
                                <span className="text-lg md:text-xl font-[600] text-gray-800">
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

export default Section9;