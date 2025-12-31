import Section1 from '@/components/features/scans/mammograms/Section1'
import Section2 from '@/components/features/scans/mammograms/Section2'
import Section3 from '@/components/features/scans/mammograms/Section3'
import Section4 from '@/components/features/scans/mammograms/Section4'
import Section5 from '@/components/features/scans/mammograms/Section5'
import Section6 from '@/components/features/scans/mammograms/Section6'
import DosAndDonts from '@/components/features/scans/mammograms/DosAndDonts'
import React from 'react'
import RelatedScans from '@/components/common/RelatedScans'

const page = () => {
  return (
    <div>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <DosAndDonts />
      <Section5 />
      <Section6 />
      <RelatedScans currentScan="mammograms" />
    </div>
  )
}

export default page