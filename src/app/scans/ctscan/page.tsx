import React from 'react'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import Section1 from "@/components/features/scans/ctscan/Section1"
import Section2 from "@/components/features/scans/ctscan/Section2"
import Section3 from "@/components/features/scans/ctscan/Section3"
import Section5 from "@/components/features/scans/ctscan/Section5"
import Section6 from "@/components/features/scans/ctscan/Section6"
import Section4 from "@/components/features/scans/ctscan/Section4"
import RelatedScans from "@/components/common/RelatedScans"
import { Metadata } from 'next'
import { seoDatas, SITE_NAME } from '@/lib/seo'

const seo = seoDatas.scansCt;

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
        <div className="overflow-hidden">
            <ScrollReveal direction="down"><Section1 /></ScrollReveal>
            <ScrollReveal direction="right"><Section2 /></ScrollReveal>
            <ScrollReveal direction="left"><Section3 /></ScrollReveal>
            <ScrollReveal><Section4 /></ScrollReveal>
            <ScrollReveal direction="right"><Section5 /></ScrollReveal>
            <ScrollReveal direction="up"><Section6 /></ScrollReveal>
            <ScrollReveal direction="up"><RelatedScans currentScan="ctscan" /></ScrollReveal>
        </div>
    )
}

export default page