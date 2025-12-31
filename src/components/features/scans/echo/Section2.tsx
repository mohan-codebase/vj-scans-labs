'use client';

import React, { useState } from 'react';
import { motion } from "motion/react";
import Image from 'next/image';
import section2banner from '../../../../../public/images/echo/section2/echo-about-img.avif';

const Section2 = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [hoveredTab, setHoveredTab] = useState<number | null>(null);

    const tabContent = [
        {
            name: 'About the scan',
            title: 'What is <br/><span class="text-[#F98D1B]">ECHO(Echocardiography)?</span>',
            description: [
                'Echocardiography (Echo) assesses the heart’s structure and function using sound waves. A gel is applied to the chest, and a transducer creates real-time images of the heart. These images help doctors diagnose and monitor conditions such as valve disorders, congenital defects, cardiomyopathies, and pericardial effusions.',
                'Echo is recommended for symptoms like sudden breathlessness, chest pain, or palpitations, and for patients with known heart disease. It also helps track treatment response and check for complications after a heart attack or surgery.',
            ],
            image: section2banner
        },
        {
            name: 'Types of Echo Scans',
            title: 'Echocardiography <br/><span class="text-[#F98D1B]">Services</span>',
            description: [
                'VJ Scans & Labs provides comprehensive echocardiography including Transthoracic Echo (TTE) for standard heart imaging, Transesophageal Echo (TEE) for detailed views of heart valves and chambers, and Stress Echo to assess cardiac function during exercise.',
                'TTE uses a probe on the chest wall and is the most common type. TEE provides superior images by placing the probe in the esophagus, ideal for detecting blood clots, valve problems, and congenital defects. Stress echo helps identify coronary artery disease by monitoring heart function during physical activity.'
            ],
            image: section2banner
        },
        {
            name: 'Echo Preparation',
            title: 'Preparing for Your <br/><span class="text-[#F98D1B]">Echo Scan</span>',
            description: [
                'For a standard Transthoracic Echo (TTE), no special preparation is needed. You can eat, drink, and take medications normally. Wear comfortable clothing that allows access to your chest.',
                'If you\'re having a Transesophageal Echo (TEE), you\'ll need to fast for 6-8 hours before the procedure. For Stress Echo, wear comfortable exercise clothes and avoid heavy meals or caffeine beforehand. Our team will provide detailed instructions when you book your appointment.'
            ],
            image: section2banner
        },
        {
            name: 'Book an Echo',
            title: 'Book Your <span class="text-[#F98D1B]">Echocardiogram</span>',
            description: [
                'Schedule your echo scan at VJ Scans & Labs in Chennai by calling our center or booking through our website. Echocardiograms require 30-60 minutes, so appointments help ensure timely service.',
                'Our cardiac imaging department uses advanced color doppler technology. We recommend booking in advance, especially for specialized echo studies like TEE or stress echo, which may require specific preparation.'
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