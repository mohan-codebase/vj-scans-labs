import React from 'react'
import Section1 from "@/components/features/scans/ctscan/Section1"
import Section2 from "@/components/features/scans/ctscan/Section2"
import Section3 from "@/components/features/scans/ctscan/Section3"
import Section5 from "@/components/features/scans/ctscan/Section5"
import Section6 from "@/components/features/scans/ctscan/Section6"
import Section4 from "@/components/features/scans/ctscan/Section4"
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
            <RelatedScans currentScan="ctscan" />
        </>
    )
}

export default page