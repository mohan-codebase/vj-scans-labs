import React from 'react'
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
    <>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section8 />
    </>
  )
}

export default page