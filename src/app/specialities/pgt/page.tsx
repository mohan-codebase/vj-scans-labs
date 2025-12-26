import React from 'react'
import Section1 from '@/components/features/specialities/pgt/Section1'
import Section2 from '@/components/features/specialities/pgt/Section2'
import Section3 from '@/components/features/specialities/pgt/Section3'
import Section4 from '@/components/features/specialities/pgt/Section4'
import Section5 from '@/components/features/specialities/pgt/Section5'
import Section6 from '@/components/features/specialities/pgt/Section6'
import { Metadata } from 'next'
import { SITE_NAME } from '@/lib/seo'

export const metadata: Metadata = {
    title: "Preimplantation Genetic Testing (PGT) - VJ Scans & Labs",
    description: "Advanced PGT services to screen embryos for genetic abnormalities before implantation, ensuring a healthy pregnancy.",
    openGraph: {
        title: "Preimplantation Genetic Testing (PGT) - VJ Scans & Labs",
        description: "Advanced PGT services to screen embryos for genetic abnormalities before implantation, ensuring a healthy pregnancy.",
        url: `${SITE_NAME}/specialities/pgt`,
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
