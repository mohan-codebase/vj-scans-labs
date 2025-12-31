import React from 'react'
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import Section1 from '@/components/features/specialities/genetic-counseling/Section1'
import Section2 from '@/components/features/specialities/genetic-counseling/Section2'
import Section3 from '@/components/features/specialities/genetic-counseling/Section3'
import Section4 from '@/components/features/specialities/genetic-counseling/Section4'
import Section5 from '@/components/features/specialities/genetic-counseling/Section5'
import Section6 from '@/components/features/specialities/genetic-counseling/Section6'
import Section7 from '@/components/features/specialities/genetic-counseling/Section7'
import Section8 from '@/components/features/specialities/genetic-counseling/Section8'
import { Metadata } from 'next'
import { seoDatas, SITE_NAME } from '@/lib/seo'

const seo = seoDatas.specialitiesGeneticCounseling;

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
        <main className="overflow-hidden">
            <ScrollReveal direction="down"><Section1 /></ScrollReveal>
            <ScrollReveal direction="left" delay={0.2}><Section2 /></ScrollReveal>
            <ScrollReveal direction="right"><Section3 /></ScrollReveal>
            <ScrollReveal><Section4 /></ScrollReveal>
            <ScrollReveal direction="left"><Section5 /></ScrollReveal>
            <ScrollReveal direction="right"><Section7 /></ScrollReveal>
            <ScrollReveal><Section8 /></ScrollReveal>
            <ScrollReveal width="100%"><Section6 /></ScrollReveal>
        </main>
    )
}

export default page
