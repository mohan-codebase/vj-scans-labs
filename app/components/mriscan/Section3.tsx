import React from 'react';
import Image from 'next/image';

const BrainIcon = '/images/mriscan/section3/Brain.png';
const ChestIcon = '/images/mriscan/section3/Chest.png';
const CardiacIcon = '/images/mriscan/section3/Cardiac.png';
const SpinalIcon = '/images/mriscan/section3/Spinal.png';
const AbdomenIcon = '/images/mriscan/section3/Abdomen.png';
const KneeIcon = '/images/mriscan/section3/Knee.png';
const SpineIcon = '/images/mriscan/section3/Spine.png';
const SpectroscopyIcon = '/images/mriscan/section3/Spectroscopy.png';


const Section3 = () => {
  return (
    <div>
      <section className="w-full max-w-[1600px] mx-auto py-10 md:py-20 px-4 md:px-6 lg:pb-28 font-sans">
        <h1 className="text-center font-urbanist font-extrabold text-[32px] md:text-[46px] leading-[100%] text-[#0961A1] mb-10">
          Explore Our <span className="text-[#F98D1B]">MRI Scans</span>Types
        </h1>
        <p className="font-sans font-[500]  text-lg leading-[25px] text-center mb-12 max-w-[1000px] mx-auto">
          Discover our full suite of MRI scan options, each performed using advanced imaging systems to ensure clarity, comfort, and quick results. At our center, you’ll find cutting-edge MRI technology and compassionate care—all aimed at delivering the most accurate results in the shortest time possible.                </p>
        <div className="grid grid-cols-2 gap-6 justify-items-center md:flex md:flex-wrap md:justify-center md:gap-12 mt-12">
          <div className="flex flex-col justify-center items-center">
            <Image className="w-[80px] md:w-[150px]" src={BrainIcon} alt="Brain Scan" width={908} height={816} />
            <h4 className="font-['DM_Sans'] font-semibold text-xl leading-[25px] text-center mt-4">Brain</h4>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image className="w-[80px] md:w-[150px]" src={ChestIcon} alt="Chest Scan" width={908} height={816} />
            <h4 className="font-['DM_Sans'] font-semibold text-xl leading-[25px] text-center mt-4">Chest</h4>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image className="w-[80px] md:w-[150px]" src={CardiacIcon} alt="Cardiac Scan" width={908} height={816} />
            <h4 className="font-['DM_Sans'] font-semibold text-xl leading-[25px] text-center mt-4">Cardiac</h4>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image className="w-[80px] md:w-[150px]" src={SpinalIcon} alt="Spinal Scan" width={908} height={816} />
            <h4 className="font-['DM_Sans'] font-semibold text-xl leading-[25px] text-center mt-4">Spinal</h4>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 justify-items-center md:flex md:flex-wrap md:justify-center md:gap-12 mt-12">
          <div className="flex flex-col justify-center items-center">
            <Image className="w-[80px] md:w-[150px]" src={AbdomenIcon} alt="Abdomen Scan" width={908} height={816} />
            <h4 className="font-['DM_Sans'] font-semibold text-xl leading-[25px] text-center mt-4">Abdomen</h4>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image className="w-[80px] md:w-[150px]" src={SpineIcon} alt="Spine Scan" width={908} height={816} />
            <h4 className="font-['DM_Sans'] font-semibold text-xl leading-[25px] text-center mt-4">Spine</h4>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image className="w-[80px] md:w-[150px]" src={SpectroscopyIcon} alt="Spectroscopy Scan" width={908} height={816} />
            <h4 className="font-['DM_Sans'] font-semibold text-xl leading-[25px] text-center mt-4">Spectroscopy</h4>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image className="w-[80px] md:w-[150px]" src={KneeIcon} alt="Knee Scan" width={908} height={816} />
            <h4 className="font-['DM_Sans'] font-semibold text-xl leading-[25px] text-center mt-4">Knee</h4>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Section3