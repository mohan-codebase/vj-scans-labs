'use client';

import React, { useState } from 'react';
import { motion } from "motion/react";
import Image from 'next/image';
import section2banner from '../../../../../public/images/ctscan/section2/img1.webp';

const Section2 = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [hoveredTab, setHoveredTab] = useState<number | null>(null);

    const tabContent = [
        {
            name: 'About the scan',
            title: 'What exactly happens in a <span class="text-[#F98D1B]">CT scan?</span>',
            description: [
                'A CT (Computed Tomography) Scan is a painless imaging test that uses advanced X-ray technology to create detailed pictures of internal organs, bones, and tissues. It helps doctors detect injuries, infections, and other health conditions with greater accuracy than traditional X-rays.',
                'Our state-of-the-art CT machines capture precise images quickly and safely making your experience comfortable and stress-free.'
            ],
            image: section2banner
        },
        {
            name: 'List of Parameters',
            title: 'CT Scan <span class="text-[#F98D1B]">Capabilities</span>',
            description: [
                'Our multislice CT scanner at VJ Scans & Labs performs comprehensive imaging of the head, neck, chest, abdomen, pelvis, and extremities. We offer both contrast-enhanced and non-contrast studies based on clinical requirements.',
                'CT scans excel at detecting fractures, tumors, infections, internal bleeding, and vascular conditions. Our advanced imaging protocols provide detailed cross-sectional views that help doctors plan surgical procedures and monitor treatment response.'
            ],
            image: section2banner
        },
        {
            name: 'Scan Preparation',
            title: 'Preparing for Your <span class="text-[#F98D1B]">CT Scan</span>',
            description: [
                'CT scan preparation varies by the area being examined. For abdominal or pelvic CT scans, you may need to fast for 4-6 hours and drink a contrast solution. For head or chest CTs, minimal preparation is needed.',
                'Wear comfortable clothing without metal zippers or buttons. Remove all jewelry, eyeglasses, hearing aids, and dentures before the scan. If contrast dye is required, inform our staff about any allergies or kidney conditions.'
            ],
            image: section2banner
        },
        {
            name: 'Book an Appointment',
            title: 'Book Your <span class="text-[#F98D1B]">CT Scan</span>',
            description: [
                'Schedule your CT scan at VJ Scans & Labs by calling our Chennai center or booking online. Our multislice CT scanner is available throughout the day for both scheduled and emergency cases.',
                'We recommend advance booking to ensure your preferred time slot and to allow our team to provide specific preparation instructions based on the type of CT scan you need.'
            ],
            image: section2banner
        },
        {
            name: "FAQ's",
            title: 'Common <span class="text-[#F98D1B]">Questions</span>',
            description: [
                'Q: Is a CT scan safe? A: Yes, CT scans are generally safe. The benefits of an accurate diagnosis far outweigh the small risk of radiation exposure.',
                'Q: How long does it take? A: The scan itself usually takes only a few minutes, but the total time including preparation may be around 30 minutes.'
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