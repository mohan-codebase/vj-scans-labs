'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from "motion/react";
import Image from 'next/image';
import { FaHandPointRight } from "react-icons/fa";
import section2banner from '../../../../../public/images/mriscan/section2/mri-section2.avif';

const Section2 = () => {
    // Top-level Navigation State
    const [activeTopTab, setActiveTopTab] = useState(0);
    const [hoveredTopTab, setHoveredTopTab] = useState<number | null>(null);

    // Sidebar Navigation State (for "About the scan" tab)
    const [activeSidebarTab, setActiveSidebarTab] = useState(0);

    // Data for Sidebar Tabs (Digital, Screening, Diagnostic)
    const sidebarContent = [
        {
            name: 'Digital Mammography',
            title: 'Digital Mammography',
            description: [
                'In digital mammography, also referred to as digital breast tomosynthesis, a series of low-dose X-rays is used to form a 3D breast image.',
                'The system captures the breast from multiple angles to generate a detailed three-dimensional reconstruction.',
                'Digital mammograms can take slightly longer to perform than 2D scans.',
                'This is because capturing additional image slices for 3D imaging requires more time. A dedicated mammography unit uses low-dose radiation to examine breast tissue.',
                'Mammograms are highly effective tools for early detection and diagnosis of breast abnormalities and diseases.'
            ],
            image: section2banner
        },
        {
            name: 'Screening Mammograms',
            title: 'Screening Mammograms',
            description: [
                'Screening mammograms are routine checks for women who have no signs or symptoms of breast cancer.',
                'They are the best way to catch breast cancer early, when it is most treatable.',
                'It is generally recommended for women starting at age 40 to have annual screening mammograms.'
            ],
            image: section2banner
        },
        {
            name: 'Diagnostic Mammograms',
            title: 'Diagnostic Mammograms',
            description: [
                'Diagnostic mammograms are used to investigate suspicious breast changes, such as a lump, pain, nipple thickening or discharge, or a change in breast size or shape.',
                'They are also used to evaluate abnormal findings on a screening mammogram.',
                'Diagnostic mammograms provide more detailed images from more angles than screening mammograms.'
            ],
            image: section2banner
        },
    ];

    // Data for Top Tabs 2-5
    const topTabContent = [
        { name: 'About the scan', image: section2banner }, // Special Render
        {
            name: 'List of Parameters',
            title: 'Comprehensive <span class="text-[#F98D1B]">Parameters</span>',
            description: [
                'Our mammography services cover a wide range of screening and diagnostic needs.',
                'We focus on high-resolution imaging to detect even the smallest abnormalities.',
                'Parameters involve detailed views of breast tissue structure, density, and any calcifications.'
            ],
            image: section2banner
        },
        {
            name: 'Scan Preparation',
            title: 'How to <span class="text-[#F98D1B]">Prepare</span>',
            description: [
                'Do not wear deodorant, talcum powder, or lotion under your arms or on your breasts on the day of the exam. These can appear as calcium spots on the mammogram.',
                'Describe any breast symptoms or problems to the technologist performing the exam.',
                'If possible, obtain prior mammograms and make them available to the radiologist at the time of the current exam.'
            ],
            image: section2banner
        },
        {
            name: 'Book an Appointment',
            title: 'Easy <span class="text-[#F98D1B]">Booking</span>',
            description: [
                'Booking your mammogram is simple. You can schedule online or call our dedicated line.',
                'We offer flexible scheduling options to suit your convenience. Early detection saves lives, so book your screening today.'
            ],
            image: section2banner
        },
        {
            name: "FAQ's",
            title: 'Common <span class="text-[#F98D1B]">Questions</span>',
            description: [
                'Q: Is a mammogram painful? A: Some women find the compression uncomfortable, but it lasts only a few seconds.',
                'Q: How often should I get one? A: Consult your doctor, but annual screenings are often recommended starting at age 40.'
            ],
            image: section2banner
        },
    ];

    return (
        <section className="font-sans w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16">
            {/* Top Navigation Tabs */}
            <div className="flex justify-center mb-12 md:mb-16">
                <div
                    className="flex flex-col md:flex-row flex-wrap py-2 px-2 justify-center gap-1 bg-[linear-gradient(90deg,#FFEBD6_0%,#D1EBFF_100%)] rounded-[20px] md:rounded-full p-1 w-full md:w-auto"
                    onMouseLeave={() => setHoveredTopTab(null)}
                >
                    {topTabContent.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTopTab(index)}
                            onMouseEnter={() => setHoveredTopTab(index)}
                            className="relative px-4 py-2 rounded-full text-sm md:text-base font-semibold w-full md:w-auto transition-colors duration-200"
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                color: activeTopTab === index ? '#ffffff' : '#0961A1',
                            }}
                        >
                            {activeTopTab === index && (
                                <motion.div
                                    layoutId="active-top-tab-bg"
                                    className="absolute inset-0 h-full w-full rounded-full bg-[#0961A1] shadow-md"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            {hoveredTopTab === index && activeTopTab !== index && (
                                <motion.div
                                    layoutId="hover-top-tab-bg"
                                    className="absolute inset-0 h-full w-full rounded-full bg-white/40 backdrop-blur-md border border-white/20 shadow-sm"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10 text-[22px] md:text-[17px] ">{tab.name}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Content Area */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTopTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                >
                    {activeTopTab === 0 ? (
                        // TAB 1: SIDEBAR LAYOUT (About the scan)
                        <div className="bg-[#F8FBFF] rounded-[30px] p-6 md:p-8 lg:p-10 shadow-sm border border-gray-100 flex flex-col lg:flex-row gap-8 lg:gap-12">
                            {/* Sidebar Navigation */}
                            <div className="w-full lg:w-1/3 flex flex-col gap-4">
                                {sidebarContent.map((tab, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveSidebarTab(index)}
                                        className={`w-full text-left px-6 py-4 rounded-xl text-lg font-medium transition-all duration-300 ${activeSidebarTab === index
                                            ? 'bg-[#0961A1] text-white shadow-lg'
                                            : 'bg-white text-[#4B5563] hover:bg-gray-50'
                                            }`}
                                    >
                                        {tab.name}
                                    </button>
                                ))}
                            </div>

                            {/* Sidebar Content */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeSidebarTab}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full lg:w-2/3 flex flex-col lg:flex-row gap-8 items-start"
                                >
                                    {/* Text */}
                                    <div className="flex-1 space-y-6">
                                        {sidebarContent[activeSidebarTab].description.map((point, i) => (
                                            <div key={i} className="flex gap-4 items-start">
                                                <div className="mt-1 shrink-0 text-[#F98D1B]">
                                                    <FaHandPointRight size={20} />
                                                </div>
                                                <p className="text-[#374151] text-base md:text-lg leading-relaxed">
                                                    {point}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Image */}
                                    <div className="w-full lg:w-[40%] shrink-0">
                                        <div className="relative rounded-2xl overflow-hidden shadow-md aspect-4/5 lg:aspect-auto h-full min-h-[300px]">
                                            <Image
                                                src={sidebarContent[activeSidebarTab].image}
                                                alt={sidebarContent[activeSidebarTab].name}
                                                fill
                                                className="object-cover"
                                                placeholder="blur"
                                            />
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    ) : (
                        // TABS 2-5: STANDARD LAYOUT
                        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-10 lg:gap-16 px-2 md:px-0">
                            {/* Image */}
                            <div className="flex-1 w-full max-w-2xl">
                                <div className="relative rounded-[30px] overflow-hidden shadow-xl aspect-video lg:aspect-auto h-full min-h-[300px] lg:min-h-[400px]">
                                    <Image
                                        src={topTabContent[activeTopTab].image}
                                        alt={topTabContent[activeTopTab].name}
                                        fill
                                        className="object-cover"
                                        placeholder="blur"
                                    />
                                </div>
                            </div>

                            {/* Text */}
                            <div className="flex-1 max-w-2xl">
                                <h2
                                    className="text-xl md:text-4xl lg:text-[46px] font-bold text-[#0961A1] mb-6"
                                    dangerouslySetInnerHTML={{ __html: topTabContent[activeTopTab].title! }}
                                />
                                <div className="space-y-6 md:text-lg font-semibold leading-relaxed text-[#374151]">
                                    {topTabContent[activeTopTab].description!.map((paragraph, index) => (
                                        <p key={index}>{paragraph}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>
        </section>
    );
};

export default Section2;