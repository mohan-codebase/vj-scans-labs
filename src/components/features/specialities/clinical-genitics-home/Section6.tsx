'use client';

import React, { useState } from 'react';

import { useBooking } from '@/context/BookingContext';

const Section6 = () => {
  const { openSuccessModal } = useBooking();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          source: 'Clinical Genetics - Get Counseling Form'
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '' });
        openSuccessModal();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Failed to send request');
    }
  };

  return (
    <section className="w-full font-sans py-6 md:py-10 lg:py-12 px-4 md:px-6">
      <div className="max-w-[1400px] mx-auto">
        {/* Mobile: Plain blue background */}
        <div className="relative rounded-[32px] md:rounded-[48px] lg:rounded-[60px] overflow-hidden min-h-[350px] p-4 md:p-0 md:min-h-[550px] lg:min-h-[600px] w-full flex items-center bg-[#0961A1]">
          {/* Background image - only visible on md and above */}
          <div
            className="absolute inset-0 hidden md:block"
            style={{
              backgroundImage: "url('/images/specialities/clinical-genitics-home/section6/form.png')",
              backgroundSize: 'contain',
              backgroundPosition: 'right center',
              backgroundRepeat: 'no-repeat'
            }}
          />

          {/* Blue overlay gradient - only visible on md and above */}
          <div
            className="absolute inset-0 hidden md:block"
            style={{
              background: 'linear-gradient(90deg, #0961A1 0%, #0961A1 30%, rgba(9, 97, 161, 0.7) 60%, rgba(9, 97, 161, 0.3) 80%, transparent 100%)'
            }}
          />

          {/* Form Content */}
          <div className="relative z-10 w-full px-4 sm:px-6 md:px-10 lg:px-16 py-6 md:py-10 lg:py-12">
            <div className="max-w-[550px]">
              <h2 className="font-sans font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-5 md:mb-6 lg:mb-8">
                Get Genetic Counseling
              </h2>

              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name*"
                    className="w-full px-5 py-3 md:py-3.5 rounded-xl bg-white text-gray-800 text-sm md:text-base font-sans placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all"
                    required
                    disabled={status === 'loading'}
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email ID*"
                    className="w-full px-5 py-3 md:py-3.5 rounded-xl bg-white text-gray-800 text-sm md:text-base font-sans placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all"
                    required
                    disabled={status === 'loading'}
                  />
                </div>

                {/* Phone Number */}
                <div className="max-w-full md:max-w-[calc(50%-0.5rem)]">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number*"
                    className="w-full px-5 py-3 md:py-3.5 rounded-xl bg-white text-gray-800 text-sm md:text-base font-sans placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all"
                    required
                    disabled={status === 'loading'}
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className={`px-8 py-3 md:py-3.5 bg-[linear-gradient(84.92deg,#F98D1B_34.11%,#FFC180_105.58%)] text-white font-semibold text-sm md:text-base rounded-xl transition-all hover:shadow-lg ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.02]'
                      }`}
                  >
                    {status === 'loading' ? 'Sending...' : 'Get a Call'}
                  </button>
                </div>

                {/* Status Messages */}
                {status === 'success' && (
                  <p className="text-green-300 text-sm font-medium">Request sent successfully! We&apos;ll contact you soon.</p>
                )}
                {status === 'error' && (
                  <p className="text-red-300 text-sm font-medium">{errorMessage}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6;
