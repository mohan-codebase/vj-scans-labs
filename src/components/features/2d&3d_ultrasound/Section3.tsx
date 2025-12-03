import React from 'react';
import Image from 'next/image';

const TwoDUltrasoundIcon = '/images/2d&3d_ultrasound/section3/2DUltrasound.svg';
const ThreeDUltrasoundIcon = '/images/2d&3d_ultrasound/section3/3DUltrasound.svg';
const PregnancyUltrasoundIcon = '/images/2d&3d_ultrasound/section3/PregnancyUltrasound.svg';
const PelvicUltrasoundIcon = '/images/2d&3d_ultrasound/section3/PelvicUltrasound.svg';
const ThyroidUltrasoundIcon = '/images/2d&3d_ultrasound/section3/ThyroidUltrasound.svg';
const SepectroscopyUltrasoundIcon = '/images/2d&3d_ultrasound/section3/Spectroscopy.svg';

const Section3 = () => {
    return (
        <div>
            <section className="w-full max-w-[1600px] mx-auto py-10 md:py-20 px-4 md:px-6 lg:pb-28 font-sans">
                <h1 className="text-center font-urbanist font-extrabold text-[32px] md:text-[46px] leading-[100%] text-[#0961A1] mb-10">
                    Diagnostic <span className="text-[#F98D1B]"> Ultrasound Scans</span> We Offer
                </h1>
                <p className="font-sans font-[500]  text-lg leading-[25px] text-center mb-12 max-w-[1000px] mx-auto">
                    We provide a complete range of diagnostic ultrasound scans using advanced 2D, 3D, and <br /> Doppler technology for accurate and safe results.                </p>
                <div className="flex flex-wrap justify-center  items-center gap-12 mt-12">
                    <div className="flex flex-col justify-center items-center">
                        <Image className="w-[120px] md:w-[150px]" src={TwoDUltrasoundIcon} alt="Brain Scan" width={908} height={816} />
                        <h4 className="font-['DM_Sans'] font-semibold text-xl leading-[25px] text-center mt-4">2D Ultrasound</h4>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <Image className="w-[120px] md:w-[150px]" src={ThreeDUltrasoundIcon} alt="Cardiology Scan" width={908} height={816} />
                        <h4 className="font-['DM_Sans'] font-semibold text-xl leading-[25px] text-center mt-4">3D Ultrasound</h4>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <Image className="w-[120px] md:w-[150px]" src={PregnancyUltrasoundIcon} alt="Low Dose CT Scan" width={908} height={816} />
                        <h4 className="font-['DM_Sans'] font-semibold text-xl leading-[25px] text-center mt-4">Pregnancy Ultrasound</h4>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <Image className="w-[120px] md:w-[150px]" src={PelvicUltrasoundIcon} alt="Pelvic Ultrasound" width={908} height={816} />
                        <h4 className="font-['DM_Sans'] font-semibold text-xl leading-[25px] text-center mt-4">Pelvic Ultrasound</h4>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center  items-center gap-12 mt-12">
                    <div className="flex flex-col justify-center items-center">
                        <Image className="w-[120px] md:w-[150px]" src={ThyroidUltrasoundIcon} alt="Thyroid Ultrasound" width={908} height={816} />
                        <h4 className="font-['DM_Sans'] font-semibold text-xl leading-[25px] text-center mt-4">Thyroid Ultrasound</h4>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <Image className="w-[120px] md:w-[150px]" src={SepectroscopyUltrasoundIcon} alt="Sepectroscopy Ultrasound" width={908} height={816} />
                        <h4 className="font-['DM_Sans'] font-semibold text-xl leading-[25px] text-center mt-4">Sepectroscopy </h4>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Section3