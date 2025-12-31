import HeroSection from '@/components/features/our-facility/HeroSection'
import IntroSection from '@/components/features/our-facility/IntroSection'
import FacilityFeatures from '@/components/features/our-facility/FacilityFeatures'
// import GallerySection from '@/components/features/our-facility/GallerySection'
import FacilityCarousels from '@/components/features/our-facility/FacilityCarousels'
import React from 'react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { Metadata } from 'next'
import { seoDatas, SITE_NAME } from '@/lib/seo'

const seo = seoDatas.ourFacility;

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: seo.url,
    siteName: SITE_NAME,
    images: [
      {
        url: seo.image,
        width: 1200,
        height: 630,
        alt: seo.title
      },
    ],
    type: "website"
  }
}

const page = () => {
  return (
    <div className="overflow-hidden">
      <ScrollReveal direction="down"><HeroSection /></ScrollReveal>
      <ScrollReveal direction="left"><IntroSection /></ScrollReveal>
      <ScrollReveal direction="right"><FacilityFeatures /></ScrollReveal>
      <ScrollReveal direction="up"><FacilityCarousels /></ScrollReveal>
    </div>
  )
}

export default page