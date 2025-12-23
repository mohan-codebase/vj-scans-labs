'use client';

import React, { useState } from 'react';

interface AppointmentSectionProps {
    className?: string;
}

const AppointmentSection: React.FC<AppointmentSectionProps> = ({ className = '' }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        package: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
                    source: 'Get Your Appointment Section'
                }),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', package: '' });
                setTimeout(() => setStatus('idle'), 3000);
            } else {
                setStatus('error');
            }
        } catch (err) {
            setStatus('error');
        }
    };

    return (
        <div className={`w-full max-w-[1400px] mx-auto px-0 sm:px-0 lg:px-0 py-12 lg:py-0 ${className}`}>
            <div
                className="relative w-full md:rounded-[50px] overflow-hidden min-h-[600px] flex items-center"
                style={{
                    backgroundImage: "url('/images/section10/section10.avif')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                {/* Overlay to ensure text readability and match the blue theme */}
                <div className="absolute inset-0 md:rounded-[50px] bg-linear-to-r from-[#005F99] via-[#005F99]/50 to-transparent opacity-90 lg:opacity-100"></div>

                <div className="relative z-10 w-full lg:w-1/2 px-6 py-12 lg:pl-20">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-2">
                        Get Your
                    </h2>
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-14">
                        Appointment
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder={status === 'success' ? "Sent!" : "Your Name*"}
                                className={`w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 ${status === 'error' ? 'ring-2 ring-red-500' : ''}`}
                                required
                                disabled={status === 'loading' || status === 'success'}
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email ID"
                                className={`w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 ${status === 'error' ? 'ring-2 ring-red-500' : ''}`}
                                disabled={status === 'loading' || status === 'success'}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder={status === 'success' ? "We'll call you!" : "Phone Number*"}
                                className={`w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 ${status === 'error' ? 'ring-2 ring-red-500' : ''}`}
                                required
                                disabled={status === 'loading' || status === 'success'}
                            />
                            <div className="relative">
                                <select
                                    name="package"
                                    value={formData.package}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300 appearance-none cursor-pointer"
                                    disabled={status === 'loading' || status === 'success'}
                                >
                                    <option value="" disabled>Select Package</option>
                                    <option value="basic">Basic Checkup</option>
                                    <option value="standard">Standard Checkup</option>
                                    <option value="premium">Premium Checkup</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'loading' || status === 'success'}
                            className={`mt-6 px-8 py-3 bg-[linear-gradient(84.92deg,#F98D1B_34.11%,#FFC180_105.58%)] hover:bg-[#e58e2d] text-white font-medium rounded-lg transition-colors duration-200 ${status === 'loading' ? 'opacity-70' : ''}`}
                        >
                            {status === 'loading' ? 'Sending...' : status === 'success' ? 'Sent Successfully!' : 'Book Now'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AppointmentSection;
