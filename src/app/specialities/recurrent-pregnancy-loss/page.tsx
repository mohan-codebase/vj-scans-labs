import React from 'react'
import Section1 from '@/components/features/specialities/recurrent-pregnancy-loss/Section1'
import Section2 from '@/components/features/specialities/recurrent-pregnancy-loss/Section2'
import Section3 from '@/components/features/specialities/recurrent-pregnancy-loss/Section3'
import Section4 from '@/components/features/specialities/recurrent-pregnancy-loss/Section4'
import Section5 from '@/components/features/specialities/recurrent-pregnancy-loss/Section5'
import Section6 from '@/components/features/specialities/recurrent-pregnancy-loss/Section6'
import { Metadata } from 'next'
import { SITE_NAME } from '@/lib/seo'

export const metadata: Metadata = {
    title: "Recurrent Pregnancy Loss - VJ Scans & Labs",
    description: "Comprehensive evaluation and support for recurrent pregnancy loss to help you achieve a successful pregnancy.",
    openGraph: {
        title: "Recurrent Pregnancy Loss - VJ Scans & Labs",
        description: "Comprehensive evaluation and support for recurrent pregnancy loss to help you achieve a successful pregnancy.",
        url: `${SITE_NAME}/specialities/recurrent-pregnancy-loss`,
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
