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
            name: 'When is TMT Needed',
            title: 'When is TMT <br/><span class="text-[#F98D1B]">Recommended?</span>',
            description: [
                'TMT is typically recommended for patients experiencing chest pain, shortness of breath, or irregular heartbeats. It helps diagnose coronary artery disease, evaluate exercise capacity, and assess heart function under stress.',
                'Your doctor may also recommend TMT if you have risk factors for heart disease, such as diabetes, high blood pressure, or a family history of cardiac conditions.'
            ],
            image: section2banner
        },
        {
            name: 'TMT Preparation',
            title: 'Preparing for Your <br/><span class="text-[#F98D1B]">TMT Test</span>',
            description: [
                'Before your TMT, avoid heavy meals, caffeine, and smoking for at least 2-3 hours. Wear comfortable clothing and athletic shoes suitable for walking or light jogging.',
                'Inform your doctor about any medications you are taking, as some may need to be adjusted before the test. You may be asked to stop certain heart medications temporarily.'
            ],
            image: section2banner
        },
        {
            name: 'Book a TMT',
            title: 'Schedule Your <span class="text-[#F98D1B]">TMT Test</span>',
            description: [
                'To book your TMT test at VJ Scans & Labs, you can call our Chennai center directly or schedule online. Our cardiac testing facility is equipped with modern treadmill equipment and continuous monitoring systems.',
                'We recommend booking in advance to secure your preferred time slot. Our team will provide specific preparation instructions based on your medical history.'
            ],
            image: section2banner
        },
        {
            name: "FAQ's",
            title: 'Common <span class="text-[#F98D1B]">TMT Questions</span>',
            description: [
                'Q: Is the TMT test safe? A: Yes, TMT is generally safe when performed under medical supervision. Our team monitors you throughout the test and stops immediately if any concerns arise.',
                'Q: How long does a TMT take? A: The actual walking portion typically lasts 6-12 minutes, but plan for about 30-45 minutes total including preparation, monitoring, and recovery time.'
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