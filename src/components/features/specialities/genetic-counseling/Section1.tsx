import React from 'react'
import HeroSection from '@/components/features/shared/HeroSection'

const slides = [
    {
        id: 1,
        title: <span className='font-sans text-[#0961A1]'>Genetic <span className='text-[#F98D1B]'>Counseling</span></span>,
        subtitle: <span className='font-sans text-[#1E1E1E]'>Empowering you with knowledge to make informed decisions about your genetic health.</span>,
        image: '/images/specialities/male-infertility/section1/banner.avif',
        mobileImage: '/images/Section1/mobileBanner-img-1-by-vj.avif',
        bgColor: 'bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]'
    }
]

const Section1 = () => {
    return (
        <>
            <HeroSection slides={slides} formSource='Genetic Counseling Page' />
        </>
    )
}

export default Section1
