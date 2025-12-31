import React from 'react';
import Image from 'next/image';

const BrainIcon = '/images/mriscan/section3/Brain.png';
const ChestIcon = '/images/mriscan/section3/Chest.png';
const CardiacIcon = '/images/mriscan/section3/Cardiac.png';
const SpinalIcon = '/images/mriscan/section3/Spinal.png';



const Section3 = () => {
  return (
    <div>
      <section className="w-full max-w-[1600px] mx-auto py-10 md:py-20 px-4 md:px-6 lg:pb-28 font-sans">
        <h1 className="text-center font-sans font-extrabold text-[32px] md:text-[46px] leading-[100%] text-[#0961A1] mb-10">
          Causes of <span className="text-[#F98D1B]">Breast Cancer</span>
        </h1>
        <div className="grid grid-cols-2 gap-6 justify-items-center md:flex md:flex-wrap md:justify-center md:gap-12 mt-12">
          <div className="flex flex-col justify-center items-center">
            <Image className="w-[80px] md:w-[150px]" src={BrainIcon} alt="Brain Scan" width={908} height={816} />
            <h4 className="font-sans font-semibold text-xl leading-[25px] text-center mt-4">Family Background</h4>
            <p className='text-center'>Close relatives with breast <br /> or ovarian cancer.</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image className="w-[80px] md:w-[150px]" src={ChestIcon} alt="Chest Scan" width={908} height={816} />
            <h4 className="font-sans font-semibold text-xl leading-[25px] text-center mt-4">Genetic Factors</h4>
            <p className='text-center'>Inherited genes that<br />  raise cancer risk.</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image className="w-[80px] md:w-[150px]" src={CardiacIcon} alt="Cardiac Scan" width={908} height={816} />
            <h4 className="font-sans font-semibold text-xl leading-[25px] text-center mt-4">Radiation History</h4>
            <p className='text-center'>Previous chest <br /> radiation exposure.</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image className="w-[80px] md:w-[150px]" src={SpinalIcon} alt="Spinal Scan" width={908} height={816} />
            <h4 className="font-sans font-semibold text-xl leading-[25px] text-center mt-4">Prior Cancer</h4>
            <p className='text-center'>History of breast  <br /> cancer in one breast.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Section3