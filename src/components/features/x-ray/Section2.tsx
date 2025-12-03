'use client';

import React, { useState } from 'react';
import { motion } from "motion/react";
import Image from 'next/image';
import section2banner from '../../../../public/images/xray/section2/xray-section2.avif';

const Section2 = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [hoveredTab, setHoveredTab] = useState<number | null>(null);

    const tabContent = [
        {
            name: 'About the scan',
            title: 'What  is an <span class="text-[#F98D1B]">X-Ray?</span>',
            description: [
                'An X-ray is a quick and painless diagnostic test that uses safe levels of radiation to produce images of the inside of your body  helping doctors examine bones, chest, joints, and internal organs.',
                'Our digital X-ray systems deliver crystal-clear images instantly, allowing for faster diagnosis, minimal radiation exposure, and easy report sharing.'

            ],
            image: section2banner
        },
        {
            name: 'List of Parameters',
            title: 'Comprehensive <span class="text-[#F98D1B]">Parameters</span>',
            description: [
                'Our X-ray scans cover a wide range of diagnostic needs. We examine various body parts including bones, chest, joints, and internal organs.',
                'Each scan is performed with precision, providing clear images that assist in accurate diagnosis and treatment planning.'
            ],
            image: section2banner
        },
        {
            name: 'Scan Preparation',
            title: 'How to <span class="text-[#F98D1B]">Prepare</span>',
            description: [
                'Preparation for an X-ray scan is usually minimal. You may be asked to remove jewelry, eyeglasses, or any metal objects that could interfere with the images.',
                'Inform our staff if you are pregnant or suspect you might be, as special precautions may be needed.'
            ],
            image: section2banner
        },
        {
            name: 'Book an Appointment',
            title: 'Easy <span class="text-[#F98D1B]">Booking</span>',
            description: [
                'Booking an appointment is simple and convenient. You can book online through our website or call our customer care number.',
                'We offer flexible scheduling options to suit your convenience. Walk-ins are also welcome, but appointments are recommended to minimize waiting time.'
            ],
            image: section2banner
        },
        {
            name: "FAQ's",
            title: 'Common <span class="text-[#F98D1B]">Questions</span>',
            description: [
                'Q: Is an X-ray safe? A: Yes, X-rays use a small amount of radiation to create images. The benefits of an accurate diagnosis usually outweigh the minimal risks.',
                'Q: How long does an X-ray take? A: Most X-ray procedures are very quick, often taking only a few minutes from start to finish, depending on the area being scanned.'
            ],
            image: section2banner
        },
    ];

    return (
        <section className="font-sans w-full max-w-7xl mx-auto px-2 md:px-0  py-12 md:py-16">
            {/* Navigation Tabs */}
            <div className="flex justify-center mb-12 md:mb-16">
                <div
                    className="flex flex-col md:flex-row flex-wrap py-2 px-2 justify-center gap-1 bg-[linear-gradient(90deg,#FFEBD6_0%,#D1EBFF_100%)] rounded-[20px] md:rounded-full p-1 w-full md:w-auto"
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
                            <span className="relative z-10 text-[22px] md:text-[17px] ">{tab.name}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Area */}
            <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-10 lg:gap-16 px-2 md:px-0 lg:px-0">


                {/* Text Content */}
                <div className="flex-1 max-w-2xl">
                    <h2
                        className="text-xl md:text-4xl lg:text-[46px] font-bold  text-[#0961A1] mb-6"
                        dangerouslySetInnerHTML={{ __html: tabContent[activeTab].title }}
                    />
                    <div className="space-y-6 md:text-lg font-semibold leading-relaxed">
                        {tabContent[activeTab].description.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </div>
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

            </div>
        </section>
    );
};

export default Section2;