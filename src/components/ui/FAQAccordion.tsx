'use client';

import React, { useState } from 'react';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface FAQItem {
    question: string;
    answer: string;
}

interface FAQAccordionProps {
    items: FAQItem[];
    className?: string;
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ items, className = '' }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

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
                        <span className="text-lg md:text-xl font-semibold text-gray-800">
                            {item.question}
                        </span>
                        <span className="ml-4 shrink-0 text-gray-500">
                            {openIndex === index ? (
                                <IconChevronUp size={24} />
                            ) : (
                                <IconChevronDown size={24} />
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
                                <p className="text-gray-600 leading-relaxed mt-2">
                                    {item.answer}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
};

export default FAQAccordion;
