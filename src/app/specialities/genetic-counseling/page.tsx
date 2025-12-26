import React from 'react'
import Section1 from '@/components/features/specialities/genetic-counseling/Section1'
import Section2 from '@/components/features/specialities/genetic-counseling/Section2'
import Section3 from '@/components/features/specialities/genetic-counseling/Section3'
import Section4 from '@/components/features/specialities/genetic-counseling/Section4'
import Section5 from '@/components/features/specialities/genetic-counseling/Section5'
import Section6 from '@/components/features/specialities/genetic-counseling/Section6'
import { Metadata } from 'next'
import { SITE_NAME } from '@/lib/seo'

export const metadata: Metadata = {
    title: "Genetic Counseling - VJ Scans & Labs",
    description: "Expert genetic counseling services to help you understand genetic risks and make informed health decisions.",
    openGraph: {
        title: "Genetic Counseling - VJ Scans & Labs",
        description: "Expert genetic counseling services to help you understand genetic risks and make informed health decisions.",
        url: `${SITE_NAME}/specialities/genetic-counseling`,
        siteName: SITE_NAME,
        type: "website"
    }
}

const page = () => {
    return (
        <main>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
        </main>
    )
}

export default page
