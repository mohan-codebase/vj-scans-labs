import React from 'react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import Section1 from '@/components/features/specialities/pgt/Section1'
import Section2 from '@/components/features/specialities/pgt/Section2'
import Section3 from '@/components/features/specialities/pgt/Section3'
import Section4 from '@/components/features/specialities/pgt/Section4'
import Section5 from '@/components/features/specialities/pgt/Section5'
import Section6 from '@/components/features/specialities/pgt/Section6'
import { Metadata } from 'next'
import { seoDatas, SITE_NAME } from '@/lib/seo'

const seo = seoDatas.specialitiesPgt;

export const metadata: Metadata = {
    title: seo.title,
    description: seo.description,
    openGraph: {
        title: seo.title,
        description: seo.description,
        url: seo.url,
        siteName: SITE_NAME,
        type: "website"
    }
}

const page = () => {
    return (
        <main className="overflow-hidden">
            <ScrollReveal direction="down"><Section1 /></ScrollReveal>
            <ScrollReveal direction="right"><Section2 /></ScrollReveal>
            <ScrollReveal direction="left"><Section3 /></ScrollReveal>
            <ScrollReveal><Section4 /></ScrollReveal>
            <ScrollReveal direction="right"><Section5 /></ScrollReveal>
            <ScrollReveal direction="up"><Section6 /></ScrollReveal>
        </main>
    )
}

export default page
