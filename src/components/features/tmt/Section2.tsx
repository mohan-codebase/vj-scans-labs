'use client';

import React, { useState } from 'react';
import { motion } from "motion/react";
import Image from 'next/image';
import section2banner from '../../../../public/images/tmt/section2/tmt-about.avif';

const Section2 = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [hoveredTab, setHoveredTab] = useState<number | null>(null);

    const tabContent = [
        {
            name: 'About the scan',
            title: 'What is<span class="text-[#F98D1B]">TMT Test?</span>',
            description: [
                'The TMT test (Treadmill Test), also known as the cardiac stress test or exercise stress test, is a widely used diagnostic procedure designed to evaluate how the heart functions when placed under physical stress.',
                'While the heart may appear normal at rest, certain problems—especially those related to reduced blood flow in the coronary arteries—often become noticeable only during exertion. During the TMT, the patient walks on a treadmill that gradually increases in speed and incline, creating a controlled and progressively challenging workout. ',
                ' Throughout the test, doctors closely monitor the patient’s heart rate, blood pressure, oxygen levels, and electrocardiogram (ECG) readings to detect any irregularities.'
            ],
            image: section2banner
        },
        {
            name: 'Types of Echo Scans',
            title: 'Types of <br/><span class="text-[#F98D1B]">Echocardiography</span>',
            description: [
                'We offer various types of echocardiography, including Transthoracic Echo (TTE), Transesophageal Echo (TEE), and Stress Echo. Each provides unique insights into heart health.',
                'TTE is standard for general assessment, TEE offers detailed views from within the esophagus, and Stress Echo evaluates heart function under exertion.'
            ],
            image: section2banner
        },
        {
            name: 'Echo Preparation',
            title: 'Preparing for Your <br/><span class="text-[#F98D1B]">Echo Scan</span>',
            description: [
                'Preparation for an echocardiogram is generally minimal. For a standard Transthoracic Echo, no special preparation is usually required.',
                'If you are having a Transesophageal Echo or Stress Echo, specific instructions regarding fasting or medication will be provided to ensure accurate results.'
            ],
            image: section2banner
        },
        {
            name: 'Book an Echo',
            title: 'Easy <span class="text-[#F98D1B]">Echo Booking</span>',
            description: [
                'Booking your echocardiogram appointment is simple and convenient. You can schedule online through our website or by calling our dedicated customer service.',
                'We offer flexible scheduling to accommodate your needs, and while walk-ins are welcome, appointments are recommended for minimal wait times for your echo scan.'
            ],
            image: section2banner
        },
        {
            name: "FAQ's",
            title: 'Common <span class="text-[#F98D1B]">Echo Questions</span>',
            description: [
                'Q: Is echocardiography safe? A: Yes, echo uses sound waves, not radiation, making it very safe for all patients, including pregnant women.',
                'Q: How long does an echo take? A: Most echocardiograms are completed within 30-60 minutes, though some specialized scans like TEE may take longer.'
            ],
            image: section2banner
        },
    ];

    return (
        <section className="font-sans w-full max-w-7xl mx-auto px-2 md:px-0  py-12 md:py-16">
            {/* Navigation Tabs */}
            <div className="flex justify-center mb-12 md:mb-16">
                <div
                    className="flex flex-col md:flex-row flex-wrap justify-center gap-1 bg-[linear-gradient(90deg,#FFEBD6_0%,#D1EBFF_100%)] rounded-[20px] md:rounded-full p-1 w-full md:w-auto"
                    onMouseLeave={() => setHoveredTab(null)}
                >
                    {tabContent.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            onMouseEnter={() => setHoveredTab(index)}
                            className="relative px-4 py-2 rounded-full text-sm md:text-base font-semibold w-full md:w-auto transition-colors duration-200"
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                color: activeTab === index ? '#ffffff' : '#0961A1',
                            }}
                        >
                            {activeTab === index && (
                                <motion.div
                                    layoutId="active-tab-bg"
                                    className="absolute inset-0 h-full w-full rounded-full bg-[#0961A1] shadow-md"
                                    transition={{
                                        type: "spring",
                                        bounce: 0.2,
                                        duration: 0.6,
                                    }}
                                />
                            )}
                            {hoveredTab === index && activeTab !== index && (
                                <motion.div
                                    layoutId="hover-tab-bg"
                                    className="absolute inset-0 h-full w-full rounded-full bg-white/40 backdrop-blur-md border border-white/20 shadow-sm"
                                    transition={{
                                        type: "spring",
                                        bounce: 0.2,
                                        duration: 0.6,
                                    }}
                                />
                            )}
                            <span className="relative z-10">{tab.name}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Area */}
            <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-10 lg:gap-16 px-2 md:px-0 lg:px-0">


                {/* Image */}
                <div className="flex-1 w-full max-w-2xl">
                    <div className="relative rounded-[30px] overflow-hidden shadow-xl">
                        <Image
                            src={tabContent[activeTab].image}
                            alt={tabContent[activeTab].name}
                            width={2264}
                            height={1532}
                            className="w-full h-auto object-cover"
                            placeholder="blur"
                        />
                    </div>
                </div>

                {/* Text Content */}
                <div className="flex-1 max-w-2xl">
                    <h2
                        className="text-4xl md:text-4xl lg:text-[46px] font-bold  text-[#0961A1] mb-6"
                        dangerouslySetInnerHTML={{ __html: tabContent[activeTab].title }}
                    />
                    <div className="space-y-6 md:text-lg font-semibold leading-relaxed">
                        {tabContent[activeTab].description.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section2;