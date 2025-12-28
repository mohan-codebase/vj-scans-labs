"use client";
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQAccordionProps {
    items: FAQItem[];
}

const FAQAccordion = ({ items }: FAQAccordionProps) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <div className="space-y-4">
            {items.map((item, index) => (
                <div key={index} className="border-b border-gray-300 pb-4">
                    <button
                        className="w-full flex justify-between items-center text-left py-2 focus:outline-none group"
                        onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                    >
                        <span className="text-lg md:text-xl font-[600] text-gray-800">
                            {item.question}
                        </span>
                        <span className="ml-4 shrink-0 text-gray-500">
                            {activeIndex === index ? (
                                <ChevronDown className="w-6 h-6 rotate-180 transition-transform duration-300" />
                            ) : (
                                <ChevronDown className="w-6 h-6 transition-transform duration-300" />
                            )}
                        </span>
                    </button>

                    <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
                            }`}
                    >
                        <p className="text-gray-600 leading-relaxed">
                            {item.answer}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FAQAccordion;
