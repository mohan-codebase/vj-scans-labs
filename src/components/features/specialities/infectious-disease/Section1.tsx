import React from 'react'
import HeroSection from '@/components/features/shared/HeroSection'

const slides = [
    {
        id: 1,
        title: <span className='font-sans text-[#0961A1] md:text-white'>Infectious <span className='text-[#F98D1B] md:text-white'>Disease</span></span>,
        subtitle: (
            <span className="font-sans text-[#1E1E1E] md:text-white">
                Our Infectious Disease division provides comprehensive diagnostic solutions for the detection and monitoring of communicable diseases using advanced laboratory platforms. We combine cutting-edge molecular and serological testing with stringent quality control to support clinicians in making accurate, timely treatment decisions for improved patient care.
            </span>
        ),
        image: '/images/specialities/infectious-disease/section1/section1.avif', // Placeholder
        mobileImage: '/images/Section1/mobileBanner-img-1-by-vj.avif', // Placeholder
        bgColor: 'bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]'
    }
]

const Section1 = () => {
    return (
        <>
            <HeroSection slides={slides} formSource='Infectious Disease Page' />
        </>
    )
}

export default Section1
