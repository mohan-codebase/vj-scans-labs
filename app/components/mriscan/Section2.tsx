'use client';

import React, { useState } from 'react';
import { motion } from "motion/react";
import Image from 'next/image';
import section2banner from '../../../public/images/mriscan/section2/mri-section2.avif';

const Section2 = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [hoveredTab, setHoveredTab] = useState<number | null>(null);

    const tabContent = [
        {
            name: 'About the scan',
            title: 'What  is an <span class="text-[#F98D1B]">MRI Scan?</span>',
            description: [
                'MRI (Magnetic Resonance Imaging) is a painless imaging test that uses advanced X-ray technology to create detailed pictures of internal organs, bones, and tissues. It helps doctors detect injuries, infections, and other health conditions with greater accuracy than traditional X-rays.',
                'MRI scans are especially useful for diagnosing conditions related to the brain, spine, joints, heart, and abdomen with exceptional clarity.',
                'At VJ Scans & Labs, our 1.5 Tesla MRI system ensures crystal-clear images with shorter scan times, advanced safety features, and a comfortable experience for every patient.'

            ],
            image: section2banner
        },
        {
            name: 'List of Parameters',
            title: 'Comprehensive <span class="text-[#F98D1B]">Parameters</span>',
            description: [
                'Our MRI scans cover a wide range of parameters to ensure a thorough diagnosis. We examine various body parts including the brain, spine, joints, and abdomen.',
                'Each scan is tailored to the specific needs of the patient, providing detailed insights that assist in accurate treatment planning.'
            ],
            image: section2banner
        },
        {
            name: 'Scan Preparation',
            title: 'How to <span class="text-[#F98D1B]">Prepare</span>',
            description: [
                'Preparation for an MRI scan often involves removing all metal objects, such as jewelry, watches, and hearing aids. You may also need to change into a hospital gown.',
                'Inform our staff if you have any metal implants, pacemakers, or claustrophobia, as special precautions may be needed.'
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
                'Q: Is an MRI scan safe? A: Yes, MRI scans are generally safe as they do not use ionizing radiation. They use strong magnetic fields and radio waves.',
                'Q: How long does it take? A: The duration of an MRI scan can vary from 30 minutes to an hour or more, depending on the area being scanned and the images required.'
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
                        className="text-xl md:text-4xl lg:text-[46px] font-bold  text-[#0961A1] mb-6"
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