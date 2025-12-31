'use client';

import React, { useState } from 'react';
import { motion } from "motion/react";
import Image from 'next/image';
import section2banner from '../../../../../public/images/mriscan/section2/mri-section2.avif';

const Section2 = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [hoveredTab, setHoveredTab] = useState<number | null>(null);

    const tabContent = [
        {
            name: 'About the scan',
            title: 'What  is an <span class="text-[#F98D1B]">MRI Scan?</span>',
            description: [
                'MRI (Magnetic Resonance Imaging) is a painless, non-invasive imaging technique that uses powerful magnetic fields and radio waves to create detailed pictures of internal organs, soft tissues, and structures. Unlike X-rays or CT scans, MRI does not use ionizing radiation, making it a safer option for repeated imaging.',
                'MRI scans are especially useful for diagnosing conditions related to the brain, spine, joints, muscles, heart, and abdomen with exceptional clarity and detail.',
                'At VJ Scans & Labs in Chennai, our 1.5 Tesla MRI system ensures crystal-clear images with shorter scan times, advanced safety features, and a comfortable experience for every patient.'

            ],
            image: section2banner
        },
        {
            name: 'List of Parameters',
            title: 'MRI Imaging <span class="text-[#F98D1B]">Capabilities</span>',
            description: [
                'Our 1.5 Tesla MRI system at VJ Scans & Labs performs detailed imaging of the brain, spine, joints, muscles, abdomen, pelvis, and blood vessels. We offer both contrast and non-contrast studies with various imaging sequences.',
                'MRI excels at visualizing soft tissues, detecting tumors, evaluating joint injuries, assessing brain and spinal cord conditions, and identifying vascular abnormalities. Our advanced protocols provide high-resolution images that help doctors make precise diagnoses and plan treatments.'
            ],
            image: section2banner
        },
        {
            name: 'Scan Preparation',
            title: 'Preparing for Your <span class="text-[#F98D1B]">MRI Scan</span>',
            description: [
                'Before your MRI at VJ Scans & Labs, remove all metal objects including jewelry, watches, hearing aids, eyeglasses, hairpins, and clothing with metal zippers or buttons. You\'ll be asked to change into a hospital gown to ensure no metal interferes with the magnetic field.',
                'Crucially, inform our staff about any metal implants, pacemakers, cochlear implants, or metal fragments in your body. Also mention if you have claustrophobia, as we can discuss options like open MRI or sedation to help you feel more comfortable during the scan.'
            ],
            image: section2banner
        },
        {
            name: 'Book an Appointment',
            title: 'Schedule Your <span class="text-[#F98D1B]">MRI Scan</span>',
            description: [
                'Book your MRI scan at VJ Scans & Labs by calling our Chennai center or scheduling online. MRI scans typically take 30-60 minutes, so advance booking ensures your preferred time slot.',
                'Our 1.5 Tesla MRI system is available throughout the day. We strongly recommend appointments to avoid long waits, especially for specialized MRI studies of the brain, spine, or joints.'
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