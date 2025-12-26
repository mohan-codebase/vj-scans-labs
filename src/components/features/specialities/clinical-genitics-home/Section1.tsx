import React from 'react'
import HeroSection from '../../shared/HeroSection'

const slides = [

    {
        id: 1,
        title: <span className='font-sans'> Innovating Diagnostic Care for Improved Health Outcomes </span>,
        subtitle: <span className='font-sans'>Explore advanced genetic testing solutions that enable accurate diagnoses and personalized treatment plans.</span>,
        image: '/images/specialities/male-infertility/section1/banner.avif',
        mobileImage: '/images/Section1/mobileBanner-img-1-by-vj.avif',
        bgColor: 'bg-gradient-to-br from-[#E2F2FF] via-[#EBF7FF] to-[#FFF0D9]'

    }

]

const Section1 = () => {
    return (
        <>
            <HeroSection slides={slides} formSource='Clinical Genitics Home' />
        </>
    )
}

export default Section1