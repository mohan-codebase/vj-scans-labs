import React from 'react';
import Image from 'next/image';

const Section2 = () => {
  const features = [
    {
      icon: '/images/section-2/icon1.svg',
      text: <><p className="">Skilled Professionals</p></>
    },
    {
      icon: '/images/section-2/icon2.svg',
      text: <><p className="">Advanced Technology</p></>
    },
    {
      icon: '/images/section-2/icon3.svg',
      text: <><p className="me-7 md:me-0">Detailed Reporting</p></>
    },
    {
      icon: '/images/section-2/icon4.svg',
      text: <><p className="me-7 md:me-0">Rapid Processing</p></>
    }
  ];

  return (
    <section className="bg-[#0065AE] text-white py-2 md:py-2 overflow-hidden relative">
      <div className="flex w-max animate-marquee gap-8 md:gap-32">
        {/* First set of items */}
        {features.map((feature, index) => (
          <div key={`set1-${index}`} className="flex items-center gap-2 md:gap-4">
            <Image src={feature.icon} alt="" width={50} height={50} className="w-[30px] h-[30px] md:w-[30px] md:h-[30px]" />
            <span className="text-sm md:text-[17px] font-medium whitespace-nowrap font-sans">
              {feature.text}
            </span>
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        <div className="flex items-center gap-8 md:gap-32" aria-hidden="true">
          {features.map((feature, index) => (
            <div key={`set2-${index}`} className="flex items-center gap-2 md:gap-4">
              <Image src={feature.icon} alt="" width={50} height={50} className="w-[30px] h-[30px] md:w-[30px] md:h-[30px]" />
              <span className="text-sm md:text-[17px] font-medium whitespace-nowrap font-sans">
                {feature.text}
              </span>
            </div>
          ))}
        </div>
        {/* Triplicate set for seamless loop on large screens */}
        <div className="flex items-center gap-8 md:gap-32" aria-hidden="true">
          {features.map((feature, index) => (
            <div key={`set3-${index}`} className="flex items-center gap-2 md:gap-4">
              <Image src={feature.icon} alt="" width={50} height={50} className="w-[30px] h-[30px] md:w-[30px] md:h-[30px]" />
              <span className="text-sm md:text-[17px] font-medium whitespace-nowrap font-sans">
                {feature.text}
              </span>
            </div>
          ))}
        </div>
        {/* Quadruplicate set for seamless loop on very large screens */}
        <div className="flex items-center gap-8 md:gap-32" aria-hidden="true">
          {features.map((feature, index) => (
            <div key={`set4-${index}`} className="flex items-center gap-2 md:gap-4">
              <Image src={feature.icon} alt="" width={50} height={50} className="w-[30px] h-[30px] md:w-[30px] md:h-[30px]" />
              <span className="text-sm md:text-[17px] font-medium whitespace-nowrap font-sans">
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;