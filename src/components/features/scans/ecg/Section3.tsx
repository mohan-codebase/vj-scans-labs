import React from 'react';
import Image from 'next/image';

const ChestpainIcon = '/images/ecg/section3/Chestpain.svg';
const DizzinessIcon = '/images/ecg/section3/Dizziness.svg';
const FaintingIcon = '/images/ecg/section3/Fainting.svg';
const FatigueIcon = '/images/ecg/section3/Fatigue.svg';
const HeartRacingIcon = '/images/ecg/section3/HeartRacing.svg';
const NauseaIcon = '/images/ecg/section3/Nausea.svg';
const SweatingIcon = '/images/ecg/section3/Sweating.svg';
const TroublebreathingIcon = '/images/ecg/section3/Troublebreathing.svg';

const Section3 = () => {


    return (
        <div>
            <section className="w-full max-w-[1600px] mx-auto py-10 md:py-20 px-4 md:px-6 lg:pb-28 font-sans">
                <h1 className="text-center font-sans font-extrabold text-[32px] md:text-[46px] leading-[100%] text-[#0961A1] mb-10">
                    When does your doctor recommend an <span className="text-[#F98D1B]">ECG Test?</span>
                </h1>
                <p className="font-sans font-[500]  text-lg leading-[25px] text-center mb-12 max-w-[1000px] mx-auto">
                    Your doctor might recommend the ECG test if you are experiencing the following symptoms-
                </p>
                <div className="flex flex-wrap justify-center  items-center gap-12 mt-12">
                    <div className="flex flex-col justify-center items-center">
                        <Image className="w-[120px] md:w-[150px]" src={ChestpainIcon} alt="Chest Pain" width={120} height={120} />
                        <h4 className="font-secondary font-semibold text-xl leading-[25px] text-center mt-4">Chest Pain</h4>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <Image className="w-[120px] md:w-[150px]" src={DizzinessIcon} alt="Dizziness" width={120} height={120} />
                        <h4 className="font-secondary font-semibold text-xl leading-[25px] text-center mt-4">Dizziness</h4>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <Image className="w-[120px] md:w-[150px]" src={FaintingIcon} alt="Fainting" width={120} height={120} />
                        <h4 className="font-secondary font-semibold text-xl leading-[25px] text-center mt-4">Fainting</h4>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <Image className="w-[120px] md:w-[150px]" src={FatigueIcon} alt="Fatigue" width={120} height={120} />
                        <h4 className="font-secondary font-semibold text-xl leading-[25px] text-center mt-4">Fatigue</h4>
                    </div>
                   
                </div>
             <div className="flex flex-wrap justify-center  items-center gap-12 mt-12">
                    <div className="flex flex-col justify-center items-center">
                        <Image className="w-[120px] md:w-[150px]" src={HeartRacingIcon} alt="Heart Racing" width={120} height={120} />
                        <h4 className="font-secondary font-semibold text-xl leading-[25px] text-center mt-4">Heart Racing</h4>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <Image className="w-[120px] md:w-[150px]" src={NauseaIcon} alt="Nausea" width={120} height={120} />
                        <h4 className="font-secondary font-semibold text-xl leading-[25px] text-center mt-4">Nausea</h4>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <Image className="w-[120px] md:w-[150px]" src={SweatingIcon} alt="Sweating" width={120} height={120} />
                        <h4 className="font-secondary font-semibold text-xl leading-[25px] text-center mt-4">Sweating</h4>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <Image className="w-[120px] md:w-[150px]" src={TroublebreathingIcon} alt="Trouble Breathing" width={120} height={120} />
                        <h4 className="font-secondary font-semibold text-xl leading-[25px] text-center mt-4">Trouble Breathing</h4>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Section3