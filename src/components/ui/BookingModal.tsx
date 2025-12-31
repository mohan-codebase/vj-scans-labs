'use client';

import React from 'react';
import { useBooking } from '@/context/BookingContext';

const BookingModal = () => {
    const { isModalOpen, closeModal } = useBooking();
    const [formData, setFormData] = React.useState({
        name: '',
        phone: ''
    });
    const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    if (!isModalOpen) return null;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    source: 'Global Booking Modal'
                }),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', phone: '' });
                setTimeout(() => {
                    setStatus('idle');
                    closeModal();
                }, 2000);
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
            <div className="relative bg-white w-full max-w-md rounded-2xl shadow-2xl p-6 md:p-8 animate-in zoom-in-95 duration-200">
                <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="text-center mb-6">
                    <h3 className="text-[40px] text-4xl font-bold text-[#0B62A1] mb-2 font-sans ">Book <span className='text-[#f98d1b]'>Appointment</span> </h3>
                    <p className="text-gray-600 text-sm font-sans">Fill in your details and we call you back shortly.</p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="name" className="text-sm font-semibold text-gray-700 font-sans">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className={`w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0B62A1] focus:ring-2 focus:ring-[#0B62A1]/20 outline-none transition-all font-sans ${status === 'error' ? 'border-red-500' : ''}`}
                            required
                            disabled={status === 'loading' || status === 'success'}
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="phone" className="text-sm font-semibold text-gray-700 font-sans">Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Your Phone Number"
                            className={`w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0B62A1] focus:ring-2 focus:ring-[#0B62A1]/20 outline-none transition-all font-sans ${status === 'error' ? 'border-red-500' : ''}`}
                            required
                            disabled={status === 'loading' || status === 'success'}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'loading' || status === 'success'}
                        className={`mt-2 w-full py-3.5 bg-linear-to-r from-[#0B62A1] to-[#42A5ED] text-white rounded-lg font-bold text-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-300 font-sans ${status === 'loading' ? 'opacity-70 cursor-wait' : ''}`}
                    >
                        {status === 'loading' ? 'Booking...' : status === 'success' ? 'Booked Successfully!' : 'Book Now'}
                    </button>

                    {status === 'error' && (
                        <p className="text-red-500 text-xs text-center mt-1">Something went wrong. Please try again.</p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default BookingModal;
