import Section1 from '@/components/features/scans/ecg/Section1'
import Section2 from '@/components/features/scans/ecg/Section2'
import Section3 from '@/components/features/scans/ecg/Section3'
import Section4 from '@/components/features/scans/ecg/Section4'
import Section5 from '@/components/features/scans/ecg/Section5'
import Section6 from '@/components/features/scans/ecg/Section6'
import React from 'react'
import RelatedScans from '@/components/common/RelatedScans'

const page = () => {
    return (
        <div>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <RelatedScans currentScan="ecg" />
        </div>
    )
}

export default page