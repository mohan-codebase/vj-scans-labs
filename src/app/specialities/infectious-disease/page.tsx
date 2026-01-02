import React from 'react'
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import Section1 from '@/components/features/specialities/infectious-disease/Section1'
import Section2 from "@/components/features/specialities/infectious-disease/Section2"
import Section3 from "@/components/features/specialities/infectious-disease/Section3"
import Section4 from "@/components/features/specialities/infectious-disease/Section4"
import Section5 from "@/components/features/specialities/infectious-disease/Section5"
import Section6 from "@/components/features/specialities/infectious-disease/Section6"
import Section8 from "@/components/features/specialities/infectious-disease/Section8"
import Section9 from "@/components/features/specialities/infectious-disease/Section9"
import { Metadata } from 'next'
import { seoDatas, SITE_NAME } from '@/lib/seo'

const seo = seoDatas.specialitiesInfectiousDisease;

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
            <ScrollReveal direction="right"><Section2 /></ScrollReveal>
            <ScrollReveal direction="left"><Section3 /></ScrollReveal>
            <ScrollReveal><Section4 /></ScrollReveal>
            <ScrollReveal direction="right"><Section5 /></ScrollReveal>
            <ScrollReveal direction="up"><Section6 /></ScrollReveal>
            <ScrollReveal direction="up"><Section8 /></ScrollReveal>
            <ScrollReveal direction="up"><Section9 /></ScrollReveal>
        </main>
    )
}

export default page
