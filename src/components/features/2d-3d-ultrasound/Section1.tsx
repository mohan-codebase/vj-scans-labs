"use client"
import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion' // Corrected import for motion
import { IconArrowUpRight, IconChevronDown } from '@tabler/icons-react'

const slides = [
    {
        id: 1,

        title: <span className='font-sans font-[650]'>Expert <span className="text-[#F98D1B]"> 2D & 3D Ultrasound </span> <br /> Services for Safe and Trusted <br /> Diagnostic Results</span>,
        subtitle: <span className="text-[#1E1E1E] font-secondary font-medium">Get detailed imaging with our advanced ultrasonography <br /> technology. From pregnancy scans to organ evaluations,<br /> we provide quick, safe, and reliable results performed by <br /> certified sonographers and radiologists.</span>,
        image: "/images/2d-3d-ultrasound/section1/section1.avif",
        mobileImage: "/images/Section1/mobileBanner-img-1-by-vj.avif",
        bgColor: "bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]"
    }
]

const variants = {
    enter: (direction: number) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction: number) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        };
    }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
};

const Section1 = () => {
    const [[page, direction], setPage] = useState([0, 0]);

    // We only have 3 slides, so we wrap the page index
    const currentSlide = Math.abs(page % slides.length);

    const paginate = useCallback((newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    }, [page]);

    useEffect(() => {
        const timer = setInterval(() => {
            paginate(1);
        }, 5000)
        return () => clearInterval(timer)
    }, [page, paginate]) // Added page dependency to reset timer on manual change

    return (
        <section className="w-full max-w-7xl mx-auto px-3 md:px-0 py-4 lg:py-8 flex flex-col lg:flex-row gap-6">
            {/* Left Side Banner Slider */}
            <div className="flex-1 relative overflow-hidden rounded-[24px] lg:rounded-[32px] min-h-[400px] lg:min-h-[500px]">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={currentSlide}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: 0.2 }
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={1}
                        onDragEnd={(e, { offset, velocity }) => {
                            const swipe = swipePower(offset.x, velocity.x);

                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1);
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1);
                            }
                        }}
                        className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
                    >
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
                            {/* Optional Overlay to ensure text readability if needed, using the gradient as a subtle wash */}
                            <div className={`absolute inset-0 ${slides[currentSlide].bgColor} opacity-90 mix-blend-multiply`} />
                        </div>

                        {/* Content */}
                        <div className="relative z-10 h-full px-6 py-8 lg:p-11 flex flex-col justify-center pointer-events-none">
                            <div className="max-w-lg pointer-events-auto">
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-[24px] lg:text-[38px] font-[650] text-[#0961A1] leading-tight mb-2 md:mb-6"
                                >
                                    {slides[currentSlide].title}

                                </motion.div>
                                <motion.p
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-gray-700 text-[13px] md:text-[14px] mb-4 md:mb-5 font-medium leading-relaxed"
                                >
                                    {slides[currentSlide].subtitle}
                                </motion.p>
                                <motion.button
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                    className="bg-[linear-gradient(84.92deg,#F98D1B_34.11%,#FFC180_105.58%)] mb-4 lg:mb-26 mt-2 text-sm md:text-base text-white px-2 py-2 md:px-6 md:py-3 rounded-full flex items-center gap-2 hover:bg-[#e07c12] transition-colors shadow-md cursor-pointer w-fit"
                                >
                                    Know More
                                    <div className="bg-white rounded-full p-1">
                                        <IconArrowUpRight size={16} className="text-[#F98D1B]" />
                                    </div>
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Slide Indicators */}
                <div className="absolute bottom-4 left-6 lg:left-12 flex gap-2 z-20">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                const direction = index > currentSlide ? 1 : -1;
                                setPage([page + (index - currentSlide), direction]);
                            }}
                            className={`h-2 rounded-full transition-all duration-300 ${currentSlide === index ? "w-8 bg-[#F98D1B]" : "w-2 bg-gray-400"
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* Right Side Appointment Form */}
            <div className="w-full lg:w-[400px] bg-[linear-gradient(139.05deg,#FFF7EF_0%,#FFEAD4_100%)] rounded-[24px] lg:rounded-[32px] border border-[#E3E3E3] p-6 lg:p-8 flex flex-col justify-center">
                <h2 className="text-[22px] md:text-[27px] font-bold text-[#0961A1] mb-6 md:mb-8 text-center">Book Your Appointment</h2>
                <form className="space-y-3 lg:space-y-4">
                    <div>
                        <input
                            type="text"
                            placeholder="Your Name*"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#F98D1B] bg-white text-gray-700 text-sm md:text-base"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            placeholder="Email ID*"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#F98D1B] bg-white text-gray-700 text-sm md:text-base"
                        />
                    </div>
                    <div>
                        <input
                            type="tel"
                            placeholder="Phone Number*"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#F98D1B] bg-white text-gray-700 text-sm md:text-base"
                        />
                    </div>
                    <div className="relative">
                        <select
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#F98D1B] bg-white text-gray-700 appearance-none cursor-pointer text-sm md:text-base"
                            defaultValue=""
                        >
                            <option value="" disabled>Select Package</option>
                            <option value="basic">Basic Health Checkup</option>
                            <option value="comprehensive">Comprehensive Body Checkup</option>
                            <option value="advanced">Advanced Diagnostics</option>
                        </select>
                        <IconChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[linear-gradient(84.92deg,#F98D1B_34.11%,#FFC180_105.58%)] text-white font-bold py-3 md:py-4 rounded-xl mt-2 lg:mt-4 hover:bg-[#e07c12] transition-colors shadow-lg shadow-orange-200 text-sm md:text-base"
                    >
                        Book Appointment
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Section1