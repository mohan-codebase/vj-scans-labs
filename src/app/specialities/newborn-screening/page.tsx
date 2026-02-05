import React from 'react'
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import Section1 from '@/components/features/specialities/newborn-screening/Section1'
import Section2 from "@/components/features/specialities/newborn-screening/Section2"
import Section3 from "@/components/features/specialities/newborn-screening/Section3"
import Section4 from "@/components/features/specialities/newborn-screening/Section4"
import Section5 from "@/components/features/specialities/newborn-screening/Section5"
import Section6 from "@/components/features/specialities/newborn-screening/Section6"
import Section8 from "@/components/features/specialities/newborn-screening/Section8"
import Section9 from "@/components/features/specialities/newborn-screening/Section9"
import { Metadata } from 'next'
import { seoDatas, SITE_NAME } from '@/lib/seo'

const seo = seoDatas.specialitiesNewbornScreening;

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
            <ScrollReveal direction="up"><Section8 /></ScrollReveal>
            <ScrollReveal direction="up"><Section9 /></ScrollReveal>
        </main>
    )
}

export default page
