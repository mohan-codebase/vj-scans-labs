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
                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden bg-white">
                    <button
                        onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                        className="w-full flex items-center justify-between p-4 md:p-6 text-left hover:bg-gray-50 transition-colors"
                    >
                        <span className="font-bold text-[#0961A1] text-lg">{item.question}</span>
                        <ChevronDown
                            className={`w-5 h-5 text-[#0961A1] transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''
                                }`}
                        />
                    </button>
                    {activeIndex === index && (
                        <div className="overflow-hidden transition-all duration-300 ease-in-out">
                            <div className="p-4 md:p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100">
                                {item.answer}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FAQAccordion;
