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
            title: 'Digital X-Ray <span class="text-[#F98D1B]">Services</span>',
            description: [
                'Our digital X-ray facility at VJ Scans & Labs performs imaging of the chest, bones, joints, spine, and abdomen. Digital technology provides instant, high-quality images with lower radiation exposure compared to traditional film X-rays.',
                'X-rays are essential for diagnosing fractures, pneumonia, lung conditions, joint dislocations, and bone infections. Our digital system allows immediate image review, easy sharing with doctors, and precise measurements for treatment planning.'
            ],
            image: section2banner
        },
        {
            name: 'Scan Preparation',
            title: 'Preparing for Your <span class="text-[#F98D1B]">X-Ray</span>',
            description: [
                'X-ray preparation is minimal. Wear comfortable clothing without metal zippers, buttons, or decorations. You\'ll be asked to remove jewelry, eyeglasses, watches, and any metal objects from the area being imaged.',
                'If you are pregnant or think you might be pregnant, inform our staff immediately. While X-rays use minimal radiation, we take extra precautions for expectant mothers, including using lead shielding or considering alternative imaging methods when appropriate.'
            ],
            image: section2banner
        },
        {
            name: 'Book an Appointment',
            title: 'Book Your <span class="text-[#F98D1B]">X-Ray</span>',
            description: [
                'Schedule your digital X-ray at VJ Scans & Labs in Chennai by calling our center or booking online. X-rays are quick procedures, usually completed in just a few minutes.',
                'Our digital X-ray facility is open 24/7, making it convenient for walk-in patients needing urgent imaging for injuries or chest conditions. Appointments help reduce wait times during busy periods.'
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