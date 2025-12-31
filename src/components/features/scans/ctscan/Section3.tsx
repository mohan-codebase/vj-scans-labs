import React from 'react';
import Image from 'next/image';

const BrainIcon = '/images/ctscan/Section3/Brain.avif';
const Cardiology = '/images/ctscan/Section3/Cardiology.avif';
const LowDoseCTScan = '/images/ctscan/Section3/LowDoseCTScan.avif';
const NewbornScreening = '/images/ctscan/Section3/NewbornScreening.avif';

const Section3 = () => {
    return (
        <div>
            <section className="w-full max-w-[1600px] mx-auto py-10 md:py-20 px-4 md:px-6 lg:pb-28 font-sans">
                <h1 className="text-center font-sans font-extrabold text-[32px] md:text-[46px] leading-[100%] text-[#0961A1] mb-10">
                    What types of <span className="text-[#F98D1B]">CT scans</span> do you offer?
                </h1>
                <p className="font-sans font-[500]  text-lg leading-[25px] text-center mb-12 max-w-[1000px] mx-auto">
                    Experience the difference of advanced imaging technology. Our facility is equipped with state-of-the-art CT scanners that produce ultra-clear, fast, and low-radiation images. This allows our radiologists to detect even the smallest details with exceptional accuracy. Whether you require a routine scan or a complex diagnostic study, our cutting-edge systems and expert team ensure results you can trust.
                </p>
                <div className="flex flex-wrap justify-center  items-center gap-12 mt-12">
                    <div className="flex flex-col justify-center items-center">
                        <Image className="w-[120px] md:w-[200px]" src={BrainIcon} alt="Brain Scan" width={908} height={816} />
                        <h4 className="font-sans font-semibold text-xl leading-[25px] text-center mt-4">Brain</h4>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <Image className="w-[120px] md:w-[200px]" src={Cardiology} alt="Cardiology Scan" width={908} height={816} />
                        <h4 className="font-sans font-semibold text-xl leading-[25px] text-center mt-4">Cardiology</h4>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <Image className="w-[120px] md:w-[200px]" src={LowDoseCTScan} alt="Low Dose CT Scan" width={908} height={816} />
                        <h4 className="font-sans font-semibold text-xl leading-[25px] text-center mt-4">Newborn Screening</h4>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <Image className="w-[120px] md:w-[200px]" src={NewbornScreening} alt="Newborn Screening" width={908} height={816} />
                        <h4 className="font-sans font-semibold text-xl leading-[25px] text-center mt-4">Low Dose CT Scan</h4>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Section3