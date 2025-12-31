"use client";
import React, { useState } from 'react';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQAccordionProps {
    items: FAQItem[];
    className?: string;
}

const FAQAccordion = ({ items, className = '' }: FAQAccordionProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={`space-y-4 ${className}`}>
            {items.map((item, index) => (
                <div key={index} className="border-b border-gray-300 pb-4">
                    <button
                        className="w-full flex justify-between items-center text-left py-2 focus:outline-none group"
                        onClick={() => toggleAccordion(index)}
                    >
                        <span className="text-lg md:text-xl font-[600] text-gray-800">
                            {item.question}
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
                        <p className="text-gray-600 leading-relaxed font-sans">
                            {item.answer}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FAQAccordion;
