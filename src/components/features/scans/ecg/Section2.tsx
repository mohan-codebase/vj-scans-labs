'use client';

import React, { useState } from 'react';
import { motion } from "motion/react";
import Image from 'next/image';
import section2banner from '../../../../../public/images/ecg/section2/section2.avif';

const Section2 = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [hoveredTab, setHoveredTab] = useState<number | null>(null);

    const tabContent = [
        {
            name: 'About the scan',
            title: 'What is <span class="text-[#F98D1B]"> ECG?</span>',
            description: [
                'Electrocardiogram test is taken to test the electrical activity in the heart. It shows if the heart is functioning normally or not. ECG records the rhythm of the heart on a moving piece of graph paper and can be seen as a line on the screen. The doctors interpret the peaks and dip to evaluate the activity of the heart. The test is painless and safe and can be completed in a few minutes. It can detect cholesterol clogging, heart attack, heart enlargement and abnormal rhythms of the heart.',
                'Electroencephalogram (EEG) is a test to measure the electrical activity of the brain. It records the brain wave patterns. EEG is taken to identify and monitor seizures. It is also used to identify other issues like sleep disorders and behavioural changes. It is used to assess the brain activity before heart or liver transplant and after a head injury.',
            ],
            image: section2banner
        },
        {
            name: 'Types of ECG',
            title: 'ECG Services at <br/><span class="text-[#F98D1B]">VJ Scans & Labs</span>',
            description: [
                'Our Chennai facility offers multiple ECG testing options: Resting ECG for routine cardiac assessment, Exercise ECG (TMT) to evaluate heart function during physical stress, and Holter Monitoring for 24-48 hour continuous heart rhythm recording.',
                'Resting ECG captures your heart\'s electrical patterns at rest, helping detect arrhythmias, heart attacks, and conduction abnormalities. Holter monitoring is ideal for capturing intermittent symptoms that may not appear during a brief office visit.'
            ],
            image: section2banner
        },
        {
            name: 'ECG Preparation',
            title: 'Preparing for Your <br/><span class="text-[#F98D1B]">ECG Test</span>',
            description: [
                'For a standard Resting ECG at VJ Scans & Labs, no special preparation is needed. You can eat and take medications normally. Wear comfortable clothing that allows easy access to your chest, arms, and ankles.',
                'If you\'re having an Exercise ECG (TMT), wear athletic shoes and comfortable exercise clothes. Avoid heavy meals, caffeine, and smoking 2-3 hours before. For Holter monitoring, you\'ll receive instructions on wearing the device and keeping a diary of activities and symptoms.'
            ],
            image: section2banner
        },
        {
            name: 'Book an ECG',
            title: 'Schedule Your <span class="text-[#F98D1B]">ECG Test</span>',
            description: [
                'Book your ECG at VJ Scans & Labs by calling our Chennai facility or scheduling online. ECG tests are quick procedures, typically taking just 5-10 minutes, making them ideal for walk-in patients.',
                'For routine cardiac monitoring or pre-surgical clearance, advance booking ensures minimal wait. Our cardiac diagnostics team is available 24/7 for emergency ECG needs.'
            ],
            image: section2banner
        },
        {
            name: "FAQ's",
            title: 'Common <span class="text-[#F98D1B]">ECG Questions</span>',
            description: [
                'Q: Is an ECG painful? A: No, an ECG is a painless and non-invasive test. Electrodes are simply placed on your skin to record electrical signals.',
                'Q: How long does an ECG take? A: A standard resting ECG typically takes about 5-10 minutes. An exercise ECG or Holter monitor setup may take longer.'
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
                                fontFamily: "var(--font-sans)",
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