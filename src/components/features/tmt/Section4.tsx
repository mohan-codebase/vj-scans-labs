import React from 'react';
import Image from 'next/image';

const Section4 = () => {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 md:px-0 py-12 md:py-16 flex flex-col md:flex-row gap-8 md:gap-10 items-start font-sans font-[600]">
            {/* Left Column: Title and Description only */}
            <div className="w-full md:w-1/2 flex flex-col gap-4 md:gap-2 mb-8 md:mb-0">
                <h2 className="text-4xl font-[700] md:text-5xl text-[#005999] leading-tight">
                    What to Know Before
                    <span className="text-[#FF9E0D]">TMT (Treadmill Test)</span>
                </h2>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed  ">
                    Get clear, step-by-step guidance to help you understand what to expect before, during, and after your Treadmill Test (TMT). This exercise-based test measures how your heart responds to physical activity, helping your doctor assess blood flow, heart rhythm, and overall cardiac health.                </p>
            </div>
            {/* Right Column: Image and Timeline Cards */}
            <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-8 md:gap-6 items-start">
                {/* Timeline image (only on md+, shown left; cards shown right) */}
                <div className="hidden md:flex flex-col justify-center items-center me-4">
                    <div className="relative h-[700px] mt-12 w-8 flex-shrink-0">
                        <Image
                            src="/images/ctscan/section4/line.png"
                            alt="Timeline Line"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
                {/* Timeline Cards */}
                <div className="flex flex-col gap-8 flex-1 font-sans font-[600]">
                    {/* Wrap cards in grid to ensure same height */}
                    <div className="grid grid-cols-1 gap-8 h-full">
                        {/* Card 1: Before the Scan */}
                        <div className="bg-[linear-gradient(160.93deg,rgba(255,220,183,0.4)_12.84%,rgba(193,229,255,0.4)_56.03%)] p-6 md:p-8 rounded-2xl border border-blue-100 shadow-sm flex flex-col h-full min-h-[232px]">
                            <h3 className="text-xl md:text-2xl font-bold text-[#005999] mb-4">
                                Before the Scan                            </h3>
                            <ul className="list-disc list-outside pl-5 space-y-2 text-gray-700 flex-1">
                                <li>
                                    Wear comfortable walking or running shoes.
                                </li>
                                <li>
                                    Avoid heavy meals for at least 2–3 hours beforehand.
                                </li>
                                <li>
                                    Continue or stop specific medications only if your doctor advises it.
                                </li>
                                <li>
                                    Bring previous test reports or prescriptions.
                                </li>
                            </ul>
                        </div>

                        {/* Card 2: During the Scan */}
                        <div className="bg-[linear-gradient(160.93deg,rgba(255,220,183,0.4)_12.84%,rgba(193,229,255,0.4)_56.03%)] p-6 md:p-8 rounded-2xl border border-blue-100 shadow-sm flex flex-col h-full min-h-[232px]">
                            <h3 className="text-xl md:text-2xl font-bold text-[#005999] mb-4">
                                During the X-Ray                            </h3>
                            <ul className="list-disc list-outside pl-5 space-y-2 text-gray-700 flex-1">
                                <li>
                                    Electrodes will be placed on your chest to monitor heart activity.
                                </li>
                                <li>
                                    You’ll walk on a treadmill that gradually increases in speed and incline.
                                </li>
                                <li>
                                    The test usually lasts 10–15 minutes, depending on your tolerance.
                                </li>
                                <li>
                                    Your heart rate, blood pressure, and symptoms will be monitored throughout.
                                </li>

                            </ul>
                        </div>

                        {/* Card 3: After the Scan */}
                        <div className="bg-[linear-gradient(160.93deg,rgba(255,220,183,0.4)_12.84%,rgba(193,229,255,0.4)_56.03%)] p-6 md:p-8 rounded-2xl border border-blue-100 shadow-sm flex flex-col h-full min-h-[232px]">
                            <h3 className="text-xl md:text-2xl font-bold text-[#005999] mb-4">
                                After the X-ray
                            </h3>
                            <ul className="list-disc list-outside pl-5 space-y-2 text-gray-700 flex-1">
                                <li>
                                    You can rest for a few minutes while your vitals return to normal.
                                </li>
                                <li>
                                    You may resume regular activities unless your doctor suggests otherwise.
                                </li>
                                <li>
                                    Results are often available the same day.
                                </li>
                                <li>
                                    Your doctor will review and explain whether your heart showed any signs of stress or reduced blood flow.                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section4;