import React from 'react'
import HeroSection from '../../shared/HeroSection'

const slides = [
    {
        id: 1,
        title: <span className='font-sans text-[#0961A1]'>Understand Your <span className='text-[#F98D1B]'>Reproductive Genetic</span>  Health</span>,
        subtitle: <span className='font-sans text-[#1E1E1E]'>Don&apos;t let infertility affect your life! We offer advanced genetic testing to help you understand your reproductive health.</span>,
        image: '/images/specialities/male-infertility/section1/banner.avif',
        mobileImage: '/images/Section1/mobileBanner-img-1-by-vj.avif', // Using a placeholder/existing one for now
        bgColor: 'bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]'
    }
]

const Section1 = () => {
    return (
        <>
            <HeroSection slides={slides} formSource='Male Infertility' />
        </>
    )
}
  
export default Section1
