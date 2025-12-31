import Section1 from '@/components/features/tmt/Section1'
import Section2 from '@/components/features/tmt/Section2'
import Section3 from '@/components/features/tmt/Section3'
import Section4 from '@/components/features/tmt/Section4'
import Section5 from '@/components/features/tmt/Section5'
import Section6 from '@/components/features/tmt/Section6'
import React from 'react'
import RelatedScans from '@/components/common/RelatedScans'

const page = () => {
    return (
        <>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <RelatedScans currentScan="tmt" />
        </>
    )
}

export default page