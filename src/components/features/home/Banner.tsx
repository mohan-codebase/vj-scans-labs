"use client";
import React from 'react'
import { useBooking } from '@/context/BookingContext';

const Banner = () => {
    const { openModal } = useBooking();

    return (
        <div className='relative w-full h-screen overflow-hidden'>
            <div className='absolute inset-0'>
                <video
                    src="/video/not-optimized.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className='w-full h-full object-cover'
                ></video>
                <div className="absolute inset-0 bg-black/40" /> {/* Darkened for better text readability */}
            </div>

            <div className="relative z-10 w-full h-full flex flex-col justify-center max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl text-white space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight font-sans">
                        Your <span className="text-[#F98D1B]">Health Journey,</span> <br />
                        Empowered by Advanced Diagnostics
                    </h1>
                    <p className="text-lg md:text-xl font-medium text-gray-100 max-w-lg font-sans">
                        Reliable results, individualized care, and prompt insights for better health.
                    </p>
                    <div className="pt-4">
                        <button
                            onClick={openModal}
                            className="bg-[linear-gradient(84.92deg,#F98D1B_34.11%,#FFC180_105.58%)] text-white font-bold py-4 px-8 rounded-xl hover:bg-[#e07c12] transition-colors shadow-lg shadow-orange-900/20 text-base md:text-lg cursor-pointer"
                        >
                            Book Appointment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner