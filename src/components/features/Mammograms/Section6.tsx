'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from "motion/react";

const Section6 = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "Why is breast screening important?",
            answer: "In the United States, one in eight women will develop breast cancer by age 75. Regular breast screening can help find cancer at an early and more curable stage. Screening can also find problems in the breasts that are not cancer."
        },
        {
            question: "Is it painful to get a mammogram?",
            answer: "The pressure of the plates often makes the breasts ache. This discomfort is brief. If you are still having menstrual periods, you may want to have the test done in the week right after your period. The breasts are often less tender after your period."
        },
        {
            question: "Why is mammography done?",
            answer: "Mammography is performed to screen for breast cancer in women who do not have signs or symptoms of the disease. It helps in early detection, which significantly improves treatment outcomes. It is also used to diagnose breast disease in women."
        },
        {
            question: "What does it mean to be at average risk of breast cancer?",
            answer: "Being at average risk means you do not have a personal history of breast cancer, no strong family history of breast cancer, no known genetic mutation (such as BRCA), and no history of chest radiation therapy before age 30."
        },
        {
            question: "How should I prepare for a mammogram?",
            answer: "Do not wear deodorant, talcum powder, or lotion under your arms or on your breasts on the day of the exam, as these can appear as calcium spots. Wear a two-piece outfit so you only have to remove your top."
        },
        {
            question: "When should I start having screening mammography?",
            answer: "Recommendations vary, but generally, women should have the option to start screening at age 40. Women aged 45-54 should be screened annually. Women 55 and older can switch to every 2 years or continue yearly screening depending on their preference and risk."
        },
        {
            question: "What happens during a mammogram?",
            answer: "You will stand in front of a specialized X-ray machine. Your breast will be placed on a plate and compressed with another plastic plate to flatten it. This spreads the tissue apart for a clear image. You may feel pressure for a few seconds."
        },
        {
            question: "How accurate is screening mammography?",
            answer: "While highly effective, mammograms are not perfect. They can miss some cancers (false negatives) or indicate cancer when there isn't one (false positives). However, they remain the best primary tool for early breast cancer detection."
        }
    ];

    return (
        <section className="bg-[#F0F8FF] py-16 px-4 md:px-8 lg:px-16 mt-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-[40px] font-bold text-[#0961A1] text-center mb-12 font-sans">
                    Frequently Asked Questions
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-300 pb-4 h-fit">
                            <button
                                className="w-full flex justify-between items-start text-left py-2 focus:outline-none group"
                                onClick={() => toggleAccordion(index)}
                            >
                                <span className="text-lg md:text-xl font-[700] text-gray-800 font-sans pr-4">
                                    {faq.question}
                                </span>
                                <span className="mt-1 shrink-0 text-gray-500">
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

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-gray-600 leading-relaxed mt-2 pb-2">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Section6;