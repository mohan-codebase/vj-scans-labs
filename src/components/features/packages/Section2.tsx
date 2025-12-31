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
    <section className="bg-[#0065AE] text-white py-3 md:py-8">
      <div className="container mx-auto px-4">
        {/* Desktop View */}
        <div className="hidden md:flex flex-row justify-between items-center">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center justify-center w-1/4 relative">
              <div className="flex items-center gap-4">
                <Image src={feature.icon} alt="" width={50} height={50} className="w-auto h-auto" />
                <span className="text-[17px] font-medium whitespace-nowrap font-sans">
                  {feature.text}
                </span>
              </div>
              {index < features.length - 1 && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 h-8 w-px bg-white/30"></div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile View - Infinite Marquee */}
        <div className="md:hidden overflow-hidden relative w-full">
          <div className="flex w-max animate-marquee gap-8">
            {/* First set of items */}
            {features.map((feature, index) => (
              <div key={`set1-${index}`} className="flex items-center gap-2">
                <Image src={feature.icon} alt="" width={30} height={30} className="w-[30px] h-[30px]" />
                <span className="text-sm font-medium whitespace-nowrap font-sans">
                  {feature.text}
                </span>
              </div>
            ))}
            {/* Duplicate set for seamless loop - aria-hidden for accessibility */}
            <div className="flex items-center gap-2" aria-hidden="true">
              {features.map((feature, index) => (
                <div key={`set2-${index}`} className="flex items-center gap-2 mr-8">
                  <Image src={feature.icon} alt="" width={30} height={30} className="w-[30px] h-[30px]" />
                  <span className="text-sm font-medium whitespace-nowrap font-sans">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;