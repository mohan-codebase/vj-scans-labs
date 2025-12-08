import React from 'react';
import Image from 'next/image';

const TransoesophagealECHOIcon = '/images/echo/section3/TransoesophagealECHO.svg';
const StressEchoIcon = '/images/echo/section3/StressECHO.svg';
const DobtamineStressECHOIcon = '/images/echo/section3/DobutamineStressECHO.svg';

const Section3 = () => {
    return (
        <div>
            <section className="w-full max-w-[1600px] mx-auto py-10 md:py-20 px-4 md:px-6 lg:pb-28 font-sans">
                <h1 className="text-center font-urbanist font-extrabold text-[32px] md:text-[46px] leading-[100%] text-[#0961A1] mb-10">
                    What are the risk of<span className="text-[#F98D1B]">TMT test?</span>
                </h1>
                <p className="font-sans font-[500]  text-lg leading-[25px] text-center mb-12 max-w-[1000px] mx-auto">
                    While the TMT test is generally considered safe, there are certain potential risks and limitations to be aware of. These may include discomfort or frustration during the task, temporary anxiety related to performance, and fatigue—especially for individuals with cognitive impairments. In some cases, results may be influenced by external factors such as stress, distraction, or unfamiliarity with testing environments.                </p>
                <div className="flex flex-wrap justify-center  items-center gap-12 mt-12">

                    <div className="flex flex-col justify-center items-center">
                        <Image className="w-[120px] md:w-[150px]" src={StressEchoIcon} alt="Cardiology Scan" width={908} height={816} />
                        <h4 className="font-['DM_Sans'] font-semibold text-xl leading-[25px] text-center mt-4">Stress Echo</h4>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <Image className="w-[120px] md:w-[150px]" src={DobtamineStressECHOIcon} alt="Low Dose CT Scan" width={908} height={816} />
                        <h4 className="font-['DM_Sans'] font-semibold text-xl leading-[25px] text-center mt-4">Dobtamine Stress ECHO</h4>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <Image className="w-[120px] md:w-[150px]" src={TransoesophagealECHOIcon} alt="Brain Scan" width={908} height={816} />
                        <h4 className="font-['DM_Sans'] font-semibold text-xl leading-[25px] text-center mt-4">Transoesophageal ECHO</h4>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Section3