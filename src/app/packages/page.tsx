import Section1 from '@/components/features/packages/Section1'
import Section10 from '@/components/features/packages/Section10'
import Section2 from '@/components/features/packages/Section2'
import Section3 from '@/components/features/packages/Section3'
import Section4 from '@/components/features/packages/Section4'
import Section5 from '@/components/features/packages/Section5'
import { seoDatas, SITE_NAME } from '@/lib/seo'
import { Metadata } from 'next'
import React from 'react'

const seo = seoDatas.packages

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
                alt: "VJ Scans Health Checkup Packages"
            },
        ],
        type: "website"
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
            <Section10 />
        </>
    )
}

export default page