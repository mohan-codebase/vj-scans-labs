import React from 'react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import Section1 from '@/components/features/specialities/clinical-genitics-home/Section1'
import Section2 from '@/components/features/specialities/clinical-genitics-home/Section2'
import Section3 from '@/components/features/specialities/clinical-genitics-home/Section3'
import Section4 from '@/components/features/specialities/clinical-genitics-home/Section4'
import Section5 from '@/components/features/specialities/clinical-genitics-home/Section5'
import Section8 from '@/components/features/specialities/clinical-genitics-home/Section6'
import { seoDatas, SITE_NAME } from '@/lib/seo'
import { Metadata } from 'next'

const seo = seoDatas.specialitieClinicalGenitics

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
        width: 500,
        height: 300,
        alt: 'VJ Scans Health Checkup Packages'

      }

    ],
    type: 'website'

  }

}

const page = () => {
  return (
    <div className="overflow-hidden">
      <ScrollReveal direction="down"><Section1 /></ScrollReveal>
      <ScrollReveal direction="right"><Section2 /></ScrollReveal>
      <ScrollReveal direction="left"><Section3 /></ScrollReveal>
      <ScrollReveal><Section4 /></ScrollReveal>
      <ScrollReveal direction="right"><Section5 /></ScrollReveal>
      <ScrollReveal direction="up"><Section8 /></ScrollReveal>
    </div>
  )
}

export default page