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
    videoSrc?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ slides, formSource, videoSrc }) => {
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

    // Touch/swipe handlers
    const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);
    const [isSwiping, setIsSwiping] = useState(false);
    const [autoPlayPaused, setAutoPlayPaused] = useState(false);
    const [swipeOffset, setSwipeOffset] = useState(0);

    // Minimum swipe distance (in pixels)
    const minSwipeDistance = 50;

    useEffect(() => {
        if (autoPlayPaused || videoSrc) return;


        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000)
        return () => clearInterval(timer)
    }, [slides.length, autoPlayPaused, videoSrc])


    // Global mouse move and up handlers for desktop drag (when dragging outside container)
    useEffect(() => {
        if (!isSwiping || !touchStart) return;

        const handleMouseMove = (e: MouseEvent) => {
            if (!touchStart) return;

            const currentX = e.clientX;
            const currentY = e.clientY;
            const deltaX = currentX - touchStart.x;
            const deltaY = Math.abs(currentY - touchStart.y);

            setTouchEnd(currentX);

            // Only handle if dragging horizontally
            if (Math.abs(deltaX) > deltaY && Math.abs(deltaX) > 10) {
                e.preventDefault();
                const containerWidth = window.innerWidth;
                const maxOffset = containerWidth * 0.3;
                const offset = Math.max(-maxOffset, Math.min(maxOffset, deltaX));
                setSwipeOffset(offset);
            }
        };

        const handleMouseUp = () => {
            if (!touchStart) {
                setIsSwiping(false);
                setSwipeOffset(0);
                return;
            }

            if (touchEnd !== null) {
                const distance = touchStart.x - touchEnd;
                const isLeftSwipe = distance > minSwipeDistance;
                const isRightSwipe = distance < -minSwipeDistance;

                setSwipeOffset(0);

                if (isLeftSwipe) {
                    setCurrentSlide((prev) => (prev + 1) % slides.length);
                } else if (isRightSwipe) {
                    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
                }
            }

            setTouchStart(null);
            setTouchEnd(null);
            setIsSwiping(false);

            setTimeout(() => {
                setAutoPlayPaused(false);
            }, 3000);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isSwiping, touchStart, touchEnd, slides.length, minSwipeDistance])

    const onTouchStart = (e: React.TouchEvent) => {
        if (videoSrc) return; // Disable swipe if video is present
        setTouchEnd(null);

        setSwipeOffset(0);
        setTouchStart({
            x: e.targetTouches[0].clientX,
            y: e.targetTouches[0].clientY
        });
        setIsSwiping(true);
        setAutoPlayPaused(true);
    }

    const onTouchMove = (e: React.TouchEvent) => {
        if (videoSrc) return;
        if (!touchStart) return;


        const currentX = e.targetTouches[0].clientX;
        const currentY = e.targetTouches[0].clientY;
        const deltaX = currentX - touchStart.x;
        const deltaY = Math.abs(currentY - touchStart.y);

        setTouchEnd(currentX);

        // Only prevent default if swiping horizontally
        if (Math.abs(deltaX) > deltaY && Math.abs(deltaX) > 10) {
            e.preventDefault();
            // Calculate swipe offset (limit to prevent over-scrolling)
            const containerWidth = e.currentTarget.clientWidth;
            const maxOffset = containerWidth * 0.3; // Limit to 30% of container width
            const offset = Math.max(-maxOffset, Math.min(maxOffset, deltaX));
            setSwipeOffset(offset);
        }
    }

    const onTouchEnd = () => {
        if (!touchStart || touchEnd === null) {
            setIsSwiping(false);
            setSwipeOffset(0);
            return;
        }

        const distance = touchStart.x - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        // Reset offset first for smooth transition
        setSwipeOffset(0);

        if (isLeftSwipe) {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        } else if (isRightSwipe) {
            setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        }

        setTouchStart(null);
        setTouchEnd(null);
        setIsSwiping(false);

        // Resume auto-play after a delay
        setTimeout(() => {
            setAutoPlayPaused(false);
        }, 3000);
    }

    // Mouse drag handlers for desktop
    const onMouseDown = (e: React.MouseEvent) => {
        if (videoSrc) return;
        if (e.button !== 0) return; // Only handle left mouse button

        setTouchEnd(null);
        setSwipeOffset(0);
        setTouchStart({
            x: e.clientX,
            y: e.clientY
        });
        setIsSwiping(true);
        setAutoPlayPaused(true);
    }

    const onMouseMove = (e: React.MouseEvent) => {
        if (!touchStart || !isSwiping) return;

        const currentX = e.clientX;
        const currentY = e.clientY;
        const deltaX = currentX - touchStart.x;
        const deltaY = Math.abs(currentY - touchStart.y);

        setTouchEnd(currentX);

        // Only handle if dragging horizontally
        if (Math.abs(deltaX) > deltaY && Math.abs(deltaX) > 10) {
            e.preventDefault();
            // Calculate swipe offset (limit to prevent over-scrolling)
            const containerWidth = e.currentTarget.clientWidth;
            const maxOffset = containerWidth * 0.3; // Limit to 30% of container width
            const offset = Math.max(-maxOffset, Math.min(maxOffset, deltaX));
            setSwipeOffset(offset);
        }
    }

    const onMouseUp = () => {
        if (!touchStart || touchEnd === null) {
            setIsSwiping(false);
            setSwipeOffset(0);
            return;
        }

        const distance = touchStart.x - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        // Reset offset first for smooth transition
        setSwipeOffset(0);

        if (isLeftSwipe) {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        } else if (isRightSwipe) {
            setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
        }

        setTouchStart(null);
        setTouchEnd(null);
        setIsSwiping(false);

        // Resume auto-play after a delay
        setTimeout(() => {
            setAutoPlayPaused(false);
        }, 3000);
    }

    const onMouseLeave = () => {
        // Reset if mouse leaves while dragging
        if (isSwiping) {
            setSwipeOffset(0);
            setTouchStart(null);
            setTouchEnd(null);
            setIsSwiping(false);
            setTimeout(() => {
                setAutoPlayPaused(false);
            }, 1000);
        }
    }

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
            <div

                className="flex-1 relative min-h-[600px] lg:min-h-[500px] select-none cursor-grab active:cursor-grabbing"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
                onMouseDown={onMouseDown}
                onMouseMove={onMouseMove}
                onMouseUp={onMouseUp}
                onMouseLeave={onMouseLeave}
            >
                {/* Clipping Wrapper */}
                <div
                    className="absolute inset-0 overflow-hidden rounded-[30px] lg:rounded-[32px] isolate"
                    style={{
                        WebkitMaskImage: '-webkit-radial-gradient(white, black)',
                        transform: 'translateZ(0)'
                    }}
                >
                    {videoSrc ? (
                        <div className="w-full h-full relative">
                            <video
                                src={videoSrc}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            {/* Overlay for better text readability */}
                            <div className="absolute inset-0 bg-black/40" />

                            {/* Content Overlay */}
                            <div className="relative z-10 h-full px-6 py-8 lg:p-11 flex flex-col justify-center items-center lg:items-start text-center lg:text-left pointer-events-none">
                                <div className="max-w-lg pointer-events-auto mx-auto lg:mx-0">
                                    <div className="text-[24px] lg:text-[38px] font-[650] text-white leading-tight mb-2 md:mb-6 font-sans">
                                        {slides[0]?.title}
                                    </div>
                                    <p className="text-white text-[13px] md:text-[14px] mb-4 md:mb-5 font-medium leading-relaxed">
                                        {slides[0]?.subtitle}
                                    </p>
                                    <div>
                                        <KnowMoreButton
                                            iconVariant="up-right"
                                            className="mt-6 w-fit mx-auto lg:mx-0"
                                            content={{
                                                title: typeof slides[0]?.title === 'string'
                                                    ? slides[0]?.title
                                                    : 'Learn More',
                                                description: typeof slides[0]?.subtitle === 'string'
                                                    ? slides[0]?.subtitle
                                                    : slides[0]?.subtitle,
                                                additionalInfo: 'At VJ Scans & Labs, we are committed to providing you with reliable results, individualized care, and prompt insights for better health. Our state-of-the-art diagnostic facilities and experienced team ensure accurate and timely reports to help you make informed healthcare decisions.'
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div
                            className="flex h-full"
                            style={{
                                transform: `translateX(calc(-${currentSlide} * 100% / ${slides.length} + ${swipeOffset}px))`,
                                transition: isSwiping ? 'none' : 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                width: `${slides.length * 100}%`
                            }}
                        >
                            {slides.map((slide, index) => (
                                <div
                                    key={slide.id}
                                    className="h-full flex-shrink-0 relative"
                                    style={{ width: `calc(100% / ${slides.length})` }}
                                >
                                    {/* Background Image */}
                                    <div className="absolute inset-0 z-0">
                                        {/* Desktop Image */}
                                        <div className="hidden lg:block absolute inset-0">
                                            <Image
                                                src={slide.image}
                                                alt={`Hero Background Desktop ${index + 1}`}
                                                fill
                                                className="object-cover"
                                                priority={index === currentSlide}
                                                draggable={false}
                                            />
                                        </div>
                                        {/* Mobile Image */}
                                        <div className="block lg:hidden absolute inset-0">
                                            <Image
                                                src={slide.mobileImage}
                                                alt={`Hero Background Mobile ${index + 1}`}
                                                fill
                                                className="object-cover"
                                                priority={index === currentSlide}
                                                draggable={false}
                                            />
                                        </div>
                                        {/* Optional Overlay */}
                                        <div className={`absolute inset-0 ${slide.bgColor} opacity-90 mix-blend-multiply`} />
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10 h-full px-6 py-8 lg:p-11 flex flex-col justify-center pointer-events-none">
                                        <div className="max-w-lg pointer-events-auto">
                                            <div className="text-[24px] lg:text-[38px] font-[650] text-[#0961A1] leading-tight mb-2 md:mb-6 font-sans">
                                                {slide.title}
                                            </div>
                                            <p className="text-gray-700 text-[13px] md:text-[14px] mb-4 md:mb-5 font-medium leading-relaxed">
                                                {slide.subtitle}
                                            </p>
                                            <div>
                                                <KnowMoreButton
                                                    iconVariant="up-right"
                                                    className="mb-70 lg:mb-26 mt-2"
                                                    content={{
                                                        title: typeof slide.title === 'string'
                                                            ? slide.title
                                                            : 'Learn More',
                                                        description: typeof slide.subtitle === 'string'
                                                            ? slide.subtitle
                                                            : slide.subtitle,
                                                        additionalInfo: 'At VJ Scans & Labs, we are committed to providing you with reliable results, individualized care, and prompt insights for better health. Our state-of-the-art diagnostic facilities and experienced team ensure accurate and timely reports to help you make informed healthcare decisions.'
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                </div>

                {/* Slide Indicators - Hide if video is present */}
                {!videoSrc && (
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
                )}
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
