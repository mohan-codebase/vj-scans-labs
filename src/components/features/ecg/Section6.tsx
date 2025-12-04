'use client';

import React, { useState } from 'react';

const Section6 = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };
const faqs = [
  {
    question: "What is an echocardiogram (ECHO)?",
    answer: "An echocardiogram is a heart scan that uses sound waves to create images of your heart. It helps doctors see how the heart chambers and valves are working."
  },
  {
    question: "Is an ECHO test safe?",
    answer: "Yes, an ECHO is completely safe. It uses harmless sound waves — not radiation — and has no side effects."
  },
  {
    question: "Why is an ECHO done?",
    answer: "Doctors recommend an ECHO to check heart function, detect valve problems, find heart defects, measure pumping strength, or investigate symptoms like chest pain or breathlessness."
  },
  {
    question: "How long does an ECHO test take?",
    answer: "A standard echocardiogram usually takes 20–30 minutes. In some cases, it may take slightly longer depending on the patient’s condition."
  },
  {
    question: "Do I need to prepare for an ECHO?",
    answer: "No special preparation is needed for a routine ECHO. You can eat, drink, and take your regular medicines unless your doctor tells you otherwise."
  },
  {
    question: "Does the ECHO test hurt?",
    answer: "Not at all. The test is painless. A small probe is moved over your chest to capture heart images."
  },
  {
    question: "When will I get my ECHO report?",
    answer: "Most clinics provide the ECHO report on the same day. In some cases, the doctor may take extra time to review details before finalizing the report."
  },
  {
    question: "Is ECHO the same as ECG?",
    answer: "No. ECG measures the electrical activity of your heart, while ECHO shows actual moving images of your heart structure and function."
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