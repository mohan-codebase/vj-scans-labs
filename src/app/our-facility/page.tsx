import HeroSection from '@/components/features/our-facility/HeroSection'
import IntroSection from '@/components/features/our-facility/IntroSection'
import FacilityFeatures from '@/components/features/our-facility/FacilityFeatures'
// import GallerySection from '@/components/features/our-facility/GallerySection'
import FacilityCarousels from '@/components/features/our-facility/FacilityCarousels'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Our Facility - VJ Scans & Labs",
  description: "Explore our world-class medical facility equipped with advanced technology and focused on patient comfort."
}

const page = () => {
  return (
    <div>
      <HeroSection />
      <IntroSection />
      <FacilityFeatures />
      <FacilityCarousels />
    </div>
  )
}

export default page