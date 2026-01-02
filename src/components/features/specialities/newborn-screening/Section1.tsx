import React from 'react'
import HeroSection from '@/components/features/shared/HeroSection'

const slides = [
    {
        id: 1,
        title: <span className='font-sans text-[#0961A1] md:text-white'>Newborn <span className='text-[#F98D1B]'>Screening</span></span>,
        subtitle: (
            <span className="font-sans text-[#1E1E1E] md:text-white">
                Our Newborn Screening division is dedicated to the early detection of congenital disorders that can affect a childs long-term health. We utilize advanced screening technologies to identify metabolic, genetic, and hormonal conditions within days of birth, empowering parents and clinicians with the vital information needed for timely intervention and optimal development.
            </span>
        ),
        image: '/images/specialities/newborn-screening/section1/section-1.avif', // Placeholder
        mobileImage: '/images/Section1/mobileBanner-img-1-by-vj.avif', // Placeholder
        bgColor: 'bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]'
    }
]

const Section1 = () => {
    return (
        <>
            <HeroSection slides={slides} formSource='Newborn Screening Page' />
        </>
    )
}

export default Section1
