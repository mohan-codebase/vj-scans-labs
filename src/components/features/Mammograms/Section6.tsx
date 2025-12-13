'use client';

import React, { useState } from 'react';

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
    question: "Why is mammography done?",
    answer: "Doctors recommend mammography to check heart function, detect valve problems, find heart defects, measure pumping strength, or investigate symptoms like chest pain or breathlessness."
  },
  {
    question: "How should I prepare for a mammogram?",
    answer: "No special preparation is needed for a routine ECHO. You can eat, drink, and take your regular medicines unless your doctor tells you otherwise."
  },
  {
    question: "What happens during a mammogram?",
    answer: "A mammogram is a type of X-ray that uses low-dose radiation to create detailed images of the breast. The images help doctors detect abnormalities, such as tumors or cysts, that might not be visible on a regular X-ray."
  },
  {
    question: "Is it painful to get a mammogram?",
    answer: "No, mammography is painless. The procedure is quick and comfortable, typically taking just a few minutes."
  },
  {
    question: "What does it mean to be at average risk of breast cancer?",
    answer: "Most women are considered to be at average risk of breast cancer. This typically means you do not have a strong family history of breast cancer, no known genetic mutations (like BRCA1 or BRCA2), and no prior radiation therapy to the chest."
  },
  {
    question: "When should I start having screening mammography?",
    answer: "Guidelines vary, but many organizations recommend starting annual or biennial screening mammograms for women at average risk between ages 40 and 50, and continuing until at least age 75. Discuss your personal risk factors and family history with your doctor to determine the best screening schedule for you."
  },
  {
    question: "How accurate is screening mammography?",
    answer: "Screening mammography is very accurate, with a false positive rate of about 5% and a false negative rate of about 15%. This means that about 5% of women who do not have breast cancer will be told they do, and about 15% of women who do have breast cancer will not be detected."
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