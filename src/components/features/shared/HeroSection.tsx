"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { IconChevronDown } from '@tabler/icons-react'
import KnowMoreButton from '@/components/ui/KnowMoreButton'
import { useBooking, KnowMoreContent } from '@/context/BookingContext'
// import { BiBorderRadius } from 'react-icons/bi'

interface Slide {
    id: number;
    title: React.ReactNode;
    subtitle: React.ReactNode;
    image: string;
    mobileImage: string;
    bgColor: string;
}

interface HeroSectionProps {
    slides: Slide[];
    formSource: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ slides, formSource }) => {
    const { openSuccessModal } = useBooking();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        package: ''
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000)
        return () => clearInterval(timer)
    }, [slides.length])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
                    source: formSource
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', package: '' });
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
        <section className="w-full max-w-[1400px] mx-auto px-3 md:px-0 py-4 lg:py-8 flex flex-col lg:flex-row gap-6">
            {/* Left Side Banner Slider */}
            <div className="flex-1 relative overflow-hidden rounded-[24px] lg:rounded-[32px] min-h-[600px] lg:min-h-[500px]">
                <div className="absolute inset-0 w-full h-full transition-opacity duration-500">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        {/* Desktop Image */}
                        <div className="hidden lg:block absolute inset-0">
                            <Image
                                src={slides[currentSlide].image}
                                alt="Hero Background Desktop"
                                fill
                                className="object-cover"
                                priority
                                draggable={false}
                            />
                        </div>
                        {/* Mobile Image */}
                        <div className="block lg:hidden absolute inset-0">
                            <Image
                                src={slides[currentSlide].mobileImage}
                                alt="Hero Background Mobile"
                                fill
                                className="object-cover"
                                priority
                                draggable={false}
                            />
                        </div>
                        {/* Optional Overlay */}
                        <div className={`absolute inset-0 ${slides[currentSlide].bgColor} opacity-90 mix-blend-multiply`} />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 h-full px-6 py-8 lg:p-11 flex flex-col justify-center pointer-events-none">
                        <div className="max-w-lg pointer-events-auto">
                            <div className="text-[24px] lg:text-[38px] font-[650] text-[#0961A1] leading-tight mb-2 md:mb-6">
                                {slides[currentSlide].title}
                            </div>
                            <p className="text-gray-700 text-[13px] md:text-[14px] mb-4 md:mb-5 font-medium leading-relaxed">
                                {slides[currentSlide].subtitle}
                            </p>
                            <div>
                                <KnowMoreButton
                                    iconVariant="up-right"
                                    className="mb-70 lg:mb-26 mt-2"
                                    content={{
                                        title: typeof slides[currentSlide].title === 'string' 
                                            ? slides[currentSlide].title 
                                            : 'Learn More',
                                        description: typeof slides[currentSlide].subtitle === 'string'
                                            ? slides[currentSlide].subtitle
                                            : slides[currentSlide].subtitle,
                                        additionalInfo: 'At VJ Scans & Labs, we are committed to providing you with reliable results, individualized care, and prompt insights for better health. Our state-of-the-art diagnostic facilities and experienced team ensure accurate and timely reports to help you make informed healthcare decisions.'
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Slide Indicators */}
                <div className="absolute bottom-4 left-6 lg:left-12 flex gap-2 z-20">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${currentSlide === index ? "w-8 bg-[#F98D1B]" : "w-2 bg-gray-400"
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* Right Side Appointment Form */}
            <div className="w-full lg:w-[400px] bg-[linear-gradient(139.05deg,#FFF7EF_0%,#FFEAD4_100%)] rounded-[24px] lg:rounded-[32px] border border-[#E3E3E3] p-6 lg:p-8 flex flex-col justify-center">
                <h2 className="text-[22px] md:text-[27px] font-bold text-[#0961A1] mb-6 md:mb-8 text-center">Book Your Appointment</h2>
                <form className="space-y-3 lg:space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="hero-name" className="sr-only">Your Name</label>
                        <input
                            id="hero-name"
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name*"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#F98D1B] bg-white text-gray-700 text-sm md:text-base"
                            required
                            autoComplete="name"
                            disabled={status === 'loading'}
                        />
                    </div>
                    <div>
                        <label htmlFor="hero-email" className="sr-only">Email ID</label>
                        <input
                            id="hero-email"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email ID*"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#F98D1B] bg-white text-gray-700 text-sm md:text-base"
                            disabled={status === 'loading'}
                            autoComplete="email"
                        />
                    </div>
                    <div>
                        <label htmlFor="hero-phone" className="sr-only">Phone Number</label>
                        <input
                            id="hero-phone"
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone Number*"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#F98D1B] bg-white text-gray-700 text-sm md:text-base"
                            required
                            autoComplete="tel"
                            disabled={status === 'loading'}
                        />
                    </div>
                    <div className="relative">
                        <label htmlFor="hero-package" className="sr-only">Select Package</label>
                        <select
                            id="hero-package"
                            name="package"
                            value={formData.package}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#F98D1B] bg-white text-gray-700 appearance-none cursor-pointer text-sm md:text-base"
                            disabled={status === 'loading'}
                        >
                            <option value="">Select Package</option>
                            <option value="Master Health Check Basic">Master Health Check Basic</option>
                            <option value="Vital Health Male">Vital Health Male</option>
                            <option value="Vital Health Female">Vital Health Female</option>
                            <option value="Advanced Health Check">Advanced Health Check</option>
                        </select>
                        <IconChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className={`w-full bg-[linear-gradient(84.92deg,#F98D1B_34.11%,#FFC180_105.58%)] text-white font-bold py-3 md:py-4 rounded-xl mt-2 lg:mt-4 hover:bg-[#e07c12] transition-colors shadow-lg shadow-orange-200 text-sm md:text-base ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                        {status === 'loading' ? 'Booking...' : 'Book Appointment'}
                    </button>
                    {status === 'success' && (
                        <p className="text-green-600 text-center mt-2 text-sm font-medium">Appointment booked successfully!</p>
                    )}
                    {status === 'error' && (
                        <p className="text-red-500 text-center mt-2 text-sm font-medium">{errorMessage}</p>
                    )}
                </form>
            </div>
        </section>
    )
}

export default HeroSection
