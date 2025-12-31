import React from 'react'
import Section1 from "@/components/features/scans/mriscan/Section1"
import Section2 from "@/components/features/scans/mriscan/Section2"
import Section3 from "@/components/features/scans/mriscan/Section3"
import Section4 from "@/components/features/scans/mriscan/Section4"
import Section5 from "@/components/features/scans/mriscan/Section5"
import Section6 from "@/components/features/scans/mriscan/Section6"
import RelatedScans from "@/components/common/RelatedScans"

const page = () => {
    return (
        <>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <RelatedScans currentScan="mriscan" />
        </>
    )
}

export default page