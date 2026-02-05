import React from 'react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import Section1 from "@/components/features/specialities/onco-diagnostics/Section1"
import Section2 from "@/components/features/specialities/onco-diagnostics/Section2"
import Section3 from "@/components/features/specialities/onco-diagnostics/Section3"
import Section4 from "@/components/features/specialities/onco-diagnostics/Section4"
import Section5 from "@/components/features/specialities/onco-diagnostics/Section5"
import Section6 from "@/components/features/specialities/onco-diagnostics/Section6"
import Section8 from "@/components/features/specialities/onco-diagnostics/Section8"
import Section9 from "@/components/features/specialities/onco-diagnostics/Section9"
import { seoDatas, SITE_NAME } from '@/lib/seo'
import { Metadata } from 'next'

const seo = seoDatas.specialitiesOncoDiagnostics

export const metadata: Metadata = {
    title: seo.title,
    description: seo.description,
    openGraph: {
        title: seo.title,
        description: seo.description,
        url: seo.url,
        siteName: SITE_NAME,
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
            <ScrollReveal direction="up"><Section6 /></ScrollReveal>
            <ScrollReveal direction="up"><Section8 /></ScrollReveal>
            <ScrollReveal direction="up"><Section9 /></ScrollReveal>
        </div>
    )
}

export default page
