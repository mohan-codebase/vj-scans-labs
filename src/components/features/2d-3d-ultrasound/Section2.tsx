'use client';

import React, { useState } from 'react';
import { motion } from "motion/react";
import Image from 'next/image';
import section2banner from '../../../../public/images/2d-3d-ultrasound/section2/section2.avif';

const Section2 = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [hoveredTab, setHoveredTab] = useState<number | null>(null);

    const tabContent = [
        {
            name: 'About the scan',
            title: 'What is <span class="text-[#F98D1B]">Ultrasonography?</span>',
            description: [
                'Ultrasonography (Ultrasound) is a non-invasive, radiation-free imaging technique that uses high-frequency sound waves to capture real-time images of internal organs, tissues, and developing babies.',
                'It helps doctors diagnose a wide range of conditions related to the abdomen, pelvis, thyroid, heart, and pregnancy safely and painlessly.',
                'At VJ Scans & Labs, our 2D, 3D, and Doppler ultrasound systems deliver crystal-clear images for accurate evaluation and confident diagnosis.'
            ],
            image: section2banner
        },
        {
            name: 'Types of Scans',
            title: 'Our <span class="text-[#F98D1B]">Ultrasound Services</span>',
            description: [
                'We offer a comprehensive range of ultrasound services including 2D, 3D, 4D, and Doppler scans. Each type provides unique insights into your health.',
                '2D ultrasounds are standard for general imaging, 3D/4D offer detailed views of fetal development, and Doppler scans assess blood flow.'
            ],
            image: section2banner
        },
        {
            name: 'Scan Preparation',
            title: 'How to <span class="text-[#F98D1B]">Prepare</span>',
            description: [
                'Preparation for an ultrasound scan varies depending on the area being examined. You might be asked to fast or drink water to fill your bladder.',
                'Specific instructions will be provided at the time of booking to ensure the best possible image quality for your scan.'
            ],
            image: section2banner
        },
        {
            name: 'Book an Appointment',
            title: 'Easy <span class="text-[#F98D1B]">Booking</span>',
            description: [
                'Booking your ultrasound appointment is simple and convenient. You can schedule online through our website or by calling our dedicated customer service.',
                'We offer flexible scheduling to accommodate your needs, and while walk-ins are welcome, appointments are recommended for minimal wait times.'
            ],
            image: section2banner
        },
        {
            name: "FAQ's",
            title: 'Common <span class="text-[#F98D1B]">Questions</span>',
            description: [
                'Q: Is ultrasound safe? A: Yes, ultrasound uses sound waves, not radiation, making it very safe for all patients, including pregnant women.',
                'Q: How long does an ultrasound take? A: Most ultrasound scans are completed within 15-30 minutes, though some specialized scans may take longer.'
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