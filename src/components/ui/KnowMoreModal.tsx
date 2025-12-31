'use client';

import React from 'react';
import { useBooking } from '@/context/BookingContext';
import { motion, AnimatePresence } from 'motion/react';
import { IconX } from '@tabler/icons-react';

const KnowMoreModal = () => {
    const { isKnowMoreModalOpen, knowMoreContent, closeKnowMoreModal } = useBooking();

    if (!knowMoreContent) return null;

    return (
        <AnimatePresence>
            {isKnowMoreModalOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="relative bg-white w-full max-w-3xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col"
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeKnowMoreModal}
                            className="absolute top-4 right-4 z-10 text-gray-400 hover:text-gray-600 transition-colors bg-white rounded-full p-2 shadow-md hover:shadow-lg"
                            aria-label="Close modal"
                        >
                            <IconX size={24} />
                        </button>

                        {/* Content */}
                        <div className="overflow-y-auto p-6 md:p-8">
                            {/* Title */}
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0B62A1] mb-4 md:mb-6 font-sans pr-12">
                                {knowMoreContent.title}
                            </h2>

                            {/* Description */}
                            <div className="text-gray-700 text-base md:text-lg leading-relaxed mb-6 font-sans">
                                {typeof knowMoreContent.description === 'string' ? (
                                    <p>{knowMoreContent.description}</p>
                                ) : (
                                    knowMoreContent.description
                                )}
                            </div>

                            {/* Additional Info */}
                            {knowMoreContent.additionalInfo && (
                                <div className="text-gray-600 text-sm md:text-base leading-relaxed font-sans">
                                    {typeof knowMoreContent.additionalInfo === 'string' ? (
                                        <p>{knowMoreContent.additionalInfo}</p>
                                    ) : (
                                        knowMoreContent.additionalInfo
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        <div className="border-t border-gray-200 p-4 md:p-6 bg-gray-50">
                            <button
                                onClick={closeKnowMoreModal}
                                className="w-full bg-[linear-gradient(84.92deg,#F98D1B_34.11%,#FFC180_105.58%)] text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 font-sans"
                            >
                                Close
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default KnowMoreModal;

