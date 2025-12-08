import React from 'react';
import Image from 'next/image';

const ChestIcon = '/images/xray/section3/Chest.png';
const SpinalIcon = '/images/xray/section3/Spine.png';
const skullIcon = '/images/xray/section3/Skull.png';
const limbIcon = '/images/xray/section3/Limb.png';
const dentalIcon = '/images/xray/section3/Dental.png';




const Section3 = () => {
  return (
    <div>
      <section className="w-full max-w-[1600px] mx-auto py-10 md:py-20 px-4 md:px-6 lg:pb-28 font-sans">
        <h1 className="text-center font-sans font-extrabold text-[32px] md:text-[46px] leading-[100%] text-[#0961A1] mb-10">
          What types of <span className="text-[#F98D1B]">X-Rays</span>We Offer
        </h1>
        <p className="font-sans font-[500]  text-lg leading-[25px] text-center mb-12 max-w-[1000px] mx-auto">
          Experience the difference of advanced X-ray imaging. Our facility features state-of-the-art digital X-ray systems that deliver crystal-clear images with minimal radiation exposure. This technology enables our radiologists to identify even subtle findings with exceptional precision. Whether you need a standard X-ray or a specialized diagnostic study, our modern equipment and expert team provide fast, accurate results you can rely on.
        </p>
        <div className="flex flex-wrap justify-center  items-center gap-12 mt-12">
          <div className="flex flex-col justify-center items-center">
            <Image className="w-[80px] md:w-[150px]" src={ChestIcon} alt="Chest Scan" width={908} height={816} />
            <h4 className="font-secondary font-semibold text-xl leading-[25px] text-center mt-4">Chest</h4>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image className="w-[80px] md:w-[150px]" src={SpinalIcon} alt="Spinal Scan" width={908} height={816} />
            <h4 className="font-secondary font-semibold text-xl leading-[25px] text-center mt-4">Spine</h4>
          </div>

          <div className="flex flex-col justify-center items-center">
            <Image className="w-[80px] md:w-[150px]" src={skullIcon} alt="Cardiac Scan" width={908} height={816} />
            <h4 className="font-secondary font-semibold text-xl leading-[25px] text-center mt-4">Skull</h4>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image className="w-[80px] md:w-[150px]" src={limbIcon} alt="Spinal Scan" width={908} height={816} />
            <h4 className="font-secondary font-semibold text-xl leading-[25px] text-center mt-4">Limb</h4>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image className="w-[80px] md:w-[150px]" src={dentalIcon} alt="Spinal Scan" width={908} height={816} />
            <h4 className="font-secondary font-semibold text-xl leading-[25px] text-center mt-4">Dental</h4>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Section3