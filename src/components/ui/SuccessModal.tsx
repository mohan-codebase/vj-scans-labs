'use client';

import React from 'react';
import { useBooking } from '@/context/BookingContext';
import { motion, AnimatePresence } from 'motion/react';
import { IconCheck } from '@tabler/icons-react';

const SuccessModal = () => {
    const { isSuccessModalOpen, closeSuccessModal } = useBooking();

    return (
        <AnimatePresence>
            {isSuccessModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="relative bg-white w-full max-w-sm rounded-2xl shadow-2xl p-8 flex flex-col items-center text-center"
                    >
                        <button
                            onClick={closeSuccessModal}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600">
                            <IconCheck size={40} stroke={3} />
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-2 font-sans">Request Sent!</h3>
                        <p className="text-gray-600 font-sans mb-6">
                            Thank you for your request. Our team will get back to you shortly.
                        </p>

                        <button
                            onClick={closeSuccessModal}
                            className="w-full py-3 bg-[#0B62A1] text-white rounded-lg font-bold shadow-lg hover:opacity-90 transition-all font-sans"
                        >
                            Close
                        </button>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default SuccessModal;
