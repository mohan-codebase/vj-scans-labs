'use client';

import React, { useState } from 'react';

const Section6 = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What is a 2D/3D ultrasound?",
            answer: "Ultrasound imaging uses high-frequency sound waves to create images of internal body structures. 2D ultrasound provides flat, two-dimensional images, while 3D ultrasound creates three-dimensional static images, and 4D adds real-time movement. These are safe, non-invasive procedures with no radiation exposure."
        },
        {
            question: "Is ultrasound safe during pregnancy?",
            answer: "Yes, ultrasound is considered very safe during pregnancy. It doesn't use ionizing radiation and has been used for decades without any known harmful effects to mother or baby. Prenatal ultrasounds are standard practice for monitoring fetal development."
        },
        {
            question: "How long does an ultrasound take?",
            answer: "Most ultrasound examinations take 20-45 minutes, depending on the area being examined and the complexity of the case. Obstetric ultrasounds may take longer if detailed measurements or multiple images are needed."
        },
        {
            question: "Do I need to prepare for my ultrasound?",
            answer: "Preparation varies by exam type. For abdominal ultrasounds, you may need to fast for 6-8 hours. For pelvic ultrasounds, a full bladder is often required. For pregnancy ultrasounds, drink 4-6 glasses of water 1 hour before. We'll provide specific instructions when you book."
        },
        {
            question: "What can ultrasound detect?",
            answer: "Ultrasound can examine organs like the liver, kidneys, gallbladder, pancreas, spleen, and blood vessels. It's widely used in pregnancy to monitor fetal development. It can detect cysts, tumors, blockages, and other abnormalities in soft tissues."
        },
        {
            question: "Will the ultrasound hurt?",
            answer: "No, ultrasound is painless. You'll feel the technologist moving a handheld transducer over your skin with gel applied for better contact. Some pressure may be applied for better images, which might cause slight discomfort but not pain."
        },
        {
            question: "Can I get copies of my ultrasound images?",
            answer: "Yes, you'll receive a detailed report with relevant images. For pregnancy ultrasounds, we can provide keepsake photos. Digital copies can be shared with your referring physician. Please ask our staff about image options."
        },
        {
            question: "When will I get my ultrasound results?",
            answer: "A radiologist will review your ultrasound images and prepare a report, typically within 24-48 hours. Your referring doctor will receive the report and discuss the findings with you, along with any recommended follow-up."
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
