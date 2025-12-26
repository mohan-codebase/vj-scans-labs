import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const icon1 = '/images/specialities/clinical-genitics-home/section3/icon1.svg';
const icon2 = '/images/specialities/clinical-genitics-home/section3/icon2.svg';
const icon3 = '/images/specialities/clinical-genitics-home/section3/icon3.svg';
const icon4 = '/images/specialities/clinical-genitics-home/section3/icon4.svg';
const icon5 = '/images/specialities/clinical-genitics-home/section3/icon5.svg';
const icon6 = '/images/specialities/clinical-genitics-home/section3/icon6.svg';


const Section3 = () => {
  return (
    <div>
      <section className="w-full max-w-[1400px] mx-auto py-0 mb-15 md:mb-0 md:py-0 lg:py-10 px-4 md:px-6 lg:px-8 font-sans">
        <h1 className="text-center font-sans font-extrabold text-[28px] sm:text-[36px] md:text-[42px] lg:text-[46px] leading-tight text-[#0961A1] mb-6 md:mb-10">
          Specialized<span className="text-[#F98D1B]"> Genetic Departments </span> <br className="hidden sm:block" />at VJ Scans & labs
        </h1>
        <p className="font-sans text-sm sm:text-base md:text-lg leading-relaxed text-center mb-8 md:mb-12 max-w-[1000px] mx-auto px-2">
         VJ Scans is committed to advancing your health through innovative genetic testing and diagnostic services. Whether you are an individual seeking answers, a family planning for the future, or a healthcare professional requiring precise data, our services are designed with you in mind. Across our specialized departments, we provide a broad range of genetic tests to support clarity, confidence, and better health outcomes.    </p>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 lg:gap-10 justify-items-center max-w-[1000px] mx-auto mt-8 md:mt-12">
          <Link href="/specialities/pgt" className="flex flex-col justify-center items-center hover:scale-105 transition-transform cursor-pointer">
            <Image className="w-[80px] md:w-[200px]" src={icon1} alt="Reproductive Genetics" width={908} height={816} />
            <h4 className="font-secondary font-semibold text-base sm:text-lg md:text-xl leading-snug text-center mt-3 md:mt-4 px-2">Reproductive Genetics (PGT)</h4>
          </Link>
          <div className="flex flex-col justify-center items-center hover:scale-105 transition-transform cursor-pointer">
            <Image className="w-[80px] md:w-[200px]" src={icon2} alt="Oncogenetics" width={908} height={816} />
            <h4 className="font-secondary font-semibold text-base sm:text-lg md:text-xl leading-snug text-center mt-3 md:mt-4 px-2">Oncogenetics</h4>
          </div>
          <Link href="/specialities/recurrent-pregnancy-loss" className="flex flex-col justify-center items-center hover:scale-105 transition-transform cursor-pointer">
            <Image className="w-[80px] md:w-[200px]" src={icon3} alt="Infectious Genetics" width={908} height={816} />
            <h4 className="font-secondary font-semibold text-base sm:text-lg md:text-xl leading-snug text-center mt-3 md:mt-4 px-2">Recurrent Pregnancy Loss</h4>
          </Link>
          <div className="flex flex-col justify-center items-center hover:scale-105 transition-transform cursor-pointer">
            <Image className="w-[80px] md:w-[200px]" src={icon4} alt="Neurogenetics" width={908} height={816} />
            <h4 className="font-secondary font-semibold text-base sm:text-lg md:text-xl leading-snug text-center mt-3 md:mt-4 px-2">Neurogenetics</h4>
          </div>

          <div className="flex flex-col justify-center items-center hover:scale-105 transition-transform cursor-pointer">
            <Image className="w-[80px] md:w-[200px]" src={icon5} alt="Transplant Genetics" width={908} height={816} />
            <h4 className="font-secondary font-semibold text-base sm:text-lg md:text-xl leading-snug text-center mt-3 md:mt-4 px-2">Transplant Genetics</h4>
          </div>

          <Link href="/specialities/genetic-counseling" className="flex flex-col justify-center items-center hover:scale-105 transition-transform cursor-pointer">
            <Image className="w-[80px] md:w-[200px]" src={icon6} alt="Genetic Counseling" width={908} height={816} />
            <h4 className="font-secondary font-semibold text-base sm:text-lg md:text-xl leading-snug text-center mt-3 md:mt-4 px-2">Genetic Counseling</h4>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Section3