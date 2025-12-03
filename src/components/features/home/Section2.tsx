import React from 'react';
import { Users, Cpu, FileText, Clock } from 'lucide-react';

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
    <section className="bg-[#0065AE] text-white py-6 md:py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center justify-center w-full md:w-1/4 relative">
              <div className="flex items-center gap-4">
                <img src={feature.icon} alt="icon" />
                <span className="text-lg md:text-[17px] font-medium whitespace-nowrap font-dm-sans">
                  {feature.text}
                </span>
              </div>

              {/* Vertical Divider (only visible on desktop and not after the last item) */}
              {index < features.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-8 w-px bg-white/30"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;