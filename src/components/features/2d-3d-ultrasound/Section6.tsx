'use client';

import React, { useState } from 'react';

const Section6 = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    const faqs = [
        {
            question: "What is the difference between 2D and 3D ultrasound?",
            answer: "2D ultrasound provides flat, two-dimensional images, commonly used for medical diagnostics. 3D ultrasound captures multiple 2D images from different angles and reconstructs them to create a three-dimensional view, offering more detailed and lifelike images, especially beneficial for fetal imaging and visualizing complex structures."
        },
        {
            question: "Is 2D/3D ultrasound safe for me and my baby?",
            answer: "Yes, ultrasound technology, including 2D and 3D, is considered very safe when performed by trained professionals. It uses sound waves, not radiation, and there are no known harmful effects on the mother or baby when used appropriately for medical purposes."
        },
        {
            question: "When is the best time to get a 3D/4D ultrasound during pregnancy?",
            answer: "For the best 3D/4D images of your baby, we generally recommend scheduling the ultrasound between 26 and 32 weeks of gestation. During this period, the baby has developed enough fat to give clear facial features, and there is usually still sufficient amniotic fluid for good visualization."
        },
        {
            question: "Do I need a referral for a 2D or 3D ultrasound?",
            answer: "While some diagnostic ultrasounds may require a doctor's referral, elective 3D/4D ultrasounds for keepsake purposes often do not. Please check with our clinic directly or your healthcare provider regarding specific requirements for your desired ultrasound service."
        }
    ];

    return (
        <section className="bg-[#F0F8FF] py-16 px-4 md:px-8 lg:px-16">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-[40px] font-bold text-[#0961A1] text-center mb-12 font-sans">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-300 pb-4">
                            <button
                                className="w-full flex justify-between items-center text-left py-2 focus:outline-none group"
                                onClick={() => toggleAccordion(index)}
                            >
                                <span className="text-lg md:text-xl font-[700] text-gray-800 font-sans">
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