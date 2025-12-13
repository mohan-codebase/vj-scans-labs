import Section1 from '@/components/features/Mammograms/Section1'
import Section2 from '@/components/features/Mammograms/Section2'
import Section3 from '@/components/features/Mammograms/Section3'
import Section4 from '@/components/features/Mammograms/Section4'
import Section5 from '@/components/features/Mammograms/Section5'
import Section6 from '@/components/features/Mammograms/Section6'
import React from 'react'

const page = () => {
  return (
    <div>
      <Section1 />
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5 />
      <Section6 />
    </div>
  )
}

export default page